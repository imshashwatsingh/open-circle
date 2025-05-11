import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Learn, Teach, Connect
        </h1>
        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join OpenCircle to share skills, learn from your community, and grow together.
        </p>
        {/* CTA Button */}
        <button
          onClick={() => navigate('/skills')}
          className="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Explore Skills
        </button>
      </div>
    </section>
  );
};

export default Hero;