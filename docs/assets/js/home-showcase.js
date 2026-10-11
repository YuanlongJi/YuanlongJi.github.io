document.querySelectorAll('.home-showcase').forEach(gallery => {
  const track = gallery.querySelector('.snapshot-track');
  const slides = [...track.children];
  const dots = [...gallery.querySelectorAll('[data-slide]')];
  const counter = gallery.querySelector('.snapshot-counter');
  const videos = [...gallery.querySelectorAll('video')];
  const visibleVideos = new Set();
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let frame;
  let trackWidth = track.clientWidth;

  const alignAfterResize = () => {
    if (trackWidth === track.clientWidth) return false;
    trackWidth = track.clientWidth;
    track.scrollTo({left: index * trackWidth, behavior: 'instant'});
    return true;
  };
  if ('ResizeObserver' in window) new ResizeObserver(alignAfterResize).observe(track);

  const syncPlayback = () => {
    videos.forEach(video => {
      const active = slides[index].contains(video);
      if (active && visibleVideos.has(video) && !reduced.matches && !document.hidden) {
        video.muted = true;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  };
  const go = target => {
    track.scrollTo({
      left: ((target + slides.length) % slides.length) * track.clientWidth,
      behavior: reduced.matches ? 'instant' : 'smooth'
    });
  };
  gallery.querySelectorAll('[data-step]').forEach(button => {
    button.addEventListener('click', () => go(index + Number(button.dataset.step)));
  });
  dots.forEach((button, i) => button.addEventListener('click', () => go(i)));
  track.addEventListener('keydown', event => {
    if (event.target !== track) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      go(index + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      if (alignAfterResize()) return;
      const next = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
      if (next === index) return;
      index = next;
      counter.textContent = `${index + 1} / ${slides.length}`;
      dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === index)));
      syncPlayback();
    });
  }, {passive: true});

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) visibleVideos.add(entry.target);
        else visibleVideos.delete(entry.target);
      });
      syncPlayback();
    }, {threshold: 0.6});
    videos.forEach(video => observer.observe(video));
  }
  document.addEventListener('visibilitychange', syncPlayback);
  reduced.addEventListener('change', syncPlayback);
});
