// src/components/DeviceStatusCard.jsx
import { useEffect, useState } from 'react';
import { useSocket } from '../contexts/WebSocketContext';

export default function DeviceStatusCard() {
  const socket = useSocket();
  const [statusList, setStatusList] = useState([
    { id: 1, status: '대기 중', brightness: 50 },
    { id: 2, status: '대기 중', brightness: 50 },
    { id: 3, status: '대기 중', brightness: 50 },
  ]);

  useEffect(() => {
    if (!socket) return;

    socket.on('device_status_update', (data) => {
      console.log('📡 수신:', data);
      setStatusList((prev) =>
        prev.map((led) =>
          led.id === parseInt(data.device?.split(' ')[1])
            ? { ...led, status: data.status, brightness: data.brightness }
            : led
        )
      );
    });
  }, [socket]);

  const handleBrightnessChange = (id, value) => {
    setStatusList((prev) =>
      prev.map((led) => (led.id === id ? { ...led, brightness: value } : led))
    );

    // 서버로 밝기 변경 요청 (예: WebSocket 또는 fetch API 사용)
    if (socket) {
      socket.emit('set_brightness', { device_id: id, brightness: value });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">장치 상태 및 밝기 제어</h2>
      <ul className="space-y-4">
        {statusList.map((led) => (
          <li key={led.id} className="border-b pb-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">LED {led.id}: {led.status}</span>
              <span className="text-sm text-gray-500">{led.brightness}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={led.brightness}
              onChange={(e) => handleBrightnessChange(led.id, parseInt(e.target.value))}
              className="w-full"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
