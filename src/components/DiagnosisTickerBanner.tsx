interface DiagnosisRecord {
  time: string;
  stock: string;
  icon: string;
}

interface DiagnosisTickerBannerProps {
  records: DiagnosisRecord[];
}

export default function DiagnosisTickerBanner({ records }: DiagnosisTickerBannerProps) {
  const doubledRecords = [...records, ...records];

  return (
    <div className="w-full bg-light-yellow/40 backdrop-blur-sm border-y border-border-medium/50 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-surface-cream/60 backdrop-blur-sm rounded-full shadow-sm border border-accent-coral/30">
            <div className="w-2 h-2 bg-accent-coral rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-accent-coral">最近の分析事例</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-slate/40 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-slate/40 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-3 animate-scroll">
            {doubledRecords.map((record, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-surface-cream/60 backdrop-blur-sm rounded-2xl px-4 py-3 border border-border-medium/50 shadow-sm whitespace-nowrap flex-shrink-0"
                style={{ minWidth: '280px' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm flex-shrink-0"
                  style={{
                    background: index % 3 === 0
                      ? 'linear-gradient(135deg, #FF6F61 0%, #E8554E 100%)'
                      : index % 3 === 1
                      ? 'linear-gradient(135deg, #FF9580 0%, #FF6F61 100%)'
                      : 'linear-gradient(135deg, #FFB347 0%, #FF9D1F 100%)'
                  }}
                >
                  {record.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-accent-coral/20 text-accent-coral text-xs font-semibold rounded-full border border-accent-coral/30">
                      {record.time}
                    </span>
                    <span className="px-2 py-0.5 bg-accent-peach/20 text-accent-peach text-xs font-semibold rounded-full border border-accent-peach/30">
                      分析完了
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-text-primary truncate">{record.stock}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
