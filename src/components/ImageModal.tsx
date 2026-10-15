import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export interface ModalImage {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

interface ImageModalProps {
  images: ModalImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate?: (newIndex: number) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onNavigate && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && onNavigate && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const current = images[currentIndex];
  const hasMultiple = images.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged Image Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Container to prevent backdrop click closing when clicking image card */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between text-white/90 pb-3 px-1">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-4 h-4 text-brand-electric" />
            <span className="text-xs sm:text-sm font-medium truncate max-w-md">
              {current.title || current.alt}
            </span>
            {hasMultiple && (
              <span className="text-xs text-white/60 bg-white/10 px-2 py-0.5 rounded-full ml-2">
                {currentIndex + 1} / {images.length}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-label="Close enlarged view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image View */}
        <div className="relative flex items-center justify-center w-full max-h-[75vh] overflow-hidden rounded-xl bg-slate-900/60 border border-white/10 p-2 sm:p-4">
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
          />

          {/* Navigation Controls */}
          {hasMultiple && onNavigate && currentIndex > 0 && (
            <button
              type="button"
              onClick={() => onNavigate(currentIndex - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {hasMultiple && onNavigate && currentIndex < images.length - 1 && (
            <button
              type="button"
              onClick={() => onNavigate(currentIndex + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-colors shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption */}
        {current.caption && (
          <div className="mt-3 text-center px-4 py-2 bg-black/40 rounded-lg border border-white/5 max-w-2xl">
            <p className="text-xs text-slate-300 leading-relaxed">{current.caption}</p>
          </div>
        )}
      </div>
    </div>
  );
};
