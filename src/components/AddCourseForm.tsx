"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";
import { Plus } from "lucide-react";

interface AddCourseFormProps {
  onAddCourse: (courseName: string) => void; // ye  jo add kiya wah course hai woh  void bhi ho sakta hai
  
  existingCourses: string[]; // ye existingCourses hai jiske through hum existing courses ko get karen hai
}

export function AddCourseForm({ onAddCourse, existingCourses }: AddCourseFormProps) {
  const [courseName, setCourseName] = useState("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedName = courseName.trim();
    
    if (!trimmedName) {
      setError("Please enter a course name");
      return;
    }

    if (existingCourses.some(course => course.toLowerCase() === trimmedName.toLowerCase())) {
      setError("This course already exists");
      return;
    }

    onAddCourse(trimmedName);
    setCourseName("");
  };

  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label 
              htmlFor="courseName" 
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Add New Course
            </label>
            <div className="flex gap-2">
              <Input
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Enter course name..."
                className="flex-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                aria-label="Course name"
              />
              <Button
                type="submit"
                className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                aria-label="Add course"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>
          {error && (
            <Alert variant="destructive" className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800">
              {error}
            </Alert>
          )}
        </form>
      </CardContent>
    </Card>
  );
} 