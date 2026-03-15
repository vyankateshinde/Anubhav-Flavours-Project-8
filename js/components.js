// Shared navigation and footer HTML
const NAV_HTML = `
<nav id="mainNav">
  <a href="index.html" class="nav-logo">
    <img src="../images/logo-dark.png" alt="Anubhav Flavours" onerror="this.style.display='none'">
    <span class="nav-logo-text">Anubhav Flavours</span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="products.html">Products</a></li>
    <li><a href="about.html">Our Story</a></li>
    <li><a href="contact.html" class="nav-cta">Order Now</a></li>
  </ul>
  <button class="nav-hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="mobile-nav" id="mobileNav">
  <button class="mobile-nav-close" id="mobileNavClose">✕</button>
  <a href="index.html">Home</a>
  <a href="products.html">Products</a>
  <a href="about.html">Our Story</a>
  <a href="contact.html">Order Now</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand-logo">
          <img src="../images/logo-dark.png" alt="Anubhav Flavours" onerror="this.style.display='none'">
          <span class="footer-brand-name">Anubhav Flavours</span>
        </div>
        <p class="footer-tagline">Made with Love, Served with Experience.<br>Handcrafted homemade flavours from our kitchen to yours.</p>
        <div class="footer-social">
          <a href="#" class="social-link">in</a>
          <a href="#" class="social-link">ig</a>
          <a href="#" class="social-link">fb</a>
        </div>
      </div>
      <div>
        <p class="footer-col-title">Navigate</p>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="contact.html">Order Now</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Products</p>
        <ul class="footer-links">
          <li><a href="products.html">Chocolates</a></li>
          <li><a href="products.html">Syrups</a></li>
          <li><a href="products.html">Schezwan Sauce</a></li>
          <li><a href="products.html">Sindhi Pickle</a></li>
          <li><a href="products.html">Dry Fruit Mithai</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Contact</p>
        <ul class="footer-links">
          <li><a href="https://wa.me/919999999999">WhatsApp Us</a></li>
          <li><a href="contact.html">Place an Order</a></li>
          <li><a href="mailto:hello@anubhavflavours.com">Email Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2025 Anubhav Flavours. Crafted with love in India. 🇮🇳</p>
      <p class="footer-copy">Made with <span style="color:var(--gold)">♥</span> for homemade food lovers</p>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;
});
