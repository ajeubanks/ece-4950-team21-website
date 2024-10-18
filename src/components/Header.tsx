import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons
import DarkModeSwitcher from './DarkModeSwitcher';
import { ThemeContext } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center pl-4 pr-4 bg-zinc-100 dark:bg-dark shadow-lg">
      {/* Left section: Logo */}
      <div className="flex-1 flex justify-start">
        {darkMode ? (
          <img
            src={`${import.meta.env.BASE_URL}img/ece_logo_dark2.png`}
            alt="Logo"
            className="h-20"
          />
        ) : (
          <img
            src={`${import.meta.env.BASE_URL}img/ece_logo.png`}
            alt="Logo"
            className="h-20"
          />
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
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `text-lg transition-colors duration-300 hover:text-orange hover:dark:text-orange ${
              isActive ? 'font-bold text-orange' : ''
            }`
          }
        >
          Projects
        </NavLink>
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

      {/* Right section: Team 21 and DarkModeSwitcher */}
      <div className="hidden md:flex flex-1 justify-end items-center">
        <DarkModeSwitcher />
        <span className="text-zinc-800 dark:text-zinc-100 mr-4 text-3xl font-bold ml-8">
          Team 21
        </span>
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

            {/* DarkMode Switcher, aligned with menu */}
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
