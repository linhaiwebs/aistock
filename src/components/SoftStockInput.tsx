import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

export interface StockSuggestion {
  code: string;
  name: string;
}

interface SoftStockInputProps {
  value: string;
  onChange: (value: string) => void;
  onSelect: (code: string, name: string) => void;
  suggestions: StockSuggestion[];
  placeholder?: string;
  disabled?: boolean;
  autoFillMessage?: string;
}

export default function SoftStockInput({
  value,
  onChange,
  onSelect,
  suggestions,
  placeholder = "例: 7203 トヨタ自動車",
  disabled = false,
  autoFillMessage = ''
}: SoftStockInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      e.preventDefault();
      const suggestion = suggestions[focusedIndex];
      onSelect(suggestion.code, suggestion.name);
      setShowSuggestions(false);
      setFocusedIndex(-1);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setFocusedIndex(-1);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400">
          <Search size={20} strokeWidth={2} />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setShowSuggestions(true);
            setFocusedIndex(-1);
          }}
          onFocus={() => {
            if (value && suggestions.length > 0) {
              setShowSuggestions(true);
            }
          }}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className="w-full h-14 pl-12 pr-4 text-base border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed bg-surface-light"
          style={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        />
      </div>

      {autoFillMessage && (
        <div className="absolute -top-10 left-0 right-0 flex justify-center">
          <div className="px-4 py-2 bg-gradient-to-r from-emerald-400 to-teal-400 text-text-primary text-sm rounded-full shadow-soft-shadow-lg animate-fade-in">
            {autoFillMessage}
          </div>
        </div>
      )}

      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 w-full mt-2 bg-surface-light rounded-2xl shadow-soft-shadow-lg border border-border-light overflow-hidden max-h-64 overflow-y-auto"
          style={{
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
          }}
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={`${suggestion.code}-${index}`}
              className={`w-full px-5 py-3.5 text-left hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-200 flex items-center justify-between border-b border-gray-50 last:border-b-0 ${
                index === focusedIndex ? 'bg-gradient-to-r from-emerald-50 to-teal-50' : ''
              }`}
              onClick={() => {
                onSelect(suggestion.code, suggestion.name);
                setShowSuggestions(false);
                setFocusedIndex(-1);
              }}
              onMouseEnter={() => setFocusedIndex(index)}
            >
              <div className="flex items-center space-x-3 flex-1">
                <span className="text-sm font-semibold text-text-primary px-2.5 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg">
                  {suggestion.code}
                </span>
                <span className="text-sm text-gray-700">{suggestion.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      <p className="mt-2 text-xs text-gray-500 px-1">
        銘柄コード（4桁）または銘柄名を入力すると候補が表示されます
      </p>
    </div>
  );
}
