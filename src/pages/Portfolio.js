import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaCode } from "react-icons/fa";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-600 overflow-hidden">
      {/* Floating Tech Icons */}
      <motion.div 
        className="absolute top-10 left-16 text-blue-300 text-5xl opacity-40"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <FaReact />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-20 text-green-300 text-5xl opacity-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <FaNodeJs />
      </motion.div>
      <motion.div 
        className="absolute bottom-10 left-28 text-yellow-300 text-5xl opacity-40"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <FaPython />
      </motion.div>
      <motion.div 
        className="absolute top-20 right-32 text-red-300 text-5xl opacity-40"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <FaDatabase />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-1/2 text-white text-5xl opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <FaCode />
      </motion.div>

      {/* Title without Glow Effect */}
      <motion.h1
        className="text-6xl font-bold text-white mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        PRACHI
      </motion.h1>

      {/* Buttons Grid */}
      <div className="grid grid-cols-2 gap-6">
        {[
          { label: "Introduction", color: "text-blue-600", path: "/introduction" },
          { label: "Skills", color: "text-green-600", path: "/skills" },
          { label: "Resume", color: "text-purple-600", path: "/resume" },
          { label: "Contact", color: "text-orange-600", path: "/contact" },
          { label: "Projects", color: "text-yellow-600", path: "/projects" },
        ].map((item, index) => (
          <motion.button
            key={index}
            onClick={() => handleNavigation(item.path)}
            className={`bg-white ${item.color} p-6 rounded-full shadow-xl text-2xl font-semibold hover:scale-110 transition-transform duration-300 neon-btn`}
            whileHover={{ scale: 1.1 }}
          >
            {item.label}
          </motion.button>
        ))}
      </div>

      {/* Neon Glow Effect */}
      <style>
        {`
          .neon-btn {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
          }
          .neon-btn:hover {
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
          }
        `}
      </style>
    </div>
  );
};

export default Portfolio;
