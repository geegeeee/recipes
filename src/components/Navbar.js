import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center transition-all">
      {/* Logo & Navigation */}
      <div className="flex items-center gap-8">

        {/* Hamburger Menu */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>

          {/* Dropdown */}
          {open && (
            <div className=" w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg ">
              <button
                onClick={() => { navigate("/"); setOpen(false); }}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Portfolio
              </button>
              <button
                onClick={() => { document.getElementById("projects")?.scrollIntoView({behavior: "smooth"}); setOpen(false); }}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                📂 Projects
              </button>
              <button
                onClick={() => { document.getElementById("contact")?.scrollIntoView({behavior: "smooth"}); setOpen(false); }}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                📩 Contact Me
              </button>
            </div>
          )}
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
