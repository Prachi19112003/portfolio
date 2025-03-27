import React from 'react';

const skillsList = [
  'Web Development',
  'Competitive Programming',
  'C++',
  'Python',
  'SQL',
  'Bash',
  'Machine Learning',
  'Artificial Intelligence',
  'Data Structure and Algorithms',
  'Database Mangement System',
  'Intelligent Computing',
  'Theory of Computation',
  'Computer Graphics',
  'Operating Systems',
  'Reinforcement Learning',
  'Docker',
];

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-teal-500 text-white">
      <h1 className="text-6xl font-bold mb-6 animate-bounce">Skills</h1>
      <p className="text-2xl max-w-2xl text-center leading-relaxed mb-8">
        My technical expertise spans across various domains. Here are my key skills:
      </p>
      <div className="flex flex-wrap justify-center gap-6 max-w-3xl">
        {skillsList.map((skill, index) => (
          <div
            key={index}
            className="text-lg font-semibold bg-white text-green-600 px-6 py-3 rounded-lg shadow-lg 
            hover:bg-green-700 hover:text-white transform hover:scale-110 transition duration-300 ease-in-out animate-pulse"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
