"use client";

import { useState } from "react";
import { CourseList } from "@/components/CourseList";
import { AddCourseForm } from "@/components/AddCourseForm";
import { ThemeToggle } from "@/components/ThemeToggle";

interface Course {
  id: number;
  name: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: "Software Engineering" },
    { id: 2, name: "Data Science" },
    { id: 3, name: "Product Management" },
  ]);

  const handleAddCourse = (courseName: string) => {
    const newCourse = {
      id: Date.now(),
      name: courseName,
    };
    setCourses([...courses, newCourse]);
  };

  const handleDeleteCourse = (courseId: number) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto space-y-8 p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            SEEKHO
          </h1>
          <ThemeToggle />
        </div>

        <div className="space-y-6">
          <AddCourseForm
            onAddCourse={handleAddCourse}
            existingCourses={courses.map((course) => course.name)}
          />

          <CourseList
            courses={courses}
            onDelete={handleDeleteCourse}
          />
        </div>
      </div>
    </main>
  );
} 