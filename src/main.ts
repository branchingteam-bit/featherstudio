import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

// Theme Initialization
let currentTheme = localStorage.getItem('theme') || 'light'
document.documentElement.setAttribute('data-theme', currentTheme)

// WhatsApp number — update here and everywhere updates automatically
const WA_NUMBER = '971504668481'
const WA_URL = `https://wa.me/${WA_NUMBER}`

// Router
const routes: Record<string, () => string> = {
  '/': Home,
  '/plans': Plans,
  '/work': Work,
  '/contact': Contact,
  '/activate': Activate,
}

function navigate(path: string) {
  window.history.pushState({}, '', path)
  render()
  window.scrollTo(0, 0)
}

window.addEventListener('popstate', render)

// ─── SVG Icon Library ────────────────────────────────────────
const icons = {
  search: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  clock: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  tag: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  wrench: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  whatsapp: `<svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  envelope: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  mapPin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  zap: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
}

// ─── Persistent WhatsApp FAB ──────────────────────────────────
function WhatsAppFAB() {
  return `
    <a href="${WA_URL}" target="_blank" id="whatsapp-fab" title="WhatsApp Us">
      ${icons.whatsapp}
    </a>
  `
}

// ─── Navbar ───────────────────────────────────────────────────
function Navbar() {
  const themeIcon = currentTheme === 'light' ? '🌙' : '☀️'
  return `
    <nav class="nav" id="main-nav">
      <a href="/" class="logo" data-link>
        <img src="/feather.png" alt="Feather Studio" class="feather-icon">
        Feather Studio
      </a>
      <div class="nav-links">
        <a href="/" class="nav-link" data-link>Home</a>
        <a href="/plans" class="nav-link" data-link>Plans</a>
        <a href="/work" class="nav-link" data-link>Our Work</a>
        <a href="/contact" class="nav-link" data-link>Contact</a>
        <button class="theme-toggle" id="theme-toggle" title="Toggle theme">${themeIcon}</button>
        <a href="${WA_URL}" target="_blank" class="btn btn-primary">WhatsApp Us</a>
      </div>
    </nav>
  `
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <div class="logo" style="margin-bottom: 18px; font-size: 1.1rem;">
            <img src="/feather.png" alt="Feather Studio" class="feather-icon" style="width:20px;height:20px;">
            Feather Studio
          </div>
          <p style="color: var(--color-text-dim); max-width: 260px; font-size: 0.9rem; line-height: 1.7;">UAE-based web studio for clinics and medical professionals.</p>
        </div>
        <div>
          <h4 class="footer-label">Links</h4>
          <ul class="footer-links">
            <li><a href="/" data-link>Home</a></li>
            <li><a href="/plans" data-link>Plans</a></li>
            <li><a href="/work" data-link>Our Work</a></li>
            <li><a href="/contact" data-link>Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer-label">Reach Us</h4>
          <div class="footer-links">
            <p>Dubai, UAE</p>
            <a href="mailto:hellofeatherstudio@gmail.com">hellofeatherstudio@gmail.com</a>
            <a href="${WA_URL}" target="_blank" style="font-weight: 700; color: var(--color-accent);">WhatsApp Us</a>
          </div>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>© 2025 Feather Studio. Dubai, UAE.</p>
      </div>
    </footer>
  `
}

// ─── Home ─────────────────────────────────────────────────────
function Home() {
  return `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-warm-glow"></div>
      <div class="hero-content visible" id="hero-content" style="opacity: 1; transform: translateY(0);">
        <p class="hero-eyebrow">Feather Studio · Web Design for UAE Clinics</p>
        <h1>Your patients are searching. Are they finding you?</h1>
        <p class="hero-sub">There are over 1,300 private clinics in Dubai — most have no website. Every day patients search for your specialty and book with whoever shows up first. We make sure that's you.</p>
        <div class="hero-ctas">
          <a href="/plans" class="btn btn-primary" data-link>See Our Plans</a>
          <a href="${WA_URL}" target="_blank" class="btn btn-secondary">WhatsApp Us</a>
        </div>
        <p class="hero-process-note">WhatsApp us and we'll book a quick 15 minute call to understand what you need.</p>
      </div>
    </section>

    <!-- UAE TRUST STRIP -->
    <div class="trust-strip">
      <div class="container trust-strip-inner">
        <div class="trust-strip-item">
          <span class="trust-strip-icon">${icons.mapPin}</span>
          <span>Based in Dubai, UAE</span>
        </div>
        <div class="trust-strip-divider"></div>
        <div class="trust-strip-item">
          <span class="trust-strip-icon">${icons.globe}</span>
          <span>Serving clinics across all 7 Emirates</span>
        </div>
        <div class="trust-strip-divider"></div>
        <div class="trust-strip-item">
          <span class="trust-strip-icon">${icons.zap}</span>
          <span>Response within 1 hour</span>
        </div>
      </div>
    </div>

    <!-- PROBLEM -->
    <section class="section-padding" id="problem">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Why clinic owners call us</span>
          <h2 class="section-title">Dubai has over 4,500 medical facilities. Most are invisible online.</h2>
        </div>
        <div class="grid-2">
          <div class="card glass">
            <span class="card-icon">${icons.search}</span>
            <h3>Patients search before they book</h3>
            <p>Before calling any clinic, most patients search online first. If your clinic has no website, or a poor one, they find your competitor instead. That patient is gone before you even knew they existed.</p>
          </div>
          <div class="card glass">
            <span class="card-icon">${icons.clock}</span>
            <h3>You have zero time for websites</h3>
            <p>You're seeing patients, managing staff, and running a business. Figuring out domains, hosting, and website updates is nobody's idea of a good use of your time. That's what we're here for.</p>
          </div>
          <div class="card glass">
            <span class="card-icon">${icons.tag}</span>
            <h3>Most agencies charge too much and take too long</h3>
            <p>Web agencies in Dubai charge AED 8,000 to 15,000 and take 2 to 3 months. We build professional clinic websites in 3 days at AED 1,999, with no surprises.</p>
          </div>
          <div class="card glass card-accent">
            <span class="card-icon">${icons.wrench}</span>
            <h3>A website isn't a one-time thing</h3>
            <p>Domains expire. Hosting goes down. Information changes. Without someone managing it, your website becomes a liability. Our managed plan keeps everything running. You never have to think about it.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT WE DO -->
    <section class="section-padding section-alt">
      <div class="container what-we-do-grid">
        <div class="what-we-do-text">
          <span class="section-label">What We Do</span>
          <h2 class="section-title">We build professional websites for UAE clinics. Fast, clean, and built to get patients through your door.</h2>
          <p class="body-text">Feather Studio works exclusively with clinics, doctors, and medical professionals across the UAE. We don't take on every client. We chose this niche because we understand the local market, what patients look for, and what makes a medical practice look credible and trustworthy online.</p>
          <p class="body-text" style="margin-top: 16px;">We offer two options. You can own your website outright with a one-time payment and manage it yourself from there. Or you can choose our managed plan: we build it, host it, and handle every update and technical issue indefinitely. All you do is WhatsApp us when something needs changing.</p>
          <ul class="feature-list">
            <li>
              <span class="feature-bullet">${icons.check}</span>
              <div><strong>UAE-based and clinic-focused.</strong> We understand the Dubai healthcare market and what patients expect when they land on a clinic website.</div>
            </li>
            <li>
              <span class="feature-bullet">${icons.check}</span>
              <div><strong>Live in 3 days.</strong> You review once, we launch. No lengthy back-and-forth, no waiting months.</div>
            </li>
            <li>
              <span class="feature-bullet">${icons.check}</span>
              <div><strong>Managed plan available.</strong> For clinic owners who want zero involvement. We handle hosting, updates, renewals, and maintenance every month.</div>
            </li>
          </ul>
        </div>
        <div class="what-we-do-visual">
          <div class="visual-card glass">
            <div class="visual-stat">3<span>days</span></div>
            <p>average time from first call to live website</p>
          </div>
          <div class="visual-card glass">
            <div class="visual-stat">1,300+<span>clinics</span></div>
            <p>private clinics in Dubai alone</p>
          </div>
          <div class="visual-card glass" style="grid-column: span 2;">
            <div class="visual-stat" style="font-size: 1.8rem;">Exclusively<span>UAE Medical</span></div>
            <p>We only work with UAE medical professionals</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CLINIC SPECIALTIES -->
    <section class="section-padding">
      <div class="container" style="text-align: center;">
        <span class="section-label">Our Clients</span>
        <h2 class="section-title" style="margin-bottom: 14px;">We work with all medical specialties across the UAE</h2>
        <p class="body-text" style="max-width: 560px; margin: 0 auto 48px;">From solo practitioners to multi-branch clinics, we understand the specific needs of every medical specialty.</p>
        <div class="specialty-pills">
          <span class="specialty-pill">General Practice</span>
          <span class="specialty-pill">Dental Clinics</span>
          <span class="specialty-pill">Physiotherapy</span>
          <span class="specialty-pill">Dermatology</span>
          <span class="specialty-pill">Paediatrics</span>
          <span class="specialty-pill">ENT</span>
          <span class="specialty-pill">Gynaecology</span>
          <span class="specialty-pill">Nutrition &amp; Wellness</span>
          <span class="specialty-pill">Psychiatry</span>
          <span class="specialty-pill">Ophthalmology</span>
          <span class="specialty-pill">Orthopaedics</span>
          <span class="specialty-pill">IVF Centres</span>
        </div>
      </div>
    </section>

    <!-- PLANS PREVIEW -->
    <section class="section-padding section-alt">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 100%;">
          <span class="section-label">Pricing</span>
          <h2 class="section-title" style="margin: 0 auto 20px;">Two simple options. No surprises.</h2>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card glass">
            <p class="plan-label">One-Time</p>
            <h3 class="plan-price">AED 1,999</h3>
            <p class="plan-price-sub">paid once</p>
            <p class="plan-tagline">Own it outright.</p>
            <ul class="plan-features">
              <li class="yes">Custom 5-page clinic website</li>
              <li class="yes">Domain name included (first year)</li>
              <li class="yes">Mobile-optimised and fast-loading</li>
              <li class="yes">Live within 3 days</li>
              <li class="yes">Full ownership and login handed over</li>
              <li class="no">Hosting and maintenance after handover is your responsibility</li>
            </ul>
            <!-- PayPal Button — One-Time Plan (AED 1,999) -->
            <div class="paypal-button-wrapper">
              <style>.pp-MSG32JB7RGP9C{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;width:100%;}</style>
              <form action="https://www.paypal.com/ncp/payment/MSG32JB7RGP9C" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;width:100%;">
                <input class="pp-MSG32JB7RGP9C" type="submit" value="Buy Now" />
                <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                <section style="font-size: 0.75rem;"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
              </form>
            </div>
          </div>

          <div class="pricing-card glass featured">
            <div class="popular-badge">Most Popular</div>
            <p class="plan-label accent">Managed</p>
            <div class="plan-price-managed">
              <div class="plan-price-setup">AED 799 <span class="plan-price-tag">setup</span></div>
              <div class="plan-price-monthly"><span class="plan-price-plus">+</span> AED 399 <span class="plan-price-tag">/ month</span></div>
            </div>
            <p class="plan-tagline">We handle everything, every month.</p>
            <ul class="plan-features">
              <li class="yes">Full website built and designed for your clinic</li>
              <li class="yes">Domain included, renewed automatically every year</li>
              <li class="yes">Professional hosting, live 24/7</li>
              <li class="yes">All updates handled via WhatsApp</li>
              <li class="yes">Technical fixes and maintenance included</li>
              <li class="yes">Same-day response on all requests</li>
              <li class="yes">Cancel any time, no long-term contract</li>
            </ul>
            <!-- PayPal Button — Managed Plan Setup (AED 799) -->
            <div class="paypal-button-wrapper">
              <style>.pp-PEFTFS2QHP7H4{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;width:100%;}</style>
              <form action="https://www.paypal.com/ncp/payment/PEFTFS2QHP7H4" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;width:100%;">
                <input class="pp-PEFTFS2QHP7H4" type="submit" value="Buy Now" />
                <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                <section style="font-size: 0.75rem;"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
              </form>
            </div>
            <p class="plan-note-managed">After your site goes live, you will receive a link to activate your AED 399/month management plan.</p>
            <p class="plan-note">Setup covers your full website build. Monthly fee covers hosting, updates, and management.</p>
            <p class="plan-note" style="color: var(--color-text-main); font-weight: 500; font-style: normal;">For less than the cost of a single patient consultation each month, your entire website, hosting, updates, and maintenance is completely off your plate.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="section-padding">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 100%;">
          <span class="section-label">Process</span>
          <h2 class="section-title" style="margin: 0 auto 14px;">Here is how it works</h2>
          <p class="body-text" style="max-width:520px; margin: 0 auto 64px;">Three simple steps from first message to live website. No surprises, no jargon.</p>
        </div>
        <div class="how-it-works-grid">
          <div class="how-step">
            <div class="how-step-number">01</div>
            <h3>You reach out</h3>
            <p>WhatsApp us or fill in the contact form. We respond within the hour.</p>
          </div>
          <div class="how-step-arrow">${icons.arrowRight}</div>
          <div class="how-step">
            <div class="how-step-number">02</div>
            <h3>We have a quick call</h3>
            <p>A short 15-minute call to understand your clinic and what you need. No commitment, no pressure.</p>
          </div>
          <div class="how-step-arrow">${icons.arrowRight}</div>
          <div class="how-step">
            <div class="how-step-number">03</div>
            <h3>We build and launch</h3>
            <p>We build your website, you review it once, and we go live. Done in 3 days.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="cta-section">
      <div class="container" style="text-align: center;">
        <h2>Your patients are searching right now. Let's make sure they find you.</h2>
        <p>Getting started takes one conversation. WhatsApp us today and your clinic can be online within the week.</p>
        <div class="hero-ctas">
          <a href="${WA_URL}" target="_blank" class="btn btn-primary btn-large">WhatsApp Us Now</a>
          <a href="/plans" class="btn btn-secondary btn-large" data-link>See Plans</a>
        </div>
      </div>
    </section>
  `
}

// ─── Plans ────────────────────────────────────────────────────
function Plans() {
  return `
    <header class="page-header">
      <div class="container" style="text-align:center;">
        <h1>Every clinic in the UAE deserves a professional website. Here is what it costs.</h1>
        <p class="hero-sub" style="max-width:650px; margin: 0 auto;">Two options. One price each. No surprises, no contracts, no tech stress.</p>
      </div>
    </header>

    <!-- COMPETITOR COMPARISON SECTION -->
    <section class="section-padding" style="padding-top: 20px; padding-bottom: 40px;">
      <div class="container">
        <div class="comparison-wrap glass">
          <div class="comparison-header">
            <span class="section-label">Why Feather Studio</span>
            <h2 class="comparison-headline">UAE web agencies charge AED 8,000 to AED 15,000 for a clinic website. We charge AED 1,999.</h2>
          </div>
          
          <div class="table-responsive">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Other UAE Agencies</th>
                  <th class="highlight">Feather Studio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Website build</td>
                  <td>AED 8,000 – 15,000</td>
                  <td class="highlight">AED 1,999</td>
                </tr>
                <tr>
                  <td>Turnaround time</td>
                  <td>2 – 3 months</td>
                  <td class="highlight">3 days</td>
                </tr>
                <tr>
                  <td>Monthly maintenance</td>
                  <td>AED 500 – 2,000</td>
                  <td class="highlight">AED 399</td>
                </tr>
                <tr>
                  <td>Clinic specialist</td>
                  <td>Rarely</td>
                  <td class="highlight">Always</td>
                </tr>
                <tr>
                  <td>WhatsApp support</td>
                  <td>No</td>
                  <td class="highlight">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="comparison-footer">Same quality. A fraction of the price. Built specifically for UAE clinics.</p>
        </div>
      </div>
    </section>

    <section class="section-padding" style="padding-top: 60px;">
      <div class="container">
        <div class="pricing-grid">
          <!-- One-Time -->
          <div class="pricing-card glass">
            <p class="plan-label">One-Time</p>
            <h2 class="plan-price">AED 1,999</h2>
            <p class="plan-price-sub">paid once</p>
            <p class="plan-tagline">Own it outright.</p>
            <ul class="plan-features">
              <li class="yes">Custom clinic website, up to 5 pages</li>
              <li class="yes">Home, About, Services, Gallery, Contact</li>
              <li class="yes">Domain name included (first year)</li>
              <li class="yes">Mobile-optimised and fast-loading</li>
              <li class="yes">Built and launched within 3 days</li>
              <li class="yes">Full ownership and login credentials handed over</li>
            </ul>
            <!-- PayPal Button — One-Time Plan (AED 1,999) -->
            <div class="paypal-button-wrapper">
              <style>.pp-MSG32JB7RGP9C{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;width:100%;}</style>
              <form action="https://www.paypal.com/ncp/payment/MSG32JB7RGP9C" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;width:100%;">
                <input class="pp-MSG32JB7RGP9C" type="submit" value="Buy Now" />
                <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                <section style="font-size: 0.75rem;"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
              </form>
            </div>
            <p class="plan-best-for"><strong>Best for:</strong> Clinics with in-house staff who can manage updates, or owners who prefer to own everything outright from day one.</p>
            <p class="plan-note">After the first year, domain renewal is approximately AED 55/year paid directly to the registrar. Hosting after handover is the clinic's responsibility.</p>
          </div>

          <!-- Managed -->
          <div class="pricing-card glass featured">
            <div class="popular-badge">Most Popular</div>
            <p class="plan-label accent">Managed</p>
            <div class="plan-price-managed">
              <div class="plan-price-setup" style="font-size: 2.4rem;">AED 799 <span class="plan-price-tag">setup</span></div>
              <div class="plan-price-monthly" style="font-size: 1.6rem;"><span class="plan-price-plus">+</span> AED 399 <span class="plan-price-tag">/ month</span></div>
            </div>
            <p class="plan-tagline">Everything handled, every month.</p>
            <ul class="plan-features">
              <li class="yes">Full custom website built for your clinic</li>
              <li class="yes">Home, About, Services, Gallery, Contact</li>
              <li class="yes">AED 799 one-time setup covers the full build</li>
              <li class="yes">Domain included, renewed every year automatically</li>
              <li class="yes">Professional hosting, your site stays live 24/7</li>
              <li class="yes">Unlimited text and image updates via WhatsApp</li>
              <li class="yes">All technical fixes and maintenance covered</li>
              <li class="yes">Same-day response on all requests</li>
              <li class="yes">Cancel any time, no minimum contract</li>
            </ul>
            <!-- PayPal Button — Managed Plan Setup (AED 799) -->
            <div class="paypal-button-wrapper">
              <style>.pp-PEFTFS2QHP7H4{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;width:100%;}</style>
              <form action="https://www.paypal.com/ncp/payment/PEFTFS2QHP7H4" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;width:100%;">
                <input class="pp-PEFTFS2QHP7H4" type="submit" value="Buy Now" />
                <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                <section style="font-size: 0.75rem;"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
              </form>
            </div>
            <p class="plan-note-managed">After your site goes live, you will receive a link to activate your AED 399/month management plan.</p>
            <p class="plan-best-for"><strong>Best for:</strong> Busy clinic owners and doctors who want a professional online presence with zero day-to-day involvement. You focus on your patients. We handle everything else.</p>
            <p class="plan-note">Setup covers your full website build. Monthly fee covers hosting, updates, and management.</p>
            <p class="plan-note" style="color: var(--color-text-main); font-weight: 500; font-style: normal;"><strong>Why most clinics choose this:</strong> Running a clinic is already a full-time job. For AED 399 a month, less than a single patient consultation, your website, hosting, updates, and maintenance are completely off your plate, every single month.</p>
          </div>
        </div>

        <!-- Process Timeline -->
        <div class="process-timeline">
          <h3 class="process-timeline-label">Your journey from enquiry to live website</h3>
          <div class="process-steps">
            <div class="process-step">
              <div class="process-dot"></div>
              <span>Enquire</span>
            </div>
            <div class="process-line"></div>
            <div class="process-step">
              <div class="process-dot"></div>
              <span>Quick Call</span>
            </div>
            <div class="process-line"></div>
            <div class="process-step">
              <div class="process-dot"></div>
              <span>We Build</span>
            </div>
            <div class="process-line"></div>
            <div class="process-step">
              <div class="process-dot"></div>
              <span>You Review</span>
            </div>
            <div class="process-line"></div>
            <div class="process-step active">
              <div class="process-dot active"></div>
              <span>Go Live</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-padding section-alt">
      <div class="container">
        <div class="section-header">
          <span class="section-label">FAQ</span>
          <h2 class="section-title">Common questions</h2>
        </div>
        <div class="faq-list">
          <div class="faq-item glass">
            <h3>Do I need to provide content?</h3>
            <p>Not much. Your clinic name, a logo if you have one, and basic information about your services is all we need. We write the copy, structure the pages, and handle the rest.</p>
          </div>
          <div class="faq-item glass">
            <h3>How long does it take?</h3>
            <p>Most clinic websites are live within 3 days of our first conversation.</p>
          </div>
          <div class="faq-item glass">
            <h3>What's the difference between the two plans?</h3>
            <p>With the one-time plan, you own the website outright and manage it yourself after launch. With the managed plan, we handle hosting, updates, renewals, and any technical issues indefinitely. You never have to touch it.</p>
          </div>
          <div class="faq-item glass">
            <h3>Can I switch from one-time to managed later?</h3>
            <p>Yes. If you start with the one-time plan and later want us to take over management, we can arrange that at any time.</p>
          </div>
          <div class="faq-item glass">
            <h3>What happens if I cancel the managed plan?</h3>
            <p>No penalty. Your site stays live until the end of your paid month. After that we can arrange a full handover if you want to keep the site running yourself.</p>
          </div>
          <div class="faq-item glass">
            <h3>Do you only work with clinics?</h3>
            <p>Yes. We work exclusively with clinics, doctors, and medical professionals in the UAE. This focus means we understand your patients, your market, and what a medical website needs to do.</p>
          </div>
          <div class="faq-item glass">
            <h3>Do you work across the whole UAE?</h3>
            <p>Yes. Dubai, Abu Dhabi, Sharjah, Ajman, and beyond.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container" style="text-align:center;">
        <h2>Your patients are searching right now. Let's make sure they find you.</h2>
        <p>Getting started takes one conversation. WhatsApp us today and your clinic can be online within the week.</p>
        <div class="hero-ctas">
          <a href="${WA_URL}" target="_blank" class="btn btn-primary btn-large">WhatsApp Us Now</a>
          <a href="/contact" class="btn btn-secondary btn-large" data-link>Send an Enquiry</a>
        </div>
      </div>
    </section>
  `
}

// ─── Work (Showcase) ──────────────────────────────────────────
function Work() {
  return `
    <!-- PAGE HERO -->
    <section class="showcase-hero">
      <div class="container" style="text-align:center;">
        <span class="section-label">Our Work</span>
        <h1>What your clinic could look like online.</h1>
        <p class="hero-sub" style="max-width:600px;margin:0 auto;">Below are three example clinic websites we have built. Every site is designed specifically for the specialty, the patients, and the location. This is exactly what your website could look like.</p>
      </div>
    </section>

    <!-- SHOWCASE WRAPPER -->
    <div class="showcase-outer">

      <!-- STICKY DOT NAV -->
      <nav class="showcase-dot-nav" aria-label="Jump to clinic">
        <a href="#clinic-1" class="showcase-dot active" data-clinic="1" title="Al Noor Dental"></a>
        <a href="#clinic-2" class="showcase-dot" data-clinic="2" title="Harmony Physio"></a>
        <a href="#clinic-3" class="showcase-dot" data-clinic="3" title="Rania Al Zahra"></a>
      </nav>

      <!-- ══════════════════════════════════════════════════ -->
      <!-- CLINIC 1 — AL NOOR DENTAL CENTRE -->
      <!-- ══════════════════════════════════════════════════ -->
      <div class="showcase-clinic" id="clinic-1">
        <div class="container showcase-clinic-inner">

          <div class="showcase-label">
            <span class="showcase-number">01</span>
            <h2 class="showcase-clinic-name">Al Noor Dental Centre</h2>
            <p class="showcase-meta">General &amp; Cosmetic Dentistry &nbsp;·&nbsp; Jumeirah, Dubai</p>
            <p class="showcase-desc">&ldquo;A clean, premium dental presence that books appointments on autopilot.&rdquo;</p>
            <a href="/contact" class="showcase-cta" data-link>This could be your clinic &rarr;</a>
          </div>

          <div class="showcase-frame-wrap">
            <div class="browser-chrome">
              <div class="browser-bar">
                <span class="browser-dot red"></span>
                <span class="browser-dot yellow"></span>
                <span class="browser-dot green"></span>
                <span class="browser-url">alnoordentalcentre.ae</span>
              </div>
              <div class="browser-body">
                <div class="demo-site dental">

                  <!-- DENTAL NAV -->
                  <header class="demo-nav dental-nav">
                    <span class="demo-logo dental-logo">Al Noor Dental</span>
                    <nav class="demo-navlinks">
                      <a>Home</a><a>Services</a><a>About</a><a>Contact</a>
                    </nav>
                  </header>

                  <!-- DENTAL HERO -->
                  <section class="demo-hero dental-hero">
                    <div class="demo-hero-content">
                      <p class="demo-eyebrow dental-eyebrow">Jumeirah, Dubai</p>
                      <h2 class="demo-h1 dental-h1">Dubai's trusted smile specialists</h2>
                      <p class="demo-sub dental-sub">Expert dental care for the whole family. Modern clinic. Gentle hands. Beautiful results.</p>
                      <a class="demo-btn dental-btn">Book Appointment</a>
                    </div>
                    <div class="dental-hero-graphic">
                      <div class="dental-hero-icon">
                        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="40" cy="40" r="38" fill="#B8860B" fill-opacity="0.12" stroke="#B8860B" stroke-width="1.5"/>
                          <path d="M28 32c0-6.627 5.373-12 12-12s12 5.373 12 12c0 4-2 7-4 9l-2 16h-12l-2-16c-2-2-4-5-4-9z" fill="#B8860B" fill-opacity="0.3" stroke="#B8860B" stroke-width="1.5"/>
                          <circle cx="40" cy="32" r="4" fill="#B8860B" fill-opacity="0.5"/>
                        </svg>
                      </div>
                    </div>
                  </section>

                  <!-- DENTAL SERVICES -->
                  <section class="demo-section dental-section-bg">
                    <p class="demo-section-label dental-label">Our Services</p>
                    <h3 class="demo-section-title dental-title">Comprehensive dental care</h3>
                    <div class="demo-services-grid">
                      <div class="demo-service-card dental-card">
                        <span class="dental-service-icon">&#9711;</span>
                        <strong>General Dentistry</strong>
                        <p>Routine check-ups, fillings and preventive care for the whole family.</p>
                      </div>
                      <div class="demo-service-card dental-card">
                        <span class="dental-service-icon">&#10024;</span>
                        <strong>Teeth Whitening</strong>
                        <p>Professional whitening treatments for a brighter, more confident smile.</p>
                      </div>
                      <div class="demo-service-card dental-card">
                        <span class="dental-service-icon">&#9678;</span>
                        <strong>Dental Implants</strong>
                        <p>Permanent tooth replacement that looks and feels completely natural.</p>
                      </div>
                      <div class="demo-service-card dental-card">
                        <span class="dental-service-icon">&#9741;</span>
                        <strong>Orthodontics</strong>
                        <p>Braces and clear aligners to straighten your smile at any age.</p>
                      </div>
                    </div>
                  </section>

                  <!-- DENTAL WHY US -->
                  <section class="demo-section" style="background:#fff;">
                    <p class="demo-section-label dental-label">Why Choose Us</p>
                    <div class="demo-why-grid">
                      <div class="demo-why-item dental-why">
                        <div class="dental-why-icon">&#10003;</div>
                        <strong>Experienced team</strong>
                        <p>Over 15 years serving Dubai families</p>
                      </div>
                      <div class="demo-why-item dental-why">
                        <div class="dental-why-icon">&#10003;</div>
                        <strong>Modern equipment</strong>
                        <p>Digital X-rays and latest technology</p>
                      </div>
                      <div class="demo-why-item dental-why">
                        <div class="dental-why-icon">&#10003;</div>
                        <strong>Comfortable environment</strong>
                        <p>Relaxed, anxiety-free appointments</p>
                      </div>
                    </div>
                  </section>

                  <!-- DENTAL CONTACT -->
                  <section class="demo-section dental-contact-bg">
                    <p class="demo-section-label dental-label">Find Us</p>
                    <h3 class="demo-section-title dental-title" style="margin-bottom:14px;">Visit Our Clinic</h3>
                    <p class="demo-contact-detail">Jumeirah Beach Road, Jumeirah 1, Dubai</p>
                    <p class="demo-contact-detail">+971 04 000 0001</p>
                    <a class="demo-btn dental-btn" style="margin-top:14px;display:inline-block;">Book Now</a>
                  </section>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ══════════════════════════════════════════════════ -->
      <!-- CLINIC 2 — HARMONY PHYSIOTHERAPY -->
      <!-- ══════════════════════════════════════════════════ -->
      <div class="showcase-clinic showcase-clinic-alt" id="clinic-2">
        <div class="container showcase-clinic-inner">

          <div class="showcase-label">
            <span class="showcase-number">02</span>
            <h2 class="showcase-clinic-name">Harmony Physiotherapy</h2>
            <p class="showcase-meta">Physiotherapy &amp; Rehabilitation &nbsp;·&nbsp; Business Bay, Dubai</p>
            <p class="showcase-desc">&ldquo;Built for a busy clinic that needed patients to understand their treatments before booking.&rdquo;</p>
            <a href="/contact" class="showcase-cta" data-link>This could be your clinic &rarr;</a>
          </div>

          <div class="showcase-frame-wrap">
            <div class="browser-chrome">
              <div class="browser-bar">
                <span class="browser-dot red"></span>
                <span class="browser-dot yellow"></span>
                <span class="browser-dot green"></span>
                <span class="browser-url">harmonyphysio.ae</span>
              </div>
              <div class="browser-body">
                <div class="demo-site physio">

                  <!-- PHYSIO NAV -->
                  <header class="demo-nav physio-nav">
                    <span class="demo-logo physio-logo">Harmony Physio</span>
                    <nav class="demo-navlinks physio-links">
                      <a>Home</a><a>Treatments</a><a>Team</a><a>Contact</a>
                    </nav>
                  </header>

                  <!-- PHYSIO HERO -->
                  <section class="demo-hero physio-hero">
                    <div class="demo-hero-content">
                      <p class="demo-eyebrow physio-eyebrow">Business Bay, Dubai</p>
                      <h2 class="demo-h1 physio-h1">Move better.<br>Live better.</h2>
                      <p class="demo-sub physio-sub">Specialist physiotherapy and rehabilitation for sports injuries, chronic pain, and post-surgery recovery.</p>
                      <div style="display:flex;gap:8px;flex-wrap:wrap;">
                        <a class="demo-btn physio-btn">Book a Session</a>
                        <a class="demo-btn physio-btn-outline">Our Treatments</a>
                      </div>
                    </div>
                    <div class="physio-hero-deco">
                      <div class="physio-deco-ring"></div>
                      <div class="physio-deco-inner">
                        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:40px;height:40px;">
                          <path d="M30 10 L30 50 M10 30 L50 30" stroke="#0d9488" stroke-width="3" stroke-linecap="round"/>
                          <circle cx="30" cy="30" r="12" fill="#0d9488" fill-opacity="0.15" stroke="#0d9488" stroke-width="1.5"/>
                        </svg>
                      </div>
                    </div>
                  </section>

                  <!-- PHYSIO SERVICES -->
                  <section class="demo-section physio-section-bg">
                    <p class="demo-section-label physio-label">Treatments</p>
                    <h3 class="demo-section-title physio-title">What we treat</h3>
                    <div class="demo-services-grid">
                      <div class="demo-service-card physio-card">
                        <strong>Sports Injury</strong>
                        <p>ACL, shoulder, ankle and muscle rehabilitation for all levels of athlete.</p>
                      </div>
                      <div class="demo-service-card physio-card">
                        <strong>Back &amp; Neck Pain</strong>
                        <p>Evidence-based treatment for acute and chronic spinal conditions.</p>
                      </div>
                      <div class="demo-service-card physio-card">
                        <strong>Post-Surgery Rehab</strong>
                        <p>Structured recovery programmes following orthopaedic procedures.</p>
                      </div>
                      <div class="demo-service-card physio-card">
                        <strong>Dry Needling</strong>
                        <p>Targeted relief for myofascial pain and trigger point release.</p>
                      </div>
                    </div>
                  </section>

                  <!-- PHYSIO TEAM -->
                  <section class="demo-section" style="background:#fff;">
                    <p class="demo-section-label physio-label">Our Team</p>
                    <h3 class="demo-section-title physio-title" style="margin-bottom:16px;">Meet our specialists</h3>
                    <div class="demo-team-grid">
                      <div class="demo-team-card physio-team-card">
                        <div class="demo-avatar physio-avatar">
                          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:32px;height:32px;">
                            <circle cx="24" cy="18" r="8" fill="#0d9488" fill-opacity="0.3"/>
                            <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#0d9488" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                        </div>
                        <strong>Dr. Khalid Al Mansouri</strong>
                        <span>Senior Physiotherapist</span>
                        <p>MSc Sports Rehabilitation &nbsp;· &nbsp;12 years experience</p>
                      </div>
                      <div class="demo-team-card physio-team-card">
                        <div class="demo-avatar physio-avatar">
                          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:32px;height:32px;">
                            <circle cx="24" cy="18" r="8" fill="#0d9488" fill-opacity="0.3"/>
                            <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#0d9488" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                        </div>
                        <strong>Dr. Sara Neville</strong>
                        <span>Rehabilitation Specialist</span>
                        <p>BSc Physiotherapy &nbsp;· &nbsp;8 years experience</p>
                      </div>
                    </div>
                  </section>

                  <!-- PHYSIO TESTIMONIALS -->
                  <section class="demo-section physio-section-bg">
                    <p class="demo-section-label physio-label">Patient Stories</p>
                    <div class="demo-testimonials">
                      <div class="demo-testimonial physio-testimonial">
                        <p>&ldquo;After my knee surgery I was worried I wouldn't get back to running. The team at Harmony had me back on the track in 10 weeks.&rdquo;</p>
                        <strong>Ahmed R., Business Bay</strong>
                      </div>
                      <div class="demo-testimonial physio-testimonial">
                        <p>&ldquo;I had chronic lower back pain for years. After 6 sessions here the difference was remarkable. I wish I had come sooner.&rdquo;</p>
                        <strong>Priya M., Dubai Marina</strong>
                      </div>
                    </div>
                  </section>

                  <!-- PHYSIO CONTACT -->
                  <section class="demo-section" style="background:#fff;">
                    <p class="demo-section-label physio-label">Location</p>
                    <h3 class="demo-section-title physio-title" style="margin-bottom:12px;">Find us in Business Bay</h3>
                    <p class="demo-contact-detail">Bay Square Building 3, Business Bay, Dubai</p>
                    <p class="demo-contact-detail">+971 04 000 0002</p>
                    <a class="demo-btn physio-btn" style="margin-top:14px;display:inline-block;">Book a Session</a>
                  </section>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ══════════════════════════════════════════════════ -->
      <!-- CLINIC 3 — RANIA AL ZAHRA WOMEN'S WELLNESS -->
      <!-- ══════════════════════════════════════════════════ -->
      <div class="showcase-clinic" id="clinic-3">
        <div class="container showcase-clinic-inner">

          <div class="showcase-label">
            <span class="showcase-number">03</span>
            <h2 class="showcase-clinic-name">Rania Al Zahra Women's Wellness</h2>
            <p class="showcase-meta">Women's Health &amp; Gynaecology &nbsp;·&nbsp; Deira, Dubai</p>
            <p class="showcase-desc">&ldquo;A warm, reassuring website that made patients feel safe before they even walked in.&rdquo;</p>
            <a href="/contact" class="showcase-cta" data-link>This could be your clinic &rarr;</a>
          </div>

          <div class="showcase-frame-wrap">
            <div class="browser-chrome">
              <div class="browser-bar">
                <span class="browser-dot red"></span>
                <span class="browser-dot yellow"></span>
                <span class="browser-dot green"></span>
                <span class="browser-url">raniawomenswellness.ae</span>
              </div>
              <div class="browser-body">
                <div class="demo-site womens">

                  <!-- WOMENS NAV -->
                  <header class="demo-nav womens-nav">
                    <span class="demo-logo womens-logo">Dr. Rania Al Zahra</span>
                    <nav class="demo-navlinks womens-links">
                      <a>Home</a><a>Services</a><a>About</a><a>Contact</a>
                    </nav>
                  </header>

                  <!-- WOMENS HERO -->
                  <section class="demo-hero womens-hero">
                    <div class="demo-hero-content">
                      <p class="demo-eyebrow womens-eyebrow">Women's Wellness Clinic, Deira</p>
                      <h2 class="demo-h1 womens-h1">Care designed<br>around you.</h2>
                      <p class="demo-sub womens-sub">Specialist gynaecology and women's health in a warm, private, and welcoming environment.</p>
                      <a class="demo-btn womens-btn">Meet Dr. Rania</a>
                    </div>
                    <div class="womens-hero-deco">
                      <div class="womens-deco-circle c1"></div>
                      <div class="womens-deco-circle c2"></div>
                      <div class="womens-deco-circle c3"></div>
                    </div>
                  </section>

                  <!-- WOMENS SERVICES -->
                  <section class="demo-section womens-section-bg">
                    <p class="demo-section-label womens-label">Our Services</p>
                    <h3 class="demo-section-title womens-title">Comprehensive women's health</h3>
                    <div class="demo-services-grid womens-services">
                      <div class="demo-service-card womens-card">
                        <span class="womens-service-dot"></span>
                        <strong>Antenatal Care</strong>
                        <p>Complete pregnancy guidance from your first trimester to delivery.</p>
                      </div>
                      <div class="demo-service-card womens-card">
                        <span class="womens-service-dot"></span>
                        <strong>Gynaecological Consultations</strong>
                        <p>Confidential, compassionate care for all gynaecological concerns.</p>
                      </div>
                      <div class="demo-service-card womens-card">
                        <span class="womens-service-dot"></span>
                        <strong>Fertility Consultations</strong>
                        <p>Supportive assessment and advice for women planning a family.</p>
                      </div>
                      <div class="demo-service-card womens-card">
                        <span class="womens-service-dot"></span>
                        <strong>General Women's Health</strong>
                        <p>Routine screenings, health checks and preventive care.</p>
                      </div>
                    </div>
                  </section>

                  <!-- WOMENS ABOUT -->
                  <section class="demo-section" style="background:#fff9f7;">
                    <div style="display:flex;gap:20px;align-items:flex-start;">
                      <div class="womens-about-avatar">
                        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:36px;height:36px;">
                          <circle cx="30" cy="22" r="10" fill="#c2778a" fill-opacity="0.3"/>
                          <path d="M10 54c0-11.046 8.954-20 20-20s20 8.954 20 20" stroke="#c2778a" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                      </div>
                      <div>
                        <p class="demo-section-label womens-label">About the Doctor</p>
                        <h3 class="demo-section-title womens-title" style="margin-bottom:10px;">Dr. Rania Al Zahra</h3>
                        <p style="font-size:0.78rem;color:#7a506b;line-height:1.6;">With over 15 years of experience in gynaecology and obstetrics, Dr. Rania trained at University College London before returning to the UAE. She is committed to providing compassionate, evidence-based care in a private and respectful setting.</p>
                      </div>
                    </div>
                  </section>

                  <!-- WOMENS REASSURANCE -->
                  <section class="demo-section womens-section-bg" style="text-align:center;">
                    <div class="womens-reassurance">
                      <span class="womens-reassurance-icon">&#10084;</span>
                      <h3 class="womens-title" style="margin:8px 0;">Your privacy and comfort are our priority</h3>
                      <p style="font-size:0.78rem;color:#7a506b;max-width:340px;margin:0 auto;">Every consultation is fully confidential. Our clinic is designed to be a calm, private space where you feel completely at ease.</p>
                    </div>
                  </section>

                  <!-- WOMENS CONTACT -->
                  <section class="demo-section" style="background:#fff9f7;">
                    <p class="demo-section-label womens-label">Contact Us</p>
                    <h3 class="demo-section-title womens-title" style="margin-bottom:12px;">Book your consultation</h3>
                    <p class="demo-contact-detail" style="color:#7a506b;">Al Rigga Medical District, Deira, Dubai</p>
                    <p class="demo-contact-detail" style="color:#7a506b;">+971 04 000 0003</p>
                    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px;">
                      <a class="demo-btn womens-btn">Call Us</a>
                      <a class="demo-btn womens-btn-wa">WhatsApp</a>
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div><!-- end showcase-outer -->

    <!-- ══════════════════════════════════════════════════════ -->
    <!-- FINAL CTA -->
    <!-- ══════════════════════════════════════════════════════ -->
    <section class="showcase-final-cta cta-section">
      <div class="container" style="text-align:center;">
        <span class="section-label">Your Clinic</span>
        <h2>Your clinic could look like this.</h2>
        <p>Every website we build is designed specifically for your specialty, your patients, and your location. Built in 3 days. Managed for you every month.</p>
        <div class="hero-ctas">
          <a href="/plans" class="btn btn-primary" data-link>See Our Plans</a>
          <a href="${WA_URL}" target="_blank" class="btn btn-secondary">WhatsApp Us</a>
        </div>
      </div>
    </section>
  `
}

// ─── Contact ──────────────────────────────────────────────────
function Contact() {
  return `
    <section class="section-padding" style="padding-top: 180px;">
      <div class="container contact-grid">
        <div class="contact-info">
          <span class="section-label">Get In Touch</span>
          <h1>Let's get your<br>clinic online.</h1>
          <p class="body-text">We're based in Dubai and work with clinics across the UAE. The fastest way to reach us is WhatsApp. WhatsApp us or fill in the form and we will get back to you as soon as we can.</p>

          <div class="contact-methods">
            <a href="${WA_URL}" target="_blank" class="contact-method glass">
              <span class="contact-method-icon">${icons.whatsapp.replace('fill="white"', 'fill="currentColor"')}</span>
              <div>
                <p class="contact-method-label">WhatsApp: fastest response</p>
                <p class="contact-method-value">+971 50 466 8481</p>
              </div>
            </a>
            <div class="contact-method glass">
              <span class="contact-method-icon">${icons.envelope}</span>
              <div>
                <p class="contact-method-label">Email</p>
                <p class="contact-method-value">hellofeatherstudio@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-wrap glass">
          <h3 style="margin-bottom: 8px; font-size: 1.4rem;">Send us an enquiry</h3>
          <p style="color: var(--color-text-dim); font-size: 0.9rem; margin-bottom: 30px;">Prefer to write it out? Fill in the form and we'll get back to you same day.</p>
          <form action="https://formspree.io/f/xeerbbve" method="POST" class="enquiry-form">
            <input type="text" name="name" placeholder="Your name" required class="form-input">
            <input type="text" name="clinic" placeholder="Clinic / Practice name" class="form-input">
            <input type="email" name="email" placeholder="Email address" required class="form-input">
            <textarea name="message" placeholder="Tell us about your clinic and what you need..." rows="5" required class="form-input form-textarea"></textarea>
            <button type="submit" class="btn btn-primary btn-block">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  `
}

// ─── Activate (Hidden Management Plan Page) ─────────────────
function Activate() {
  return `
    <section class="activate-hero">
      <div class="container">
        <div class="activate-card glass">
          <span class="section-label">Management Plan</span>
          <h2>Your website is live.</h2>
          <p>Activate your monthly management plan below to keep your site hosted, updated, and fully managed by us every month.</p>
          
          <div class="activate-price">
            AED 399/month <span style="font-size: 0.9rem; font-weight: 500; opacity: 0.7;">— cancel any time</span>
          </div>

          <div id="paypal-button-container-P-8EU78139GF1282545NHBFUDY"></div>

          <p class="whatsapp-contact">
            Questions? WhatsApp us at <a href="https://wa.me/971504668481">+971 50 466 8481</a>
          </p>
        </div>
      </div>
    </section>
  `
}

// ─── Render ───────────────────────────────────────────────────
function render() {
  const path = window.location.pathname
  const Page = routes[path] || Home

  app.innerHTML = `
    ${Navbar()}
    <main>${Page()}</main>
    ${Footer()}
    ${WhatsAppFAB()}
  `

  initEvents()
  renderPayPalButtons()

  // Fade-in effect for pages
  setTimeout(() => {
    const content = document.getElementById('hero-content')
    if (content) content.classList.add('visible')
  }, 100)

  // Scrolled nav style
  const nav = document.getElementById('main-nav')!
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add('scrolled')
    else nav.classList.remove('scrolled')
  }
  window.removeEventListener('scroll', onScroll)
  window.addEventListener('scroll', onScroll)
}

function loadPayPalSDK(params: string, callback: () => void) {
  const scriptId = 'paypal-sdk'
  let script = document.getElementById(scriptId) as HTMLScriptElement

  const onScriptLoad = () => {
    // @ts-ignore
    if (window.paypal) callback()
    else {
      // Retry in case of slow execution
      setTimeout(() => {
        // @ts-ignore
        if (window.paypal) callback()
      }, 100)
    }
  }

  if (script) {
    // @ts-ignore
    if (window.paypal) {
      callback()
    } else {
      // Script exists but not loaded yet. Add to list of listeners.
      script.addEventListener('load', onScriptLoad)
    }
    return
  }

  script = document.createElement('script')
  script.id = scriptId
  // Combine core params with whatever is passed
  script.src = `https://www.paypal.com/sdk/js?client-id=ATdtILYx2T5yoKB9AH86nDYMlD4bQ1PnOk_y_SOL3b42qP2E3nTfHlxL1KLFLu9w7Ao9jhTYvk4jfhEB&${params}`
  script.setAttribute('data-sdk-integration-source', 'button-factory')
  script.addEventListener('load', onScriptLoad)
  document.head.appendChild(script)
}

function renderPayPalButtons() {
  const path = window.location.pathname

  // Subscription Button on /activate (untouched)
  if (path === '/activate') {
    const containerSub = document.getElementById('paypal-button-container-P-8EU78139GF1282545NHBFUDY')
    if (containerSub && containerSub.children.length === 0) {
      loadPayPalSDK('vault=true&intent=subscription', () => {
        // @ts-ignore
        window.paypal.Buttons({
          style: {
            shape: 'rect',
            color: 'blue',
            layout: 'vertical',
            label: 'paypal'
          },
          createSubscription: function(_data: any, actions: any) {
            return actions.subscription.create({
              plan_id: 'P-8EU78139GF1282545NHBFUDY'
            });
          },
          onApprove: function(_data: any, _actions: any) {
            alert('Thank you! Your management plan is now active. We will be in touch shortly.');
          }
        }).render(containerSub);
      })
    }
  }
}

function initEvents() {
  document.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const href = (link as HTMLAnchorElement).getAttribute('href')
      if (href) navigate(href)
    })
  })

  // Theme Toggle
  const toggleBtn = document.getElementById('theme-toggle')
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', currentTheme)
      localStorage.setItem('theme', currentTheme)
      toggleBtn.textContent = currentTheme === 'light' ? '🌙' : '☀️'
    })
  }

  // Showcase Scroll Spy & Smooth Scroll
  const dots = document.querySelectorAll('.showcase-dot')
  if (dots.length > 0) {
    // Smooth scroll for dots
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = (dot as HTMLAnchorElement).getAttribute('href')
        const targetEl = document.querySelector(targetId!)
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })

    // Intersection Observer for scroll spy
    const observerOptions = {
      root: null,
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          dots.forEach(dot => {
            dot.classList.toggle('active', dot.getAttribute('href') === `#${id}`)
          })
        }
      })
    }, observerOptions)

    document.querySelectorAll('.showcase-clinic').forEach(section => {
      observer.observe(section)
    })
  }
}

render()
