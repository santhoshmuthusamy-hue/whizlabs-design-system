const WL_COURSES=[
 {provider:'AWS',kind:'Practice Test',title:'AWS Certified Solutions Architect – Associate (SAA-C03)',level:'Associate',questions:780,rating:4.6,learners:'128,400',price:'$19.95',badge:'Bestseller'},
 {provider:'Microsoft Azure',kind:'Video Course',title:'Azure Administrator Associate (AZ-104)',level:'Associate',hours:'21h',rating:4.5,learners:'64,200',price:'$24.95',thumbColor:'linear-gradient(135deg,#0f9d8f,#2563eb)'},
 {provider:'Kubernetes',kind:'Hands-On Lab',title:'CKA: Cluster Troubleshooting Sandbox',level:'Professional',hours:'6 labs',rating:4.8,learners:'22,900',price:'$29.95',thumbColor:'linear-gradient(135deg,#131b2c,#33415c)'},
 {provider:'Google Cloud',kind:'Practice Test',title:'Professional Cloud Architect',level:'Professional',questions:540,rating:4.7,learners:'41,300',price:'$19.95'},
 {provider:'AWS',kind:'Learning Path',title:'AWS DevOps Engineer – Professional Path',level:'Professional',hours:'38h',rating:4.6,learners:'18,700',price:'$59.95',badge:'New',thumbColor:'linear-gradient(135deg,var(--brand-amber),var(--brand-red))'},
 {provider:'Terraform',kind:'Video Course',title:'HashiCorp Certified: Terraform Associate',level:'Associate',hours:'12h',rating:4.7,learners:'55,100',price:'$19.95',thumbColor:'linear-gradient(135deg,#33415c,#0f9d8f)'}
];
function CatalogGrid({onOpen,limit}){
  const { CourseCard } = window.WhizlabsDesignSystem_c8ccaf;
  return <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
    {WL_COURSES.slice(0,limit||WL_COURSES.length).map((c,i)=><CourseCard key={i} {...c} onClick={()=>onOpen&&onOpen(c)}/>)}
  </div>;
}

Object.assign(window,{ CatalogGrid, WL_COURSES });
