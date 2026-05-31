import { courses } from "@/lib/data";
import { ChevronLeft, ChevronRight, Play, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";

export default async function LearningModule({ params }: { params: Promise<{ courseId: string, moduleId: string }> }) {
  const { courseId, moduleId } = await params;
  const course = courses.find((c) => c.id === courseId);
  const module = course?.modules.find((m) => m.id === moduleId);

  if (!course || !module) {
    notFound();
  }

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-80 border-r bg-white overflow-y-auto hidden md:block">
        <div className="p-6 border-b">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Current Course</h2>
          <h3 className="font-bold text-gray-900">{course.title}</h3>
        </div>
        <div className="py-4">
          {course.modules.map((m, index) => (
            <a 
              key={m.id} 
              href={`/learn/${course.id}/${m.id}`}
              className={`flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors ${m.id === moduleId ? 'bg-blue-50 border-r-4 border-blue-600' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${m.id === moduleId ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                {index + 1}
              </div>
              <div className="flex-grow">
                <p className={`text-sm font-bold ${m.id === moduleId ? 'text-blue-600' : 'text-gray-900'}`}>{m.title}</p>
                <p className="text-xs text-gray-500">{m.duration}</p>
              </div>
              {index === 0 && <CheckCircle size={16} className="text-green-500" />}
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="aspect-video bg-gray-900 flex items-center justify-center text-white relative group cursor-pointer">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Play size={32} fill="white" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-sm font-medium">
                <span>00:00 / {module.duration}</span>
                <span>HD</span>
              </div>
            </div>
            <div className="p-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">{module.title}</h1>
              <div className="prose prose-blue max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  In this module, we will explore the core concepts of {module.title}. This foundational knowledge is crucial for any aviation professional in training.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">What you will learn:</h3>
                <ul className="space-y-3 list-none p-0">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Key learning point #{i} for this specific module.</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-2 px-6 py-3 text-gray-600 font-bold hover:text-gray-900 transition-colors">
              <ChevronLeft size={20} />
              Previous Module
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
              Next Module
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
