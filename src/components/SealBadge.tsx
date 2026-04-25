interface SealBadgeProps {
  text: string;
  subText?: string;
}

export default function SealBadge({ text, subText }: SealBadgeProps) {
  return (
    <div className="relative inline-block">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="sealShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        <circle cx="40" cy="40" r="38" fill="#E60012" filter="url(#sealShadow)"/>

        <circle cx="40" cy="40" r="35" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
        <circle cx="40" cy="40" r="32" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>

        <path d="M40,15 L43,35 L50,20 L45,38 L60,28 L48,42 L65,40 L50,45 L60,55 L45,47 L48,60 L40,50 L32,60 L35,47 L20,55 L30,45 L15,40 L32,42 L20,28 L35,38 L30,20 L37,35 Z"
          fill="white" opacity="0.15"/>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-text-primary font-bold text-lg" style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
        }}>
          {text}
        </div>
        {subText && (
          <div className="text-text-primary text-xs mt-1 opacity-90" style={{
            fontFamily: "'Noto Sans JP', sans-serif"
          }}>
            {subText}
          </div>
        )}
      </div>
    </div>
  );
}
