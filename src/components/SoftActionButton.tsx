import { ReactNode } from 'react';

interface SoftActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  icon?: ReactNode;
}

export default function SoftActionButton({
  onClick,
  disabled = false,
  loading = false,
  children,
  icon
}: SoftActionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="w-full h-14 px-8 rounded-full font-semibold text-white text-base disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 relative overflow-hidden group"
      style={{
        background: disabled || loading
          ? 'linear-gradient(135deg, #334155 0%, #475569 100%)'
          : 'linear-gradient(135deg, #FFB347 0%, #FF9D1F 100%)',
        boxShadow: disabled || loading
          ? 'none'
          : '0 4px 16px rgba(255, 179, 71, 0.4)',
      }}
    >
      {loading ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span>分析中...</span>
        </>
      ) : (
        <>
          {icon && <span className="transition-transform group-hover:scale-110">{icon}</span>}
          <span>{children}</span>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
    </button>
  );
}
