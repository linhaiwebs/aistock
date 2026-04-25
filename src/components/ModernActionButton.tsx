interface ModernActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ModernActionButton({ onClick, disabled = false }: ModernActionButtonProps) {
  return (
    <>
      <div className="relative animate-fadeIn mt-6" style={{ animationDelay: '0.3s' }}>
        <button
          onClick={onClick}
          disabled={disabled}
          className="w-full text-white font-bold py-4 px-6 rounded-3xl shadow-soft-shadow-lg hover:shadow-xl transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          style={{
            background: disabled ? '#A0AEC0' : 'linear-gradient(135deg, #2C5282 0%, #38B2AC 50%, #FFA07A 100%)',
            height: '56px',
            boxShadow: disabled ? 'none' : '0 4px 20px rgba(56, 178, 172, 0.4)'
          }}
        >
          <span className="text-lg">診断を開始する</span>
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 leading-relaxed">
          ※本診断は投資助言ではありません。投資判断は自己責任でお願いいたします。
        </p>
      </div>
    </>
  );
}
