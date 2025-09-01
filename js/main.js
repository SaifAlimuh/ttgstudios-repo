// TTG Studios Main JavaScript

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const logo = document.querySelector('.logo');

// Function to update logo based on theme
function updateLogo() {
  if (body.classList.contains('light-mode')) {
    logo.src = 'images/Logo black.png';
  } else {
    logo.src = 'images/Logo white 2.png';
  }
}

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  body.classList.add('light-mode');
  if (themeToggle) themeToggle.checked = true;
}

// Update logo on page load
if (logo) updateLogo();

// Theme toggle event listener
if (themeToggle) {
  themeToggle.addEventListener('change', () => {
    body.classList.toggle('light-mode');
    
    // Update logo
    if (logo) updateLogo();
    
    // Save preference
    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
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

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
  });

  // Close menu when clicking on a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });
}

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