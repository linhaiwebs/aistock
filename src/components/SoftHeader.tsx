export default function SoftHeader() {
  return (
    <header className="sticky top-0 z-50 bg-light-yellow/85 backdrop-blur-md border-b border-border-medium shadow-soft-shadow">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center bg-coral-gradient shadow-coral-glow"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="white" opacity="0.95"/>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-peach-gradient rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-surface-light rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-text-primary">
                AI株式情報ツール
              </h1>
              <p className="text-xs text-text-muted mt-0.5">株式情報を分かりやすく可視化</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-pale-yellow rounded-full border border-accent-coral/30">
              <div className="w-2 h-2 rounded-full bg-accent-coral"></div>
              <span className="text-xs font-medium text-accent-coral">情報提供</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-pale-yellow rounded-full border border-accent-peach/30">
              <div className="w-2 h-2 rounded-full bg-accent-peach"></div>
              <span className="text-xs font-medium text-accent-peach">無料</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
