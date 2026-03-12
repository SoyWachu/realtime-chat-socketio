<script setup lang="ts">
import { useChatStore } from "../stores/chatStore";
import { ref, watch, nextTick } from "vue";

const chat = useChatStore();
const bottomRef = ref<HTMLElement | null>(null);

watch(
  () => chat.messages,
  async () => {
    await nextTick();
    bottomRef.value?.scrollIntoView({ behavior: "smooth" });
  },
  { deep: true },
);

const getAvatar = (msg: any) => {
  return (
    msg.avatar ?? `https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.user}`
  );
};
</script>

<template>
  <div style="max-height: 300px; overflow-y: auto">
    <div
      v-for="msg in chat.messages"
      :key="msg.id"
      style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px"
    >
      <img
        :src="getAvatar(msg)"
        :alt="msg.user"
        width="32"
        height="32"
        style="border-radius: 50%"
      />

      <div>
        <strong>{{ msg.user }}:</strong> {{ msg.text }}
      </div>
    </div>

    <div ref="bottomRef"></div>
  </div>
</template>
