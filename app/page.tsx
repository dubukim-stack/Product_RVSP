import { Plane, BookOpen, Users, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Elevate Your Aviation Career
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            Comprehensive education for pilots, mechanics, and air traffic controllers. Master the skies with our expert-led courses.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Explore Courses
            </a>
            <a href="/dashboard" className="bg-blue-700 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors border border-blue-500">
              Go to Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <Plane size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Content</h3>
              <p className="text-gray-600">Curated by industry veterans and licensed professionals.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Structured Path</h3>
              <p className="text-gray-600">Step-by-step learning modules from basics to advanced levels.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p className="text-gray-600">Join thousands of students and share knowledge in forums.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-4">
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Certificates</h3>
              <p className="text-gray-600">Earn recognized certificates upon course completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Courses Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Popular Courses</h2>
              <p className="text-gray-600 mt-2">Start your journey with these high-rated programs.</p>
            </div>
            <a href="/courses" className="text-blue-600 font-semibold hover:underline">View All</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Pilot Training</span>
                  <h3 className="text-xl font-bold mt-2 mb-4">Advanced Aerodynamics {i}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <span className="mr-4">12 Modules</span>
                    <span>15h Total</span>
                  </div>
                  <button className="w-full py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
