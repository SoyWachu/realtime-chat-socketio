import { useChatStore } from "../store/chatStore";

export default function ConnectionStatus() {
  const connected = useChatStore((state) => state.connected);

  return <div>Status: {connected ? "🟢 Conectado" : "🔴 Desconectado"}</div>;
}
