import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

/* ─── Slider immersif — crossfade pleine largeur ─── */
export default function ImageSlider({
  images,
  autoPlay = true,
  autoPlayInterval = 4500,
  className = '',
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
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
    <div
      className={`relative overflow-hidden rounded-[12px] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Images en crossfade — pleine largeur */}
      <div className="relative aspect-[16/9] w-full">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {/* Flèches — toujours visibles, bien lisibles */}
      {images.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0A090E]/55 hover:bg-[#CF0D0D] ring-1 ring-white/40 shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0A090E]/55 hover:bg-[#CF0D0D] ring-1 ring-white/40 shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Points indicateurs */}
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
  );
}
