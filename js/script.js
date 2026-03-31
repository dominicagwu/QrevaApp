document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    body.classList.toggle('no-scroll'); // Prevent scroll when menu open
  });

  // Close menu when clicking any nav item
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      body.classList.remove('no-scroll');
    });
  });

  // Close menu if screen resizes back to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
      body.classList.remove("no-scroll");
    }
  });
});



// Fade-in-up animation on scroll
    const cards = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });
    cards.forEach(card => observer.observe(card));


    // Select all FAQ items
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const toggleBtn = item.querySelector(".faq-toggle");
    const answer = item.querySelector(".faq-answer");

    toggleBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other items
      faqItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".faq-toggle").textContent = "+";
        i.querySelector(".faq-toggle").style.transform = "rotate(0deg)";
        i.querySelector(".faq-answer").style.maxHeight = null;
      });

      // Toggle the clicked one
      if (!isActive) {
        item.classList.add("active");
        toggleBtn.textContent = "−";
        toggleBtn.style.transform = "rotate(180deg)";
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });

    // Initialize collapsed state
    answer.style.overflow = "hidden";
    answer.style.transition = "max-height 0.35s ease";
    answer.style.maxHeight = null;
  });
});




document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
