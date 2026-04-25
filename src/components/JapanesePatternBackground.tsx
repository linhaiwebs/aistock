export default function JapanesePatternBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 50%, #F0F4F8 100%)'
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 20px, #1A2B4F 20px, #1A2B4F 21px),
            repeating-linear-gradient(-45deg, transparent, transparent 20px, #1A2B4F 20px, #1A2B4F 21px)
          `,
        }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="seigaiha" x="0" y="0" width="120" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 60 Q30 40, 60 60" fill="none" stroke="#1A2B4F" strokeWidth="1"/>
            <path d="M0 60 Q30 30, 60 60" fill="none" stroke="#1A2B4F" strokeWidth="1"/>
            <path d="M0 60 Q30 20, 60 60" fill="none" stroke="#1A2B4F" strokeWidth="1"/>
            <path d="M60 60 Q90 40, 120 60" fill="none" stroke="#1A2B4F" strokeWidth="1"/>
            <path d="M60 60 Q90 30, 120 60" fill="none" stroke="#1A2B4F" strokeWidth="1"/>
            <path d="M60 60 Q90 20, 120 60" fill="none" stroke="#1A2B4F" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha)"/>
      </svg>

      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-5"
        style={{
          background: 'radial-gradient(circle, #E60012, transparent)',
          filter: 'blur(40px)',
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-5"
        style={{
          background: 'radial-gradient(circle, #D4AF37, transparent)',
          filter: 'blur(40px)',
        }}
      />

      <div className="absolute top-1/4 right-1/4 opacity-[0.015]">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#1A2B4F" strokeWidth="2" fill="none"/>
          <circle cx="100" cy="100" r="60" stroke="#1A2B4F" strokeWidth="2" fill="none"/>
          <circle cx="100" cy="100" r="40" stroke="#1A2B4F" strokeWidth="2" fill="none"/>
          <line x1="100" y1="20" x2="100" y2="180" stroke="#1A2B4F" strokeWidth="2"/>
          <line x1="20" y1="100" x2="180" y2="100" stroke="#1A2B4F" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-1/3 opacity-[0.015]">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75 10 L90 50 L130 50 L100 75 L115 115 L75 90 L35 115 L50 75 L20 50 L60 50 Z" stroke="#E60012" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
      `}</style>
    </div>
  );
}
