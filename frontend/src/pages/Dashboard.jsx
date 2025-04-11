// src/pages/Dashboard.jsx
import DeviceMap from '../components/DeviceMap';
import DeviceStatusCard from '../components/DeviceStatusCard';
import CameraStream from '../components/CameraStream';
import ModeToggle from '../components/ModeToggle';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1">
        <ModeToggle />
        <DeviceMap />
      </div>
      <div className="col-span-1 space-y-4">
        <CameraStream />
        <DeviceStatusCard />
      </div>
    </div>
  );
}
