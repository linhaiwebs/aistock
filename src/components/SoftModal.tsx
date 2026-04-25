import { ReactNode } from 'react';
import { X } from 'lucide-react';

interface SoftModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function SoftModal({ isOpen, onClose, children, title }: SoftModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div
        className="relative bg-surface-light rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-scaleIn"
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
        }}
      >
        {title && (
          <div
            className="px-4 py-4 border-b border-border-light"
            style={{
              background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)'
            }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-text-primary">{title}</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-surface-light/60 backdrop-blur-sm hover:bg-surface-light transition-all duration-200 flex items-center justify-center group"
              >
                <X className="w-5 h-5 text-text-secondary group-hover:text-text-primary" />
              </button>
            </div>
          </div>
        )}

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {children}
        </div>
      </div>
    </div>
  );
}
