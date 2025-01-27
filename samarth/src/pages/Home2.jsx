import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <motion.div 
        className="text-center max-w-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6">Elevate Your Health</h1>
        <p className="text-lg text-gray-700 mb-8">
          Experience a transformative approach to well-being with personalized and compassionate care.
        </p>
        <div className="flex space-x-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg">
            Get Started
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-blue-700 px-6 py-3 rounded-full shadow-lg">
            Learn More
          </button>
        </div>
      </motion.div>

      <motion.div 
        className="mt-16 w-full max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Holistic Care', 'Expert Consultations', 'Wellness Programs'].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{feature}</h3>
              <p className="text-gray-600">
                Discover a unique approach that prioritizes your overall health and happiness.
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
