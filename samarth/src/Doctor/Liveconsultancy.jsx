import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Plus, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';

const AppointmentManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddSlot, setShowAddSlot] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Get the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Default to light mode if no saved preference
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    // Save the theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Sample data
  const appointments = [
    {
      id: 1,
      patientName: 'John Doe',
      time: '09:00 AM',
      type: 'Regular Checkup',
      status: 'Confirmed',
      duration: '30 min',
      date: '2025-01-30',
    },
    {
      id: 2,
      patientName: 'Sarah Smith',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'Pending',
      duration: '45 min',
      date: '2025-01-31',
    },
  ];

  const availableSlots = [
    { id: 1, day: 'Monday', startTime: '09:00', endTime: '17:00' },
    { id: 2, day: 'Tuesday', startTime: '10:00', endTime: '18:00' },
    { id: 3, day: 'Wednesday', startTime: '09:00', endTime: '16:00' },
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const getAppointmentsForDay = (day) => {
    return appointments.filter((appointment) => new Date(appointment.date).toDateString() === new Date(day).toDateString());
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className={`min-h-screen p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 dark:bg-gray-700 dark:text-white">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Appointment Management</h1>
                <p className="text-gray-500 dark:text-gray-400">Manage your schedule and appointments</p>
              </div>
              <button
                onClick={() => setShowAddSlot(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                <Plus className="h-4 w-4" />
                Add Time Slot
              </button>
            </div>
          </div>

          {/* Theme Toggle Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="bg-gray-200 p-2 rounded-full dark:bg-gray-600 dark:text-white"
            >
              {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-12 gap-6">
            {/* Calendar Section */}
            <div className="col-span-8">
              <div className="bg-white rounded-lg shadow-sm p-6 dark:bg-gray-700">
                {/* Calendar Navigation */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                  </h2>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-medium py-2">{day}</div>
                  ))}
                  {getDaysInMonth(selectedDate).map((date, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(date)}
                      className={`p-2 rounded-lg hover:bg-blue-50 relative ${
                        date.toDateString() === new Date().toDateString() ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                      {date.getDate()}
                      {getAppointmentsForDay(date).length > 0 && (
                        <span className="absolute bottom-1 right-1 w-1 h-1 bg-blue-500 rounded-full"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Today's Schedule */}
              <div className="bg-white rounded-lg shadow-sm p-6 mt-6 dark:bg-gray-700">
                <h2 className="text-xl font-semibold mb-4">Appointments for {formatDate(selectedDate)}</h2>
                <div className="space-y-4">
                  {getAppointmentsForDay(selectedDate).length > 0 ? (
                    getAppointmentsForDay(selectedDate).map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <h3 className="font-medium">{appointment.patientName}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-medium">{appointment.time}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.duration}</p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {appointment.status}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No appointments for this day.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="col-span-4">
              {/* Available Time Slots */}
              <div className="bg-white rounded-lg shadow-sm p-6 dark:bg-gray-700">
                <h2 className="text-xl font-semibold mb-4">Available Time Slots</h2>
                <div className="space-y-3">
                  {availableSlots.map((slot) => (
                    <div key={slot.id} className="p-3 border rounded-lg dark:border-gray-600">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{slot.day}</h3>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {slot.startTime} - {slot.endTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-sm p-6 mt-6 dark:bg-gray-700">
                <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-100 rounded-lg dark:bg-blue-800 text-center">
                    <h3 className="font-medium">Today's Appointments</h3>
                    <p className="text-lg">5</p>
                  </div>
                  <div className="p-4 bg-green-100 rounded-lg dark:bg-green-800 text-center">
                    <h3 className="font-medium">Completed</h3>
                    <p className="text-lg">3</p>
                  </div>
                  <div className="p-4 bg-yellow-100 rounded-lg dark:bg-yellow-800 text-center">
                    <h3 className="font-medium">Pending</h3>
                    <p className="text-lg">1</p>
                  </div>
                  <div className="p-4 bg-red-100 rounded-lg dark:bg-red-800 text-center">
                    <h3 className="font-medium">Canceled</h3>
                    <p className="text-lg">1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Slot Modal */}
          {showAddSlot && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 shadow-lg dark:bg-gray-700">
                <h3 className="text-xl font-semibold mb-4">Add Time Slot</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Day</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Start Time</label>
                  <input type="time" className="w-full p-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">End Time</label>
                  <input type="time" className="w-full p-2 border rounded-lg" />
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    onClick={() => setShowAddSlot(false)}
                  >
                    <Check className="h-4 w-4 inline-block" />
                    Save Slot
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentManagement;
