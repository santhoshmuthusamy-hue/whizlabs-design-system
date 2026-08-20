function ProofBand(){
  const { StatTile, Icon } = window.WhizlabsDesignSystem_c8ccaf;
  const stats=[['3M+','Learners certified',<Icon name="users" size={20}/>],['500+','Exams covered',<Icon name="clipboard-check" size={20}/>],['92%','First-attempt pass rate',<Icon name="trophy" size={20}/>],['4.6','Average course rating',<Icon name="star" size={20}/>]];
  return <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'40px var(--gutter)',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'16px'}}>
    {stats.map(([v,l,ic],i)=><StatTile key={i} value={v} label={l} icon={ic} tone={i===0?'brand':'neutral'}/>)}
  </div>;
}

Object.assign(window,{ ProofBand });
