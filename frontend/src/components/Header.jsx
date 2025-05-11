import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSignOut = async () => {
    await signout();
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}> 
          <span className="text-3xl font-extrabold text-blue-400 tracking-wide drop-shadow-lg">⭑</span>
          <span className="text-2xl font-bold tracking-tight text-white">OpenCircle</span>
        </div>
        <nav className="hidden md:flex space-x-8 items-center text-lg">
          <NavLink to="/" className={({ isActive }) => `transition-colors font-medium ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>Home</NavLink>
          <NavLink to="/skills" className={({ isActive }) => `transition-colors font-medium ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>Skills</NavLink>
          <NavLink to="/about" className={({ isActive }) => `transition-colors font-medium ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>About</NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard" className={({ isActive }) => `transition-colors font-medium ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>Dashboard</NavLink>
              <NavLink to="/profile" className={({ isActive }) => `transition-colors font-medium ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>Profile</NavLink>
              <button onClick={handleSignOut} className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-colors">Sign Out</button>
            </>
          ) : (
            <NavLink to="/sign-in" className={({ isActive }) => `transition-colors font-medium ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>Sign In</NavLink>
          )}
        </nav>
        <button className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 px-4 py-4 border-t border-gray-800 animate-fade-in-down">
          <NavLink to="/" className={({ isActive }) => `block py-2 text-lg transition-colors ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/skills" className={({ isActive }) => `block py-2 text-lg transition-colors ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`} onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
          <NavLink to="/about" className={({ isActive }) => `block py-2 text-lg transition-colors ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`} onClick={() => setIsMenuOpen(false)}>About</NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard" className={({ isActive }) => `block py-2 text-lg transition-colors ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`} onClick={() => setIsMenuOpen(false)}>Dashboard</NavLink>
              <NavLink to="/profile" className={({ isActive }) => `block py-2 text-lg transition-colors ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`} onClick={() => setIsMenuOpen(false)}>Profile</NavLink>
              <button onClick={handleSignOut} className="block w-full text-left py-2 text-lg text-gray-300 hover:text-blue-400 transition-colors">Sign Out</button>
            </>
          ) : (
            <NavLink to="/sign-in" className={({ isActive }) => `block py-2 text-lg transition-colors ${isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`} onClick={() => setIsMenuOpen(false)}>Sign In</NavLink>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;