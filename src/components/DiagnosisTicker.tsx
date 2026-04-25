const diagnosisRecords = [
  { time: '2分前', stock: 'トヨタ自動車', icon: '👨' },
  { time: '5分前', stock: 'ソニーグループ', icon: '👩' },
  { time: '8分前', stock: '任天堂', icon: '👨' },
  { time: '12分前', stock: 'ソフトバンクグループ', icon: '👩' },
  { time: '15分前', stock: 'キーエンス', icon: '👨' },
  { time: '18分前', stock: '三菱UFJ', icon: '👩' },
  { time: '22分前', stock: 'ファーストリテイリング', icon: '👨' },
  { time: '25分前', stock: '東京エレクトロン', icon: '👩' },
  { time: '28分前', stock: 'リクルート', icon: '👨' },
  { time: '32分前', stock: 'KDDI', icon: '👩' },
];

export default function DiagnosisTicker() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden bg-light-yellow/70 backdrop-blur-md py-2 shadow-soft-shadow-lg border-b border-border-medium/50">
      <div className="animate-scroll-left whitespace-nowrap inline-block">
        {[...diagnosisRecords, ...diagnosisRecords, ...diagnosisRecords].map((record, index) => (
          <span key={index} className="inline-flex items-center mx-4 text-white">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent-coral/20 border border-accent-coral/30 mr-2 text-sm">
              {record.icon}
            </span>
            <span className="text-sm font-medium mr-2 text-accent-coral">{record.time}</span>
            <span className="text-sm font-bold mr-2 text-text-primary">{record.stock}</span>
            <span className="text-xs bg-accent-peach/20 border border-accent-peach/30 px-2 py-0.5 rounded-full text-accent-peach">無料レポート取得</span>
          </span>
        ))}
      </div>
    </div>
  );
}
