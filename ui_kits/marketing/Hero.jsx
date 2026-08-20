function Hero({onNav}){
  const { Button, Icon, Badge, Avatar } = window.WhizlabsDesignSystem_c8ccaf;
  return <section style={{background:'var(--brand-gradient-soft)',borderBottom:'1px solid var(--orange-100)',position:'relative',overflow:'hidden'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'80px var(--gutter) 88px',display:'grid',gridTemplateColumns:'1.05fr .95fr',gap:'56px',alignItems:'center'}}>
      <div>
        <span style={{font:'var(--type-eyebrow)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',color:'var(--orange-600)'}}>Cloud &amp; DevOps certification prep</span>
        <h1 style={{font:'var(--fw-bold) 56px/1.06 var(--font-display)',letterSpacing:'var(--ls-tighter)',color:'var(--ink-950)',margin:'14px 0 0',textWrap:'pretty'}}>Pass the exam the first time.</h1>
        <p style={{font:'var(--fw-regular) var(--text-lg)/1.6 var(--font-body)',color:'var(--ink-700)',margin:'18px 0 0',maxWidth:'50ch'}}>Practice tests written against the current blueprint, video courses taught by working engineers, and hands-on labs in a real cloud account.</p>
        <div style={{display:'flex',gap:'12px',marginTop:'30px'}}>
          <Button size="xl" onClick={()=>onNav('catalog')} trailingIcon={<Icon name="arrow-right" size={20}/>}>Browse certifications</Button>
          <Button size="xl" variant="secondary" onClick={()=>onNav('course')} leadingIcon={<Icon name="play-circle" size={20}/>}>See a sample test</Button>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'12px',marginTop:'28px'}}>
          <span style={{display:'flex'}}>{['A B','C D','E F','G H'].map((n,i)=><Avatar key={i} name={n} size={30} style={{marginLeft:i?-9:0,boxShadow:'0 0 0 2px #fff'}}/>)}</span>
          <span style={{font:'var(--type-body-sm)',color:'var(--ink-600)'}}><b style={{color:'var(--ink-950)'}}>3M+ learners</b> · 4.6 average rating across 500+ exams</span>
        </div>
      </div>
      <div style={{background:'#fff',borderRadius:'var(--radius-xl)',boxShadow:'var(--shadow-xl)',border:'1px solid var(--border-subtle)',overflow:'hidden'}}>
        <div style={{height:'6px',background:'var(--brand-gradient)'}}/>
        <div style={{padding:'22px 24px'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span style={{font:'var(--fw-bold) var(--text-xs)/1 var(--font-mono)',color:'var(--text-muted)'}}>Q12 / 65</span>
            <span style={{font:'var(--fw-semibold) var(--text-sm)/1 var(--font-mono)',color:'var(--orange-600)'}}>42:17</span>
          </div>
          <p style={{font:'var(--fw-regular) var(--text-md)/1.6 var(--font-body)',color:'var(--ink-900)',margin:'14px 0 16px'}}>An application must decouple order intake from fulfilment and guarantee exactly-once processing. Which service should the architect choose?</p>
          {[['Amazon SNS standard topic',0],['Amazon SQS FIFO queue',1],['Amazon Kinesis Data Firehose',0]].map(([o,on],i)=>
            <div key={i} style={{padding:'12px 14px',marginBottom:'8px',borderRadius:'var(--radius-md)',border:'1px solid '+(on?'var(--orange-400)':'var(--border-default)'),background:on?'var(--orange-50)':'#fff',font:'var(--type-body-sm)',color:'var(--ink-800)'}}>{o}</div>)}
          <div style={{marginTop:'14px',paddingTop:'14px',borderTop:'1px solid var(--border-subtle)',display:'flex',gap:'8px'}}>
            <Badge tone="neutral">Design Resilient Architectures</Badge><Badge tone="success">Explanation included</Badge>
          </div>
        </div>
      </div>
    </div>
  </section>;
}

Object.assign(window,{ Hero });
