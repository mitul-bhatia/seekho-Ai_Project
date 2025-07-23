

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

if (!GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is not set in environment variables');
} 