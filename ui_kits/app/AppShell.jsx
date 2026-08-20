function AppShell({view,onNav,children}){
  const { Logo, SidebarNav, Icon, Avatar } = window.WhizlabsDesignSystem_c8ccaf;
  return <div style={{display:'grid',gridTemplateColumns:'248px 1fr',minHeight:'100vh',background:'var(--surface-subtle)'}}>
    <aside style={{background:'#fff',borderRight:'1px solid var(--border-subtle)',padding:'20px 14px',display:'flex',flexDirection:'column',gap:'22px',position:'sticky',top:0,height:'100vh'}}>
      <div style={{padding:'0 8px'}}><Logo size={24}/></div>
      <SidebarNav value={view} onChange={onNav} items={[
        {value:'dash',label:'Dashboard',icon:<Icon name="layout-grid" size={18}/>},
        {value:'tests',label:'Practice Tests',icon:<Icon name="clipboard-check" size={18}/>},
        {value:'exam',label:'Resume attempt',icon:<Icon name="play-circle" size={18}/>},
        {value:'results',label:'Results',icon:<Icon name="bar-chart-3" size={18}/>},
        {value:'labs',label:'Hands-On Labs',icon:<Icon name="flask-conical" size={18}/>,badge:3},
        {value:'certs',label:'Certificates',icon:<Icon name="award" size={18}/>}]}/>
      <div style={{marginTop:'auto',padding:'14px',borderRadius:'var(--radius-md)',background:'var(--brand-gradient-soft)',border:'1px solid var(--orange-100)'}}>
        <div style={{font:'var(--fw-bold) var(--text-sm)/1.3 var(--font-display)',color:'var(--orange-800)'}}>Exam in 26 days</div>
        <div style={{font:'var(--fw-regular) var(--text-xs)/1.4 var(--font-body)',color:'var(--orange-700)',marginTop:'4px'}}>You are 38% through your readiness plan.</div>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'8px 8px 0',borderTop:'1px solid var(--border-subtle)',paddingTop:'14px'}}>
        <Avatar name="Priya Nair" size={34}/>
        <div style={{minWidth:0}}>
          <div style={{font:'var(--fw-semibold) var(--text-sm)/1.2 var(--font-display)',color:'var(--ink-950)'}}>Priya Nair</div>
          <div style={{font:'var(--fw-regular) var(--text-xs)/1.2 var(--font-body)',color:'var(--text-muted)'}}>Unlimited plan</div>
        </div>
      </div>
    </aside>
    <main>{children}</main>
  </div>;
}
function TopBar({title,subtitle,actions}){
  return <div style={{background:'#fff',borderBottom:'1px solid var(--border-subtle)',padding:'22px 32px',display:'flex',alignItems:'center',gap:'20px',position:'sticky',top:0,zIndex:10}}>
    <div style={{flex:1}}>
      <h1 style={{font:'var(--type-h2)',letterSpacing:'var(--ls-tight)',color:'var(--ink-950)',margin:0}}>{title}</h1>
      {subtitle&&<p style={{font:'var(--type-body-sm)',color:'var(--text-muted)',margin:'5px 0 0'}}>{subtitle}</p>}
    </div>
    {actions}
  </div>;
}
Object.assign(window,{ AppShell, TopBar });
