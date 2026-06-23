import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface SliderImage {
  src: string;
  label: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

/* ─── Lightbox plein écran ─── */
function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: SliderImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0A090E]/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Bouton fermer */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
        aria-label="Fermer"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Compteur */}
      <div className="absolute top-5 left-5 z-10 px-3 py-1.5 rounded-full bg-white/10 text-white font-mono text-xs tracking-wider">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Flèche précédente */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
        aria-label="Précédent"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
      </button>

      {/* Image */}
      <div
        className="max-w-[92vw] max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].label}
          className="max-w-full max-h-[88vh] object-contain rounded-lg"
        />
      </div>

      {/* Flèche suivante */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
        aria-label="Suivant"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
      </button>
    </div>
  );
}

/* ─── Slider immersif — Option A : crossfade pleine largeur ─── */
export default function ImageSlider({
  images,
  autoPlay = true,
  autoPlayInterval = 4500,
  className = '',
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  const openLightbox = (index: number) => {
    setCurrent(index);
    setLightboxOpen(true);
  };

  // Auto-play
  useEffect(() => {
    if (!autoPlay || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(goNext, autoPlayInterval);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoPlay, autoPlayInterval, isHovered, goNext]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
  };

  if (images.length === 0) return null;

  return (
    <>
      <div
        className={`relative overflow-hidden rounded-[12px] ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Images en crossfade — pleine largeur */}
        <div className="relative aspect-[16/9] w-full cursor-pointer">
          {images.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.label}
              onClick={() => openLightbox(i)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
                i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>

        {/* Flèches discrètes — visibles au survol */}
        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/25 hover:border-white/50"
              style={{ opacity: isHovered ? 1 : 0, pointerEvents: isHovered ? 'auto' : 'none' }}
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/25 hover:border-white/50"
              style={{ opacity: isHovered ? 1 : 0, pointerEvents: isHovered ? 'auto' : 'none' }}
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </>
        )}

        {/* Points indicateurs minuscules */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-500 ${
                  i === current
                    ? 'w-5 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={current}
          onClose={() => setLightboxOpen(false)}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
