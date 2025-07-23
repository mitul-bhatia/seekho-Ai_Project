"use client";
<<<<<<< HEAD
import UserGreeting from "@/components/UserGreeting";
=======

>>>>>>> bbadddbd0bdce7fcbeaca8543b4778dfcc64c41d
import { CourseList } from "@/components/CourseList";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
<<<<<<< HEAD
      {/* Navbar */}
      <nav className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">SEEKHO</span>
          <ThemeToggle />
        </div>
      </nav>

      {/* User Greeting */}
      <UserGreeting />

      {/* Course List */}
      <div className="max-w-4xl mx-auto space-y-8 p-8">
=======
      <div className="max-w-4xl mx-auto space-y-8 p-8">
        {/* <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            SEEKHO
          </h1>
          <ThemeToggle />
        </div> */}

>>>>>>> bbadddbd0bdce7fcbeaca8543b4778dfcc64c41d
        <CourseList />
      </div>
    </main>
  );
} 