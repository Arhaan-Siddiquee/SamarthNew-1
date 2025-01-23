import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Upload, 
  PlusCircle, 
  BarChart2, 
  Clock 
} from 'lucide-react';

const MedicalRecordsPage = () => {
  const [records, setRecords] = useState([
    { type: 'Blood Sugar', value: '120 mg/dL', date: '2024-01-15' },
    { type: 'Blood Pressure', value: '120/80 mmHg', date: '2024-01-20' }
  ]);

  const [newRecord, setNewRecord] = useState({ type: '', value: '' });

  const addRecord = () => {
    if (newRecord.type && newRecord.value) {
      setRecords([
        ...records, 
        { ...newRecord, date: new Date().toISOString().split('T')[0] }
      ]);
      setNewRecord({ type: '', value: '' });
    }
  };

  const [documents, setDocuments] = useState([]);

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files).map(file => ({
      name: file.name,
      type: file.type,
      size: file.size,
      uploadDate: new Date().toISOString().split('T')[0]
    }));
    setDocuments([...documents, ...newFiles]);
  };

  return (
    <div className="min-h-screen mt-[125px] bg-gradient-to-br from-teal-50 to-white p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8"
      >
        <div className="flex items-center mb-8">
          <FileText className="text-teal-500 mr-4" size={48} />
          <h1 className="text-4xl font-bold text-teal-800">
            Medical Records
          </h1>
        </div>

        <div className="bg-teal-50 rounded-2xl p-6 mb-6">
          <div className="flex space-x-4 mb-4">
            <div className="flex-grow">
              <input 
                value={newRecord.type}
                onChange={(e) => setNewRecord(prev => ({...prev, type: e.target.value}))}
                placeholder="Record Type (e.g. Blood Sugar)" 
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <input 
                value={newRecord.value}
                onChange={(e) => setNewRecord(prev => ({...prev, value: e.target.value}))}
                placeholder="Value (e.g. 120 mg/dL)" 
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <button 
              onClick={addRecord}
              className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 transition"
            >
              <PlusCircle />
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart2 className="mr-2 text-teal-500" /> 
              Recent Measurements
            </h2>
            <div className="space-y-2">
              {records.map((record, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-between bg-white p-3 rounded-lg shadow-sm"
                >
                  <div>
                    <span className="font-medium">{record.type}</span>
                    <span className="ml-4 text-gray-600">{record.value}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {record.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6">
          <div className="flex items-center mb-4">
            <Upload className="text-blue-500 mr-2" />
            <h2 className="text-2xl font-semibold text-blue-800">
              Document Upload
            </h2>
          </div>

          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center">
            <input 
              type="file" 
              multiple
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label 
              htmlFor="file-upload" 
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="w-12 h-12 text-blue-500 mb-4" />
              <p className="text-blue-700">
                Click to upload medical documents
              </p>
              <p className="text-sm text-blue-500">
                PDF, Images, or Scanned Reports
              </p>
            </label>
          </div>

          {documents.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Uploaded Documents</h3>
              <div className="space-y-2">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-between bg-white p-3 rounded-lg shadow-sm"
                  >
                    <div>
                      <span className="font-medium">{doc.name}</span>
                      <span className="ml-4 text-gray-600">
                        {(doc.size / 1024).toFixed(2)} KB
                      </span>
                    </div>
                    <div className="text-gray-500">{doc.uploadDate}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MedicalRecordsPage;