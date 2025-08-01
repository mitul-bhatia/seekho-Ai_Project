import { NextResponse } from "next/server";
import { generateQuestion, evaluateAnswer } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { course, question, answer, action } = body;

    // Validate course name
    if (!course || typeof course !== "string" || !course.trim()) {
      return NextResponse.json(
        { error: "Course name is required" },
        { status: 400 }
      );
    }

    // Check for API key
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set in environment variables");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Handle different actions
    if (action === "generate") {
      const generatedQuestion = await generateQuestion(course);
      return NextResponse.json({ question: generatedQuestion });
    } else if (action === "evaluate") {
      if (!question || !answer) {
        return NextResponse.json(
          { error: "Question and answer are required for evaluation" },
          { status: 400 }
        );
      }
      const result = await evaluateAnswer(question, answer);
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { error: "Invalid action" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error in generate-question route:", error);

    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes("API key")) {
        return NextResponse.json(
          { error: "Invalid API key configuration" },
          { status: 401 }
        );
      }
      if (error.message.includes("quota")) {
        return NextResponse.json(
          { error: "API too much exc eeded" },
          { status: 429 }
        );
      }
      if (error.message.includes("model")) {
        return NextResponse.json(
          { error: "Model not found or unavailable" },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
} 