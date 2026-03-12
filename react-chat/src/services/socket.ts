import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:3001";

class SocketService {
  private socket: Socket | null = null;

  connect() {
    if (!this.socket) {
      this.socket = io(SOCKET_URL, {
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 1000,
      });
    }

    return this.socket;
  }

  getSocket(): Socket {
    if (!this.socket) {
      throw new Error("Socket not initialized. Call connect() first.");
    }

    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export const socketService = new SocketService();
