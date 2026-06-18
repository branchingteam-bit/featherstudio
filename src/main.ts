import './style.css';

// ─── Utilities ───────────────────────────────────────────────────────────────
const $ = (sel: string, ctx: Document | Element = document) =>
  ctx.querySelector<HTMLElement>(sel);
const $$ = (sel: string, ctx: Document | Element = document) =>
  [...ctx.querySelectorAll<HTMLElement>(sel)];

const AED_TO_USD = 0.2723;
const aedUsd = (aed: number) =>
  `<span class="price-usd">approx. $${(aed * AED_TO_USD).toFixed(0)} USD</span>`;

// ─── Icons ───────────────────────────────────────────────────────────────────
const Icons = {
  arrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/></svg>`,
  check: `<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1.5,5.5 3.8,8 8.5,2"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.69 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.69A2 2 0 0122 16.92z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  rocket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2 .27-2.98-.31-3.5c-.56-.52-1.43-.8-2.69.5z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
};

const CheckIcon = () =>
  `<span class="check-icon">${Icons.check}</span>`;

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar(): string {
  return `
  <nav class="nav" id="main-nav">
    <a href="/" class="logo" data-link="home" id="logo-btn">
      <span class="logo-wordmark">Atlantic</span>
      <img src="/atlanticbear-logo.png" alt="Atlantic Bear Logo" class="logo-bear-img" width="42" height="42" />
    </a>
    <div class="nav-links">
      <a href="/" class="nav-link" data-link="home"    id="nav-home">Home</a>
      <a href="/level1" class="nav-link" data-link="level1"  id="nav-l1">Level 1</a>
      <a href="/level2" class="nav-link" data-link="level2"  id="nav-l2">Level 2</a>
      <a href="/contact" class="nav-link" data-link="contact" id="nav-contact">Contact</a>
    </div>
    <div class="nav-actions">
      <a href="/contact" class="btn btn-secondary btn-sm" data-link="contact" id="nav-contact-cta">Contact</a>
      <a href="/level2" class="btn btn-dark btn-sm" data-link="level2" id="nav-start-cta">Get started ${Icons.arrow}</a>
    </div>
  </nav>`;
}


// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer(): string {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="logo" data-link="home">
            <span class="logo-wordmark">Atlantic</span>
            <img src="/atlanticbear-logo.png" alt="Atlantic Bear Logo" class="footer-bear-img" width="28" height="28" />
          </a>
          <p>Professional websites for businesses across the UAE.</p>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <div class="footer-links">
            <a href="/" data-link="home">Home</a>
            <a href="/level1" data-link="level1">Level 1</a>
            <a href="/level2" data-link="level2">Level 2</a>
            <a href="/contact" data-link="contact">Contact</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-links">
            <a href="mailto:officialatlanticbear@gmail.com">officialatlanticbear@gmail.com</a>
            <a href="https://www.instagram.com/officialatlanticbear/" target="_blank">@officialatlanticbear</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Atlantic Bear. All rights reserved.</span>
        <span>Dubai, UAE</span>
      </div>
    </div>
  </footer>`;
}

// ─── Home Page ───────────────────────────────────────────────────────────────
function HomePage(): string {
  // Build marquee items (duplicated 4 times for seamless infinite loop)
  const marqueeItems = [
    { num: '3 Days', desc: 'From kick-off to live' },
    { num: '100%', desc: 'Mobile responsive' },
    { num: 'Fully Custom', desc: 'No templates, ever' },
    { num: '3+ Years', desc: 'Building in the UAE' },
    { num: '81%', desc: 'Of customers research online first' },
    { num: 'SEO Ready', desc: 'Google-optimised from day one' },
  ];

  const buildMarqueeSet = () => marqueeItems.map(item =>
    `<span class="marquee-badge"><span class="marquee-num">${item.num}</span><span class="marquee-desc">${item.desc}</span></span><span class="marquee-sep">·</span>`
  ).join('');

  // 4 copies for a seamless infinite belt
  const marqueeInner = buildMarqueeSet() + buildMarqueeSet() + buildMarqueeSet() + buildMarqueeSet();

  return `
  <!-- HERO -->
  <section class="hero" style="position: relative; overflow: hidden;">
    <img src="/atlanticbear-logo.png" class="huge-bear" alt="Atlantic Bear Watermark" fetchpriority="high" width="600" height="600" />
    <div class="container" style="position: relative; z-index: 1;">
      <h1>Your business deserves<br>to be found.</h1>
      <p class="hero-sub">
        We design, build, and launch custom websites for UAE businesses — clean layouts, ultra-fast speeds, built to grow your brand.
      </p>
      <div class="hero-ctas">
        <a href="/level2" class="btn btn-dark btn-large" data-link="level2" id="hero-cta-start">
          Start a project ${Icons.arrow}
        </a>
        <a href="/contact" class="btn btn-secondary btn-large" data-link="contact" id="hero-cta-work">
          Talk to us
        </a>
      </div>
      <p class="hero-note">Not sure which plan? <a href="/contact" data-link="contact">Contact us</a></p>
    </div>
  </section>

  <!-- MARQUEE BELT -->
  <div class="marquee-belt">
    <div class="marquee-track">
      <div class="marquee-inner" aria-hidden="true">
        ${marqueeInner}
      </div>
    </div>
  </div>

  <!-- COMPETITOR BANNER -->
  <section class="competitor-banner">
    <div class="container">
      <p class="competitor-banner-text">Your competitor's website is getting your clients. <strong>Let's fix that.</strong></p>
    </div>
  </section>

  <!-- THE PROBLEM SECTION -->
  <section class="problem-section">
    <div class="container">
      <h2 class="problem-headline">
        Every day without a website is a customer you <span class="text-blue">didn't know you lost</span>.
      </h2>
      <div class="problem-grid">
        <div class="problem-card">
          <h3>They searched. They didn't find you.</h3>
          <p>
            Most people look up a business online before they visit or call. If nothing comes up, or what comes up looks bad, they move on. Simple as that.
          </p>
        </div>
        <div class="problem-card">
          <h3>Your competitor got the client. Not you.</h3>
          <p>
            When two similar businesses show up online and one has a clean professional website, the choice is obvious. Customers always go with whoever looks more trustworthy.
          </p>
        </div>
        <div class="problem-card">
          <h3>You don't have time to deal with this.</h3>
          <p>
            You're running a business. Building a website, figuring out hosting, dealing with technical problems, that's not why you got into this. It shouldn't be your problem.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- THE FACTS SECTION -->
  <section class="facts-section">
    <div class="container">
      <h2 class="facts-headline">The numbers don't lie.</h2>

      <!-- Two big hero stats side by side -->
      <div class="facts-heroes-row">
        <div class="fact-hero-block fact-hero-dark">
          <div class="fact-hero-num">81<span class="fact-hero-pct">%</span></div>
          <div class="fact-hero-label">Of customers research online before buying or visiting a business.</div>
          <div class="fact-hero-desc">If they can't find you, they will find your competitor. It's that simple.</div>
        </div>
        <div class="fact-hero-block fact-hero-light">
          <div class="fact-hero-num fact-hero-num-dark">40<span class="fact-hero-pct fact-hero-pct-dark">%</span></div>
          <div class="fact-hero-label fact-hero-label-dark">Of your Google Business Profile performance is driven by your website.</div>
          <div class="fact-hero-desc fact-hero-desc-dark">Your website directly affects your position on Google Maps. A weak site pushes you down the list.</div>
        </div>
      </div>

      <!-- Smaller stats row -->
      <div class="facts-stats-row">
        <div class="facts-stat-block">
          <div class="facts-stat-num">75%</div>
          <div class="facts-stat-text">Of people judge a company's credibility based entirely on website design</div>
        </div>
        <div class="facts-stat-divider"></div>
        <div class="facts-stat-block">
          <div class="facts-stat-num">57%</div>
          <div class="facts-stat-text">Of users won't recommend a business with a poorly designed mobile website</div>
        </div>
        <div class="facts-stat-divider"></div>
        <div class="facts-stat-block">
          <div class="facts-stat-num">2x</div>
          <div class="facts-stat-text">Faster growth for businesses with a strong professional online presence</div>
        </div>
      </div>
    </div>
  </section>

  <!-- TOOLS WE USE SECTION -->
  <section class="tools-section">
    <div class="container">
      <div class="tools-header">
        <h2>The Tech Behind the Speed</h2>
        <p>We build using cutting-edge tools to deliver beautiful, fast user experiences backed by clean code.</p>
      </div>
      
      <!-- Stitch Row -->
      <div class="tool-showcase-row">
        <div class="tool-text-content">
          <h3>Stitch</h3>
          <p>We use Stitch to design the website layout and user interface from scratch — guaranteeing a bespoke, modern aesthetic designed specifically for your brand before any code is written.</p>
        </div>
        <div class="tool-large-img-wrap">
          <img class="tool-large-img" src="/screenshots/stitch.png" alt="Stitch Interface" width="800" height="500" loading="lazy" />
        </div>
      </div>
      
      <!-- Antigravity Row -->
      <div class="tool-showcase-row alt">
        <div class="tool-large-img-wrap">
          <img class="tool-large-img" src="/screenshots/antigravity.png" alt="Antigravity IDE" width="800" height="500" loading="lazy" />
        </div>
        <div class="tool-text-content">
          <h3>Google Antigravity</h3>
          <p>We use Google Antigravity to write and optimize clean, production-ready code — so your website loads instantly, operates securely, and works perfectly on every device.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TIER TEASERS SECTION -->
  <section class="teasers-section">
    <div class="container">
      <div class="teasers-header">
        <h2>Choose Your Level</h2>
        <p>Two plans. Built for where your business actually is right now.</p>
      </div>
      <div class="teasers-grid">

        <!-- Level 1 -->
        <div class="teaser-card level-one-card">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">01</span>
            <span class="teaser-level-name">Level One</span>
          </div>
          <h3>Small Business</h3>
          <p class="teaser-pitch">You need to look professional online, get found, and make it easy for customers to reach you — without a big investment.</p>
          <div class="teaser-price">
            <div class="teaser-price-main">AED 1,450</div>
            <div class="teaser-price-sub">one-time &nbsp;·&nbsp; or AED 150/mo managed</div>
          </div>
          <div class="teaser-pills">
            <span class="teaser-pill">Café</span>
            <span class="teaser-pill">Salon</span>
            <span class="teaser-pill">Retail shop</span>
            <span class="teaser-pill">Kiosk</span>
          </div>
          <a href="/level1" class="teaser-btn teaser-btn-dark" data-link="level1" id="home-l1-cta">
            Explore Level 1 ${Icons.arrow}
          </a>
        </div>

        <!-- Level 2 -->
        <div class="teaser-card level-two-card">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">02</span>
            <span class="teaser-level-name">Level Two · Most Popular</span>
          </div>
          <h3>Professional</h3>
          <p class="teaser-pitch">Your business depends on trust. Patients, clients, and customers need to feel confident before they book. This site does that work for you.</p>
          <div class="teaser-price">
            <div class="teaser-price-main">AED 2,950</div>
            <div class="teaser-price-sub">one-time &nbsp;·&nbsp; or AED 300/mo managed</div>
          </div>
          <div class="teaser-pills">
            <span class="teaser-pill">Clinic</span>
            <span class="teaser-pill">Dental practice</span>
            <span class="teaser-pill">Law firm</span>
            <span class="teaser-pill">Consultant</span>
          </div>
          <a href="/level2" class="teaser-btn teaser-btn-outline" data-link="level2" id="home-l2-cta">
            Explore Level 2 ${Icons.arrow}
          </a>
        </div>

      </div>

      <!-- The real difference -->
      <div class="real-diff-block reveal">
        <div class="real-diff-side">
          <div class="real-diff-tag tag-one">Level 1</div>
          <h4>Level 1 is about being <em>found</em></h4>
          <p>A customer walks past your café or sees your shop. They Google you before coming in. Level 1 makes sure they find a clean, professional site — and tap to WhatsApp you immediately.</p>
        </div>
        <div class="real-diff-divider"></div>
        <div class="real-diff-side">
          <div class="real-diff-tag tag-two">Level 2</div>
          <h4>Level 2 is about being <em>trusted</em></h4>
          <p>Someone needs a dentist or lawyer. They spend 10 minutes reading about you before they ever call. Level 2 gives them the team page, the credentials, the reviews, and the reassurance they need to book.</p>
        </div>
      </div>
      <p class="real-diff-note">Not sure which level? <strong>Start with Level 1</strong> — you can always upgrade later and we credit previous payments toward your new plan.</p>

    </div>
  </section>
  `;
}

// ─── Pricing Card Builder ─────────────────────────────────────────────────────
function PricingCard(opts: {
  label: string;
  price: string;
  priceAed: number;
  period?: string;
  setupFee?: string;
  setupAed?: number;
  desc: string;
  features: string[];
  ctaId: string;
  managed?: boolean;
  note?: string;
  paypalHtml?: string;
}): string {
  return `
  <div class="pricing-card${opts.managed ? ' managed' : ''}">
    ${opts.managed ? '<div class="managed-badge">Recommended</div>' : ''}
    <div class="pricing-card-top">
      <div class="plan-label">${opts.label}</div>
      ${opts.setupFee ? `
        <div class="price-setup-note">Setup: <strong>${opts.setupFee}</strong> ${opts.setupAed ? aedUsd(opts.setupAed) : ''}</div>
      ` : ''}
      <div class="price-display">
        <span class="price-big">${opts.price}</span>
        ${opts.period ? `<span class="price-period">${opts.period}</span>` : ''}
      </div>
      ${!opts.setupFee ? aedUsd(opts.priceAed) : aedUsd(opts.priceAed)}
      <p class="plan-desc">${opts.desc}</p>
    </div>
    <div class="pricing-card-cta">
      ${opts.paypalHtml ? opts.paypalHtml : `<a href="/contact" class="btn btn-dark btn-block btn-large" data-link="contact" id="${opts.ctaId}">Get started ${Icons.arrow}</a>`}
      ${opts.note ? `<p style="font-size:0.75rem; color:var(--text-muted); margin-top:10px; text-align:center;">${opts.note}</p>` : ''}
    </div>
    <div class="pricing-card-features">
      <div class="features-label">What's included</div>
      ${opts.features.map(f => `<div class="feature-row">${CheckIcon()}<span>${f}</span></div>`).join('')}
      ${opts.managed ? `
        <div class="no-contract-note">
          <strong>No lock-in contracts</strong>
          Minimum 3 months. Cancel anytime after that, we hand over all files cleanly.
        </div>
      ` : ''}
    </div>
  </div>`;
}

// ─── Level 1 Page ────────────────────────────────────────────────────────────
function Level1Page(): string {
  return `
  <!-- PAGE HEADER -->
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="section-label">Level 1 · Small Business</div>
      <h1>Great websites for growing businesses</h1>
      <p>For kiosks, cafes, salons, retail shops, and anyone who wants to look
      professional online without a large budget.</p>
    </div>
  </div>

  <!-- PRICING -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Pricing</div>
        <h2 class="section-title">Choose your plan</h2>
        <p class="section-sub">Both plans include a fully custom-designed website. Pick the one that suits how you want to work.</p>
      </div>
      <div class="pricing-cards-row reveal">
        ${PricingCard({
          label: 'One-Time',
          price: 'AED 1,450',
          priceAed: 1450,
          desc: 'Pay once, own your website forever. You get all files, the domain, and full control. No recurring fees.',
          features: [
            'Fully custom-designed website',
            'Up to 5 pages included',
            'Mobile responsive layout',
            'Basic SEO setup',
            'Email and contact form options',
            'Contact form',
            'Handoff within 7 to 14 days',
            'Source files included',
          ],
          ctaId: 'l1-ot-cta',
          note: 'Includes one round of revisions. Additional pages at AED 150/page.',
          paypalHtml: `<div class="paypal-btn-wrap" id="paypal-capture-container-l1"></div>`,
        })}
        ${PricingCard({
          label: 'Managed Plan',
          price: 'AED 150',
          priceAed: 150,
          period: '/month',
          setupFee: 'AED 1,000',
          setupAed: 1000,
          desc: 'We build it, manage it, and keep it running. You focus on your business, we handle everything online.',
          features: [
            'Full custom design and build',
            'Up to 5 pages included',
            'Domain and hosting managed by us',
            'Email and contact form support',
            'Mobile responsive layout',
            'Basic SEO optimisation',
            'Monthly content updates (1 round)',
            'Priority support via Email',
          ],
          ctaId: 'l1-managed-cta',
          managed: true,
          paypalHtml: `<div class="paypal-btn-wrap" id="paypal-button-container-P-97W753789S6299227NIEYJ3Y"></div>`,
        })}
      </div>
    </div>
  </section>
 
  <!-- FEATURES -->
  <section class="section-pad" style="background:var(--surface); border-top:1px solid var(--border);">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Features</div>
        <h2 class="section-title">Built for business, not just looks</h2>
      </div>
      <div class="feature-grid">
        ${[
          { icon: Icons.palette, title: 'Custom Design', desc: 'No templates. Every site is built from scratch to match your brand, colours, and vibe.' },
          { icon: Icons.zap, title: 'Fast Delivery', desc: 'Your site is live within 7 to 14 business days from when we agree on the brief.' },
          { icon: Icons.globe, title: 'Mobile First', desc: 'Looks great on phones, tablets, and desktops. Most of your visitors are on mobile.' },
          { icon: Icons.shield, title: 'SEO Ready', desc: 'Proper page titles, meta descriptions, and structured code so Google can find you.' },
          { icon: Icons.mail, title: 'Email Support', desc: 'An integrated contact form and direct email connection on every page.' },
          { icon: Icons.wrench, title: 'Low Maintenance', desc: 'Clean builds that just work. Perfect for business owners who want to focus on running their business.' },
        ]
          .map(f => `<div class="feature-item reveal">
            <div class="feature-icon-wrap">${f.icon}</div>
            <h3>${f.title}</h3>
            <p>${f.desc}</p>
          </div>`)
          .join('')}
      </div>
    </div>
  </section>
 
  <!-- FAQ -->
  <section class="section-pad" style="border-top:1px solid var(--border);">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">FAQ</div>
        <h2 class="section-title">Common questions</h2>
      </div>
      <div class="faq-list reveal">
        ${[
          {
            q: 'Who is Level 1 for?',
            a: 'Kiosks, cafes, retail shops, salons, small workshops. Any business that wants a professional online presence without a large budget.',
          },
          {
            q: 'Do I own the website after the one-time purchase?',
            a: 'Yes, completely. We hand over all the files and you can host it wherever you want. We\'re also happy to help with hosting setup at no extra cost.',
          },
          {
            q: 'What do I need to provide?',
            a: 'Your logo (or we\'ll suggest options), photos of your business or products, and a short description of what you do. We\'ll handle the rest.',
          },
          {
            q: 'Can I upgrade to Level 2 later?',
            a: 'Absolutely. If your business grows and you need more features, we can rebuild or expand your site. Previous payments are credited where applicable.',
          },
        ]
          .map(f => `<div class="faq-item"><h3>${f.q}</h3><p>${f.a}</p></div>`)
          .join('')}
      </div>
    </div>
  </section>
 
  <section class="cta-section">
    <div class="container">
      <h2>Start with Level 1</h2>
      <p>A website your customers will trust, at a price that makes sense.</p>
      <div class="cta-ctas">
        <a href="/contact" class="btn btn-dark btn-large" data-link="contact" id="l1-footer-cta">
          Talk to us ${Icons.arrow}
        </a>
      </div>
    </div>
  </section>`;
}

// ─── Level 2 Page ────────────────────────────────────────────────────────────
function Level2Page(): string {
  return `
  <!-- PAGE HEADER -->
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="section-label">Level 2 · Professional</div>
      <h1>Websites built for serious businesses</h1>
      <p>For clinics, dental practices, law firms, and professional services that
      need a website that earns trust and drives real enquiries.</p>
    </div>
  </div>

  <!-- PRICING -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Pricing</div>
        <h2 class="section-title">Choose your plan</h2>
        <p class="section-sub">Both plans include everything you need. The managed plan is our most popular, we handle it all.</p>
      </div>
      <div class="pricing-cards-row reveal">
        ${PricingCard({
          label: 'One-Time',
          price: 'AED 2,950',
          priceAed: 2950,
          desc: 'Pay once and own a full professional website. Ideal for established businesses who want complete control.',
          features: [
            'Fully custom professional design',
            'Up to 10 pages included',
            'Contact form integration',
            'Team and credentials profiles',
            'Services and treatment layouts',
            'Testimonials and trust badges',
            'Solid local SEO configuration',
            'Google Maps setup',
            'Source files handover',
          ],
          ctaId: 'l2-ot-cta',
          note: 'Includes two rounds of revisions. Additional pages at AED 200/page.',
          paypalHtml: `<div class="paypal-btn-wrap" id="paypal-capture-container-l2"></div>`,
        })}
        ${PricingCard({
          label: 'Managed Plan',
          price: 'AED 300',
          priceAed: 300,
          period: '/month',
          setupFee: 'AED 2,200',
          setupAed: 2200,
          desc: 'Full-service management. We design, build, host, and maintain your site so you can focus entirely on your clients.',
          features: [
            'Full custom professional design and setup',
            'Up to 10 pages built for conversion',
            'Domain renewal and professional management',
            'Secure cloud hosting and daily backups',
            'SSL monitoring and active protection',
            'Good local SEO and Google profile setup',
            'Regular content updates (up to 2/month)',
            'Seasonal campaign support (on request)',
            'Priority email support',
          ],
          ctaId: 'l2-managed-cta',
          managed: true,
          paypalHtml: `<div class="paypal-btn-wrap" id="paypal-button-container-P-8EU78139GF1282545NHBFUDY"></div>`,
        })}
      </div>
    </div>
  </section>

  <!-- COMPARISON TABLE -->
  <section class="section-pad" style="background:var(--surface); border-top:1px solid var(--border);">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Compare</div>
        <h2 class="section-title">Level 1 vs Level 2</h2>
        <p class="section-sub">Not sure which is right? Here's a quick side-by-side.</p>
      </div>
      <div class="comparison-wrap reveal">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Level 1</th>
              <th class="hl">Level 2</th>
            </tr>
          </thead>
          <tbody>
            ${[
              ['Pages included', 'Up to 5', 'Up to 10'],
              ['Custom design', 'Yes', 'Yes'],
              ['Mobile responsive', 'Yes', 'Yes'],
              ['Contact form', 'Yes', 'Yes'],
              ['Basic SEO', 'Yes', 'Yes'],
              ['Enhanced local SEO + Google setup', 'No', 'Yes'],
              ['Contact form integration', 'Yes', 'Yes'],
              ['Team and credentials page', 'No', 'Yes'],
              ['Testimonials section', 'No', 'Yes'],
              ['Google Maps integration', 'No', 'Yes'],
              ['Starting price (one-time)', 'AED 1,450', 'AED 2,950'],
              ['Managed plan from', 'AED 150/mo', 'AED 300/mo'],
            ]
              .map(([f, l1, l2]) => `<tr>
                <td>${f}</td>
                <td>${l1}</td>
                <td class="hl">${l2}</td>
              </tr>`)
              .join('')}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="section-pad" style="border-top:1px solid var(--border);">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Features</div>
        <h2 class="section-title">Everything a professional needs</h2>
      </div>
      <div class="feature-grid">
        ${[
          { icon: Icons.palette, title: 'Premium Design', desc: 'Custom layouts that communicate expertise and build trust with every visitor.' },
          { icon: Icons.rocket, title: 'Conversion Focused', desc: 'Built to turn visitors into emails and real leads.' },
          { icon: Icons.globe, title: 'Local SEO', desc: 'Solid local SEO setup including Google Business Profile configuration to help you get found.' },
          { icon: Icons.shield, title: 'Secure Hosting', desc: 'SSL certificates, daily backups, and active uptime monitoring included.' },
          { icon: Icons.mail, title: 'Easy Contact', desc: 'Contact form, email, and Google Maps built directly into your site.' },
          { icon: Icons.code, title: 'Ongoing Updates', desc: 'Managed plan clients get regular content updates — add services, update team bios, change pricing.' },
        ]
          .map(f => `<div class="feature-item reveal">
            <div class="feature-icon-wrap">${f.icon}</div>
            <h3>${f.title}</h3>
            <p>${f.desc}</p>
          </div>`)
          .join('')}
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section-pad" style="background:var(--surface); border-top:1px solid var(--border);">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">FAQ</div>
        <h2 class="section-title">Common questions</h2>
      </div>
      <div class="faq-list reveal">
        ${[
          {
            q: 'Who is Level 2 for?',
            a: 'Clinics, dental practices, law firms, consultants, and established businesses that need a website that actively earns trust and drives real enquiries.',
          },
          {
            q: 'What\'s included in the managed plan?',
            a: 'Everything. Design, build, hosting, SSL, domain, regular content updates, and priority email support. You focus on your business, we handle your site.',
          },
          {
            q: 'Can I request changes after launch?',
            a: 'Yes. Managed plan clients get regular content updates (up to 2 rounds per month). One-time clients can request changes at our standard rate.',
          },
          {
            q: 'How long does it take?',
            a: 'Typically 14 to 21 business days from brief sign-off, depending on how quickly we receive your content.',
          },
        ]
          .map(f => `<div class="faq-item"><h3>${f.q}</h3><p>${f.a}</p></div>`)
          .join('')}
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Build your professional site</h2>
      <p>Your clients are searching online right now. Make sure they find something impressive.</p>
      <div class="cta-ctas">
        <a href="/contact" class="btn btn-dark btn-large" data-link="contact" id="l2-footer-cta">
          Talk to us ${Icons.arrow}
        </a>
      </div>
    </div>
  </section>`;
}

// ─── Our Work Page (kept but hidden from nav) ────────────────────────────────
function WorkPage(): string {
  return `
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="section-label">Portfolio</div>
      <h1>Our Work</h1>
      <p>Coming soon. We're putting together our portfolio. In the meantime, reach out to see what we can build for you.</p>
    </div>
  </div>
  <section class="cta-section">
    <div class="container">
      <h2>Let's build yours</h2>
      <p>Tell us about your business and what you need.</p>
      <div class="cta-ctas">
        <a href="/contact" class="btn btn-dark btn-large" data-link="contact" id="work-cta">
          Get in touch ${Icons.arrow}
        </a>
      </div>
    </div>
  </section>`;
}

// ─── Contact Page ─────────────────────────────────────────────────────────────
function ContactPage(): string {
  return `
  <div class="page-header" style="border-bottom:1px solid var(--border); text-align:left; padding-bottom:0;">
    <div class="container">
      <div class="section-pad">
        <div class="contact-wrap">
          <div class="contact-info reveal">
            <div class="section-label">Contact</div>
            <h1>Let's build<br>something.</h1>
            <p>Tell us about your business or just ask anything. We respond fast, usually within a few hours.</p>
            <div class="contact-methods">
              <a href="mailto:officialatlanticbear@gmail.com" class="contact-method">
                <div class="contact-method-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Icons.mail}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Email</div>
                  <div class="contact-method-value">officialatlanticbear@gmail.com</div>
                </div>
              </a>
              <a href="https://www.instagram.com/officialatlanticbear/" target="_blank" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(225,48,108,.08); color:#e1306c;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Icons.instagram}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Instagram</div>
                  <div class="contact-method-value">@officialatlanticbear</div>
                </div>
              </a>
              <div class="contact-method">
                <div class="contact-method-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Icons.map}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Location</div>
                  <div class="contact-method-value">Dubai, UAE</div>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-card reveal" style="transition-delay:0.1s;">
            <h3>Send us a message</h3>
            <p>We'll get back to you within a few hours.</p>
            
            <div data-fs-success class="fs-success-msg" style="display:none;">
              <div style="font-size:1.2rem; margin-bottom:4px;">✅</div>
              <div style="font-size:0.9rem; font-weight:700; color:var(--navy);">Message sent!</div>
              <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">We'll get back to you within a few hours — usually faster.</div>
            </div>
            <div data-fs-error class="fs-error-msg"></div>

            <form class="enquiry-form" id="contact-form">
              <input class="form-input" id="form-name" name="name" type="text" placeholder="Your name" required data-fs-field />
              <span data-fs-error="name" class="fs-field-error"></span>
              <input class="form-input" id="form-email" name="email" type="email" placeholder="Email address" required data-fs-field />
              <span data-fs-error="email" class="fs-field-error"></span>
              <input class="form-input" id="form-business" name="business" type="text" placeholder="Business name" data-fs-field />
              <select class="form-input" id="form-tier" name="tier" data-fs-field>
                <option value="">Which plan are you interested in?</option>
                <option value="l1">Level 1 - Small Business</option>
                <option value="l2">Level 2 - Professional</option>
                <option value="unsure">Not sure yet</option>
              </select>
              <textarea class="form-input form-textarea" id="form-message" name="message" placeholder="Tell us about your business and what you need..." required data-fs-field></textarea>
              <span data-fs-error="message" class="fs-field-error"></span>
              <button type="submit" class="btn btn-dark btn-block btn-large" id="form-submit-btn" data-fs-submit-btn>
                Send message ${Icons.arrow}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// ─── Router ───────────────────────────────────────────────────────────────────
type Page = 'home' | 'level1' | 'level2' | 'work' | 'contact';

const pageMap: Record<Page, () => string> = {
  home:    HomePage,
  level1:  Level1Page,
  level2:  Level2Page,
  work:    WorkPage,
  contact: ContactPage,
};

const pageMeta: Record<Page, { title: string; desc: string }> = {
  home: {
    title: 'Atlantic Bear | Professional Websites for UAE Businesses. Live in 3 Days.',
    desc: 'Atlantic Bear designs, builds, and launches custom professional websites for UAE businesses. Clean layouts, ultra-fast speeds, built to grow your brand. Live in 3 days, fully managed.'
  },
  level1: {
    title: 'Level 1 Plan: Custom Websites for UAE Small Businesses | Atlantic Bear',
    desc: 'Affordable, custom-designed websites for cafés, salons, kiosks, and retail shops in the UAE. Get found online and get direct WhatsApp leads. Live in 7-14 days.'
  },
  level2: {
    title: 'Level 2 Plan: Professional Websites for UAE Practices & Clinics | Atlantic Bear',
    desc: 'Premium websites built to earn trust for clinics, law firms, dental practices, and consultants in Dubai & UAE. Local SEO and full management included.'
  },
  work: {
    title: 'Our Work | Atlantic Bear Portfolio',
    desc: 'Explore custom websites designed and developed for UAE businesses. Professional layouts, mobile optimization, and fast load times.'
  },
  contact: {
    title: 'Contact Atlantic Bear | Start Your UAE Website Project',
    desc: 'Get in touch with Atlantic Bear. Let\'s discuss your business website needs. Fast response and custom layouts in Dubai & UAE.'
  }
};

function updateMetadata(page: Page) {
  const meta = pageMeta[page] || pageMeta.home;
  document.title = meta.title;
  
  // Update meta description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', meta.desc);

  // Update canonical link
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  const canonicalUrl = `${window.location.origin}${page === 'home' ? '' : '/' + page}`;
  canonicalTag.setAttribute('href', canonicalUrl);

  // Update OpenGraph tags
  const ogTags = {
    'og:title': meta.title,
    'og:description': meta.desc,
    'og:url': canonicalUrl,
    'og:type': 'website',
    'og:image': `${window.location.origin}/logo.png`
  };

  for (const [property, content] of Object.entries(ogTags)) {
    let ogTag = document.querySelector(`meta[property="${property}"]`);
    if (!ogTag) {
      ogTag = document.createElement('meta');
      ogTag.setAttribute('property', property);
      document.head.appendChild(ogTag);
    }
    ogTag.setAttribute('content', content);
  }

  // Update Twitter Card tags
  const twitterTags = {
    'twitter:card': 'summary_large_image',
    'twitter:title': meta.title,
    'twitter:description': meta.desc,
    'twitter:image': `${window.location.origin}/logo.png`
  };

  for (const [name, content] of Object.entries(twitterTags)) {
    let twitterTag = document.querySelector(`meta[name="${name}"]`);
    if (!twitterTag) {
      twitterTag = document.createElement('meta');
      twitterTag.setAttribute('name', name);
      document.head.appendChild(twitterTag);
    }
    twitterTag.setAttribute('content', content);
  }
}

function getPageFromPath(path: string): Page {
  const cleanPath = path.replace(/^\/|\/$/g, '');
  if (cleanPath === 'level1' || cleanPath === 'level2' || cleanPath === 'work' || cleanPath === 'contact') {
    return cleanPath as Page;
  }
  return 'home';
}

function setActiveNav(page: Page) {
  $$('[data-link]').forEach(el => el.classList.remove('active'));
  const link = $(`[data-link="${page}"].nav-link`);
  if (link) link.classList.add('active');
}

function scrollReveal() {
  const targets = $$('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        (e.target as HTMLElement).classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
  targets.forEach(t => obs.observe(t));
}

function initFormspree() {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  if (!form) return;

  // Initialize formspree ajax
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@formspree/ajax@1';
  script.defer = true;
  document.head.appendChild(script);

  // Use the formspree global once it's loaded
  script.onload = () => {
    if ((window as any).formspree) {
      (window as any).formspree('initForm', { formElement: '#contact-form', formId: 'mykanvrr' });
    }
  };

  // Fallback: also handle it manually with fetch for reliability
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('form-submit-btn') as HTMLButtonElement;
    const successEl = document.querySelector('[data-fs-success]') as HTMLElement;
    const errorEl = document.querySelector('[data-fs-error]:not([data-fs-error="name"]):not([data-fs-error="email"]):not([data-fs-error="message"])') as HTMLElement;

    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending...';
    }

    try {
      const data = new FormData(form);
      const res = await fetch('https://formspree.io/f/mykanvrr', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        form.style.display = 'none';
        if (successEl) {
          successEl.style.display = 'block';
          successEl.style.textAlign = 'center';
          successEl.style.padding = '18px';
          successEl.style.background = 'rgba(62,207,142,.07)';
          successEl.style.borderRadius = '10px';
          successEl.style.border = '1px solid rgba(62,207,142,.20)';
        }
      } else {
        throw new Error('Server error');
      }
    } catch {
      if (errorEl) {
        errorEl.textContent = 'Something went wrong. Please try again or email officialatlanticbear@gmail.com.';
        errorEl.style.color = 'var(--red)';
        errorEl.style.fontSize = '0.85rem';
        errorEl.style.marginTop = '8px';
      }
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Try again';
      }
    }
  });
}

function navigate(page: Page, pushHistory = true) {
  const main = $('#main-content')!;
  main.style.opacity = '0';
  main.style.transform = 'translateY(8px)';

  setTimeout(() => {
    main.innerHTML = pageMap[page]();
    setActiveNav(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
    main.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    requestAnimationFrame(() => {
      main.style.opacity = '1';
      main.style.transform = 'translateY(0)';
    });
    scrollReveal();

    if (page === 'contact') {
      initFormspree();
    }

    // Load PayPal subscription buttons if present
    if (page === 'level1') {
      loadPayPalSubscriptionButton('paypal-button-container-P-97W753789S6299227NIEYJ3Y', 'P-97W753789S6299227NIEYJ3Y');
      loadPayPalOrderButton('paypal-capture-container-l1', 395.00);
    }
    if (page === 'level2') {
      loadPayPalSubscriptionButton('paypal-button-container-P-8EU78139GF1282545NHBFUDY', 'P-8EU78139GF1282545NHBFUDY');
      loadPayPalOrderButton('paypal-capture-container-l2', 803.00);
    }

    updateMetadata(page);

    if (pushHistory) {
      const path = page === 'home' ? '/' : `/${page}`;
      if (window.location.pathname !== path) {
        history.pushState(null, '', path);
      }
    }
  }, 150);
}

// ─── Link delegation ─────────────────────────────────────────────────────────
function delegateLinks(root: HTMLElement) {
  root.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('[data-link]') as HTMLElement | null;
    if (!target) return;

    // Check if it's a normal click (not cmd+click, middle click, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    e.preventDefault();
    const link = target.getAttribute('data-link') as Page;
    if (link && pageMap[link]) {
      navigate(link);
    }
  });
}

// ─── Navbar scroll effect ─────────────────────────────────────────────────────
function initNavScroll() {
  const nav = $('#main-nav');
  if (!nav) return;
  const handler = () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', handler, { passive: true });
}

// ─── Formspree global queue ───────────────────────────────────────────────────
(window as any).formspree = (window as any).formspree || function() {
  ((window as any).formspree.q = (window as any).formspree.q || []).push(arguments);
};

// ─── PayPal unified SDK loader ────────────────────────────────────────────────
// One SDK, one window.paypal, all 4 buttons share it via a queue.
const PAYPAL_CLIENT_ID = 'ATdtILYx2T5yoKB9AH86nDYMlD4bQ1PnOk_y_SOL3b42qP2E3nTfHlxL1KLFLu9w7Ao9jhTYvk4jfhEB';
let _ppReady = false;
const _ppQueue: Array<() => void> = [];

function withPayPal(fn: () => void) {
  if (_ppReady && (window as any).paypal) {
    fn();
    return;
  }
  _ppQueue.push(fn);
  if (document.getElementById('paypal-sdk')) return; // already loading
  const s = document.createElement('script');
  s.id = 'paypal-sdk';
  // vault=true enables subscriptions; no intent= so both createOrder and createSubscription work
  s.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&vault=true&currency=USD&components=buttons`;
  s.onload = () => {
    _ppReady = true;
    _ppQueue.splice(0).forEach(f => f());
  };
  s.onerror = () => {
    // SDK failed to load — show fallback links in all containers
    document.querySelectorAll<HTMLElement>('.pp-loading').forEach(el => {
      el.innerHTML = `<a href="https://www.paypal.com" target="_blank" rel="noopener" class="btn btn-dark btn-block btn-large" style="margin-top:4px;">Pay via PayPal ↗</a>`;
    });
  };
  document.head.appendChild(s);
}

// ─── Subscription button ──────────────────────────────────────────────────────
function loadPayPalSubscriptionButton(containerId: string, planId: string) {
  withPayPal(() => {
    const pp = (window as any).paypal;
    if (!pp?.Buttons) return;
    const container = document.getElementById(containerId);
    if (!container) return;
    container.classList.remove('pp-loading');
    pp.Buttons({
      style: { shape: 'rect', color: 'blue', layout: 'vertical', label: 'subscribe' },
      createSubscription: (_d: any, a: any) => a.subscription.create({ plan_id: planId }),
      onApprove: (d: any) => { alert('Subscription confirmed! ID: ' + d.subscriptionID); },
    }).render('#' + containerId);
  });
}

// ─── One-time order button ────────────────────────────────────────────────────
function loadPayPalOrderButton(containerId: string, amountUSD: number) {
  withPayPal(() => {
    const pp = (window as any).paypal;
    if (!pp?.Buttons) return;
    const container = document.getElementById(containerId);
    if (!container) return;
    container.classList.remove('pp-loading');
    pp.Buttons({
      style: { shape: 'rect', color: 'gold', layout: 'vertical', label: 'buynow' },
      createOrder: (_d: any, a: any) => a.order.create({
        purchase_units: [{ amount: { value: amountUSD.toFixed(2), currency_code: 'USD' } }],
      }),
      onApprove: (_d: any, a: any) => a.order.capture().then(() => {
        container.innerHTML = `<div style="text-align:center;padding:18px;background:rgba(62,207,142,.07);border-radius:10px;border:1px solid rgba(62,207,142,.20);"><div style="font-size:1.5rem;">✅</div><div style="font-weight:700;margin-top:6px;">Payment received!</div><div style="font-size:0.82rem;color:#888;margin-top:4px;">We'll be in touch within a few hours.</div></div>`;
      }),
      onError: (err: any) => {
        console.error('PayPal error', err);
        container.innerHTML = `<div style="text-align:center;padding:12px;font-size:0.85rem;color:#c0392b;">Something went wrong. Please try again or email officialatlanticbear@gmail.com.</div>`;
      },
    }).render('#' + containerId);
  });
}

// ─── Bootstrap ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')!;
  app.innerHTML = `
    ${Navbar()}
    <main id="main-content" style="opacity:1; min-height:100vh;"></main>
    ${Footer()}
  `;

  delegateLinks(app);
  initNavScroll();

  const initialPage = getPageFromPath(window.location.pathname);
  navigate(initialPage, false);

  window.addEventListener('popstate', () => {
    const page = getPageFromPath(window.location.pathname);
    navigate(page, false);
  });
});
