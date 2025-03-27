import React, { useState } from 'react';

const ResumeOverview = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/22075061_Prachi__mycv.pdf'; 
    link.download = 'My_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-white relative">
      <h1 className="text-6xl font-extrabold mb-6 animate-bounce drop-shadow-lg">📄 Resume Overview</h1>
      
      <p className="text-2xl max-w-2xl text-center leading-relaxed">
        Download my resume to explore my qualifications and experience.
      </p>

      {/* Button with hover preview */}
      <div 
        className="relative mt-8"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
      >
        <button
          onClick={handleDownload}
          className="bg-white text-pink-600 text-2xl font-semibold py-4 px-10 rounded-full shadow-2xl 
          hover:scale-110 hover:bg-gray-100 transition-all duration-300 ease-in-out animate-pulse"
        >
          🚀 Download Resume
        </button>

        {/* Resume Preview - appears on hover */}
        {showPreview && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[-450px] bg-white p-4 shadow-2xl rounded-lg w-[300px] md:w-[400px] lg:w-[500px] transition-opacity duration-300 ease-in-out">
            <iframe 
              src="/22075061_Prachi__mycv.pdf" 
              className="w-full h-[400px] rounded-lg"
            ></iframe>
          </div>
        )}
      </div>

      <div className="absolute bottom-10 text-lg text-gray-100 animate-fade-in">
        🌟 Stay tuned for updates & new projects!
      </div>
    </div>
  );
};

export default ResumeOverview;
