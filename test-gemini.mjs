import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  try {
    const { text } = await generateText({
      model: google('gemini-3.5-flash'),
      prompt: 'Say hello!',
    });
    console.log('Success:', text);
  } catch (err) {
    console.error('Error:', err);
  }
}
main();
