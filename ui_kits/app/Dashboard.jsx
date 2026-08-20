function Dashboard({onNav}){
  const { StatTile, Card, Icon, Button, ProgressBar, LessonRow, CourseCard, Badge, Tabs } = window.WhizlabsDesignSystem_c8ccaf;
  const [tab,setTab]=React.useState('prog');
  return <div style={{padding:'26px 32px',display:'flex',flexDirection:'column',gap:'20px'}}>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'16px'}}>
      <StatTile value="82%" label="Average mock score" delta="+6" tone="brand" icon={<Icon name="trending-up" size={20}/>}/>
      <StatTile value="14" label="Tests completed" icon={<Icon name="clipboard-check" size={20}/>}/>
      <StatTile value="26d" label="Until exam day" icon={<Icon name="calendar" size={20}/>}/>
      <StatTile value="9" label="Day streak" icon={<Icon name="flame" size={20}/>}/>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr',gap:'20px',alignItems:'start'}}>
      <Card padding="24px">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'16px'}}>
          <div style={{font:'var(--type-h3)',color:'var(--ink-950)'}}>Continue where you left off</div>
          <Badge tone="brand">SAA-C03</Badge>
        </div>
        <ProgressBar value={38} showLabel label="Readiness plan" style={{marginBottom:'18px'}}/>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
          <LessonRow index={3} title="Full-length mock 2" meta="65 questions · timed" duration="130:00" state="current" onClick={()=>onNav('exam')}/>
          <LessonRow index={4} title="Domain quiz: Secure Applications" meta="25 questions" duration="50:00" onClick={()=>onNav('exam')}/>
          <LessonRow index={5} title="Lab: Build a multi-AZ VPC" meta="Hands-on lab" duration="45:00" onClick={()=>onNav('exam')}/>
        </div>
        <Button style={{marginTop:'18px'}} onClick={()=>onNav('exam')} trailingIcon={<Icon name="arrow-right" size={17}/>}>Resume attempt</Button>
      </Card>
      <Card padding="24px">
        <div style={{font:'var(--type-h3)',color:'var(--ink-950)',marginBottom:'14px'}}>Recent results</div>
        {[['Full-length mock 1','78%',true],['Domain quiz: Resilience','88%',true],['Domain quiz: Security','61%',false]].map(([t,s,pass])=>
          <div key={t} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'11px 0',borderBottom:'1px solid var(--border-subtle)'}}>
            <span style={{font:'var(--type-body-sm)',color:'var(--ink-800)'}}>{t}</span>
            <Badge tone={pass?'success':'danger'}>{s}</Badge>
          </div>)}
        <Button variant="ghost" style={{marginTop:'14px'}} onClick={()=>onNav('results')}>View full report</Button>
      </Card>
    </div>
    <div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'14px'}}>
        <div style={{font:'var(--type-h3)',color:'var(--ink-950)'}}>Your library</div>
        <Tabs variant="pill" items={[{value:'prog',label:'In progress'},{value:'all',label:'All'},{value:'done',label:'Completed'}]} value={tab} onChange={setTab}/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px'}}>
        <CourseCard provider="AWS" kind="Practice Test" title="AWS Certified Solutions Architect – Associate (SAA-C03)" level="Associate" questions={780} progress={38} rating={4.6}/>
        <CourseCard provider="Terraform" kind="Video Course" title="HashiCorp Certified: Terraform Associate" level="Associate" hours="12h" progress={72} rating={4.7} thumbColor="linear-gradient(135deg,#33415c,#0f9d8f)"/>
        <CourseCard provider="Kubernetes" kind="Hands-On Lab" title="CKA: Cluster Troubleshooting Sandbox" level="Professional" hours="6 labs" progress={12} rating={4.8} thumbColor="linear-gradient(135deg,#131b2c,#33415c)"/>
      </div>
    </div>
  </div>;
}
Object.assign(window,{ Dashboard });
