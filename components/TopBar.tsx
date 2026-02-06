import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home, Moon, Sun } from 'lucide-react';
import { USER_PROFILE } from '../constants';

interface TopBarProps {
  isHome: boolean;
  isDark: boolean;
  toggleDark: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ isHome, isDark, toggleDark }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Simple Breadcrumb logic
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const breadcrumb = pathSegments.length > 0 
    ? pathSegments.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' > ')
    : 'Home';

  return (
    <header className="sticky top-0 z-30 w-full bg-[#f8f9fa]/90 dark:bg-[#171717]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 h-14 flex items-center px-4 justify-between transition-colors duration-300">
      
      {/* Left: Navigation Controls */}
      <div className="flex items-center space-x-2">
        {!isHome && (
          <>
            <button 
              onClick={() => navigate(-1)} 
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              aria-label="Go Back"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => navigate(1)} 
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              aria-label="Go Forward"
            >
              <ChevronRight size={20} />
            </button>
            
            <div className="h-4 w-px bg-gray-300 dark:bg-gray-600 mx-2"></div>

             <button 
              onClick={() => navigate('/')} 
              className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors md:hidden"
            >
              <Home size={18} />
            </button>
          </>
        )}
        
        {/* Name Persistent display */}
        <span className="text-sm font-semibold text-gray-800 dark:text-white ml-2">
            {USER_PROFILE.name}
        </span>
      </div>

      {/* Center: Context */}
      <div className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider truncate max-w-xs md:max-w-md hidden sm:block">
        {breadcrumb}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-3">
        <button 
          onClick={toggleDark}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-yellow-400 transition-colors"
          aria-label="Toggle Dark Mode"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
};