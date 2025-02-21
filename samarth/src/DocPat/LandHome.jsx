import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Moon, Sun, LogIn, UserPlus, Heart, Clock, Users, Star, ArrowRight, Activity, Shield, MessageSquare } from 'lucide-react';

const MainIllustration = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full h-auto">
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:'#4ade80', stopOpacity:0.1}}/>
        <stop offset="100%" style={{stopColor:'#60a5fa', stopOpacity:0.1}}/>
      </linearGradient>
      <linearGradient id="doctorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor:'#4ade80', stopOpacity:1}}/>
        <stop offset="100%" style={{stopColor:'#60a5fa', stopOpacity:1}}/>
      </linearGradient>
    </defs>

    <circle cx="600" cy="150" r="250" fill="url(#bgGradient)" opacity="0.5"/>
    <circle cx="200" cy="450" r="200" fill="url(#bgGradient)" opacity="0.3"/>

    <rect x="250" y="100" width="300" height="400" rx="20" fill="white" opacity="0.9"/>
    
    <path d="M270 300 L290 280 L310 350 L330 200 L350 250 L370 220 L390 300 L410 280 L430 350 L450 200 L470 250 L490 220 L510 300"
          stroke="#4ade80" fill="none" strokeWidth="3"/>
    
    <circle cx="300" cy="150" r="25" fill="#60a5fa" opacity="0.8"/>
    <path d="M290 150 L310 150 M300 140 L300 160" stroke="white" strokeWidth="3"/>
    
    <circle cx="380" cy="150" r="25" fill="#4ade80" opacity="0.8"/>
    <path d="M370 150 L390 150 M380 140 L380 160" stroke="white" strokeWidth="3"/>
    
    <path d="M600 250 C600 220 580 200 550 200 C520 200 500 220 500 250 C500 260 505 270 515 280 L500 400 L600 400 L585 280 C595 270 600 260 600 250Z" 
          fill="url(#doctorGradient)"/>
    <circle cx="550" cy="180" r="30" fill="url(#doctorGradient)"/>

    <g transform="translate(300, 400)">
      <circle cx="0" cy="0" r="5" fill="#4ade80"/>
      <circle cx="40" cy="-20" r="5" fill="#60a5fa"/>
      <circle cx="80" cy="-40" r="5" fill="#4ade80"/>
      <circle cx="120" cy="-60" r="5" fill="#60a5fa"/>
    </g>

    <g transform="translate(150, 250)">
      <rect x="0" y="0" width="40" height="60" rx="5" fill="#4ade80" opacity="0.8"/>
      <rect x="10" y="10" width="20" height="30" rx="2" fill="white"/>
    </g>

    <g transform="translate(250, 450)">
      <path d="M0 0 L20 0 L30 -20 L40 40 L50 -20 L60 0 L80 0" 
            stroke="#ef4444" fill="none" strokeWidth="2"/>
    </g>

    <g transform="translate(600, 450)">
      <rect x="0" y="0" width="40" height="40" rx="5" fill="#60a5fa" opacity="0.8"/>
      <path d="M10 20 L30 20 M20 10 L20 30" stroke="white" strokeWidth="2"/>
    </g>
  </svg>
);

const FeatureIcon = ({ type }) => {
  const iconProps = {
    AI: {
      bgColor: "#4ade80",
      path: "M-15 0 L-5 0 L-5 -10 L5 -10 L5 0 L15 0 L15 10 L5 10 L5 20 L-5 20 L-5 10 L-15 10 Z"
    },
    SECURE: {
      bgColor: "#60a5fa",
      path: "M-10 -5 L10 -5 L10 10 L-10 10 Z M-15 -5 L-15 -15 L15 -15 L15 -5"
    },
    SUPPORT: {
      bgColor: "#a855f7",
      path: "M0 -15 A15 15 0 0 1 13 7.5 L10 5.5 M0 -15 A15 15 0 0 0 -13 7.5 L-10 5.5"
    }
  }[type];

  return (
    <svg viewBox="-50 -50 100 100" className="w-14 h-14">
      <circle cx="0" cy="0" r="30" fill={iconProps.bgColor} opacity="0.2"/>
      <path d={iconProps.path} 
            fill="none" 
            stroke={iconProps.bgColor} 
            strokeWidth="3"/>
    </svg>
  );
};

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

        {/* Hero Section with Custom Illustration */}
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
                  <MainIllustration />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards with Custom Icons */}
        <div className="px-4 py-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "AI",
                title: "AI-Powered Health Monitoring",
                description: "Real-time health tracking with predictive analytics",
                gradient: "from-green-400 to-blue-500"
              },
              {
                icon: "SECURE",
                title: "Secure Health Records",
                description: "End-to-end encrypted personal health data",
                gradient: "from-blue-400 to-purple-500"
              },
              {
                icon: "SUPPORT",
                title: "24/7 Doctor Connect",
                description: "Instant access to healthcare professionals",
                gradient: "from-purple-400 to-pink-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300`} />
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <FeatureIcon type={feature.icon} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-4 py-20 max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: 10000, display: "10k", label: "Active Users" },
                  { value: 500, display: "500+", label: "Expert Doctors" },
                  { value: 98, display: "98%", label: "Success Rate" }
                ].map((stat, index) => {
                  const [count, setCount] = useState(0);

                  useEffect(() => {
                    const duration = 2000;
                    const startTime = Date.now();

                    const updateCount = () => {
                      const currentTime = Date.now();
                      const elapsed = currentTime - startTime;
                      
                      if (elapsed < duration) {
                        const progress = elapsed / duration;
                        // Easing function for smooth animation
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        setCount(Math.floor(stat.value * easeOutQuart));
                        requestAnimationFrame(updateCount);
                      } else {
                        setCount(stat.value);
                      }
                    };

                    requestAnimationFrame(updateCount);
                  }, [stat.value]);

                  return (
                    <div key={index} className="text-center group">
                      <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2 transform transition-transform duration-300 group-hover:scale-110">
                        {stat.display.replace(/\d+/, count)}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="px-4 py-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their healthcare experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Cardiologist",
                content: "The platform has revolutionized how I connect with my patients. The AI-powered diagnostics support is exceptional.",
                gradient: "from-green-400 to-blue-500"
              },
              {
                name: "James Wilson",
                role: "Patient",
                content: "24/7 access to healthcare professionals and my medical records has made managing my health so much easier.",
                gradient: "from-blue-400 to-purple-500"
              },
              {
                name: "Dr. Michael Patel",
                role: "General Physician",
                content: "The secure health records and seamless communication features have greatly improved my practice efficiency.",
                gradient: "from-purple-400 to-pink-500"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-300`} />
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.content}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

        {/* Footer */}
        <footer className="px-4 py-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <span className="font-black text-2xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">सmarth</span>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Revolutionizing healthcare through technology and innovation.
                </p>
              </div>
              
              {[
                {
                  title: "Product",
                  links: ["Features", "Security", "Pricing", "Updates"]
                },
                {
                  title: "Company",
                  links: ["About", "Careers", "Contact", "Blog"]
                },
                {
                  title: "Resources",
                  links: ["Documentation", "Support", "Terms", "Privacy"]
                }
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-400 transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} सmarth. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;