import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun, LogIn, UserPlus, Heart, Clock, Users, Star, ArrowRight, Activity, Shield, MessageSquare } from 'lucide-react';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-all duration-300">
        {/* Enhanced Floating Navbar */}
        <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 transition-all duration-300 ${scrolled ? 'top-2' : 'top-4'}`}>
          <div className="bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="font-black text-2xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">सmarth</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-800/50 transition-all duration-300"
                >
                  {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
                </button>
                
                <div className="flex space-x-3">
                  <Link 
                    to="/doctor" 
                    className="group flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-pink-500 px-4 py-2 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <LogIn size={20} />
                    <span>Doctor Login</span>
                    <ArrowRight className="w-0 group-hover:w-5 transition-all duration-300 overflow-hidden" />
                  </Link>
                  <Link 
                    to="/patient" 
                    className="group flex items-center space-x-2 bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <UserPlus size={20} />
                    <span>Patient Login</span>
                    <ArrowRight className="w-0 group-hover:w-5 transition-all duration-300 overflow-hidden" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section with Animated Elements */}
        <div className="relative pt-40 pb-20 px-4 max-w-6xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse delay-700" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center space-x-2 bg-white/10 dark:bg-white/5 border border-white/20 rounded-full px-4 py-2 text-sm">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Revolutionizing Healthcare</span>
                </span>
              </div>
              
              <h1 className="text-6xl font-black leading-tight">
                Healthcare
                <span className="block mt-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Reimagined
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Experience the future of healthcare delivery with personalized care, 
                AI-powered diagnostics, and seamless doctor-patient communication.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="group relative bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Get Started Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button className="relative px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Watch Demo</span>
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl -z-10" />
                </button>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300" />
                <div className="relative">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Healthcare" 
                    className="rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards with Hover Effects */}
        <div className="px-4 py-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="text-green-400" />,
                title: "AI-Powered Health Monitoring",
                description: "Real-time health tracking with predictive analytics",
                gradient: "from-green-400 to-blue-500"
              },
              {
                icon: <Shield className="text-blue-400" />,
                title: "Secure Health Records",
                description: "End-to-end encrypted personal health data",
                gradient: "from-blue-400 to-purple-500"
              },
              {
                icon: <MessageSquare className="text-purple-400" />,
                title: "24/7 Doctor Connect",
                description: "Instant access to healthcare professionals",
                gradient: "from-purple-400 to-pink-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300`} />
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section with Animation */}
        <div className="px-4 py-20 max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: "10k+", label: "Active Users" },
                  { value: "500+", label: "Expert Doctors" },
                  { value: "98%", label: "Success Rate" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2 transform transition-transform duration-300 group-hover:scale-110">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative px-4 py-20 max-w-4xl mx-auto text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Transform Your Healthcare Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who have revolutionized their approach to health management with सmarth.
            </p>
            <button className="group relative bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-0 group-hover:w-5 transition-all duration-300 overflow-hidden" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;