export default function JapaneseHeader() {
  return (
    <header className="bg-surface-light border-b-2 border-red-600 shadow-sm relative z-20">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, #E60012 0%, #B8000F 100%)',
                  boxShadow: '0 2px 8px rgba(230, 0, 18, 0.3)'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="white"/>
                </svg>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-surface-light rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                AI株式診断
              </h1>
              <p className="text-xs text-gray-500">人工知能による株式分析</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded border border-blue-200">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L10.163 5.837L16 8L10.163 10.163L8 16L5.837 10.163L0 8L5.837 5.837L8 0Z" fill="#1A2B4F"/>
              </svg>
              <span className="text-xs font-semibold text-blue-900">信頼</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 bg-green-50 rounded border border-green-200">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0.5L9.5 6.5L15.5 8L9.5 9.5L8 15.5L6.5 9.5L0.5 8L6.5 6.5L8 0.5Z" fill="#00B84D"/>
              </svg>
              <span className="text-xs font-semibold text-green-900">安全</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1" style={{
        background: 'linear-gradient(90deg, #1A2B4F 0%, #E60012 50%, #1A2B4F 100%)'
      }}></div>
    </header>
  );
}
