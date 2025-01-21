import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `process.env`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "system", content: "You are a medical assistant." }, ...messages, newMessage],
        }),
      });

      const data = await response.json();
      const aiReply = data.choices[0]?.message?.content || "Sorry, I couldn't process your request.";
      setMessages([...messages, newMessage, { role: "assistant", content: aiReply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...messages, newMessage, { role: "assistant", content: "An error occurred. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-green-100 via-teal-100 to-green-200 p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-teal-800 text-center mb-6">AI-Powered Medical Chatbot</h1>
      <p className="text-center text-teal-600 mb-6">
        Ask any medical-related questions, and our AI assistant will provide helpful answers.
      </p>

      <div className="flex-1 overflow-y-auto bg-white shadow-lg rounded-lg p-4 mb-6">
        {messages.length === 0 && (
          <p className="text-center text-gray-400">No messages yet. Start the conversation!</p>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 p-3 rounded-lg ${
              message.role === "user"
                ? "bg-teal-500 text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800 self-start mr-auto"
            } max-w-md`}
          >
            {message.content}
          </div>
        ))}
      </div>

      <div className="flex items-center bg-white shadow-md rounded-lg p-2">
        <input
          type="text"
          className="flex-grow p-3 border-none rounded-lg outline-none text-gray-700"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className={`ml-2 px-6 py-3 text-white font-semibold rounded-lg ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-teal-500 hover:bg-teal-600"
          }`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
