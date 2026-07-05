// Nav scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav-scrolled', window.scrollY > 100);
});

// Mobile hamburger
const hamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// Timeline reveal
const timelineItems = document.querySelectorAll('.timeline-item');
const timeline = document.querySelector('.timeline');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      if (index === 0) timeline.classList.add('animate-line');
      setTimeout(() => entry.target.classList.add('visible'), index * 200);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
timelineItems.forEach(item => observer.observe(item));

// Section fade-in
const sections = document.querySelectorAll('.section-fade');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
sections.forEach(section => sectionObserver.observe(section));

// Scroll progress bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = pct + '%';
  progressBar.style.opacity = pct > 2 ? '1' : '0';
});

// Sparkle stars
const container = document.createElement('div');
container.className = 'sparkle-container';
document.body.appendChild(container);
for (let i = 0; i < 60; i++) {
  const star = document.createElement('div');
  star.className = 'sparkle-star';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.setProperty('--duration', (2 + Math.random() * 4) + 's');
  star.style.animationDelay = Math.random() * 5 + 's';
  star.style.width = (1 + Math.random() * 2) + 'px';
  star.style.height = star.style.width;
  container.appendChild(star);
}