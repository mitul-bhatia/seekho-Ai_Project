import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Course {
  id: number;
  name: string;
}

interface CourseListProps {
  courses: Course[];
  onPractice: (course: Course) => void;
  selectedCourse: Course | null;
}

export function CourseList({ courses, onPractice, selectedCourse }: CourseListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          className={`transition-all duration-200 hover:shadow-lg ${
            selectedCourse?.id === course.id ? "ring-2 ring-primary" : ""
          }`}
        >
          <CardHeader>
            <CardTitle className="text-xl">{course.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => onPractice(course)}
              className="w-full"
              variant={selectedCourse?.id === course.id ? "default" : "outline"}
            >
              Practice
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 