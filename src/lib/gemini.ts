import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "@/config/api";

// Debug: Log if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Get API key from config
const apiKey = GEMINI_API_KEY;

// Debug: Log API key status (without exposing the key)
console.log('API Key Status:', apiKey ? 'Present' : 'Missing');

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI?.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function generateInterviewQuestion(courseName: string): Promise<string> {
  if (!genAI || !model) {
    console.error('Gemini API Configuration Error:', {
      hasGenAI: !!genAI,
      hasModel: !!model,
      environment: isBrowser ? 'browser' : 'server'
    });
    throw new Error("Gemini API is not configured. Please check your API key.");
  }

  try {
    console.log('Attempting to generate question for course:', courseName);
    
    const prompt = `Generate a behavioral or technical interview question for the course: ${courseName}. 
    The question should be specific to the field and suitable for a job interview. 
    Format the response as a single question without any additional text.`;

    console.log('Sending request to Gemini API...');
    const result = await model.generateContent(prompt);
    console.log('Received response from Gemini API');
    
    const response = await result.response;
    console.log('Processed response');
    
    const text = response.text();
    console.log('Extracted text from response');

    if (!text) {
      console.error('No text in response');
      throw new Error("No response from Gemini API");
    }

    return text;
  } catch (error) {
    console.error("Detailed error in generateInterviewQuestion:", {
      error,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      errorStack: error instanceof Error ? error.stack : undefined,
      errorName: error instanceof Error ? error.name : 'Unknown error type'
    });
    throw new Error(`Failed to generate question: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
} 