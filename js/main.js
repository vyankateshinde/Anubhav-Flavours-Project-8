// ─── NAV SCROLL ───
const nav = document.getElementById('mainNav');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.getElementById('mobileNavClose');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

if (hamburger) {
  hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
}
if (mobileNavClose) {
  mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('open'));
}
if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// ─── REVEAL ON SCROLL ───
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ─── PRODUCT FILTER ───
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;
    productCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ─── ORDER FORM ───
const orderForm = document.getElementById('orderForm');
if (orderForm) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fname').value;
    const product = document.getElementById('fproduct').value;
    const message = document.getElementById('fmessage').value;
    const phone = document.getElementById('fphone').value;

    // Build WhatsApp message
    const text = `Hi Anubhav Flavours! 🙏\n\nName: ${name}\nPhone: ${phone}\nInterested in: ${product}\nMessage: ${message}\n\nLooking forward to ordering!`;
    const waUrl = `https://wa.me/919999999999?text=${encodeURIComponent(text)}`;
    
    // Show success
    document.getElementById('formFields').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    
    // Open WhatsApp after short delay
    setTimeout(() => window.open(waUrl, '_blank'), 800);
  });
}

// ─── MARQUEE DUPLICATE (for seamless loop) ───
const stripInner = document.querySelector('.flavour-strip-inner');
if (stripInner) {
  stripInner.innerHTML += stripInner.innerHTML;
}

// ─── ACTIVE NAV LINK ───
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.style.color = 'var(--gold)';
    link.style.opacity = '1';
  }
});
