document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const animatedItems = document.querySelectorAll('.card, .about-box, .contact-box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

animatedItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(30px)";
  item.style.transition = "0.6s ease";
  observer.observe(item);
});

const style = document.createElement('style');
style.innerHTML = `
.show{
  opacity:1 !important;
  transform:translateY(0) !important;
}
`;
document.head.appendChild(style);
