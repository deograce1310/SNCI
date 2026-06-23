import { useRef, useEffect } from 'react';

export default function DotGridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window;
    const INFLUENCE_RADIUS = isTouchDevice ? 150 : 120;
    const DOT_SIZE = 5;
    const SPACING = 40;
    const FADED_RED = 'rgba(226, 35, 26, 0.25)';
    const PRIMARY_RED = '#CF0D0D';
    const GLOW_COLOR = 'rgba(226, 35, 26, 0.6)';

    let mouseX = -1000;
    let mouseY = -1000;
    let animationId: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      if (prefersReducedMotion) {
        // Static dots in faded red
        for (let x = 0; x < width; x += SPACING) {
          for (let y = 0; y < height; y += SPACING) {
            ctx.fillStyle = FADED_RED;
            ctx.fillRect(x - 1, y - 1, 2, 2);
          }
        }
        return;
      }

      for (let x = 0; x < width; x += SPACING) {
        for (let y = 0; y < height; y += SPACING) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < INFLUENCE_RADIUS) {
            // Active dot - circle with glow
            const glow = ctx.createRadialGradient(x, y, 0, x, y, INFLUENCE_RADIUS);
            glow.addColorStop(0, GLOW_COLOR);
            glow.addColorStop(1, 'transparent');
            ctx.fillStyle = glow;
            ctx.fillRect(x - INFLUENCE_RADIUS, y - INFLUENCE_RADIUS, INFLUENCE_RADIUS * 2, INFLUENCE_RADIUS * 2);

            ctx.fillStyle = PRIMARY_RED;
            ctx.beginPath();
            ctx.arc(x, y, DOT_SIZE / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Inactive dot - small square
            ctx.fillStyle = FADED_RED;
            ctx.fillRect(x - 1, y - 1, 2, 2);
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    resize();
    draw();

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
