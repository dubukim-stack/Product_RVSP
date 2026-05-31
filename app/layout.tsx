import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aviation Academy | Educational Platform",
  description: "Comprehensive aviation education for professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <span className="text-xl font-bold text-blue-600">Aviation Academy</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900">Home</a>
                  <a href="/courses" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Courses</a>
                  <a href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900">Dashboard</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-50 border-t mt-20">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Aviation Academy. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
