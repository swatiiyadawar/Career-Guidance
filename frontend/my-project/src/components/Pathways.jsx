import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const pathways = [
  {
    id: 1,
    title: 'Software Engineering',
    description: 'Build and maintain software applications.',
    image: 'https://via.placeholder.com/300x200?text=Software+Engineering'
  },
  {
    id: 2,
    title: 'Data Science',
    description: 'Analyze and interpret complex data.',
    image: 'https://via.placeholder.com/300x200?text=Data+Science'
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Promote products and services online.',
    image: 'https://via.placeholder.com/300x200?text=Digital+Marketing'
  },
  {
    id: 4,
    title: 'Graphic Design',
    description: 'Create visual content for print and digital media.',
    image: 'https://via.placeholder.com/300x200?text=Graphic+Design'
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Promote products and services online.',
    image: 'https://via.placeholder.com/300x200?text=Digital+Marketing'
  },
  {
    id: 4,
    title: 'Graphic Design',
    description: 'Create visual content for print and digital media.',
    image: 'https://via.placeholder.com/300x200?text=Graphic+Design'
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Promote products and services online.',
    image: 'https://via.placeholder.com/300x200?text=Digital+Marketing'
  },
  {
    id: 4,
    title: 'Graphic Design',
    description: 'Create visual content for print and digital media.',
    image: 'https://via.placeholder.com/300x200?text=Graphic+Design'
  }, {
    id: 3,
    title: 'Digital Marketing',
    description: 'Promote products and services online.',
    image: 'https://via.placeholder.com/300x200?text=Digital+Marketing'
  },

];

const Pathways = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
      <main className="pt-16 p-4">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Career Pathways
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pathways.map(pathway => (
            <div key={pathway.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={pathway.image} alt={pathway.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{pathway.title}</h2>
              <p className="text-gray-600">{pathway.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pathways;
