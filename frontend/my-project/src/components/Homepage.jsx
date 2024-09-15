import React from 'react';


export default function HomePage() {
    return (
      <div className="flex flex-col min-h-screen">
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
            <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
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
  
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Welcome to Career Compass
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Your guide to making informed career choices. Take tests, explore pathways, and get mentorship.
                  </p>
                </div>
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  Start Your Journey
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
  