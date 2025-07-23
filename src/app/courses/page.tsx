"use client";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import UserGreeting from "@/components/UserGreeting";
import { CourseList } from "@/components/CourseList";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function CoursesPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(undefined, { callbackUrl: "/courses" }); // Redirect to sign-in, then back to courses
    }
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;
  if (!session) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
        <CourseList />
      </div>
    </main>
  );
} 