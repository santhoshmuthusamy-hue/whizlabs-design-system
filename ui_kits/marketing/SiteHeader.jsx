function SiteHeader({page,onNav}){
  const { Logo, Icon, Button, SearchField } = window.WhizlabsDesignSystem_c8ccaf;
  const links=[['home','Certifications'],['catalog','Practice Tests'],['catalog','Hands-On Labs'],['pricing','Pricing'],['home','For Business']];
  return <header style={{position:'sticky',top:0,zIndex:20,background:'rgba(255,255,255,.88)',backdropFilter:'var(--blur-glass)',borderBottom:'1px solid var(--border-subtle)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--gutter)',height:'72px',display:'flex',alignItems:'center',gap:'28px'}}>
      <a href="#" onClick={e=>{e.preventDefault();onNav('home')}} style={{textDecoration:'none'}}><Logo size={26}/></a>
      <nav style={{display:'flex',gap:'22px',flex:1}}>
        {links.map(([k,l],i)=><a key={i} href="#" onClick={e=>{e.preventDefault();onNav(k)}}
          style={{font:'var(--fw-semibold) var(--text-sm)/1 var(--font-display)',color:page===k&&i<3?'var(--orange-600)':'var(--ink-700)',textDecoration:'none'}}>{l}</a>)}
      </nav>
      <SearchField size="md" placeholder="Search 500+ exams" style={{width:'230px'}}/>
      <a href="#" onClick={e=>{e.preventDefault();onNav('app')}} style={{font:'var(--fw-semibold) var(--text-sm)/1 var(--font-display)',color:'var(--ink-700)',textDecoration:'none'}}>Sign in</a>
      <Button onClick={()=>onNav('pricing')}>Start free trial</Button>
    </div>
  </header>;
}

Object.assign(window,{ SiteHeader });
