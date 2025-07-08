
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const img = document.querySelector('.image img');
let position = 0;
let direction = 0.2;  // speed and direction
const maxMove = 5;    // maximum pixels to move

function animate() {
  position += direction;
  if (position > maxMove || position < -maxMove) {
    direction = -direction;  // reverse direction
  }
  img.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();


const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    observer.observe(card);
  });

  //services section

  // Select all service cards
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      const icon = card.querySelector('i');
      icon.style.transform = 'rotate(10deg)';
      icon.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
      const icon = card.querySelector('i');
      icon.style.transform = 'rotate(0)';
    });
  });
// menu section start

  const tabs = document.querySelectorAll('.tab');
  const menuCards = document.querySelectorAll('.menu-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      // Show/hide menu cards
      menuCards.forEach(card => {
        if (card.getAttribute('data-category') === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // By default, show only fast food items
  window.addEventListener('DOMContentLoaded', () => {
    menuCards.forEach(card => {
      if (card.getAttribute('data-category') === 'fastfood') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  })
  // contact section start//
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = form.querySelector('input[placeholder="E-mail"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (name && email && message) {
      alert("✅ Your message has been sent! (Demo Only — no backend yet)");
      form.reset();
    } else {
      alert("⚠️ Please fill in all fields.");
    }
  });
// scroll btn sec

  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });





