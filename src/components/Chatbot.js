import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me anything about my resume.", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_query: input }),
      });

      const data = await response.json();
      const botMessage = { text: data.reply || "No response received.", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [...prev, { text: "Error fetching response.", sender: "bot" }]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 flex items-center justify-center"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-lg p-4 mt-4 border border-gray-300 animate-fade-in">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold text-gray-700">Chat with Me!</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">×</button>
          </div>

          {/* Messages Display */}
          <div className="h-72 overflow-y-auto p-2 text-gray-600">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 ${msg.sender === "bot" ? "text-blue-600" : "text-black"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex items-center mt-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-pink-500"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
