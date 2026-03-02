import { useEffect, useRef, useState } from 'react';

export default function StatCard({ prefix, number, unit, unitSize = '1rem', numberSuffix, desc, source, delay = 0, numberFontSize = 'clamp(2.2rem, 3.5vw, 3.8rem)' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        padding: '1.5rem 1.25rem',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '200px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
    >
      <div>
        {prefix && (
          <span style={{
            display: 'block',
            fontSize: '0.7rem',
            fontWeight: 400,
            letterSpacing: '0.08em',
            marginBottom: '0.2rem',
            opacity: 0.6,
            textTransform: 'uppercase',
          }}>
            {prefix}
          </span>
        )}
        <div style={{
          fontSize: numberFontSize,
          fontWeight: 500,
          lineHeight: 0.85,
          letterSpacing: '-0.03em',
          marginBottom: '0.75rem',
        }}>
          {number}
          {numberSuffix && (
            <span style={{ fontSize: 'clamp(1rem, 1.3vw, 1.35rem)', fontWeight: 400, letterSpacing: '-0.01em' }}>
              {numberSuffix}
            </span>
          )}
          {unit && (
            <span style={{ fontSize: unitSize, fontWeight: 400, verticalAlign: 'super' }}>
              {unit}
            </span>
          )}
        </div>
        <div style={{
          fontSize: '0.72rem',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          lineHeight: 1.55,
          color: 'rgba(0,0,0,0.58)',
        }}>
          {desc}
        </div>
      </div>
      <div style={{
        fontSize: '0.6rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'rgba(0,0,0,0.45)',
        marginTop: '1rem',
      }}>
        {source}
      </div>
    </div>
  );
}
