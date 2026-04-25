import { TrendingUp, TrendingDown } from 'lucide-react';

interface StockInfo {
  name: string;
  code: string;
  market: string;
  industry: string;
}

interface StockPrice {
  current: number;
  open: number;
  high: number;
  low: number;
  change: number;
  changePercent: number;
  volume: number;
}

interface SoftStockDisplayProps {
  info: StockInfo;
  price: StockPrice;
}

export default function SoftStockDisplay({ info, price }: SoftStockDisplayProps) {
  const isPositive = price.change >= 0;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mb-6">
      <div
        className="bg-surface-light rounded-3xl p-6 border border-border-light"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-1">{info.name}</h2>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-sm font-semibold rounded-full">
                {info.code}
              </span>
              <span className="text-sm text-gray-500">{info.market}</span>
            </div>
          </div>
          <div className={`px-4 py-2 rounded-full ${isPositive ? 'bg-gradient-to-r from-emerald-50 to-teal-50' : 'bg-gradient-to-r from-red-50 to-pink-50'}`}>
            <div className="flex items-center space-x-1">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <span className={`text-sm font-semibold ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                {isPositive ? '+' : ''}{price.changePercent.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-4">
            <p className="text-xs text-gray-500 mb-1">現在値</p>
            <p className="text-xl font-bold text-text-primary">¥{price.current.toLocaleString()}</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-4">
            <p className="text-xs text-gray-500 mb-1">始値</p>
            <p className="text-lg font-semibold text-gray-700">¥{price.open.toLocaleString()}</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-4">
            <p className="text-xs text-gray-500 mb-1">高値</p>
            <p className="text-lg font-semibold text-gray-700">¥{price.high.toLocaleString()}</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-4">
            <p className="text-xs text-gray-500 mb-1">安値</p>
            <p className="text-lg font-semibold text-gray-700">¥{price.low.toLocaleString()}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-border-light">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">業種</span>
            <span className="font-medium text-gray-700">{info.industry}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
