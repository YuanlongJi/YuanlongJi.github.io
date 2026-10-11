document.querySelectorAll('.home-showcase video').forEach(video => {
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
 if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if (entry.isIntersecting && !reduced.matches && !document.hidden) {video.muted = true; video.play().catch(() => {});}
   else video.pause();
  });
 }, {threshold:0.6}).observe(video);
 document.addEventListener('visibilitychange', () => {if(document.hidden) video.pause();});
});
