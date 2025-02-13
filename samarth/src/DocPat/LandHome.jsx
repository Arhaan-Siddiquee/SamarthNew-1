import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun, LogIn, UserPlus, Heart, Clock, Users, Star } from 'lucide-react';

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

        {/* Hero Section */}
        <div className="pt-32 px-4 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Your Health Journey
                <span className="text-green-500"> Starts Here</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Connect with qualified healthcare professionals and receive personalized care from the comfort of your home.
              </p>
              <div className="flex gap-4">
                <button className="bg-green-500 text-white px-8 py-3 rounded-xl hover:bg-green-600 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-xl hover:bg-green-500 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-500/20 rounded-2xl blur-xl"></div>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Healthcare" 
                  className="relative rounded-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-gray-600 dark:text-gray-300">Tailored healthcare solutions that meet your unique needs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Round-the-clock access to medical professionals.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600 dark:text-gray-300">Connect with qualified and experienced healthcare providers.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Care</h3>
              <p className="text-gray-600 dark:text-gray-300">Premium healthcare services with proven results.</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-32 px-4 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10k+</div>
                <div className="text-gray-600 dark:text-gray-300">Active Patients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Expert Doctors</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 mb-20 px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of satisfied patients who have transformed their healthcare experience with सmarth.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;