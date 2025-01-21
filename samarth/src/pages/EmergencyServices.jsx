import emergencyBg from "../assets/emergencybg.jpg"; // Replace with your image path
import Emergency1 from "../components/Emergency/Emergency1";
import Emergency2 from "../components/Emergency/Emergency2";
import Emergency3 from "../components/Emergency/Emergency3";

const EmergencyServices = () => {
  return (
    <>
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage: `url(${emergencyBg})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative text-center p-6">
        <h1 className="text-5xl font-bold">
          Emergency Medical Services: Quick and Reliable Assistance 24/7
        </h1>
      </div>
    </div>
    <Emergency3/>
    <Emergency1/>
    <Emergency2/>
    </>
  );
};

export default EmergencyServices;
