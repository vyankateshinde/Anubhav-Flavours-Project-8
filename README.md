# Anubhav Flavours — Website

**"Made with Love, Served with Experience"**

A complete 4-page website for Anubhav Flavours, a homemade Indian food brand.

---

## 📁 Project Structure

```
anubhav-flavours/
├── index.html              ← Home page
├── pages/
│   ├── products.html       ← Products catalogue
│   ├── about.html          ← Our Story page
│   └── contact.html        ← Order / Contact page
├── css/
│   └── style.css           ← Full design system
├── js/
│   ├── main.js             ← Shared JS (nav, filters, form)
│   └── components.js       ← Reusable HTML components
├── images/
│   ├── logo-dark.png       ← Brand logo (dark/coloured version)
│   └── logo-light.png      ← Brand logo (light/white version)
├── vercel.json             ← Vercel deployment config
└── README.md
```

---

## 🖼️ Adding Your Logos

1. Place your logo files in the `/images/` folder:
   - `logo-dark.png` — the brown/coloured logo (Image 1 from brand assets)
   - `logo-light.png` — the white/monochrome logo (Image 2 from brand assets)
2. These will automatically appear in the nav and footer.

---

## 🚀 Deploying to Vercel

### Option 1: Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm install -g vercel

# From the project folder
cd anubhav-flavours
vercel

# Follow the prompts — it auto-detects static site
# Get your live URL instantly!
```

### Option 2: GitHub + Vercel Dashboard
1. Push the project folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects static HTML — click Deploy
5. Your site is live in ~30 seconds

### Option 3: Drag & Drop
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag your project folder into the browser
3. Done!

---

## 🔧 Things to Customise Before Launch

### 1. WhatsApp Number
Search for `919999999999` in all HTML files and replace with your actual WhatsApp number (country code + number, no spaces).

### 2. Email Address
Replace `hello@anubhavflavours.com` with your real email.

### 3. Social Links
Find `href="#"` on social links in the footer and update with your Instagram, Facebook and LinkedIn URLs.

### 4. Logo Images
Add the two logo PNG files to `/images/` as described above.

### 5. Custom Domain (Optional)
In Vercel dashboard → your project → Settings → Domains → Add your domain.

---

## 🎨 Design System

### Colours
- **Espresso** `#1A0E05` — deepest dark
- **Mahogany** `#3D1A0B` — rich brown
- **Copper** `#8B4513` — warm mid-tone
- **Amber** `#C27A2B` — accent
- **Gold** `#D4A043` — primary accent
- **Cream** `#FAF3E8` — background
- **Parchment** `#F2E6CC` — card background

### Typography
- **DM Serif Display** — headings and display text
- **Cormorant Garamond** — body and editorial text
- **Jost** — UI labels, buttons, captions

---

## ✅ Features

- [x] Fully responsive (mobile, tablet, desktop)
- [x] Smooth scroll-reveal animations
- [x] Product filter by category
- [x] WhatsApp ordering integration
- [x] Order enquiry form → opens WhatsApp
- [x] Fixed navigation with scroll effect
- [x] Mobile hamburger menu
- [x] SEO meta tags
- [x] Performance-optimised (no heavy frameworks)
- [x] Vercel deployment ready with security headers

---

## 📱 Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Hero, story intro, product teaser, CTA |
| Products | `/products` | Full product catalogue with filters |
| Our Story | `/about` | Brand story, values, mission |
| Order Now | `/contact` | Enquiry form + WhatsApp ordering |

---

*Built for Anubhav Flavours — a homegrown Indian food brand.*
*Made with love. 🇮🇳*
