import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center transition-all">
      {/* Logo & Navigation */}
      <div className="flex items-center gap-8">
        {/* <img
          src="/GI.png"
          alt="logo"
          className="w-16 h-16 rounded-full mx-auto"
        /> */}

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <h1 
            className="text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer"
            onClick={() => navigate("/")}
          >
            🍰 Recipes Blog
          </h1>
          <h1 
            className="text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition cursor-pointer"
            onClick={() => navigate("/portfolio")}
          >
            🎨 Portfolio
          </h1>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="relative flex items-center px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white transition-all hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
        <span
          className={`absolute left-1 top-1 w-5 h-5 bg-white dark:bg-gray-900 rounded-full transition-transform duration-300 ${darkMode ? "translate-x-7" : "translate-x-0"}`}
        />
      </button>
    </nav>
  );
};

export default Navbar;
