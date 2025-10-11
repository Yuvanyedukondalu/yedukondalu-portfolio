// ===== Custom Cursor =====
const cursor = document.getElementById('cursor');
window.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// ===== Hamburger Menu =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
// Hide mobile menu after click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ===== Smooth Section Scrolling =====
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = this.getAttribute('href').slice(1);
    const section = document.getElementById(target);
    if(section){
      e.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  });
});

// ===== Project Modals for Case Studies =====
document.querySelectorAll('.project-modal-trigger').forEach(tile => {
  tile.addEventListener('click', function(e) {
    let key = tile.dataset.project;
    let modal = document.getElementById(`modal-${key}`);
    if(modal){
      modal.style.display = "flex";
      document.body.style.overflow = 'hidden';
    }
  });
});

// Modal close button/X
document.querySelectorAll('.modal .close-btn').forEach(btn => {
  btn.addEventListener('click', function(e){
    btn.closest('.modal').style.display = 'none';
    document.body.style.overflow = '';
  });
});
// Click outside closes modal
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(e){
    if(e.target === modal){
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});

// ===== Simple Testimonial Slider =====
const slides = document.querySelectorAll('.testimonial-slide');
let tIndex = 0;
function showTestimonial(idx) {
  slides.forEach((el,i)=>el.style.display = i === idx ? 'block' : 'none');
}
setInterval(()=>{
  tIndex = (tIndex+1)%slides.length;
  showTestimonial(tIndex);
}, 5400);
showTestimonial(0);

// ===== Contact Form Validation & Feedback =====
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    if(!name || !email || !message || email.indexOf("@") === -1){
      alert('Please fill all fields correctly before submitting.');
      return;
    }
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
  });
}
