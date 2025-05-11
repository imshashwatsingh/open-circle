import React from 'react';
import Slider from 'react-slick';
import { FaFire, FaStar, FaCode, FaPaintBrush, FaChartBar, FaCamera, FaBullhorn, FaBrain, FaCloud, FaMobileAlt, FaLanguage, FaMusic, FaPalette, FaRobot } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const trendingSkills = [
  { name: 'React', icon: <FaCode className="text-blue-400 text-3xl" /> },
  { name: 'Data Science', icon: <FaChartBar className="text-green-400 text-3xl" /> },
  { name: 'UI/UX Design', icon: <FaPaintBrush className="text-pink-400 text-3xl" /> },
  { name: 'Machine Learning', icon: <FaBrain className="text-purple-400 text-3xl" /> },
  { name: 'Cloud Computing', icon: <FaCloud className="text-cyan-400 text-3xl" /> },
  { name: 'Mobile Apps', icon: <FaMobileAlt className="text-orange-400 text-3xl" /> },
  { name: 'Digital Marketing', icon: <FaBullhorn className="text-indigo-400 text-3xl" /> },
  { name: 'Languages', icon: <FaLanguage className="text-yellow-400 text-3xl" /> },
  { name: 'Music', icon: <FaMusic className="text-pink-300 text-3xl" /> },
  { name: 'AI/Robotics', icon: <FaRobot className="text-gray-300 text-3xl" /> },
];

const allSkills = [
  { name: 'Web Development', desc: 'HTML, CSS, JavaScript, React, Angular, Vue, Node.js', icon: <FaCode className="text-blue-400 text-4xl mb-2" /> },
  { name: 'Data Science', desc: 'Python, R, Machine Learning, Data Analysis', icon: <FaChartBar className="text-green-400 text-4xl mb-2" /> },
  { name: 'UI/UX Design', desc: 'Figma, Sketch, Adobe XD, Prototyping', icon: <FaPaintBrush className="text-pink-400 text-4xl mb-2" /> },
  { name: 'Photography', desc: 'DSLR, Editing, Storytelling', icon: <FaCamera className="text-yellow-400 text-4xl mb-2" /> },
  { name: 'Digital Marketing', desc: 'SEO, Social Media, Analytics', icon: <FaBullhorn className="text-indigo-400 text-4xl mb-2" /> },
  { name: 'Machine Learning', desc: 'TensorFlow, PyTorch, Deep Learning', icon: <FaBrain className="text-purple-400 text-4xl mb-2" /> },
  { name: 'Mentoring', desc: 'Guide, Teach, Inspire', icon: <FaStar className="text-orange-400 text-4xl mb-2" /> },
  { name: 'Cloud Computing', desc: 'AWS, Azure, GCP, DevOps', icon: <FaCloud className="text-cyan-400 text-4xl mb-2" /> },
  { name: 'Mobile Apps', desc: 'iOS, Android, Flutter, React Native', icon: <FaMobileAlt className="text-orange-400 text-4xl mb-2" /> },
  { name: 'Languages', desc: 'English, Spanish, French, Mandarin', icon: <FaLanguage className="text-yellow-400 text-4xl mb-2" /> },
  { name: 'Music', desc: 'Guitar, Piano, Production', icon: <FaMusic className="text-pink-300 text-4xl mb-2" /> },
  { name: 'AI/Robotics', desc: 'Robotics, Automation, AI', icon: <FaRobot className="text-gray-300 text-4xl mb-2" /> },
  { name: 'Art & Design', desc: 'Painting, Drawing, Digital Art', icon: <FaPalette className="text-pink-400 text-4xl mb-2" /> },
  { name: 'Trending', desc: 'See what’s hot right now!', icon: <FaFire className="text-red-500 text-4xl mb-2 animate-bounce" /> },
];

function getSliderSettings() {
  return {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
}

const Skills = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-white">Explore Skills</h2>
        <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl mx-auto">
          Discover trending and in-demand skills. Join a session, learn, or share your expertise with the community.
        </p>
        {/* Trending Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
            <FaFire className="text-red-500 animate-bounce" /> Trending Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {trendingSkills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg px-6 py-4 min-w-[120px] hover:scale-110 transition-transform border border-gray-700">
                {skill.icon}
                <span className="mt-2 font-semibold text-lg text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* All Skills Slideshow */}
        <div className="max-w-5xl mx-auto">
          <Slider {...getSliderSettings()}>
            {allSkills.map((skill, idx) => (
              <div key={idx} className="px-4">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg p-8 flex flex-col items-center h-64 justify-center hover:shadow-2xl transition border border-gray-700">
                  {skill.icon}
                  <h4 className="text-xl font-bold text-white mb-2 mt-2">{skill.name}</h4>
                  <p className="text-gray-300 text-center text-base">{skill.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Skills;