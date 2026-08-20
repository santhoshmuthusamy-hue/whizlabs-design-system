const NS = 'WhizlabsDesignSystem_c8ccaf';
const DS = () => window[NS] || {};

function Section({ id, eyebrow, title, lede, children, tone = 'page' }) {
  const bg = tone === 'subtle' ? 'var(--surface-subtle)' : tone === 'inverse' ? 'var(--ink-950)' : 'var(--white)';
  const fg = tone === 'inverse' ? 'var(--white)' : 'var(--text-strong)';
  return (
    <section id={id} className={tone === 'inverse' ? 'wl-on-dark' : undefined} style={{ background: bg, borderTop: '1px solid var(--border-subtle)', scrollMarginTop: '72px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '88px var(--gutter)' }}>
        <header style={{ marginBottom: '44px', maxWidth: '62ch' }}>
          {eyebrow && <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: tone === 'inverse' ? 'var(--orange-300)' : 'var(--orange-600)' }}>{eyebrow}</div>}
          <h2 style={{ font: 'var(--type-h1)', letterSpacing: 'var(--ls-tight)', color: fg, margin: '10px 0 0' }}>{title}</h2>
          {lede && <p style={{ font: 'var(--type-body)', color: tone === 'inverse' ? 'var(--ink-300)' : 'var(--text-body)', margin: '14px 0 0' }}>{lede}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

function Panel({ label, children, style, pad = '28px' }) {
  return (
    <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', background: 'var(--white)', overflow: 'hidden', ...style }}>
      {label && <div style={{ padding: '11px 16px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--ink-50)', font: 'var(--fw-semibold) var(--text-2xs)/1 var(--font-display)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</div>}
      <div style={{ padding: pad }}>{children}</div>
    </div>
  );
}

function Row({ children, gap = '14px', style }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap, alignItems: 'center', ...style }}>{children}</div>;
}

function Copyable({ value, children, style }) {
  const [done, setDone] = React.useState(false);
  const copy = () => {
    navigator.clipboard && navigator.clipboard.writeText(value);
    setDone(true); setTimeout(() => setDone(false), 1200);
  };
  return (
    <button onClick={copy} title={'Copy ' + value}
      style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', font: 'inherit', color: 'inherit', position: 'relative', ...style }}>
      {children}
      {done && <span style={{ position: 'absolute', top: '8px', right: '8px', background: 'var(--ink-950)', color: '#fff', font: 'var(--fw-semibold) 10px/1 var(--font-display)', padding: '5px 8px', borderRadius: 'var(--radius-pill)' }}>Copied</span>}
    </button>
  );
}

Object.assign(window, { NS, DS, Section, Panel, Row, Copyable });
