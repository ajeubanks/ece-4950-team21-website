import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs'; // Using react-icons for Sun and Moon

const DarkModeSwitcher: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center">
      <label
        className="relative inline-flex items-center cursor-pointer"
        onClick={toggleDarkMode}
      >
        {/* Toggle background */}
        <div
          className={`w-14 h-8 rounded-full transition-colors duration-300 ${
            darkMode ? 'bg-purple opacity-30' : 'bg-orange opacity-30'
          }`}
        ></div>

        {/* Toggle circle with icon */}
        <div
          className={`absolute top-0.5 left-0.5 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 transform ${
            darkMode ? 'translate-x-6 bg-purple' : 'bg-orange'
          }`}
        >
          {darkMode ? (
            <BsMoon className="text-white" /> // Moon icon for dark mode
          ) : (
            <BsSun className="text-white" /> // Sun icon for light mode
          )}
        </div>
      </label>
    </div>
  );
};

export default DarkModeSwitcher;
