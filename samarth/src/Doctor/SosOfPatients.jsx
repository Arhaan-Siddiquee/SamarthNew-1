const patients = [
  { name: "John Doe", ward: "Cardiology", status: "Admitted", sos: true },
  { name: "Jane Smith", ward: "Neurology", status: "Admitted", sos: false },
  { name: "Alice Johnson", ward: "ICU", status: "Critical", sos: true },
  { name: "Bob Williams", ward: "Orthopedics", status: "Stable", sos: false },
];

const SosPatient = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Doctor Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-red-500 text-2xl animate-pulse">🚨</span>
          <span className="text-red-600 font-medium">SOS Alerts Active</span>
        </div>
      </div>

      {/* Patient Ward Information */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient, index) => (
          <div
            key={index}
            className={`p-4 border-2 shadow-md rounded-xl ${
              patient.sos ? "border-red-500 bg-red-100" : "border-gray-300 bg-white"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-blue-500 text-2xl">👤</span>
              <h2 className="text-lg font-semibold">{patient.name}</h2>
            </div>
            <p className="flex items-center gap-2 text-gray-700">
              <span className="text-green-500 text-xl">🏥</span>
              <span className="font-medium">{patient.ward} Ward</span>
            </p>
            <p className="mt-1">
              Status:{" "}
              <span
                className={`font-semibold ${
                  patient.sos ? "text-red-600" : "text-gray-800"
                }`}
              >
                {patient.status}
              </span>
            </p>
            {patient.sos && (
              <p className="text-red-500 font-semibold mt-2">
                🚨 Emergency Alert: Patient Pressed SOS!
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SosPatient;
