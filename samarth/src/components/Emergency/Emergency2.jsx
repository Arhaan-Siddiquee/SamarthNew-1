import { useState } from "react";

const Emergency2 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    contactNumber: "",
    medicalCondition: "",
    bloodType: "",
    allergies: "",
    emergencyContact: "",
    insuranceNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.age || !formData.contactNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Form submitted successfully!");

    // Clear the form data after submission
    setFormData({
      fullName: "",
      age: "",
      contactNumber: "",
      medicalCondition: "",
      bloodType: "",
      allergies: "",
      emergencyContact: "",
      insuranceNumber: "",
      address: "",
    });
  };

  const handleAmbulanceCall = () => {
    const confirmCall = window.confirm("Are you sure you want to call an ambulance?");
    if (confirmCall) {
      alert("Calling Emergency Services...");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-br from-gray-100 via-red-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-6 w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-red-600 dark:text-red-400">
          Emergency Information Form
        </h2>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Age <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        {/* Medical Condition */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Medical Condition
          </label>
          <input
            type="text"
            name="medicalCondition"
            value={formData.medicalCondition}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Blood Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Blood Type
          </label>
          <input
            type="text"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Emergency Contact */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Emergency Contact
          </label>
          <input
            type="tel"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
        >
          Submit
        </button>

        {/* Call Ambulance Button */}
        <button
          type="button"
          onClick={handleAmbulanceCall}
          className="w-full mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Call Ambulance
        </button>
      </form>
    </div>
  );
};

export default Emergency2;
