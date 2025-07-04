// This file should be added to .gitignore
// Never commit this file with real API keys
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

if (!GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is not set in environment variables');
} 