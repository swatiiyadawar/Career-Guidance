import React from 'react';

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <div className="flex items-center justify-center">
        {/* Icon Placeholder */}
        <div className="h-6 w-6 bg-gray-500 rounded-full"></div>
        <span className="sr-only">Career Compass</span>
      </div>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
          Tests
        </a>
        <a href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
          Dashboard
        </a>
        <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
          Pathways
        </a>
        <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
          Career Guidance
        </a>
        <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
          Mentorship Program
        </a>
      </nav>
    </header>
  );
}
