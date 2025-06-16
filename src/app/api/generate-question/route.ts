import { NextResponse } from "next/server";
import { generateInterviewQuestion } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const { course } = await request.json();

    if (!course) {
      return NextResponse.json(
        { error: "Course name is required" },
        { status: 400 }
      );
    }

    const question = await generateInterviewQuestion(course);
    return NextResponse.json({ question });
  } catch (error) {
    console.error("Error generating question:", error);
    return NextResponse.json(
      { error: "Failed to generate question. Please check your API key and try again." },
      { status: 500 }
    );
  }
} 