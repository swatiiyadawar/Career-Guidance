// src/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from React Router

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-10">
        <div className="container mx-auto flex items-center justify-between h-14 px-4 lg:px-6">
          <div className="text-xl font-bold">Career Compass</div>
          <nav className="flex gap-4">
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/sign-in">Sign In</Link>
            <Link className="hover:underline" to="/pathways">Pathways</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 pt-16 p-4 bg-gray-100">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to Career Compass
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Your guide to making informed career choices. Explore various career pathways, take assessments, and connect with mentors to shape your future.
          </p>
          <img
            src="https://www.besonline.in/blog/wp-content/uploads/2020/04/Career-Counselling-Career-Guidance.jpg"
            alt="Career Guidance"
            className="w-full h-auto object-cover mb-6 rounded-lg shadow-lg"
          />

        </section>
        <section className="container mx-auto p-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img
                src="https://www.mindbrainandpsychiatry.com/wp-content/uploads/2019/06/Career-Guidance.png"
                alt="Personalized Career Tests"
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personalized Career Tests</h3>
              <p className="text-gray-600">
                Discover your strengths and interests with our personalized career assessments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img
                src="https://www.beyondpsychub.com/wp-content/uploads/2022/11/Mentorship.jpg"
                alt="Expert Mentorship"
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Mentorship</h3>
              <p className="text-gray-600">
                Get guidance from industry experts to make informed career decisions and advance your career.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img
                src="https://i.pinimg.com/originals/d1/02/c3/d102c3dfe7399f6b0c251d030959395a.jpg"
                alt="Career Resources"
                className="mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Career Resources</h3>
              <p className="text-gray-600">
                Access a wealth of resources, including articles, videos, and tools to support your career journey.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
