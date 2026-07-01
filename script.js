/* =========================================================
   ICON SPRITE
   ========================================================= */
const ICONS = {
  'sparkle':'<path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/><path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z"/>',
  'moon':'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  'sun':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  'search':'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/>',
  'heart':'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
  'shopping-bag':'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
  'calendar':'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  'arrow-right':'<path d="M5 12h14M13 6l6 6-6 6"/>',
  'sliders':'<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  'play':'<polygon points="6 3 20 12 6 21 6 3"/>',
  'chevron-left':'<path d="m15 18-6-6 6-6"/>',
  'chevron-right':'<path d="m9 18 6-6-6-6"/>',
  'x':'<path d="M18 6 6 18M6 6l12 12"/>',
  'star':'<polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2"/>',
  'check':'<path d="M20 6 9 17l-5-5"/>',
  'bluetooth':'<polygon points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/>',
  'hand':'<path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M6 14a2 2 0 0 0-4 0c0 5 3 9 8 9h1a7 7 0 0 0 7-7v-4a2 2 0 0 0-4 0"/>',
  'wind':'<path d="M9.6 4.6a2 2 0 1 1 2 3.4H2M12.6 19.4a2 2 0 1 0 2-3.4H2M17.7 8a2.5 2.5 0 1 1 2.5 4.3H2"/>',
  'cloud-sun':'<path d="M12 2v2M4.9 4.9l1.4 1.4M2 13h2M20 13h2M17.7 6.3l1.4-1.4"/><path d="M9.5 8.5A5 5 0 0 1 15 13"/><path d="M6 20a4 4 0 1 1 1.2-7.8A5 5 0 0 1 17 14a3 3 0 0 1-1 6H6Z"/>',
  'thermometer':'<path d="M14 4a2 2 0 0 0-4 0v10.5a4 4 0 1 0 4 0Z"/>',
  'mic':'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3"/>',
  'palette':'<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 22a10 10 0 1 1 8-16 3 3 0 0 1-3 4h-1a2 2 0 0 0-1 3.7 2 2 0 0 1-1 3.7A10 10 0 0 1 12 22Z"/>',
  'save':'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
  'shield-check':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  'droplet':'<path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z"/>',
  'zap':'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  'wrench':'<path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2Z"/>',
  'gem':'<path d="m6 3 6 3 6-3 3 6-9 12L3 9Z"/><path d="M3 9h18M12 3v18M9 3l3 6 3-6"/>',
  'award':'<circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/>',
  'expand':'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
  'map-pin':'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  'instagram':'<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
  'facebook':'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>',
  'pinterest':'<circle cx="12" cy="12" r="10"/><path d="M8 22 12 12M12 12a3 3 0 1 0-3-3M12 12a3 3 0 1 1 5.5 1.7c-.8 1.6-2.5 2.3-4 1.8"/>',
  'user':'<circle cx="12" cy="8" r="4"/><path d="M6 21v-1a6 6 0 0 1 12 0v1"/>',
  'package':'<path d="M16.5 9.4 7.5 4.21M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
  'truck':'<path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8Z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  'home':'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>',
  'clock':'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  'settings':'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>'
};
const defs = document.getElementById('iconDefs');
Object.entries(ICONS).forEach(([name, path])=>{
  const s = document.createElementNS('http://www.w3.org/2000/svg','symbol');
  s.setAttribute('id','i-'+name); s.setAttribute('viewBox','0 0 24 24'); s.setAttribute('fill','none');
  s.setAttribute('stroke','currentColor'); s.setAttribute('stroke-width','1.7');
  s.setAttribute('stroke-linecap','round'); s.setAttribute('stroke-linejoin','round');
  s.innerHTML = path; defs.appendChild(s);
});
try{ lucide.createIcons(); }catch(e){}

/* =========================================================
   TOAST
   ========================================================= */
function showToast(msg, icon='sparkle'){
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<svg><use href="#i-${icon}"/></svg><span>${msg}</span>`;
  wrap.appendChild(el);
  requestAnimationFrame(()=> el.classList.add('show'));
  setTimeout(()=>{ el.classList.remove('show'); setTimeout(()=> el.remove(), 500); }, 3400);
}

/* =========================================================
   LOADER — percentage counter
   ========================================================= */
let pct = 0;
const pctEl = document.getElementById('loaderPct');
const pctTimer = setInterval(()=>{
  pct += Math.floor(Math.random()*14)+6;
  if(pct >= 100){ pct = 100; clearInterval(pctTimer); }
  pctEl.textContent = pct + '%';
}, 140);
window.addEventListener('load', ()=>{
  setTimeout(()=>{
    document.getElementById('loader').classList.add('hide');
    document.getElementById('hero').classList.add('loaded');
  }, 700);
});

/* =========================================================
   THEME TOGGLE (default dark; safe storage fallback)
   ========================================================= */
let memTheme = 'dark';
function safeGet(key){ try{ return localStorage.getItem(key); }catch(e){ return memTheme; } }
function safeSet(key,val){ try{ localStorage.setItem(key,val); }catch(e){ memTheme = val; } }
const root = document.documentElement;
if(safeGet('lumiere-theme') === 'light'){ root.setAttribute('data-theme','light'); }
function toggleTheme(){
  const isLight = root.getAttribute('data-theme') === 'light';
  if(isLight){ root.removeAttribute('data-theme'); safeSet('lumiere-theme','dark'); }
  else{ root.setAttribute('data-theme','light'); safeSet('lumiere-theme','light'); }
  showToast(isLight ? 'Dark mode enabled' : 'Light mode enabled', isLight ? 'moon' : 'sun');
}
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

/* =========================================================
   NAVBAR SCROLL + SCROLLBAR
   ========================================================= */
const navbar = document.getElementById('navbar');
const scrollbar = document.getElementById('scrollbar');
window.addEventListener('scroll', ()=>{
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  const h = document.documentElement;
  const pctScroll = (h.scrollTop || document.body.scrollTop) / ((h.scrollHeight || document.body.scrollHeight) - h.clientHeight) * 100;
  scrollbar.style.width = pctScroll + '%';
}, {passive:true});

/* =========================================================
   MOBILE DRAWER
   ========================================================= */
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('mobileDrawer');
const overlay = document.getElementById('drawerOverlay');
function closeDrawer(){ hamburger.classList.remove('open'); hamburger.setAttribute('aria-expanded','false'); drawer.classList.remove('open'); overlay.classList.remove('open'); }
hamburger.addEventListener('click', ()=>{
  const open = drawer.classList.toggle('open');
  overlay.classList.toggle('open', open);
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});
overlay.addEventListener('click', closeDrawer);
drawer.querySelectorAll('a').forEach(a=> a.addEventListener('click', closeDrawer));

/* =========================================================
   CURSOR GLOW (pointer devices only)
   ========================================================= */
if(window.matchMedia('(pointer:fine)').matches){
  const glow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', (e)=>{
    glow.style.opacity = '1';
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
  });
  document.addEventListener('mouseleave', ()=> glow.style.opacity = '0');
}

/* =========================================================
   PARTICLES
   ========================================================= */
const particleWrap = document.getElementById('particles');
for(let i=0;i<18;i++){
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random()*100 + '%';
  p.style.bottom = (Math.random()*20) + '%';
  p.style.animationDuration = (7 + Math.random()*8) + 's';
  p.style.animationDelay = (Math.random()*8) + 's';
  particleWrap.appendChild(p);
}

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      if(entry.target.classList.contains('reveal-stagger')){
        Array.from(entry.target.children).forEach((child,i)=>{
          child.style.setProperty('--i', i);
          child.classList.add('reveal','in');
        });
      } else { entry.target.classList.add('in'); }
      io.unobserve(entry.target);
    }
  });
}, {threshold:0.12});
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el=> io.observe(el));
});

document.getElementById('watchVideoBtn').addEventListener('click', ()=> showToast('Film coming soon', 'play'));

/* =========================================================
   WISHLIST / CART / SEARCH / PROFILE
   ========================================================= */
let wishCount = 0, cartCount = 0;
const wishCountEl = document.getElementById('wishCount');
const cartCountEl = document.getElementById('cartCount');
function bumpWish(){ wishCount++; wishCountEl.textContent = wishCount; }
function bumpCart(){ cartCount++; cartCountEl.textContent = cartCount; }
['searchBtn','searchBtnM'].forEach(id=>{ const el=document.getElementById(id); if(el) el.addEventListener('click', ()=> showToast('Search coming soon', 'search')); });
['wishBtn','wishBtnM'].forEach(id=>{ const el=document.getElementById(id); if(el) el.addEventListener('click', ()=> showToast(`${wishCount} item${wishCount===1?'':'s'} saved`, 'heart')); });
document.getElementById('cartBtn').addEventListener('click', ()=> showToast(`${cartCount} item${cartCount===1?'':'s'} in cart`, 'shopping-bag'));
const profileBtnM = document.getElementById('profileBtnM');
if(profileBtnM) profileBtnM.addEventListener('click', ()=> showToast('Sign in to view your profile', 'user'));

/* =========================================================
   DATA — CATEGORIES
   ========================================================= */
const CATEGORIES = [
  {icon:'droplet', name:'Bathroom'},
  {icon:'moon', name:'Bedroom'},
  {icon:'home', name:'Hotel'},
  {icon:'sparkle', name:'Salon'},
  {icon:'zap', name:'Smart'},
  {icon:'gem', name:'Round'},
  {icon:'shield-check', name:'Oval'},
  {icon:'package', name:'Rectangle'},
  {icon:'wrench', name:'Custom'},
  {icon:'settings', name:'Villa'}
];
document.getElementById('catGrid').innerHTML = CATEGORIES.map(c=>`
  <div class="cat-card">
    <span class="cat-icon"><svg><use href="#i-${c.icon}"/></svg></span>
    <h5>${c.name} Mirrors</h5>
  </div>
`).join('');

/* =========================================================
   DATA — PRODUCTS
   ========================================================= */
const PRODUCTS = [
  {name:'Aurelia Round', img:'https://th.bing.com/th/id/OIP.uFkvMo5AUoWdFe1OctshZAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', price:820, old:980, rating:'4.9', sizes:['24"','28"','32"'], offer:'-16%'},
  {name:'Monarch Arch', img:'https://tse1.mm.bing.net/th/id/OIP.OMY7HwdZHArKwaAPrZ8sDAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', price:1180, old:null, rating:'5.0', sizes:['30"×70"','36"×78"'], offer:'New'},
  {name:'Vesper Rectangle', img:'https://images.thdstatic.com/productImages/e28f9604-9245-40fc-8931-ecb045254e2d/svn/matte-black-kiotee-vanity-mirrors-ktl001b6040-64_1000.jpg', price:960, old:1150, rating:'4.8', sizes:['32"×40"','36"×48"'], offer:'-16%'},
  {name:'Halo Capsule', img:'https://customledmirror.com/cdn/shop/files/2_b5cd3d37-b4b1-4aca-9ef0-2ca49547c2e1_3200x.jpg?v=1719350036', price:1040, old:null, rating:'4.9', sizes:['28"×48"'], offer:'Bestseller'},
  {name:'Solstice Oval', img:'https://m.media-amazon.com/images/I/71CUh+Wr+zL._AC_SL1500_.jpg', price:890, old:1050, rating:'4.7', sizes:['26"×36"','30"×42"'], offer:'-15%'},
  {name:'Noir Smart Suite', img:'https://www.glazonoid.com/cdn/shop/files/bestsellers_main_page-1_ff5d9b81-4fa4-4320-abe0-8eb6db9ab029.webp?v=1766459680', price:1450, old:null, rating:'5.0', sizes:['36"×60"','40"×72"'], offer:'Smart'}
];
document.getElementById('productsGrid').innerHTML = PRODUCTS.map((p,i)=>`
  <article class="pd-card">
    <div class="pd-media">
      <img src="${p.img}" alt="${p.name} LED mirror" loading="lazy">
      <span class="pd-offer">${p.offer}</span>
      <button class="pd-wish" aria-label="Save ${p.name} to wishlist" data-i="${i}"><svg><use href="#i-heart"/></svg></button>
      <div class="pd-quick"><svg><use href="#i-expand"/></svg>Quick View</div>
    </div>
    <div class="pd-body">
      <h4>${p.name}</h4>
      <div class="pd-sizes">${p.sizes.map(s=>`<span>${s}</span>`).join('')}</div>
      <div class="pd-rating"><svg><use href="#i-star"/></svg>${p.rating} · Book Installation</div>
      <div class="pd-price-row">
        <span class="pd-price">${p.old?`<del>$${p.old}</del>`:''}$${p.price}</span>
        <button class="pd-add" aria-label="Add ${p.name} to cart" data-i="${i}"><svg><use href="#i-shopping-bag"/></svg></button>
      </div>
    </div>
  </article>
`).join('');
document.querySelectorAll('.pd-wish').forEach(btn=> btn.addEventListener('click', function(){
  this.classList.toggle('active');
  bumpWish();
  showToast(this.classList.contains('active') ? 'Added to wishlist' : 'Removed from wishlist', 'heart');
}));
document.querySelectorAll('.pd-add').forEach(btn=> btn.addEventListener('click', function(){
  bumpCart();
  showToast('Added to cart', 'shopping-bag');
}));

/* =========================================================
   SMART FEATURES
   ========================================================= */
const FEATURES = [
  {icon:'hand', name:'Touch Sensor', desc:'One tap to power the mirror on or off.', hud:{}},
  {icon:'wind', name:'Anti-Fog Defogger', desc:'Stays clear through the hottest shower.', hud:{}},
  {icon:'bluetooth', name:'Bluetooth Audio', desc:'Stream music straight from your phone.', hud:{}},
  {icon:'clock', name:'Clock Display', desc:'A quiet digital clock, always in view.', hud:{time:true}},
  {icon:'thermometer', name:'Temperature', desc:'Room temperature at a glance.', hud:{}},
  {icon:'cloud-sun', name:'Weather', desc:'Live local forecast on the glass.', hud:{weather:true}},
  {icon:'save', name:'Memory Function', desc:'Remembers your last brightness & tone.', hud:{}},
  {icon:'mic', name:'Voice Assistant', desc:'Hands-free control while you get ready.', hud:{}},
  {icon:'palette', name:'RGB Ambient Light', desc:'Millions of tones to match your mood.', hud:{rgb:true}}
];
const featureListEl = document.getElementById('featureList');
const mirrorDemo = document.getElementById('mirrorDemo');
featureListEl.innerHTML = FEATURES.map((f,i)=>`
  <div class="feat-item ${i===0?'active':''}" data-i="${i}" tabindex="0" role="button" aria-pressed="${i===0}">
    <span class="icon"><svg><use href="#i-${f.icon}"/></svg></span>
    <div><h5>${f.name}</h5><p>${f.desc}</p></div>
  </div>
`).join('');
function activateFeature(i){
  document.querySelectorAll('.feat-item').forEach(el=> el.classList.toggle('active', el.dataset.i == i));
  const f = FEATURES[i];
  if(f.hud.rgb){
    const hues = ['#D4AF37','#7ec8e3','#e07ba0','#8fd694'];
    mirrorDemo.style.setProperty('--mirror-ring', hues[Math.floor(Math.random()*hues.length)]);
  } else {
    mirrorDemo.style.setProperty('--mirror-ring', 'rgba(212,175,55,.55)');
  }
  showToast(f.name + ' activated', f.icon);
}
featureListEl.addEventListener('click', (e)=>{
  const item = e.target.closest('.feat-item');
  if(item) activateFeature(item.dataset.i);
});
featureListEl.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' || e.key === ' '){ const item = e.target.closest('.feat-item'); if(item){ e.preventDefault(); activateFeature(item.dataset.i); } }
});

/* Live clock in mirror HUD */
function updateHudClock(){
  const now = new Date();
  document.getElementById('hudTime').textContent = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
}
updateHudClock();
setInterval(updateHudClock, 30000);

/* Brightness slider */
const brightnessSlider = document.getElementById('brightnessSlider');
brightnessSlider.addEventListener('input', (e)=>{
  const val = e.target.value;
  mirrorDemo.style.filter = `brightness(${0.55 + (val/100)*0.7})`;
  e.target.style.background = `linear-gradient(90deg, var(--gold) ${val}%, var(--border) ${val}%)`;
});
brightnessSlider.dispatchEvent(new Event('input'));

/* =========================================================
   ROOM INSPIRATION — before/after slider
   ========================================================= */
const ROOMS = [
  {name:'Bathroom', before:'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop', after:'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop'},
  {name:'Bedroom', before:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop', after:'https://images.unsplash.com/photo-1616627988309-fe6cec5e0d15?q=80&w=1200&auto=format&fit=crop'},
  {name:'Hotel Suite', before:'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop', after:'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=1200&auto=format&fit=crop'},
  {name:'Spa', before:'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop', after:'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop'}
];
const roomTabsEl = document.getElementById('roomTabs');
const baBefore = document.getElementById('baBefore');
const baAfter = document.getElementById('baAfter');
roomTabsEl.innerHTML = ROOMS.map((r,i)=>`<button class="room-tab ${i===0?'active':''}" data-i="${i}">${r.name}</button>`).join('');
function setRoom(i){
  const r = ROOMS[i];
  baBefore.src = r.before; baBefore.alt = r.name + ' room before installing a Lumière LED mirror';
  baAfter.src = r.after; baAfter.alt = r.name + ' room after installing a Lumière LED mirror';
  document.querySelectorAll('.room-tab').forEach(t=> t.classList.toggle('active', t.dataset.i == i));
}
setRoom(0);
roomTabsEl.addEventListener('click', (e)=>{ const b = e.target.closest('.room-tab'); if(b) setRoom(b.dataset.i); });

const baWrap = document.getElementById('baWrap');
const baHandle = document.getElementById('baHandle');
let dragging = false;
function moveHandle(clientX){
  const rect = baWrap.getBoundingClientRect();
  let pctX = ((clientX - rect.left) / rect.width) * 100;
  pctX = Math.max(2, Math.min(98, pctX));
  baHandle.style.left = pctX + '%';
  baAfter.style.clipPath = `inset(0 0 0 ${pctX}%)`;
}
baHandle.addEventListener('pointerdown', (e)=>{ dragging = true; baHandle.setPointerCapture(e.pointerId); });
window.addEventListener('pointerup', ()=> dragging = false);
window.addEventListener('pointermove', (e)=>{ if(dragging) moveHandle(e.clientX); });
baWrap.addEventListener('click', (e)=>{ if(e.target === baHandle || baHandle.contains(e.target)) return; moveHandle(e.clientX); });

/* =========================================================
   CUSTOM MIRROR STUDIO
   ========================================================= */
const SHAPES = [
  {id:'rect', name:'Rectangle', price:0, svg:{tag:'rect', attrs:{x:24,y:34,width:152,height:132,rx:8}}},
  {id:'round', name:'Round', price:60, svg:{tag:'circle', attrs:{cx:100,cy:100,r:80}}},
  {id:'oval', name:'Oval', price:80, svg:{tag:'ellipse', attrs:{cx:100,cy:100,rx:70,ry:88}}},
  {id:'arch', name:'Arch', price:120, svg:{tag:'path', attrs:{d:'M24 190 V90 A76 76 0 0 1 176 90 V190 Z'}}},
  {id:'capsule', name:'Capsule', price:100, svg:{tag:'rect', attrs:{x:44,y:16,width:112,height:168,rx:56}}}
];
const SIZES = [
  {id:'s', name:'24"–28"', price:0},
  {id:'m', name:'30"–36"', price:140},
  {id:'l', name:'40"–48"', price:320}
];
const FRAMES = [
  {id:'gold', name:'Brushed Gold', color:'#D4AF37', price:0},
  {id:'black', name:'Matte Black', color:'#1c1c1c', price:0},
  {id:'wood', name:'Walnut Wood', color:'#7a5230', price:60},
  {id:'none', name:'Frameless', color:'#cfcfcf', price:-40}
];
const LIGHTS = [
  {id:'warm', name:'Warm White', color:'#f4c980', price:0},
  {id:'cool', name:'Cool White', color:'#dce8f7', price:0},
  {id:'rgb', name:'RGB Ambient', color:'linear-gradient(90deg,#f66,#6cf)', price:90}
];
const ADDONS = [
  {id:'bt', name:'Bluetooth Speaker', icon:'bluetooth', price:70},
  {id:'defog', name:'Anti-Fog Defogger', icon:'wind', price:45},
  {id:'clock', name:'Clock Display', icon:'clock', price:35},
  {id:'voice', name:'Voice Assistant', icon:'mic', price:110}
];

let studioState = { shape:'rect', size:'s', frame:'gold', light:'warm', addons:[] };

function renderStudioOptions(){
  document.getElementById('shapeOpts').innerHTML = SHAPES.map(s=>`
    <button class="opt-swatch ${studioState.shape===s.id?'active':''}" data-group="shape" data-id="${s.id}">${s.name}</button>
  `).join('');
  document.getElementById('sizeOpts').innerHTML = SIZES.map(s=>`
    <button class="opt-swatch ${studioState.size===s.id?'active':''}" data-group="size" data-id="${s.id}">${s.name}</button>
  `).join('');
  document.getElementById('frameOpts').innerHTML = FRAMES.map(f=>`
    <button class="opt-swatch ${studioState.frame===f.id?'active':''}" data-group="frame" data-id="${f.id}"><span class="dot" style="background:${f.color};"></span>${f.name}</button>
  `).join('');
  document.getElementById('lightOpts').innerHTML = LIGHTS.map(l=>`
    <button class="opt-swatch ${studioState.light===l.id?'active':''}" data-group="light" data-id="${l.id}"><span class="dot" style="background:${l.color};"></span>${l.name}</button>
  `).join('');
  document.getElementById('toggleOpts').innerHTML = ADDONS.map(a=>`
    <div class="opt-toggle" data-addon="${a.id}">
      <span><svg><use href="#i-${a.icon}"/></svg>${a.name} <span style="color:var(--text-soft); font-size:11px;">+$${a.price}</span></span>
      <span class="switch ${studioState.addons.includes(a.id)?'on':''}" data-addon-switch="${a.id}"></span>
    </div>
  `).join('');
}

function renderStudioPreview(){
  const shape = SHAPES.find(s=>s.id===studioState.shape);
  const frame = FRAMES.find(f=>f.id===studioState.frame);
  const light = LIGHTS.find(l=>l.id===studioState.light);

  ['shapeGlow','shapeGlass','shapeFrame'].forEach(elId=>{
    const old = document.getElementById(elId);
    const ns = 'http://www.w3.org/2000/svg';
    const el = document.createElementNS(ns, shape.svg.tag);
    el.setAttribute('id', elId);
    el.setAttribute('class', old.getAttribute('class'));
    Object.entries(shape.svg.attrs).forEach(([k,v])=> el.setAttribute(k,v));
    old.replaceWith(el);
  });
  const ringColor = light.id === 'rgb' ? '#D4AF37' : light.color;
  document.getElementById('studioSvg').style.setProperty('--mirror-frame', frame.id==='none' ? 'rgba(180,180,180,.4)' : frame.color);
  document.querySelector('.studio-preview').style.setProperty('--glow-color', ringColor);
}

function calcPrice(){
  let base = 480;
  base += SHAPES.find(s=>s.id===studioState.shape).price;
  base += SIZES.find(s=>s.id===studioState.size).price;
  base += FRAMES.find(f=>f.id===studioState.frame).price;
  base += LIGHTS.find(l=>l.id===studioState.light).price;
  studioState.addons.forEach(id=> base += ADDONS.find(a=>a.id===id).price);
  return base;
}
function renderStudioPrice(){
  const price = calcPrice();
  document.getElementById('studioPrice').textContent = '$' + price.toLocaleString();
  document.getElementById('studioCtaPrice').textContent = '$' + price.toLocaleString();
}

function renderStudio(){ renderStudioOptions(); renderStudioPreview(); renderStudioPrice(); }
renderStudio();

document.querySelector('.studio-options').addEventListener('click', (e)=>{
  const swatch = e.target.closest('.opt-swatch');
  if(swatch){
    const group = swatch.dataset.group, id = swatch.dataset.id;
    studioState[group] = id;
    renderStudio();
    return;
  }
  const sw = e.target.closest('[data-addon-switch]');
  if(sw){
    const id = sw.dataset.addonSwitch;
    const idx = studioState.addons.indexOf(id);
    if(idx > -1) studioState.addons.splice(idx,1); else studioState.addons.push(id);
    renderStudio();
  }
});

/* =========================================================
   WHY CHOOSE US — stats + cards
   ========================================================= */
const STATS = [
  {num:12000, suffix:'+', label:'Mirrors Installed'},
  {num:5, suffix:' Yr', label:'Warranty'},
  {num:98, suffix:'%', label:'Client Satisfaction'},
  {num:34, suffix:'', label:'Countries Shipped'}
];
document.getElementById('statGrid').innerHTML = STATS.map(s=>`
  <div class="stat-cell"><div class="num" data-target="${s.num}" data-suffix="${s.suffix}">0${s.suffix}</div><div class="lbl">${s.label}</div></div>
`).join('');

const WHY = [
  {icon:'gem', title:'Premium Glass', desc:'German-engineered anti-corrosion mirror glass.'},
  {icon:'zap', title:'Energy Efficient', desc:'Low-power LED with 50,000-hour lifespan.'},
  {icon:'shield-check', title:'5-Year Warranty', desc:'Comprehensive coverage on every mirror.'},
  {icon:'droplet', title:'Fully Waterproof', desc:'IP44-rated for wet bathroom environments.'},
  {icon:'wrench', title:'Easy Installation', desc:'Professional install in under 90 minutes.'},
  {icon:'sparkle', title:'Luxury Design', desc:'Handcrafted frames in gold, black, and wood.'},
  {icon:'award', title:'Certified Quality', desc:'CE, RoHS, and ETL certified components.'},
  {icon:'package', title:'Premium Packaging', desc:'Museum-grade crating for damage-free delivery.'}
];
document.getElementById('whyGrid').innerHTML = WHY.map(w=>`
  <div class="why-card"><span class="icon"><svg><use href="#i-${w.icon}"/></svg></span><h5>${w.title}</h5><p>${w.desc}</p></div>
`).join('');

/* Counter animation */
const statIO = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      document.querySelectorAll('.stat-cell .num').forEach(el=>{
        const target = parseInt(el.dataset.target,10);
        const suffix = el.dataset.suffix;
        let cur = 0;
        const step = Math.max(1, Math.round(target/60));
        const t = setInterval(()=>{
          cur += step;
          if(cur >= target){ cur = target; clearInterval(t); }
          el.textContent = cur.toLocaleString() + suffix;
        }, 24);
      });
      statIO.disconnect();
    }
  });
}, {threshold:0.4});
document.addEventListener('DOMContentLoaded', ()=>{
  const sg = document.getElementById('statGrid');
  if(sg) statIO.observe(sg);
});

/* =========================================================
   INSTALLATION TIMELINE
   ========================================================= */
const STEPS = [
  {icon:'package', title:'Choose Mirror', desc:'Browse collections or start from scratch.'},
  {icon:'sliders', title:'Customize', desc:'Shape, size, frame, and smart features.'},
  {icon:'shopping-bag', title:'Order', desc:'Secure checkout with design confirmation.'},
  {icon:'settings', title:'Manufacturing', desc:'Handcrafted in our atelier, 10–14 days.'},
  {icon:'truck', title:'Delivery', desc:'Museum-grade crating, tracked shipping.'},
  {icon:'wrench', title:'Installation', desc:'Certified technician, under 90 minutes.'},
  {icon:'sparkle', title:'Enjoy', desc:'Illuminate your space, every single day.'}
];
document.getElementById('timelineGrid').innerHTML = STEPS.map((s,i)=>`
  <div class="tl-step">
    <div class="tl-num">${String(i+1).padStart(2,'0')}</div>
    <div class="tl-body"><h5><svg style="width:13px;height:13px;vertical-align:-2px;margin-right:5px;color:var(--gold-warm);"><use href="#i-${s.icon}"/></svg>${s.title}</h5><p>${s.desc}</p></div>
  </div>
`).join('');

/* =========================================================
   GALLERY
   ========================================================= */
const GALLERY = [
  {img:'https://tse3.mm.bing.net/th/id/OIP.FHA3_3HnZYMG5dcLqiUYAwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3', h:420, cap:'Marble Bathroom, Milan'},
  {img:'https://tse1.mm.bing.net/th/id/OIP.cPD08VTiP2DDYZhJDabNZAHaFN?rs=1&pid=ImgDetMain&o=7&rm=3', h:560, cap:'Smart Suite, Dubai'},
  {img:'https://tse4.mm.bing.net/th/id/OIP.A2WpqdX0ruyoL9Y_KL1b_QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', h:460, cap:'Boutique Hotel, Paris'},
  {img:'https://tse1.mm.bing.net/th/id/OIP.L4GrXV3T8Bm27P0CelS-nAHaIO?w=1200&h=1333&rs=1&pid=ImgDetMain&o=7&rm=3', h:400, cap:'Master Bedroom, London'},
  {img:'https://tse1.mm.bing.net/th/id/OIP.-CTK4h0KosKDABxcM2tkGgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3', h:520, cap:'Villa Ensuite, Ibiza'},
  {img:'https://tse3.mm.bing.net/th/id/OIP.54Y5cqPSc698toKjSCMglgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3', h:460, cap:'Spa Retreat, Bali'},
  {img:'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=900&auto=format&fit=crop', h:400, cap:'Powder Room, NYC'},
  {img:'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=900&auto=format&fit=crop', h:540, cap:'Penthouse Suite, Tokyo'}
];
document.getElementById('galleryGrid').innerHTML = GALLERY.map((g,i)=>`
  <div class="g-item" data-index="${i}">
    <img src="${g.img}" alt="${g.cap}" loading="lazy" style="height:${g.h}px; object-fit:cover;">
    <div class="g-overlay"><span><svg><use href="#i-expand"/></svg>${g.cap}</span></div>
  </div>
`).join('');
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
let lbIndex = 0;
function openLightbox(i){
  lbIndex = i;
  lbImg.src = GALLERY[i].img.replace('w=900','w=1600');
  lbImg.alt = GALLERY[i].cap;
  lbCaption.textContent = GALLERY[i].cap;
  lightbox.classList.add('open');
}
document.querySelectorAll('.g-item').forEach(el=> el.addEventListener('click', ()=> openLightbox(parseInt(el.dataset.index))));
document.getElementById('lbClose').addEventListener('click', ()=> lightbox.classList.remove('open'));
lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) lightbox.classList.remove('open'); });
document.getElementById('lbPrev').addEventListener('click', ()=> openLightbox((lbIndex-1+GALLERY.length)%GALLERY.length));
document.getElementById('lbNext').addEventListener('click', ()=> openLightbox((lbIndex+1)%GALLERY.length));
document.addEventListener('keydown', (e)=>{
  if(!lightbox.classList.contains('open')) return;
  if(e.key==='Escape') lightbox.classList.remove('open');
  if(e.key==='ArrowLeft') openLightbox((lbIndex-1+GALLERY.length)%GALLERY.length);
  if(e.key==='ArrowRight') openLightbox((lbIndex+1)%GALLERY.length);
});

/* =========================================================
   REVIEWS
   ========================================================= */
const REVIEWS = [
  {name:'Isabelle Laurent', loc:'Paris, France', img:'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=200&auto=format&fit=crop', text:'The mirror transformed our entire bathroom. It feels like a hotel suite now.', prod:'Monarch Arch'},
  {name:'Marcus Webb', loc:'London, UK', img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', text:'Installation was seamless and the RGB lighting is exactly what I wanted.', prod:'Noir Smart Suite'},
  {name:'Sana Al Farsi', loc:'Dubai, UAE', img:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop', text:'Genuinely the most premium home upgrade I have made in years.', prod:'Aurelia Round'},
  {name:'Diego Fontana', loc:'Milan, Italy', img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop', text:'Custom studio made ordering effortless — exactly the shape I imagined.', prod:'Custom Capsule'},
  {name:'Priya Nair', loc:'Singapore', img:'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=200&auto=format&fit=crop', text:'The anti-fog feature alone was worth the investment. Flawless finish.', prod:'Vesper Rectangle'},
  {name:'Owen Clarke', loc:'Sydney, Australia', img:'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=200&auto=format&fit=crop', text:'Support team was excellent from consultation through installation.', prod:'Solstice Oval'}
];
document.getElementById('reviewsTrack').innerHTML = [...REVIEWS, ...REVIEWS].map(r=>`
  <div class="r-card">
    <div class="r-top"><img src="${r.img}" alt="${r.name}"><div><h5>${r.name} <svg><use href="#i-shield-check"/></svg></h5><span class="loc">${r.loc}</span></div></div>
    <div class="r-stars">${Array(5).fill('<svg><use href="#i-star"/></svg>').join('')}</div>
    <p>"${r.text}"</p>
    <div class="r-prod"><svg><use href="#i-sparkle"/></svg>${r.prod}</div>
  </div>
`).join('');

/* =========================================================
   BLOG
   ========================================================= */
const BLOG = [
  {cat:'Design', title:'Bathroom Lighting Trends for 2026', img:'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=700&auto=format&fit=crop', date:'Jun 18', read:'5 min'},
  {cat:'Guide', title:'How to Choose the Right Mirror Shape', img:'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=700&auto=format&fit=crop', date:'Jun 02', read:'6 min'},
  {cat:'Interior', title:'Warm vs Cool Light: A Designer\u2019s Take', img:'https://tse2.mm.bing.net/th/id/OIP.6QbYRf5Oqf_8H0keTUJ8zgHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3', date:'May 21', read:'4 min'}
];
document.getElementById('blogGrid').innerHTML = BLOG.map(b=>`
  <article class="b-card">
    <div class="b-media"><img src="${b.img}" alt="${b.title}" loading="lazy"></div>
    <div class="b-body">
      <span class="b-cat">${b.cat}</span>
      <h4>${b.title}</h4>
      <div class="b-meta"><span><svg><use href="#i-calendar"/></svg>${b.date}</span><span><svg><use href="#i-clock"/></svg>${b.read} read</span></div>
    </div>
  </article>
`).join('');

document.getElementById('newsletterForm').addEventListener('submit', (e)=>{
  showToast('You\u2019re on the list — welcome.', 'sparkle');
  e.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();