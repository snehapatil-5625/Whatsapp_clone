import React, { createContext, useContext, useState } from "react";

export type Chat = {
  id: number;
  name: string;
  messages: { text: string; time: string; sender: string }[];
};

interface ChatContextType {
  selectedChat: Chat | null;
  onSelectChat: (chat: Chat) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  const onSelectChat = (chat: Chat) => {
    setSelectedChat(chat);
  };
  return (
    <ChatContext.Provider value={{ selectedChat, onSelectChat }}>
      {children}
    </ChatContext.Provider>
  );
};
