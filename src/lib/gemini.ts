import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "@/config/api";

// Initialize Gemini with API key
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function generateInterviewQuestion(courseName: string): Promise<string> {
  try {
    const prompt = `Generate a behavioral or technical interview question for the course: ${courseName}. 
    The question should be specific to the field and suitable for a job interview. 
    Format the response as a single question without any additional text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error("No response from Gemini API");
    }

    return text;
  } catch (error) {
    console.error("Error in generateInterviewQuestion:", error);
    throw new Error(`Failed to generate question: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
} 