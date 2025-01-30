import React, { useState, useRef, useEffect } from "react";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  PhoneOff,
  Send,
  Sun,
  Moon,
} from "lucide-react";

const LiveConsultation = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCallActive, setIsCallActive] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "Dr. Smith", content: "Hello! How are you feeling today?" },
    { sender: "Patient", content: "Hi Doctor, I've been experiencing some headaches." },
  ]);
  const [notes, setNotes] = useState("Patient reports recurring headaches. Frequency: 3-4 times per week.");
  const [activeTab, setActiveTab] = useState("chat");
  const [newMessage, setNewMessage] = useState("");

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  const localStream = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    return () => {
      if (localStream.current) {
        localStream.current.getTracks().forEach((track) => track.stop());
      }
      if (peerConnection.current) {
        peerConnection.current.close();
      }
    };
  }, []);

  const startCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localStream.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      peerConnection.current = new RTCPeerConnection();
      stream.getTracks().forEach((track) => peerConnection.current.addTrack(track, stream));

      peerConnection.current.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };

      setIsCallActive(true);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const endCall = () => {
    if (localStream.current) {
      localStream.current.getTracks().forEach((track) => track.stop());
    }
    if (peerConnection.current) {
      peerConnection.current.close();
    }
    setIsCallActive(false);
  };

  const toggleCamera = () => {
    if (localStream.current) {
      localStream.current.getVideoTracks().forEach((track) => (track.enabled = !track.enabled));
    }
    setIsCameraOn((prev) => !prev);
  };

  const toggleMic = () => {
    if (localStream.current) {
      localStream.current.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
    }
    setIsMicOn((prev) => !prev);
  };

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { sender: "Patient", content: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className={`min-h-screen p-6 flex justify-center items-center transition-all ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className={`w-full max-w-6xl p-6 rounded-3xl shadow-lg space-y-6 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        {/* Header */}
        <div className={`flex justify-between items-center p-4 shadow-md rounded-2xl ${isDarkMode ? "bg-gray-700 text-white" : "bg-white"}`}>
          <div>
            <h1 className="text-3xl font-bold">Live Consultation</h1>
            <p className="text-sm">{isDarkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className={`p-3 rounded-full transition ${isDarkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-800"}`}
              onClick={() => setIsDarkMode((prev) => !prev)}
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
            <button
              className={`px-5 py-2 flex items-center gap-2 rounded-full transition-all ${
                isCallActive ? "bg-red-500 text-white hover:bg-red-600" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              onClick={isCallActive ? endCall : startCall}
            >
              {isCallActive ? <PhoneOff className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
              {isCallActive ? "End Call" : "Start Call"}
            </button>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Video Section */}
          <div className="col-span-2 space-y-6">
            <div className={`p-6 rounded-2xl shadow-lg ${isDarkMode ? "bg-gray-700" : "bg-white"}`}>
              <div className="aspect-video bg-gray-900 rounded-2xl relative flex items-center justify-center">
                <video ref={localVideoRef} autoPlay playsInline className="absolute inset-0 w-full h-full rounded-2xl" />
                <video ref={remoteVideoRef} autoPlay playsInline className="absolute bottom-4 right-4 w-40 h-28 bg-gray-800 rounded-xl shadow-md" />
              </div>

              <div className="flex justify-center space-x-6 mt-4">
                <button className={`p-3 rounded-full transition ${isCameraOn ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-800"}`} onClick={toggleCamera}>
                  {isCameraOn ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6" />}
                </button>
                <button className={`p-3 rounded-full transition ${isMicOn ? "bg-blue-500 text-white" : "bg-gray-400 text-gray-800"}`} onClick={toggleMic}>
                  {isMicOn ? <Mic className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Chat & Notes */}
          <div className={`col-span-1 p-6 rounded-2xl shadow-lg ${isDarkMode ? "bg-gray-700" : "bg-white"}`}>
            <div className="flex border-b">
              <button className={`flex-1 px-4 py-2 text-lg transition-all ${activeTab === "chat" ? "border-b-4 border-blue-500 font-bold" : ""}`} onClick={() => setActiveTab("chat")}>
                Chat
              </button>
              <button className={`flex-1 px-4 py-2 text-lg transition-all ${activeTab === "notes" ? "border-b-4 border-blue-500 font-bold" : ""}`} onClick={() => setActiveTab("notes")}>
                Notes
              </button>
            </div>
            {activeTab === "chat" ? (
              <div className="space-y-3 text-black mt-4">
                {messages.map((msg, index) => (
                  <div key={index} className="p-3 rounded-lg bg-gray-200 text-black">
                    <strong>{msg.sender}: </strong> {msg.content}
                  </div>
                ))}
                <input className="w-full p-2 border text-black rounded" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                <button className="mt-2 p-2 bg-blue-500 text-black rounded" onClick={sendMessage}>
                  <Send />
                </button>
              </div>
            ) : (
              <textarea className="w-full h-40 p-4 border text-black rounded-lg resize-none" value={notes} onChange={(e) => setNotes(e.target.value)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveConsultation;
