import { GoogleGenerativeAI } from "@google/generative-ai";

// Debug logging to check environment variables
console.log("GEMINI_API_KEY present:", !!process.env.GEMINI_API_KEY);

if (!process.env.GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is not set in environment variables");
  throw new Error("Missing GEMINI_API_KEY environment variable");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateQuestion(course: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = `Generate a beginner-friendly interview question for ${course}. 
    The question should be:
    1. Clear and easy to understand
    2. Focus on fundamental concepts
    3. Not too complex or advanced
    4. Suitable for entry-level positions
    5. Include a brief explanation of what the interviewer is looking for
    
    Format the response as:
    Question: [The question]
    What we're looking for: [Brief explanation]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error("No response from the model");
    }
    
    return text;
  } catch (error) {
    console.error("Error generating question:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to generate question: ${error.message}`);
    }
    throw new Error("Failed to generate question. Please try again.");
  }
}

export async function evaluateAnswer(question: string, answer: string): Promise<{ score: number; feedback: string }> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = `Evaluate this interview answer. Be encouraging and constructive in your feedback.

    Question: ${question}
    Answer: ${answer}

    Provide:
    1. A score out of 10
    2. Specific positive points about the answer
    3. Areas for improvement
    4. Tips for a better answer
    5. Example of a good answer structure

    Format the response as:
    Score: [number]/10
    Feedback: [Your detailed feedback]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error("No response from the model");
    }

    // Parse the response to extract score and feedback
    const scoreMatch = text.match(/Score:\s*(\d+)/);
    const score = scoreMatch ? parseInt(scoreMatch[1]) : 5;
    const feedback = text.replace(/Score:\s*\d+\/10\s*/, "").trim();

    return { score, feedback };
  } catch (error) {
    console.error("Error evaluating answer:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to evaluate answer: ${error.message}`);
    }
    throw new Error("Failed to evaluate answer. Please try again.");
  }
} 