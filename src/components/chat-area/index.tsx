import {
  EllipsisVerticalIcon,
  FaceSmileIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useChat } from "../../lib/chat-context";

export default function ChatArea() {
  const { selectedChat } = useChat();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(selectedChat?.messages || []);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((prevMessages: any) => [
      ...prevMessages,
      { text: message, time: "Now", sender: "self" },
    ]);
    setMessage("");
  };

  return (
    <div className="flex-1 flex flex-col bg-[#efeae2] relative">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-2.5 bg-[#f0f2f5]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full text-sm bg-gray-300 overflow-hidden">
            <img
              src="/placeholder.svg"
              alt={selectedChat?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-medium">{selectedChat?.name}</h2>
            <p className="text-xs text-gray-500">
              Last active {selectedChat?.messages[0]?.time}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-transparent hover:border-transparent">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full bg-transparent hover:border-transparent">
            <EllipsisVerticalIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {selectedChat?.messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "self" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  message.sender === "self" ? "bg-[#d9fdd3]" : "bg-white"
                } max-w-[60%] rounded-lg p-2 text-sm`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-2 bg-[#f0f2f5]">
        <div className="flex items-center gap-2 bg-white rounded-lg px-6 py-2">
          <button className="p-0 hover:border-transparent bg-transparent rounded-full">
            <FaceSmileIcon className="h-5 w-5 text-[#54656f]" />
          </button>
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 outline-none px-1"
          />
          <button className="p-0 bg-transparent hover:border-transparent rounded-full">
            <MicrophoneIcon className="h-5 w-5 text-[#54656f]" />
          </button>
        </div>
      </div>
    </div>
  );
}
