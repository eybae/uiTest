// src/components/ModeToggle.jsx
import { useState } from 'react';

export default function ModeToggle() {
  const [mode, setMode] = useState('auto');
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">작동 모드 선택</h2>
      <div className="flex gap-2">
        {['auto', 'group', 'single'].map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-2 rounded ${
              mode === m ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {m === 'auto' ? '자동제어' : m === 'group' ? '일괄제어' : '개별제어'}
          </button>
        ))}
      </div>
    </div>
  );
}
