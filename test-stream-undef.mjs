import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

async function main() {
  const google = createGoogleGenerativeAI({ apiKey: 'test' });
  try {
    const result = streamText({
      model: google('gemini-3.5-flash'),
      messages: undefined,
    });
    console.log('Stream created');
    const response = result.toTextStreamResponse();
    console.log('Response created', response.status);
  } catch (e) {
    console.log('Caught error:', e.message);
  }
}
main();
