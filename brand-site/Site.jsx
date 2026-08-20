// The knockout lockup is brand-critical on orange (the gradient mark has almost no
// contrast there), so it reads straight from the vector rather than depending on the
// compiled bundle exposing the 'mono' variant.
function MonoLockup({ size = 40 }) {
  return <img src="../assets/logo-lockup-mono.svg" alt="Whizlabs" style={{ height: size + 'px', width: 'auto', aspectRatio: '7.337', display: 'block' }} />;
}

const LINKS = [['logo', 'Logo'], ['colour', 'Colour'], ['type', 'Type'], ['space', 'Space'], ['motion', 'Motion'], ['components', 'Components'], ['kits', 'UI kits'], ['open', 'Open items']];

function TopNav() {
  const { Logo, Button } = DS();
  const [active, setActive] = React.useState('logo');
  React.useEffect(() => {
    const ids = LINKS.map(l => l[0]);
    const onScroll = () => {
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(255,255,255,.88)', backdropFilter: 'var(--blur-glass)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)', height: '72px', display: 'flex', alignItems: 'center', gap: '26px' }}>
        <a href="#top" style={{ textDecoration: 'none', display: 'flex' }}>{Logo && <Logo size={24} />}</a>
        <nav style={{ display: 'flex', gap: '18px', flex: 1, overflowX: 'auto' }}>
          {LINKS.map(([id, label]) => (
            <a key={id} href={'#' + id}
              style={{ font: 'var(--fw-semibold) var(--text-sm)/1 var(--font-display)', textDecoration: 'none', whiteSpace: 'nowrap', color: active === id ? 'var(--orange-600)' : 'var(--ink-600)', transition: 'color var(--dur-fast) var(--ease-standard)' }}>{label}</a>
          ))}
        </nav>
        {Button && <Button as="a" href="#kits" variant="secondary" size="sm">UI kits</Button>}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="wl-on-brand" style={{ background: 'linear-gradient(135deg,var(--brand-red) 0%,var(--brand-vermilion) 52%,var(--brand-orange) 100%)', position: 'relative', overflow: 'hidden' }}>
      <span style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 120% at 100% 0%,rgba(255,255,255,.22),transparent 58%)' }} />
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '100px var(--gutter) 104px' }}>
        <MonoLockup size={40} />
        <h1 style={{ font: 'var(--fw-bold) 76px/1.05 var(--font-display)', letterSpacing: 'var(--ls-tighter)', color: '#fff', margin: '44px 0 0', maxWidth: '20ch' }}>Design System</h1>
        <p style={{ font: 'var(--fw-light) var(--text-2xl)/1.5 var(--font-body)', color: 'rgba(255,255,255,.92)', margin: '20px 0 0', maxWidth: '46ch' }}>Foundations, components and UI kits for the Whizlabs certification-training platform.</p>
        <div style={{ display: 'flex', gap: '36px', marginTop: '48px', flexWrap: 'wrap' }}>
          {[['49', 'components'], ['8', 'groups'], ['169', 'tokens'], ['2', 'UI kits']].map(([v, l]) => (
            <div key={l}>
              <div style={{ font: 'var(--fw-bold) var(--text-4xl)/1 var(--font-display)', color: '#fff', letterSpacing: 'var(--ls-tight)' }}>{v}</div>
              <div style={{ font: 'var(--fw-medium) var(--text-sm)/1 var(--font-body)', color: 'rgba(255,255,255,.8)', marginTop: '6px' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KitsSection() {
  const { Card, Button, Icon, Badge } = DS();
  const kits = [
    { href: '../ui_kits/marketing/index.html', name: 'Marketing site', desc: 'Home, catalog, course detail and pricing — click through the whole flow.', screens: '4 screens' },
    { href: '../ui_kits/app/index.html', name: 'Learner app', desc: 'Dashboard, practice-test library, exam player and results behind a sidebar shell.', screens: '4 screens' },
    { href: '../templates/brand-deck/BrandDeck.dc.html', name: 'Brand deck', desc: '29 slides covering this system end to end, with speaker notes. Exports to PPTX and PDF.', screens: '29 slides' },
  ];
  return (
    <Section id="kits" tone="subtle" eyebrow="Applied" title="UI kits and templates" lede="High-fidelity recreations built entirely from the components above — nothing is re-implemented inside a kit.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
        {kits.map(k => (
          <Card key={k.name} interactive accent padding="26px" style={{ display: 'flex', flexDirection: 'column' }}>
            <Badge tone="neutral" style={{ alignSelf: 'flex-start' }}>{k.screens}</Badge>
            <div style={{ font: 'var(--type-h3)', color: 'var(--text-strong)', margin: '14px 0 8px' }}>{k.name}</div>
            <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)', margin: '0 0 22px', flex: 1 }}>{k.desc}</p>
            {k.href
              ? <Button as="a" href={k.href} variant="secondary" trailingIcon={<Icon name="arrow-right" size={17} />}>Open</Button>
              : <Button variant="ghost" disabled>PPTX · PDF</Button>}
          </Card>
        ))}
      </div>
    </Section>
  );
}

function OpenSection() {
  const items = [
    ['Confirmed and exact', 'The logo, the gradient’s three colour stops and Poppins came from Whizlabs. Build on these with confidence.'],
    ['The mono', 'IBM Plex Mono for exam codes, timers and scores is a proposal. Confirm it, replace it, or drop it for Poppins.'],
    ['The icon set', 'Lucide stands in at 2px stroke until the real SVG sprite or icon font arrives. It swaps in behind the Icon component, so every screen updates at once.'],
    ['The screens', 'Both UI kits are reasoned reconstructions, not recreations. Real screens or a Figma file make them accurate rather than plausible.'],
  ];
  return (
    <Section id="open" tone="inverse" eyebrow="Status" title="Open items" lede="What is settled and what still needs your input. Everything here is built to be corrected.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '28px 44px' }}>
        {items.map(([t, d], i) => (
          <div key={t} style={{ borderTop: '1px solid ' + (i === 0 ? 'var(--orange-500)' : 'var(--ink-700)'), paddingTop: '20px' }}>
            <div style={{ font: 'var(--fw-semibold) var(--text-lg)/1.3 var(--font-display)', color: '#fff' }}>{t}</div>
            <p style={{ margin: '8px 0 0', font: 'var(--type-body-sm)', color: 'var(--ink-400)' }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '64px', paddingTop: '28px', borderTop: '1px solid var(--ink-800)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
        <MonoLockup size={24} />
        <span style={{ font: 'var(--fw-regular) var(--text-xs)/1 var(--font-body)', color: 'var(--ink-500)' }}>Whizlabs Design System · Version 1 · August 2026</span>
      </div>
    </Section>
  );
}

function App() {
  return (
    <React.Fragment>
      <TopNav />
      <Hero />
      <LogoSection />
      <ColorSection />
      <TypeSection />
      <SpaceSection />
      <MotionSection />
      <ComponentsSection />
      <KitsSection />
      <OpenSection />
    </React.Fragment>
  );
}

const root = document.getElementById('root');
if (!window[NS]) {
  root.innerHTML = '<p style="font:15px/1.6 system-ui;padding:40px;color:#b23b17;max-width:60ch">Design system bundle not loaded — <code>_ds_bundle.js</code> is generated by the compiler. Open this page from within the project so <code>../_ds_bundle.js</code> resolves.</p>';
} else {
  ReactDOM.createRoot(root).render(<App />);
}
