import React, { useState } from 'react';
import { Search, Filter, FilePlus, Activity, Calendar, Clock, Heart, User, ChevronDown, FileText, List, GridIcon, BarChart } from 'lucide-react';

const MyPatients = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample patient data
  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 32,
      gender: "Female",
      bloodGroup: "A+",
      lastVisit: "2024-01-15",
      upcomingAppointment: "2024-02-01",
      condition: "Hypertension",
      status: "Active",
      phone: "+1 234-567-8901",
      email: "sarah.j@email.com",
      medicalHistory: [
        { date: "2024-01-15", type: "Check-up", notes: "Blood pressure: 130/85" },
        { date: "2023-12-01", type: "Treatment", notes: "Prescribed medication for blood pressure" }
      ],
      vitals: {
        bloodPressure: "130/85",
        heartRate: "72 bpm",
        temperature: "98.6°F",
        weight: "65 kg",
        height: "165 cm"
      },
      medications: [
        { name: "Lisinopril", dosage: "10mg", frequency: "Daily" },
        { name: "Aspirin", dosage: "81mg", frequency: "Daily" }
      ]
    },
    // Add more patient records here
  ];

  const renderPatientCard = (patient) => (
    <div 
      key={patient.id}
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => setSelectedPatient(patient)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{patient.name}</h3>
            <p className="text-gray-500 text-sm">
              {patient.age} years • {patient.gender} • {patient.bloodGroup}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          patient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {patient.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Last Visit</p>
          <p className="font-medium">{new Date(patient.lastVisit).toLocaleDateString()}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Next Appointment</p>
          <p className="font-medium">{new Date(patient.upcomingAppointment).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <p className="text-sm text-gray-500">Current Condition</p>
        <p className="font-medium">{patient.condition}</p>
      </div>
    </div>
  );

  const renderPatientDetails = () => {
    if (!selectedPatient) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
        <div className="bg-white w-2/5 h-full overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold">{selectedPatient.name}</h2>
                <p className="text-gray-500">Patient ID: #{selectedPatient.id}</p>
              </div>
              <button 
                onClick={() => setSelectedPatient(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'overview' ? 'bg-blue-500 text-white' : 'text-gray-500'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('records')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'records' ? 'bg-blue-500 text-white' : 'text-gray-500'
                }`}
              >
                Medical Records
              </button>
              <button
                onClick={() => setActiveTab('vitals')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'vitals' ? 'bg-blue-500 text-white' : 'text-gray-500'
                }`}
              >
                Vitals
              </button>
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <User className="w-4 h-4" />
                      <span>Age</span>
                    </div>
                    <p className="font-medium">{selectedPatient.age} years</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <Heart className="w-4 h-4" />
                      <span>Blood Group</span>
                    </div>
                    <p className="font-medium">{selectedPatient.bloodGroup}</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">📱 {selectedPatient.phone}</p>
                    <p className="text-gray-600">✉️ {selectedPatient.email}</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Current Medications</h3>
                  <div className="space-y-3">
                    {selectedPatient.medications.map((med, index) => (
                      <div key={index} className="p-3 bg-blue-50 rounded-lg">
                        <p className="font-medium">{med.name}</p>
                        <p className="text-sm text-gray-600">
                          {med.dosage} • {med.frequency}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'records' && (
              <div className="space-y-4">
                {selectedPatient.medicalHistory.map((record, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">{record.type}</h4>
                      <span className="text-sm text-gray-500">
                        {new Date(record.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600">{record.notes}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'vitals' && (
              <div className="space-y-4">
                {Object.entries(selectedPatient.vitals).map(([key, value]) => (
                  <div key={key} className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                    <p className="font-medium text-lg">{value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Patients</h1>
            <p className="text-gray-500">Manage and view patient records</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
            <FilePlus className="w-4 h-4" />
            Add New Patient
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search patients by name, ID, or condition..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <div className="flex border rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
              >
                <GridIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Patient Grid */}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {patients.map(patient => renderPatientCard(patient))}
        </div>

        {/* Patient Details Sidebar */}
        {renderPatientDetails()}
      </div>
    </div>
  );
};

export default MyPatients;