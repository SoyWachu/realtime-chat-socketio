<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { socketService } from "./services/socket";
import { useChatStore } from "./stores/chatStore";
import ChatWindow from "./components/ChatWindow.vue";
import type { Message } from "./types/message";

const chat = useChatStore();

let socket: any;

onMounted(() => {
  const handleStorage = () => {
    const saved = localStorage.getItem("chat_messages");

    if (saved) {
      const parsed = JSON.parse(saved);
      parsed.forEach((msg: Message) => chat.addMessage(msg));
    }
  };

  window.addEventListener("storage", handleStorage);

  socket = socketService.connect();

  const handleConnect = () => chat.setConnected(true);
  const handleDisconnect = () => chat.setConnected(false);
  const handleMessage = (msg: Message) => chat.addMessage(msg);

  socket.on("connect", handleConnect);
  socket.on("disconnect", handleDisconnect);
  socket.on("message", handleMessage);
});

onUnmounted(() => {
  window.removeEventListener("storage", handleStorage);
  socket.off("connect");
  socket.off("disconnect");
  socket.off("message");
});
</script>

<template>
  <ChatWindow />
</template>
