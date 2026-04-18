'use client';

import { useState } from 'react';
import { Upload as UploadIcon, Check } from 'lucide-react';

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFiles([]);
      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">이력서 업로드</h1>

      <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-dashed border-gray-300">
        <div className="text-center space-y-4">
          <UploadIcon className="w-16 h-16 text-gray-400 mx-auto" />
          <div>
            <p className="text-lg font-semibold text-gray-900">파일을 여기에 드래그하거나 클릭하세요</p>
            <p className="text-sm text-gray-500 mt-1">PDF, 이미지 파일 (최대 10MB)</p>
          </div>
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
            id="file-input"
          />
          <label
            htmlFor="file-input"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            파일 선택
          </label>
        </div>
      </div>

      {files.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">선택된 파일</h2>
          <div className="space-y-2 mb-6">
            {files.map((file, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-gray-900">{file.name}</span>
                <span className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
              </div>
            ))}
          </div>
          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-semibold"
          >
            {loading ? '업로드 중...' : '분류 시작'}
          </button>
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg flex items-center gap-3">
          <Check className="w-6 h-6 text-green-600" />
          <div>
            <p className="font-semibold text-green-900">업로드 성공</p>
            <p className="text-sm text-green-700">이력서가 자동으로 분류되었습니다</p>
          </div>
        </div>
      )}
    </div>
  );
}
