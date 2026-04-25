export default function SoftDivider() {
  return (
    <div className="w-full py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative h-px">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #A7F3D0 20%, #FDA4AF 50%, #DDD6FE 80%, transparent 100%)',
              opacity: 0.3
            }}
          ></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-300 to-teal-300"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-300 to-rose-300"></div>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-300 to-indigo-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
