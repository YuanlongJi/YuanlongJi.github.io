document.querySelectorAll('.home-showcase').forEach(gallery => {
 const track = gallery.querySelector('.showcase-track');
 const slides = [...track.children];
 const counter = gallery.querySelector('.showcase-count');
 const video = gallery.querySelector('video');
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
 let index = 0;
 const go = step => { const next = (index + step + slides.length) % slides.length; track.scrollTo({left:next * track.clientWidth,behavior:reduced.matches?'instant':'smooth'}); };
 gallery.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click',()=>go(Number(button.dataset.step))));
 track.addEventListener('keydown',event=>{if(event.target!==track)return;if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();go(event.key==='ArrowRight'?1:-1);}});
 track.addEventListener('scroll',()=>{index=Math.round(track.scrollLeft/track.clientWidth);counter.textContent=`${index+1} / ${slides.length}`;if(index!==0)video.pause();},{passive:true});
 if('IntersectionObserver' in window){new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting && index===0 && !reduced.matches){video.muted=true;video.play().catch(()=>{});}else video.pause();});},{threshold:0.6}).observe(video);}
 document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();});
});
