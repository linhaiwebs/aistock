import { useState, useEffect } from 'react';

const carouselItems = [
  {
    id: 1,
    titleLine1: 'AIで分析',
    titleLine2: '株式情報',
    titleLine3: 'ツール',
  },
  {
    id: 2,
    titleLine1: '銘柄データ',
    titleLine2: '確認',
    titleLine3: '',
  },
  {
    id: 3,
    titleLine1: '株式情報',
    titleLine2: 'レポート',
    titleLine3: '作成',
  },
];

export default function IllustrationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="relative w-full max-w-[280px] mx-auto px-4">
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.15) 0%, rgba(79, 209, 197, 0.1) 50%, rgba(255, 160, 122, 0.1) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(129, 230, 217, 0.3)',
        }}
      >
        <div className="relative p-6 pb-14 min-h-[320px] flex flex-col">

          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <radialGradient id={`bgGlow${currentIndex}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            <circle cx="50%" cy="50%" r="120" fill="url(#bgGlow${currentIndex})" opacity="0.3">
              <animate attributeName="r" values="120;140;120" dur="8s" repeatCount="indefinite" />
            </circle>

            <circle cx="20" cy="30" r="2" fill="#4FD1C5" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
              <animate attributeName="cy" values="30;25;30" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="260" cy="80" r="1.5" fill="#FFB6A3" opacity="0.5">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="cx" values="260;255;260" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="280" r="2" fill="#81E6D9" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="cy" values="280;275;280" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="240" cy="250" r="1.5" fill="#FFA07A" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite" begin="1.5s" />
              <animate attributeName="cx" values="240;245;240" dur="7s" repeatCount="indefinite" />
            </circle>
            <circle cx="140" cy="40" r="1" fill="#E0F7FA" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.3s" />
            </circle>
            <circle cx="200" cy="150" r="1" fill="#E0F7FA" opacity="0.5">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" begin="0.7s" />
            </circle>
            <circle cx="60" cy="180" r="1.5" fill="#FFD7BE" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite" begin="1.2s" />
            </circle>

            <path d="M10,10 L20,12" stroke="#4FD1C5" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M260,20 L270,25" stroke="#FFB6A3" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
            </path>
          </svg>

          <div className="absolute top-2 left-2 w-16 h-16 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, rgba(129, 230, 217, 0.4), transparent)',
            filter: 'blur(15px)',
            animation: 'pulse-glow 4s ease-in-out infinite'
          }} />

          <div className="absolute top-2 right-2 w-14 h-14 rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, rgba(255, 182, 163, 0.4), transparent)',
            filter: 'blur(15px)',
            animation: 'pulse-glow 4.5s ease-in-out infinite',
            animationDelay: '1s'
          }} />

          <div className="absolute top-4 left-4 z-20">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id={`neuralGrad${currentIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#38B2AC" stopOpacity="0.3" />
                </linearGradient>
                <filter id={`glow${currentIndex}`}>
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <circle cx="15" cy="15" r="8" fill="#4FD1C5" opacity="0.1">
                <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="45" cy="15" r="8" fill="#4FD1C5" opacity="0.1">
                <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="30" cy="30" r="10" fill="#4FD1C5" opacity="0.15">
                <animate attributeName="r" values="10;12;10" dur="3s" repeatCount="indefinite" />
              </circle>

              <circle cx="15" cy="15" r="4" fill="url(#neuralGrad{currentIndex})" opacity="0.8" filter={`url(#glow${currentIndex})`}>
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="45" cy="15" r="4" fill="url(#neuralGrad{currentIndex})" opacity="0.8" filter={`url(#glow${currentIndex})`}>
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="30" cy="30" r="5" fill="#4FD1C5" opacity="0.6" filter={`url(#glow${currentIndex})`}>
                <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="15" cy="45" r="4" fill="url(#neuralGrad{currentIndex})" opacity="0.8" filter={`url(#glow${currentIndex})`}>
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="45" cy="45" r="4" fill="url(#neuralGrad{currentIndex})" opacity="0.8" filter={`url(#glow${currentIndex})`}>
                <animate attributeName="opacity" values="0.9;0.6;0.9" dur="2.5s" repeatCount="indefinite" />
              </circle>

              <polygon points="8,20 12,18 10,22" fill="#FFB6A3" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
              </polygon>
              <polygon points="48,10 52,12 50,8" fill="#FFB6A3" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.2s" repeatCount="indefinite" begin="0.5s" />
              </polygon>

              <line x1="15" y1="15" x2="30" y2="30" stroke="#4FD1C5" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="45" y1="15" x2="30" y2="30" stroke="#4FD1C5" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="30" y1="30" x2="15" y2="45" stroke="#4FD1C5" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />
              <line x1="30" y1="30" x2="45" y2="45" stroke="#4FD1C5" strokeWidth="1" opacity="0.4" strokeDasharray="2,2" />

              <circle cx="22" cy="22" r="1.5" fill="#FFD7BE" opacity="0.6">
                <animateMotion path="M0,0 L8,8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="37" cy="22" r="1.5" fill="#FFD7BE" opacity="0.6">
                <animateMotion path="M0,0 L-7,8" dur="2s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" begin="1s" />
              </circle>
            </svg>
          </div>

          <div className="absolute top-6 right-6 z-10">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id={`dataFlow${currentIndex}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFA07A" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FFB6A3" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              <path d="M5 15 Q15 10, 25 15 T45 15" stroke="url(#dataFlow{currentIndex})" strokeWidth="2" fill="none" opacity="0.7">
                <animate attributeName="d" values="M5 15 Q15 10, 25 15 T45 15;M5 15 Q15 20, 25 15 T45 15;M5 15 Q15 10, 25 15 T45 15" dur="3s" repeatCount="indefinite" />
              </path>
              <path d="M5 25 Q15 20, 25 25 T45 25" stroke="url(#dataFlow{currentIndex})" strokeWidth="2" fill="none" opacity="0.6">
                <animate attributeName="d" values="M5 25 Q15 20, 25 25 T45 25;M5 25 Q15 30, 25 25 T45 25;M5 25 Q15 20, 25 25 T45 25" dur="3.5s" repeatCount="indefinite" />
              </path>
              <path d="M5 35 Q15 30, 25 35 T45 35" stroke="url(#dataFlow{currentIndex})" strokeWidth="2" fill="none" opacity="0.5">
                <animate attributeName="d" values="M5 35 Q15 30, 25 35 T45 35;M5 35 Q15 40, 25 35 T45 35;M5 35 Q15 30, 25 35 T45 35" dur="4s" repeatCount="indefinite" />
              </path>

              <circle cx="5" cy="15" r="2" fill="#FFA07A" opacity="0.8">
                <animateMotion path="M0,0 Q10,-5,20,0 T40,0" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="5" cy="25" r="2" fill="#FFB6A3" opacity="0.7">
                <animateMotion path="M0,0 Q10,-5,20,0 T40,0" dur="3.5s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.5s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle cx="5" cy="35" r="2" fill="#FFD7BE" opacity="0.6">
                <animateMotion path="M0,0 Q10,-5,20,0 T40,0" dur="4s" repeatCount="indefinite" begin="2s" />
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" begin="2s" />
              </circle>

              <path d="M10,10 Q20,5,30,10" stroke="#4FD1C5" strokeWidth="1" opacity="0.3" fill="none" strokeDasharray="3,3">
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
              </path>
              <path d="M15,42 Q25,38,35,42" stroke="#4FD1C5" strokeWidth="1" opacity="0.3" fill="none" strokeDasharray="3,3">
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" begin="0.5s" />
              </path>

              <rect x="40" y="8" width="3" height="3" fill="#FFB6A3" opacity="0.4" transform="rotate(45 41.5 9.5)">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
              </rect>
              <rect x="2" y="40" width="2.5" height="2.5" fill="#4FD1C5" opacity="0.4" transform="rotate(45 3.25 41.25)">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.3s" repeatCount="indefinite" begin="0.8s" />
              </rect>
            </svg>
          </div>

          <div className="absolute bottom-4 left-4 z-10">
            <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="35" width="4" height="10" fill="#4FD1C5" opacity="0.4" rx="1">
                <animate attributeName="height" values="10;15;10" dur="2s" repeatCount="indefinite" />
                <animate attributeName="y" values="35;30;35" dur="2s" repeatCount="indefinite" />
              </rect>
              <rect x="12" y="30" width="4" height="15" fill="#38B2AC" opacity="0.4" rx="1">
                <animate attributeName="height" values="15;20;15" dur="2.2s" repeatCount="indefinite" begin="0.2s" />
                <animate attributeName="y" values="30;25;30" dur="2.2s" repeatCount="indefinite" begin="0.2s" />
              </rect>
              <rect x="19" y="32" width="4" height="13" fill="#4FD1C5" opacity="0.4" rx="1">
                <animate attributeName="height" values="13;18;13" dur="2.1s" repeatCount="indefinite" begin="0.4s" />
                <animate attributeName="y" values="32;27;32" dur="2.1s" repeatCount="indefinite" begin="0.4s" />
              </rect>
              <rect x="26" y="28" width="4" height="17" fill="#FFA07A" opacity="0.4" rx="1">
                <animate attributeName="height" values="17;22;17" dur="2.3s" repeatCount="indefinite" begin="0.6s" />
                <animate attributeName="y" values="28;23;28" dur="2.3s" repeatCount="indefinite" begin="0.6s" />
              </rect>

              <path d="M5,28 L9,25 L13,22 L17,24 L21,20 L25,18 L29,15" stroke="#FFB6A3" strokeWidth="1.5" fill="none" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
              </path>

              <circle cx="5" cy="28" r="2" fill="#FFB6A3" opacity="0.6" />
              <circle cx="13" cy="22" r="2" fill="#FFB6A3" opacity="0.6" />
              <circle cx="21" cy="20" r="2" fill="#FFB6A3" opacity="0.6" />
              <circle cx="29" cy="15" r="2" fill="#FFB6A3" opacity="0.6" />

              <text x="35" y="12" fill="#4FD1C5" fontSize="8" opacity="0.4" fontFamily="monospace">AI</text>
              <text x="45" y="20" fill="#FFA07A" fontSize="6" opacity="0.3" fontFamily="monospace">%</text>
            </svg>
          </div>

          <div className="absolute bottom-6 right-6 z-10">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id={`glowCircle${currentIndex}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4FD1C5" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38B2AC" stopOpacity="0.2" />
                </radialGradient>
              </defs>

              <circle cx="25" cy="25" r="20" fill="url(#glowCircle${currentIndex})" opacity="0.5">
                <animate attributeName="r" values="20;23;20" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite" />
              </circle>

              <path d="M25,10 A15,15 0 0,1 40,25" stroke="#4FD1C5" strokeWidth="2" fill="none" opacity="0.6">
                <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="8s" repeatCount="indefinite" />
              </path>
              <path d="M40,25 A15,15 0 0,1 25,40" stroke="#FFB6A3" strokeWidth="2" fill="none" opacity="0.5">
                <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="8s" repeatCount="indefinite" />
              </path>

              <circle cx="25" cy="25" r="10" fill="none" stroke="#FFA07A" strokeWidth="1" opacity="0.6">
                <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="25" cy="25" r="4" fill="#FFB6A3" opacity="0.8">
                <animate attributeName="r" values="4;5;4" dur="2.5s" repeatCount="indefinite" />
              </circle>

              <circle cx="25" cy="10" r="2" fill="#4FD1C5" opacity="0.7">
                <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="40" cy="25" r="2" fill="#FFB6A3" opacity="0.7">
                <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="5s" repeatCount="indefinite" />
              </circle>

              <polygon points="15,25 18,22 18,28" fill="#FFD7BE" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
              </polygon>
            </svg>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-5" style={{ zIndex: 0 }}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="#4FD1C5" strokeWidth="1" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite" />
              </polygon>
              <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" stroke="#FFB6A3" strokeWidth="1" fill="none">
                <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="25s" repeatCount="indefinite" />
              </polygon>
            </svg>
          </div>

          <div className="flex-1 flex flex-col items-start justify-center mt-6 mb-10 relative z-10">
            <div className="text-left mb-4 w-full">
              <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-soft-shadow-lg">{currentItem.titleLine1}</h1>
              {currentItem.titleLine2 && (
                <div className="w-full -mx-6">
                  <div
                    className="px-6 py-2"
                    style={{
                      background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.8) 0%, rgba(79, 209, 197, 0.6) 100%)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <h2 className="text-2xl font-bold text-white leading-tight drop-shadow-md">
                      {currentItem.titleLine2}
                    </h2>
                  </div>
                </div>
              )}
              {currentItem.titleLine3 && (
                <h1 className="text-4xl font-bold text-white mt-2 drop-shadow-soft-shadow-lg">{currentItem.titleLine3}</h1>
              )}
            </div>
          </div>

          <div className="absolute bottom-6 left-6 flex items-center space-x-2 z-10">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i % 2 === 0 ? 'rgba(79, 209, 197, 0.6)' : 'rgba(255, 160, 122, 0.6)',
                  animation: `pulse-dot ${2 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>

      <div className="flex items-center justify-center gap-2 mt-6">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex ? (
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #4FD1C5 0%, #38B2AC 100%)',
                  boxShadow: '0 0 10px rgba(79, 209, 197, 0.6)',
                }}
              ></div>
            ) : (
              <div className="w-2 h-2 rounded-full bg-teal-soft opacity-40"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
