import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, User, Moon, Sun, Menu, Home, AlertCircle, MessageCircle, Activity } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", icon: <Home className="h-5 w-5 mr-2" />, isEmergency: false },
  { name: "Emergency", path: "/emergency-services", icon: <AlertCircle className="h-5 w-5 mr-2" />, isEmergency: true },
  { name: "Queue", path: "/real-time-queue", icon: <Activity className="h-5 w-5 mr-2" />, isEmergency: false },
  { name: "Chatbot", path: "/chatbot", icon: <MessageCircle className="h-5 w-5 mr-2" />, isEmergency: false },
  { name: "Disease Prediction", path: "/disease-prediction", icon: <Activity className="h-5 w-5 mr-2" />, isEmergency: false },
];

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Check for dark mode preference in localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode and save the preference to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-900 to-green-600 shadow-lg rounded-full px-9 py-4 z-50">
      <div className="flex justify-between items-center space-x-6">
        {/* Logo */}
        <Link to="/" className="text-white text-lg font-bold hover:underline transition">
          सmarth
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ name, path, icon, isEmergency }) => (
            <Link
              key={name}
              to={path}
              className={`flex items-center text-white transition ${
                isEmergency
                  ? "hover:bg-red-500/20 hover:text-red-100"
                  : "hover:bg-cyan-500/20 hover:text-cyan-100"
              } p-2 rounded-full`}
            >
              {icon}
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full md:hidden hover:bg-white/10 transition-colors duration-300"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>

        {/* Icons for notifications, dark mode toggle, and account */}
        <div className="flex items-center space-x-3">
          <button className="relative p-1.5 rounded-full hover:bg-white/10 transition-colors duration-300">
            <Bell className="h-5 w-5 text-white" />
            <span className="absolute top-0.5 right-0.5 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <button
            onClick={toggleDarkMode}
            className="p-1.5 rounded-full hover:bg-white/10 transition-colors duration-300"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-200" />
            ) : (
              <Moon className="h-5 w-5 text-white" />
            )}
          </button>

          <Link to="/account">
      <button className="hidden sm:flex items-center px-3 py-1.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300">
        <User className="h-4 w-4 mr-1.5" />
        <span className="text-sm">Account</span>
      </button>
    </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gradient-to-r from-green-900 to-green-600 shadow-lg rounded-b-2xl p-4 space-y-2">
          {navLinks.map(({ name, path, icon, isEmergency }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center p-3 rounded-full transition-all duration-300 ${
                isEmergency
                  ? "hover:bg-red-500/20 text-red-100 hover:text-red-200"
                  : "hover:bg-cyan-500/20 text-white hover:text-cyan-100"
              }`}
            >
              {icon}
              <span>{name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
