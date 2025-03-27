import React from 'react';

const MyProjects = () => {
  const projects = [
    {
      title: 'Hospital Management System (Spring Boot)',
      description: 'A web-based system to streamline administrative and operational processes in healthcare settings. Integrated a DBMS backend using JDBC and developed the application using Spring Boot.',
      github: 'https://github.com/Prachi19112003/DBMS-Project'
    },
    {
      title: 'Breast Cancer Detection (Machine Learning)',
      description: 'A machine learning model to detect breast cancer using thermal imaging and genetic algorithms for feature selection and optimization. Used image preprocessing and advanced classification techniques for better accuracy.',
      github: 'https://github.com/Prachi19112003/Breast-Cancer-Diagnosis-from-Thermal-Images'
    },
    {
      title: 'Analysis of Better Reward System (Reinforcement Learning)',
      description: 'Led a project using Q-learning to optimize reinforcement learning models. Discovered that penalized reward systems outperform goal-based ones. Experimented with different reward systems for more accurate and safer results.',
      pdf: '/reinorcement-learning.pdf'  // Correct PDF path
    },
    {
      title: 'Discourse Platform (Django)',
      description: 'Built a Python-based Debate App to facilitate open discussions on social issues. Created a dynamic web application with real-time chat, convenient navigation, and profile customization using Django, MySQL, HTML, CSS, and JavaScript.',
      github: 'https://github.com/Prachi19112003/TheDiscourse'
    },
    {
      title: 'Arduino-based Smart Shopping Cart (IoT)',
      description: 'Developed an RFID-based automatic shopping cart integrated with a billing system to enhance the traditional grocery shopping experience by automating item scanning and billing processes.',
      github: 'https://github.com/Prachi19112003/SMART-CART'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-6xl font-bold mb-8 animate-bounce">My Projects 🚀</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-white text-black rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">
                GitHub Repo →
              </a>
            ) : project.pdf ? (
              <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">
                Project Report 📄
              </a>
            ) : (
              <span className="text-gray-500">GitHub Link Unavailable</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
