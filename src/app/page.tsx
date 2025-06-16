'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseList } from '@/components/CourseList';
import { AddCourseForm } from '@/components/AddCourseForm';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";

interface Course {
  id: number;
  name: string;
}

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: "Data Structures" },
    { id: 2, name: "Algorithms" },
    { id: 3, name: "System Design" },
  ]);
  const [question, setQuestion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handlePractice = async (course: Course) => {
    setSelectedCourse(course);
    setQuestion(null);
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/generate-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course: course.name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate question");
      }

      if (!data.question) {
        throw new Error("No question was generated");
      }

      setQuestion(data.question);
    } catch (err) {
      console.error("Error generating question:", err);
      setError(err instanceof Error ? err.message : "Failed to load question. Check API key.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddCourse = (courseName: string) => {
    const newCourse = {
      id: Date.now(),
      name: courseName,
    };
    setCourses([...courses, newCourse]);
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Interview Practice App
        </h1>

        <div className="space-y-8">
          <AddCourseForm
            onAddCourse={handleAddCourse}
            existingCourses={courses.map((course) => course.name)}
          />

          <CourseList
            courses={courses}
            onPractice={handlePractice}
            selectedCourse={selectedCourse}
          />

          {loading && (
            <div className="flex justify-center items-center py-8">
              <Spinner size="lg" />
            </div>
          )}

          {question && !loading && (
            <Card className="mt-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Question for {selectedCourse?.name}
                </h2>
                <p className="text-lg">{question}</p>
              </CardContent>
            </Card>
          )}

          {error && !loading && (
            <Alert variant="destructive" className="mt-8">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </main>
  );
}
