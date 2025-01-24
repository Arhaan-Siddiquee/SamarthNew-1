import React from 'react';
import { useSpring, animated } from 'react-spring';
import homebg from "../assets/homebg.jpg";
import { 
  ShieldCheck, 
  Stethoscope, 
  MessageCircle, 
  BarChart2, 
  ArrowRight 
} from 'lucide-react';

const AnimatedSection = ({ children, delay = 0 }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 280, friction: 60 },
    delay
  });

  return <animated.div style={props}>{children}</animated.div>;
};

const Home = () => {
  const heroSpring = useSpring({
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
    config: { tension: 120, friction: 14 }
  });

  const services = [
    { 
      icon: <ShieldCheck size={48} className="text-green-500" />, 
      title: "Emergency Services", 
      description: "24/7 rapid medical assistance at your fingertips" 
    },
    { 
      icon: <Stethoscope size={48} className="text-blue-500" />, 
      title: "Real-Time Consultation", 
      description: "Instant medical consultations with top professionals" 
    },
    { 
      icon: <MessageCircle size={48} className="text-purple-500" />, 
      title: "AI Chatbot", 
      description: "Intelligent health guidance and instant answers" 
    },
    { 
      icon: <BarChart2 size={48} className="text-yellow-500" />, 
      title: "Disease Prediction", 
      description: "Advanced ML-powered disease diagnostics" 
    }
  ];

  return (
    <div className="bg-white">
      <animated.div 
        style={heroSpring}
        className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-cover" style={{
          backgroundImage: `url(${homebg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="text-teal-600">सmarth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Revolutionizing healthcare through cutting-edge technology and intelligent solutions.
            </p>
            <button className="group flex items-center space-x-3 px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <span>Learn More</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Home;