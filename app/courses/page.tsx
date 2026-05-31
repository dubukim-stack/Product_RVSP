import { courses } from "@/lib/data";
import { Search, Filter, BookOpen } from "lucide-react";

export default function CourseCatalog() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900">Course Catalog</h1>
          <p className="text-gray-600 mt-2">Explore our professional aviation training programs.</p>
          
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search for courses..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50">
              <Filter size={20} />
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group">
              <div className="h-48 bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <BookOpen size={48} className="text-blue-500" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full uppercase">
                    {course.category}
                  </span>
                  <span className="text-gray-500 text-sm">{course.level}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-6">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-sm text-gray-500">
                    <span className="font-bold text-gray-900">{course.modules.length}</span> Modules
                  </div>
                  <a 
                    href={`/courses/${course.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Details
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
