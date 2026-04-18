'use client';

import { useState } from 'react';
import { Save } from 'lucide-react';

interface Settings {
  positions: string[];
  skills: string[];
  experienceLevels: string[];
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    positions: ['주니어 개발자', '시니어 개발자', '개발 리드', '기획자', '디자이너'],
    skills: ['React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Docker'],
    experienceLevels: ['신입', '1-3년', '3-5년', '5-7년', '7년 이상'],
  });

  const [saved, setSaved] = useState(false);

  const handleAddPosition = (pos: string) => {
    if (pos && !settings.positions.includes(pos)) {
      setSettings({
        ...settings,
        positions: [...settings.positions, pos],
      });
    }
  };

  const handleRemovePosition = (idx: number) => {
    setSettings({
      ...settings,
      positions: settings.positions.filter((_, i) => i !== idx),
    });
  };

  const handleSave = () => {
    localStorage.setItem('classificationSettings', JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">분류 설정</h1>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">직급 목록</h2>
          <div className="space-y-3">
            {settings.positions.map((pos, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-gray-900">{pos}</span>
                <button
                  onClick={() => handleRemovePosition(idx)}
                  className="text-sm text-red-600 hover:text-red-700 font-semibold"
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기술 스택</h2>
          <div className="space-y-3">
            {settings.skills.map((skill, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-gray-900">{skill}</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">기술</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">경력 구간</h2>
          <div className="space-y-3">
            {settings.experienceLevels.map((level, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-gray-900">{level}</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">경력</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
        >
          <Save className="w-5 h-5" />
          저장
        </button>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <p className="text-green-900 font-semibold">설정이 저장되었습니다</p>
        </div>
      )}
    </div>
  );
}
