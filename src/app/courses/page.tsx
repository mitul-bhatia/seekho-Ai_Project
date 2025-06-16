"use client";

import { CourseList } from "@/components/CourseList";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto space-y-8 p-8">
        {/* <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            SEEKHO
          </h1>
          <ThemeToggle />
        </div> */}

        <CourseList />
      </div>
    </main>
  );
} 