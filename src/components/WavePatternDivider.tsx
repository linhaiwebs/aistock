interface WavePatternDividerProps {
  color?: string;
  flip?: boolean;
}

export default function WavePatternDivider({ color = '#E60012', flip = false }: WavePatternDividerProps) {
  return (
    <div className={`w-full h-8 overflow-hidden ${flip ? 'transform rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,0 C150,60 350,60 600,30 C850,0 1050,0 1200,30 L1200,120 L0,120 Z"
          fill={color}
          opacity="0.1"
        />
        <path
          d="M0,20 C150,80 350,80 600,50 C850,20 1050,20 1200,50 L1200,120 L0,120 Z"
          fill={color}
          opacity="0.15"
        />
        <path
          d="M0,40 C150,100 350,100 600,70 C850,40 1050,40 1200,70 L1200,120 L0,120 Z"
          fill={color}
          opacity="0.2"
        />
      </svg>
    </div>
  );
}
