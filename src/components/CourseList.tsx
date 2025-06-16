import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Course {
  id: string;
  name: string;
}

interface CourseListProps {
  courses: Course[];
  onPractice: (courseName: string) => void;
  loading?: boolean;
}

export function CourseList({ courses, onPractice, loading = false }: CourseListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <Card 
          key={course.id}
          className="transition-shadow duration-200 hover:shadow-md"
        >
          <CardHeader>
            <CardTitle className="text-xl font-semibold">{course.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => onPractice(course.name)}
              disabled={loading}
              className="w-full bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
              aria-label={`Practice for ${course.name}`}
            >
              {loading ? 'Generating...' : 'Practice'}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 