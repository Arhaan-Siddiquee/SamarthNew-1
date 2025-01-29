import React, { useState } from 'react';

const Chatbot = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeTab, setActiveTab] = useState('book');
  const [appointments, setAppointments] = useState([
    { 
      id: 1, 
      date: '2025-01-28', 
      time: '10:00 AM', 
      doctor: 'Dr. Smith',
      status: 'completed',
      type: 'Regular Checkup'
    },
    { 
      id: 2, 
      date: '2025-01-29', 
      time: '2:30 PM', 
      doctor: 'Dr. Johnson',
      status: 'upcoming',
      type: 'Dental Cleaning'
    }
  ]);

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      const newAppointment = {
        id: appointments.length + 1,
        date: selectedDate.toISOString().split('T')[0],
        time: selectedTime,
        doctor: 'Dr. Smith',
        status: 'upcoming',
        type: 'Regular Checkup'
      };
      setAppointments([...appointments, newAppointment]);
      setSelectedTime(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Medical Appointments</h1>
        
        {/* Tabs */}
        <div className="flex mb-6">
          <button
            className={`px-6 py-3 font-medium rounded-lg mr-2 ${
              activeTab === 'book' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('book')}
          >
            Book Appointment
          </button>
          <button
            className={`px-6 py-3 font-medium rounded-lg ${
              activeTab === 'history' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('history')}
          >
            Appointment History
          </button>
        </div>

        {/* Booking Content */}
        {activeTab === 'book' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Date Selection */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Select Date</h2>
              <p className="text-gray-600 mb-4">Choose your preferred appointment date</p>
              <input
                type="date"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedDate.toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
              />
            </div>

            {/* Time Selection */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Available Time Slots</h2>
              <p className="text-gray-600 mb-4">Select your preferred time</p>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    className={`p-3 rounded-lg font-medium transition-colors ${
                      selectedTime === time
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              
              <button
                className={`w-full mt-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedDate && selectedTime
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                onClick={handleBookAppointment}
                disabled={!selectedDate || !selectedTime}
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}

        {/* History Content */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Appointment History</h2>
              <p className="text-gray-600 mb-6">View your past and upcoming appointments</p>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="border rounded-lg p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="font-medium text-lg">{appointment.type}</h3>
                        <p className="text-gray-600">{appointment.doctor}</p>
                        <p className="text-gray-600">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        appointment.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;