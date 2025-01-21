import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-900 to-green-600 shadow-lg rounded-full px-6 py-4 z-50 w-full max-w-screen-xl">
      {/* Navbar Container */}
      <div className="flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-white text-lg sm:text-xl font-bold hover:underline transition"
        >
          सmarth
        </Link>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex sm:space-x-6 absolute sm:static top-16 sm:top-auto left-0 sm:left-auto bg-gradient-to-r sm:bg-transparent from-green-900 to-green-600 sm:rounded-none rounded-lg p-6 sm:p-0 w-full sm:w-auto shadow-lg sm:shadow-none`}
        >
          <Link
            to="/emergency-services"
            className="block sm:inline text-white hover:underline transition mb-2 sm:mb-0"
          >
            Emergency
          </Link>
          <Link
            to="/real-time-queue"
            className="block sm:inline text-white hover:underline transition mb-2 sm:mb-0"
          >
            Queue
          </Link>
          <Link
            to="/chatbot"
            className="block sm:inline text-white hover:underline transition mb-2 sm:mb-0"
          >
            Chatbot
          </Link>
          <Link
            to="/disease-prediction"
            className="block sm:inline text-white hover:underline transition"
          >
            Disease Prediction
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
