import { Search } from 'lucide-react';

interface SoftStockInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function SoftStockInput({
  value,
  onChange,
  placeholder = "銘柄名やキーワードを入力",
  disabled = false,
}: SoftStockInputProps) {
  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400">
          <Search size={20} strokeWidth={2} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
          className="w-full h-14 pl-12 pr-4 text-base border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed bg-surface-light"
          style={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        />
      </div>

      <p className="mt-2 text-xs text-gray-500 px-1">
        任意の文字を入力して無料で情報を取得できます
      </p>
    </div>
  );
}
