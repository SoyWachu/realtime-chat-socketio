import { create } from "zustand";
import type { Message } from "../types/message";

interface ChatState {
  messages: Message[];
  connected: boolean;

  addMessage: (message: Message) => void;
  setConnected: (status: boolean) => void;
}

const savedMessages = localStorage.getItem("chat_messages");

export const useChatStore = create<ChatState>((set) => ({
  messages: savedMessages ? JSON.parse(savedMessages) : [],
  connected: false,

  addMessage: (message) =>
    set((state) => {
      const exists = state.messages.some((m) => m.id === message.id);

      if (exists) return state;

      const updated = [...state.messages, message];

      localStorage.setItem("chat_messages", JSON.stringify(updated));

      return { messages: updated };
    }),

  setConnected: (status) =>
    set(() => ({
      connected: status,
    })),
}));
