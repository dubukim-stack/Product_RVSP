import { courses } from "@/lib/data";
import { LayoutDashboard, BookOpen, Clock, Award } from "lucide-react";

export default function Dashboard() {
  // Mocking "enrolled" courses for the MVP
  const enrolledCourses = courses.slice(0, 2);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            <LayoutDashboard size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Courses Enrolled</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Hours Studied</p>
              <p className="text-2xl font-bold text-gray-900">12.5h</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
              <Award size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Certificates Earned</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
        <div className="grid grid-cols-1 gap-6">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-all">
              <div className="w-full md:w-48 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                <BookOpen size={32} className="text-gray-400" />
              </div>
              <div className="flex-grow w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  <span className="text-sm text-gray-500 font-medium">Progress: 45%</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full mb-6">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Next: <span className="font-semibold">{course.modules[1].title}</span></p>
                  <a 
                    href={`/learn/${course.id}/${course.modules[1].id}`}
                    className="px-6 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm"
                  >
                    Resume Course
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
