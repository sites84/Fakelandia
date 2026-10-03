const cases = [
  {id:'caso-exemplo',title:'Primeiro caso em preparação',category:'Investigação',summary:'A estrutura está pronta para receber as primeiras investigações completas do arquivo Fakelandia.',media:'CASO EM PREPARAÇÃO'}
];

const grid=document.querySelector('#casesGrid');
const empty=document.querySelector('#emptyState');
const count=document.querySelector('#resultCount');
const input=document.querySelector('#search');
const button=document.querySelector('#searchButton');

function render(list=cases){
  grid.innerHTML='';
  count.textContent=`${list.length} ${list.length===1?'caso':'casos'}`;
  empty.classList.toggle('hidden',list.length!==0);
  list.forEach(item=>{
    const card=document.createElement('article');
    card.className='case-card';
    card.innerHTML=`<div class="case-media">${item.media}</div><div class="case-body"><span class="badge">${item.category}</span><h3>${item.title}</h3><p>${item.summary}</p></div>`;
    grid.appendChild(card);
  });
}
function search(){
  const term=input.value.trim().toLowerCase();
  render(term?cases.filter(c=>`${c.title} ${c.category} ${c.summary}`.toLowerCase().includes(term)):cases);
}
button.addEventListener('click',search);
input.addEventListener('keydown',e=>{if(e.key==='Enter')search()});
document.querySelectorAll('[data-category]').forEach(btn=>btn.addEventListener('click',()=>{input.value=btn.dataset.category;search();document.querySelector('#casos').scrollIntoView({behavior:'smooth'})}));
render();
