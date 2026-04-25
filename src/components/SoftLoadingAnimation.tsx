interface SoftLoadingAnimationProps {
  progress: number;
}

export default function SoftLoadingAnimation({ progress }: SoftLoadingAnimationProps) {
  return (
    <div className="w-full max-w-md mx-auto px-4 py-12">
      <div className="text-center space-y-8">
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 rounded-full" style={{
            background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
            animation: 'pulse 2s ease-in-out infinite'
          }}></div>
          <div className="absolute inset-2 bg-surface-light rounded-full flex items-center justify-center">
            <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#6EE7B7" strokeWidth="2" strokeDasharray="60" strokeDashoffset="15" strokeLinecap="round">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 12 12"
                  to="360 12 12"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <path d="M8 12l2 2 4-4" stroke="#6EE7B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
            </svg>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-text-primary">AI診断中...</h3>
          <p className="text-sm text-gray-500">株式情報を分析しています</p>
        </div>

        <div className="space-y-2">
          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: 'linear-gradient(90deg, #A7F3D0 0%, #6EE7B7 50%, #FDA4AF 100%)',
                boxShadow: '0 2px 8px rgba(167, 243, 208, 0.4)'
              }}
            ></div>
          </div>
          <p className="text-xs text-gray-500">{Math.round(progress)}%</p>
        </div>

        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
