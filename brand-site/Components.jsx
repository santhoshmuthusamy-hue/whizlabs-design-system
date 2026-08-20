function Demo({ name, note, children }) {
  return (
    <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '22px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px', flexWrap: 'wrap' }}>
        <span style={{ font: 'var(--fw-semibold) var(--text-md)/1.2 var(--font-display)', color: 'var(--text-strong)' }}>{name}</span>
      </div>
      {note && <p style={{ margin: '0 0 18px', font: 'var(--type-body-sm)', color: 'var(--text-muted)', maxWidth: '72ch' }}>{note}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>{children}</div>
    </div>
  );
}

function CoreGroup() {
  const { Button, IconButton, Badge, Tag, Card, Avatar, Icon } = DS();
  const [tag, setTag] = React.useState('AWS');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Demo name="Button" note="Six variants, four sizes. One primary per view — a second gradient button means neither reads as the main action.">
        <Button size="lg" trailingIcon={<Icon name="arrow-right" size={18} />}>Start free trial</Button>
        <Button variant="secondary">View syllabus</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Delete</Button>
        <Button disabled>Disabled</Button>
        <IconButton variant="secondary" label="Bookmark"><Icon name="bookmark" size={18} /></IconButton>
      </Demo>
      <Demo name="Badge and Tag" note="A badge reports state and is read-only. A tag is a filter you click — different shapes so the difference is visible before you try.">
        <Badge tone="brand" solid uppercase>Bestseller</Badge>
        <Badge tone="neutral">Associate</Badge>
        <Badge tone="success">Passed</Badge>
        <Badge tone="warning">Expiring</Badge>
        <Badge tone="danger">Failed</Badge>
        <Badge tone="info">Updated</Badge>
        <span style={{ width: '18px' }} />
        {['AWS', 'Azure', 'Kubernetes'].map(t => <Tag key={t} active={tag === t} onClick={() => setTag(t)}>{t}</Tag>)}
      </Demo>
      <Demo name="Card and Avatar" note="One card recipe: white, hairline border, 14px radius, shadow-sm. The only accent is a 4px gradient rule on the top edge — never a coloured left border.">
        <Card accent style={{ flex: 1, minWidth: '240px' }}>
          <div style={{ font: 'var(--type-h3)', color: 'var(--text-strong)' }}>Accented</div>
          <div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', marginTop: '4px' }}>Gradient rule, top edge</div>
        </Card>
        <Card interactive style={{ flex: 1, minWidth: '240px' }}>
          <div style={{ font: 'var(--type-h3)', color: 'var(--text-strong)' }}>Interactive</div>
          <div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', marginTop: '4px' }}>Lifts on hover</div>
        </Card>
        <Avatar name="Priya Nair" size={44} />
        <Avatar name="Daniel Osei" size={36} />
      </Demo>
    </div>
  );
}

function FormsGroup() {
  const { Input, Select, Checkbox, Radio, Switch, SearchField, Slider, NumberField, Rating, ToggleButton, ButtonGroup, Button, Autocomplete, Icon, Fab } = DS();
  const [c, setC] = React.useState(true), [r, setR] = React.useState(1), [sw, setSw] = React.useState(true);
  const [q, setQ] = React.useState(40), [seats, setSeats] = React.useState(12), [rate, setRate] = React.useState(4);
  const [mode, setMode] = React.useState('timed'), [ac, setAc] = React.useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Demo name="SearchField and Autocomplete" note="With 500 exams in the catalogue, typing beats browsing. Suggestions carry a count so the choice is informed before the click.">
        <SearchField style={{ flex: 1, minWidth: '280px' }} />
        <Autocomplete style={{ flex: 1, minWidth: '280px' }} label="Find your exam" value={ac} onChange={setAc} onSelect={o => setAc(o.label || o)}
          options={[{ label: 'AWS SAA-C03', meta: '780 q' }, { label: 'AWS DVA-C02', meta: '620 q' }, { label: 'Azure AZ-104', meta: '540 q' }, { label: 'Terraform Associate', meta: '410 q' }]} />
      </Demo>
      <Demo name="Input and Select" note="Every field carries a real label, room for a hint, and a distinct error state. Focus is never removed.">
        <Input style={{ flex: 1, minWidth: '240px' }} label="Work email" placeholder="you@company.com" hint="Used for your certificate." />
        <Input style={{ flex: 1, minWidth: '240px' }} label="Password" type="password" defaultValue="hunter22" error="Must be at least 12 characters." />
        <Select style={{ flex: 1, minWidth: '200px' }} label="Sort by" options={['Most popular', 'Newest', 'Highest rated']} />
      </Demo>
      <Demo name="Checkbox, Radio, Switch" note="Checkbox for many, radio for one, switch only for settings that apply instantly. Checked states fill with the brand gradient.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '260px' }}>
          <Checkbox label="Practice tests" description="1,200+ questions" checked={c} onChange={() => setC(!c)} />
          <Switch checked={sw} onChange={() => setSw(!sw)} label="Email me exam reminders" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, minWidth: '300px' }}>
          {['Amazon SNS standard topic', 'Amazon SQS FIFO queue', 'Amazon Kinesis Data Firehose'].map((o, i) =>
            <Radio key={o} boxed name="wl-q" label={o} checked={r === i} onChange={() => setR(i)} />)}
        </div>
      </Demo>
      <Demo name="Slider, NumberField, Rating" note="A slider for approximate values, a stepper for exact small integers, a rating for a scale with social meaning.">
        <Slider style={{ flex: 1, minWidth: '260px' }} label="Questions per session" value={q} min={10} max={100} step={5} onChange={setQ} />
        <NumberField label="Team seats" value={seats} min={1} max={500} onChange={setSeats} />
        <div>
          <div style={{ font: 'var(--type-label)', color: 'var(--ink-800)', marginBottom: '6px' }}>Your rating</div>
          <Rating value={rate} onChange={setRate} size={24} />
        </div>
      </Demo>
      <Demo name="ToggleButton, ButtonGroup, Fab" note="Segmented control for exclusive modes; a button group joins related actions; one floating action per screen.">
        <ToggleButton options={[{ value: 'timed', label: 'Timed' }, { value: 'study', label: 'Study mode' }, { value: 'review', label: 'Review' }]} value={mode} onChange={setMode} />
        <ButtonGroup><Button variant="secondary">Save</Button><Button variant="secondary">Save and exit</Button></ButtonGroup>
        <Fab label="Resume attempt" extended size={48} icon={<Icon name="play" size={19} />} />
      </Demo>
    </div>
  );
}

function FeedbackGroup() {
  const { Alert, ProgressBar, ScoreRing, Skeleton, Dialog, Snackbar, Spinner, Button, Icon } = DS();
  const [open, setOpen] = React.useState(false), [toast, setToast] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Demo name="Alert" note="Inline notice for exam warnings, payment issues and form-level errors. Nothing on the platform fails silently.">
        <Alert style={{ width: '100%' }} tone="warning" title="15 minutes remaining" icon={<Icon name="clock" size={18} />}>Unanswered questions are marked in the review panel.</Alert>
        <Alert style={{ flex: 1, minWidth: '200px' }} tone="success" title="Score saved" />
        <Alert style={{ flex: 1, minWidth: '200px' }} tone="danger" title="Payment failed" />
        <Alert style={{ flex: 1, minWidth: '200px' }} tone="info" title="New exam version" />
      </Demo>
      <Demo name="ProgressBar, ScoreRing, Skeleton" note="The score ring knows the pass mark, so it turns green or red on its own.">
        <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <ProgressBar value={62} showLabel label="Course progress" />
          <ProgressBar value={100} tone="success" size="sm" />
          <Skeleton width="70%" height={16} />
        </div>
        <ScoreRing value={82} label="Overall" />
        <ScoreRing value={54} label="Attempt 1" />
      </Demo>
      <Demo name="Dialog, Snackbar, Spinner" note="Ordered by cost to the learner: a snackbar confirms, a dialog demands a decision. Use the cheapest one that does the job.">
        <Button variant="secondary" onClick={() => setOpen(true)}>Open dialog</Button>
        <Button variant="secondary" onClick={() => { setToast(true); setTimeout(() => setToast(false), 2600); }}>Show snackbar</Button>
        <Spinner size={24} />
        <Spinner size={20} tone="neutral" />
        <Dialog open={open} title="Submit attempt?" description="14 questions are still unanswered. Submitting ends the attempt and scores it immediately."
          onClose={() => setOpen(false)}
          actions={<><Button variant="secondary" onClick={() => setOpen(false)}>Keep going</Button><Button onClick={() => setOpen(false)}>Submit</Button></>} />
        <Snackbar open={toast} tone="success" message="Attempt saved" icon={<Icon name="check" size={17} />} onDismiss={() => setToast(false)} />
      </Demo>
    </div>
  );
}

function NavGroup() {
  const { Tabs, Breadcrumb, Pagination, SidebarNav, Stepper, Menu, BottomNav, Link, Icon } = DS();
  const [tab, setTab] = React.useState('cur'), [page, setPage] = React.useState(2), [nav, setNav] = React.useState('tests'), [bn, setBn] = React.useState('tests');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Demo name="Breadcrumb and Tabs" note="Underline tabs for page sections, pill tabs for views inside a card. Counts tell the learner what is behind a tab before they click.">
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <Breadcrumb items={[{ label: 'Certifications', href: '#' }, { label: 'AWS', href: '#' }, { label: 'Solutions Architect – Associate' }]} />
          <Tabs items={[{ value: 'ov', label: 'Overview' }, { value: 'cur', label: 'Curriculum', count: 42 }, { value: 'rev', label: 'Reviews', count: 1840 }]} value={tab} onChange={setTab} />
          <Tabs variant="pill" items={[{ value: 'all', label: 'All' }, { value: 'prog', label: 'In progress' }, { value: 'done', label: 'Completed' }]} value="prog" onChange={() => { }} style={{ alignSelf: 'flex-start' }} />
        </div>
      </Demo>
      <Demo name="Stepper and Pagination" note="Stepper for a flow with a known end; done steps go green, the current step takes the gradient.">
        <Stepper style={{ width: '100%', maxWidth: '640px' }} steps={[{ label: 'Choose exam' }, { label: 'Assess level' }, { label: 'Build plan' }, { label: 'Start studying' }]} active={1} />
        <Pagination page={page} pageCount={5} onChange={setPage} />
      </Demo>
      <Demo name="SidebarNav, Menu, BottomNav" note="Destructive menu items go last, after a divider. Bottom nav is 3–5 destinations only, rows never under 56px.">
        <SidebarNav style={{ width: '220px' }} value={nav} onChange={setNav} items={[
          { value: 'home', label: 'Dashboard', icon: <Icon name="layout-grid" size={18} /> },
          { value: 'tests', label: 'Practice Tests', icon: <Icon name="clipboard-check" size={18} /> },
          { value: 'labs', label: 'Hands-On Labs', icon: <Icon name="flask-conical" size={18} />, badge: 3 }]} />
        <Menu width={240} items={[
          { label: 'Account settings', icon: <Icon name="user" size={17} /> },
          { label: 'Billing', icon: <Icon name="credit-card" size={17} />, shortcut: '⌘B' },
          { divider: true },
          { label: 'Sign out', icon: <Icon name="log-out" size={17} />, tone: 'danger' }]} />
        <div style={{ flex: 1, minWidth: '260px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <BottomNav value={bn} onChange={setBn} style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }} items={[
            { value: 'home', label: 'Home', icon: <Icon name="home" size={20} /> },
            { value: 'tests', label: 'Tests', icon: <Icon name="clipboard-check" size={20} /> },
            { value: 'labs', label: 'Labs', icon: <Icon name="flask-conical" size={20} />, badge: 3 },
            { value: 'me', label: 'Profile', icon: <Icon name="user" size={20} /> }]} />
          <div style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>Read the <Link href="#" underline="always">AWS exam guide</Link> or the <Link href="#" external>blueprint PDF</Link>.</div>
        </div>
      </Demo>
    </div>
  );
}

function DataGroup() {
  const { Table, List, Divider, Tooltip, IconButton, Paper, Accordion, Badge, Icon } = DS();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Demo name="Table" note="Codes, scores and durations go mono so digits align down the column — that is the difference between a table you read and one you parse.">
        <Table style={{ width: '100%' }}
          columns={[{ key: 'exam', label: 'Exam' }, { key: 'code', label: 'Code', mono: true }, { key: 'score', label: 'Score', align: 'right', mono: true }, { key: 'result', label: 'Result', align: 'right' }]}
          rows={[
            { exam: 'Solutions Architect – Associate', code: 'SAA-C03', score: '792', result: <Badge tone="success">Passed</Badge> },
            { exam: 'Developer – Associate', code: 'DVA-C02', score: '684', result: <Badge tone="danger">Failed</Badge> },
            { exam: 'Terraform Associate', code: 'TA-003', score: '810', result: <Badge tone="success">Passed</Badge> }]} />
      </Demo>
      <Demo name="List, Divider, Tooltip" note="List for generic rows; LessonRow for curriculum, where done, current and not-yet must read at a glance.">
        <List style={{ flex: 1, minWidth: '320px' }} interactive items={[
          { title: 'Certificate of completion', description: 'PDF · 240 KB', leading: <Icon name="award" size={18} />, trailing: 'Download' },
          { title: 'Attempt 3 report', description: 'Submitted 7 Aug 2026', leading: <Icon name="file-text" size={18} />, trailing: 'View' }]} />
        <div style={{ flex: 1, minWidth: '260px' }}>
          <Divider label="or" />
          <Row gap="12px">
            <Tooltip label="Flag for review"><IconButton variant="secondary" label="Flag"><Icon name="flag" size={18} /></IconButton></Tooltip>
            <Tooltip label="Bookmark" placement="bottom"><IconButton variant="secondary" label="Bookmark"><Icon name="bookmark" size={18} /></IconButton></Tooltip>
            <Tooltip label="Download report" placement="right"><IconButton variant="secondary" label="Download"><Icon name="download" size={18} /></IconButton></Tooltip>
          </Row>
        </div>
      </Demo>
      <Demo name="Paper and Accordion" note="Card represents one content object. Paper is a surface — a panel, a well, a sheet.">
        <Paper elevation={1} padding="18px" style={{ flex: 1, minWidth: '180px' }}><b style={{ fontFamily: 'var(--font-display)' }}>Default</b><div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>elevation 1</div></Paper>
        <Paper tone="subtle" elevation={0} padding="18px" style={{ flex: 1, minWidth: '180px' }}><b style={{ fontFamily: 'var(--font-display)' }}>Subtle</b><div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>section well</div></Paper>
        <Paper tone="brand" elevation={0} padding="18px" style={{ flex: 1, minWidth: '180px' }}><b style={{ fontFamily: 'var(--font-display)', color: 'var(--orange-800)' }}>Exam in 26 days</b><div style={{ font: 'var(--type-body-sm)', color: 'var(--orange-700)' }}>38% through your plan</div></Paper>
        <Paper tone="inverse" elevation={3} padding="18px" style={{ flex: 1, minWidth: '180px' }}><b style={{ fontFamily: 'var(--font-display)', color: '#fff' }}>Inverse</b><div style={{ font: 'var(--type-body-sm)', color: 'var(--ink-300)' }}>on ink-950</div></Paper>
        <Accordion style={{ width: '100%' }} items={[
          { title: 'Domain 1: Design Resilient Architectures', meta: '12 lessons · 26%', content: 'Multi-AZ patterns, decoupling with SQS and EventBridge, failover and recovery objectives.' },
          { title: 'Domain 2: Design High-Performing Architectures', meta: '10 lessons · 24%', content: 'Caching, read replicas, and choosing the right storage class for an access pattern.' },
          { title: 'Domain 3: Design Secure Applications', meta: '11 lessons · 30%', content: 'Identity, encryption at rest and in transit, and network isolation.' }]} />
      </Demo>
    </div>
  );
}

function LearningGroup() {
  const { CourseCard, StatTile, LessonRow, QuestionCard, Icon } = DS();
  const [sel, setSel] = React.useState(1), [flag, setFlag] = React.useState(true);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Demo name="CourseCard" note="The catalogue tile — one per course, practice test, hands-on lab or learning path. Pass progress for enrolled contexts.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '18px', width: '100%' }}>
          <CourseCard provider="AWS" kind="Practice Test" title="AWS Certified Solutions Architect – Associate (SAA-C03)" level="Associate" questions={780} rating={4.6} learners="128,400" price="$19.95" badge="Bestseller" />
          <CourseCard provider="Microsoft Azure" kind="Video Course" title="Azure Administrator Associate (AZ-104)" level="Associate" hours="21h" rating={4.5} learners="64,200" progress={38} thumbColor="linear-gradient(135deg,#0f9d8f,#2563eb)" />
          <CourseCard provider="Kubernetes" kind="Hands-On Lab" title="CKA: Cluster Troubleshooting Sandbox" level="Professional" hours="6 labs" rating={4.8} price="$29.95" thumbColor="linear-gradient(135deg,#37342e,#6a655c)" />
        </div>
      </Demo>
      <Demo name="StatTile and LessonRow" note="A stat tile makes one number the hero. A lesson row shows done, current and not-yet at a glance.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', width: '100%' }}>
          <StatTile value="82%" label="Average mock score" delta="+6" tone="brand" icon={<Icon name="trending-up" size={20} />} />
          <StatTile value="14" label="Tests completed" icon={<Icon name="clipboard-check" size={20} />} />
          <StatTile value="26d" label="Until exam day" icon={<Icon name="calendar" size={20} />} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <LessonRow index={3} title="Designing resilient VPCs" meta="Video" duration="12:40" state="done" />
          <LessonRow index={4} title="Multi-AZ failover patterns" meta="Video" duration="09:12" state="current" />
          <LessonRow index={5} title="Domain quiz: Resilience" meta="20 questions" duration="25:00" />
        </div>
      </Demo>
      <Demo name="QuestionCard" note="The practice-test surface — number, domain tag, prompt, boxed options and flag-for-review. Try selecting an answer.">
        <QuestionCard style={{ width: '100%' }} number={12} total={65} domain="Design Resilient Architectures"
          prompt="An application must decouple order intake from fulfilment and guarantee exactly-once processing of each order. Which service should the architect choose?"
          options={['Amazon SNS standard topic', 'Amazon SQS FIFO queue', 'Amazon Kinesis Data Firehose', 'Amazon MQ with a topic exchange']}
          selected={sel} onSelect={setSel} flagged={flag} onFlag={() => setFlag(!flag)} />
      </Demo>
    </div>
  );
}

const GROUPS = [
  { value: 'core', label: 'Core', Comp: CoreGroup },
  { value: 'forms', label: 'Forms', Comp: FormsGroup },
  { value: 'feedback', label: 'Feedback', Comp: FeedbackGroup },
  { value: 'nav', label: 'Navigation', Comp: NavGroup },
  { value: 'data', label: 'Data & surfaces', Comp: DataGroup },
  { value: 'learning', label: 'Learning', Comp: LearningGroup },
];

function ComponentsSection() {
  const { Tabs } = DS();
  const [g, setG] = React.useState('core');
  const active = GROUPS.find(x => x.value === g) || GROUPS[0];
  const Body = active.Comp;
  return (
    <Section id="components" eyebrow="Library" title="49 components" lede="Every component below is live — click, hover, type. Grouped by concern, each ships with a props contract and a usage note.">
      <div style={{ position: 'sticky', top: '72px', zIndex: 5, background: 'var(--white)', paddingBottom: '10px', marginBottom: '18px' }}>
        {Tabs && <Tabs items={GROUPS.map(x => ({ value: x.value, label: x.label }))} value={g} onChange={setG} />}
      </div>
      <Body />
    </Section>
  );
}

Object.assign(window, { ComponentsSection, Demo });
