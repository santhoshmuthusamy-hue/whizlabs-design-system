const WL_QUESTIONS=[
 {domain:'Design Resilient Architectures',prompt:'An application must decouple order intake from fulfilment and guarantee exactly-once processing of each order. Which service should the architect choose?',options:['Amazon SNS standard topic','Amazon SQS FIFO queue','Amazon Kinesis Data Firehose','Amazon MQ with a topic exchange']},
 {domain:'Design Secure Architectures',prompt:'A team needs to grant an EC2 instance read access to one S3 bucket without storing long-lived credentials. What should they use?',options:['An IAM user with an access key on the instance','An IAM role attached to the instance profile','A bucket policy granting public read','AWS Secrets Manager with a rotating key']},
 {domain:'Design Cost-Optimized Architectures',prompt:'Logs must remain queryable for 30 days, then be retained for seven years at the lowest possible cost. Which lifecycle is correct?',options:['S3 Standard, then S3 Glacier Deep Archive','S3 Standard, then EBS snapshots','S3 Intelligent-Tiering only','S3 Standard-IA, then EFS']}
];
function ExamPlayer({onFinish}){
  const { QuestionCard, Button, Icon, Alert, ProgressBar, Card } = window.WhizlabsDesignSystem_c8ccaf;
  const [i,setI]=React.useState(0);const [ans,setAns]=React.useState({});const [flags,setFlags]=React.useState({});
  const q=WL_QUESTIONS[i];
  return <div style={{padding:'26px 32px',display:'grid',gridTemplateColumns:'1fr 280px',gap:'24px',alignItems:'start'}}>
    <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
      <Alert tone="warning" title="42:17 remaining" icon={<Icon name="clock" size={18}/>}>Unanswered questions are listed in the review panel.</Alert>
      <QuestionCard number={i+1} total={65} domain={q.domain} prompt={q.prompt} options={q.options}
        selected={ans[i]} onSelect={v=>setAns({...ans,[i]:v})}
        flagged={!!flags[i]} onFlag={()=>setFlags({...flags,[i]:!flags[i]})}/>
      <div style={{display:'flex',gap:'10px'}}>
        <Button variant="secondary" disabled={i===0} onClick={()=>setI(i-1)} leadingIcon={<Icon name="chevron-left" size={17}/>}>Previous</Button>
        {i<WL_QUESTIONS.length-1
          ? <Button onClick={()=>setI(i+1)} trailingIcon={<Icon name="chevron-right" size={17}/>}>Next question</Button>
          : <Button onClick={onFinish} trailingIcon={<Icon name="flag" size={17}/>}>Submit attempt</Button>}
      </div>
    </div>
    <Card padding="18px" style={{position:'sticky',top:'26px'}}>
      <div style={{font:'var(--fw-semibold) var(--text-sm)/1 var(--font-display)',color:'var(--ink-950)',marginBottom:'12px'}}>Question navigator</div>
      <ProgressBar value={(Object.keys(ans).length/65)*100} size="sm" style={{marginBottom:'14px'}}/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:'6px'}}>
        {Array.from({length:28},(_,n)=>{const cur=n===i;const done=ans[n]!=null;const fl=flags[n];
          return <button key={n} onClick={()=>n<WL_QUESTIONS.length&&setI(n)} style={{height:'30px',borderRadius:'var(--radius-xs)',cursor:'pointer',
            border:'1px solid '+(cur?'var(--orange-500)':fl?'var(--brand-amber)':'var(--border-default)'),
            background:done?'var(--orange-50)':'#fff',color:done?'var(--orange-700)':'var(--ink-500)',
            font:'var(--fw-semibold) 11px/1 var(--font-mono)'}}>{n+1}</button>;})}
      </div>
      <div style={{marginTop:'14px',font:'var(--fw-regular) var(--text-xs)/1.3 var(--font-body)',color:'var(--text-muted)'}}>
        {Object.keys(ans).length} answered · {Object.keys(flags).filter(k=>flags[k]).length} flagged
      </div>
    </Card>
  </div>;
}
Object.assign(window,{ ExamPlayer, WL_QUESTIONS });
