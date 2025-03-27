import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6">
      {/* Header */}
      <motion.h1 
        className="text-6xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Contact Me 🚀
      </motion.h1>

      <motion.p 
        className="text-2xl max-w-2xl text-center leading-relaxed mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Let's connect! Feel free to reach out through any of the platforms below.
      </motion.p>

      {/* Contact Links */}
      <div className="flex gap-8 text-lg">
        {/* LinkedIn */}
        <motion.a 
          href="https://www.linkedin.com/in/prachi-131415295"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:scale-110 transition transform hover:shadow-blue-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin size={24} />
          LinkedIn
        </motion.a>

        {/* GitHub */}
        <motion.a 
          href="https://github.com/Prachi19112003"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg hover:scale-110 transition transform hover:shadow-gray-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github size={24} />
          GitHub
        </motion.a>

        {/* Email */}
        <motion.a 
          href="mailto:prachi.student.cse22@itbhu.ac.in"
          className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-bold shadow-lg hover:scale-110 transition transform hover:shadow-red-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Mail size={24} />
          Email
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
