// src/components/CameraStream.jsx
export default function CameraStream() {
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">카메라 스트리밍</h2>
        <img src="/stream.mjpg" alt="camera" className="w-full rounded" />
        <p className="text-sm text-gray-500 mt-2">차량, 사람, 속도, 거리 표시 예정</p>
      </div>
    );
  }