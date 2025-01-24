import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="max-w-lg w-full bg-opacity-80 bg-black p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 tracking-wide">Welcome to Our Healthcare Platform</h1>
        <p className="text-lg mb-6 opacity-80">Choose your role to proceed</p>

        <div className="flex justify-between gap-6">
          <a href="/doctor" target="_blank" rel="noopener noreferrer">
            <button className="w-full py-3 px-6 bg-orange-500 text-white rounded-lg transform transition-transform hover:scale-105 hover:bg-orange-400 focus:outline-none">
              Doctor
            </button>
          </a>
          <a href="/patient" target="_blank" rel="noopener noreferrer">
            <button className="w-full py-3 px-6 bg-green-500 text-white rounded-lg transform transition-transform hover:scale-105 hover:bg-green-400 focus:outline-none">
              Patient
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
