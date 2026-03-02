export default function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: '0.7rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      marginBottom: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      opacity: 0.55,
    }}>
      {children}
      <span style={{ flex: 1, height: '1px', background: 'currentColor', display: 'block' }} />
    </div>
  );
}
