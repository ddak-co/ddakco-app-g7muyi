'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Classification {
  id: string;
  fileName: string;
  position: string;
  experience: string;
  skills: string[];
  department: string;
  status: 'classified' | 'pending';
}

export default function ResultsPage() {
  const [filter, setFilter] = useState<'all' | 'classified' | 'pending'>('all');

  const classifications: Classification[] = [
    {
      id: '1',
      fileName: '김철수_이력서.pdf',
      position: '시니어 개발자',
      experience: '5-7년',
      skills: ['React', 'Node.js', 'Python'],
      department: '개발팀',
      status: 'classified',
    },
    {
      id: '2',
      fileName: '이영희_이력서.pdf',
      position: '기획자',
      experience: '3-5년',
      skills: ['기획', '마케팅', 'Analytics'],
      department: '기획팀',
      status: 'classified',
    },
    {
      id: '3',
      fileName: '박민준_이력서.pdf',
      position: '주니어 개발자',
      experience: '1-3년',
      skills: ['JavaScript', 'HTML/CSS'],
      department: '개발팀',
      status: 'pending',
    },
  ];

  const filtered = classifications.filter((c) => {
    if (filter === 'classified') return c.status === 'classified';
    if (filter === 'pending') return c.status === 'pending';
    return true;
  });

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">분류 결과</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          전체
        </button>
        <button
          onClick={() => setFilter('classified')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            filter === 'classified'
              ? 'bg-green-600 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          분류 완료
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            filter === 'pending'
              ? 'bg-yellow-600 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          대기 중
        </button>
      </div>

      <div className="space-y-4">
        {filtered.map((item) => (
          <Link key={item.id} href={`/detail/${item.id}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.fileName}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.position} • {item.experience}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-3 py-1 rounded font-semibold ${
                    item.status === 'classified'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.status === 'classified' ? '완료' : '대기'}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">추천 부서: <span className="font-semibold text-gray-900">{item.department}</span></p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
