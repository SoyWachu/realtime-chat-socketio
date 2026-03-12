import { useEffect } from "react";
import { socketService } from "./services/socket";
import { useChatStore } from "./store/chatStore";
import ChatWindow from "./components/ChatWindow";
import type { Message } from "./types/message";

function App() {
  const addMessage = useChatStore((state) => state.addMessage);
  const setConnected = useChatStore((state) => state.setConnected);

  useEffect(() => {
    const socket = socketService.connect();

    const handleConnect = () => {
      setConnected(true);
    };

    const handleDisconnect = () => {
      setConnected(false);
    };

    const handleMessage = (msg: Message) => {
      addMessage(msg);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("message", handleMessage);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("message", handleMessage);
    };
  }, [addMessage, setConnected]);

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem("chat_messages");

      if (saved) {
        const parsed = JSON.parse(saved);
        parsed.forEach((msg: any) => addMessage(msg));
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return <ChatWindow />;
}

export default App;
