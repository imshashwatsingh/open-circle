import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;