import './App.css';
import DnaCanvas from './components/DnaCanvas';
import StatCard from './components/StatCard';
import FeatureBadge from './components/FeatureBadge';
import SectionLabel from './components/SectionLabel';

const stats = [
  {
    number: '4',
    unit: 'ª',
    unitSize: '2.6rem',
    desc: 'Causa de muerte mundial son las reacciones adversas a medicamentos',
    source: 'OMS / WHO',
    delay: 0,
  },
  {
    prefix: 'USD',
    number: '42',
    numberSuffix: ',000,000,000',
    desc: 'Costo anual global por no considerar la variabilidad genética',
    source: 'OMS / Global Report',
    delay: 100,
  },
  {
    number: '75',
    unit: '%',
    desc: 'De las reacciones adversas evitables están asociadas a solo 3 genes',
    source: 'CPIC Guidelines',
    delay: 200,
  },
  {
    number: '60',
    unit: '%',
    desc: 'De los pacientes están expuestos a reacciones adversas prevenibles',
    source: 'FDA / Clinical Data',
    delay: 300,
  },
  {
    number: '1',
    unit: '%',
    desc: 'De los laboratorios ofrece reportes farmacogenómicos',
    source: 'Análisis interno',
    delay: 400,
  },
];

const features = [
  {
    title: 'Reportes accionables',
    desc: 'Informes farmacogenómicos claros, listos para el médico',
  },
  {
    title: 'Sin equipamiento nuevo',
    desc: 'Se integra con tu infraestructura actual',
  },
  {
    title: 'Implementación inmediata',
    desc: 'Empezá a ofrecer el servicio en días, no meses',
  },
];

export default function App() {
  return (
    <>
      <DnaCanvas />

      <div className="page-wrapper">

        {/* NAV */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textTransform: 'uppercase',
          fontSize: '0.75rem',
          letterSpacing: '0.12em',
          marginBottom: '6vh',
        }}>
          <div>Genora</div>
          <div>Farmacogenómica</div>
          <a
            href="mailto:demo@genora.com"
            style={{
              color: '#E8573A',
              textDecoration: 'none',
              letterSpacing: '0.12em',
            }}
          >
            Solicitar Demo →
          </a>
        </nav>

        {/* HERO + IMPACT STATS — first viewport */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 'calc(100vh - 10rem)',
          marginBottom: '26vh',
        }}>

          {/* HERO */}
          <header>
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 4rem)',
              fontWeight: 500,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              maxWidth: '16ch',
              margin: 0,
              marginTop: '3rem',
              display: 'flex',
              flexDirection: 'column'
            }}>
              Medicina personalizada
            </h1>
            <p style={{
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'rgba(0,0,0,0.5)',
              marginTop: '1.5rem',
              maxWidth: '44ch',
              lineHeight: 1.6,
            }}>
              Para laboratorios clínicos y centros de diagnóstico que transforman datos genéticos en valor clínico.
            </p>
          </header>

          {/* IMPACT STATS */}
          <section>
            <SectionLabel>IMPACTO — EL PROBLEMA</SectionLabel>
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div key={i}>
                  <StatCard {...stat} />
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* SOLUTION */}
        <section style={{ marginBottom: '26vh' }}>
          <SectionLabel>LA SOLUCIÓN — ¿QUÉ ES GENORA?</SectionLabel>
          <div className="solution-grid">
            <div style={{
              fontSize: 'clamp(2rem, 3.2vw, 3.6rem)',
              fontWeight: 500,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              position: 'sticky',
              top: '2rem',
            }}>
              Tu laboratorio ya tiene el ADN. Genora lo convierte en{' '}
              <span style={{ color: '#E8573A' }}>decisiones clínicas.</span>
            </div>

            <div>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.65,
                letterSpacing: '0.01em',
                color: 'rgba(0,0,0,0.65)',
                marginBottom: '3rem',
                maxWidth: '44ch',
              }}>
                Genora es una plataforma de farmacogenómica que analiza datos genéticos y genera reportes clínicos personalizados, listos para que el médico tome mejores decisiones de prescripción. Diseñada para integrarse en el flujo de trabajo de tu laboratorio sin complejidad operativa.
              </p>
              <div>
                {features.map((f, i) => (
                  <FeatureBadge
                    key={i}
                    title={f.title}
                    desc={f.desc}
                    isLast={i === features.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ marginBottom: '26vh' }}>
          <SectionLabel>PRÓXIMO PASO — ACCESO ANTICIPADO</SectionLabel>
          <div className="cta-grid">
            <div style={{
              fontSize: 'clamp(2rem, 3.2vw, 3.6rem)',
              fontWeight: 500,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}>
              Comenzá a ofrecer farmacogenómica en tu laboratorio.
            </div>
            <div>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.65,
                letterSpacing: '0.01em',
                color: 'rgba(0,0,0,0.65)',
                marginBottom: '2.5rem',
                maxWidth: '44ch',
              }}>
                Estamos habilitando acceso anticipado para laboratorios clínicos seleccionados en América Latina. Sin costos de implementación inicial. Acompañamiento técnico desde el primer día.
              </p>
              <a
                href="mailto:demo@genora.com"
                style={{
                  display: 'inline-block',
                  background: '#E8573A',
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '1rem 2rem',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: 500,
                }}
              >
                Solicitar Demo →
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          borderTop: '1px solid rgba(0,0,0,0.12)',
          paddingTop: '2rem',
          paddingBottom: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.7rem',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'rgba(0,0,0,0.4)',
        }}>
          <span>Genora — Farmacogenómica Clínica</span>
          <span>Est. 2024</span>
          <a
            href="mailto:contacto@genora.com"
            style={{
              color: 'rgba(0,0,0,0.4)',
              textDecoration: 'none',
            }}
          >
            contacto@genora.com
          </a>
        </footer>

      </div>
    </>
  );
}
