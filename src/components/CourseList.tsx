"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { Spinner } from "@/components/Spinner";
import { AddCourseForm } from "@/components/AddCourseForm";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Star, StarOff } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Course {
  id: string;
  name: string;
  isFavorite?: boolean;
}

const PREDEFINED_COURSES = [
  "Software Engineering",
  "Data Science",
  "Product Management",
];

export function CourseList() {
  const [courses, setCourses] = useState<Course[]>(() => 
    PREDEFINED_COURSES.map(name => ({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      isFavorite: false
    }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleAddCourse = (courseName: string) => {
    const newCourse = {
      id: Date.now().toString(),
      name: courseName,
      isFavorite: false
    };
    setCourses([...courses, newCourse]);
  };

  const toggleFavorite = (courseId: string) => {
    setCourses(courses.map(course => 
      course.id === courseId 
        ? { ...course, isFavorite: !course.isFavorite }
        : course
    ));
  };

  // Sort courses: favorites first, then alphabetically
  const sortedCourses = [...courses].sort((a, b) => {
    if (a.isFavorite && !b.isFavorite) return -1;
    if (!a.isFavorite && b.isFavorite) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            SEEKHO
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>

        {error && (
          <Alert variant="destructive" className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800">
            {error}
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedCourses.map((course) => (
            <Card 
              key={course.id} 
              className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow ${
                course.isFavorite ? 'ring-2 ring-yellow-500 dark:ring-yellow-400' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <Link 
                    href={`/courses/${encodeURIComponent(course.name)}`}
                    className="flex-1 group"
                  >
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {course.name}
                    </h2>
                  </Link>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleFavorite(course.id)}
                          className="text-gray-400 hover:text-yellow-500 dark:text-gray-500 dark:hover:text-yellow-400"
                        >
                          {course.isFavorite ? (
                            <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                          ) : (
                            <StarOff className="h-5 w-5" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{course.isFavorite ? "Remove from favorites" : "Add to favorites"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="mt-4">
                  <Link href={`/courses/${encodeURIComponent(course.name)}`}>
                    <Button 
                      className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                    >
                      Practice Questions
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <AddCourseForm onAddCourse={handleAddCourse} existingCourses={courses.map(c => c.name)} />
      </div>
    </main>
  );
} 