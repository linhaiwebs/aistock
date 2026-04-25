const diagnosisRecords = [
  { time: '2分前', stock: 'トヨタ自動車', icon: '診' },
  { time: '5分前', stock: 'ソニーグループ', icon: '診' },
  { time: '8分前', stock: '任天堂', icon: '診' },
  { time: '12分前', stock: 'ソフトバンクグループ', icon: '診' },
  { time: '15分前', stock: 'キーエンス', icon: '診' },
  { time: '18分前', stock: '三菱UFJ', icon: '診' },
  { time: '22分前', stock: 'ファーストリテイリング', icon: '診' },
  { time: '25分前', stock: '東京エレクトロン', icon: '診' },
  { time: '28分前', stock: 'リクルート', icon: '診' },
  { time: '32分前', stock: 'KDDI', icon: '診' },
];

export default function JapaneseNewsBanner() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 my-6">
      <div
        className="overflow-hidden rounded-lg shadow-md border-2"
        style={{
          background: 'linear-gradient(135deg, #E60012 0%, #C8000F 100%)',
          borderColor: '#B8000F',
        }}
      >
        <div className="flex items-center">
          <div
            className="flex-shrink-0 px-4 py-2 border-r-2 font-bold text-white text-sm"
            style={{
              background: 'linear-gradient(135deg, #B8000F 0%, #8B0000 100%)',
              borderColor: '#8B0000',
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-surface-light rounded-full animate-pulse"></div>
              <span>速報</span>
            </div>
          </div>

          <div className="flex-1 py-2 overflow-hidden">
            <div className="animate-scroll-left whitespace-nowrap inline-block">
              {[...diagnosisRecords, ...diagnosisRecords, ...diagnosisRecords].map((record, index) => (
                <span key={index} className="inline-flex items-center mx-6 text-white">
                  <span
                    className="inline-flex items-center justify-center w-6 h-6 rounded mr-2 text-xs font-bold"
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      fontFamily: "'Noto Sans JP', sans-serif",
                    }}
                  >
                    {record.icon}
                  </span>
                  <span className="text-sm opacity-90 mr-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {record.time}
                  </span>
                  <span className="text-sm font-bold mr-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    {record.stock}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded font-bold"
                    style={{
                      background: 'rgba(255, 215, 0, 0.9)',
                      color: '#1A2B4F',
                      fontFamily: "'Noto Sans JP', sans-serif",
                    }}
                  >
                    無料診断完了
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: '#FFD700' }}></div>
      </div>
    </div>
  );
}
