import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Search, 
  Activity, 
  Plus, 
  ThumbsUp 
} from 'lucide-react';

const SpecialtyAIPage = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [newSymptom, setNewSymptom] = useState('');

  const addSymptom = () => {
    if (newSymptom && !symptoms.includes(newSymptom)) {
      setSymptoms([...symptoms, newSymptom]);
      setNewSymptom('');
    }
  };

  const commonSymptoms = [
    'Fever', 'Headache', 'Fatigue', 'Cough', 
    'Muscle Pain', 'Sore Throat'
  ];

  return (
    <div className="min-h-screen bg-purple-50 p-8 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">
          AI <span className="text-gray-800">Symptom Checker</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-purple-100 p-6 rounded-xl flex items-center space-x-4"
          >
            <Cpu className="w-12 h-12 text-purple-600" />
            <div>
              <h3 className="text-xl font-semibold">AI Analysis</h3>
              <p className="text-gray-700">Intelligent symptom evaluation</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-blue-100 p-6 rounded-xl flex items-center space-x-4"
          >
            <Activity className="w-12 h-12 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold">Precise Tracking</h3>
              <p className="text-gray-700">Detailed symptom monitoring</p>
            </div>
          </motion.div>
        </div>

        <div className="mb-6">
          <div className="flex space-x-2 mb-4">
            <input 
              type="text"
              value={newSymptom}
              onChange={(e) => setNewSymptom(e.target.value)}
              placeholder="Enter your symptoms"
              className="flex-grow p-3 border rounded-lg"
            />
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={addSymptom}
              className="bg-purple-600 text-white p-3 rounded-lg"
            >
              <Plus />
            </motion.button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {commonSymptoms.map((symptom) => (
              <motion.button
                key={symptom}
                whileTap={{ scale: 0.95 }}
                onClick={() => !symptoms.includes(symptom) && setSymptoms([...symptoms, symptom])}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm hover:bg-purple-200"
              >
                {symptom}
              </motion.button>
            ))}
          </div>

          {symptoms.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-100 p-4 rounded-lg"
            >
              <h3 className="font-semibold mb-2">Your Symptoms:</h3>
              <div className="flex flex-wrap gap-2">
                {symptoms.map((symptom) => (
                  <motion.div
                    key={symptom}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="bg-purple-200 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {symptom}
                    <button 
                      onClick={() => setSymptoms(symptoms.filter(s => s !== symptom))}
                      className="ml-2 text-red-600"
                    >
                      ×
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-purple-600 text-white py-4 rounded-xl flex items-center justify-center space-x-2"
        >
          <ThumbsUp />
          <span>Get AI Diagnosis</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SpecialtyAIPage;