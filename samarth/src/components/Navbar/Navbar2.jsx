import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, User, Moon, Sun, Menu, Video, Calendar, Users, AlertTriangle } from "lucide-react";

const navLinks = [
  { name: "Live Consultation", path: "/doctor/live-consultation", icon: <Video className="h-5 w-5 mr-2" /> },
  { name: "Appointment Management", path: "/doctor/appointment-management", icon: <Calendar className="h-5 w-5 mr-2" /> },
  { name: "My Patients", path: "/doctor/my-patients", icon: <Users className="h-5 w-5 mr-2" /> },
  { name: "SOS of Patient", path: "/doctor/sos", icon: <AlertTriangle className="h-5 w-5 mr-2" /> },
];

const Navbar2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <nav className={`fixed z-50 bg-gradient-to-r from-green-900 to-green-600 shadow-lg ${isMobile ? "top-0 left-0 w-full px-4 py-2" : "top-0 left-0 h-full w-64 p-6 flex flex-col justify-between"}`}>
      <div className={isMobile ? "flex justify-between items-center" : ""}>
        <Link to="/" className="text-white text-lg font-bold hover:underline transition">
          सmarth
        </Link>
        {!isMobile && (
          <div className="mt-6 space-y-4">
            {navLinks.map(({ name, path, icon }) => (
              <Link key={name} to={path} className="flex items-center text-white transition p-3 rounded hover:bg-cyan-500/20 hover:text-cyan-100">
                {icon}
                {name}
              </Link>
            ))}
          </div>
        )}
        {isMobile && (
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-white/10 transition-colors duration-300">
            <Menu className="h-6 w-6 text-white" />
          </button>
        )}
      </div>
      {isMobile && isOpen && (
        <div className="mt-2 space-y-2">
          {navLinks.map(({ name, path, icon }) => (
            <Link key={name} to={path} onClick={() => setIsOpen(false)} className="flex items-center p-3 rounded transition-all duration-300 hover:bg-cyan-500/20 text-white hover:text-cyan-100">
              {icon}
              <span>{name}</span>
            </Link>
          ))}
        </div>
      )}
      <div className={`${isMobile ? "flex justify-between mt-4" : "flex items-center space-x-4 mt-auto"}`}>
        <button className="relative p-2 hover:bg-white/10 transition-colors duration-300">
          <Bell className="h-5 w-5 text-white" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button onClick={toggleDarkMode} className="p-2 hover:bg-white/10 transition-colors duration-300">
          {isDarkMode ? <Sun className="h-5 w-5 text-yellow-200" /> : <Moon className="h-5 w-5 text-white" />}
        </button>
        <Link to="/doctor/account">
          <button className="flex items-center p-2 border border-white/30 text-white hover:bg-white/10 transition">
            <User className="h-4 w-4 mr-2" />
            <span className="text-sm">Profile</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
