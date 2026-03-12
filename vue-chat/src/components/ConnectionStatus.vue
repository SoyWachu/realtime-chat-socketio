<script setup lang="ts">
import { useChatStore } from "../stores/chatStore";

const chat = useChatStore();
</script>

<template>
  <div>Status: {{ chat.connected ? "🟢 Conectado" : "🔴 Desconectado" }}</div>
</template>
