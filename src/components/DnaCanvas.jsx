import { useEffect, useRef } from 'react';

export default function DnaCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, t = 0;
    const particles = [];
    const bases = ['A', 'T', 'C', 'G'];
    let animId;
    let running = true;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener('resize', resize);
    resize();

    function handleVisibility() {
      if (document.hidden) {
        running = false;
      } else {
        running = true;
        animate();
      }
    }
    document.addEventListener('visibilitychange', handleVisibility);

    class Particle {
      constructor(y, offset, char) {
        this.y = y;
        this.offset = offset;
        this.char = char;
      }
      update(time) {
        const angle = this.y * 0.05 + time + this.offset;
        const radius = width < 768 ? 75 : 130;
        const x3d = Math.sin(angle) * radius;
        const z3d = Math.cos(angle) * radius;
        const fov = 1000;
        const scale = fov / (fov + z3d);
        // Helix positioned at right 72% of screen so it frames left-aligned content
        this.x = width * 0.72 + x3d * scale;
        this.screenY = this.y * (height / 70) * scale - height * 0.04;
        this.size = 10 * scale;
        // Smooth depth-based alpha instead of binary jump
        this.alpha = Math.min(0.85, Math.max(0.1, (scale - 0.85) * 4));
      }
      draw() {
        ctx.font = `bold ${this.size}px Helvetica, sans-serif`;
        ctx.fillStyle = `rgba(0,0,0,${this.alpha * 0.55})`;
        ctx.textAlign = 'center';
        ctx.fillText(this.char, this.x, this.screenY);
      }
    }

    for (let i = 0; i < 120; i++) {
      const char = bases[i % 4];
      const pairChar = char === 'A' ? 'T' : char === 'T' ? 'A' : char === 'C' ? 'G' : 'C';
      particles.push(new Particle(i, 0, char));
      particles.push(new Particle(i, Math.PI, pairChar));
    }

    function animate() {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      t += 0.008;
      ctx.strokeStyle = 'rgba(0,0,0,0.07)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i += 2) {
        const p1 = particles[i];
        const p2 = particles[i + 1];
        p1.update(t);
        p2.update(t);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.screenY);
        ctx.lineTo(p2.x, p2.screenY);
        ctx.stroke();
        p1.draw();
        p2.draw();
      }
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        filter: 'blur(1px)',
        opacity: 0.7,
      }}
    />
  );
}
