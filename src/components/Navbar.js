import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="bg-gray-900 dark:bg-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-white dark:text-gray-900 text-2xl font-bold">Portfolio</h1>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-700 dark:bg-gray-300 transition-transform transform hover:scale-110"
      >
        {darkMode ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-gray-300" />}
      </button>
    </nav>
  );
};

export default Navbar;
