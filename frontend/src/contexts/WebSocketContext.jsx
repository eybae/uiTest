// ✅ src/contexts/WebSocketContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const newSocket = io("http://localhost:5050");
const WebSocketContext = createContext(null);

export default function WebSocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(); // 자동 origin 사용 (proxy 설정 필요)
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
}

export const useSocket = () => useContext(WebSocketContext);
