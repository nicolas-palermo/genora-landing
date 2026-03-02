export default function FeatureBadge({ title, desc, isLast = false }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      padding: '1.2rem 0',
      borderTop: '1px solid rgba(0,0,0,0.12)',
      borderBottom: isLast ? '1px solid rgba(0,0,0,0.12)' : 'none',
    }}>
      <div style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: '#C8962A',
        marginTop: '0.3rem',
        flexShrink: 0,
      }} />
      <div>
        <div style={{
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontWeight: 500,
          marginBottom: '0.15rem',
        }}>
          {title}
        </div>
        <div style={{
          fontSize: '0.72rem',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: 'rgba(0,0,0,0.45)',
        }}>
          {desc}
        </div>
      </div>
    </div>
  );
}
