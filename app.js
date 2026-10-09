(() => {
  const media = document.querySelector('#hero-video');
  const button = document.querySelector('#motion-toggle');
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const layers = [...document.querySelectorAll('[data-depth]')];
  let paused = preference.matches;
  let current = scrollY, target = scrollY, frame = 0;
  const position = () => {
    current += (target - current) * 0.12;
    const updates = layers.map(el => {
      const section = el.closest('section');
      const relative = current - section.offsetTop;
      const bounds = section.getBoundingClientRect();
      if (bounds.bottom > -100 && bounds.top < innerHeight + 100) {
        const distance = Math.max(-140, Math.min(140, relative * Number(el.dataset.depth)));
        return [el, `translate3d(0,${distance.toFixed(2)}px,0)`];
      }
    });
    updates.forEach(update => { if(update) update[0].style.transform = update[1]; });
    if (Math.abs(current-target) > .1) frame = requestAnimationFrame(position);
    else frame = 0;
  };
  const schedule = () => { target = scrollY; if (!paused && !frame) frame = requestAnimationFrame(position); };
  const applyMotion = () => {
    document.body.classList.toggle('motion-paused', paused);
    button.setAttribute('aria-pressed', String(paused));
    button.setAttribute('aria-label', paused ? 'Play motion' : 'Pause motion');
    button.innerHTML = paused ? 'Play motion <span>▷</span>' : 'Pause motion <span>Ⅱ</span>';
    if (paused) { media.pause(); cancelAnimationFrame(frame); frame = 0; layers.forEach(el => el.style.removeProperty('transform')); }
    else { if (!media.src) { media.src = media.dataset.src; media.load(); } media.play().catch(() => {}); schedule(); }
  };
  button.addEventListener('click', () => { paused = !paused; applyMotion(); });
  preference.addEventListener('change', () => { paused = preference.matches; applyMotion(); });
  addEventListener('scroll', schedule, {passive:true});
  addEventListener('resize', schedule, {passive:true});
  document.addEventListener('visibilitychange', () => { if(document.hidden) media.pause(); else if(!paused) media.play().catch(()=>{}); });
  document.querySelector('#year').textContent = new Date().getFullYear();
  applyMotion();
})();
