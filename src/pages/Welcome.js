import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/portfolio');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-8 animate-pulse">Welcome to My Portfolio 🚀</h1>
      <p className="text-2xl mb-12 text-center max-w-lg">
        Explore my skills, experience, and projects through an interactive experience. Let's dive in!
      </p>
      <button
        onClick={handleNavigate}
        className="bg-white text-blue-600 text-2xl font-semibold py-4 px-10 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        Go to Portfolio
      </button>
    </div>
  );
};

export default Welcome;
