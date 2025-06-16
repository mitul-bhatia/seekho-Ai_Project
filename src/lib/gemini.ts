import { GoogleGenerativeAI } from "@google/generative-ai";

// Debug logging to check environment variables
console.log("GEMINI_API_KEY present:", !!process.env.GEMINI_API_KEY);

if (!process.env.GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is not set in environment variables");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function generateInterviewQuestion(course: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = `Generate a challenging interview question for ${course}. The question should be specific to the field and test both technical knowledge and problem-solving abilities. Format the response as a single question without any additional text or numbering.`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const question = response.text();
    
    if (!question) {
      throw new Error("No question was generated");
    }
    
    return question;
  } catch (error) {
    console.error("Error generating question:", error);
    throw error;
  }
}

export async function scoreAnswer(question: string, answer: string): Promise<number> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = `Evaluate this answer for the question "${question}": "${answer}". 
    Consider the following criteria:
    1. Technical accuracy
    2. Clarity of explanation
    3. Problem-solving approach
    4. Communication skills
    
    Return only a number from 0 to 10 representing the overall score. Do not include any other text or explanation.`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const scoreText = response.text().trim();
    
    // Extract the first number from the response
    const scoreMatch = scoreText.match(/\d+/);
    if (!scoreMatch) {
      throw new Error("Could not parse score from response");
    }
    
    const score = parseInt(scoreMatch[0], 10);
    if (isNaN(score) || score < 0 || score > 10) {
      throw new Error("Invalid score received");
    }
    
    return score;
  } catch (error) {
    console.error("Error scoring answer:", error);
    throw error;
  }
}

export async function generateFeedback(question: string, answer: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = `Provide constructive feedback for this answer to the question "${question}": "${answer}".
    Focus on:
    1. What was done well
    2. Areas for improvement
    3. Specific suggestions for better answers
    4. Technical accuracy and completeness
    
    Keep the feedback concise, professional, and actionable.`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const feedback = response.text();
    
    if (!feedback) {
      throw new Error("No feedback was generated");
    }
    
    return feedback;
  } catch (error) {
    console.error("Error generating feedback:", error);
    throw error;
  }
} 