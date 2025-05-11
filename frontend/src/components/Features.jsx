import React from 'react';
import { FaUsers, FaChalkboardTeacher, FaRocket, FaHandsHelping } from 'react-icons/fa';

const features = [
  {
    icon: <FaUsers className="w-10 h-10 text-blue-400 mb-4 mx-auto" />,
    title: 'Community Driven',
    desc: 'Connect with passionate learners and mentors. Grow your network and collaborate on real-world projects.'
  },
  {
    icon: <FaChalkboardTeacher className="w-10 h-10 text-green-400 mb-4 mx-auto" />,
    title: 'Skill Sharing',
    desc: 'Share your expertise or learn new skills through interactive sessions, workshops, and peer-to-peer learning.'
  },
  {
    icon: <FaRocket className="w-10 h-10 text-purple-400 mb-4 mx-auto" />,
    title: 'Personal Growth',
    desc: 'Track your progress, set learning goals, and unlock achievements as you advance in your journey.'
  },
  {
    icon: <FaHandsHelping className="w-10 h-10 text-yellow-400 mb-4 mx-auto" />,
    title: 'Mentorship',
    desc: 'Find mentors or become one. Support others and get guidance from experienced community members.'
  }
];

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-white">Why OpenCircle?</h2>
        <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Discover the features that make OpenCircle the best place to learn, teach, and connect with a vibrant community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;