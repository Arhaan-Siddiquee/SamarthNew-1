import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaAmbulance } from 'react-icons/fa';

const Emergency3 = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);
  const [showAmbulance, setShowAmbulance] = useState(false);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      toast.error('Speech recognition is not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = 0; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      setTranscript(finalTranscript);

      // Check for emergency keywords
      if (finalTranscript.toLowerCase().includes('emergency')) {
        toast.success('Emergency detected. Ambulance is on the way!');
        setShowAmbulance(true);
      }
    };

    recognition.onerror = (event) => {
      toast.error(`Error: ${event.error}`);
    };

    recognitionRef.current = recognition;
  }, []);

  const toggleRecording = () => {
    if (!recognitionRef.current) return;

    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }

    setIsRecording(!isRecording);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 text-center relative">
      <h1 className="text-2xl font-bold mb-4">Emergency Voice Recorder</h1>
      <button
        onClick={toggleRecording}
        className={`p-4 rounded-full text-white font-bold transition-all duration-300 ${
          isRecording ? 'bg-red-600' : 'bg-green-600'
        }`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>

      <div className="mt-4 p-2 bg-gray-100 rounded shadow">
        <p className="text-gray-700">Transcript:</p>
        <p className="text-sm text-gray-900">{transcript || 'No speech detected yet.'}</p>
      </div>

      {showAmbulance && (
        <div className="fixed bottom-5 right-5 z-50">
          <FaAmbulance size={50} color="red" />
        </div>
      )}

      {/* Toast notifications container */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        closeButton={<button className="text-white font-bold text-lg">X</button>}
        className="bg-red-500 text-white font-bold rounded-lg shadow-lg p-3"
      />
    </div>
  );
};

export default Emergency3;
