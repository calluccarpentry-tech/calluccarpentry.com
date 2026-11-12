document.getElementById('yr').textContent = new Date().getFullYear();
const header = document.getElementById('header'), bar = document.getElementById('mobileBar');
const onScroll = () => { const y = window.scrollY; header.classList.toggle('scrolled', y > 40); bar.classList.toggle('show', y > window.innerHeight * 0.7); };
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
const nav = document.getElementById('nav'), menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', open); header.classList.add('scrolled'); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); }));
const v = document.getElementById('heroVideo'); if (v && matchMedia('(prefers-reduced-motion: reduce)').matches) { v.removeAttribute('autoplay'); v.pause(); }
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.querySelectorAll('.gtile img').forEach(img => img.addEventListener('click', () => {
  const box = document.createElement('div'); box.className = 'lightbox';
  const big = document.createElement('img'); big.src = img.src; big.alt = img.alt; box.appendChild(big);
  box.addEventListener('click', () => box.remove()); document.body.appendChild(box);
}));
