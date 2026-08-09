import './style.css';

// ─── Utilities ───────────────────────────────────────────────────────────────
const $ = (sel: string, ctx: Document | Element = document) =>
  ctx.querySelector<HTMLElement>(sel);
const $$ = (sel: string, ctx: Document | Element = document) =>
  [...ctx.querySelectorAll<HTMLElement>(sel)];

const ABACUS_NAMESPACE = 'atlanticbear_analytics_8d24';

function trackAbacusEvent(event: string, delay = 0) {
  const fire = () => {
    // 1. Fire global hit
    fetch(`https://abacus.jasoncameron.dev/hit/${ABACUS_NAMESPACE}/${event}`).catch(() => {});

    // 2. Fire daily hit (YYYY-MM-DD)
    try {
      const localDateStr = getLocalDateString();
      fetch(`https://abacus.jasoncameron.dev/hit/${ABACUS_NAMESPACE}/${localDateStr}_${event}`).catch(() => {});
    } catch (e) {
      // Ignore
    }
  };

  if (delay > 0) {
    setTimeout(fire, delay);
  } else {
    fire();
  }
}

// ─── Time and Scroll Tracking ───
let timeTrackers: Record<string, number> = {};

function startPageTimeTracking() {
  stopPageTimeTracking();
  const trackTime = (seconds: number) => {
    timeTrackers[`t${seconds}`] = window.setTimeout(() => {
      trackAbacusEvent(`time_${seconds}s`);
    }, seconds * 1000);
  };
  trackTime(5);
  trackTime(15);
  trackTime(30);
  trackTime(60);
}

function stopPageTimeTracking() {
  Object.values(timeTrackers).forEach(clearTimeout);
  timeTrackers = {};
}

let scrollTracked = { moved: false, video: false, calendar: false, testimonials: false };
let scrollListener: (() => void) | null = null;

function startScrollTracking() {
  stopScrollTracking();
  scrollTracked = { moved: false, video: false, calendar: false, testimonials: false };

  scrollListener = () => {
    // 1. Moved at all
    if (window.scrollY > 50 && !scrollTracked.moved) {
      scrollTracked.moved = true;
      trackAbacusEvent('scroll_moved');
    }



    // 3. Saw the calendar well (middle of calendar crossed the bottom of the viewport)
    const cal = document.getElementById('booking-calendar');
    if (cal && !scrollTracked.calendar) {
      const rect = cal.getBoundingClientRect();
      if (rect.top + (rect.height / 2) < window.innerHeight) {
        scrollTracked.calendar = true;
        trackAbacusEvent('scroll_calendar');
      }
    }

    // 4. Went down to testimonials (scrolled at least 300px into the testimonials card)
    const testimonialsWrap = document.querySelector('.booking-step-card:last-child');
    if (testimonialsWrap && !scrollTracked.testimonials) {
      const rect = testimonialsWrap.getBoundingClientRect();
      if (rect.top < window.innerHeight - 300) {
        scrollTracked.testimonials = true;
        trackAbacusEvent('scroll_testimonials');
      }
    }
  };

  window.addEventListener('scroll', scrollListener, { passive: true });
}

function stopScrollTracking() {
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener);
    scrollListener = null;
  }
}

function getLocalDateString(): string {
  const d = new Date();
  // Force UAE timezone (Asia/Dubai = GMT+4)
  const uae = new Date(d.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }));
  const year = uae.getFullYear();
  const month = String(uae.getMonth() + 1).padStart(2, '0');
  const day = String(uae.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}


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
      <a href="/booking" class="btn btn-primary btn-sm btn-pulse" data-link="booking" id="nav-book-cta">Book a Call ${Icons.arrow}</a>
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
          <h3>Pages</h3>
          <div class="footer-links">
            <a href="/" data-link="home">Home</a>
            <a href="/pricing" data-link="pricing">Pricing</a>
            <a href="/testimonials" data-link="testimonials">Testimonials</a>
            <a href="/booking" data-link="booking">Book a Call</a>
            <a href="/contact" data-link="contact">Contact</a>
          </div>
        </div>
        <div class="footer-col">
          <h3>Contact</h3>
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
    { num: '5 Days', desc: 'From kick-off to live' },
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
      <h1>Your business deserves<br>to be <span class="text-blue">found</span>.</h1>
      <p class="hero-sub">
        Custom websites built exclusively for UAE small businesses. Get a free demo of your site before paying anything.
      </p>
      <div class="hero-ctas">
        <a href="/booking" class="btn btn-primary btn-large btn-pulse" data-link="booking" id="hero-cta-book">
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
      <p class="competitor-banner-text">Your competitor is capturing your clients online. <strong>Let's lock down your category in the UAE.</strong></p>
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
          <div class="fact-hero-label">Of UAE customers research online before buying or visiting a business.</div>
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
          <div class="facts-stat-text">Faster growth for UAE businesses with a strong professional online presence</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FREE DEMO OFFER SECTION -->
  <section class="free-demo-section reveal">
    <div class="container">
      <div class="free-demo-inner">
        <div class="free-demo-badge" style="border: 1px solid var(--red); color: var(--red);">See It Before You Pay It</div>
        <h2 class="free-demo-headline">See a free demo of your actual website live in 5 days.</h2>
        <p class="free-demo-sub">We build your actual website first, completely free, and show it to you on a call. Only if you love the finished product do we launch it and move forward. If you don't, you walk away and owe us nothing.</p>
        <div class="free-demo-steps">
          <div class="free-demo-step">
            <div class="free-demo-step-icon">${Icons.phone}</div>
            <div>
              <div class="free-demo-step-title">30-Minute Strategy Call</div>
              <div class="free-demo-step-desc">We map out your business positioning, category keywords, and how we will capture UAE clients already looking for you.</div>
            </div>
          </div>
          <div class="free-demo-step">
            <div class="free-demo-step-icon">${Icons.zap}</div>
            <div>
              <div class="free-demo-step-title">5-Day Demo Build</div>
              <div class="free-demo-step-desc">Fill out a short form. We handle everything: copywriting, layouts, graphics, and search setup.</div>
            </div>
          </div>
          <div class="free-demo-step">
            <div class="free-demo-step-icon">${Icons.rocket}</div>
            <div>
              <div class="free-demo-step-title">Activate Only If You Love It</div>
              <div class="free-demo-step-desc">We walk you through your high-converting brand system. Love it? We launch it and you pay. Not happy? You walk away and owe us zero.</div>
            </div>
          </div>
        </div>
        <a href="/booking" class="btn btn-primary btn-large btn-pulse free-demo-cta" data-link="booking" id="home-free-demo-cta">Get Your Free Demo ${Icons.arrow}</a>
        <p class="free-demo-note">Your total time investment: under one hour. We handle everything.</p>
      </div>
    </div>
  </section>

  <!-- THE MARKET LEADER SYSTEM SECTION -->
  <section class="section-pad" style="background: var(--surface); border-bottom: 1px solid var(--border);">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">The Complete System</div>
        <h2 class="section-title">The Market Leader System</h2>
        <p class="section-sub">Four core pillars engineered to give your business a dominant online presence in the UAE.</p>
      </div>

      <div class="basic-system-grid">
        
        <div class="basic-system-card reveal">
          <span class="basic-card-num">01</span>
          <h3>Custom Website</h3>
          <p>A high-converting, professional website built specifically for your brand. Mobile-first design, fast performance, and a strategic layout built to turn local UAE visitors into high-value clients.</p>
        </div>

        <div class="basic-system-card reveal" style="transition-delay:0.08s;">
          <span class="basic-card-num">02</span>
          <h3>Site SEO</h3>
          <p>Complete local search optimization for Dubai and the UAE. We position your business at the top of Google Search and Google Maps so customers find you when searching for your services.</p>
        </div>

        <div class="basic-system-card reveal" style="transition-delay:0.12s;">
          <span class="basic-card-num">03</span>
          <h3>Monthly Content Changes</h3>
          <p>Ongoing design and copy updates whenever your business expands. We handle text, photo, pricing, or service edits on demand so your platform remains ahead of competitors.</p>
        </div>

        <div class="basic-system-card reveal" style="transition-delay:0.16s;">
          <span class="basic-card-num">04</span>
          <h3>Managed Hosting</h3>
          <p>Enterprise-grade cloud hosting, SSL encryption, continuous uptime monitoring, and daily backups. Your digital infrastructure is fully managed so your website runs smoothly 24/7.</p>
        </div>

      </div>

      <div class="reveal" style="text-align: center; margin-top: 48px;">
        <a href="/booking" class="btn btn-primary btn-large btn-pulse" data-link="booking">
          Get Started with Market Leader ${Icons.arrow}
        </a>
      </div>
    </div>
  </section>

  <!-- WHY ATLANTIC BEAR SECTION (PLACED UNDER MARKET LEADER SYSTEM) -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Why Us</div>
        <h2 class="section-title">Why Atlantic Bear</h2>
        <p class="section-sub">We don't just build websites. We build the online presence your UAE business is missing.</p>
      </div>
      <div class="feature-grid">
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${Icons.globe}</div>
          <h3>Capture clients already looking for you</h3>
          <p>People hear about you through word of mouth, Instagram, and Google Maps in the UAE. They search your name, find nothing, and quietly choose your competitor. We stop that.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${Icons.star}</div>
          <h3>Look like the biggest player in your category</h3>
          <p>A business running off WhatsApp and Instagram looks small. Your website makes you look like a 50-person company, even if you're 3 people.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${Icons.shield}</div>
          <h3>Own your online presence (stop renting it)</h3>
          <p>Instagram can shadowban you. The algorithm can bury you. Meta can suspend your account overnight. Your website is the one asset you actually control.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${Icons.phone}</div>
          <h3>Every screen, every device, every time</h3>
          <p>87% of your customers visit on their phone. Your site looks flawless on every screen: mobile, tablet, desktop. No pinching, no broken layouts.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${Icons.rocket}</div>
          <h3>No contracts, no lock-in</h3>
          <p>If we do good work, you stay. We don't need a contract to make that happen. Cancel anytime, we hand over everything within 48 hours.</p>
        </div>
        <div class="feature-item reveal" style="display:flex; flex-direction:column; justify-content:center; background:var(--surface);">
          <h3 style="font-size:1.1rem; margin-bottom:8px;">Your total effort: under one hour</h3>
          <p style="margin-bottom:16px; font-size:0.82rem; color:var(--text-muted);">One 30-minute discovery call. One short form. One 30-minute demo call. That's it. We handle design, copy, hosting, domain, and launch.</p>
          <a href="/booking" class="btn btn-primary btn-sm" data-link="booking" style="align-self:flex-start;">Book a Call ${Icons.arrow}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- TIER TEASERS (PACKAGES) SECTION -->
  <section class="teasers-section">
    <div class="container">
      <div class="teasers-header">
        <h2>Capture Your Category in the UAE</h2>
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

  <!-- META ADS HOMEPAGE BOTTOM TEASER SECTION -->
  <section class="section-pad-sm" style="border-top: 1px solid var(--border); margin-top: 80px; background: #080b12; padding: 64px 0;">
    <div class="container">
      <div class="meta-ads-teaser-box reveal" style="margin-top: 0;">
        <div class="meta-ads-teaser-content">
          <span class="meta-ads-price-tag" style="background: rgba(235,92,92,0.2); color: #EB5C5C; font-weight: 800; font-size: 0.82rem; padding: 4px 12px; border-radius: 999px; display: inline-block; margin-bottom: 10px; border: 1px solid rgba(235,92,92,0.4);">AED 2,500 / mo retainer</span>
          <h3>Looking for Direct Leads? We Also Run Meta Ads.</h3>
          <p>Turn Facebook & Instagram into a direct acquisition channel for your UAE small business with targeted ad campaigns and direct WhatsApp lead capture.</p>
        </div>
        <a href="/meta-ads" class="btn btn-primary btn-large btn-pulse" data-link="meta-ads" style="white-space: nowrap;">
          Explore Meta Ads ${Icons.arrow}
        </a>
      </div>
    </div>
  </section>
  `;
}

// ─── Meta Ads Page ─────────────────────────────────────────────────────────────
function MetaAdsPage(): string {
  return `
  <div class="page-header" style="border-bottom:1px solid var(--border); padding-bottom: 40px;">
    <div class="container">
      <div class="booking-page-badge" style="background: rgba(235,92,92,0.1); color: #EB5C5C; border: 1px solid rgba(235,92,92,0.25); display: inline-block; margin-bottom: 16px;">
        Client Acquisition Engine
      </div>
      <h1 style="color: #000;">Meta Ads for UAE Small Businesses</h1>
      <p style="color: rgba(0,0,0,0.7); max-width: 640px; margin: 12px auto 0; font-size: 1.05rem; line-height: 1.6;">
        Drive local, qualified client leads straight to your WhatsApp and inbox with targeted Facebook & Instagram ad campaigns engineered specifically for small businesses in the UAE.
      </p>
    </div>
  </div>

  <section class="section-pad">
    <div class="container">
      <div style="background: var(--surface); border: 2px solid var(--border-mid); border-radius: var(--r-lg); padding: 40px; text-align: center; max-width: 680px; margin: 0 auto 56px;">
        <div style="font-size: 2.8rem; font-weight: 900; color: #000; letter-spacing: -0.04em;">AED 2,500 <span style="font-size: 1.1rem; font-weight: 500; color: rgba(0,0,0,0.6);">/ month</span></div>
        <div style="font-size: 0.9rem; color: rgba(0,0,0,0.6); font-weight: 600; margin: 6px 0 24px;">Simple Monthly Retainer · Managed Campaign Optimization</div>
        <a href="/booking" class="btn btn-primary btn-large btn-pulse" data-link="booking">
          Book Strategy Call ${Icons.arrow}
        </a>
      </div>

      <div class="feature-grid" style="grid-template-columns: repeat(2, 1fr); max-width: 900px; margin: 0 auto;">
        <div class="feature-item reveal" style="border-right: 1px solid var(--border); border-bottom: 1px solid var(--border);">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${Icons.zap}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Local UAE Targeting</h3>
          <p>We target active customers in Dubai, Abu Dhabi, or specific UAE locations who need your services immediately.</p>
        </div>

        <div class="feature-item reveal" style="border-right: none; border-bottom: 1px solid var(--border);">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${Icons.star}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Ad Copy & Creatives</h3>
          <p>We craft high-converting video and image ad creative designed to stop scrolling on Instagram & Facebook feeds.</p>
        </div>

        <div class="feature-item reveal" style="border-right: 1px solid var(--border); border-bottom: none;">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${Icons.phone}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Direct WhatsApp & Form Leads</h3>
          <p>Leads land straight on your phone or email so you can reply and convert clients without delay.</p>
        </div>

        <div class="feature-item reveal" style="border-right: none; border-bottom: none;">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${Icons.rocket}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Continuous Management</h3>
          <p>We monitor ad performance daily, optimize budget allocation, and provide clear reports so you track your ROI.</p>
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
              <h3 class="bonus-title">Free Video Guide for Meta Ads</h3>
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
            <a href="/booking" data-link="booking" class="btn btn-primary btn-pulse btn-block btn-large">Book Call to See Your Demo</a>
            
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
              <h3 class="bonus-title">Free Video Guide for Meta Ads</h3>
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
            <a href="/booking" data-link="booking" class="btn btn-primary btn-pulse btn-block btn-large">Book Call to See Your Demo</a>
            
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
          <img src="/screenshots/sonder-old.png" alt="Client website: before" loading="lazy" class="tm-screenshot" width="1024" height="576" />
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
          <img src="/screenshots/sonder-new.png" alt="Client website: after, built by Atlantic Bear" loading="lazy" class="tm-screenshot" width="1024" height="609" />
        </div>
      </div>

      <!-- VIDEO TESTIMONIAL -->
      <div class="tm-shot-block reveal" style="transition-delay:0.12s; max-width: 600px; margin: 0 auto;">
        <div class="tm-shot-label tm-label-after" style="position: static; display: inline-block; margin-bottom: 16px;">Video Review</div>
        <div class="booking-testimonials-wrap" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <div class="custom-testimonial-video-wrap" style="max-width: 320px; width: 100%; aspect-ratio: 9/16; border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--shadow-md); background: #000; border: 1px solid var(--border); position: relative;">
            <video class="testimonial-video" preload="metadata" loop muted playsinline style="width: 100%; height: 100%; display: block; border: none; object-fit: cover;" src="/testimonials/sonder%20training%20group%20testimonial.mp4#t=0.001">
              Your browser does not support the video tag.
            </video>
            <div class="testimonial-video-overlay">
              <div class="testimonial-play-btn">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#000" style="margin-left: 3px;"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
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
        <a href="/booking" class="btn btn-primary btn-pulse btn-large" data-link="booking" id="testimonials-cta">
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
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
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
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Icons.map}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Location</div>
                  <div class="contact-method-value">Dubai, UAE</div>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-card reveal" style="transition-delay:0.1s; border-top: 3px solid var(--blue);">
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
              <button type="submit" class="btn btn-primary btn-block btn-large btn-pulse" id="form-submit-btn" data-fs-submit-btn>
                Send message ${Icons.arrow}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}


// ─── Strategy Call Booking Page (New /booking Funnel) ──────────────────────────
function StrategyBookingPage(): string {
  return `
  <div class="funnel-page">
    <!-- Urgency Top Bar — logo left, pill centred -->
    <div class="funnel-urgency-bar">
      <a href="/" class="funnel-urgency-logo" data-link="home" aria-label="Atlantic Bear Home">
        <span class="logo-wordmark">Atlantic</span>
        <img src="/atlanticbear-logo.png" alt="Atlantic Bear Logo" class="logo-bear-img" width="36" height="36" />
      </a>
      <div class="funnel-urgency-pill-wrap">
        <div class="funnel-urgency-pill">
          <span class="urgency-dot"></span>
          <span>LIMITED SPOTS AVAILABLE THIS WEEK — BOOK A STRATEGY CALL</span>
        </div>
      </div>
    </div>

    <!-- Hero — dark navy bg, massive headline -->
    <div class="funnel-hero">
      <h1 class="funnel-headline">WHAT DOES YOUR BUSINESS ACTUALLY LOOK LIKE ON GOOGLE?</h1>
      <p class="funnel-subheadline">Watch the video below to see exactly how we build custom websites for UAE businesses and get you found online, then book your strategy call.</p>
    </div>

    <!-- VSL Video Block — still on dark bg -->
    <div class="funnel-video-section">
      <div class="funnel-vsl-container">
        <div class="custom-video-wrap" id="custom-video-wrap">
          <video
            id="booking-video"
            class="booking-video-el"
            preload="auto"
            width="1920"
            height="1080"
            playsinline
            muted
            src="/vsl/funnel biz revammpo new vsl /Stop Losing Clients to Outdated Websites.mp4#t=0.001"
          ></video>
          <!-- Play overlay -->
          <div class="bv-overlay" id="bv-overlay">
            <button class="bv-play-btn" id="bv-play-btn" aria-label="Play video">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>
          <!-- Controls bar -->
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
    </div>

    <!-- White section: support text, CTAs, testimonials -->
    <div class="funnel-below-video">

      <!-- Supporting Text -->
      <p class="funnel-support-text">&darr; Book your strategy call &darr;</p>

      <!-- CTA Button 1 -->
      <div class="funnel-cta-wrap">
        <button class="funnel-cta-btn strat-modal-trigger" id="strat-cta-1">Book My Call</button>
      </div>

      <!-- Generous Spacer -->
      <div class="funnel-spacer"></div>

      <!-- Testimonials Section -->
      <div class="funnel-testimonials">
        <h2 class="funnel-testimonials-heading">What our clients are saying:</h2>
        <div class="funnel-testimonial-video">
          <div class="custom-testimonial-video-wrap" style="width: 100%; aspect-ratio: 9/16; border-radius: var(--r-lg, 16px); overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.15); background: #000; position: relative;">
            <video class="testimonial-video" preload="metadata" loop muted playsinline style="width: 100%; height: 100%; display: block; border: none; object-fit: cover;" src="/testimonials/sonder%20training%20group%20testimonial.mp4#t=0.001">
              Your browser does not support the video tag.
            </video>
            <div class="testimonial-video-overlay">
              <div class="testimonial-play-btn">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#000" style="margin-left: 3px;"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <p class="funnel-testimonial-quote">"We approached Alexi at Atlantic Bear, who was absolutely fantastic at putting together our ideas and bringing them across on the website in a way that really engaged our target market."</p>
        <a href="https://sondertraininggroup.com/" target="_blank" rel="noopener" class="funnel-testimonial-link">Take a look at the website we built for them &rarr;</a>
      </div>

      <!-- CTA Button 2 -->
      <div class="funnel-cta-wrap funnel-cta-wrap-bottom">
        <button class="funnel-cta-btn strat-modal-trigger" id="strat-cta-2">Book My Call</button>
      </div>

      <!-- Bottom Padding -->
      <div class="funnel-bottom-pad"></div>
    </div>
  </div>

  <!-- Strategy Booking Qualifying Modal (Step 1: Contact -> Step 2: Revenue -> Step 3: Calendly -> Step 4: Confirm) -->
  <div class="booking-modal-overlay" id="strat-booking-modal">
    <div class="booking-modal-container">
      <div class="booking-modal-header">
        <div class="booking-modal-steps">
          <span class="step-badge" id="strat-modal-step-badge">Step <span id="strat-modal-step-num">1</span> of 3</span>
          <h3 class="booking-modal-title" id="strat-modal-step-title">Tell us about yourself</h3>
        </div>
        <button class="booking-modal-close" id="strat-modal-close-btn" aria-label="Close modal">&times;</button>
      </div>
      
      <div class="booking-modal-progress">
        <div class="booking-modal-progress-bar" id="strat-modal-progress-bar" style="width: 33%;"></div>
      </div>
      
      <div class="booking-modal-body">
        <!-- Step 1: Contact Form (Name + Phone) -->
        <div class="booking-modal-step active" id="strat-modal-step-1">
          <form id="strat-modal-step1-form" class="funnel-modal-form" onsubmit="return false;">
            <div class="funnel-form-group">
              <label for="strat-input-name" class="funnel-form-label">Full Name</label>
              <input type="text" id="strat-input-name" class="funnel-form-input" placeholder="e.g. John Smith" required />
            </div>
            <div class="funnel-form-group">
              <label for="strat-input-phone" class="funnel-form-label">Phone Number</label>
              <div class="phone-input-wrap">
                <span class="phone-flag-prefix" id="strat-phone-flag-prefix">🇦🇪</span>
                <input type="tel" id="strat-input-phone" class="funnel-form-input phone-with-flag" value="+971 " placeholder="+971 50 123 4567" required />
              </div>
            </div>
            <div id="strat-modal-step1-error" class="funnel-form-error" style="display:none;">Please enter your name and phone number to continue.</div>
            <button type="submit" id="strat-modal-step1-next-btn" class="funnel-modal-btn">Next &rarr;</button>
          </form>
        </div>

        <!-- Step 2: Business Name & Revenue Qualification -->
        <div class="booking-modal-step" id="strat-modal-step-2" style="display: none;">
          <form id="strat-modal-step2-form" class="funnel-modal-form" onsubmit="return false;">
            <div class="funnel-form-group">
              <label for="strat-input-business" class="funnel-form-label">Business / Company Name</label>
              <input type="text" id="strat-input-business" class="funnel-form-input" placeholder="e.g. Acme Studio" required />
            </div>
            <div class="funnel-form-group">
              <label for="strat-select-revenue" class="funnel-form-label">What’s your monthly revenue roughly?</label>
              <select id="strat-select-revenue" class="funnel-form-input" required>
                <option value="" disabled selected>Select monthly revenue range...</option>
                <option value="Under AED 5k/month">Under AED 5k/month</option>
                <option value="AED 5k - 20k/month">AED 5k - 20k/month</option>
                <option value="AED 20k - 50k/month">AED 20k - 50k/month</option>
                <option value="AED 50k - 100k/month">AED 50k - 100k/month</option>
                <option value="AED 100k+/month">AED 100k+/month</option>
                <option value="Rather not say">Rather not say</option>
              </select>
            </div>
            <div id="strat-modal-step2-error" class="funnel-form-error" style="display:none;">Please enter your business name and select your monthly revenue.</div>
            <button type="submit" id="strat-modal-step2-submit-btn" class="funnel-modal-btn">Continue to Calendar &rarr;</button>
          </form>
        </div>
        
        <!-- Step 3: Calendly Embed (Prefilled) -->
        <div class="booking-modal-step" id="strat-modal-step-3" style="display: none;">
          <div class="modal-calendly-widget-wrap">
            <div id="strat-modal-calendly-container" style="min-width:320px;height:580px;width:100%;"></div>
          </div>
        </div>

        <!-- Step 4: Confirmation Screen -->
        <div class="booking-modal-step" id="strat-modal-step-4" style="display: none;">
          <div class="funnel-confirm-container">
            <div class="funnel-confirm-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent, #3b69ff)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 class="funnel-confirm-title">Call Scheduled!</h3>
            <p class="funnel-confirm-text">You'll have a meeting invitation waiting in your inbox.</p>
            <p class="funnel-confirm-subtext">Open the email invitation and click <strong>Yes</strong>, <strong>Accept</strong>, or <strong>Add to calendar</strong> to confirm your slot.</p>
            
            <div class="funnel-confirm-img-wrap">
              <img src="/exemple on how to accept meeting to calender.png" alt="Example of accepting meeting invitation in calendar" class="funnel-confirm-img" />
            </div>

            <div class="funnel-confirm-footer">
              <a href="/pricing" data-link="pricing" class="funnel-confirm-pricing-link" id="strat-confirm-pricing-link">Want to check out our packages? Click here &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}




// ─── Booked / Confirmation Page (/booked) ──────────────────────────────────────
function BookedPage(): string {
  return `
  <div class="funnel-page">
    <!-- Top Bar -->
    <div class="funnel-urgency-bar">
      <a href="/" class="funnel-urgency-logo" data-link="home" aria-label="Atlantic Bear Home">
        <span class="logo-wordmark">Atlantic</span>
        <img src="/atlanticbear-logo.png" alt="Atlantic Bear Logo" class="logo-bear-img" width="36" height="36" />
      </a>
      <div class="funnel-urgency-pill-wrap">
        <div class="funnel-urgency-pill" style="border-color: rgba(62,207,142,0.4); background: rgba(62,207,142,0.1); color: #3ecf8e;">
          <span class="urgency-dot" style="background: #3ecf8e;"></span>
          <span>CALL CONFIRMED — YOU'RE ALL SET</span>
        </div>
      </div>
    </div>

    <!-- Main Confirmation Content -->
    <div class="funnel-hero" style="padding-bottom: 60px;">
      <div style="width:64px; height:64px; margin: 0 auto 20px; border-radius:50%; background:rgba(59,105,255,0.15); display:flex; align-items:center; justify-content:center;">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent, #3b69ff)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="36" height="36">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <h1 class="funnel-headline" style="font-size: clamp(1.8rem, 4vw, 2.8rem); margin-bottom: 14px;">CONFIRM YOUR CALL</h1>
      <p class="funnel-subheadline" style="max-width: 640px; margin: 0 auto 16px; font-size: 1.15rem; line-height: 1.5;">
        Go to your email right now — you'll have a meeting invitation waiting for you.
      </p>
      <p style="font-size: 0.98rem; color: rgba(255,255,255,0.8); max-width: 620px; margin: 0 auto 28px; line-height: 1.6;">
        It's going to ask you to click either <strong>Yes</strong> or <strong>Accept</strong>. Simply click that to add it to your calendar so we can show up on the meeting, and we're all set!
      </p>
      
      <!-- Calendar Accept Image Banner -->
      <div style="max-width: 580px; margin: 0 auto 36px; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 36px rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.15);">
        <img src="/exemple on how to accept meeting to calender.png" alt="Example of accepting meeting invitation in calendar" style="width: 100%; display: block;" />
      </div>

      <div style="margin-top: 24px;">
        <a href="/pricing" data-link="pricing" style="color: rgba(255,255,255,0.75); text-decoration: underline; font-size: 0.95rem; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.75)'">
          Want to check out our packages? Click here &rarr;
        </a>
      </div>
    </div>
  </div>
  `;
}


// ─── Booking Page New (with Popups) ───────────────────────────────────────────
function BookingNewPage(): string {
  return `
  <!-- HEADER -->
  <div class="page-header booking-page-header">
    <div class="container">
      <div class="booking-page-badge">For Small Business Owners in the UAE</div>
      <h1>See Your Website<br><span style="color:var(--accent);">Before You Pay</span></h1>
      <p class="booking-page-value-prop">Whether you clicked our ad or found us online, you're here because you want a better website for your business. Watch the video below to see exactly what we'll build for you then book your free demo call.</p>
      <div class="booking-page-divider"></div>
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
              preload="metadata"
              width="1920"
              height="1080"
              playsinline
              src="/videos for funnel call/video for funnel v4/Atlantic Bear Free Website Demo Pricing Plans.mp4#t=0.001"
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

        <!-- NEW BUTTON UNDER VIDEO CARD -->
        <div class="booking-step-card reveal" style="text-align: center; padding: 0; margin-top: -40px; margin-bottom: 20px;">
          <div class="video-cta-container" style="text-align: center;">
            <button id="book-demo-btn-v2" class="btn btn-primary btn-large" style="padding: 16px 42px; font-size: 1.25rem; border-radius: var(--r-md); font-weight: 800; box-shadow: var(--shadow-md); letter-spacing: -0.01em; cursor: pointer;">
              Book my free demo
            </button>
          </div>
        </div>

        <!-- BRIDGE: video → calendar -->
        <div class="booking-bridge-text reveal">
          <p>Now that you've watched the video, book your call below to get your free demo.</p>
        </div>

        <!-- BOOKING CALENDAR -->
        <div class="booking-step-card reveal" id="booking-calendar">
          <div class="booking-step-header">
            <h2 class="booking-step-title">Book your free <span style="color:var(--accent);">demo call</span></h2>
          </div>

          <div class="calendly-widget-wrap">
            <!-- Calendly inline widget begin -->
            <div class="calendly-inline-widget" data-url="https://calendly.com/officialatlanticbear/demo-call?hide_gdpr_banner=1&primary_color=3366ff" style="min-width:320px;height:900px;width:100%;"></div>
            <!-- Calendly inline widget end -->
          </div>

          <div class="fallback-calendly-link-wrap">
            <a href="https://calendly.com/officialatlanticbear/demo-call?hide_gdpr_banner=1&primary_color=3366ff" target="_blank" rel="noopener" class="fallback-calendly-link">
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
            <div class="custom-testimonial-video-wrap" style="max-width: 320px; width: 100%; aspect-ratio: 9/16; border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--shadow-md); background: #000; border: 1px solid var(--border); position: relative;">
              <video class="testimonial-video" preload="metadata" loop muted playsinline style="width: 100%; height: 100%; display: block; border: none; object-fit: cover;" src="/testimonials/sonder%20training%20group%20testimonial.mp4#t=0.001">
                Your browser does not support the video tag.
              </video>
              <div class="testimonial-video-overlay">
                <div class="testimonial-play-btn">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#000" style="margin-left: 3px;"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
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
type Page = 'home' | 'pricing' | 'work' | 'contact' | 'testimonials' | 'booking' | 'booking-new' | 'meta-ads' | 'booked';

const pageMap: Record<Page, () => string> = {
  home:         HomePage,
  pricing:      PricingPage,
  work:         WorkPage,
  contact:      ContactPage,
  testimonials: TestimonialsPage,
  booking:      StrategyBookingPage,
  booked:       BookedPage,
  'booking-new': BookingNewPage,
  'meta-ads':   MetaAdsPage,
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
    title: 'Book a Strategy Call | Atlantic Bear',
    desc: 'Watch our video, schedule your free 30-minute strategy call, and view our client success stories. Start your UAE website project today.'
  },
  booked: {
    title: 'Call Confirmed | Atlantic Bear',
    desc: 'Your call is locked in! Make sure to add the event to your calendar and watch the pre-call video before our session.'
  },
  'booking-new': {
    title: 'Book a Call (New Flow) | Atlantic Bear Discovery Session',
    desc: 'Watch our video, tell us about yourself, and schedule your free 30-minute discovery call. Start your UAE website project today.'
  },
  'meta-ads': {
    title: 'Meta Ads for UAE Small Businesses | Atlantic Bear',
    desc: 'Drive local client leads via Facebook & Instagram ads for small businesses in the UAE. AED 2,500/mo retainer.'
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
  if (cleanPath === 'pricing' || cleanPath === 'work' || cleanPath === 'contact' || cleanPath === 'testimonials' || cleanPath === 'booking' || cleanPath === 'booking-new' || cleanPath === 'meta-ads' || cleanPath === 'booked') {
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
function attachLoaderToContainer(container: HTMLElement) {
  const computedStyle = window.getComputedStyle(container);
  if (computedStyle.position === 'static') {
    container.style.position = 'relative';
  }

  const spinner = document.createElement('div');
  spinner.className = 'calendly-spinner-wrap';
  spinner.style.display = 'flex';
  spinner.style.justifyContent = 'center';
  spinner.style.alignItems = 'center';
  spinner.style.position = 'absolute';
  spinner.style.top = '50%';
  spinner.style.left = '50%';
  spinner.style.transform = 'translate(-50%, -50%)';
  spinner.style.pointerEvents = 'none';
  spinner.style.zIndex = '1';
  spinner.innerHTML = `
    <div style="width: 40px; height: 40px; border: 4px solid rgba(59,105,255,0.1); border-left-color: var(--accent, #3b69ff); border-radius: 50%; animation: calendly-spin 1s linear infinite;"></div>
    <style>
      @keyframes calendly-spin {
        to { transform: rotate(360deg); }
      }
    </style>
  `;
  container.appendChild(spinner);

  // Observe container to find when the iframe is added.
  // Render iframe on top of the spinner (z-index 2) so it's instantly interactive as it loads.
  const observer = new MutationObserver(() => {
    const iframe = container.querySelector('iframe');
    if (iframe) {
      iframe.style.position = 'relative';
      iframe.style.zIndex = '2';
      
      iframe.onload = () => {
        spinner.remove();
      };
      
      // Safety fallback: remove spinner after 2.5s to ensure the screen is clean
      setTimeout(() => {
        spinner.remove();
      }, 2500);
      
      observer.disconnect();
    }
  });
  observer.observe(container, { childList: true });
}

function initTestimonialVideos() {
  const wrappers = document.querySelectorAll('.custom-testimonial-video-wrap');


  wrappers.forEach(wrap => {
    const overlay = wrap.querySelector('.testimonial-video-overlay') as HTMLElement | null;
    const video = wrap.querySelector('video') as HTMLVideoElement | null;
    
    if (overlay && video) {
      overlay.addEventListener('click', (e) => {
        e.stopPropagation();
        
        video.muted = false;
        video.currentTime = 0;
        video.controls = true;
        overlay.style.display = 'none';

        video.play().catch(err => {
          console.error("Play failed:", err);
        });
      });
    }
  });
}

function loadCalendlyWidget() {
  const container = document.querySelector('.calendly-inline-widget') as HTMLElement | null;
  if (!container) return;

  const init = () => {
    container.innerHTML = '';
    attachLoaderToContainer(container);
    (window as any).Calendly.initInlineWidget({
      url: 'https://calendly.com/officialatlanticbear/demo-call?hide_gdpr_banner=1&primary_color=3366ff',
      parentElement: container,
    });
  };

  // If SDK already loaded (it's in <head> as async), init right away
  if ((window as any).Calendly) {
    init();
    return;
  }

  // The SDK is loading async - wait for it (poll, max 10s)
  const script = document.getElementById('calendly-sdk') as HTMLScriptElement | null;
  if (script) {
    script.addEventListener('load', init, { once: true });
  } else {
    // Fallback: inject script if somehow not in DOM
    const s = document.createElement('script');
    s.id = 'calendly-sdk';
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    s.addEventListener('load', init, { once: true });
    document.head.appendChild(s);
  }
}

// ─── Booking Page Video Loader ────────────────────────────────────────────────
function initBookingPageVideo(rigged = false) {
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

  let audioCtx: AudioContext | null = null;
  let gainNode: GainNode | null = null;

  const boostAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtx) {
        audioCtx = new AudioCtx();
        const source = audioCtx.createMediaElementSource(video);
        gainNode = audioCtx.createGain();
        gainNode.gain.value = 2.0; // 2x volume boost
        source.connect(gainNode);
        gainNode.connect(audioCtx.destination);
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    } catch (e) {
      console.warn('AudioContext boost failed:', e);
    }
  };

  const videoSrc = video.getAttribute('data-src');
  const ensureVideoSource = () => {
    if (videoSrc && !video.getAttribute('src')) {
      video.setAttribute('src', videoSrc);
      video.load();
    }
  };

  // ─── Autoplay muted preview loop (0-5s) ───
  let isPreviewLooping = true;
  const PREVIEW_END = 5; // seconds

  const startPreviewLoop = () => {
    video.muted = true;
    video.currentTime = 0;
    video.play().catch(() => { /* autoplay blocked, that's fine */ });
  };

  // Loop back to 0 when hitting 5s during preview mode
  video.addEventListener('timeupdate', () => {
    if (isPreviewLooping && video.currentTime >= PREVIEW_END) {
      video.currentTime = 0;
    }
  });

  // Start the muted preview loop after a short delay
  setTimeout(startPreviewLoop, 800);

  const fmtTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2,'0')}`;
  };

  // ─── Rigged progress bar helpers ───
  // First 90 seconds visually fills to 60%, remaining time fills the last 40%
  const RIGGED_FAST_SEC = 90;
  const RIGGED_FAST_VISUAL = 60;

  const getVisualPct = (time: number, dur: number): number => {
    if (!rigged || dur <= RIGGED_FAST_SEC) return (time / dur) * 100;
    if (time <= RIGGED_FAST_SEC) return (time / RIGGED_FAST_SEC) * RIGGED_FAST_VISUAL;
    return RIGGED_FAST_VISUAL + ((time - RIGGED_FAST_SEC) / (dur - RIGGED_FAST_SEC)) * (100 - RIGGED_FAST_VISUAL);
  };

  const getTimeFromVisualPct = (vPct: number, dur: number): number => {
    if (!rigged || dur <= RIGGED_FAST_SEC) return (vPct / 100) * dur;
    if (vPct <= RIGGED_FAST_VISUAL) return (vPct / RIGGED_FAST_VISUAL) * RIGGED_FAST_SEC;
    return RIGGED_FAST_SEC + ((vPct - RIGGED_FAST_VISUAL) / (100 - RIGGED_FAST_VISUAL)) * (dur - RIGGED_FAST_SEC);
  };

  const updateProgress = () => {
    if (!video.duration) return;
    const pct = getVisualPct(video.currentTime, video.duration);
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressThumb) progressThumb.style.left = pct + '%';
    if (timeDisplay) timeDisplay.textContent = `${fmtTime(video.currentTime)} / ${fmtTime(video.duration)}`;
  };

  const setPlayState = (playing: boolean) => {
    const iconPlay = playpause?.querySelector('.icon-play') as HTMLElement | null;
    const iconPause = playpause?.querySelector('.icon-pause') as HTMLElement | null;
    if (iconPlay) iconPlay.style.display = (playing && !isPreviewLooping) ? 'none' : 'block';
    if (iconPause) iconPause.style.display = (playing && !isPreviewLooping) ? 'block' : 'none';
    if (overlay) overlay.style.display = (playing && !isPreviewLooping) ? 'none' : 'flex';
    if (wrap) {
      if (playing && !isPreviewLooping) {
        wrap.classList.add('playing');
      } else {
        wrap.classList.remove('playing');
      }
    }
  };

  // Play on overlay click — stop preview loop, unmute, play
  overlay.addEventListener('click', () => {
    if (isPreviewLooping) {
      isPreviewLooping = false;
      video.muted = false;
      // Strip #t=0.001 fragment to prevent Safari resetting to start on pause/resume
      const rawSrc = video.src.split('#')[0];
      if (video.src !== rawSrc) {
        video.src = rawSrc;
        video.load();
      }
      video.currentTime = 0;
    }
    ensureVideoSource();
    boostAudio();
    setPlayState(true);
    video.play();
  });

  // Click on video toggles play/pause
  video.addEventListener('click', () => {
    if (isPreviewLooping) {
      isPreviewLooping = false;
      video.muted = false;
      const rawSrc = video.src.split('#')[0];
      if (video.src !== rawSrc) {
        video.src = rawSrc;
        video.load();
      }
      video.currentTime = 0;
      boostAudio();
      setPlayState(true);
      video.play();
      return;
    }
    ensureVideoSource();
    boostAudio();
    if (video.paused) video.play(); else video.pause();
  });

  video.addEventListener('play', () => setPlayState(true));
  video.addEventListener('pause', () => setPlayState(false));
  video.addEventListener('ended', () => setPlayState(false));
  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('loadedmetadata', updateProgress);

  // ─── Video Analytics Tracking ───
  let played = false;
  const milestonesFired = {
    m25: false,
    m50: false,
    m75: false,
    m100: false
  };
  const intervalsFired: Record<number, boolean> = {};

  video.addEventListener('timeupdate', () => {
    const duration = video.duration;
    if (!duration) return;

    const currentTime = video.currentTime;
    const pct = (currentTime / duration) * 100;

    // Track play initiation (at >0.5s playback)
    if (!played && currentTime > 0.5) {
      played = true;
      trackAbacusEvent('videoplay');
    }

    // Milestones progress
    if (pct >= 25 && !milestonesFired.m25) {
      milestonesFired.m25 = true;
      trackAbacusEvent('videowatch_25pct');
    }
    if (pct >= 50 && !milestonesFired.m50) {
      milestonesFired.m50 = true;
      trackAbacusEvent('videowatch_50pct');
    }
    if (pct >= 75 && !milestonesFired.m75) {
      milestonesFired.m75 = true;
      trackAbacusEvent('videowatch_75pct');
    }
    if (pct >= 98 && !milestonesFired.m100) {
      milestonesFired.m100 = true;
      trackAbacusEvent('videowatch_complete');
    }

    // Time-based retention drops (10s hook and 30s intro)
    const trackingSeconds = [10, 30];
    const currentSecond = Math.floor(currentTime);
    trackingSeconds.forEach(sec => {
      if (currentSecond >= sec && !intervalsFired[sec]) {
        intervalsFired[sec] = true;
        trackAbacusEvent(`videowatch_${sec}s`);
      }
    });
  });

  // Playpause button
  playpause.addEventListener('click', () => {
    ensureVideoSource();
    boostAudio();
    if (video.paused) video.play(); else video.pause();
  });

  // Progress bar scrubbing
  if (progressWrap) {
    const scrub = (e: MouseEvent | TouchEvent) => {
      const rect = (progressWrap as HTMLElement).getBoundingClientRect();
      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const visualPct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      video.currentTime = getTimeFromVisualPct(visualPct, video.duration);
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

// ─── Booking Modal Flow Handler (3-Step: Name/Phone -> Calendly -> Confirmation) ───
function initBookingModal() {
  const modal = document.getElementById('booking-modal') as HTMLElement | null;
  const openBtn = document.getElementById('book-demo-btn-v2') as HTMLElement | null;
  const closeBtn = document.getElementById('booking-modal-close-btn') as HTMLElement | null;
  const step1 = document.getElementById('modal-step-1') as HTMLElement | null;
  const step2 = document.getElementById('modal-step-2') as HTMLElement | null;
  const step3 = document.getElementById('modal-step-3') as HTMLElement | null;
  const stepNum = document.getElementById('modal-step-num') as HTMLElement | null;
  const stepTitle = document.getElementById('modal-step-title') as HTMLElement | null;
  const stepBadge = document.getElementById('modal-step-badge') as HTMLElement | null;
  const progressBar = document.getElementById('modal-progress-bar') as HTMLElement | null;
  const step1Form = document.getElementById('modal-step1-form') as HTMLFormElement | null;
  const inputName = document.getElementById('modal-input-name') as HTMLInputElement | null;
  const inputPhone = document.getElementById('modal-input-phone') as HTMLInputElement | null;
  const step1Error = document.getElementById('modal-step1-error') as HTMLElement | null;
  const pricingLink = document.getElementById('modal-confirm-pricing-link') as HTMLElement | null;

  if (!modal || !closeBtn) return;

  // Move the modal to document.body to bypass transformed parent elements and center perfectly relative to viewport
  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }

  let userName = '';
  let userPhone = '';
  let lastPrefillStr = '';

  // Restore name & phone inputs from localStorage immediately so we can preload
  if (inputName && localStorage.getItem('feather_booking_name')) {
    inputName.value = localStorage.getItem('feather_booking_name') || '';
  }
  if (inputPhone && localStorage.getItem('feather_booking_phone')) {
    inputPhone.value = localStorage.getItem('feather_booking_phone') || '';
  }

  // ─── Phone flag prefix logic ───
  const flagEl = document.getElementById('phone-flag-prefix');
  const countryFlags: Record<string, string> = {
    '+971': '\ud83c\udde6\ud83c\uddea', '+966': '\ud83c\uddf8\ud83c\udde6', '+968': '\ud83c\uddf4\ud83c\uddf2', '+974': '\ud83c\uddf6\ud83c\udde6', '+973': '\ud83c\udde7\ud83c\udded', '+965': '\ud83c\uddf0\ud83c\uddfc',
    '+44': '\ud83c\uddec\ud83c\udde7', '+1': '\ud83c\uddfa\ud83c\uddf8', '+91': '\ud83c\uddee\ud83c\uddf3', '+92': '\ud83c\uddf5\ud83c\uddf0', '+63': '\ud83c\uddf5\ud83c\udded',
    '+20': '\ud83c\uddea\ud83c\uddec', '+27': '\ud83c\uddff\ud83c\udde6', '+33': '\ud83c\uddeb\ud83c\uddf7', '+49': '\ud83c\udde9\ud83c\uddea', '+61': '\ud83c\udde6\ud83c\uddfa',
    '+62': '\ud83c\uddee\ud83c\udde9', '+90': '\ud83c\uddf9\ud83c\uddf7', '+234': '\ud83c\uddf3\ud83c\uddec', '+254': '\ud83c\uddf0\ud83c\uddea',
  };

  const updatePhoneFlag = () => {
    if (!flagEl || !inputPhone) return;
    const val = inputPhone.value.trim();
    let matched = '\ud83c\udde6\ud83c\uddea'; // default UAE
    for (const [code, flag] of Object.entries(countryFlags)) {
      if (val.startsWith(code)) { matched = flag; break; }
    }
    flagEl.textContent = matched;
  };

  const formatPhoneNumber = () => {
    if (!inputPhone) return;
    let val = inputPhone.value;
    let prefix = '';

    // Find country code prefix
    for (const code of Object.keys(countryFlags)) {
      if (val.startsWith(code)) {
        prefix = code + ' ';
        break;
      }
    }

    if (!prefix && val.startsWith('+')) {
      const spaceIdx = val.indexOf(' ');
      if (spaceIdx > 0) {
        prefix = val.substring(0, spaceIdx + 1);
      } else {
        const match = val.match(/^\+\d+/);
        if (match) prefix = match[0] + ' ';
      }
    }

    const suffixRaw = val.substring(prefix.length);
    const digits = suffixRaw.replace(/\D/g, '').substring(0, 9); // max 9 digits for UAE mobile

    let formattedSuffix = '';
    if (digits.length > 0) {
      if (digits.length <= 2) {
        formattedSuffix = digits;
      } else if (digits.length <= 5) {
        formattedSuffix = `${digits.substring(0, 2)} ${digits.substring(2)}`;
      } else {
        formattedSuffix = `${digits.substring(0, 2)} ${digits.substring(2, 5)} ${digits.substring(5)}`;
      }
    }

    const finalVal = prefix + formattedSuffix;
    if (inputPhone.value !== finalVal) {
      inputPhone.value = finalVal;
    }
  };

  if (inputPhone) {
    if (!inputPhone.value || inputPhone.value.trim() === '' || inputPhone.value.trim() === '+971') {
      inputPhone.value = '+971 ';
    }
    
    inputPhone.addEventListener('input', (e) => {
      const inputEvent = e as InputEvent;
      // Allow user to backspace space characters and prefixes without auto-formatting snapping it back
      if (inputEvent.inputType && inputEvent.inputType.startsWith('delete')) {
        updatePhoneFlag();
        return;
      }
      formatPhoneNumber();
      updatePhoneFlag();
    });
    updatePhoneFlag();
  }

  const initCalendlyIframe = () => {
    if (!userName || !userPhone) return;
    const prefillStr = `${userName}|${userPhone}`;
    if (lastPrefillStr === prefillStr) return; // Already preloaded/preloading this configuration
    lastPrefillStr = prefillStr;

    const container = document.getElementById('modal-calendly-container');
    if (!container) return;

    container.innerHTML = '';
    attachLoaderToContainer(container);
    const calendlyBaseUrl = 'https://calendly.com/officialatlanticbear/demo-call?hide_gdpr_banner=1&primary_color=3366ff';
    const prefillUrl = `${calendlyBaseUrl}&name=${encodeURIComponent(userName)}&a1=${encodeURIComponent(userPhone)}`;
    const prefillOpts = {
      url: prefillUrl,
      parentElement: container,
      prefill: {
        name: userName,
        customAnswers: { a1: userPhone }
      }
    };

    const doInit = () => (window as any).Calendly.initInlineWidget(prefillOpts);

    if ((window as any).Calendly) {
      doInit();
    } else {
      // SDK is loading via <head> script — just wait for it
      const existingScript = document.getElementById('calendly-sdk') as HTMLScriptElement | null;
      if (existingScript) {
        existingScript.addEventListener('load', doInit, { once: true });
      }
    }
  };

  // Preload Calendly in background as soon as user types their name and phone
  const handleInputCheck = () => {
    const nameVal = inputName?.value.trim() || '';
    const phoneVal = inputPhone?.value.trim() || '';
    if (nameVal.length >= 3 && phoneVal.length >= 5) {
      userName = nameVal;
      userPhone = phoneVal;
      initCalendlyIframe();
    }
  };

  inputName?.addEventListener('input', handleInputCheck);
  inputPhone?.addEventListener('input', handleInputCheck);

  // If user has saved name+phone, preload Calendly iframe right away
  handleInputCheck();

  const goToStep = (step: number) => {
    if (step === 1) {
      if (step1) step1.style.display = 'block';
      if (step2) step2.style.display = 'none';
      if (step3) step3.style.display = 'none';
      if (stepNum) stepNum.textContent = '1';
      if (stepTitle) stepTitle.textContent = 'Tell us about yourself';
      if (stepBadge) stepBadge.style.display = 'inline';
      if (progressBar) progressBar.style.width = '50%';
    } else if (step === 2) {
      if (step1) step1.style.display = 'none';
      if (step2) step2.style.display = 'block';
      if (step3) step3.style.display = 'none';
      if (stepNum) stepNum.textContent = '2';
      if (stepTitle) stepTitle.textContent = 'Schedule your demo call';
      if (stepBadge) stepBadge.style.display = 'inline';
      if (progressBar) progressBar.style.width = '100%';

      // Ensure widget is loaded with the final values (even if they skipped keyboard preload triggers)
      userName = inputName?.value.trim() || '';
      userPhone = inputPhone?.value.trim() || '';
      initCalendlyIframe();
    } else if (step === 3) {
      if (step1) step1.style.display = 'none';
      if (step2) step2.style.display = 'none';
      if (step3) step3.style.display = 'block';
      if (stepTitle) stepTitle.textContent = 'Call Confirmed!';
      if (stepBadge) stepBadge.style.display = 'none';
      if (progressBar) progressBar.style.width = '100%';
    }
  };

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
    if (step1Error) step1Error.style.display = 'none';

    // Reset Calendly preload cache so it re-inits with whatever the user enters this session
    lastPrefillStr = '';

    // Restore name & phone inputs from localStorage
    if (inputName && localStorage.getItem('feather_booking_name')) {
      inputName.value = localStorage.getItem('feather_booking_name') || '';
    }
    if (inputPhone && localStorage.getItem('feather_booking_phone')) {
      inputPhone.value = localStorage.getItem('feather_booking_phone') || '';
    }

    // Always start at Step 1
    goToStep(1);
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Step 1 Form submission / Next button click
  const handleStep1Submit = (e?: Event) => {
    if (e) e.preventDefault();
    const nameVal = inputName?.value.trim() || '';
    const phoneVal = inputPhone?.value.trim() || '';

    if (!nameVal || !phoneVal) {
      if (step1Error) step1Error.style.display = 'block';
      return;
    }

    // Capitalize name nicely (e.g. "john smith" -> "John Smith")
    const formattedName = nameVal
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (step1Error) step1Error.style.display = 'none';
    userName = formattedName;
    userPhone = phoneVal;

    goToStep(2);
  };

  if (step1Form) {
    step1Form.addEventListener('submit', handleStep1Submit);
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  const escHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  };
  window.addEventListener('keydown', escHandler);

  if (pricingLink) {
    pricingLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
      navigate('pricing', true);
    });
  }

  (window as any).goToBookingStep = goToStep;
  (window as any).openBookingModal = openModal;
}


// ─── Strategy Booking Qualifying Modal Flow Handler (4-Step) ────────────────
let isCurrentStrategyCallHighTier = true; // Global flag to determine if pixel should fire
let lastSubmittedLead = {
  name: '',
  phone: '',
  business: '',
  revenue: ''
};

function initStrategyBookingModal() {
  const modal = document.getElementById('strat-booking-modal') as HTMLElement | null;
  const closeBtn = document.getElementById('strat-modal-close-btn') as HTMLElement | null;
  const step1 = document.getElementById('strat-modal-step-1') as HTMLElement | null;
  const step2 = document.getElementById('strat-modal-step-2') as HTMLElement | null;
  const step3 = document.getElementById('strat-modal-step-3') as HTMLElement | null;
  const step4 = document.getElementById('strat-modal-step-4') as HTMLElement | null;
  const stepNum = document.getElementById('strat-modal-step-num') as HTMLElement | null;
  const stepTitle = document.getElementById('strat-modal-step-title') as HTMLElement | null;
  const stepBadge = document.getElementById('strat-modal-step-badge') as HTMLElement | null;
  const progressBar = document.getElementById('strat-modal-progress-bar') as HTMLElement | null;
  
  const step1Form = document.getElementById('strat-modal-step1-form') as HTMLFormElement | null;
  const step2Form = document.getElementById('strat-modal-step2-form') as HTMLFormElement | null;
  const inputName = document.getElementById('strat-input-name') as HTMLInputElement | null;
  const inputPhone = document.getElementById('strat-input-phone') as HTMLInputElement | null;
  const inputBusiness = document.getElementById('strat-input-business') as HTMLInputElement | null;
  const selectRevenue = document.getElementById('strat-select-revenue') as HTMLSelectElement | null;
  const step1Error = document.getElementById('strat-modal-step1-error') as HTMLElement | null;
  const step2Error = document.getElementById('strat-modal-step2-error') as HTMLElement | null;
  const pricingLink = document.getElementById('strat-modal-confirm-pricing-link') as HTMLElement | null;

  if (!modal || !closeBtn) return;

  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }

  let stratName = '';
  let stratPhone = '';
  let stratBusiness = '';
  let stratRevenue = '';

  const openModal = () => {
    // Reset form inputs each time modal opens so fields start clean
    if (inputName) inputName.value = '';
    if (inputPhone) inputPhone.value = '+971 ';
    if (inputBusiness) inputBusiness.value = '';
    if (selectRevenue) selectRevenue.value = '';
    if (step1Error) step1Error.style.display = 'none';
    if (step2Error) step2Error.style.display = 'none';
    goToStep(1);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  const goToStep = (step: number) => {
    if (!step1 || !step2 || !step3 || !step4 || !stepNum || !stepTitle || !stepBadge || !progressBar) return;

    if (step === 1) {
      step1.style.display = 'block'; step2.style.display = 'none'; step3.style.display = 'none'; step4.style.display = 'none';
      stepBadge.style.display = 'inline'; stepNum.textContent = '1'; stepTitle.textContent = 'Tell us about yourself';
      progressBar.style.width = '33%';
    } else if (step === 2) {
      step1.style.display = 'none'; step2.style.display = 'block'; step3.style.display = 'none'; step4.style.display = 'none';
      stepBadge.style.display = 'inline'; stepNum.textContent = '2'; stepTitle.textContent = 'Your business details';
      progressBar.style.width = '66%';
    } else if (step === 3) {
      step1.style.display = 'none'; step2.style.display = 'none'; step3.style.display = 'block'; step4.style.display = 'none';
      stepBadge.style.display = 'inline'; stepNum.textContent = '3'; stepTitle.textContent = 'Schedule your strategy call';
      progressBar.style.width = '100%';
      initCalendlyEmbed();
    } else if (step === 4) {
      step1.style.display = 'none'; step2.style.display = 'none'; step3.style.display = 'none'; step4.style.display = 'block';
      stepBadge.style.display = 'none'; stepTitle.textContent = 'Call Scheduled!';
      progressBar.style.width = '100%';
    }
  };

  const initCalendlyEmbed = () => {
    const container = document.getElementById('strat-modal-calendly-container');
    if (!container) return;

    const isUnder5k = (
      stratRevenue === 'Under AED 5k/month' ||
      stratRevenue === 'Under $5k' ||
      stratRevenue === '$0 - $5k'
    );
    isCurrentStrategyCallHighTier = !isUnder5k;

    const calendlyBaseUrl = isUnder5k
      ? 'https://calendly.com/officialatlanticbear/intro-call?primary_color=3b69ff'
      : 'https://calendly.com/officialatlanticbear/strategy-call?primary_color=3b69ff';

    const cleanRevenue = stratRevenue.replace(/–/g, '-').trim();

    // Pass custom answers across a1, a2, a3, a4 so Revenue is prefilled regardless of question order in Calendly
    const prefillUrl = `${calendlyBaseUrl}&name=${encodeURIComponent(stratName)}&a1=${encodeURIComponent(stratPhone)}&a2=${encodeURIComponent(stratBusiness)}&a3=${encodeURIComponent(cleanRevenue)}&a4=${encodeURIComponent(cleanRevenue)}`;

    container.innerHTML = '';
    attachLoaderToContainer(container);

    const prefillOpts = {
      url: prefillUrl,
      parentElement: container,
      prefill: {
        name: stratName,
        customAnswers: {
          a1: stratPhone,
          a2: stratBusiness,
          a3: cleanRevenue,
          a4: cleanRevenue,
          a5: cleanRevenue
        }
      }
    };

    const doInit = () => (window as any).Calendly.initInlineWidget(prefillOpts);
    if ((window as any).Calendly) {
      doInit();
    } else {
      const existingScript = document.getElementById('calendly-sdk') as HTMLScriptElement | null;
      if (existingScript) {
        existingScript.addEventListener('load', doInit, { once: true });
      }
    }
  };

  // Step 1 Submission
  if (step1Form) {
    step1Form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameVal = inputName?.value.trim() || '';
      const phoneVal = inputPhone?.value.trim() || '';
      if (!nameVal || !phoneVal) {
        if (step1Error) step1Error.style.display = 'block';
        return;
      }
      if (step1Error) step1Error.style.display = 'none';
      stratName = nameVal;
      stratPhone = phoneVal;
      lastSubmittedLead.name = nameVal;
      lastSubmittedLead.phone = phoneVal;
      goToStep(2);
    });
  }

  // Step 2 Submission & Apps Script POST
  if (step2Form) {
    step2Form.addEventListener('submit', (e) => {
      e.preventDefault();
      const businessVal = inputBusiness?.value.trim() || '';
      const revenueVal = selectRevenue?.value || '';

      if (!businessVal || !revenueVal) {
        if (step2Error) step2Error.style.display = 'block';
        return;
      }
      if (step2Error) step2Error.style.display = 'none';
      stratBusiness = businessVal;
      stratRevenue = revenueVal;
      lastSubmittedLead.business = businessVal;
      lastSubmittedLead.revenue = revenueVal;

      const isUnder5k = (
        revenueVal === 'Under AED 5k/month' ||
        revenueVal === 'Under $5k' ||
        revenueVal === '$0 - $5k'
      );

      // Only submit lead data to Google Sheets if revenue is >= AED 5k or "Rather not say"
      if (!isUnder5k) {
        fetch('https://script.google.com/macros/s/AKfycbxhmc6G4n4zpk0SGvjzP81_Cd9ipLxM3Wx5MZNWzF02tBqqUMD0JCAuDnH1OojQfv7vJQ/exec', {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            action: 'form_submit',
            name: stratName,
            phone: stratPhone,
            business: stratBusiness,
            revenue: stratRevenue,
            source: 'strategy_call'
          })
        }).catch(err => console.error('Google Sheet submission failed:', err));
      }

      goToStep(3);
    });
  }

  // Close triggers
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  if (pricingLink) {
    pricingLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
      navigate('pricing', true);
    });
  }

  (window as any).goToStratBookingStep = goToStep;
  (window as any).openStratBookingModal = openModal;
}

function navigate(page: Page, pushHistory = true) {
  // Remove any modal leftover from previous page render
  const oldModal = document.getElementById('booking-modal');
  if (oldModal) oldModal.remove();
  const oldStratModal = document.getElementById('strat-booking-modal');
  if (oldStratModal) oldStratModal.remove();

  // Restore body overflow to default
  document.body.style.overflow = '';

  // Stop previous tracking if any
  stopPageTimeTracking();
  stopScrollTracking();

  // Hide/show site chrome immediately for funnel landing page
  const navEl = document.getElementById('main-nav');
  const footerEl = document.querySelector('.site-footer') as HTMLElement | null;
  if (page === 'booking' || page === 'booked') {
    if (navEl) navEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'none';
  } else {
    if (navEl) navEl.style.display = '';
    if (footerEl) footerEl.style.display = '';
  }

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

    if (page === 'booking' || page === 'booked' || page === 'booking-new') {
      trackAbacusEvent('pageload', 2000); // Deferred by 2s to not block LCP/FCP paint
      startPageTimeTracking();
      startScrollTracking();
      loadCalendlyWidget();
      initBookingPageVideo(page === 'booking' || page === 'booked');

      // Initialize modals based on route
      if (page === 'booking-new') {
        initBookingModal();
        document.querySelectorAll('.funnel-cta-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if ((window as any).openBookingModal) {
              (window as any).openBookingModal();
            }
          });
        });
      } else if (page === 'booking') {
        initStrategyBookingModal();
        document.querySelectorAll('.strat-modal-trigger, .funnel-cta-wrap .funnel-cta-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if ((window as any).openStratBookingModal) {
              (window as any).openStratBookingModal();
            }
          });
        });
      }
    }

    updateMetadata(page);
    initTestimonialVideos();

    // Track page views in Meta Pixel (Website Visit)
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'PageView');
    }

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
    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/971502446531" target="_blank" rel="noopener" class="whatsapp-floating-btn" aria-label="Chat on WhatsApp">
      <span class="whatsapp-tooltip">Chat with us</span>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.864.001-2.639-1.017-5.122-2.87-6.98C16.612 1.905 14.13 .882 11.5 0.882c-5.437 0-9.863 4.415-9.866 9.866-.001 1.776.477 3.51 1.38 5.061L1.937 21.84l6.196-1.626L8.13 20.21zm10.222-3.834c-.28-.14-1.65-.815-1.906-.907-.255-.092-.44-.138-.625.14-.185.276-.71.907-.87 1.092-.16.185-.32.208-.6.068-1.785-.892-2.92-1.747-3.927-3.48-.266-.46.267-.428.762-1.42.083-.17.042-.317-.02-.457-.063-.14-.626-1.507-.857-2.064-.225-.54-.472-.466-.647-.475-.168-.008-.36-.01-.552-.01-.192 0-.504.072-.768.36-.264.288-1.008.986-1.008 2.404s1.032 2.788 1.176 2.983c.144.195 2.03 3.1 4.916 4.347.686.297 1.22.474 1.638.607.69.219 1.317.188 1.812.114.55-.082 1.65-.674 1.884-1.324.233-.65.233-1.205.163-1.324-.07-.118-.256-.184-.536-.324z"/>
      </svg>
    </a>
  `;

  delegateLinks(app);
  initNavScroll();

  // Listen for Calendly event scheduling to track conversions via Meta Pixel & update UI state.
  window.addEventListener('message', (e) => {
    if (!e.origin || !e.origin.includes('calendly.com')) return;

    let isScheduled = false;
    if (e && e.data) {
      if (typeof e.data === 'object' && e.data.event === 'calendly.event_scheduled') {
        isScheduled = true;
      }
    }

    if (isScheduled) {
      const stratModal = document.getElementById('strat-booking-modal');
      const legacyModal = document.getElementById('booking-modal');
      const isStratActive = stratModal && stratModal.classList.contains('active');

      if (isStratActive) {
        if (isCurrentStrategyCallHighTier) {
          trackAbacusEvent('bookedcall_strategy');
          if (typeof (window as any).fbq === 'function' && !sessionStorage.getItem('fbq_schedule_fired')) {
            (window as any).fbq('track', 'Schedule');
            sessionStorage.setItem('fbq_schedule_fired', '1');
          }
        } else {
          trackAbacusEvent('bookedcall_intro');
        }
        if (stratModal) stratModal.classList.remove('active');
      } else {
        // Legacy demo call booking
        trackAbacusEvent('bookedcall');
        if (legacyModal) legacyModal.classList.remove('active');
      }

      document.body.style.overflow = '';
      navigate('booked');
    }
  });

  const initialPage = getPageFromPath(window.location.pathname);
  navigate(initialPage, false);

  window.addEventListener('popstate', () => {
    const page = getPageFromPath(window.location.pathname);
    navigate(page, false);
  });
});

