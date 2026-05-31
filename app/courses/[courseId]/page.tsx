import { courses } from "@/lib/data";
import { ChevronRight, Clock, BookOpen, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

export default async function CourseDetail({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            <a href="/courses">Courses</a>
            <ChevronRight size={16} />
            <span>{course.category}</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">{course.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            {course.description}
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue-400" />
              <span>{course.duration} Total</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-blue-400" />
              <span>{course.modules.length} Modules</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-blue-400" />
              <span>Professional Certification</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        {/* Course Syllabus */}
        <div className="flex-grow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Syllabus</h2>
          <div className="space-y-4">
            {course.modules.map((module, index) => (
              <div key={module.id} className="border border-gray-100 rounded-xl p-6 hover:border-blue-100 transition-colors bg-gray-50/50">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-500 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{module.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">Duration: {module.duration}</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Enroll Now</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Access Type</span>
                <span className="font-semibold">Lifetime</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Language</span>
                <span className="font-semibold">English</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Quizzes</span>
                <span className="font-semibold text-green-600">Included</span>
              </div>
            </div>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Start Learning
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              Secure checkout & 100% Satisfaction Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
