import './style.css';

// ─── Utilities ───────────────────────────────────────────────────────────────
const $ = (sel: string, ctx: Document | Element = document) =>
  ctx.querySelector<HTMLElement>(sel);
const $$ = (sel: string, ctx: Document | Element = document) =>
  [...ctx.querySelectorAll<HTMLElement>(sel)];


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


// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar(): string {
  return `
  <nav class="nav" id="main-nav">
    <a href="/" class="logo" data-link="home" id="logo-btn" aria-label="Atlantic Bear Home">
      <span class="logo-wordmark">Atlantic</span>
      <img src="/atlanticbear-logo.png" alt="Atlantic Bear Logo" class="logo-bear-img" width="42" height="42" fetchpriority="high" />
    </a>
    <div class="nav-links">
      <a href="/" class="nav-link" data-link="home"    id="nav-home">Home</a>
      <a href="/pricing" class="nav-link" data-link="pricing"  id="nav-pricing">Pricing</a>
      <a href="/testimonials" class="nav-link" data-link="testimonials" id="nav-testimonials">Testimonials</a>
      <a href="/contact" class="nav-link" data-link="contact" id="nav-contact">Contact</a>
    </div>
    <div class="nav-actions">
      <a href="/contact" class="btn btn-secondary btn-sm nav-desktop-only" data-link="contact" id="nav-contact-cta">Contact</a>
      <a href="/pricing" class="btn btn-secondary btn-sm nav-mobile-only" data-link="pricing" id="nav-pricing-cta">Pricing</a>
      <a href="/booking" class="btn btn-dark btn-sm" data-link="booking" id="nav-book-cta">Book a Call ${Icons.arrow}</a>
    </div>
  </nav>`;
}


// ─── Footer ──────────────────────────────────────────────────────────────
function Footer(): string {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="logo" data-link="home" aria-label="Atlantic Bear Home">
            <span class="logo-wordmark">Atlantic</span>
            <img src="/atlanticbear-logo.png" alt="Atlantic Bear Logo" class="footer-bear-img" width="28" height="28" />
          </a>
          <p>Professional websites for businesses across the UAE.</p>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <div class="footer-links">
            <a href="/" data-link="home">Home</a>
            <a href="/pricing" data-link="pricing">Pricing</a>
            <a href="/testimonials" data-link="testimonials">Testimonials</a>
            <a href="/booking" data-link="booking">Book a Call</a>
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
    <img src="/huge-bear-watermark.webp" class="huge-bear" alt="Atlantic Bear Watermark" fetchpriority="high" width="600" height="600" />
    <div class="container" style="position: relative; z-index: 1;">
      <h1>Your business deserves<br>to be found.</h1>
      <p class="hero-sub">
        We build custom websites for UAE businesses. Get a free demo of your site before paying to keep it. You run your business, we run your website.
      </p>
      <div class="hero-ctas">
        <a href="/booking" class="btn btn-dark btn-large" data-link="booking" id="hero-cta-book">
          Book a Call ${Icons.arrow}
        </a>
        <a href="/pricing" class="btn btn-secondary btn-large" data-link="pricing" id="hero-cta-plans">
          View Plans
        </a>
      </div>
      <p class="hero-note">See a demo of your website for free. <a href="/booking" data-link="booking">Learn more about our free demo</a></p>
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
      <p class="competitor-banner-text">Your competitor is capturing your clients online. <strong>Let's lock down your category.</strong></p>
    </div>
  </section>

  <!-- THE FACTS SECTION -->
  <section class="facts-section" style="border-top:1px solid var(--border);">
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
          <div class="fact-hero-label fact-hero-label-dark">Of your local customer inquiries are driven by your reputation and brand presence.</div>
          <div class="fact-hero-desc fact-hero-desc-dark">Your digital presence directly controls how many customers find you on Google Maps. A weak presence pushes you down.</div>
        </div>
      </div>

      <!-- Smaller stats row -->
      <div class="facts-stats-row">
        <div class="facts-stat-block">
          <div class="facts-stat-num">75%</div>
          <div class="facts-stat-text">Of customers judge a business's credibility and choose to trust them based entirely on their professional online presence</div>
        </div>
        <div class="facts-stat-divider"></div>
        <div class="facts-stat-block">
          <div class="facts-stat-num">57%</div>
          <div class="facts-stat-text">Of users won't refer a business if they have a slow or hard-to-use mobile presence</div>
        </div>
        <div class="facts-stat-divider"></div>
        <div class="facts-stat-block">
          <div class="facts-stat-num">2x</div>
          <div class="facts-stat-text">Faster growth for businesses with a strong professional online presence</div>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS SECTION -->
  <section class="section-pad" style="background: var(--surface); border-bottom: 1px solid var(--border);">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Process</div>
        <h2 class="section-title">What working with us looks like</h2>
        <p class="section-sub">A simple, transparent process to establish your category dominance online.</p>
      </div>
      <div class="steps-grid">
        <div class="step reveal">
          <div class="step-num">STEP 01</div>
          <h3>Discovery Call — 30 minutes</h3>
          <p>A quick call where we get to know your business, answer your questions, and figure out exactly what you need.</p>
        </div>
        <div class="step reveal" style="transition-delay:0.1s;">
          <div class="step-num">STEP 02</div>
          <h3>Launch-Ready Brand Demo — 5 Days</h3>
          <p>You fill out a short form. We take it from there and design your category-leading online presence.</p>
        </div>
        <div class="step reveal" style="transition-delay:0.2s;">
          <div class="step-num">STEP 03</div>
          <h3>Activation Call — 30 minutes</h3>
          <p>We walk you through your high-converting online presence and activate it to start capturing leads instantly.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FREE DEMO OFFER SECTION -->
  <section class="free-demo-section reveal">
    <div class="container">
      <div class="free-demo-inner">
        <div class="free-demo-badge">See It Before You Pay It</div>
        <h2 class="free-demo-headline">See a free demo of your actual website live in 5 days.</h2>
        <p class="free-demo-sub">We build your actual website first, completely free, and show it to you on a call. Only if you love the finished product do we launch it and move forward. If you don't, you walk away and owe us nothing.</p>
        <div class="free-demo-steps">
          <div class="free-demo-step">
            <div class="free-demo-step-icon">${Icons.phone}</div>
            <div>
              <div class="free-demo-step-title">30-Minute Strategy Call</div>
              <div class="free-demo-step-desc">We map out your business positioning, category keywords, and how we will capture clients already looking for you.</div>
            </div>
          </div>
          <div class="free-demo-step">
            <div class="free-demo-step-icon">${Icons.zap}</div>
            <div>
              <div class="free-demo-step-title">We Build Your Online Presence — 5 Days</div>
              <div class="free-demo-step-desc">Fill out a short form. We handle everything else — copywriting, layouts, graphics, and search setup.</div>
            </div>
          </div>
          <div class="free-demo-step">
            <div class="free-demo-step-icon">${Icons.rocket}</div>
            <div>
              <div class="free-demo-step-title">Activate Only If You Love The Outcome</div>
              <div class="free-demo-step-desc">We walk you through your high-converting brand system. Love it? We launch it and you pay. Not happy? You walk away and owe us zero.</div>
            </div>
          </div>
        </div>
        <a href="/booking" class="btn btn-dark btn-large free-demo-cta" data-link="booking" id="home-free-demo-cta">Get Your Free Demo ${Icons.arrow}</a>
        <p class="free-demo-note">Your total time investment: under one hour. We handle everything.</p>
      </div>
    </div>
  </section>

  <!-- WHY ATLANTIC BEAR SECTION -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Why Us</div>
        <h2 class="section-title">Why Atlantic Bear</h2>
        <p class="section-sub">We don't just build websites. We build the online presence your business is missing.</p>
      </div>
      <div class="feature-grid">
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${Icons.globe}</div>
          <h3>Capture clients already looking for you</h3>
          <p>People hear about you through word of mouth, Instagram, Google Maps. They search your name, find nothing — and quietly choose your competitor. We stop that.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${Icons.star}</div>
          <h3>Look like the biggest player in your category</h3>
          <p>A business running off WhatsApp and Instagram looks small. Your website makes you look like a 50-person company, even if you're 3 people.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${Icons.shield}</div>
          <h3>Own your online presence — stop renting it</h3>
          <p>Instagram can shadowban you. The algorithm can bury you. Meta can suspend your account overnight. Your website is the one asset you actually control.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${Icons.phone}</div>
          <h3>Every screen, every device, every time</h3>
          <p>87% of your customers visit on their phone. Your site looks flawless on every screen — mobile, tablet, desktop. No pinching, no broken layouts.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${Icons.rocket}</div>
          <h3>No contracts, no lock-in</h3>
          <p>If we do good work, you stay. We don't need a contract to make that happen. Cancel anytime, we hand over everything within 48 hours.</p>
        </div>
        <div class="feature-item reveal" style="display:flex; flex-direction:column; justify-content:center; background:var(--surface);">
          <h3 style="font-size:1.1rem; margin-bottom:8px;">Your total effort: under one hour</h3>
          <p style="margin-bottom:16px; font-size:0.82rem; color:var(--text-muted);">One 30-minute discovery call. One short form. One 30-minute demo call. That's it. We handle the design, the copy, the hosting, the domain — everything.</p>
          <a href="/booking" class="btn btn-dark btn-sm" data-link="booking" style="align-self:flex-start;">Book a Call ${Icons.arrow}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- THE PROBLEM SECTION -->
  <section class="problem-section" style="border-bottom: 1px solid var(--border);">
    <div class="container">
      <h2 class="problem-headline reveal">
        Every day without a website is a customer you <span class="text-red">didn't know you lost</span>.
      </h2>
      <div class="problem-grid">
        <div class="problem-card reveal">
          <h3>They searched. They didn't find you.</h3>
          <p>
            Most people look up a business online before they visit or call. If nothing comes up, or what comes up looks bad, they move on. Simple as that.
          </p>
        </div>
        <div class="problem-card reveal" style="transition-delay:0.1s;">
          <h3>Your competitor got the client. Not you.</h3>
          <p>
            When two similar businesses show up online and one has a clean professional website, the choice is obvious. Customers always go with whoever looks more trustworthy.
          </p>
        </div>
        <div class="problem-card reveal" style="transition-delay:0.2s;">
          <h3>You don't have time to deal with this.</h3>
          <p>
            You're running a business. Building a website, figuring out hosting, dealing with technical problems, that's not why you got into this. It shouldn't be your problem.
          </p>
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
        <h2>Capture Your Category</h2>
        <p>Two plans. Both fully managed. We run your online reputation while you run your business.</p>
      </div>
      <div class="teasers-grid" style="grid-template-columns: repeat(2, 1fr); max-width: 850px; margin: 0 auto; gap: 32px;">

        <!-- Managed Plan Teaser -->
        <div class="teaser-card level-one-card">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">01</span>
            <span class="teaser-level-name">The Launch Plan · Most Popular</span>
          </div>
          <h3>The Launch Plan</h3>
          <p class="teaser-pitch">Everything your business needs to lock down a premium online reputation, capture existing word-of-mouth clients, and let customers reach you instantly.</p>
          <div class="teaser-price">
            <div class="teaser-price-main">AED 3,500</div>
            <div class="teaser-price-sub">+ AED 300/mo managed</div>
          </div>
          <div class="teaser-pills">
            <span class="teaser-pill">Professional</span>
            <span class="teaser-pill">Local SEO Setup</span>
            <span class="teaser-pill">WhatsApp Chat</span>
            <span class="teaser-pill">1 Update / Mo</span>
          </div>
          <a href="/pricing" class="teaser-btn teaser-btn-dark" data-link="pricing" id="home-managed-teaser-cta">
            Explore Launch Plan ${Icons.arrow}
          </a>
        </div>

        <!-- Growth Plan Teaser -->
        <div class="teaser-card level-three-card">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">02</span>
            <span class="teaser-level-name">The Growth Plan · Scale & Video</span>
          </div>
          <h3>The Growth Plan</h3>
          <p class="teaser-pitch">For businesses that want to look like the biggest player in their field, rank for high-intent search terms, embed fast video assets, and launch marketing funnels.</p>
          <div class="teaser-price">
            <div class="teaser-price-main">AED 6,500</div>
            <div class="teaser-price-sub">+ AED 300/mo managed</div>
          </div>
          <div class="teaser-pills">
            <span class="teaser-pill">Elite Growth</span>
            <span class="teaser-pill">Deep SEO Search</span>
            <span class="teaser-pill">Lead Capture Form</span>
            <span class="teaser-pill">3 Updates / Mo</span>
          </div>
          <a href="/pricing" class="teaser-btn teaser-btn-outline" data-link="pricing" id="home-growth-teaser-cta">
            Explore Growth Plan ${Icons.arrow}
          </a>
        </div>

      </div>

    </div>
  </section>
  `;
}


// ─── Pricing Page ────────────────────────────────────────────────────────────
function PricingPage(): string {
  return `
  <!-- PAGE HEADER -->
  <div class="page-header" style="border-bottom:1px solid var(--border); padding-bottom: 32px;">
    <div class="container">
      <h1>More Clients Starts Here</h1>
      <p class="pricing-header-sub">Two plans. Both fully managed. You run your business, we run your website.</p>
    </div>
  </div>

  <!-- PRICING CARDS -->
  <section class="section-pad">
    <div class="container">
      
      <!-- Demo offer banner placed lower, right above plans -->
      <div class="header-callout-box" style="margin-top: -16px; margin-bottom: 72px;">
        Before you commit to anything, we build you a free demo of your actual website live in 5 days. You watch it come to life on a call, and only if you love it do you move forward. If you don't, you walk away and owe us nothing.
      </div>

      <div class="pricing-grid-two">
        
        <!-- PLAN 1: THE LAUNCH PLAN -->
        <div class="pricing-plan-card featured">
          <div class="pricing-card-badge">Most Popular</div>
          <div class="pricing-plan-top">
            <h2 class="pricing-plan-title">The Launch Plan</h2>
            <p class="pricing-plan-subtitle">Everything your business needs to look professional online and let clients reach you in one tap.</p>
            <div class="pricing-price-display stacked">
              <span class="pricing-setup-fee">AED 3,500</span>
              <span class="pricing-setup-label">setup</span>
              <div class="pricing-monthly-fee">+ AED 300/month</div>
            </div>
          </div>
          
          <div class="pricing-plan-body">
            <div class="pricing-stack-header">YOUR BUILD, INCLUDED IN SETUP:</div>
            <div class="pricing-features-list">
              <div class="pricing-feature-row highlight-row">
                <span class="feature-desc"><strong class="changes-highlight">1 content change per month</strong></span>
                <span class="feature-val">Included Care</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Fully custom-designed website, no templates, up to 5 pages</span>
                <span class="feature-val">AED 5,000 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Conversion copywriting written for your industry</span>
                <span class="feature-val">AED 1,200 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">We build your site using your own photos. If you don't have any, we source professional images for you</span>
                <span class="feature-val">AED 800 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Essential SEO setup: standard page titles, descriptions, and Google indexing</span>
                <span class="feature-val">AED 1,000 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">WhatsApp button so visitors can message you in one tap</span>
                <span class="feature-val">AED 500 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Your phone number and email placed across the site so clients contact you directly</span>
                <span class="feature-val">Included</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Fully mobile responsive on every device</span>
                <span class="feature-val">Included</span>
              </div>
            </div>

            <div class="pricing-stack-header pricing-margin-top">YOUR MONTHLY CARE, AED 300:</div>
            <div class="pricing-features-list">
              <div class="pricing-feature-row">
                <span class="feature-desc">Hosting and daily backups</span>
                <span class="feature-val">Included</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Ongoing support from our team whenever you need something</span>
                <span class="feature-val">Included</span>
              </div>
            </div>

            <!-- DEDICATED BONUS CARD -->
            <div class="pricing-bonus-block">
              <div class="bonus-header-row">
                <span class="bonus-badge-label">FREE BONUS</span>
                <span class="bonus-value-badge">AED 1,500 VALUE</span>
              </div>
              <h4 class="bonus-title">Free Video Guide for Meta Ads</h4>
              <p class="bonus-subtitle">Get immediate traction after launch with step-by-step video templates:</p>
              <ul class="bonus-bullet-list">
                <li>Video guide: how to run Instagram and Facebook ads for your business, step by step</li>
              </ul>
            </div>
          </div>

          <div class="pricing-plan-footer">
            <div class="value-comparison-box">
              <div class="val-comp-row"><span class="val-comp-label">Total Build Value:</span><span class="val-comp-value">AED 8,500+</span></div>
              <div class="val-comp-row main"><span class="val-comp-label">Your Setup Cost:</span><span class="val-comp-value-price">AED 3,500</span></div>
            </div>
            <a href="javascript:void(0)" class="btn btn-dark btn-block btn-large">Book Call to See Your Demo</a>
            
            <div class="paypal-buy-wrapper">
              <span class="paypal-or-divider">— OR BUY IMMEDIATELY —</span>
              <form action="https://www.paypal.com/ncp/payment/KJDAPRWW2EC6S" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;width:100%;">
                <input class="paypal-submit-btn" type="submit" value="Buy Now" />
                <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                <section style="font-size: 0.72rem; color: var(--text-muted);"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.8rem;vertical-align:middle;"/></section>
              </form>
              <div class="paypal-bonus-note">
                Includes the <strong style="color: var(--blue);">Fast-Action Bonus</strong> below<br>(unlimited tweaks first month)
              </div>
            </div>
          </div>
        </div>

        <!-- PLAN 2: THE GROWTH PLAN -->
        <div class="pricing-plan-card">
          <div class="pricing-plan-top">
            <h2 class="pricing-plan-title">The Growth Plan</h2>
            <p class="pricing-plan-subtitle">For businesses that want to look like the market leader and get more out of every visitor.</p>
            <div class="pricing-price-display stacked">
              <span class="pricing-setup-fee">AED 6,500</span>
              <span class="pricing-setup-label">setup</span>
              <div class="pricing-monthly-fee">+ AED 300/month</div>
            </div>
          </div>
          
          <div class="pricing-plan-body">
            <div class="growth-plus-header">EVERYTHING IN THE LAUNCH PLAN, PLUS:</div>
            <div class="pricing-features-list">
              <div class="pricing-feature-row highlight-row">
                <span class="feature-desc"><strong class="changes-highlight">3 content changes per month</strong></span>
                <span class="feature-val">Increased Care</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">More room to grow: up to 10 pages built for conversion</span>
                <span class="feature-val">AED 3,000 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Enhanced SEO: targeting search terms for your main service pages</span>
                <span class="feature-val">AED 800 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Blog set up with 3 SEO articles written for your niche</span>
                <span class="feature-val">AED 1,500 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Video on your website: your videos embedded, optimized, and loading fast</span>
                <span class="feature-val">AED 1,200 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Real contact form: visitors submit an inquiry and it lands straight in your email inbox</span>
                <span class="feature-val">AED 800 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Premium visual pass: custom graphics plus image and video optimization</span>
                <span class="feature-val">AED 800 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Extra design review rounds during the build, so we refine until it feels right</span>
                <span class="feature-val">AED 600 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Google Maps embedded on your contact page</span>
                <span class="feature-val">AED 300 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Priority build queue: your project goes to the front of the line</span>
                <span class="feature-val">Included</span>
              </div>
            </div>

            <!-- DEDICATED BONUS CARD -->
            <div class="pricing-bonus-block">
              <div class="bonus-header-row">
                <span class="bonus-badge-label">FREE BONUS</span>
                <span class="bonus-value-badge">AED 1,500 VALUE</span>
              </div>
              <h4 class="bonus-title">Free Video Guide for Meta Ads</h4>
              <p class="bonus-subtitle">Get immediate traction after launch with step-by-step video templates:</p>
              <ul class="bonus-bullet-list">
                <li>Video guide: how to run Instagram and Facebook ads for your business, step by step</li>
              </ul>
            </div>
          </div>

          <div class="pricing-plan-footer">
            <div class="value-comparison-box">
              <div class="val-comp-row"><span class="val-comp-label">Total Package Value:</span><span class="val-comp-value">AED 15,000+</span></div>
              <div class="val-comp-row main"><span class="val-comp-label">Your Setup Cost:</span><span class="val-comp-value-price">AED 6,500</span></div>
            </div>
            <a href="javascript:void(0)" class="btn btn-dark btn-block btn-large">Book Call to See Your Demo</a>
            
            <div class="paypal-buy-wrapper">
              <span class="paypal-or-divider">— OR BUY IMMEDIATELY —</span>
              <form action="https://www.paypal.com/ncp/payment/T8XKDA4RJ6H26" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;width:100%;">
                <input class="paypal-submit-btn" type="submit" value="Buy Now" />
                <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                <section style="font-size: 0.72rem; color: var(--text-muted);"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.8rem;vertical-align:middle;"/></section>
              </form>
              <div class="paypal-bonus-note">
                Includes the <strong style="color: var(--blue);">Fast-Action Bonus</strong> below<br>(unlimited tweaks first month)
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Growth teaser note between offers -->
      <div class="growth-teaser-text">
        Want video on your site, a real contact form, a blog, 10 pages, and 3 changes a month instead of 1? That's the Growth Plan.
      </div>
      
      <!-- Content change footnote -->
      <div class="pricing-footnote-text">
        * A content change is defined as a text edit, photo swap, or updated prices/hours (a small tweak). 1 content change includes up to 3 small tweaks.
      </div>
    </div>
  </section>

  <!-- THE GUARANTEE STACK (ASYMMETRICAL LAYOUT) -->
  <section class="section-pad guarantee-diagonal-section" style="background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); overflow: hidden; padding-bottom: 72px;">
    <div class="container relative">
      <div class="section-header centered reveal" style="margin-bottom: 64px;">
        <h2 class="section-title" style="font-size: 2.5rem; font-weight: 900; letter-spacing: -0.04em;">The Guarantee Stack</h2>
      </div>

      <div class="asymmetric-guarantee-layout">
        
        <!-- Guarantee 1: Top Left -->
        <div class="guarantee-card striking pos-top-left reveal">
          <div class="guarantee-card-header">
            <span class="guarantee-number">01</span>
            <h3>See It Before You Pay It</h3>
          </div>
          <p>We build your actual website first, completely free, and show it to you on a call. You only pay if you love it. If you don't, you owe us nothing and you're free to walk away.</p>
        </div>

        <!-- Guarantee 2: Middle Right -->
        <div class="guarantee-card striking pos-middle-right reveal" style="transition-delay: 0.1s;">
          <div class="guarantee-card-header">
            <span class="guarantee-number">02</span>
            <h3>Love It At Launch</h3>
          </div>
          <p>Unlimited small tweaks during your first 30 days. Text, colors, images, layout details, we adjust until it feels exactly right for you.</p>
        </div>

        <!-- Guarantee 3: Bottom Left -->
        <div class="guarantee-card striking pos-bottom-left reveal" style="transition-delay: 0.2s;">
          <div class="guarantee-card-header">
            <span class="guarantee-number">03</span>
            <h3>You Own Everything</h3>
          </div>
          <p>Your content, your files. Leave any time and we hand everything over to you.</p>
        </div>

      </div>

      <!-- Pay on Call tweak note (moved here, lower) -->
      <div class="call-action-notice" style="margin-top: 72px; margin-bottom: 0;">
        <strong>Fast-Action Bonus:</strong> If you pay on the call when we show you the demo, you get <strong>unlimited small tweaks</strong> of the website for your first month.
      </div>
    </div>
  </section>
  `;
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
        <a href="/booking" class="btn btn-dark btn-large" data-link="booking" id="work-cta">
          Book a Call ${Icons.arrow}
        </a>
      </div>
    </div>
  </section>`;
}

// ─── Testimonials Page ───────────────────────────────────────────────────────
function TestimonialsPage(): string {
  return `
  <!-- HEADER -->
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="tm-bear-wrap reveal">
        <img src="/atlanticbear-logo.png" alt="Atlantic Bear" class="tm-bear-logo" width="88" height="88" />
      </div>
      <div class="section-label reveal" style="transition-delay:0.05s;">Client Work</div>
      <h1 class="reveal" style="transition-delay:0.1s;">Here's one we're proud of.</h1>
      <p class="reveal" style="transition-delay:0.15s;">We work with businesses across the UK and UAE. This is a look at what we do — one example from our portfolio.</p>
    </div>
  </div>

  <!-- BEFORE / AFTER -->
  <section class="section-pad">
    <div class="container">

      <!-- BEFORE -->
      <div class="tm-shot-block reveal" style="margin-bottom: 64px;">
        <div class="tm-shot-label tm-label-before">Before</div>
        <div class="tm-browser">
          <div class="tm-browser-bar">
            <span class="tm-dot"></span><span class="tm-dot"></span><span class="tm-dot"></span>
            <div class="tm-url">sondertraininggroup.com</div>
          </div>
          <img src="/screenshots/sonder-old.png" alt="Client website — before" loading="lazy" class="tm-screenshot" width="1024" height="576" />
        </div>
      </div>

      <!-- AFTER -->
      <div class="tm-shot-block reveal" style="transition-delay:0.08s; margin-bottom: 64px;">
        <div class="tm-shot-label tm-label-after">After</div>
        <div class="tm-browser">
          <div class="tm-browser-bar">
            <span class="tm-dot"></span><span class="tm-dot"></span><span class="tm-dot"></span>
            <div class="tm-url">sondertraininggroup.com</div>
          </div>
          <img src="/screenshots/sonder-new.png" alt="Client website — after, built by Atlantic Bear" loading="lazy" class="tm-screenshot" width="1024" height="609" />
        </div>
      </div>

      <!-- VIDEO TESTIMONIAL -->
      <div class="tm-shot-block reveal" style="transition-delay:0.12s; max-width: 600px; margin: 0 auto;">
        <div class="tm-shot-label tm-label-after" style="position: static; display: inline-block; margin-bottom: 16px;">Video Review</div>
        <div class="booking-testimonials-wrap" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <div style="max-width: 320px; width: 100%; border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--shadow-md); background: #000; border: 1px solid var(--border);">
            <video controls style="width: 100%; display: block; border: none; aspect-ratio: 9/16; object-fit: cover;">
              <source src="/testimonials/sonder%20training%20group%20testimonial.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <p class="video-testimonial-quote">
            "We approached Alexi at Atlantic Bear, who was absolutely fantastic at putting together our ideas and bringing them across on the website in a way that really engaged our target market."
          </p>
          <p class="video-testimonial-link-note">
            <a href="https://sondertraininggroup.com/" target="_blank" rel="noopener">Take a look at the website we built for them</a>
          </p>
        </div>
      </div>

    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section" style="border-top:1px solid var(--border);">
    <div class="container">
      <h2>Want results like this?</h2>
      <p>Tell us about your business and let's get started.</p>
      <div class="cta-ctas">
        <a href="/booking" class="btn btn-dark btn-large" data-link="booking" id="testimonials-cta">
          Book a Call ${Icons.arrow}
        </a>
        <a href="/pricing" class="btn btn-secondary btn-large" data-link="pricing" id="testimonials-plans-cta">
          View Plans
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
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
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
                <option value="launch">The Launch Plan (AED 3,500 + 300/mo)</option>
                <option value="growth">The Growth Plan (AED 6,500 + 300/mo)</option>
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

// ─── Booking Page ─────────────────────────────────────────────────────────────
function BookingPage(): string {
  return `
  <!-- HEADER -->
  <div class="page-header booking-page-header">
    <div class="container">
      <div class="booking-page-badge">Free Demo Offer</div>
      <h1>See Your Website<br><span style="color:var(--accent);">Before You Pay</span></h1>
      <p class="booking-page-value-prop">We build a demo of your site first. If you love it, you pay for it. If you don't, you walk away.</p>
      <div class="booking-page-divider"></div>
      <p class="booking-page-cta-text">Watch the video below to see how it works, then book your call.</p>
    </div>
  </div>

  <section class="booking-section">
    <div class="container">
      <div class="booking-steps-timeline">

        <!-- VIDEO -->
        <div class="booking-step-card reveal">
          <div class="custom-video-wrap" id="custom-video-wrap">
            <video
              id="booking-video"
              class="booking-video-el"
              preload="auto"
              width="1920"
              height="1080"
              playsinline
              src="/videos for funnel call/video for funnel v4/Atlantic Bear Free Website Demo Pricing Plans.mp4"
            ></video>
            <!-- Overlay (shown when paused/before play) -->
            <div class="bv-overlay" id="bv-overlay">
              <button class="bv-play-btn" id="bv-play-btn" aria-label="Play video">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>
            <!-- Custom controls bar -->
            <div class="bv-controls" id="bv-controls">
              <button class="bv-ctrl-btn bv-playpause" id="bv-playpause" aria-label="Play/Pause">
                <svg class="icon-play" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                <svg class="icon-pause" viewBox="0 0 24 24" fill="currentColor" style="display:none;"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              </button>
              <div class="bv-progress-wrap" id="bv-progress-wrap">
                <div class="bv-progress-track">
                  <div class="bv-progress-fill" id="bv-progress-fill"></div>
                  <div class="bv-progress-thumb" id="bv-progress-thumb"></div>
                </div>
              </div>
              <span class="bv-time" id="bv-time">0:00 / 0:00</span>
              <div class="bv-volume-wrap">
                <button class="bv-ctrl-btn bv-mute" id="bv-mute" aria-label="Mute/Unmute">
                  <svg class="icon-vol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path class="vol-hi" d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
                </button>
                <input class="bv-volume-slider" id="bv-volume" type="range" min="0" max="1" step="0.05" value="1" aria-label="Volume"/>
              </div>
              <button class="bv-ctrl-btn bv-fullscreen" id="bv-fullscreen" aria-label="Fullscreen">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- BRIDGE: video → calendar -->
        <div class="booking-bridge-text reveal">
          <p>Watched the video? Book your free demo call below.</p>
        </div>

        <!-- BOOKING CALENDAR -->
        <div class="booking-step-card reveal" id="booking-calendar">
          <div class="booking-step-header">
            <h2 class="booking-step-title">Book your free <span style="color:var(--accent);">demo call</span></h2>
          </div>

          <div class="calendly-widget-wrap">
            <!-- Calendly inline widget begin -->
            <div class="calendly-inline-widget" data-url="https://calendly.com/officialatlanticbear/first-meeting?hide_gdpr_banner=1" style="min-width:320px;height:900px;width:100%;"></div>
            <!-- Calendly inline widget end -->
          </div>

          <div class="fallback-calendly-link-wrap">
            <a href="https://calendly.com/officialatlanticbear/first-meeting?hide_gdpr_banner=1" target="_blank" rel="noopener" class="fallback-calendly-link">
              Open the calendar in a new tab if it doesn't appear above.
            </a>
          </div>
        </div>

        <!-- CLIENT TESTIMONIAL (optional) -->
        <div class="booking-step-card reveal" style="transition-delay: 0.2s;">
          <div class="booking-step-header">
            <h2 class="booking-step-title">Hear from our clients</h2>
          </div>

          <div class="booking-testimonials-wrap" style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 24px;">
            <div style="max-width: 320px; width: 100%; border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--shadow-md); background: #000; border: 1px solid var(--border);">
              <video controls style="width: 100%; display: block; border: none; aspect-ratio: 9/16; object-fit: cover;">
                <source src="/testimonials/sonder%20training%20group%20testimonial.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
            <p class="video-testimonial-quote">
              "We approached Alexi at Atlantic Bear, who was absolutely fantastic at putting together our ideas and bringing them across on the website in a way that really engaged our target market."
            </p>
            <p class="video-testimonial-link-note">
              <a href="https://sondertraininggroup.com/" target="_blank" rel="noopener">Take a look at the website we built for them</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
  `;
}

// ─── Router ───────────────────────────────────────────────────────────────────
type Page = 'home' | 'pricing' | 'work' | 'contact' | 'testimonials' | 'booking';

const pageMap: Record<Page, () => string> = {
  home:         HomePage,
  pricing:      PricingPage,
  work:         WorkPage,
  contact:      ContactPage,
  testimonials: TestimonialsPage,
  booking:      BookingPage,
};

const pageMeta: Record<Page, { title: string; desc: string }> = {
  home: {
    title: 'Atlantic Bear | Custom Website Design Agency in the UAE',
    desc: 'Atlantic Bear is a leading website agency in the UAE. We build custom, premium websites for businesses. Get a free demo of your website before you pay anything.'
  },
  pricing: {
    title: 'More Clients Starts Here | Atlantic Bear Pricing',
    desc: 'Transparent pricing for fully-managed brand positioning and high-conversion client acquisition platforms in the UAE. See your online presence live in 5 days, see it finished before you pay anything.'
  },
  work: {
    title: 'Our Work | Atlantic Bear Portfolio',
    desc: 'Explore custom websites designed and developed for UAE businesses. Professional layouts, mobile optimization, and fast load times.'
  },
  contact: {
    title: 'Contact Atlantic Bear | Start Your UAE Website Project',
    desc: 'Get in touch with Atlantic Bear. Let\'s discuss your business website needs. Fast response and custom layouts in Dubai & UAE.'
  },
  testimonials: {
    title: 'Client Testimonials & Transformations | Atlantic Bear',
    desc: 'See real website transformations by Atlantic Bear. Before and after case studies showing how we help businesses across the UAE look professional online.'
  },
  booking: {
    title: 'Book a Call | Atlantic Bear Discovery Session',
    desc: 'Watch our video, schedule your free 30-minute discovery call, and view our client success stories. Start your UAE website project today.'
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
  if (cleanPath === 'pricing' || cleanPath === 'work' || cleanPath === 'contact' || cleanPath === 'testimonials' || cleanPath === 'booking') {
    return cleanPath as Page;
  }
  return 'home';
}

function setActiveNav(page: Page) {
  $$('#main-nav [data-link]').forEach(el => el.classList.remove('active'));
  const link = $(`#main-nav [data-link="${page}"].nav-link`);
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

// ─── Calendly Loader ─────────────────────────────────────────────────────────
function loadCalendlyWidget() {
  const container = document.querySelector('.calendly-inline-widget') as HTMLElement | null;
  if (!container) return;

  const init = () => {
    if ((window as any).Calendly) {
      container.innerHTML = '';
      (window as any).Calendly.initInlineWidget({
        url: 'https://calendly.com/officialatlanticbear/first-meeting?hide_gdpr_banner=1',
        parentElement: container,
      });
    }
  };

  // Script is preloaded in <head> — just wait for it to be ready
  if ((window as any).Calendly) {
    init();
    return;
  }

  // Poll until the preloaded script has executed (usually <300ms)
  const checkInterval = setInterval(() => {
    if ((window as any).Calendly) {
      clearInterval(checkInterval);
      init();
    }
  }, 50);
}

// ─── Booking Page Video Loader ────────────────────────────────────────────────
function initBookingPageVideo() {
  const video = document.getElementById('booking-video') as HTMLVideoElement | null;
  const overlay = document.getElementById('bv-overlay');
  const playBtn = document.getElementById('bv-play-btn');
  const controls = document.getElementById('bv-controls');
  const playpause = document.getElementById('bv-playpause');
  const progressFill = document.getElementById('bv-progress-fill');
  const progressThumb = document.getElementById('bv-progress-thumb');
  const progressWrap = document.getElementById('bv-progress-wrap');
  const timeDisplay = document.getElementById('bv-time');
  const muteBtn = document.getElementById('bv-mute');
  const volumeSlider = document.getElementById('bv-volume') as HTMLInputElement | null;
  const fullscreenBtn = document.getElementById('bv-fullscreen');
  const wrap = document.getElementById('custom-video-wrap');
  if (!video || !overlay || !playBtn || !controls || !playpause) return;

  const fmtTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2,'0')}`;
  };

  const updateProgress = () => {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressThumb) progressThumb.style.left = pct + '%';
    if (timeDisplay) timeDisplay.textContent = `${fmtTime(video.currentTime)} / ${fmtTime(video.duration)}`;
  };

  const setPlayState = (playing: boolean) => {
    const iconPlay = playpause?.querySelector('.icon-play') as HTMLElement | null;
    const iconPause = playpause?.querySelector('.icon-pause') as HTMLElement | null;
    if (iconPlay) iconPlay.style.display = playing ? 'none' : 'block';
    if (iconPause) iconPause.style.display = playing ? 'block' : 'none';
    if (overlay) overlay.style.display = playing ? 'none' : 'flex';
  };

  // Play on overlay click
  overlay.addEventListener('click', () => {
    video.play();
  });

  // Click on video toggles play/pause
  video.addEventListener('click', () => {
    if (video.paused) video.play(); else video.pause();
  });

  video.addEventListener('play', () => setPlayState(true));
  video.addEventListener('pause', () => setPlayState(false));
  video.addEventListener('ended', () => setPlayState(false));
  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('loadedmetadata', updateProgress);

  // Playpause button
  playpause.addEventListener('click', () => {
    if (video.paused) video.play(); else video.pause();
  });

  // Progress bar scrubbing
  if (progressWrap) {
    const scrub = (e: MouseEvent | TouchEvent) => {
      const rect = (progressWrap as HTMLElement).getBoundingClientRect();
      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      video.currentTime = pct * video.duration;
      updateProgress();
    };
    let dragging = false;
    progressWrap.addEventListener('mousedown', (e) => { dragging = true; scrub(e as MouseEvent); });
    window.addEventListener('mousemove', (e) => { if (dragging) scrub(e); });
    window.addEventListener('mouseup', () => { dragging = false; });
    progressWrap.addEventListener('touchstart', (e) => scrub(e as TouchEvent), { passive: true });
    progressWrap.addEventListener('touchmove', (e) => scrub(e as TouchEvent), { passive: true });
  }

  // Volume
  if (volumeSlider) {
    volumeSlider.addEventListener('input', () => {
      video.volume = parseFloat(volumeSlider.value);
      video.muted = video.volume === 0;
    });
  }
  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      if (volumeSlider) volumeSlider.value = video.muted ? '0' : String(video.volume || 1);
    });
  }

  // Fullscreen
  if (fullscreenBtn && wrap) {
    fullscreenBtn.addEventListener('click', () => {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
      if (isIOS && (video as any).webkitEnterFullscreen) {
        (video as any).webkitEnterFullscreen();
        return;
      }

      const isFs = !!(document.fullscreenElement || (document as any).webkitFullscreenElement);
      if (!isFs) {
        // Try standard fullscreen on the wrapper (Android Chrome, desktop)
        if ((wrap as HTMLElement).requestFullscreen) {
          (wrap as HTMLElement).requestFullscreen();
        } else if ((wrap as any).webkitRequestFullscreen) {
          // Safari desktop
          (wrap as any).webkitRequestFullscreen();
        } else if ((video as any).webkitEnterFullscreen) {
          // iOS Safari — only video elements can go fullscreen
          (video as any).webkitEnterFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        }
      }
    });
  }

  // Show/hide controls on hover
  if (wrap) {
    let hideTimer: number;
    const showCtrls = () => {
      controls.style.opacity = '1';
      clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => { if (!video.paused) controls.style.opacity = '0'; }, 2500);
    };
    wrap.addEventListener('mousemove', showCtrls);
    wrap.addEventListener('mouseenter', showCtrls);
    wrap.addEventListener('mouseleave', () => { if (!video.paused) controls.style.opacity = '0'; });
    video.addEventListener('play', () => {
      hideTimer = window.setTimeout(() => { controls.style.opacity = '0'; }, 2500);
    });
    video.addEventListener('pause', () => {
      controls.style.opacity = '1';
      clearTimeout(hideTimer);
    });
  }
}

function navigate(page: Page, pushHistory = true) {
  const main = $('#main-content')!;
  main.style.opacity = '0';
  main.style.transform = 'translateY(8px)';

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    main.innerHTML = pageMap[page]();
    setActiveNav(page);
    main.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    requestAnimationFrame(() => {
      main.style.opacity = '1';
      main.style.transform = 'translateY(0)';
    });
    scrollReveal();

    if (page === 'contact') {
      initFormspree();
    }

    if (page === 'booking') {
      loadCalendlyWidget();
      initBookingPageVideo();

      // "Book a Call Now" skip button — smooth scroll to calendar
      const skipBtn = document.getElementById('skip-to-booking-btn');
      if (skipBtn) {
        skipBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const cal = document.getElementById('booking-calendar');
          if (cal) cal.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
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

  // Listen for Calendly event scheduling to track conversions via Meta Pixel
  window.addEventListener('message', (e) => {
    if (e.data && e.data.event === 'calendly.event_scheduled') {
      if (typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Schedule');
      }
    }
  });

  const initialPage = getPageFromPath(window.location.pathname);
  navigate(initialPage, false);

  window.addEventListener('popstate', () => {
    const page = getPageFromPath(window.location.pathname);
    navigate(page, false);
  });
});
