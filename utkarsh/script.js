// === Enhanced Theme Toggle with Persistence & Animation ===
const toggleBtn = document.getElementById('theme-toggle');

// Load theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '🌞';
} else {
  toggleBtn.textContent = '🌓';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  
  // Save preference to localStorage
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Update icon
  toggleBtn.textContent = isDark ? '🌞' : '🌓';
});


// === Smooth Scroll for Nav Links ===
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === Typing Animation with Cursor Effect ===
const typingText = "Cybersecurity & Data Analyst Enthusiast";
const subtitleElement = document.querySelector(".hero p");
const cursorElement = document.createElement('span');
cursorElement.classList.add('cursor');
subtitleElement.appendChild(cursorElement);

let charIndex = 0;
const typingSpeed = 120; // Adjust speed here

function typeWriter() {
  if (charIndex < typingText.length) {
    subtitleElement.textContent += typingText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    // Add cursor blinking effect
    cursorElement.classList.add('blinking');
  }
}

subtitleElement.textContent = ""; // Clear initial text
typeWriter();


// === Contact Form Submission Alert ===
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for your message! 🚀 I'll get back to you soon.");
    contactForm.reset();
  });
}
// Scroll-triggered Animation using IntersectionObserver
// document.addEventListener('DOMContentLoaded', () => {
//   const fadeSections = document.querySelectorAll('.fade-in-up');
  
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//       }
//     });
//   }, { threshold: 0.2 });  // Trigger when 20% of the element is visible

//   fadeSections.forEach(section => {
//     observer.observe(section);
//   });
// });
// Scroll-triggered Animation using IntersectionObserver
// Animation for certification cards on scroll
document.addEventListener('DOMContentLoaded', () => {
  const certifications = document.querySelectorAll('.cert-card');
  
  window.addEventListener('scroll', () => {
    certifications.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (cardPosition < screenPosition) {
        card.classList.add('fade-in');
      }
    });
  });
});

