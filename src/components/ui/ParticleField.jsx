import { useEffect, useRef } from 'react';

const LINK_DISTANCE = 140;

export default function ParticleField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let ratio = 1;
    let nodes = [];
    let frame;
    let running = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const density = Math.min(Math.floor((width * height) / 18000), 70);
      nodes = Array.from({ length: Math.max(density, 22) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 1.6 + 0.8,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];

        if (!reduceMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x <= 0 || node.x >= width) node.vx *= -1;
          if (node.y <= 0 || node.y >= height) node.vy *= -1;
        }

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.hypot(dx, dy);

          if (distance < LINK_DISTANCE) {
            const alpha = (1 - distance / LINK_DISTANCE) * 0.35;
            context.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            context.lineWidth = 0.7;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        context.fillStyle = 'rgba(147, 197, 253, 0.85)';
        context.beginPath();
        context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        context.fill();
      }

      if (running && !reduceMotion) frame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !reduceMotion) {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(frame);
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const handleResize = () => {
      resize();
      if (reduceMotion) draw();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
