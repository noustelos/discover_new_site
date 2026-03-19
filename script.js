const panels = document.querySelectorAll('.panel');

window.addEventListener('load', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.add('active');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.6 });

panels.forEach((panel) => {
  observer.observe(panel);
});
