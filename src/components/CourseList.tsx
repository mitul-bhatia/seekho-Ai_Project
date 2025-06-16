"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface Course {
  id: number;
  name: string;
}

interface CourseListProps {
  courses: Course[];
  onDelete: (id: number) => void;
}

const PREDEFINED_COURSES = [
  "Software Engineering",
  "Data Science",
  "Product Management",
];

export function CourseList({ courses, onDelete }: CourseListProps) {
  const [courseToDelete, setCourseToDelete] = useState<Course | null>(null);

  const isPredefined = (courseName: string) => PREDEFINED_COURSES.includes(courseName);

  if (courses.length === 0) {
    return (
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardContent className="pt-6">
          <p className="text-center text-gray-500 dark:text-gray-400">
            No courses added yet. Add a course to get started!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      {courses.map((course) => (
        <Card key={course.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {course.name}
              </h3>
              <div className="flex gap-2">
                <Link href={`/courses/${encodeURIComponent(course.name)}`}>
                  <Button
                    className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                    aria-label={`Practice ${course.name}`}
                  >
                    Practice
                  </Button>
                </Link>
                <AlertDialog>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="destructive"
                            className="bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/50 dark:text-red-400 dark:hover:bg-red-900"
                            aria-label={`Delete ${course.name}`}
                          >
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Delete course</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <AlertDialogContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-gray-900 dark:text-white">
                        Delete Course
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-gray-600 dark:text-gray-400">
                        Are you sure you want to delete {course.name}? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onDelete(course.id)}
                        className="bg-red-600 text-white hover:bg-red-700 dark:bg-red-900 dark:hover:bg-red-800"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 