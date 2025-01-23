import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  MapPin, 
  Ambulance, 
  UserCheck, 
  FileText 
} from 'lucide-react';

const SOSPage = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="min-h-screen mt-[60px] bg-red-50 p-8 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-red-600">
          Emergency <span className="text-gray-800">SOS</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-red-100 p-6 rounded-xl flex items-center space-x-4"
          >
            <MapPin className="w-12 h-12 text-red-600" />
            <div>
              <h3 className="text-xl font-semibold">Location Tracking</h3>
              <p className="text-gray-700">Instant location sharing</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-green-100 p-6 rounded-xl flex items-center space-x-4"
          >
            <UserCheck className="w-12 h-12 text-green-600" />
            <div>
              <h3 className="text-xl font-semibold">Medical History</h3>
              <p className="text-gray-700">Quick access to records</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className={`p-6 rounded-xl text-center mb-8 cursor-pointer transition-all 
            ${isRecording ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-800'}`}
          onClick={() => setIsRecording(!isRecording)}
        >
          <Mic className={`mx-auto mb-4 w-16 h-16 ${isRecording ? 'text-white animate-pulse' : 'text-red-500'}`} />
          <h3 className="text-2xl font-semibold">
            {isRecording ? 'Recording Emergency...' : 'Tap to Call Emergency'}
          </h3>
          <p className="text-sm mt-2">
            Say "Emergency" to dispatch immediate help
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isRecording ? 1 : 0 }}
          className="bg-gray-100 p-6 rounded-xl flex items-center space-x-4"
        >
          <Ambulance className="w-16 h-16 text-red-600" />
          <div>
            <h3 className="text-xl font-semibold">Ambulance Dispatched</h3>
            <p className="text-gray-700">Help is on the way</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SOSPage;