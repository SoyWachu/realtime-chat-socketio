import ConnectionStatus from "./ConnectionStatus";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatWindow() {
  return (
    <div>
      <h2>Chat Realtime</h2>

      <ConnectionStatus />

      <MessageList />

      <MessageInput />
    </div>
  );
}
