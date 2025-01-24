import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun, LogIn, UserPlus } from 'lucide-react';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-r from-white to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Island Navbar */}
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50">
          <div className="bg-white/40 dark:bg-black/40 border-2 border-black dark:border-2 dark:border-white/40 backdrop-blur-lg rounded-2xl shadow-xl p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="font-bold text-xl text-green-600 tracking-wider">सmarth</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
                </button>
                
                <div className="flex space-x-2">
                  <Link 
                    to="/doctor" 
                    className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <LogIn size={20} />
                    <span>Doctor Login</span>
                  </Link>
                  <Link 
                    to="/patient" 
                    className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <UserPlus size={20} />
                    <span>Patient Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

      </div>
    </div>
  );
};

export default LandingPage;