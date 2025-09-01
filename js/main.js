// TTG Studios Main JavaScript

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  body.classList.add('light-mode');
  themeIcon.textContent = '☀️';
}

// Theme toggle event listener
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Update icon and save preference
    if (body.classList.contains('light-mode')) {
      themeIcon.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    }
  });
}

// Subtle mouse interaction for professional feel
document.addEventListener('mousemove', (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  // Subtle gradient shift
  const intensity = 0.1;
  const moveX = (x - 0.5) * intensity;
  const moveY = (y - 0.5) * intensity;

  document.body.style.transform = `translate(${moveX}px, ${moveY}px)`;
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