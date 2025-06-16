'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseList } from '@/components/CourseList';
import { generateInterviewQuestion } from '@/lib/gemini';

interface Course {
  id: string;
  name: string;
}

const initialCourses: Course[] = [
  { id: '1', name: 'Software Engineering' },
  { id: '2', name: 'Data Science' },
  { id: '3', name: 'Product Management' },
];

export default function Home() {
  const [courses] = useState<Course[]>(initialCourses);
  const [question, setQuestion] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  const handlePractice = async (courseName: string) => {
    try {
      setLoading(true);
      setError('');
      setQuestion('');
      setSelectedCourse(courseName);
      
      const result = await generateInterviewQuestion(courseName);
      setQuestion(result);
    } catch (err) {
      console.error('Error in handlePractice:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      setQuestion('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-center">
        Interview Practice App
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center">
        Select a course to practice interview questions
      </p>
      
      <div className="max-w-6xl mx-auto">
        <CourseList 
          courses={courses} 
          onPractice={handlePractice}
          loading={loading}
        />

        {(question || error) && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>
                {error ? 'Error' : `Question for ${selectedCourse}`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <p className="text-lg">{question}</p>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
