import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'; // Hamburger and close icons + dropdown arrow
import DarkModeSwitcher from './DarkModeSwitcher';
import { ThemeContext } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu
  const [isMobile, setIsMobile] = useState(false); // State to track if on mobile
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for desktop dropdown
  const navigate = useNavigate();

  // Check if it's a mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // If screen is less than 768px, consider it mobile
    };

    handleResize(); // Check screen size on initial load
    window.addEventListener('resize', handleResize); // Add listener to detect screen size changes

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle project section scrolling (for desktop dropdown)
  const handleProjectClick = (sectionId: string) => {
    navigate('/projects');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 100;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      setDropdownOpen(false); // Close dropdown when clicked
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center pl-4 pr-4 bg-zinc-100 dark:bg-dark shadow-lg">
      {/* Left section: Logo */}
      <div className="flex-1 flex justify-start items-center">
        {/* Conditional rendering for dark mode and mobile/desktop logos */}
        <img
          src={
            darkMode
              ? isMobile
                ? `${import.meta.env.BASE_URL}img/logo.png` // Dark mode mobile logo
                : `${import.meta.env.BASE_URL}img/ece_logo_dark2.png` // Dark mode desktop logo
              : isMobile
              ? `${import.meta.env.BASE_URL}img/logo.png` // Light mode mobile logo
              : `${import.meta.env.BASE_URL}img/ece_logo.png` // Light mode desktop logo
          }
          alt="Logo"
          className="h-20"
        />

        {/* Center Team 21 only on mobile */}
        {isMobile && (
          <span className="text-zinc-800 dark:text-zinc-100 text-3xl pr-10 font-bold text-center flex-1">
            Team 21
          </span>
        )}
      </div>

      {/* Middle section: Navigation links, centered - Hidden on mobile */}
      <nav className="hidden md:flex flex-1 justify-center space-x-12">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-lg transition-colors duration-300 hover:text-orange hover:dark:text-orange ${
              isActive ? 'font-bold text-orange' : ''
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-lg transition-colors duration-300 hover:text-orange hover:dark:text-orange ${
              isActive ? 'font-bold text-orange' : ''
            }`
          }
        >
          About
        </NavLink>

        {/* Projects with Dropdown (Desktop Only) */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center text-lg transition-colors duration-300 hover:text-orange hover:dark:text-orange ${
                isActive ? 'font-bold text-orange' : ''
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

      {/* Mobile Menu (Hamburger Icon) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Right section: DarkModeSwitcher and Team 21 - Visible only on desktop */}
      <div className="hidden md:flex flex-1 justify-end items-center">
        <DarkModeSwitcher />
        {/* Team 21 text here, only on desktop */}
        {!isMobile && (
          <span className="text-zinc-800 dark:text-zinc-100 mr-4 text-3xl font-bold ml-8">
            Team 21
          </span>
        )}
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-zinc-100 dark:bg-dark z-50 transition-transform transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-3/4 sm:w-1/2 shadow-lg`}
      >
        <div className="flex flex-col h-full p-6 space-y-6">
          {/* Close button inside menu */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-zinc-800 dark:text-zinc-100 focus:outline-none self-end"
          >
            <FaTimes />
          </button>

          {/* Mobile Menu Links */}
          <nav className="flex flex-col space-y-4 text-lg">
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-orange hover:dark:text-orange ${
                  isActive ? 'font-bold text-orange' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-orange hover:dark:text-orange ${
                  isActive ? 'font-bold text-orange' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-orange hover:dark:text-orange ${
                  isActive ? 'font-bold text-orange' : ''
                }`
              }
            >
              Projects
            </NavLink>

            {/* DarkMode Switcher aligned with menu */}
            <div className="mt-6 flex items-start">
              <DarkModeSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
