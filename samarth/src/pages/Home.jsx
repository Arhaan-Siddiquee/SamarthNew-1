import homebg from "../assets/homebg.jpg";

const Home = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-900 via-teal-700 to-blue-500 relative">
        <div id="home" className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-12 lg:px-20 text-white
        "style={{
            backgroundImage: `url(${homebg})`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-left text-white mb-6 w-full max-w-3xl">
            Welcome to <span className="text-green-600">सmarth</span>
            </h1>
            <p className="text-2xl md:text-3xl font-extrabold text-gray-100 leading-relaxed text-left mb-8 w-full max-w-3xl tracking-wide">
  Revolutionizing healthcare with emergency services, real-time consultations, AI-powered chatbot, and machine learning-based disease predictions.
</p>
            <button className="px-8 py-4 bg-yellow-400 text-gray-800 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 focus:outline-none">
            Learn More
            </button>

        </div>
  
        <section id="emergency" className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-4">Emergency Medical Services</h2>
          <p className="text-lg text-gray-600 text-center">
            Access emergency medical assistance 24/7 at the click of a button.
          </p>
        </section>
  
        <section id="consultation" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-4">Real-Time Consultation Queue</h2>
          <p className="text-lg text-gray-600 text-center">
            Schedule and manage your consultations in real-time with ease.
          </p>
        </section>
  
        <section id="chatbot" className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Chatbot</h2>
          <p className="text-lg text-gray-600 text-center">
            Get instant answers and guidance through our intelligent chatbot.
          </p>
        </section>
  
        <section id="disease" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-4">Disease Prediction</h2>
          <p className="text-lg text-gray-600 text-center">
            Upload images for ML-based disease diagnosis and predictions.
          </p>
        </section>
      </div>
    );
  };
  
  export default Home;
  