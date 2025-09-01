// TTG Studios Main JavaScript

// Interactive background gradient
document.addEventListener('mousemove', (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  const color1 = `rgb(${Math.floor(255 * x)}, ${Math.floor(255 * y)}, 200)`;
  const color2 = `rgb(${Math.floor(255 * (1 - x))}, ${Math.floor(255 * (1 - y))}, 200)`;

  document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
});

// Navigation active state
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // For now, just show success message
    // In production, you'd send this to a server
    alert('Thank you for your message! We\'ll get back to you soon.');
    contactForm.reset();
  });
}