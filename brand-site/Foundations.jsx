const ART = {
  full: '../assets/logo-lockup.svg',
  inverse: '../assets/logo-lockup-inverse.svg',
  mono: '../assets/logo-lockup-mono.svg',
  mark: '../assets/logo-mark.svg',
};

function LogoSection() {
  const [variant, setVariant] = React.useState('full');
  const { ToggleButton } = DS();
  const surfaces = {
    full: { bg: 'var(--white)', note: 'Light surfaces. The default.' },
    inverse: { bg: 'var(--ink-950)', note: 'Ink-950 and other dark surfaces. The mark keeps its gradient.' },
    mono: { bg: 'linear-gradient(135deg,var(--brand-red),var(--brand-vermilion) 52%,var(--brand-orange))', note: 'Brand colour or the gradient. The one case where the mark drops its gradient.' },
    mark: { bg: 'var(--surface-subtle)', note: 'Favicons, avatars, tight headers, slide corners.' },
  };
  const s = surfaces[variant];
  return (
    <Section id="logo" eyebrow="Identity" title="The logo" lede="Four variants, all vector. size sets the height — width follows the artwork. Clear space on all sides equals the mark height; minimum lockup height is 16px.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }}>
        <div style={{ background: s.bg, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', minHeight: '240px', display: 'grid', placeItems: 'center', padding: '48px', transition: 'background var(--dur-slow) var(--ease-standard)' }}>
          <img src={ART[variant]} alt="Whizlabs"
            style={{ height: (variant === 'mark' ? 74 : 52) + 'px', width: 'auto', aspectRatio: variant === 'mark' ? '1.841' : '7.337', display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {ToggleButton && <ToggleButton fullWidth options={[{ value: 'full', label: 'Full' }, { value: 'inverse', label: 'Inverse' }, { value: 'mono', label: 'Mono' }, { value: 'mark', label: 'Mark' }]} value={variant} onChange={setVariant} />}
          <Panel label={'variant="' + variant + '"'} pad="18px">
            <p style={{ margin: 0, font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>{s.note}</p>
          </Panel>
          <Panel label="Never" pad="18px">
            <ul style={{ margin: 0, paddingLeft: '18px', font: 'var(--type-body-sm)', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Recolour or flatten the gradient</li>
              <li>Outline, shadow, rotate or skew the mark</li>
              <li>Re-typeset WHIZLABS in a UI font</li>
              <li>Use <code>inverse</code> on orange</li>
            </ul>
          </Panel>
        </div>
      </div>
    </Section>
  );
}

const RAMPS = [
  ['Orange — primary', ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map(k => ['--orange-' + k, k, +k <= 300])],
  ['Red', ['50', '100', '200', '300', '400', '500', '600', '700'].map(k => ['--red-' + k, k, +k <= 300])],
  ['Ink — warm neutral', ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map(k => ['--ink-' + k, k, +k <= 300])],
];

function ColorSection() {
  return (
    <Section id="colour" tone="subtle" eyebrow="Foundations" title="Colour" lede="The brand palette is the logo gradient, nothing invented. Its three stops are #e8402b, #f0602a and #f78b20; every ramp is built outward from them. Click any swatch to copy its token.">
      <Copyable value="linear-gradient(135deg,#e8402b,#f0602a 52%,#f78b20)" style={{ display: 'block', width: '100%', marginBottom: '32px' }}>
        <div style={{ height: '120px', borderRadius: 'var(--radius-lg)', background: 'var(--brand-gradient)', display: 'flex', alignItems: 'flex-end', padding: '20px 24px', position: 'relative' }}>
          <span style={{ font: 'var(--fw-semibold) var(--text-sm)/1 var(--font-mono)', color: '#fff' }}>--brand-gradient &nbsp;·&nbsp; #e8402b → #f0602a → #f78b20</span>
        </div>
      </Copyable>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
        {RAMPS.map(([name, stops]) => (
          <div key={name}>
            <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>{name}</div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {stops.map(([tok, label, light]) => (
                <Copyable key={tok} value={'var(' + tok + ')'} style={{ flex: 1 }}>
                  <div style={{ height: '76px', borderRadius: 'var(--radius-sm)', background: 'var(' + tok + ')', display: 'flex', alignItems: 'flex-end', padding: '7px', font: 'var(--fw-semibold) 10px/1 var(--font-mono)', color: light ? 'var(--ink-700)' : '#fff' }}>{label}</div>
                </Copyable>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>Status</div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {[['--success-solid', 'success'], ['--warning-solid', 'warning'], ['--danger-solid', 'danger'], ['--info-solid', 'info'], ['--teal-500', 'teal']].map(([tok, l]) => (
              <Copyable key={tok} value={'var(' + tok + ')'} style={{ flex: 1 }}>
                <div style={{ height: '76px', borderRadius: 'var(--radius-sm)', background: 'var(' + tok + ')', display: 'flex', alignItems: 'flex-end', padding: '7px', font: 'var(--fw-semibold) 10px/1 var(--font-mono)', color: '#fff' }}>{l}</div>
              </Copyable>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function TypeSection() {
  const rows = [['Display', 60, 700, 'var(--font-display)', 'Get certified. Faster.'], ['H1', 38, 700, 'var(--font-display)', 'Know the exam before exam day'], ['H2', 30, 600, 'var(--font-display)', 'Section heading'], ['H3', 20, 600, 'var(--font-display)', 'Card heading'], ['Body', 16, 400, 'var(--font-body)', 'Every practice test is written against the current exam blueprint.'], ['Body small', 14, 400, 'var(--font-body)', 'Secondary and supporting copy.'], ['Mono', 15, 500, 'var(--font-mono)', 'SAA-C03 · 42:17 · 792']];
  return (
    <Section id="type" eyebrow="Foundations" title="Poppins" lede="One family for structure and reading text, with IBM Plex Mono for exam machinery. Poppins is geometric and wide, so weights stop at 700, tracking stays light, and body runs at 1.7 with paragraphs capped near 58 characters.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px', alignItems: 'start' }}>
        <Panel pad="0">
          {rows.map(([label, size, weight, family, sample], i) => (
            <div key={label} style={{ display: 'flex', gap: '20px', alignItems: 'baseline', padding: '16px 22px', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
              <span style={{ width: '92px', flex: '0 0 auto', font: 'var(--fw-semibold) var(--text-2xs)/1 var(--font-mono)', color: 'var(--orange-600)' }}>{label}</span>
              <span style={{ width: '76px', flex: '0 0 auto', font: 'var(--fw-regular) var(--text-2xs)/1 var(--font-mono)', color: 'var(--text-faint)' }}>{size}/{weight}</span>
              <span style={{ flex: 1, minWidth: 0, fontFamily: family, fontSize: Math.min(size, 26) + 'px', fontWeight: weight, letterSpacing: size >= 30 ? 'var(--ls-tight)' : 'var(--ls-normal)', color: 'var(--text-strong)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sample}</span>
            </div>
          ))}
        </Panel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <Panel label="Three rules" pad="18px">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>
              <div><b style={{ fontFamily: 'var(--font-display)' }}>Weights stop at 700.</b> 800 goes clumsy at headline sizes.</div>
              <div><b style={{ fontFamily: 'var(--font-display)' }}>Tracking stays light.</b> −.01em normally, −.02em at display sizes.</div>
              <div><b style={{ fontFamily: 'var(--font-display)' }}>Lines breathe.</b> Body 16/1.7, paragraphs near 58ch.</div>
            </div>
          </Panel>
          <Panel label="Reserved" pad="18px">
            <p style={{ margin: 0, font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>Poppins Light 300 is loaded but kept out of the interface — it is the weight the logotype resembles.</p>
          </Panel>
        </div>
      </div>
    </Section>
  );
}

function SpaceSection() {
  return (
    <Section id="space" tone="subtle" eyebrow="Foundations" title="Space, radius, elevation" lede="Everything lands on a 4px base: 16 or 24 inside cards, 32 and 48 between blocks, 96 between page sections.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <Panel label="Spacing scale" pad="24px">
          <Row gap="10px" style={{ alignItems: 'flex-end' }}>
            {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64].map((v, i) => (
              <div key={v} style={{ textAlign: 'center' }}>
                <div style={{ width: Math.min(v, 52) + 'px', height: Math.min(v, 52) + 'px', borderRadius: '3px', background: 'var(--orange-' + (100 + Math.min(i, 7) * 100) + ')' }} />
                <div style={{ marginTop: '5px', font: 'var(--fw-medium) 9px/1 var(--font-mono)', color: 'var(--text-muted)' }}>{v}</div>
              </div>
            ))}
          </Row>
        </Panel>
        <Panel label="Corner radii" pad="24px">
          <Row gap="14px" style={{ alignItems: 'flex-end' }}>
            {[['xs', 4], ['sm', 6], ['md', 10], ['lg', 14], ['xl', 20], ['2xl', 28]].map(([k, v]) => (
              <div key={k} style={{ textAlign: 'center' }}>
                <div style={{ width: '58px', height: '48px', background: 'var(--ink-50)', border: '1px solid var(--border-default)', borderRadius: v + 'px' }} />
                <div style={{ marginTop: '5px', font: 'var(--fw-medium) 9px/1 var(--font-mono)', color: 'var(--text-muted)' }}>{k}</div>
              </div>
            ))}
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '76px', height: '38px', background: 'var(--ink-50)', border: '1px solid var(--border-default)', borderRadius: '999px' }} />
              <div style={{ marginTop: '5px', font: 'var(--fw-medium) 9px/1 var(--font-mono)', color: 'var(--text-muted)' }}>pill</div>
            </div>
          </Row>
        </Panel>
        <Panel label="Elevation" pad="24px" style={{ gridColumn: 'span 2' }}>
          <Row gap="18px" style={{ flexWrap: 'nowrap' }}>
            {[['xs', 'var(--shadow-xs)'], ['sm', 'var(--shadow-sm)'], ['md', 'var(--shadow-md)'], ['lg', 'var(--shadow-lg)'], ['xl', 'var(--shadow-xl)'], ['brand', 'var(--shadow-brand)']].map(([k, sh]) => (
              <div key={k} style={{ flex: 1 }}>
                <div style={{ height: '68px', borderRadius: 'var(--radius-lg)', background: k === 'brand' ? 'var(--brand-gradient)' : '#fff', boxShadow: sh, border: k === 'brand' ? 'none' : '1px solid var(--border-subtle)' }} />
                <div style={{ marginTop: '8px', textAlign: 'center', font: 'var(--fw-medium) 10px/1 var(--font-mono)', color: 'var(--text-muted)' }}>{k}</div>
              </div>
            ))}
          </Row>
        </Panel>
      </div>
    </Section>
  );
}

function MotionSection() {
  const { Button, Card } = DS();
  return (
    <Section id="motion" tone="inverse" eyebrow="Foundations" title="Motion and states" lede="One easing curve, five durations. Motion confirms an action; it never decorates. Hover and press the examples below.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
        {[['Hover', 'Cards lift 2px and deepen their shadow. Primary buttons flatten to orange-600 and gain the brand glow.'], ['Press', 'Scale .97 with no colour change, 80ms. Identical on every clickable control.'], ['Focus', 'A 3px orange ring at 28% plus an orange-500 border. Never removed.'], ['Selection', 'Orange-50 fill, orange-300 border, orange-700 text — the single selection idiom.']].map(([t, d]) => (
          <div key={t} style={{ borderTop: '1px solid var(--ink-700)', paddingTop: '18px' }}>
            <div style={{ font: 'var(--fw-semibold) var(--text-md)/1.3 var(--font-display)', color: '#fff' }}>{t}</div>
            <p style={{ margin: '8px 0 0', font: 'var(--type-body-sm)', color: 'var(--ink-400)' }}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
        {Button && <><Button size="lg">Hover me</Button><Button size="lg" variant="secondary">Secondary</Button><Button size="lg" variant="inverse">Inverse</Button></>}
        {Card && <Card interactive style={{ padding: '18px 22px', minWidth: '240px' }}>
          <div style={{ font: 'var(--fw-semibold) var(--text-sm)/1.2 var(--font-display)', color: 'var(--text-strong)' }}>Interactive card</div>
          <div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', marginTop: '3px' }}>Lifts on hover</div>
        </Card>}
      </div>
      <p style={{ margin: '32px 0 0', font: 'var(--fw-medium) var(--text-md)/1 var(--font-mono)', color: 'var(--orange-300)' }}>80 · 140 · 200 · 320 · 520ms — cubic-bezier(.2,.7,.3,1)</p>
    </Section>
  );
}

Object.assign(window, { LogoSection, ColorSection, TypeSection, SpaceSection, MotionSection });
