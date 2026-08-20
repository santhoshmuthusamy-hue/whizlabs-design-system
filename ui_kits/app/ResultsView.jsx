function ResultsView({onNav}){
  const { ScoreRing, Card, Badge, Button, ProgressBar, Icon } = window.WhizlabsDesignSystem_c8ccaf;
  const domains=[['Design Resilient Architectures',88],['Design High-Performing Architectures',79],['Design Secure Applications',61],['Design Cost-Optimized Architectures',74]];
  return <div style={{padding:'26px 32px',display:'flex',flexDirection:'column',gap:'20px'}}>
    <Card padding="26px" accent>
      <div style={{display:'flex',gap:'30px',alignItems:'center'}}>
        <ScoreRing value={78} size={124} label="Scaled 792"/>
        <div style={{flex:1}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <span style={{font:'var(--type-h2)',color:'var(--ink-950)',letterSpacing:'var(--ls-tight)'}}>Attempt 3 — Passed</span>
            <Badge tone="success">Above pass mark</Badge>
          </div>
          <p style={{font:'var(--type-body)',color:'var(--text-body)',margin:'8px 0 0',maxWidth:'62ch'}}>51 of 65 correct in 108 minutes. Security is your weakest domain — review the 9 missed questions there before your next attempt.</p>
          <div style={{display:'flex',gap:'10px',marginTop:'18px'}}>
            <Button onClick={()=>onNav('exam')} leadingIcon={<Icon name="rotate-ccw" size={17}/>}>Retake attempt</Button>
            <Button variant="secondary" leadingIcon={<Icon name="file-text" size={17}/>}>Review 14 missed</Button>
            <Button variant="ghost" leadingIcon={<Icon name="download" size={17}/>}>Export report</Button>
          </div>
        </div>
      </div>
    </Card>
    <Card padding="24px">
      <div style={{font:'var(--type-h3)',color:'var(--ink-950)',marginBottom:'18px'}}>Domain breakdown</div>
      <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
        {domains.map(([d,v])=><div key={d}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'6px'}}>
            <span style={{font:'var(--type-body-sm)',color:'var(--ink-800)'}}>{d}</span>
            <span style={{font:'var(--fw-bold) var(--text-sm)/1 var(--font-mono)',color:v>=70?'var(--success-fg)':'var(--danger-fg)'}}>{v}%</span>
          </div>
          <ProgressBar value={v} tone={v>=70?'success':'brand'}/>
        </div>)}
      </div>
    </Card>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px'}}>
      {[['108:32','Time used','clock'],['14','Questions missed','x-circle'],['6','Flagged for review','flag']].map(([v,l,ic])=>
        <Card key={l} padding="18px"><div style={{display:'flex',gap:'12px',alignItems:'center'}}>
          <span style={{width:38,height:38,borderRadius:'var(--radius-md)',display:'grid',placeItems:'center',background:'var(--ink-50)',color:'var(--ink-600)'}}><Icon name={ic} size={19}/></span>
          <div><div style={{font:'var(--fw-bold) var(--text-xl)/1 var(--font-display)',color:'var(--ink-950)'}}>{v}</div>
          <div style={{font:'var(--type-body-sm)',color:'var(--text-muted)'}}>{l}</div></div>
        </div></Card>)}
    </div>
  </div>;
}
Object.assign(window,{ ResultsView });
