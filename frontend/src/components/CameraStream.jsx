// src/components/CameraStream.jsx
import { useState } from "react";

const ptzActions = [
  { label: '◀️', action: 'left' },
  { label: '▶️', action: 'right' },
  { label: '🔼', action: 'up' },
  { label: '🔽', action: 'down' },
  { label: '⏹️', action: 'stop' },
  { label: '🔍', action: 'zoom_in' },
  { label: '🔎', action: 'zoom_out' },
];

export default function CameraStream() {
  const [speed, setSpeed] = useState(3);

  const sendPTZ = async (action) => {
    const res = await fetch(`http://localhost:5050/ptz/control`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, speed }),
    });
    const data = await res.json();
    console.log('🎮 PTZ 응답:', data);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-3">
      <h2 className="text-lg font-semibold">카메라 스트리밍</h2>
      <img src="http://localhost:5050/stream.mjpg" alt="camera" className="w-full rounded" />
      
      <div className="flex gap-2 flex-wrap mt-2 justify-center">
        {ptzActions.map(({ label, action }) => (
          <button
            key={action}
            onClick={() => sendPTZ(action)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-3">
        <label className="block text-sm mb-1">속도: {speed}</label>
        <input
          type="range"
          min={1}
          max={7}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}
