/* SCRIPT.JS: animations, video list, dark/light mode. Edit your videos in WORKS below. */
// ===== ✏️ EDIT HERE: rename the title and desc of each animation =====
const WORKS=[
 {title:"Animation 1",desc:"2D animation",id:"1SgsiLILx0V_bKN2FW0_2uagMDXjDAyW2"},
 {title:"Animation 2",desc:"2D animation",id:"1-MrChaLwdNyPLjlQLV94vHOX5zKmc-R8"},
 {title:"Animation 3",desc:"3D animation",id:"1-hh0upKaC5C38gCdmi6UV9RrM_MYWJ_F"},
 {title:"Animation 4",desc:"3D animation",id:"1-_8le4wab33gKt2WUc_L8IQ6T8wjkt6t"},
 {title:"Animation 5",desc:"3D animation",id:"1-QH2QKUfwyxE9XV-1SRpTDgE_SAosddJ"},
 {title:"Animation 6",desc:"3D animation",id:"101SiRCEgJVPh2_GT3rl9tCEKw8VF9ElL"},
 {title:"Animation 7",desc:"2D animation",id:"1-5ADOFR0hO4zhBuJXK0erCxBa_dRqmF-"},
 {title:"Animation 8",desc:"2D animation",id:"1-An5fL2EoEdWWZ2nL7jzMhUfjh29lybu"}
];
const gal=document.getElementById('gallery');
WORKS.forEach(wk=>{
  const d=document.createElement('div');d.className='card';
  d.innerHTML='<div class="thumb">🎬<img loading="lazy" alt=""></div><h3></h3><small></small>';
  const im=d.querySelector('img');
  im.onerror=()=>im.remove();
  im.src='https://drive.google.com/thumbnail?id='+wk.id+'&sz=w640';
  im.alt=wk.title+' thumbnail';
  d.querySelector('h3').textContent=wk.title;
  d.querySelector('small').textContent=wk.desc;
  d.querySelector('.thumb').onclick=()=>openM(wk);
  gal.appendChild(d);
});
function openM(wk){
  document.getElementById('mtitle').textContent=wk.title;
  document.getElementById('player').src='https://drive.google.com/file/d/'+wk.id+'/preview';
  document.getElementById('modal').classList.add('open');
}
function closeM(){
  document.getElementById('modal').classList.remove('open');
  document.getElementById('player').src='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});

// dark / light mode
const root=document.documentElement,tb=document.getElementById('theme');
function setTheme(t){root.dataset.theme=t;tb.textContent=t==='dark'?'☀️ Light':'🌙 Dark';try{localStorage.setItem('theme',t)}catch(e){}}
try{const s=localStorage.getItem('theme');if(s)setTheme(s)}catch(e){}
tb.onclick=()=>setTheme(root.dataset.theme==='dark'?'light':'dark');

// typing effect
// ✏️ EDIT HERE: the typing words in the home page
const words=["2D Animator","Traditional 2D Animator","3D Animator","Storyboard Artist"];
let w=0,c=0,del=false;const el=document.getElementById('typed');
(function type(){
  const word=words[w];el.textContent=word.substring(0,c);
  if(!del&&c<word.length){c++;setTimeout(type,90)}
  else if(!del){del=true;setTimeout(type,1300)}
  else if(c>0){c--;setTimeout(type,45)}
  else{del=false;w=(w+1)%words.length;setTimeout(type,300)}
})();

// scroll reveal + active nav link
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(r=>io.observe(r));
const links=[...document.querySelectorAll('nav ul a')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id))}}),{threshold:.5});
document.querySelectorAll('section').forEach(s=>so.observe(s));

// cursor glow
const g=document.getElementById('glow');
document.addEventListener('mousemove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});

// ===== ✏️ EDIT HERE: traditional hand-drawn pictures =====
// Each picture is a Google Drive file ID. To give a drawing its own title, use: {id:"FILE_ID",title:"My Title"}
const DRAWINGS=[
  "1KKuNMD6YZ_OLs2hKDxhX_H2PQem6Q7zw",
  "12E6t8kADb5E0I3oFJWcq7-fO-4Sgt8FK",
  "1D2W8A18ONhJUt_NufmFTHyZIldrkjR4X",
  "1491QoVjMm-gJUcWGtuq3Vj1NtXKdGs0F",
  "1ISXH38Y9zHD-bHVjYOn0P8gaSSTLSGIz",
  "16CaxrCZxTXZIOdoSjTWIpPLEc7-Rvm7t",
  "1BOnryTMOSXwM1mcmZroWVVFtZulK3hru",
  "14rjG1uU6xxXbLTIJEFWcqRN936QUN7zc",
  "1J7Q_w7EPausFOOWDao2fhvDM9tPHPxTh",
  "1y69qNtdstjSiwVABEL-e14i3BhDGbTcN",
  "1UaRcU92FavG3SCJ4Wg83Z_XxolwI145x",
  "1VEXJ6wYQl75ga5CU4cthyG_8J1e2tBBd",
  "1Zh1W_34BAScLlFwuLT4NZwvpW2f9SLhy",
  "1wKCSdddSfjXnAEKfmdUq_4euqEyzZpJR",
  "1T5Kri1pzYWmWD31e5IANAj-CVt3oy_rH",
  "1DI-aYT5MuH1PTUmDg_OTyVIxgpIZqFC",
  "1GgbUGS6WcDx9WkewlRjleyoAcxTbJQXu",
  "1zGPCJA17d1F5bU-vcJtjUnxdMGci63hH",
  "1EuI4LYCeik7yoBs_JpyhZf6QXUOpHPET",
  "1YlVRoyLI8IoHmPppJ00CpSsOPmguALiT",
  "1FYGGMD-j_b0uxSqUJuItzSK8qbdWu8Vp",
  "1jwgsA5ZaPCEx5uzn6cO5BRcb556kCcFf",
  "1NCZ7Vmp_No5aZwQHvf44tFhTOXJAZ9sd",
  "10XzO5QCYsCkwy3WqWOaSrtsi8HqS8TIp",
  "1Shqbm2_1neHs1HSNljUFtF0djqVZ31K9",
  "1-Xd69JSphAxComdTkvlIftVIzgmQ6YnT",
  "1xurAV0E7WnIRkAx2yvTmIcocZddtNLnc",
  "16KUPZ8gQiTgpZlVY33jWv1fVfaluiFUU",
  "1hT5x0Nb6mYePa5yHOeBkxWghF6nMhKMH",
  "157KBC5IrcflMhdwr2HuUe5keK4ryflkI",
  "1bG8G82BBvKCj05PYzFpaZm0nxPxeYopt",
  "1VheewJWfft5gZxOR3IRnXcB9iKnVMxrf",
  "1jh7wZcl6ye0nUrdBTRnZgl9xPfG_eDrr",
  "1hAOjJkl4uvWEU1CV5I7-uGWw4ltEz58p",
  "1iP4lzq7MsdCyeFT_lk78XIzdvw2BidrU",
  "1I0E5IHoEry7LbKkd_QKVVJRTwwOoqno8",
  "1HbXeOig6TmeRYtDAy1M-gwXLQmien73x",
  "1kbw_XBtKQa3W0jnupXukoEnACQhzqpE_",
  "1gYwrHLjPgv223RRKmVrgmdaMdSIamf3k"
].map((d,i)=>typeof d==='string'?{id:d,title:'Hand-Drawn Artwork '+(i+1)}:d);
const dgrid=document.getElementById('drawgrid'),moreBtn=document.getElementById('moreBtn');
let shown=0;const STEP=12;
function showMore(){
  DRAWINGS.slice(shown,shown+STEP).forEach((d,k)=>{
    const i=shown+k,f=document.createElement('div');f.className='dcard';
    f.style.animationDelay=(k*60)+'ms';
    f.innerHTML='<img loading="lazy" alt=""><span></span>';
    const im=f.querySelector('img');
    im.alt=d.title;
    im.onerror=()=>f.remove();
    im.src='https://drive.google.com/thumbnail?id='+d.id+'&sz=w600';
    f.querySelector('span').textContent=d.title;
    f.onclick=()=>openLB(i);
    dgrid.appendChild(f);
  });
  shown=Math.min(shown+STEP,DRAWINGS.length);
  if(shown>=DRAWINGS.length)moreBtn.parentElement.style.display='none';
}
moreBtn.onclick=showMore;showMore();
let cur=0;const lb=document.getElementById('lb'),lbimg=document.getElementById('lbimg'),lbcap=document.getElementById('lbcap');
function openLB(i){
  cur=(i+DRAWINGS.length)%DRAWINGS.length;
  lbimg.src='https://drive.google.com/thumbnail?id='+DRAWINGS[cur].id+'&sz=w1600';
  lbimg.alt=DRAWINGS[cur].title;
  lbcap.textContent=DRAWINGS[cur].title+'  •  '+(cur+1)+' / '+DRAWINGS.length;
  lb.classList.add('open');
}
function stepLB(n){openLB(cur+n)}
function closeLB(){lb.classList.remove('open');lbimg.src=''}
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')closeLB();
  if(e.key==='ArrowRight')stepLB(1);
  if(e.key==='ArrowLeft')stepLB(-1);
});
let tx=0;
lb.addEventListener('touchstart',e=>{tx=e.touches[0].clientX},{passive:true});
lb.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>50)stepLB(dx<0?1:-1)});
