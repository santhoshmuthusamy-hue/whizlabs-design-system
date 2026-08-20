function PricingSection({onNav}){
  const { Card, Button, Badge, Icon } = window.WhizlabsDesignSystem_c8ccaf;
  const plans=[
   {name:'Single exam',price:'$19.95',per:'one-time',lines:['One practice test bundle','Unlimited attempts','Written explanations','12 months access'],cta:'Buy this exam',variant:'secondary'},
   {name:'Unlimited',price:'$45',per:'per month',lines:['Every practice test','Every video course','Hands-on labs in a real account','Personalised readiness score','Cancel anytime'],cta:'Start free trial',variant:'primary',featured:true},
   {name:'Business',price:'Custom',per:'per seat',lines:['Team dashboards','Skill-gap reporting','SSO and invoicing','Dedicated success manager'],cta:'Talk to sales',variant:'secondary'}];
  return <section style={{background:'var(--surface-subtle)',borderTop:'1px solid var(--border-subtle)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--section-y) var(--gutter)'}}>
      <div style={{textAlign:'center',marginBottom:'44px'}}>
        <span style={{font:'var(--type-eyebrow)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',color:'var(--orange-600)'}}>Pricing</span>
        <h2 style={{font:'var(--type-h1)',letterSpacing:'var(--ls-tight)',color:'var(--ink-950)',margin:'10px 0 0'}}>One subscription, every certification</h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',alignItems:'start'}}>
        {plans.map(p=><Card key={p.name} accent={p.featured} padding="28px" style={p.featured?{boxShadow:'var(--shadow-lg)',borderColor:'var(--orange-200)'}:{}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <span style={{font:'var(--type-h3)',color:'var(--ink-950)'}}>{p.name}</span>
            {p.featured&&<Badge tone="brand" solid uppercase>Most popular</Badge>}
          </div>
          <div style={{display:'flex',alignItems:'baseline',gap:'8px',margin:'16px 0 20px'}}>
            <span style={{font:'var(--fw-bold) 40px/1 var(--font-display)',letterSpacing:'var(--ls-tight)',color:'var(--ink-950)'}}>{p.price}</span>
            <span style={{font:'var(--type-body-sm)',color:'var(--text-muted)'}}>{p.per}</span>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'24px'}}>
            {p.lines.map(l=><span key={l} style={{display:'flex',gap:'9px',font:'var(--type-body-sm)',color:'var(--ink-700)'}}>
              <Icon name="check" size={17} color="var(--success-solid)"/>{l}</span>)}
          </div>
          <Button fullWidth size="lg" variant={p.variant} onClick={()=>onNav('app')}>{p.cta}</Button>
        </Card>)}
      </div>
    </div>
  </section>;
}

Object.assign(window,{ PricingSection });
