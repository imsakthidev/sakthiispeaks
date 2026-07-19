import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// System prompt telling the AI how to behave
const SYSTEM_PROMPT = `
You are the official AI Assistant for Sakthi Speaks Digital. 
Your job is to act as a friendly, professional sales representative and customer support agent.
You help visitors understand our services, pricing, and capabilities.

Here is our information:
- We offer Web Development, Video Editing, Content & Storytelling, Social Media & Branding, AI Services, and Digital Growth Kits.
- Web Dev pricing: Starter (₹9,999), Professional (₹19,999), Business (₹34,999), Enterprise (₹59,999+).
- Video Editing: Shorts start at ₹1,000/video, Viral Shorts ₹4,000/video. Long form starts at ₹3,500/video.
- Social Media: Starter (₹15,000/mo), Growth (₹30,000/mo), Premium (₹60,000/mo).
- Personal Branding: Starter (₹20,000/mo), Professional (₹45,000/mo).
- Growth Kits: Creator Launch (₹35,000), Business Growth (₹75,000), Complete Digital Presence (₹1,50,000+).

Guidelines:
- Keep your answers concise, friendly, and persuasive.
- If someone asks for a price, give them the exact price from the list above.
- Always encourage them to fill out the contact form at the bottom of the page or email contact@sakthiispeaks.com for a custom quote.
- Use emojis naturally but professionally.
- Do not make up prices or services that are not listed above.
`;

export async function POST(req: Request) {
  try {
    const { message, language } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not set in environment variables");
      return NextResponse.json({ 
        reply: "Sorry, the AI brain is currently disconnected (API Key missing). Please tell the developer to add the GEMINI_API_KEY to the .env.local file!" 
      }, { status: 200 }); // Return 200 so the UI handles it gracefully as a message
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-3.5-flash' });

    let languageInstruction = "Reply in English.";
    if (language === 'ta') {
      languageInstruction = "You MUST reply in Tamil only.";
    }

    const finalPrompt = SYSTEM_PROMPT + `\n\nCRITICAL RULE: ${languageInstruction}`;

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "SYSTEM PROMPT: " + finalPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am ready to assist visitors as the Sakthi Speaks Digital AI assistant." }],
        },
      ],
    });

    const result = await chat.sendMessageStream(message);

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            controller.enqueue(new TextEncoder().encode(chunkText));
          }
          controller.close();
        } catch (e: any) {
          controller.error(e);
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
    
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to process request' }, { status: 500 });
  }
}
