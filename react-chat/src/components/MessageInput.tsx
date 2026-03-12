import { useState } from "react";
import { socketService } from "../services/socket";

export default function MessageInput() {
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

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
      text,
      avatar,
    });

    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribir mensaje..."
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}
