import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useStockSearch, SearchResult } from '../hooks/useStockSearch';

interface JapaneseStockInputProps {
  value: string;
  onChange: (value: string) => void;
  onStockSelect?: (code: string, name: string) => void;
}

export default function JapaneseStockInput({ value, onChange, onStockSelect }: JapaneseStockInputProps) {
  const { search, isLoading } = useStockSearch();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    if (value.trim().length > 0) {
      const results = search(value);
      setSearchResults(results);
      setShowDropdown(results.length > 0);
      setCurrentPage(0);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
      setCurrentPage(0);
    }
  }, [value, search]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentResults = searchResults.slice(startIndex, endIndex);

  const handleStockClick = (stock: SearchResult) => {
    const displayValue = `${stock.code} ${stock.name}`;
    onChange(displayValue);
    setShowDropdown(false);

    if (onStockSelect) {
      onStockSelect(stock.code, stock.name);
    }
  };

  const handleInputFocus = () => {
    if (searchResults.length > 0) {
      setShowDropdown(true);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="w-full space-y-3">
      <div>
        <label
          className="block text-sm font-bold text-gray-700 mb-2"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          銘柄コード / 銘柄名
          <span className="text-red-600 ml-1">*</span>
        </label>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={handleInputFocus}
            placeholder="例: 7203 / トヨタ自動車"
            className="w-full px-4 py-3 text-base text-gray-900 bg-surface-light rounded border-2 border-gray-300 focus:border-red-600 focus:outline-none placeholder-gray-400 transition-all duration-200"
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
            disabled={isLoading}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15C10.3938 15 11.6779 14.5217 12.7072 13.7266L16.2929 17.3123C16.6834 17.7028 17.3166 17.7028 17.7071 17.3123C18.0976 16.9218 18.0976 16.2886 17.7071 15.8981L14.1214 12.3123C14.9165 11.283 15.3948 9.99891 15.3948 8.60518C15.3948 5.29147 12.7085 2.60518 9.39478 2.60518L9 3ZM5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13C6.79086 13 5 11.2091 5 9Z" fill="#9CA3AF"/>
            </svg>
          </div>
        </div>
        <p className="mt-1 text-xs text-gray-500">
          銘柄コードは4桁の数字で入力してください
        </p>
      </div>

      {showDropdown && currentResults.length > 0 && (
        <div
          ref={dropdownRef}
          className="relative z-[9999] w-full bg-surface-light rounded border-2 border-gray-300 shadow-xl overflow-hidden"
        >
          <div
            className="px-3 py-2 text-xs font-bold text-white"
            style={{
              background: 'linear-gradient(135deg, #1A2B4F 0%, #2C4A7F 100%)',
              fontFamily: "'Noto Sans JP', sans-serif"
            }}
          >
            検索結果
          </div>

          <div className="max-h-64 overflow-y-auto">
            {currentResults.map((stock, index) => (
              <button
                key={`${stock.code}-${index}`}
                onClick={() => handleStockClick(stock)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-all duration-150 border-b border-border-light last:border-b-0"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div
                      className="font-bold text-gray-900 whitespace-nowrap px-2 py-0.5 rounded"
                      style={{ background: '#FFF5F5', color: '#E60012' }}
                    >
                      {stock.code}
                    </div>
                    <div className="text-sm text-gray-700 truncate font-medium" title={stock.name}>
                      {stock.name}
                    </div>
                  </div>
                  <div
                    className="text-xs px-2 py-1 rounded font-medium whitespace-nowrap"
                    style={{
                      background: '#E8F4F8',
                      color: '#1A2B4F'
                    }}
                  >
                    {stock.market}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t-2 border-gray-200">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-bold text-gray-700 bg-surface-light border-2 border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                <ChevronLeft className="w-4 h-4" />
                前へ
              </button>

              <div className="text-sm font-bold text-gray-700" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                {currentPage + 1} / {totalPages}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-bold text-gray-700 bg-surface-light border-2 border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                次へ
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {isLoading && (
        <div className="text-center text-sm text-gray-500">
          読み込み中...
        </div>
      )}
    </div>
  );
}
