document.querySelectorAll('.home-showcase').forEach(gallery => {
 const track = gallery.querySelector('.snapshot-track');
 const slides = [...track.children];
 const dots = [...gallery.querySelectorAll('[data-slide]')];
 const counter = gallery.querySelector('.snapshot-counter');
 const video = gallery.querySelector('video');
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
 let index = 0;
 let frame;
 const go = target => {track.scrollTo({left:((target + slides.length) % slides.length) * track.clientWidth,behavior:reduced.matches?'instant':'smooth'});};
 gallery.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click',()=>go(index + Number(button.dataset.step))));
 dots.forEach((button,i)=>button.addEventListener('click',()=>go(i)));
 track.addEventListener('keydown',event=>{if(event.target!==track)return;if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();go(index+(event.key==='ArrowRight'?1:-1));}});
 track.addEventListener('scroll',()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{index=Math.round(track.scrollLeft/track.clientWidth);counter.textContent=`${index+1} / ${slides.length}`;dots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===index)));if(index!==0)video.pause();});},{passive:true});
 if ('IntersectionObserver' in window) new IntersectionObserver(entries => {entries.forEach(entry => {
  if (entry.isIntersecting && index===0 && !reduced.matches && !document.hidden) {video.muted=true;video.play().catch(()=>{});}
  else video.pause();
 });},{threshold:0.6}).observe(video);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();});
});
