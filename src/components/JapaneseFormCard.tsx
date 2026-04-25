import { ReactNode } from 'react';

interface JapaneseFormCardProps {
  children: ReactNode;
}

export default function JapaneseFormCard({ children }: JapaneseFormCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div
        className="bg-surface-light rounded-lg shadow-soft-shadow-lg border-2 overflow-hidden"
        style={{
          borderColor: '#E60012',
        }}
      >
        <div
          className="px-6 py-3 border-b-2"
          style={{
            background: 'linear-gradient(135deg, #1A2B4F 0%, #2C4A7F 100%)',
            borderColor: '#D4AF37',
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                銘柄診断フォーム
              </h2>
              <p className="text-xs text-gray-300 mt-0.5">銘柄コードまたは銘柄名を入力</p>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-xs text-gray-300">入力可能</span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-2 h-full" style={{ background: '#D4AF37' }}></div>
        <div className="absolute top-0 right-0 w-2 h-full" style={{ background: '#D4AF37' }}></div>

        <div className="p-6 relative">
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-gray-200"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-gray-200"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-gray-200"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gray-200"></div>

          {children}
        </div>

        <div
          className="px-6 py-2 text-center border-t"
          style={{
            background: 'linear-gradient(to right, #F8F9FA, #FFFFFF, #F8F9FA)',
            borderColor: '#E5E7EB',
          }}
        >
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="#00B84D"/>
              </svg>
              <span>安全な接続</span>
            </div>
            <div className="w-px h-3 bg-gray-300"></div>
            <div className="flex items-center space-x-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="5" stroke="#1A2B4F" strokeWidth="1" fill="none"/>
                <path d="M4 6L5.5 7.5L8.5 4.5" stroke="#1A2B4F" strokeWidth="1.5" fill="none"/>
              </svg>
              <span>入力情報は保護されます</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
