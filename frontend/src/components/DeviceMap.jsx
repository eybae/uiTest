// src/components/DeviceMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ledDevices = [
  { id: 1, lat: 37.5665, lng: 126.9780, status: 'on' },
  { id: 2, lat: 37.5651, lng: 126.9895, status: 'off' },
  { id: 3, lat: 37.5678, lng: 126.9769, status: 'on' },
];

export default function DeviceMap() {
  return (
    <MapContainer center={[37.5665, 126.9780]} zoom={14} className="h-72 rounded-lg z-0">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {ledDevices.map(device => (
        <Marker key={device.id} position={[device.lat, device.lng]}>
          <Popup>
            LED {device.id} - 상태: {device.status.toUpperCase()}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}