
// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

const menuItems = [
  { name: '대시보드', path: '/' },
  { name: '카메라 설정', path: '/camera-settings' },
  { name: '자동제어 설정', path: '/auto-control' },
  { name: '일괄제어 설정', path: '/group-control' },
  { name: '개별제어 설정', path: '/single-control' },
  { name: '로그 데이터', path: '/logs' },
];

export default function Sidebar() {
  return (
    <div className="w-60 bg-gray-800 text-white p-4 space-y-4">
      <h1 className="text-xl font-bold mb-6">Smart LED Control</h1>
      {menuItems.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `block px-3 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}