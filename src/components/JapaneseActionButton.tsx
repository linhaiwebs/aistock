interface JapaneseActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export default function JapaneseActionButton({ onClick, disabled, loading, children }: JapaneseActionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full py-4 rounded font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
      style={{
        background: disabled || loading
          ? 'linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)'
          : 'linear-gradient(135deg, #E60012 0%, #FF4D00 100%)',
        color: 'white',
        border: '2px solid',
        borderColor: disabled || loading ? '#6B7280' : '#B8000F',
        boxShadow: disabled || loading
          ? 'none'
          : '0 4px 12px rgba(230, 0, 18, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -skew-x-12"></div>

      <div className="relative flex items-center justify-center space-x-2">
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>診断中...</span>
          </>
        ) : (
          <>
            <span>{children}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M7.5 4L13.5 10L7.5 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </div>

      {!disabled && !loading && (
        <>
          <div className="absolute top-0 left-0 w-1 h-full bg-surface-light opacity-30"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-black opacity-20"></div>
        </>
      )}
    </button>
  );
}
