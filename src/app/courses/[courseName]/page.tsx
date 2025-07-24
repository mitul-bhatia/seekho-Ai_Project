"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { Spinner } from "@/components/Spinner";
import { Textarea } from "@/components/ui/textarea";

export default function CoursePage() {
  const params = useParams();
  const courseName = decodeURIComponent(params.courseName as string);
  
  const [question, setQuestion] = useState<string>("");
  const [questionContext, setQuestionContext] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleGenerateQuestion = async () => {
    setIsLoading(true);
    setError("");
    setQuestion("");
    setQuestionContext("");
    setAnswer("");
    setScore(null);
    setFeedback("");

    try {
      const response = await fetch("/api/generate-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          course: courseName,
          action: "generate"
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate question");
      }

      if (!data.question) {
        throw new Error("No question was generated");
      }

      // Parse the response to separate question and context
      // const lines: string[] = data.question.split('\n');
      // const questionLine = lines.find((line: string) => line.startsWith('Question:'));
      // const contextLine = lines.find((line: string) => line.startsWith('What we\'re looking for:'));
      data.replace("```json\n","")
      data.replace("```\n","")
      console.log(JSON.parse(data))

      // if (questionLine) {
      //   setQuestion(questionLine.replace('Question:', '').trim());
      // }
      // if (contextLine) {
      //   setQuestionContext(contextLine.replace('What we\'re looking for:', '').trim());
      // }
    } catch (err) {
      console.log(err)
      setError(err instanceof Error ? err.message : "Failed to generate question");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;

    setIsLoading(true);
    setError("");
    setScore(null);
    setFeedback("");

    try {
      const response = await fetch("/api/generate-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course: courseName,
          question,
          answer,
          action: "evaluate"
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to evaluate answer");
      }

      if (typeof data.score !== "number" || !data.feedback) {
        throw new Error("Invalid response from server");
      }

      setScore(data.score);
      setFeedback(data.feedback);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to evaluate answer");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl mx-auto p-6 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {courseName}
          </h1>
          <Button
            onClick={handleGenerateQuestion}
            disabled={isLoading}
            className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            aria-label="Generate new question"
          >
            {isLoading ? <Spinner className="mr-2" /> : null}
            New Question
          </Button>
        </div>

        {error && (
          <Alert variant="destructive" className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800">
            {error}
          </Alert>
        )}

        {question && (
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Question:
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {question}
              </p>
              {questionContext && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    What we're looking for:
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {questionContext}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {question && (
          <form onSubmit={handleSubmitAnswer} className="space-y-4">
            <div className="space-y-2">
              <label 
                htmlFor="answer" 
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Answer
              </label>
              <Textarea
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="min-h-[200px] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                aria-label="Your answer to the question"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading || !answer.trim()}
              className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              aria-label="Submit answer"
            >
              {isLoading ? <Spinner className="mr-2" /> : null}
              Submit Answer
            </Button>
          </form>
        )}

        {score !== null && (
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Your Score
                </h2>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {score}/10
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Feedback:
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  {feedback.split('\n').map((line, index) => (
                    <p key={index} className="text-gray-700 dark:text-gray-300 ">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
} 