<script setup lang="ts">
import ConnectionStatus from "./ConnectionStatus.vue";
import MessageList from "./MessageList.vue";
import MessageInput from "./MessageInput.vue";
</script>

<template>
  <div>
    <h2>Chat Realtime</h2>

    <ConnectionStatus />

    <MessageList />

    <MessageInput />
  </div>
</template>
