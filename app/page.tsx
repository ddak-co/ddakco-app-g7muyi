'use client';

import { useEffect, useState } from 'react';
import { BarChart3, FileText, Upload } from 'lucide-react';

interface ResumeStats {
  total: number;
  classified: number;
  pending: number;
  recentCount: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<ResumeStats>({
    total: 0,
    classified: 0,
    pending: 0,
    recentCount: 0,
  });

  useEffect(() => {
    const stored = localStorage.getItem('resumeStats');
    if (stored) {
      setStats(JSON.parse(stored));
    } else {
      const defaultStats: ResumeStats = {
        total: 12,
        classified: 8,
        pending: 4,
        recentCount: 3,
      };
      setStats(defaultStats);
      localStorage.setItem('resumeStats', JSON.stringify(defaultStats));
    }
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">대시보드</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">전체 이력서</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
            </div>
            <FileText className="w-10 h-10 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">분류 완료</p>
              <p className="text-3xl font-bold text-green-600 mt-2">{stats.classified}</p>
            </div>
            <BarChart3 className="w-10 h-10 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">대기 중</p>
              <p className="text-3xl font-bold text-yellow-600 mt-2">{stats.pending}</p>
            </div>
            <Upload className="w-10 h-10 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">최근 업로드</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">{stats.recentCount}</p>
            </div>
            <FileText className="w-10 h-10 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">최근 업로드</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <div>
              <p className="font-semibold text-gray-900">김철수_이력서.pdf</p>
              <p className="text-sm text-gray-500">2024-01-15 14:30</p>
            </div>
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded">개발팀</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <div>
              <p className="font-semibold text-gray-900">이영희_이력서.pdf</p>
              <p className="text-sm text-gray-500">2024-01-15 13:20</p>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded">기획팀</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <div>
              <p className="font-semibold text-gray-900">박민준_이력서.pdf</p>
              <p className="text-sm text-gray-500">2024-01-15 11:45</p>
            </div>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded">대기</span>
          </div>
        </div>
      </div>
    </div>
  );
}
