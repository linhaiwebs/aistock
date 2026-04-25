import { AlertTriangle } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="bg-accent-coral/10 border-y border-accent-coral/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-3 text-sm">
          <AlertTriangle className="w-5 h-5 text-accent-coral flex-shrink-0" />
          <p className="text-text-primary font-medium text-center">
            <span className="font-bold text-accent-coral">重要：</span>
            本サービスは情報提供のみを目的としており、金融商品取引業者ではありません。投資助言・勧誘を行うものではありません。
          </p>
        </div>
      </div>
    </div>
  );
}
