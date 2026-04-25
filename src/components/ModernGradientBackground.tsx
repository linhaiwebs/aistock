export default function ModernGradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, #0A1929 0%, #1E3A5F 40%, #2C5282 70%, #38B2AC 100%)'
        }}
      />

      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(79, 209, 197, 0.4), transparent)',
          filter: 'blur(80px)',
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255, 160, 122, 0.3), transparent)',
          filter: 'blur(100px)',
        }}
      />

      <div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(129, 230, 217, 0.3), transparent)',
          filter: 'blur(90px)',
          animation: 'float-slow 20s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
      `}</style>
    </div>
  );
}
