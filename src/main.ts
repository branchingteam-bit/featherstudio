import seo from './seo.json';
import './style.css';

// ─── Utilities ───────────────────────────────────────────────────────────────
const $ = (sel: string, ctx: Document | Element = document) =>
  ctx.querySelector<HTMLElement>(sel);
const $$ = (sel: string, ctx: Document | Element = document) =>
  [...ctx.querySelectorAll<HTMLElement>(sel)];

const ABACUS_NAMESPACE = 'atlanticbear_analytics_8d24';

// ─── Internal Session Guard ───────────────────────────────────────────────────
// Returns true if the current session is internal/admin (should not fire pixel events)
function isInternalSession(): boolean {
  if (sessionStorage.getItem('notrack')) return true;
  try {
    if (new URLSearchParams(window.location.search).get('preview') === 'true') return true;
  } catch (_) {}
  return false;
}

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
      <span class="logo-wordmark">Atlantic Bear</span>
      <img src="/atlanticbear-mark.png" alt="Atlantic Bear Logo" class="logo-bear-img" width="56" height="56" fetchpriority="high" />
    </a>
    <div class="nav-links">
      <a href="/" class="nav-link" data-link="home"    id="nav-home">Home</a>
      <a href="/pricing" class="nav-link" data-link="pricing"  id="nav-pricing">Pricing</a>
      <a href="/testimonials" class="nav-link" data-link="testimonials" id="nav-testimonials">Testimonials</a>
      <a href="/contact" class="nav-link" data-link="contact" id="nav-contact">Contact</a>
    </div>
    <div class="nav-actions">
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
            <span class="logo-wordmark">Atlantic Bear</span>
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
        <div class="footer-legal">
          <a href="/terms" data-link="terms">Terms &amp; Conditions</a>
          <a href="/privacy" data-link="privacy">Privacy Policy</a>
        </div>
        <span>Dubai, UAE</span>
      </div>
    </div>
  </footer>`;
}


// ─── Claude Code section ─────────────────────────────────────────────────────
// The terminal is drawn in markup rather than shipped as an image, so it stays
// crisp and themable. See CLAUDE_LOGO_SLOT below for the optional brand mark.
function ClaudeCodeSection(): string {
  return `
  <!-- BUILT WITH CLAUDE CODE -->
  <section class="cc-section">
    <div class="container">
      <div class="cc-grid">

        <div class="cc-copy reveal">
          <span class="cc-badge">${Icons.code} How we build</span>
          <div class="cc-title-row">
            <h2>We build with Claude&nbsp;Code.</h2>
            <svg class="cc-mark" viewBox="0 0 438 438" role="img" aria-label="Claude Code" xmlns="http://www.w3.org/2000/svg">
              <mask id="cc-mark-eyes">
                <rect width="438" height="438" fill="#fff" />
                <rect x="110" y="145" width="30" height="60" fill="#000" />
                <rect x="305" y="145" width="30" height="60" fill="#000" />
              </mask>
              <g mask="url(#cc-mark-eyes)" fill="#D97757">
                <rect x="55" y="90" width="335" height="225" />
                <rect x="0" y="205" width="438" height="57" />
                <rect x="82"  y="315" width="28" height="60" />
                <rect x="138" y="315" width="28" height="60" />
                <rect x="283" y="315" width="28" height="60" />
                <rect x="337" y="315" width="28" height="60" />
              </g>
            </svg>
          </div>
          <p class="cc-lead">
            Every site we ship is built using Claude Code, Anthropic's agentic coding tool.
            It handles the repetitive engineering, from scaffolding pages to wiring integrations
            and catching bugs, so our time goes into the things that actually move your business:
            positioning, copy, and design.
          </p>
          <p class="cc-lead">
            That is how a fully custom website gets built in days instead of months, without
            falling back on a template. You get the speed of a page builder with the quality
            of hand-written code.
          </p>

          <ul class="cc-points">
            <li>
              <span class="cc-point-icon">${Icons.zap}</span>
              <span><strong>Days, not months.</strong> Groundwork that used to take weeks is done in an afternoon.</span>
            </li>
            <li>
              <span class="cc-point-icon">${Icons.palette}</span>
              <span><strong>Still fully custom.</strong> Every line is written for your business. No themes, no drag-and-drop.</span>
            </li>
            <li>
              <span class="cc-point-icon">${Icons.shield}</span>
              <span><strong>Checked as it's written.</strong> Types, mobile layouts, and performance reviewed on every change.</span>
            </li>
          </ul>
        </div>

        <div class="cc-visual reveal">
          <div class="cc-terminal">
            <div class="cc-terminal-bar">
              <span class="tm-dot"></span><span class="tm-dot"></span><span class="tm-dot"></span>
              <span class="cc-terminal-title">claude · atlantic-bear</span>
            </div>
            <div class="cc-terminal-body">
              <p class="cc-line"><span class="cc-prompt">&gt;</span> Build the booking section for the new client site</p>
              <p class="cc-line cc-muted">● Reading src/main.ts, src/style.css</p>
              <p class="cc-line cc-ok">✓ Created booking form with validation</p>
              <p class="cc-line cc-ok">✓ Added mobile breakpoints at 720px</p>
              <p class="cc-line cc-ok">✓ Wired Calendly + lead capture</p>
              <p class="cc-line cc-ok">✓ Type check passed, 0 errors</p>
              <p class="cc-line cc-accent">● Ready to preview<span class="cc-caret"></span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>`;
}




// ─── Section Waves ───────────────────────────────────────────────────────────
// Decorative waves that hang off the top border line of a section. Purely
// visual: pointer-events are off and it sits behind the section's content.
function SectionWaves(): string {
  const layers = [
    // All one hue: the brand blue used by the Book a Call button (--accent).
    // Depth comes from the stacked opacities, not from different colours.
    { cls: 'wave-1', fill: '#3b69ff', d: 'M0,40 C150,18 350,62 600,40 C850,18 1050,62 1200,40 C1350,18 1550,62 1800,40 C2050,18 2250,62 2400,40' },
    { cls: 'wave-2', fill: '#3b69ff', d: 'M0,50 C200,72 400,28 600,50 C800,72 1000,28 1200,50 C1400,72 1600,28 1800,50 C2000,72 2200,28 2400,50' },
    { cls: 'wave-3', fill: '#3b69ff', d: 'M0,55 C120,25 280,85 600,55 C920,25 1080,85 1200,55 C1320,25 1480,85 1800,55 C2120,25 2280,85 2400,55' },
    { cls: 'wave-4', fill: '#3b69ff', d: 'M0,65 C180,45 420,85 600,65 C780,45 1020,85 1200,65 C1380,45 1620,85 1800,65 C1980,45 2220,85 2400,65' },
  ];

  // Each path spans two identical 1200-unit tiles, so translating a layer by
  // half its width loops seamlessly.
  const svgs = layers.map(l => `
    <div class="wave-layer ${l.cls}">
      <svg viewBox="0 0 2400 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="${l.d} L2400,140 L0,140 Z" fill="${l.fill}" />
      </svg>
    </div>`).join('');

  return `<div class="section-waves" aria-hidden="true">${svgs}</div>`;
}

// ─── Two starting situations ─────────────────────────────────────────────────
// Qualifier section. Almost every enquiry is one of these two, and the brief is
// explicit that first-time builds must not read as the lesser of the pair.
function StartingPointSection(): string {
  return `
  <!-- WHO WE BUILD FOR -->
  <section class="section-pad" style="border-top:1px solid var(--border);">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Who we build for</div>
        <h2 class="section-title">Two versions of the same problem</h2>
      </div>

      <div class="basic-system-grid">

        <div class="basic-system-card reveal">
          <span class="basic-card-num">01</span>
          <h3>You've outgrown your website</h3>
          <p>Your business has moved on and the website hasn't kept up. We rebuild it so it reflects where you are now rather than where you started.</p>
        </div>

        <div class="basic-system-card reveal" style="transition-delay:0.08s;">
          <span class="basic-card-num">02</span>
          <h3>You've never had a proper one</h3>
          <p>You've built something real without a proper website behind it. We build the first one properly, so it holds up as the business keeps growing.</p>
        </div>

      </div>

      <div class="growth-teaser-text">
        Same five days, same process, same price either way.
      </div>
    </div>
  </section>`;
}


// ─── How this buyer operates ─────────────────────────────────────────────────
// The positioning section. "Western-style" here is deliberately framed as a way
// of running a business rather than anything about the owner, and the section
// earns the claim by describing the operating differences instead of asserting
// them. Nationality stays out of headlines, meta descriptions, and ad copy.
function OperatingStyleSection(): string {
  return `
  <!-- WHY WE WORK WITH THESE BUSINESSES -->
  <section class="section-pad" style="background: var(--surface); border-top:1px solid var(--border); border-bottom: 1px solid var(--border);">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Why us</div>
        <h2 class="section-title">We build for Western-style businesses in the UAE</h2>
      </div>

      <div class="basic-system-grid">

        <div class="basic-system-card reveal">
          <span class="basic-card-num">01</span>
          <h3>We work the way you do</h3>
          <p>Everything in English, direct, and to the point. Fixed price, written scope, agreed timeline, and no chasing us for updates. The kind of process you would expect from a good agency back home, run by a team that is actually here.</p>
        </div>

        <div class="basic-system-card reveal" style="transition-delay:0.08s;">
          <span class="basic-card-num">02</span>
          <h3>We build to the standard you're used to</h3>
          <p>Your clients, partners, and hires are comparing you to companies in London, Sydney, and New York. Your website should hold up in that company rather than look like it came off a template shelf.</p>
        </div>

        <div class="basic-system-card reveal" style="transition-delay:0.12s;">
          <span class="basic-card-num">03</span>
          <h3>We know the UAE side too</h3>
          <p>We're based in Dubai and build for this market every day. Your site is set up to be found by local search and local clients while still reading as international.</p>
        </div>

        <div class="basic-system-card reveal" style="transition-delay:0.16s;">
          <span class="basic-card-num">04</span>
          <h3>Your website sets your price ceiling</h3>
          <p>When you're quoting bigger numbers, the website is what a client weighs up before they agree to them. A business that looks smaller than it is gets negotiated down. Moving upmarket is far easier when the site already looks like it belongs there.</p>
        </div>

      </div>
    </div>
  </section>`;
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
      <h1>Your business deserves<br>to be <span class="hook-word"><span class="hook-drop-inner"><span class="hook-rig" aria-hidden="true"><span class="hook-line"></span><svg class="hook-icon" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2.4" stroke="currentColor" stroke-width="2"/><path d="M10 5.4 V17 C10 25.5 2.6 27 2.6 19.6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M2.6 19.6 L6 22.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span><span class="hook-label text-blue">chosen</span></span></span>.</h1>
      <p class="hero-sub">
        We build custom websites for Western-style businesses across the UAE. Live in 5 days, fully managed, no templates.
      </p>
      <div class="hero-ctas">
        <a href="/booking" class="btn btn-primary btn-large btn-pulse" data-link="booking" id="hero-cta-book">
          Book a Call ${Icons.arrow}
        </a>
      </div>
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


  ${StartingPointSection()}

  ${OperatingStyleSection()}

  <!-- THE FACTS SECTION -->
  <section class="facts-section" style="border-top:1px solid var(--border);">
    ${SectionWaves()}
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

  ${ClaudeCodeSection()}

  <!-- THE MARKET LEADER SYSTEM SECTION -->
  <section class="section-pad" style="background: var(--surface); border-bottom: 1px solid var(--border);">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">The Complete System</div>
        <h2 class="section-title">The Market Leader System</h2>
        <p class="section-sub">Four pillars, included in every build. Nothing here is an upsell later.</p>
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
        <p style="font-size: 0.85rem; color: var(--text-muted); max-width: 560px; margin: 18px auto 0; line-height: 1.6;">
          Your total time involved: one 30-minute call, one short form, one 30-minute review. No contracts, and you own the site, the domain, and the files from day one.
        </p>
      </div>
    </div>
  </section>


  <!-- TIER TEASERS (PACKAGES) SECTION -->
  <section class="teasers-section">
    <div class="container">
      <div class="teasers-header">
        <h2>Fixed scope. Fixed price. Published.</h2>
        <p>Two plans, both fully managed. You can see exactly what you get before you book a call, which is the point.</p>
      </div>
      <div class="teasers-grid" style="grid-template-columns: repeat(2, 1fr); max-width: 1000px; margin: 0 auto; gap: 28px;">

        <!-- Managed Plan Teaser -->
        <div class="teaser-card level-one-card">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">01</span>
            <span class="teaser-level-name">Most Popular</span>
          </div>
          <h3>The Launch Plan</h3>
          <p class="teaser-pitch">A professional site that stands up to being researched, built around one clear path from first visit to first message.</p>
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
            <span class="teaser-level-name">Scale & Video</span>
          </div>
          <h3>The Growth Plan</h3>
          <p class="teaser-pitch">For businesses that need more room: more pages, deeper search work, video, a real contact form, and a blog that keeps earning traffic.</p>
          <div class="teaser-price">
            <div class="teaser-price-main">AED 6,500</div>
            <div class="teaser-price-sub">+ AED 300/mo managed</div>
          </div>
          <div class="teaser-pills">
            <span class="teaser-pill">Elite Growth</span>
            <span class="teaser-pill">Deep SEO Search</span>
            <span class="teaser-pill">Lead Capture Form</span>
            <span class="teaser-pill">2 Updates / Mo</span>
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

  <!-- CONTENT DISCOVERY SECTION -->
  <section class="section-pad" style="border-top: 1px solid var(--border); background: var(--surface);">
    <div class="container">
      <div class="section-label reveal" style="text-align:center;">Explore</div>
      <h2 class="section-title reveal" style="text-align:center;">More from Atlantic Bear</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 40px; max-width: 900px; margin-left: auto; margin-right: auto;">

        <a href="/testimonials" data-link="testimonials" id="home-explore-testimonials" class="reveal" style="display: block; background: var(--bg); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 28px 28px 24px; text-decoration: none; color: inherit; transition: border-color 0.2s, box-shadow 0.2s;" onmouseover="this.style.borderColor='var(--blue)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.borderColor='var(--border)'; this.style.boxShadow='none'">
          <div style="font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--blue); margin-bottom: 8px;">Client Work</div>
          <h3 style="font-size: 1.1rem; margin: 0 0 10px; font-weight: 700;">See our client transformations</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 16px;">Real before-and-after builds, plus a client video review.</p>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue);">View testimonials →</span>
        </a>

        <a href="/blog" id="home-explore-blog" class="reveal" style="display: block; background: var(--bg); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 28px 28px 24px; text-decoration: none; color: inherit; transition: border-color 0.2s, box-shadow 0.2s;" onmouseover="this.style.borderColor='var(--blue)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.borderColor='var(--border)'; this.style.boxShadow='none'">
          <div style="font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--blue); margin-bottom: 8px;">Blog</div>
          <h3 style="font-size: 1.1rem; margin: 0 0 10px; font-weight: 700;">Website & SEO tips for UAE businesses</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 16px;">Straight answers on what a website should cost, and how to get found on Google here.</p>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue);">Read the blog →</span>
        </a>

        <a href="/pricing" data-link="pricing" id="home-explore-pricing" class="reveal" style="display: block; background: var(--bg); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 28px 28px 24px; text-decoration: none; color: inherit; transition: border-color 0.2s, box-shadow 0.2s;" onmouseover="this.style.borderColor='var(--blue)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.borderColor='var(--border)'; this.style.boxShadow='none'">
          <div style="font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--blue); margin-bottom: 8px;">Pricing</div>
          <h3 style="font-size: 1.1rem; margin: 0 0 10px; font-weight: 700;">Transparent pricing, no surprises</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 16px;">Two plans from AED 3,500 setup. Fully managed, no contracts.</p>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue);">See pricing →</span>
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


// ─── TikTok Ads · Shazay payment page ───────────────────────────────────────────
// Private link shared directly with the client. Not in the sitemap, noindex.
// Renders a single PayPal subscription button (see initPaypalSubscription).
function MetaAdsShazayPage(): string {
  return `
  <div class="page-header" style="border-bottom:1px solid var(--border); padding-bottom: 40px;">
    <div class="container">
      <div class="booking-page-badge" style="background: rgba(235,92,92,0.1); color: #EB5C5C; border: 1px solid rgba(235,92,92,0.25); display: inline-block; margin-bottom: 16px;">
        TikTok Ads Retainer
      </div>
      <h1 style="color: #000;">Set Up Your Payment</h1>
      <p style="color: rgba(0,0,0,0.7); max-width: 560px; margin: 12px auto 0; font-size: 1.05rem; line-height: 1.6;">
        Start your Atlantic Bear TikTok Ads retainer. This creates a recurring subscription, billed every 15 days, through PayPal. You can cancel at any time from your PayPal account.
      </p>
    </div>
  </div>

  <section class="section-pad">
    <div class="container">
      <div style="background: var(--surface); border: 2px solid var(--border-mid); border-radius: var(--r-lg); padding: 40px; max-width: 460px; margin: 0 auto; text-align: center;">
        <div style="font-size: 1.1rem; font-weight: 800; color: #000; letter-spacing: -0.02em; margin-bottom: 4px;">TikTok Ads Retainer</div>
        <div style="font-size: 0.9rem; color: rgba(0,0,0,0.6); font-weight: 600; margin-bottom: 28px;">Billed every 15 days · Managed campaign optimization</div>

        <div id="paypal-button-container-P-3J276348CL7673454NKNKCRA"></div>

        <div id="paypal-shazay-success" style="display:none; margin-top: 8px; padding: 20px; background: rgba(46,160,67,0.08); border: 1px solid rgba(46,160,67,0.35); border-radius: var(--r-md); color: #1a7f37; font-weight: 600; font-size: 0.95rem; line-height: 1.5;">
          Payment set up successfully. Thank you, we'll be in touch shortly to get started.
        </div>

        <p style="font-size: 0.78rem; color: rgba(0,0,0,0.5); margin: 20px 0 0; line-height: 1.5;">
          Payments are processed securely by PayPal. Atlantic Bear never sees your card details.
        </p>
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
      <h1>Priced, scoped, and published.</h1>
      <p class="pricing-header-sub">Built for businesses that are ready for their website to match the quality of what they actually do. Two plans, both fully managed, both listed in full below so you can decide before you ever speak to us.</p>
    </div>
  </div>

  <!-- PRICING CARDS -->
  <section class="section-pad">
    <div class="container">
      
      <!-- Demo offer banner placed lower, right above plans -->
      <div class="header-callout-box" style="margin-top: -16px; margin-bottom: 72px;">
        Every plan is fully managed. We handle the design, the copywriting, the hosting, the domain, and the launch, and we keep it updated afterwards. No contracts, no lock-in, and you own everything from day one.
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
                <span class="feature-desc">Professional images sourced for you if you don't have your own</span>
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

          </div>

          <div class="pricing-plan-footer">
            <div class="value-comparison-box">
              <div class="val-comp-row"><span class="val-comp-label">Total Build Value:</span><span class="val-comp-value">AED 8,500+</span></div>
              <div class="val-comp-row main"><span class="val-comp-label">Your Setup Cost:</span><span class="val-comp-value-price">AED 3,500</span></div>
            </div>
            <a href="/booking" data-link="booking" class="btn btn-primary btn-pulse btn-block btn-large">Book a Call</a>
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
                <span class="feature-desc"><strong class="changes-highlight">2 content changes per month</strong></span>
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
                <span class="feature-desc">Contact form that drops enquiries straight into your inbox</span>
                <span class="feature-val">AED 800 Value</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Priority build queue: your project goes to the front of the line</span>
                <span class="feature-val">Included</span>
              </div>
            </div>

            <div class="pricing-stack-header pricing-margin-top">YOUR MONTHLY CARE, AED 300:</div>
            <div class="pricing-features-list">
              <div class="pricing-feature-row">
                <span class="feature-desc">Everything in the Launch monthly care: hosting, backups, and ongoing support</span>
                <span class="feature-val">Included</span>
              </div>
              <div class="pricing-feature-row highlight-row">
                <span class="feature-desc"><strong class="changes-highlight">Your own admin dashboard</strong></span>
                <span class="feature-val">Growth Only</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Track the basics in one place: visitors, most-viewed pages, and enquiries coming through the site</span>
                <span class="feature-val">Included</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Write and publish your own blog posts straight from the dashboard, on top of the articles we set up for you</span>
                <span class="feature-val">Included</span>
              </div>
            </div>

          </div>

          <div class="pricing-plan-footer">
            <div class="value-comparison-box">
              <div class="val-comp-row"><span class="val-comp-label">Total Package Value:</span><span class="val-comp-value">AED 15,000+</span></div>
              <div class="val-comp-row main"><span class="val-comp-label">Your Setup Cost:</span><span class="val-comp-value-price">AED 6,500</span></div>
            </div>
            <a href="/booking" data-link="booking" class="btn btn-primary btn-pulse btn-block btn-large">Book a Call</a>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- WHO THIS IS AND ISN'T FOR -->
  <section class="section-pad" style="border-top:1px solid var(--border);">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Fit</div>
        <h2 class="section-title">Who this is built for</h2>
      </div>

      <div class="basic-system-grid">

        <div class="basic-system-card reveal">
          <span class="basic-card-num">A GOOD FIT</span>
          <h3>You're already running a real business</h3>
          <p>You have clients, revenue, and a service you're confident in. You're either replacing a site you've outgrown or getting your first proper one, and you can make the decision yourself without routing it through four stakeholders. At this size the build pays for itself on a couple of decent clients, which is exactly the point.</p>
        </div>

        <div class="basic-system-card reveal" style="transition-delay:0.08s;">
          <span class="basic-card-num">NOT A FIT</span>
          <h3>Where we'd tell you to look elsewhere</h3>
          <p>Enterprise projects needing months of bespoke development, custom platforms, or a large committee to sign off. Businesses still working out whether the idea holds, where any website spend is premature. And anyone shopping purely on price: there is always someone cheaper, and we are not going to pretend to be them.</p>
        </div>

      </div>

      <div class="growth-teaser-text">
        If you're not sure which side of that you're on, book the call and we'll tell you straight. We would rather say no on a first call than build something that was never going to work.
      </div>
    </div>
  </section>

  <!-- META ADS UPSELL -->
  <section class="section-pad-sm" style="border-top: 1px solid var(--border); background: #080b12; padding: 64px 0;">
    <div class="container">
      <div class="meta-ads-teaser-box reveal" style="margin-top: 0;">
        <div class="meta-ads-teaser-content">
          <span class="meta-ads-price-tag" style="background: rgba(235,92,92,0.2); color: #EB5C5C; font-weight: 800; font-size: 0.82rem; padding: 4px 12px; border-radius: 999px; display: inline-block; margin-bottom: 10px; border: 1px solid rgba(235,92,92,0.4);">AED 2,500 / mo retainer</span>
          <h3>Want the traffic as well as the website?</h3>
          <p>Once your site is live, we can run your Facebook and Instagram ads to fill it. Local UAE targeting, ad creative, and leads landing straight in your WhatsApp and inbox. Added whenever you're ready, not bundled into the build.</p>
        </div>
        <a href="/meta-ads" class="btn btn-primary btn-large btn-pulse" data-link="meta-ads" style="white-space: nowrap;">
          Explore Meta Ads ${Icons.arrow}
        </a>
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
            <h3>See It Live Before You Commit</h3>
          </div>
          <p>On our first call, we go through your vision or your current site together in real time, so you see exactly how we think and build before you decide anything. Once you're in, you get the first version of your actual site in 5 days.</p>
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
        <strong>Fast-Action Bonus:</strong> If you get started on the call, you get <strong>unlimited small tweaks</strong> of the website for your first month.
      </div>
    </div>
  </section>
  `;
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
      <p class="reveal" style="transition-delay:0.15s;">We work with businesses across the UK and UAE. This is a look at what we do, using one example from our portfolio.</p>
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
      <div class="tm-shot-block reveal" style="transition-delay:0.1s; max-width: 600px; margin: 0 auto 64px;">
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

      <!-- CASE STUDY WRITE-UP -->
      <div class="case-study reveal" style="transition-delay:0.12s;">
        <div class="case-study-main">
          <h2>What we changed, and why</h2>
          <p>Their old site had drifted years out of date and buried the important information, which is expensive for a business whose clients judge credibility before making contact. We rebuilt it rather than patched it: the courses and the offer now appear immediately, and the whole thing is mobile-first, fast, and set up properly for search.</p>
        </div>
        <aside class="case-study-side">
          <h3>Project at a glance</h3>
          <dl class="case-study-facts">
            <div><dt>Client</dt><dd>Sonder Training Group</dd></div>
            <div><dt>Sector</dt><dd>Professional training</dd></div>
            <div><dt>Scope</dt><dd>Full rebuild, copywriting, hosting</dd></div>
            <div><dt>Built for</dt><dd>Mobile first</dd></div>
            <div><dt>Includes</dt><dd>SSL, sitemap, search setup</dd></div>
          </dl>
          <a href="https://sondertraininggroup.com/" target="_blank" rel="noopener" class="btn btn-secondary btn-sm case-study-link">Visit the live site ${Icons.arrow}</a>
        </aside>
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
              <a href="tel:+971502446531" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Icons.phone}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Phone</div>
                  <div class="contact-method-value">+971-50-244-6531</div>
                </div>
              </a>
              <a href="mailto:officialatlanticbear@gmail.com" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Icons.mail}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Email</div>
                  <div class="contact-method-value">officialatlanticbear@gmail.com</div>
                </div>
              </a>
              <a href="https://www.instagram.com/officialatlanticbear/" target="_blank" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Icons.instagram}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Instagram</div>
                  <div class="contact-method-value">@officialatlanticbear</div>
                </div>
              </a>
              <div class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Icons.map}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Location</div>
                  <div class="contact-method-value">Dubai, UAE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        ${FaqSection()}
      </div>
    </div>
  </div>`;
}

// ─── Legal pages ─────────────────────────────────────────────────────────────
// General-purpose terms and a privacy notice covering what the site actually
// collects (Calendly booking, Meta Pixel).
// NOTE: written as a solid starting point, not as legal advice. Have a
// UAE-qualified lawyer review both before relying on them.
function LegalPage(title: string, updated: string, blocks: { h: string; p: string[] }[]): string {
  const body = blocks.map(b => `
    <section class="legal-block reveal">
      <h2>${b.h}</h2>
      ${b.p.map(t => `<p>${t}</p>`).join('')}
    </section>`).join('');

  return `
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="section-label">Legal</div>
      <h1>${title}</h1>
      <p style="max-width:640px; margin:12px auto 0; color:var(--text-muted);">Last updated ${updated}</p>
    </div>
  </div>
  <section class="section-pad">
    <div class="container">
      <div class="legal-wrap">${body}</div>
    </div>
  </section>`;
}

function TermsPage(): string {
  return LegalPage('Terms &amp; Conditions', 'August 2026', [
    { h: '1. Who we are', p: [
      'These terms govern the website design, development, hosting, and maintenance services provided by Atlantic Bear ("we", "us", "our") to you, the client. Our registered place of business is Dubai, United Arab Emirates. You can reach us at officialatlanticbear@gmail.com or on +971-50-244-6531.',
      'By engaging us to build or maintain a website, or by paying an invoice, you accept these terms. If you are agreeing on behalf of a company, you confirm that you are authorised to bind that company.',
    ]},
    { h: '2. Services and scope', p: [
      'We design, build, host, and maintain websites. The exact deliverables for your project, the number of pages, the features included, and the timeline, are agreed with you in writing before work begins, whether by email, proposal, or the plan you select on our pricing page.',
      'Anything not set out in that written scope is not included. Requests that fall outside it, such as adding an online shop, a booking system, additional languages, or a substantial new section, are treated as new work and quoted separately. We will always tell you the cost before starting, and we will never add charges to an invoice you have not agreed to.',
    ]},
    { h: '3. Fees and payment', p: [
      'Our plans consist of a one-off build fee and a recurring monthly fee, as published on our pricing page or as quoted to you directly. The build fee covers design and development up to launch. The monthly fee covers hosting, domain renewal, SSL, security and software updates, backups, uptime monitoring, and unlimited small content changes.',
      'Invoices are payable within 14 days of issue unless we have agreed otherwise in writing. If a monthly payment is more than 30 days overdue we may suspend hosting and support after giving you at least 7 days written notice and a reasonable chance to settle. We will not delete your site or your data because of a late payment without telling you first.',
      'All fees are stated in UAE dirhams and are exclusive of any applicable VAT or other government charges, which will be added where legally required.',
    ]},
    { h: '4. Your responsibilities', p: [
      'To build your site we need certain things from you: accurate information about your business, timely feedback at review stages, and any brand assets, photography, or existing content you want us to use.',
      'You confirm that anything you supply is either owned by you or properly licensed to you, and that we may use it to build and operate your website. You are responsible for the accuracy and legality of the information you ask us to publish, including prices, claims about your services, qualifications, and any regulated wording that applies to your industry.',
      'If a project stalls because we are waiting on materials or approvals from you, timelines move accordingly. We will keep asking, but we cannot hold a build slot open indefinitely.',
    ]},
    { h: '5. Ownership of your website', p: [
      'Your domain name is registered in your name and belongs to you. On full payment of the build fee, the finished website design, page content, and site files we produce for you become yours to keep.',
      'This applies whether or not you stay with us. If you decide to move to another provider, we will transfer your domain, export your site files, and provide the access you need to take over hosting, and we will do it within 48 hours of your request. We do not hold domains, files, or content hostage.',
      'Two things stay with us: any generic underlying code, tooling, or components we reuse across client projects, and any third-party software or fonts, which remain subject to their own licences. This does not restrict your use of your own website in any way.',
    ]},
    { h: '6. Content changes and support', p: [
      'While you are on an active monthly plan, small content changes are unlimited and included. That covers text edits, prices, opening hours, images, staff and service listings, and similar updates. Requests are usually completed the same working day.',
      'Support is provided by email, phone, and WhatsApp during UAE business hours. We aim to respond within a few hours. Substantial new functionality is not covered by the monthly fee and is quoted separately as set out in section 2.',
    ]},
    { h: '7. Hosting, uptime, and backups', p: [
      'We host your site on established third-party infrastructure and monitor it for availability. We take regular backups so your site can be restored if something goes wrong.',
      'We aim for continuous availability but we do not guarantee uninterrupted service. Downtime can arise from causes outside our control, including failures at our hosting providers, domain registry issues, denial-of-service attacks, and internet outages. Where a problem is within our control we will fix it as a priority and keep you informed.',
    ]},
    { h: '8. Cancellation', p: [
      'There is no minimum term and no cancellation fee. You may cancel your monthly plan at any time by telling us in writing. Your plan runs to the end of the period you have already paid for, and we do not refund part-months.',
      'On cancellation we hand over your domain, files, and the access required to move hosting elsewhere, within 48 hours. Once your plan ends we stop hosting the site, so please arrange your new hosting before the transfer.',
      'We may end our side of the arrangement by giving you 30 days notice, or immediately if you use our services unlawfully or ask us to publish content that is illegal, fraudulent, or infringing.',
    ]},
    { h: '9. Liability', p: [
      'We provide our services with reasonable skill and care. Nothing in these terms limits our liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be limited.',
      'Subject to that, our total liability to you in connection with our services is limited to the total fees you have paid us in the 12 months before the claim arose. We are not liable for indirect or consequential losses, including lost profits, lost revenue, lost business, or loss of anticipated savings.',
      'We are not responsible for search engine rankings, advertising performance, or the commercial results of your website. We build sites to a professional technical standard, but no agency can guarantee a position in search results or a level of sales.',
    ]},
    { h: '10. Governing law', p: [
      'These terms are governed by the laws of the United Arab Emirates and the applicable laws of the Emirate of Dubai. Any dispute that we cannot resolve between us will be subject to the exclusive jurisdiction of the courts of Dubai.',
      'If any part of these terms is found to be unenforceable, the rest continues to apply. We may update these terms from time to time and will publish the current version on this page with the date it was last changed.',
    ]},
  ]);
}

function PrivacyPage(): string {
  return LegalPage('Privacy Policy', 'August 2026', [
    { h: '1. Introduction', p: [
      'This policy explains what personal information Atlantic Bear collects through this website, why we collect it, how we use and store it, and what rights you have over it. We are based in Dubai, United Arab Emirates, and you can contact us about anything in this policy at officialatlanticbear@gmail.com or on +971-50-244-6531.',
      'We keep this deliberately plain. We are a small web design business, not an advertising network, and we do not sell personal information to anyone.',
    ]},
    { h: '2. Information you give us directly', p: [
      'We do not run a contact form on this website. If you reach out by phone, email, or Instagram, we only receive whatever you choose to tell us directly. When you book a call, our scheduling provider Calendly collects your name, email address, and phone number so we can contact you and hold the appointment.',
      'We use this information for one purpose: to respond to you and to provide the services you have asked about. We do not add you to unrelated marketing lists, and we do not pass your details to third parties for their own marketing.',
    ]},
    { h: '3. Information collected automatically', p: [
      'Like most websites, ours records basic technical information when you visit: your IP address, browser type and version, device type, the pages you view, how long you spend on them, and the site or advertisement that referred you.',
      'We use this in aggregate to understand which pages are useful, to find broken or slow pages, and to see whether our advertising is working. It is not used to build a personal profile of you.',
    ]},
    { h: '4. Cookies and third-party services', p: [
      'We use a small number of third-party services, and each may set cookies or receive some data when you use our site.',
      'Calendly powers our booking scheduler and receives the name, email, and phone number you enter when booking a call. Meta Pixel measures whether visitors who arrive from our Facebook and Instagram advertising go on to enquire, and may be used to show you our ads elsewhere.',
      'You can block or delete cookies in your browser settings at any time. Doing so may stop the booking scheduler from working properly, but the rest of the site will function normally.',
    ]},
    { h: '5. Legal basis and consent', p: [
      'Where you submit a form, we process your information because you have asked us to respond to you and because it is necessary to provide the service you requested. Where we use analytics and advertising measurement, we rely on our legitimate interest in understanding and improving how our business reaches customers.',
      'You can withdraw consent or object to our use of your information at any time by contacting us using the details in section 1.',
    ]},
    { h: '6. How long we keep your information', p: [
      'Enquiries that do not become projects are kept for up to 24 months so we can follow up and so we have a record of what was discussed, then deleted. Records relating to clients, including project files, correspondence, and invoices, are kept for the duration of the engagement and for as long afterwards as UAE accounting and tax rules require.',
      'You can ask us to delete your information sooner and we will do so unless we are legally required to keep it.',
    ]},
    { h: '7. How we protect your information', p: [
      'Your data is transmitted over encrypted HTTPS connections and stored in reputable third-party services that provide their own security controls. Access is limited to the people who need it to do the work.',
      'No system is completely secure, and we will not pretend otherwise. If a breach occurs that affects your personal information, we will tell you and any relevant authority as required.',
    ]},
    { h: '8. Sharing your information', p: [
      'We share personal information only with the service providers named in section 4, which process it on our behalf to make the site and our booking process work, and with professional advisers or authorities where we are legally required to do so.',
      'We do not sell, rent, or trade your personal information. Some of these providers are based outside the UAE, which means your information may be processed abroad under the protections those providers offer.',
    ]},
    { h: '9. Your rights', p: [
      'You can ask us what personal information we hold about you, ask for a copy of it, ask us to correct anything inaccurate, ask us to delete it, or object to how we are using it. You can also ask us to stop contacting you at any time.',
      'Write to officialatlanticbear@gmail.com and we will respond within 30 days. There is no charge for making a request.',
    ]},
    { h: '10. Changes and contact', p: [
      'We may update this policy as our services or the tools we use change. The current version is always published here with the date it was last updated, and material changes will be made clear.',
      'If you have a question or a complaint about how we handle your information, contact us first at officialatlanticbear@gmail.com or +971-50-244-6531. You also have the right to raise the matter with the relevant UAE data protection authority.',
    ]},
  ]);
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
// Native <details>/<summary> so it is keyboard accessible and works without JS.
const FAQS: { q: string; a: string }[] = [
  {
    q: 'How long does it take to build my website?',
    a: 'Most websites go from kick-off to live in about five working days. We can move that quickly because we do not start from a blank page and we do not wait on you for content. After a single 30-minute call we handle the structure, the copywriting, the layouts, and the images ourselves, then bring you a finished site to review. Larger builds with many pages, e-commerce, or custom booking systems can take longer, and we will tell you honestly at the first call if yours is one of them rather than promising five days and missing it.',
  },
  {
    q: 'How much does a website cost?',
    a: 'The Launch Plan is AED 3,500 to build plus AED 300 per month, and the Growth Plan is AED 6,500 to build plus AED 300 per month. The build fee is one-off. The monthly fee covers hosting, your domain, security and software updates, backups, and unlimited small content changes. There are no setup fees, no per-page charges, and no surprise invoices later. If your project genuinely needs something outside those plans we will quote it before any work starts.',
  },
  {
    q: 'Why pay AED 6,500 when a freelancer quoted me a fraction of that?',
    a: 'Because you are buying different things. A freelance build is cheaper on the invoice and the cost usually shows up later: nobody to call once it is live, hosting and updates left to you, copy you end up writing yourself, and in a lot of cases a site you cannot edit and do not fully own. Our price covers the design, the copywriting, the search groundwork, hosting, backups, ongoing content changes, and a team that answers when you email. We will also be straight with you: if you need a single holding page and you already have a developer you trust, a freelancer is a perfectly sensible choice and we will tell you so on the call.',
  },
  {
    q: 'Can the website connect to the tools I already use?',
    a: 'Yes, and it is worth telling us what you run on the first call so we build around it. We regularly wire up Stripe for payments, Calendly for bookings, Mailchimp and Klaviyo for email, HubSpot and most common CRMs, Zapier for anything else, plus Google Analytics and the Meta pixel. Analytics and pixel tracking are part of the standard build rather than a paid extra, because a site you cannot measure is a site you cannot improve.',
  },
  {
    q: 'Can I edit the website myself?',
    a: 'Partly, and it depends on what you want. Your site is custom-coded rather than assembled in a page builder, which is why it loads quickly and looks the way it does, so there is no drag-and-drop editor to log into by default. In practice most clients prefer to email us: content changes are included in the monthly plan and usually done the same day. If editing things yourself genuinely matters to you, say so on the first call and we will build the sections you want to control onto a simple editor you can access. Either way you own the site and the files.',
  },
  {
    q: 'What happens if I do not like the first version?',
    a: 'You tell us, and we change it. Within about five days of kick-off you get the first version of the real site rather than a flat mockup, so you are reacting to something you can actually click through. From there you get unlimited small tweaks for the first 30 days: text, colours, images, layout, spacing, whatever is bothering you. Almost nobody loves every detail of a first draft, and the review round is a normal part of the process rather than a sign something went wrong. It also helps to send us two or three sites you like before we start, since showing us is far faster than describing it.',
  },
  {
    q: 'What results should I actually expect?',
    a: 'Here is the honest split. What we can commit to: a fast, professional site that works properly on a phone, is built on the technical groundwork search engines look for, and is wired into your booking, payment, and tracking tools. What depends on time and on you: search rankings build over months, not days, and how much traffic arrives depends on your own marketing as well as the site. The change most clients notice first is not a traffic number, it is that they start sending the link to good prospects again instead of avoiding it.',
  },
  {
    q: 'Who owns the website, the domain, and the files?',
    a: 'You do, from day one. The domain is registered in your business name, not ours, and the site files are yours. This matters more than most business owners realise: a common practice in the industry is to register the domain under the agency account, which means leaving costs you your web address and your search rankings. If you ever decide to move to another provider or bring the work in-house, we hand over everything within 48 hours and we do not hold anything back.',
  },
  {
    q: 'Do I have to write the content myself?',
    a: 'No. Writing your own website copy is the single biggest reason projects stall for months, so we remove it from your plate entirely. We research your market, look at what your competitors in the UAE are saying, and write the copy for you. You review it and tell us what to change. If you already have wording, brand guidelines, or professional photography you want used, send it over and we will build around it.',
  },
  {
    q: 'Will my website work properly on mobile?',
    a: 'Yes, and we treat mobile as the primary design rather than an afterthought. The majority of people who find a local UAE business search on a phone, often while they are out and deciding where to go. Every site we build is laid out for small screens first, tested on real devices, and tuned so it loads fast on mobile data rather than only on office wifi. Slow, awkward mobile sites are one of the fastest ways to lose a customer who was ready to buy.',
  },
  {
    q: 'Will my business show up on Google?',
    a: 'Every site is built with the technical groundwork search engines look for: clean page structure, proper headings, descriptive page titles and meta descriptions, fast loading times, a sitemap, and mobile-friendly layouts. That is what makes your site eligible to rank well. We also set up your pages around the words your customers actually search for in your category and city. Search results build over weeks and months rather than overnight, and any agency promising you the top spot immediately is not being straight with you.',
  },
  {
    q: 'What does the monthly fee actually cover?',
    a: 'Hosting, your domain renewal, an SSL certificate, ongoing security and software updates, regular backups, uptime monitoring, and unlimited small content changes such as prices, opening hours, staff, photos, and service descriptions. Email us a change and it is usually done the same day. It is not a support ticket queue and there is no limit on how often you can ask.',
  },
  {
    q: 'Am I locked into a contract?',
    a: 'No. There is no minimum term and no cancellation fee. The monthly plan runs month to month and you can stop whenever you want. We would rather keep your business by doing good work than by trapping you in paperwork. If you do leave, we hand over your domain, files, and hosting access within 48 hours.',
  },
  {
    q: 'Do you work with businesses outside Dubai?',
    a: 'Yes. We are based in Dubai and work with businesses across the whole of the UAE, including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Everything is handled remotely by call, email, and WhatsApp, so where you are based makes no difference to how quickly we can build or how well we can support you afterwards.',
  },
  {
    q: 'What if I want changes after the site goes live?',
    a: 'Small content changes are included in the monthly plan for as long as you are with us, with no cap and no extra charge. That covers text, prices, images, opening hours, adding staff or services, and similar updates. Larger pieces of work, such as adding a whole new section, an online shop, or a booking system, are quoted separately so you always know the cost before we begin.',
  },
];

function FaqSection(): string {
  const items = FAQS.map(f => `
    <details class="faq-item">
      <summary class="faq-q">
        <span>${f.q}</span>
        <span class="faq-chevron" aria-hidden="true"></span>
      </summary>
      <div class="faq-a"><p>${f.a}</p></div>
    </details>`).join('');

  return `
  <section class="faq-section">
    <div class="faq-head reveal">
      <div class="section-label">FAQ</div>
      <h2>Questions we get asked a lot</h2>
      <p>If your question is not here, call, email, or message us and we will answer it straight.</p>
    </div>
    <div class="faq-list reveal">${items}</div>
  </section>`;
}


// ─── Strategy Call Booking Page (New /booking Funnel) ──────────────────────────
function StrategyBookingPage(): string {
  return `
  <div class="funnel-page">
    <!-- Urgency Top Bar: logo left, pill centred -->
    <div class="funnel-urgency-bar">
      <a href="/" class="funnel-urgency-logo" data-link="home" aria-label="Atlantic Bear Home">
        <span class="logo-wordmark">Atlantic Bear</span>
        <img src="/atlanticbear-logo.png" alt="Atlantic Bear Logo" class="logo-bear-img" width="36" height="36" />
      </a>
      <div class="funnel-urgency-pill-wrap">
        <div class="funnel-urgency-pill">
          <span class="urgency-dot"></span>
          <span>WE ONLY TAKE ON 3 NEW BUSINESSES PER WEEK · BOOK YOUR SPOT</span>
        </div>
      </div>
    </div>

    <!-- Hero: dark navy bg, massive headline -->
    <div class="funnel-hero">
      <h1 class="funnel-headline">WE BUILD WEBSITES THAT ACTUALLY CATCH CUSTOMERS</h1>
      <p class="funnel-subheadline">Watch the video below to see exactly how we build custom websites for UAE businesses and get you found online, then book your strategy call.</p>
    </div>

    <!-- VSL Video Block: still on dark bg -->
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
            src="/videos for funnel call/v7/UAE Custom Website Upgrade in Five Days.mp4#t=0.001"
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
               <input class="bv-volume-slider" id="bv-volume" type="range" min="0" max="1" step="0.05" value="0.9" aria-label="Volume"/>
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
        <p style="margin: 8px auto 0; color: #9ca3af; font-size: 0.72rem; text-align: center; letter-spacing: 0.01em;">Packages from AED 3,500</p>
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

  <!-- Strategy Booking Modal: straight to Calendly, no qualifying questions -->
  <div class="booking-modal-overlay" id="strat-booking-modal">
    <div class="booking-modal-container">
      <div class="booking-modal-header">
        <h3 class="booking-modal-title">Book Your Strategy Call</h3>
        <button class="booking-modal-close" id="strat-modal-close-btn" aria-label="Close modal">&times;</button>
      </div>

      <div class="booking-modal-body">
        <div class="modal-calendly-widget-wrap">
          <div id="strat-modal-calendly-container" style="min-width:320px;height:580px;width:100%;"></div>
        </div>
      </div>
    </div>
  </div>
  `;
}




function BookedPage(): string {
  return `
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container" style="text-align: center;">
      <div style="width:64px; height:64px; margin: 0 auto 20px; border-radius:50%; background:rgba(62,207,142,0.15); display:flex; align-items:center; justify-content:center;">
        <svg viewBox="0 0 24 24" fill="none" stroke="#3ecf8e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="36" height="36">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <h1 class="reveal" style="font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 800; line-height: 1.1; margin-bottom: 12px;">Call Confirmed!</h1>
      <p class="reveal" style="max-width: 600px; margin: 12px auto 0; font-size: 1.1rem; color: var(--text-muted);">Your website strategy call is locked in. Let's get your business ready to grow.</p>
    </div>
  </div>

  <section class="section-pad">
    <div class="container" style="max-width: 680px; margin: 0 auto; text-align: center;">
      <h2 class="reveal" style="font-size: 1.4rem; font-weight: 700; margin-bottom: 12px;">Next Step: Add to Calendar</h2>
      <p class="reveal" style="margin-bottom: 24px; color: var(--text-muted); line-height: 1.6;">Please go to your email inbox and accept the meeting invitation. Click "Yes" or "Accept" to add it to your calendar so we both show up on time.</p>
      
      <!-- Calendar Accept Image Banner -->
      <div class="reveal" style="max-width: 580px; margin: 0 auto 36px; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--border);">
        <img src="/exemple on how to accept meeting to calender.png" alt="Example of accepting meeting invitation in calendar" style="width: 100%; display: block;" />
      </div>

    </div>
  </section>`;
}


// ─── Internal Sales Pages ─────────────────────────────────────────────────────
// /launch and /growth: not in nav, not in sitemap, screen-share only

function SalesPillarPage(plan: 'launch' | 'growth'): string {
  const isLaunch = plan === 'launch';
  const setupFee = isLaunch ? 'AED 3,500' : 'AED 6,500';
  const monthly  = 'AED 300';
  const halfUp   = isLaunch ? 'AED 1,750' : 'AED 3,250';
  const planName = isLaunch ? 'Launch Plan' : 'Growth Plan';
  const pageTitle = isLaunch ? "What's Included in the Launch Plan" : "What's Included in the Growth Plan";

  // Pillars, kept short and non-overwhelming
  const websiteFeatures = isLaunch
    ? ['Up to 5 pages', 'Custom design, no templates', 'WhatsApp button, click-to-call', 'Mobile responsive']
    : ['Up to 15 pages', 'Photos and video', 'Custom design, no templates', 'Contact form', 'Mobile responsive'];

  const seoFeatures = isLaunch
    ? ['Written to rank on Google', 'Page titles and meta descriptions', 'SEO-ready structure']
    : ['Written to rank on Google', 'Targeting your service keywords', 'Blog SEO structure'];

  const hostingFeatures = ['Fully managed', 'Daily backups'];

  const changesCount = isLaunch ? '1' : '2';
  const changesDesc  = isLaunch
    ? 'One revision session per month. Book time with us, tell us what to change, we handle it.'
    : 'Two revision sessions per month. Book time with us, tell us what to change, we handle it.';

  function pills(items: string[]): string {
    return items.map(i => `<span class="sp-pill">${i}</span>`).join('');
  }

  return `
  <div class="sp-wrap">
    <!-- HEADER -->
    <div class="sp-header">
      <div class="sp-logo-row">
        <img src="/atlanticbear-logo.png" alt="Atlantic Bear" width="56" height="56" />
      </div>
      <p class="sp-label">Atlantic Bear, ${planName}</p>
      <h1 class="sp-title">${pageTitle}</h1>
      <p class="sp-sub">Any questions along the way, just ask.</p>
    </div>

    <!-- FOUR PILLARS -->
    <div class="sp-pillars">

      <div class="sp-pillar">
        <div class="sp-pillar-num">01</div>
        <div class="sp-pillar-content">
          <h2 class="sp-pillar-title">Custom Website</h2>
          <p class="sp-pillar-desc">Built from scratch around your business. No templates, no guesswork. Built to get you more clients.</p>
          <div class="sp-pills">${pills(websiteFeatures)}</div>
        </div>
      </div>

      <div class="sp-pillar">
        <div class="sp-pillar-num">02</div>
        <div class="sp-pillar-content">
          <h2 class="sp-pillar-title">Site SEO</h2>
          <p class="sp-pillar-desc">So when someone's searching for what you offer, they can actually find you on Google and through AI search.</p>
          <div class="sp-pills">${pills(seoFeatures)}</div>
        </div>
      </div>

      <div class="sp-pillar">
        <div class="sp-pillar-num">03</div>
        <div class="sp-pillar-content">
          <h2 class="sp-pillar-title">Hosting</h2>
          <p class="sp-pillar-desc">We handle all of it. You never have to touch a thing.</p>
          <div class="sp-pills">${pills(hostingFeatures)}</div>
        </div>
      </div>

      <div class="sp-pillar">
        <div class="sp-pillar-num">04</div>
        <div class="sp-pillar-content">
          <h2 class="sp-pillar-title">Ongoing Changes</h2>
          <p class="sp-pillar-desc">${changesDesc}</p>
          <div class="sp-pills"><span class="sp-pill sp-pill-accent">${changesCount} session revision${isLaunch ? '' : 's'}/month</span></div>
        </div>
      </div>

    </div>

    <!-- HOW IT WORKS -->
    <div class="sp-how">
      <h2 class="sp-how-title">How it works from here</h2>
      <div class="sp-hw-steps">

        <div class="sp-hw-step">
          <div class="sp-hw-num">50/50</div>
          <div class="sp-hw-body">
            <h3 class="sp-hw-heading">Simple payment split</h3>
            <p class="sp-hw-desc">Half upfront, half once the site is live.</p>
          </div>
        </div>

        <div class="sp-hw-step">
          <div class="sp-hw-num">5<span class="sp-hw-unit">days</span></div>
          <div class="sp-hw-body">
            <h3 class="sp-hw-heading">Website reveal in 5 days</h3>
            <p class="sp-hw-desc">We build everything on our end. You don't prep a thing. In 5 days we're back on a call to show you the first version.</p>
          </div>
        </div>

        <div class="sp-hw-step sp-hw-step-hero">
          <div class="sp-hw-num sp-hw-num-hero">1<span class="sp-hw-unit">month</span></div>
          <div class="sp-hw-body">
            <div class="sp-hw-badge">Included</div>
            <h3 class="sp-hw-heading">Unlimited session revisions</h3>
            <p class="sp-hw-desc">For a full month from your first deposit, book sessions with us. Tell us what to change, we handle it. As many times as it takes until it's right.</p>
          </div>
        </div>

      </div>
    </div>

    <!-- TESTIMONIAL PULL-QUOTE -->
    <div class="sp-testimonial">
      <div class="sp-tq-quote">"Atlantic Bear were absolutely fantastic at putting together our ideas and bringing them across on the website in a way that really engaged our target market."</div>
      <div class="sp-tq-attr">Sonder Training Group, UK</div>
    </div>

    <!-- INVESTMENT. Gap is intentional: price stays off-screen during the pitch -->
    <div class="sp-investment-gap"></div>
    <div class="sp-investment">
      <p class="sp-inv-eyebrow">The Investment</p>
      <div class="sp-inv-total">${setupFee}<span class="sp-inv-mo"> + ${monthly}/mo</span></div>
      <div class="sp-inv-split">
        <div class="sp-inv-row">
          <span>To get started (50%)</span>
          <strong>${halfUp}</strong>
        </div>
        <div class="sp-inv-row">
          <span>Once the site's live (50%)</span>
          <strong>${halfUp}</strong>
        </div>
        <div class="sp-inv-row sp-inv-row-monthly">
          <span>Ongoing care</span>
          <strong>${monthly}/month</strong>
        </div>
      </div>
      <p class="sp-inv-note">No contracts. You own everything. Cancel the monthly anytime.</p>
    </div>
  </div>`;
}

function LaunchPage(): string { return SalesPillarPage('launch'); }
function GrowthPage(): string { return SalesPillarPage('growth'); }


// ─── Router ───────────────────────────────────────────────────────────────────
type Page = 'home' | 'pricing' | 'contact' | 'testimonials' | 'booking' | 'meta-ads' | 'meta-ads-shazay' | 'booked' | 'terms' | 'privacy' | 'launch' | 'growth';

const pageMap: Record<Page, () => string> = {
  home:         HomePage,
  pricing:      PricingPage,
  contact:      ContactPage,
  testimonials: TestimonialsPage,
  booking:      StrategyBookingPage,
  booked:       BookedPage,
  'meta-ads':   MetaAdsPage,
  'meta-ads-shazay': MetaAdsShazayPage,
  terms:        TermsPage,
  privacy:      PrivacyPage,
  launch:       LaunchPage,
  growth:       GrowthPage,
};

// Titles and descriptions come from src/seo.json so the client-side tags and
// the prerendered static HTML can never drift apart. Routes that are
// intentionally kept out of the sitemap are declared here.
const pageMeta: Record<Page, { title: string; desc: string }> = {
  home: {
    title: 'Website Design Agency in Dubai, UAE | Atlantic Bear',
    desc: 'Custom website design agency in Dubai, UAE. We build professional, conversion-focused websites for serious UAE business owners. Live in 5 days, fully managed.'
  },
  pricing: {
    title: 'Website Design Pricing in Dubai & UAE | Atlantic Bear',
    desc: 'Transparent pricing for custom website design in Dubai and the UAE. Fully managed, no contracts, live in 5 days. Plans from AED 3,500 setup + AED 300/mo.'
  },
  contact: {
    title: 'Contact a Dubai Website Design Agency | Atlantic Bear',
    desc: 'Get in touch with Atlantic Bear, a custom website design agency based in Dubai. Fast response, usually within a few hours. Start your UAE website project today.'
  },
  testimonials: {
    title: 'Client Reviews & Website Transformations | Atlantic Bear Dubai',
    desc: 'See real client results from Atlantic Bear. Before and after website case studies for businesses in the UAE and UK. Watch client video testimonials.'
  },
  booking: {
    title: 'Book a Free Call | Website Agency Dubai | Atlantic Bear',
    desc: 'Book a free 30-minute strategy call with Atlantic Bear, a website design agency in Dubai. Watch our overview video and schedule your slot.'
  },
  booked: {
    title: 'Call Confirmed | Atlantic Bear',
    desc: 'Your call is locked in. Add the event to your calendar and watch the pre-call video before our session.'
  },
  'meta-ads': {
    title: 'Facebook & Instagram Ads Dubai, UAE | Atlantic Bear',
    desc: 'Run targeted Facebook and Instagram ad campaigns in Dubai and the UAE with Atlantic Bear. Local targeting, ad creatives, and direct WhatsApp leads. AED 2,500/mo.'
  },
  'meta-ads-shazay': {
    title: 'TikTok Ads Retainer Payment | Atlantic Bear',
    desc: 'Set up your Atlantic Bear TikTok Ads retainer subscription, billed every 15 days.'
  },
  terms: {
    title: 'Terms & Conditions | Atlantic Bear Website Agency Dubai',
    desc: 'The terms covering Atlantic Bear website design, development, hosting, and maintenance services for businesses in Dubai and the UAE.'
  },
  privacy: {
    title: 'Privacy Policy | Atlantic Bear Website Agency Dubai',
    desc: 'How Atlantic Bear collects, uses, stores, and protects the personal information you share through our website.'
  },
  launch: {
    title: 'The Launch Plan | Atlantic Bear',
    desc: 'Atlantic Bear Launch Plan, internal sales presentation.'
  },
  growth: {
    title: 'The Growth Plan | Atlantic Bear',
    desc: 'Atlantic Bear Growth Plan, internal sales presentation.'
  }
} as Record<Page, { title: string; desc: string }>;

// FAQPage structured data, built from the same FAQS array the page renders so
// the two can't disagree. Google renders JavaScript when collecting structured
// data, and only the contact page carries an FAQ.
function updateFaqSchema(page: Page) {
  const existing = document.getElementById('faq-schema');
  if (existing) existing.remove();
  if (page !== 'contact') return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'faq-schema';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  });
  document.head.appendChild(script);
}

// Routes that must never be indexed (private client links shared directly).
const NOINDEX_PAGES: Page[] = ['meta-ads-shazay'];

function updateMetadata(page: Page) {
  const meta = pageMeta[page] || pageMeta.home;
  document.title = meta.title;
  updateFaqSchema(page);

  // Robots: add a noindex tag for private routes, remove it everywhere else.
  let robotsTag = document.querySelector('meta[name="robots"]');
  if (NOINDEX_PAGES.includes(page)) {
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'noindex, nofollow');
  } else if (robotsTag) {
    robotsTag.remove();
  }

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
    'og:image': `${window.location.origin}${seo.site.ogImage}`
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
    'twitter:image': `${window.location.origin}${seo.site.ogImage}`
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

// Paths that are served by a real static HTML file in public/ (currently just
// the blog, plus every individual post under it). The SPA must never render
// these itself. There used to be a BlogPage() component here; it silently
// shadowed public/blog/index.html, which is the file the weekly publishing
// cron actually updates, so in-app navigation showed a frozen, months-old
// copy of the blog. Links to these paths are handled as full browser
// navigations (see delegateLinks), and if the SPA ever boots on one of them
// it forces a real reload so the static file is served.
const STATIC_ROUTES = ['/blog'];

function isStaticRoute(pathname: string): boolean {
  return STATIC_ROUTES.some(r => pathname === r || pathname.startsWith(r + '/'));
}

function getPageFromPath(path: string): Page {
  const cleanPath = path.replace(/^\/|\/$/g, '');
  if (cleanPath === 'pricing' || cleanPath === 'work' || cleanPath === 'contact' || cleanPath === 'testimonials' || cleanPath === 'booking' || cleanPath === 'booking-new' || cleanPath === 'meta-ads' || cleanPath === 'meta-ads-shazay' || cleanPath === 'booked' || cleanPath === 'terms' || cleanPath === 'privacy' || cleanPath === 'launch' || cleanPath === 'growth') {
    return cleanPath as Page;
  }
  return 'home';
}

function setActiveNav(page: Page) {
  $$('#main-nav [data-link]').forEach(el => el.classList.remove('active'));
  const link = $(`#main-nav [data-link="${page}"].nav-link`);
  if (link) link.classList.add('active');
}

// Tags the main content blocks so they animate in on scroll, rather than
// hand-adding .reveal to every element in the markup. Siblings are staggered
// so a row or grid comes in as a cascade instead of all at once.
const AUTO_REVEAL_SELECTOR = [
  '.section-title', '.section-sub',
  '.facts-headline', '.fact-hero-block', '.facts-stat-block',
  '.basic-system-card',
  '.step', '.feature-item',
  '.teaser-card', '.tier-card', '.level-one-card',
  '.pricing-plan-card', '.guarantee-card', '.pricing-bonus-block',
  '.problem-card', '.contact-method',
  '.cc-copy', '.cc-visual',
  '.reviews-head',
  '.competitor-banner-text',
  '.meta-ads-teaser-box',
].join(',');

function initAutoReveal() {
  const els = Array.from(document.querySelectorAll(AUTO_REVEAL_SELECTOR)) as HTMLElement[];

  els.forEach(el => {
    if (el.classList.contains('reveal') || el.classList.contains('revealed')) return;
    el.classList.add('reveal');

    // Stagger against the other revealing siblings in the same container.
    const parent = el.parentElement;
    if (!parent) return;
    const sibs = Array.from(parent.children).filter(c => c.classList.contains('reveal'));
    const idx = sibs.indexOf(el);
    if (idx > 0 && !el.style.transitionDelay) {
      el.style.transitionDelay = `${Math.min(idx * 0.07, 0.35)}s`;
    }
  });
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

// Types a stat out one character at a time, then restores the original markup
// so the styled "%" span comes back intact.
function typeStat(el: HTMLElement) {
  const original = el.innerHTML;
  const text = (el.textContent || '').trim();
  if (!text) return;

  el.textContent = '';
  el.classList.add('is-typing');

  let i = 0;
  const step = () => {
    i += 1;
    el.textContent = text.slice(0, i);
    if (i < text.length) {
      window.setTimeout(step, 105);
    } else {
      el.innerHTML = original;
      el.classList.remove('is-typing');
    }
  };
  window.setTimeout(step, 90);
}

function initFactNumbers() {
  const nums = $$('.fact-hero-num, .facts-stat-num') as HTMLElement[];
  if (!nums.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Reserve the final height so the line doesn't collapse while it's empty.
  nums.forEach(n => { n.style.minHeight = `${n.getBoundingClientRect().height}px`; });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      obs.unobserve(el);
      window.setTimeout(() => typeStat(el), i * 150);
    });
  }, { threshold: 0.4 });

  nums.forEach(n => obs.observe(n));
}

// ─── PayPal subscription button (TikTok Ads · Shazay page) ───────────────────
// The PayPal SDK is loaded on demand, only when the client opens the private
// /meta-ads-shazay link, so it never touches any other route. Loading the SDK
// twice throws, so the <script> is injected once and reused on return visits.
function initPaypalSubscription() {
  const PLAN_ID = 'P-3J276348CL7673454NKNKCRA';
  const CONTAINER_SEL = '#paypal-button-container-' + PLAN_ID;
  const SDK_SRC = 'https://www.paypal.com/sdk/js?client-id=BAAeLN9PQY_40P1TyOqzvSGlsxkJvgSNc84tV2boPr7iX-TUntDkuIFWfjw3zc3V8zc13VS2nx64j-E710&vault=true&intent=subscription';

  function renderButton() {
    const paypal = (window as any).paypal;
    const container = document.querySelector(CONTAINER_SEL) as HTMLElement | null;
    if (!paypal || !container || container.dataset.rendered === '1') return;
    container.dataset.rendered = '1';

    paypal.Buttons({
      style: { shape: 'rect', color: 'blue', layout: 'vertical', label: 'subscribe' },
      createSubscription: function (_data: any, actions: any) {
        return actions.subscription.create({ plan_id: PLAN_ID });
      },
      onApprove: function () {
        const success = document.getElementById('paypal-shazay-success');
        if (success) success.style.display = 'block';
        container.style.display = 'none';
      }
    }).render(CONTAINER_SEL);
  }

  if ((window as any).paypal) {
    renderButton();
    return;
  }

  const existing = document.getElementById('paypal-sdk-shazay') as HTMLScriptElement | null;
  if (existing) {
    existing.addEventListener('load', renderButton, { once: true });
    return;
  }

  const script = document.createElement('script');
  script.id = 'paypal-sdk-shazay';
  script.src = SDK_SRC;
  script.setAttribute('data-sdk-integration-source', 'button-factory');
  script.onload = renderButton;
  document.body.appendChild(script);
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

  // Set initial volume to 0.9 (speaker recorded louder)
  video.volume = 0.9;

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

  // Play on overlay click: stop preview loop, unmute, play
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
  let vslPlayFired = false;
  const milestonesFired = {
    m25: false,
    m50: false,
    m75: false,
    m95: false,
    m100: false
  };
  const intervalsFired: Record<number, boolean> = {};

  // Fire VSL_Play once when video genuinely starts playing (not preview loop)
  video.addEventListener('play', () => {
    if (!vslPlayFired && !isPreviewLooping) {
      vslPlayFired = true;
      if (typeof (window as any).fbq === 'function' && !isInternalSession()) {
        (window as any).fbq('trackCustom', 'VSL_Play');
      }
    }
  });

  video.addEventListener('timeupdate', () => {
    const duration = video.duration;
    if (!duration) return;

    const currentTime = video.currentTime;
    const pct = (currentTime / duration) * 100;

    // Track play initiation (at >0.5s playback) via Abacus analytics
    if (!played && currentTime > 0.5 && !isPreviewLooping) {
      played = true;
      trackAbacusEvent('videoplay');
    }

    // Skip milestone tracking during muted preview loop
    if (isPreviewLooping) return;

    // Milestones progress: Abacus + Meta Pixel
    if (pct >= 25 && !milestonesFired.m25) {
      milestonesFired.m25 = true;
      trackAbacusEvent('videowatch_25pct');
      if (typeof (window as any).fbq === 'function' && !isInternalSession()) {
        (window as any).fbq('trackCustom', 'VSL_25');
      }
    }
    if (pct >= 50 && !milestonesFired.m50) {
      milestonesFired.m50 = true;
      trackAbacusEvent('videowatch_50pct');
      if (typeof (window as any).fbq === 'function' && !isInternalSession()) {
        (window as any).fbq('trackCustom', 'VSL_50');
      }
    }
    if (pct >= 75 && !milestonesFired.m75) {
      milestonesFired.m75 = true;
      trackAbacusEvent('videowatch_75pct');
      if (typeof (window as any).fbq === 'function' && !isInternalSession()) {
        (window as any).fbq('trackCustom', 'VSL_75');
      }
    }
    if (pct >= 95 && !milestonesFired.m95) {
      milestonesFired.m95 = true;
      if (typeof (window as any).fbq === 'function' && !isInternalSession()) {
        (window as any).fbq('trackCustom', 'VSL_95');
      }
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
          // iOS Safari: only video elements can go fullscreen
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




// ─── Strategy Booking Modal Handler ──────────────────────────────────────────
// Straight to Calendly, no name/phone/business/revenue qualifying steps.
// Calendly's own scheduling form asks whatever questions we need.
function initStrategyBookingModal() {
  const modal = document.getElementById('strat-booking-modal') as HTMLElement | null;
  const closeBtn = document.getElementById('strat-modal-close-btn') as HTMLElement | null;

  if (!modal || !closeBtn) return;

  if (modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }

  const initCalendlyEmbed = () => {
    const container = document.getElementById('strat-modal-calendly-container');
    if (!container) return;

    const calendlyUrl = 'https://calendly.com/officialatlanticbear/strategy-call?hide_gdpr_banner=1&primary_color=3b69ff';

    container.innerHTML = '';
    attachLoaderToContainer(container);

    const doInit = () => (window as any).Calendly.initInlineWidget({ url: calendlyUrl, parentElement: container });
    if ((window as any).Calendly) {
      doInit();
    } else {
      const existingScript = document.getElementById('calendly-sdk') as HTMLScriptElement | null;
      if (existingScript) {
        existingScript.addEventListener('load', doInit, { once: true });
      }
    }
  };

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    initCalendlyEmbed();
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Close triggers: only X button closes the modal (no overlay tap, no Escape on mobile)
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  (window as any).openStratBookingModal = openModal;
}

// Left-to-right reading order of the site, used to decide which way the page
// slides. Going "forward" in this list slides left; going back slides right.
const PAGE_ORDER: Page[] = ['home', 'pricing', 'testimonials', 'meta-ads', 'contact', 'booking', 'booked'];
let activePage: Page | null = null;

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
  if (page === 'booking') {
    if (navEl) navEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'none';
  } else {
    if (navEl) navEl.style.display = '';
    if (footerEl) footerEl.style.display = '';
  }

  const main = $('#main-content')!;

  // Slide the outgoing page off, swap the markup, then slide the new one in
  // from the opposite edge.
  const from = activePage ? PAGE_ORDER.indexOf(activePage) : -1;
  const to = PAGE_ORDER.indexOf(page);
  const forward = from === -1 || to >= from;
  const exitTo = forward ? '-8%' : '8%';
  const enterFrom = forward ? '8%' : '-8%';
  activePage = page;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  main.style.transition = reduceMotion
    ? 'opacity 0.2s ease'
    : 'opacity 0.26s ease, transform 0.26s cubic-bezier(0.5, 0, 0.75, 0)';
  main.style.opacity = '0';
  if (!reduceMotion) main.style.transform = `translateX(${exitTo})`;

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Place the incoming page off-screen before it is painted.
    main.style.transition = 'none';
    if (!reduceMotion) main.style.transform = `translateX(${enterFrom})`;

    main.innerHTML = pageMap[page]();
    setActiveNav(page);

    requestAnimationFrame(() => {
      main.style.transition = reduceMotion
        ? 'opacity 0.25s ease'
        : 'opacity 0.34s ease, transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)';
      main.style.opacity = '1';
      main.style.transform = 'translateX(0)';
    });
    initAutoReveal();
    scrollReveal();
    initFactNumbers();

    if (page === 'meta-ads-shazay') {
      initPaypalSubscription();
    }

    if (page === 'booking' || page === 'booked') {
      trackAbacusEvent('pageload', 2000); // Deferred by 2s to not block LCP/FCP paint
      startPageTimeTracking();
      startScrollTracking();
      loadCalendlyWidget();
      initBookingPageVideo(page === 'booking');

      // Initialize modals based on route
      if (page === 'booking') {
        initStrategyBookingModal();
        document.querySelectorAll('.strat-modal-trigger, .funnel-cta-wrap .funnel-cta-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            // Fire BookButtonClick pixel event (once per click, not per session, since each tap is intentional)
            if (typeof (window as any).fbq === 'function' && !isInternalSession()) {
              (window as any).fbq('trackCustom', 'BookButtonClick');
            }
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
    // Skip pixel entirely if ?notrack=1 is set (for internal testing)
    if (typeof (window as any).fbq === 'function' && !sessionStorage.getItem('notrack')) {
      (window as any).fbq('track', 'PageView');
    }

    if (pushHistory) {
      const path = page === 'home' ? '/' : `/${page}`;
      if (window.location.pathname !== path) {
        history.pushState(null, '', path);
      }
    }
  }, 260);   // matches the exit transition above
}

// ─── Link delegation ─────────────────────────────────────────────────────────
function delegateLinks(root: HTMLElement) {
  root.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('[data-link]') as HTMLElement | null;
    if (!target) return;

    // Check if it's a normal click (not cmd+click, middle click, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    // Links to a statically served page (the blog) must do a real navigation
    // so Vercel serves the current static file, not a stale SPA render.
    const href = target.getAttribute('href') || '';
    if (isStaticRoute(href)) return;

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




// ─── Bootstrap ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const _urlParams = new URLSearchParams(window.location.search);

  // Detect ?notrack=1 or ?preview=true so internal test visits don't fire Meta Pixel events
  if (_urlParams.get('notrack') === '1' || _urlParams.get('preview') === 'true') {
    sessionStorage.setItem('notrack', '1');
  }

  // Detect Meta ad traffic: Meta appends fbclid to all ad-click URLs automatically.
  // Also check UTM source as a fallback for manually-tagged campaigns.
  // Only visitors who arrived via a Meta ad should trigger the Schedule conversion.
  const _fbclid = _urlParams.get('fbclid');
  const _utmSource = (_urlParams.get('utm_source') || '').toLowerCase();
  const _isMetaTraffic = !!_fbclid || ['facebook', 'instagram', 'fb', 'meta'].some(s => _utmSource.includes(s));
  if (_isMetaTraffic) {
    sessionStorage.setItem('came_from_meta', '1');
  }

  const app = document.getElementById('app')!;
  app.innerHTML = `
    ${Navbar()}
    <main id="main-content" style="opacity:1; min-height:100vh;"></main>
    ${Footer()}
    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/971502446531" target="_blank" rel="noopener" class="whatsapp-floating-btn" aria-label="Chat on WhatsApp">
      <span class="whatsapp-tooltip">Chat with us</span>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.967-.94 1.165-.174.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
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
      let data = e.data;
      if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch (_) {}
      }
      if (typeof data === 'object' && data && data.event === 'calendly.event_scheduled') {
        isScheduled = true;
      }
    }

    if (isScheduled) {
      const stratModal = document.getElementById('strat-booking-modal');
      const legacyModal = document.getElementById('booking-modal');
      const isStratActive = stratModal && stratModal.classList.contains('active');

      if (isStratActive) {
        trackAbacusEvent('bookedcall_strategy');
        // Only fire Schedule pixel if visitor came via a Meta ad (fbclid or utm_source=facebook/instagram).
        // This prevents test bookings from polluting ad conversion data.
        if (typeof (window as any).fbq === 'function'
            && sessionStorage.getItem('came_from_meta')
            && !sessionStorage.getItem('fbq_schedule_fired')) {
          (window as any).fbq('track', 'Schedule');
          sessionStorage.setItem('fbq_schedule_fired', '1');
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

  // If this SPA shell was served for a static route (stale cache, or a
  // misconfigured rewrite), pull the real static file instead of rendering
  // the home page under the wrong URL. The sessionStorage flag stops this
  // from looping if the static file is ever genuinely missing.
  if (isStaticRoute(window.location.pathname)) {
    if (!sessionStorage.getItem('static_route_reload')) {
      sessionStorage.setItem('static_route_reload', '1');
      window.location.reload();
      return;
    }
  } else {
    sessionStorage.removeItem('static_route_reload');
  }

  const initialPage = getPageFromPath(window.location.pathname);
  navigate(initialPage, false);

  window.addEventListener('popstate', () => {
    const page = getPageFromPath(window.location.pathname);
    navigate(page, false);
  });
});

