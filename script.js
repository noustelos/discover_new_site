const panels = document.querySelectorAll('.panel');

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
