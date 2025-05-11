import React from 'react';
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-8 mt-16 border-t border-gray-800">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl font-extrabold text-blue-400">⭑</span>
          <span className="text-xl font-bold tracking-tight text-white">OpenCircle</span>
        </div>
        <span className="text-sm text-gray-400">Learn. Share. Grow. Together.</span>
        <span className="text-xs text-gray-500 mt-2">&copy; {new Date().getFullYear()} OpenCircle. All rights reserved.</span>
      </div>
      <div className="flex gap-4 text-xl mt-2 md:mt-0">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" aria-label="GitHub"><FaGithub /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" aria-label="Twitter"><FaTwitter /></a>
        <a href="mailto:hello@opencircle.com" className="hover:text-blue-400" aria-label="Email"><FaEnvelope /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
    </div>
  </footer>
);

export default Footer;