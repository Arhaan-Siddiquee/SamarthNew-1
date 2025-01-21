import { useState } from "react";

const DiseasePrediction = () => {
  const [metrics] = useState([
    { disease: "Diabetes", count: 120 },
    { disease: "Heart Disease", count: 85 },
    { disease: "Skin Cancer", count: 45 },
    { disease: "Pneumonia", count: 70 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-12 text-white">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          Disease Prediction by Picture
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
          Leveraging machine learning for accurate disease diagnosis and
          predictions from uploaded images.
        </p>
      </header>

      {/* Metrics Section */}
      <section className="max-w-6xl mx-auto mb-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-xl shadow-lg text-center hover:bg-gray-600 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{metric.disease}</h3>
            <p className="text-gray-300 text-lg">{metric.count} Cases Predicted</p>
          </div>
        ))}
      </section>

      {/* Graph Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-3xl font-bold mb-6 text-center">Prediction Accuracy Graph</h3>
        <div className="bg-gray-700 rounded-lg shadow-lg p-6">
          <div className="h-64 bg-gray-500 rounded-lg flex items-center justify-center">
            <p className="text-gray-300 italic">Graph placeholder (e.g., Bar/Line chart)</p>
          </div>
        </div>
      </section>

      {/* Upload Metrics */}
      <section className="max-w-5xl mx-auto mb-16">
        <h3 className="text-3xl font-bold mb-6 text-center">Disease Detection Trends</h3>
        <p className="text-gray-400 text-center mb-8">
          Track the most common diseases detected over the past month.
        </p>
        <div className="bg-gray-700 rounded-lg shadow-lg p-6">
          <div className="h-64 bg-gray-500 rounded-lg flex items-center justify-center">
            <p className="text-gray-300 italic">Graph placeholder (e.g., Pie chart)</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <footer className="text-center">
        <button className="px-8 py-4 bg-green-600 text-gray-900 font-bold rounded-lg shadow-md hover:bg-green-700 transition transform hover:scale-105">
          Upload Image for Prediction
        </button>
      </footer>
    </div>
  );
};

export default DiseasePrediction;
