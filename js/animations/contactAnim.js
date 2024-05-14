const timeline = gsap.timeline();
timeline
.fromTo('.headers', { opacity: 0, x: -100 }, { opacity: 1, x: 0, stagger: 0.5 })
.fromTo('.txt', { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 0.1 });