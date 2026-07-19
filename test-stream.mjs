import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  const result = streamText({
    model: google('gemini-3.5-flash'),
    prompt: 'hello',
  });
  console.log(Object.keys(result));
}
main();
