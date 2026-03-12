import { defineStore } from "pinia";
import type { Message } from "../types/message";

const savedMessages = localStorage.getItem("chat_messages");

export const useChatStore = defineStore("chat", {
  state: () => ({
    messages: savedMessages ? JSON.parse(savedMessages) : ([] as Message[]),
    connected: false,
  }),

  actions: {
    addMessage(message: Message) {
      const exists = this.messages.some((m: Message) => m.id === message.id);

      if (!exists) {
        this.messages.push(message);

        localStorage.setItem("chat_messages", JSON.stringify(this.messages));
      }
    },

    setConnected(status: boolean) {
      this.connected = status;
    },
  },
});
