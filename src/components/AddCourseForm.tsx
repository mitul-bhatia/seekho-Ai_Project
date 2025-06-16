'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';

interface AddCourseFormProps {
  onAddCourse: (courseName: string) => void;
  existingCourses: string[];
}

export function AddCourseForm({ onAddCourse, existingCourses }: AddCourseFormProps) {
  const [courseName, setCourseName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!courseName.trim()) {
      setError('Course name cannot be empty');
      return;
    }

    if (existingCourses.includes(courseName.trim())) {
      setError('A course with this name already exists');
      return;
    }

    onAddCourse(courseName.trim());
    setCourseName('');
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Enter course name"
            className="w-full bg-background text-foreground"
          />
        </div>
        <Button type="submit" className="w-full">
          Add Course
        </Button>
      </form>
      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
} 