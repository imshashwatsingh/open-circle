import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800 text-gray-100 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80%" cy="20%" r="120" fill="#3b82f6" />
          <circle cx="20%" cy="80%" r="100" fill="#6366f1" />
        </svg>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 flex items-center justify-center bg-blue-600 rounded-full w-16 h-16 shadow-lg">
            <FaArrowRight className="text-white text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            Ready to Share Your Skills?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join OpenCircle today and start teaching, learning, and connecting with a vibrant community. Empower yourself and others in a beautiful, collaborative space.
          </p>
          <button
            onClick={() => navigate('/sign-up')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Join Now <FaArrowRight className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;