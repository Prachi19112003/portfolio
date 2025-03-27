import React from 'react';

const ResumeDownload = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Download My Resume</h1>
      <a 
        href="/22075061_Prachi__mycv.pdf" 
        download="My_Resume.pdf"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-semibold shadow-lg hover:bg-blue-700 transition"
      >
        Download Resume 📄
      </a>
    </div>
  );
};

export default ResumeDownload;
