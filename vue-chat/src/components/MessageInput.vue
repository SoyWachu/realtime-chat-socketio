<script setup lang="ts">
import { ref } from "vue";
import { socketService } from "../services/socket";

const text = ref("");

const sendMessage = () => {
  if (!text.value.trim()) return;

  const socket = socketService.getSocket();

  let username = localStorage.getItem("username");
  let avatar = localStorage.getItem("avatar");

  if (!username) {
    username = `User${Math.floor(Math.random() * 1000)}`;
    avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;

    localStorage.setItem("username", username);
    localStorage.setItem("avatar", avatar);
  }

  socket.emit("message", {
    id: Date.now().toString(),
    user: username,
    text: text.value,
    avatar,
  });

  text.value = "";
};
</script>

<template>
  <div>
    <input v-model="text" placeholder="Escribir mensaje..." />
    <button @click="sendMessage">Enviar</button>
  </div>
</template>
