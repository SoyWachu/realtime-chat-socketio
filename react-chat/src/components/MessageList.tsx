import { useChatStore } from "../store/chatStore";
import { useEffect, useRef } from "react";

export default function MessageList() {
  const messages = useChatStore((state) => state.messages);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      {messages.map((msg) => (
        <div
          key={msg.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <img
            src={
              msg.avatar ??
              `https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.user}`
            }
            alt={msg.user}
            width={32}
            height={32}
            style={{ borderRadius: "50%" }}
          />

          <div>
            <strong>{msg.user}: </strong>
            {msg.text}
          </div>
        </div>
      ))}

      <div ref={bottomRef} />
    </div>
  );
}
