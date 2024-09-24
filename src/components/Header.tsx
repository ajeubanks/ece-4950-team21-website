import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { ThemeContext } from "../context/ThemeContext";
import { FaChevronDown } from "react-icons/fa"; // Import arrow icon for dropdown

const Header: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown
  const navigate = useNavigate();

  // Handle navigation and scrolling for the dropdown, then close it
  const handleProjectClick = (sectionId: string) => {
    navigate("/projects"); // Navigate to the Projects page
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 100; // Adjust this value to match your header height
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setDropdownOpen(false); // Close the dropdown when clicked
    }, 100); // Delay to ensure navigation completes before scrolling
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center pl-4 pr-4 bg-zinc-100 dark:bg-dark shadow-lg">
      {/* Left section: Logo */}
      <div className="flex-1 flex justify-start">
        {darkMode ? (
          <img src={`${import.meta.env.BASE_URL}img/ece_logo_dark2.png`} alt="Logo" className="h-20" />
        ) : (
          <img src={`${import.meta.env.BASE_URL}img/ece_logo.png`} alt="Logo" className="h-20" />
        )}
      </div>

      {/* Middle section: Navigation links, centered */}
      <nav className="flex-1 flex justify-center space-x-12">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg transition-colors duration-300 hover:text-orange hover:dark:text-orange ${
              isActive ? "font-bold text-orange" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-lg transition-colors duration-300 hover:text-orange hover:dark:text-orange ${
              isActive ? "font-bold text-orange" : ""
            }`
          }
        >
          About
        </NavLink>

        {/* Projects with Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center text-lg transition-colors duration-300 hover:text-orange hover:dark:text-orange ${
                isActive ? "font-bold text-orange" : ""
              }`
            }
          >
            Projects <FaChevronDown className="ml-1" />
          </NavLink>

          {/* Spacer div to bridge the gap */}
          {dropdownOpen && (
            <div className="absolute left-0 top-full w-full h-12 bg-transparent pointer-events-auto"></div>
          )}

          {/* Dropdown Menu with left-aligned text and lines */}
          {dropdownOpen && (
            <div
              className="absolute left-0 top-full mt-10 bg-zinc-100 dark:bg-dark w-60 rounded-md shadow-lg border border-gray-300 dark:border-gray-600"
              style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }} // Matching shadow on all sides
            >
              <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-600 px-4">
                <button
                  onClick={() => handleProjectClick("project1")}
                  className="block py-3 text-left text-zinc-800 dark:text-zinc-100 transition-colors duration-300 hover:text-orange dark:hover:text-orange"
                >
                  Project 1
                </button>
                <button
                  onClick={() => handleProjectClick("project2")}
                  className="block py-3 text-left text-zinc-800 dark:text-zinc-100 transition-colors duration-300 hover:text-orange dark:hover:text-orange"
                >
                  Project 2
                </button>
                <button
                  onClick={() => handleProjectClick("project3")}
                  className="block py-3 text-left text-zinc-800 dark:text-zinc-100 transition-colors duration-300 hover:text-orange dark:hover:text-orange"
                >
                  Project 3
                </button>
                <button
                  onClick={() => handleProjectClick("final")}
                  className="block py-3 text-left text-zinc-800 dark:text-zinc-100 transition-colors duration-300 hover:text-orange dark:hover:text-orange"
                >
                  Final Project
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Right section: Team 21 and DarkModeSwitcher */}
      <div className="flex-1 flex justify-end items-center">
        <DarkModeSwitcher />
        <span className="text-zinc-800 dark:text-zinc-100 mr-4 text-3xl font-bold ml-8">
          Team 21
        </span>
      </div>
    </header>
  );
};

export default Header;
