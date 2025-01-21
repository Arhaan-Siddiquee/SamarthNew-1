import React from "react";

const RealTimeQueue = () => {
  return (
    <section
      id="consultation"
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-6 md:px-12"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Real-Time Consultation Queue
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Streamline your healthcare experience with real-time consultation queues. 
          Stay informed about waiting times, session progress, and notifications.
        </p>
        <ul className="list-disc text-left space-y-4 text-gray-700 text-lg max-w-xl mx-auto">
          <li>
            <span className="font-semibold text-green-600">Queue Position:</span>{" "}
            View your current position in the queue in real-time.
          </li>
          <li>
            <span className="font-semibold text-green-600">Live Updates:</span>{" "}
            Get instant updates on consultation session status.
          </li>
          <li>
            <span className="font-semibold text-green-600">Estimated Wait Time:</span>{" "}
            Know approximately how long it will take for your turn.
          </li>
          <li>
            <span className="font-semibold text-green-600">Notifications:</span>{" "}
            Receive reminders and alerts for your consultation.
          </li>
          <li>
            <span className="font-semibold text-green-600">Cancel/Reschedule:</span>{" "}
            Manage your appointments with ease through the platform.
          </li>
          <li>
            <span className="font-semibold text-green-600">AI Suggestions:</span>{" "}
            Receive smart recommendations for the best available time slots 
            based on queue length and your preferences.
          </li>
          <li>
            <span className="font-semibold text-green-600">Calendar Integration:</span>{" "}
            Sync your appointments directly with Google Calendar or other platforms.
          </li>
          <li>
            <span className="font-semibold text-green-600">Multilingual Support:</span>{" "}
            Use the platform in your preferred language for better accessibility.
          </li>
        </ul>
        <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default RealTimeQueue;
