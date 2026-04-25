interface DiagnosisRecord {
  time: string;
  stock: string;
  icon: string;
}

interface SoftActivityFeedProps {
  records: DiagnosisRecord[];
}

export default function SoftActivityFeed({ records }: SoftActivityFeedProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-4">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-emerald-700">リアルタイム更新中</span>
        </div>
        <h3 className="text-3xl font-bold text-text-primary mb-3">最近の診断実績</h3>
        <p className="text-base text-text-secondary max-w-2xl mx-auto">
          全国の投資家様が活用中。AIによる高精度な株式分析をご体験ください。
        </p>
        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
            <span className="text-text-secondary">本日: <strong className="text-text-primary">1,234件</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
            <span className="text-text-secondary">今月: <strong className="text-text-primary">45,678件</strong></span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {records.slice(0, 9).map((record, index) => (
          <div
            key={index}
            className="bg-surface-light rounded-2xl p-5 border border-border-light hover:shadow-soft-shadow-lg transition-all duration-300 hover:-translate-y-1"
            style={{
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xl shadow-sm"
                    style={{
                      background: index % 3 === 0
                        ? 'linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)'
                        : index % 3 === 1
                        ? 'linear-gradient(135deg, #FF9580 0%, #FF6F61 100%)'
                        : 'linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%)'
                    }}
                  >
                    {record.icon}
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-gradient-to-r from-sky-100 to-sky-200 text-sky-700 text-xs font-semibold rounded-full shadow-sm">
                      {record.time}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                  診断完了
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary leading-relaxed">{record.stock}</p>
                <p className="text-xs text-gray-500 mt-1">AI分析済み</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
