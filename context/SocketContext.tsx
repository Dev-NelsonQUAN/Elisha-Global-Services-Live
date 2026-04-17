// context/SocketContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

// Define the context structure
interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

// The Socket Provider Component
export function SocketProvider({ children }: { children: React.ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // 1. Initialize the connection
    const socketInstance = io(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000', {
        // Optional: Include the user's JWT for authentication on connection
        // auth: { token: localStorage.getItem('token') } 
    });

    // 2. Set up event listeners
    socketInstance.on('connect', () => {
      console.log('Socket.IO Connected!');
      setIsConnected(true);
    });

    socketInstance.on('disconnect', () => {
      console.log('Socket.IO Disconnected!');
      setIsConnected(false);
    });
    
    // 3. Store the socket instance
    setSocket(socketInstance);

    // 4. Cleanup on unmount
    return () => {
      socketInstance.disconnect();
    };
  }, []); // Run only once on mount

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
}

// Custom hook to use the socket
export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};