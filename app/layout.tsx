import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '이력서 자동분류',
  description: '이력서를 자동으로 분류하고 관리하는 시스템',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                이력서 분류
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600">대시보드</Link>
                <Link href="/upload" className="text-gray-700 hover:text-blue-600">업로드</Link>
                <Link href="/results" className="text-gray-700 hover:text-blue-600">결과</Link>
                <Link href="/settings" className="text-gray-700 hover:text-blue-600">설정</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
