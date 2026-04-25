import { useEffect, useState } from 'react';

const stockTickers = [
  { code: '7203', name: 'トヨタ自動車', price: '2,845', change: '+25' },
  { code: '6758', name: 'ソニーG', price: '13,280', change: '+180' },
  { code: '7974', name: '任天堂', price: '7,456', change: '-32' },
  { code: '9984', name: 'ソフトバンクG', price: '6,234', change: '+89' },
  { code: '6861', name: 'キーエンス', price: '67,890', change: '+420' },
];

export default function StockBoardDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div
        className="relative rounded-lg overflow-hidden shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #0F1419 0%, #1A2B4F 100%)',
          border: '2px solid #D4AF37',
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, #4FD1C5 2px, #4FD1C5 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, #4FD1C5 2px, #4FD1C5 4px)
          `,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="absolute top-0 left-0 right-0 h-1" style={{
          background: 'linear-gradient(90deg, #D4AF37 0%, #E60012 50%, #D4AF37 100%)'
        }}></div>

        <div className="relative px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-500 text-sm font-bold tracking-wider">LIVE</span>
            </div>
            <div className="text-white text-sm opacity-70">東京証券取引所</div>
          </div>

          <div className="mb-6 overflow-hidden">
            <div className="flex space-x-6 animate-scroll-left">
              {[...stockTickers, ...stockTickers].map((stock, index) => (
                <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
                  <span className="text-gray-400 text-xs font-mono">{stock.code}</span>
                  <span className="text-white text-sm font-semibold">{stock.name}</span>
                  <span className="text-white text-sm font-bold">¥{stock.price}</span>
                  <span className={`text-xs font-bold ${stock.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {stock.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-4">
            {currentIndex === 0 && (
              <div className="transition-all duration-500">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontFamily: "'Noto Sans JP', sans-serif"
                }}>
                  <span className="inline-block" style={{ color: '#D4AF37' }}>AI</span>
                  <span className="inline-block mx-2">が</span>
                  <span className="inline-block text-red-500">診断</span>
                </h2>
                <p className="text-white text-lg opacity-90">人工知能による株式分析</p>
              </div>
            )}
            {currentIndex === 1 && (
              <div className="transition-all duration-500">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontFamily: "'Noto Sans JP', sans-serif"
                }}>
                  <span className="inline-block text-green-400">無料</span>
                  <span className="inline-block mx-2">で</span>
                  <span className="inline-block" style={{ color: '#D4AF37' }}>レポート</span>
                </h2>
                <p className="text-white text-lg opacity-90">詳細な分析レポートを取得</p>
              </div>
            )}
            {currentIndex === 2 && (
              <div className="transition-all duration-500">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontFamily: "'Noto Sans JP', sans-serif"
                }}>
                  <span className="inline-block text-blue-400">データ</span>
                  <span className="inline-block mx-2">を</span>
                  <span className="inline-block text-red-500">確認</span>
                </h2>
                <p className="text-white text-lg opacity-90">銘柄情報を瞬時に表示</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-surface-light bg-opacity-10 rounded p-3 backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-gray-400 text-xs mb-1">日経平均</div>
              <div className="text-white font-bold">38,925</div>
              <div className="text-green-400 text-xs">+185</div>
            </div>
            <div className="bg-surface-light bg-opacity-10 rounded p-3 backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-gray-400 text-xs mb-1">TOPIX</div>
              <div className="text-white font-bold">2,756</div>
              <div className="text-green-400 text-xs">+12</div>
            </div>
            <div className="bg-surface-light bg-opacity-10 rounded p-3 backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-gray-400 text-xs mb-1">JPX400</div>
              <div className="text-white font-bold">20,345</div>
              <div className="text-red-400 text-xs">-23</div>
            </div>
          </div>

          <div className="absolute top-4 right-4 opacity-20">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 80 L30 60 L40 70 L50 40 L60 55 L70 30 L80 50 L90 35 L100 45"
                stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.5"/>
              <circle cx="30" cy="60" r="3" fill="#00B84D"/>
              <circle cx="50" cy="40" r="3" fill="#00B84D"/>
              <circle cx="70" cy="30" r="3" fill="#00B84D"/>
              <circle cx="90" cy="35" r="3" fill="#E60012"/>
            </svg>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1" style={{
          background: 'linear-gradient(90deg, #D4AF37 0%, #E60012 50%, #D4AF37 100%)'
        }}></div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="transition-all duration-300"
          >
            <div
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-red-600' : 'w-4 bg-gray-400'
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}
