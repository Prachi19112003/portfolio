import React from 'react';

const Introduction = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-600 text-white p-6">
      <h1 className="text-6xl font-bold mb-6 animate-bounce">Introduction</h1>
      
      {/* Images Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
        {/* Profile Photo */}
        <img 
          src="/myPhoto.jpg" 
          alt="Prachi" 
          className="w-48 h-48 md:w-52 md:h-52 rounded-full border-4 border-white shadow-lg transition-transform transform hover:scale-125 hover:shadow-2xl duration-300"
        />
        {/* ID Photo */}
        <img 
          src="/idPhoto.jpg" 
          alt="ID" 
          className="w-56 h-36 md:w-64 md:h-44 rounded-xl border-4 border-white shadow-lg transition-transform transform hover:scale-125 hover:shadow-2xl duration-300"
        />
      </div>

      {/* Introduction Text */}
      <p className="text-2xl max-w-2xl text-center leading-relaxed">
        I am <span className="font-semibold">Prachi</span>, a driven and innovative Computer Science and Engineering student at <span className="font-semibold">IIT (BHU), Varanasi</span>. 
        With a passion for technology, I excel in crafting cutting-edge solutions that bridge creativity and functionality. 
        My expertise spans technologies like <span className="font-semibold">C++, Python, Django, MySQL, Bash, and Reinforcement Learning</span>, 
        allowing me to tackle complex challenges with ease.
      </p>
      
      <p className="text-xl max-w-2xl text-center mt-4">
        I am deeply interested in <span className="text-yellow-300 font-semibold">Competitive Programming, Web Development, DSA, and Machine Learning</span>, 
        which fuels my enthusiasm for solving real-world problems through technology. 
        My strong skills in <span className="text-yellow-300 font-semibold">Public Speaking, Decision Making, and Teamwork</span> help me drive projects successfully.
      </p>
    </div>
  );
};

export default Introduction;
