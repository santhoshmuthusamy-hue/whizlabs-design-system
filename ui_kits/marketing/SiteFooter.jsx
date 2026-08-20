function SiteFooter(){
  const { Logo } = window.WhizlabsDesignSystem_c8ccaf;
  const cols=[['Certifications',['AWS','Microsoft Azure','Google Cloud','Kubernetes','Terraform']],
   ['Products',['Practice Tests','Video Courses','Hands-On Labs','Learning Paths','Sandbox']],
   ['Company',['About','Careers','Blog','Contact','For Business']]];
  return <footer style={{background:'var(--ink-950)',color:'var(--ink-300)',position:'relative'}}>
    <span style={{position:'absolute',inset:'0 0 auto 0',height:'4px',background:'var(--brand-gradient)'}}/>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'56px var(--gutter) 40px',display:'grid',gridTemplateColumns:'1.4fr repeat(3,1fr)',gap:'40px'}}>
      <div>
        <Logo variant="inverse" size={26}/>
        <p style={{font:'var(--type-body-sm)',color:'var(--ink-400)',margin:'14px 0 0',maxWidth:'34ch'}}>Certification training for cloud, DevOps and data engineers.</p>
      </div>
      {cols.map(([h,items])=><div key={h}>
        <div style={{font:'var(--type-eyebrow)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',color:'var(--ink-500)',marginBottom:'14px'}}>{h}</div>
        <div style={{display:'flex',flexDirection:'column',gap:'9px'}}>
          {items.map(i=><a key={i} href="#" onClick={e=>e.preventDefault()} style={{font:'var(--type-body-sm)',color:'var(--ink-300)',textDecoration:'none'}}>{i}</a>)}
        </div>
      </div>)}
    </div>
    <div style={{borderTop:'1px solid rgba(255,255,255,.08)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'20px var(--gutter)',font:'var(--fw-regular) var(--text-xs)/1 var(--font-body)',color:'var(--ink-500)'}}>© 2026 Whizlabs. All rights reserved.</div>
    </div>
  </footer>;
}

Object.assign(window,{ SiteFooter });
