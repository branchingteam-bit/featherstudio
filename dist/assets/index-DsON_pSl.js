(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const re={ogImage:"/og-image.png"},j={site:re},$=(t,e=document)=>e.querySelector(t),z=(t,e=document)=>[...e.querySelectorAll(t)],_="atlanticbear_analytics_8d24";function C(){if(sessionStorage.getItem("notrack"))return!0;try{if(new URLSearchParams(window.location.search).get("preview")==="true")return!0}catch{}return!1}function g(t,e=0){const a=()=>{fetch(`https://abacus.jasoncameron.dev/hit/${_}/${t}`).catch(()=>{});try{const s=de();fetch(`https://abacus.jasoncameron.dev/hit/${_}/${s}_${t}`).catch(()=>{})}catch{}};e>0?setTimeout(a,e):a()}let U={};function le(){Q();const t=e=>{U[`t${e}`]=window.setTimeout(()=>{g(`time_${e}s`)},e*1e3)};t(5),t(15),t(30),t(60)}function Q(){Object.values(U).forEach(clearTimeout),U={}}let A={moved:!1,calendar:!1,testimonials:!1},B=null;function ce(){X(),A={moved:!1,video:!1,calendar:!1,testimonials:!1},B=()=>{window.scrollY>50&&!A.moved&&(A.moved=!0,g("scroll_moved"));const t=document.getElementById("booking-calendar");if(t&&!A.calendar){const a=t.getBoundingClientRect();a.top+a.height/2<window.innerHeight&&(A.calendar=!0,g("scroll_calendar"))}const e=document.querySelector(".booking-step-card:last-child");e&&!A.testimonials&&e.getBoundingClientRect().top<window.innerHeight-300&&(A.testimonials=!0,g("scroll_testimonials"))},window.addEventListener("scroll",B,{passive:!0})}function X(){B&&(window.removeEventListener("scroll",B),B=null)}function de(){const t=new Date,e=new Date(t.toLocaleString("en-US",{timeZone:"Asia/Dubai"})),a=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${a}-${s}-${i}`}const d={arrow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.69 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.69A2 2 0 0122 16.92z"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2 .27-2.98-.31-3.5c-.56-.52-1.43-.8-2.69.5z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'};function ue(){return`
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
      <a href="/booking" class="btn btn-primary btn-sm btn-pulse" data-link="booking" id="nav-book-cta">Book a Call ${d.arrow}</a>
    </div>
  </nav>`}function pe(){return`
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
  </footer>`}function he(){return`
  <!-- BUILT WITH CLAUDE CODE -->
  <section class="cc-section">
    <div class="container">
      <div class="cc-grid">

        <div class="cc-copy reveal">
          <span class="cc-badge">${d.code} How we build</span>
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
              <span class="cc-point-icon">${d.zap}</span>
              <span><strong>Days, not months.</strong> Groundwork that used to take weeks is done in an afternoon.</span>
            </li>
            <li>
              <span class="cc-point-icon">${d.palette}</span>
              <span><strong>Still fully custom.</strong> Every line is written for your business. No themes, no drag-and-drop.</span>
            </li>
            <li>
              <span class="cc-point-icon">${d.shield}</span>
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
  </section>`}function ve(){return`<div class="section-waves" aria-hidden="true">${[{cls:"wave-1",fill:"#3b69ff",d:"M0,40 C150,18 350,62 600,40 C850,18 1050,62 1200,40 C1350,18 1550,62 1800,40 C2050,18 2250,62 2400,40"},{cls:"wave-2",fill:"#3b69ff",d:"M0,50 C200,72 400,28 600,50 C800,72 1000,28 1200,50 C1400,72 1600,28 1800,50 C2000,72 2200,28 2400,50"},{cls:"wave-3",fill:"#3b69ff",d:"M0,55 C120,25 280,85 600,55 C920,25 1080,85 1200,55 C1320,25 1480,85 1800,55 C2120,25 2280,85 2400,55"},{cls:"wave-4",fill:"#3b69ff",d:"M0,65 C180,45 420,85 600,65 C780,45 1020,85 1200,65 C1380,45 1620,85 1800,65 C1980,45 2220,85 2400,65"}].map(a=>`
    <div class="wave-layer ${a.cls}">
      <svg viewBox="0 0 2400 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="${a.d} L2400,140 L0,140 Z" fill="${a.fill}" />
      </svg>
    </div>`).join("")}</div>`}function me(){return`
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
  </section>`}function ge(){return`
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
  </section>`}function ye(){const t=[{num:"5 Days",desc:"From kick-off to live"},{num:"100%",desc:"Mobile responsive"},{num:"Fully Custom",desc:"No templates, ever"},{num:"3+ Years",desc:"Building in the UAE"},{num:"81%",desc:"Of customers research online first"},{num:"SEO Ready",desc:"Google-optimised from day one"}],e=()=>t.map(s=>`<span class="marquee-badge"><span class="marquee-num">${s.num}</span><span class="marquee-desc">${s.desc}</span></span><span class="marquee-sep">·</span>`).join(""),a=e()+e()+e()+e();return`
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
          Book a Call ${d.arrow}
        </a>
      </div>
    </div>
  </section>

  <!-- MARQUEE BELT -->
  <div class="marquee-belt">
    <div class="marquee-track">
      <div class="marquee-inner" aria-hidden="true">
        ${a}
      </div>
    </div>
  </div>


  ${me()}

  ${ge()}

  <!-- THE FACTS SECTION -->
  <section class="facts-section" style="border-top:1px solid var(--border);">
    ${ve()}
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

  ${he()}

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
          Get Started with Market Leader ${d.arrow}
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
            Explore Launch Plan ${d.arrow}
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
            Explore Growth Plan ${d.arrow}
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
          Explore Meta Ads ${d.arrow}
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

        <a href="/blog" data-link="blog" id="home-explore-blog" class="reveal" style="display: block; background: var(--bg); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 28px 28px 24px; text-decoration: none; color: inherit; transition: border-color 0.2s, box-shadow 0.2s;" onmouseover="this.style.borderColor='var(--blue)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.borderColor='var(--border)'; this.style.boxShadow='none'">
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
  `}function fe(){return`
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
          Book Strategy Call ${d.arrow}
        </a>
      </div>

      <div class="feature-grid" style="grid-template-columns: repeat(2, 1fr); max-width: 900px; margin: 0 auto;">
        <div class="feature-item reveal" style="border-right: 1px solid var(--border); border-bottom: 1px solid var(--border);">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${d.zap}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Local UAE Targeting</h3>
          <p>We target active customers in Dubai, Abu Dhabi, or specific UAE locations who need your services immediately.</p>
        </div>

        <div class="feature-item reveal" style="border-right: none; border-bottom: 1px solid var(--border);">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${d.star}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Ad Copy & Creatives</h3>
          <p>We craft high-converting video and image ad creative designed to stop scrolling on Instagram & Facebook feeds.</p>
        </div>

        <div class="feature-item reveal" style="border-right: 1px solid var(--border); border-bottom: none;">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${d.phone}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Direct WhatsApp & Form Leads</h3>
          <p>Leads land straight on your phone or email so you can reply and convert clients without delay.</p>
        </div>

        <div class="feature-item reveal" style="border-right: none; border-bottom: none;">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${d.rocket}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Continuous Management</h3>
          <p>We monitor ad performance daily, optimize budget allocation, and provide clear reports so you track your ROI.</p>
        </div>
      </div>

    </div>
  </section>
  `}function be(){return`
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
  `}function we(){return`
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="section-label reveal">Knowledge Base</div>
      <h1 class="reveal" style="transition-delay:0.05s;">Website & SEO Tips for<br>UAE Small Businesses</h1>
      <p class="reveal" style="transition-delay:0.1s; max-width: 600px;">Practical guides on website design, Google rankings, and digital marketing written by the Atlantic Bear team for business owners in Dubai and the UAE.</p>
    </div>
  </div>

  <section class="section-pad">
    <div class="container">
      <div style="display: grid; gap: 28px; max-width: 800px;">

        <a href="/blog/website-cost-dubai-2026" class="reveal" style="display: block; background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 32px; text-decoration: none; color: inherit; transition: border-color 0.2s, box-shadow 0.2s;" onmouseover="this.style.borderColor='var(--blue)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.borderColor='var(--border)'; this.style.boxShadow='none'">
          <div style="font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--blue); margin-bottom: 10px;">Website Design · Dubai</div>
          <h2 style="font-size: 1.25rem; margin: 0 0 12px; font-weight: 700;">How Much Does a Website Cost in Dubai in 2026?</h2>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 16px;">Freelancers, agencies, DIY builders. We break down the real costs of every option so you can make the right choice for your UAE business.</p>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue);">Read article →</span>
        </a>

        <a href="/blog/website-agency-dubai-uae" class="reveal" style="display: block; background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 32px; text-decoration: none; color: inherit; transition: border-color 0.2s, box-shadow 0.2s;" onmouseover="this.style.borderColor='var(--blue)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.borderColor='var(--border)'; this.style.boxShadow='none'">
          <div style="font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--blue); margin-bottom: 10px;">Agency Guide · UAE</div>
          <h2 style="font-size: 1.25rem; margin: 0 0 12px; font-weight: 700;">What to Look for in a Website Design Agency in Dubai (2026 Guide)</h2>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 16px;">Not all agencies are the same. Here's what business owners in Dubai and the UAE should look for, and the red flags to avoid.</p>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue);">Read article →</span>
        </a>

        <a href="/blog/get-found-on-google-dubai" class="reveal" style="display: block; background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 32px; text-decoration: none; color: inherit; transition: border-color 0.2s, box-shadow 0.2s;" onmouseover="this.style.borderColor='var(--blue)'; this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.borderColor='var(--border)'; this.style.boxShadow='none'">
          <div style="font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--blue); margin-bottom: 10px;">SEO Guide · Dubai</div>
          <h2 style="font-size: 1.25rem; margin: 0 0 12px; font-weight: 700;">How to Get Your Dubai Business Found on Google in 2026</h2>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 16px;">A step-by-step local SEO guide for UAE small business owners. From Google Business Profile to your website structure, here is what actually moves the needle.</p>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue);">Read article →</span>
        </a>

      </div>
    </div>
  </section>

  <section class="cta-section" style="border-top:1px solid var(--border);">
    <div class="container">
      <h2>Want a website that actually ranks on Google?</h2>
      <p>We build SEO-ready, custom websites for UAE businesses. Live in 5 days, fully managed.</p>
      <div class="cta-ctas">
        <a href="/booking" class="btn btn-primary btn-pulse btn-large" data-link="booking" id="blog-cta-book">
          Book a Free Call ${d.arrow}
        </a>
        <a href="/pricing" class="btn btn-secondary btn-large" data-link="pricing" id="blog-cta-pricing">
          View Plans
        </a>
      </div>
    </div>
  </section>
  `}function ke(){return`
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
                <span class="feature-desc">Hosting and daily backups</span>
                <span class="feature-val">Included</span>
              </div>
              <div class="pricing-feature-row">
                <span class="feature-desc">Ongoing support from our team whenever you need something</span>
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
          Explore Meta Ads ${d.arrow}
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
  `}function xe(){return`
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
          <a href="https://sondertraininggroup.com/" target="_blank" rel="noopener" class="btn btn-secondary btn-sm case-study-link">Visit the live site ${d.arrow}</a>
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
          Book a Call ${d.arrow}
        </a>
        <a href="/pricing" class="btn btn-secondary btn-large" data-link="pricing" id="testimonials-plans-cta">
          View Plans
        </a>
      </div>
    </div>
  </section>`}function Ee(){return`
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d.phone}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Phone</div>
                  <div class="contact-method-value">+971-50-244-6531</div>
                </div>
              </a>
              <a href="mailto:officialatlanticbear@gmail.com" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d.mail}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Email</div>
                  <div class="contact-method-value">officialatlanticbear@gmail.com</div>
                </div>
              </a>
              <a href="https://www.instagram.com/officialatlanticbear/" target="_blank" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d.instagram}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Instagram</div>
                  <div class="contact-method-value">@officialatlanticbear</div>
                </div>
              </a>
              <div class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d.map}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Location</div>
                  <div class="contact-method-value">Dubai, UAE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        ${Ce()}
      </div>
    </div>
  </div>`}function J(t,e,a){const s=a.map(i=>`
    <section class="legal-block reveal">
      <h2>${i.h}</h2>
      ${i.p.map(o=>`<p>${o}</p>`).join("")}
    </section>`).join("");return`
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="section-label">Legal</div>
      <h1>${t}</h1>
      <p style="max-width:640px; margin:12px auto 0; color:var(--text-muted);">Last updated ${e}</p>
    </div>
  </div>
  <section class="section-pad">
    <div class="container">
      <div class="legal-wrap">${s}</div>
    </div>
  </section>`}function Ae(){return J("Terms &amp; Conditions","August 2026",[{h:"1. Who we are",p:['These terms govern the website design, development, hosting, and maintenance services provided by Atlantic Bear ("we", "us", "our") to you, the client. Our registered place of business is Dubai, United Arab Emirates. You can reach us at officialatlanticbear@gmail.com or on +971-50-244-6531.',"By engaging us to build or maintain a website, or by paying an invoice, you accept these terms. If you are agreeing on behalf of a company, you confirm that you are authorised to bind that company."]},{h:"2. Services and scope",p:["We design, build, host, and maintain websites. The exact deliverables for your project, the number of pages, the features included, and the timeline, are agreed with you in writing before work begins, whether by email, proposal, or the plan you select on our pricing page.","Anything not set out in that written scope is not included. Requests that fall outside it, such as adding an online shop, a booking system, additional languages, or a substantial new section, are treated as new work and quoted separately. We will always tell you the cost before starting, and we will never add charges to an invoice you have not agreed to."]},{h:"3. Fees and payment",p:["Our plans consist of a one-off build fee and a recurring monthly fee, as published on our pricing page or as quoted to you directly. The build fee covers design and development up to launch. The monthly fee covers hosting, domain renewal, SSL, security and software updates, backups, uptime monitoring, and unlimited small content changes.","Invoices are payable within 14 days of issue unless we have agreed otherwise in writing. If a monthly payment is more than 30 days overdue we may suspend hosting and support after giving you at least 7 days written notice and a reasonable chance to settle. We will not delete your site or your data because of a late payment without telling you first.","All fees are stated in UAE dirhams and are exclusive of any applicable VAT or other government charges, which will be added where legally required."]},{h:"4. Your responsibilities",p:["To build your site we need certain things from you: accurate information about your business, timely feedback at review stages, and any brand assets, photography, or existing content you want us to use.","You confirm that anything you supply is either owned by you or properly licensed to you, and that we may use it to build and operate your website. You are responsible for the accuracy and legality of the information you ask us to publish, including prices, claims about your services, qualifications, and any regulated wording that applies to your industry.","If a project stalls because we are waiting on materials or approvals from you, timelines move accordingly. We will keep asking, but we cannot hold a build slot open indefinitely."]},{h:"5. Ownership of your website",p:["Your domain name is registered in your name and belongs to you. On full payment of the build fee, the finished website design, page content, and site files we produce for you become yours to keep.","This applies whether or not you stay with us. If you decide to move to another provider, we will transfer your domain, export your site files, and provide the access you need to take over hosting, and we will do it within 48 hours of your request. We do not hold domains, files, or content hostage.","Two things stay with us: any generic underlying code, tooling, or components we reuse across client projects, and any third-party software or fonts, which remain subject to their own licences. This does not restrict your use of your own website in any way."]},{h:"6. Content changes and support",p:["While you are on an active monthly plan, small content changes are unlimited and included. That covers text edits, prices, opening hours, images, staff and service listings, and similar updates. Requests are usually completed the same working day.","Support is provided by email, phone, and WhatsApp during UAE business hours. We aim to respond within a few hours. Substantial new functionality is not covered by the monthly fee and is quoted separately as set out in section 2."]},{h:"7. Hosting, uptime, and backups",p:["We host your site on established third-party infrastructure and monitor it for availability. We take regular backups so your site can be restored if something goes wrong.","We aim for continuous availability but we do not guarantee uninterrupted service. Downtime can arise from causes outside our control, including failures at our hosting providers, domain registry issues, denial-of-service attacks, and internet outages. Where a problem is within our control we will fix it as a priority and keep you informed."]},{h:"8. Cancellation",p:["There is no minimum term and no cancellation fee. You may cancel your monthly plan at any time by telling us in writing. Your plan runs to the end of the period you have already paid for, and we do not refund part-months.","On cancellation we hand over your domain, files, and the access required to move hosting elsewhere, within 48 hours. Once your plan ends we stop hosting the site, so please arrange your new hosting before the transfer.","We may end our side of the arrangement by giving you 30 days notice, or immediately if you use our services unlawfully or ask us to publish content that is illegal, fraudulent, or infringing."]},{h:"9. Liability",p:["We provide our services with reasonable skill and care. Nothing in these terms limits our liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be limited.","Subject to that, our total liability to you in connection with our services is limited to the total fees you have paid us in the 12 months before the claim arose. We are not liable for indirect or consequential losses, including lost profits, lost revenue, lost business, or loss of anticipated savings.","We are not responsible for search engine rankings, advertising performance, or the commercial results of your website. We build sites to a professional technical standard, but no agency can guarantee a position in search results or a level of sales."]},{h:"10. Governing law",p:["These terms are governed by the laws of the United Arab Emirates and the applicable laws of the Emirate of Dubai. Any dispute that we cannot resolve between us will be subject to the exclusive jurisdiction of the courts of Dubai.","If any part of these terms is found to be unenforceable, the rest continues to apply. We may update these terms from time to time and will publish the current version on this page with the date it was last changed."]}])}function Se(){return J("Privacy Policy","August 2026",[{h:"1. Introduction",p:["This policy explains what personal information Atlantic Bear collects through this website, why we collect it, how we use and store it, and what rights you have over it. We are based in Dubai, United Arab Emirates, and you can contact us about anything in this policy at officialatlanticbear@gmail.com or on +971-50-244-6531.","We keep this deliberately plain. We are a small web design business, not an advertising network, and we do not sell personal information to anyone."]},{h:"2. Information you give us directly",p:["We do not run a contact form on this website. If you reach out by phone, email, or Instagram, we only receive whatever you choose to tell us directly. When you book a call, our scheduling provider Calendly collects your name, email address, and phone number so we can contact you and hold the appointment.","We use this information for one purpose: to respond to you and to provide the services you have asked about. We do not add you to unrelated marketing lists, and we do not pass your details to third parties for their own marketing."]},{h:"3. Information collected automatically",p:["Like most websites, ours records basic technical information when you visit: your IP address, browser type and version, device type, the pages you view, how long you spend on them, and the site or advertisement that referred you.","We use this in aggregate to understand which pages are useful, to find broken or slow pages, and to see whether our advertising is working. It is not used to build a personal profile of you."]},{h:"4. Cookies and third-party services",p:["We use a small number of third-party services, and each may set cookies or receive some data when you use our site.","Calendly powers our booking scheduler and receives the name, email, and phone number you enter when booking a call. Meta Pixel measures whether visitors who arrive from our Facebook and Instagram advertising go on to enquire, and may be used to show you our ads elsewhere.","You can block or delete cookies in your browser settings at any time. Doing so may stop the booking scheduler from working properly, but the rest of the site will function normally."]},{h:"5. Legal basis and consent",p:["Where you submit a form, we process your information because you have asked us to respond to you and because it is necessary to provide the service you requested. Where we use analytics and advertising measurement, we rely on our legitimate interest in understanding and improving how our business reaches customers.","You can withdraw consent or object to our use of your information at any time by contacting us using the details in section 1."]},{h:"6. How long we keep your information",p:["Enquiries that do not become projects are kept for up to 24 months so we can follow up and so we have a record of what was discussed, then deleted. Records relating to clients, including project files, correspondence, and invoices, are kept for the duration of the engagement and for as long afterwards as UAE accounting and tax rules require.","You can ask us to delete your information sooner and we will do so unless we are legally required to keep it."]},{h:"7. How we protect your information",p:["Your data is transmitted over encrypted HTTPS connections and stored in reputable third-party services that provide their own security controls. Access is limited to the people who need it to do the work.","No system is completely secure, and we will not pretend otherwise. If a breach occurs that affects your personal information, we will tell you and any relevant authority as required."]},{h:"8. Sharing your information",p:["We share personal information only with the service providers named in section 4, which process it on our behalf to make the site and our booking process work, and with professional advisers or authorities where we are legally required to do so.","We do not sell, rent, or trade your personal information. Some of these providers are based outside the UAE, which means your information may be processed abroad under the protections those providers offer."]},{h:"9. Your rights",p:["You can ask us what personal information we hold about you, ask for a copy of it, ask us to correct anything inaccurate, ask us to delete it, or object to how we are using it. You can also ask us to stop contacting you at any time.","Write to officialatlanticbear@gmail.com and we will respond within 30 days. There is no charge for making a request."]},{h:"10. Changes and contact",p:["We may update this policy as our services or the tools we use change. The current version is always published here with the date it was last updated, and material changes will be made clear.","If you have a question or a complaint about how we handle your information, contact us first at officialatlanticbear@gmail.com or +971-50-244-6531. You also have the right to raise the matter with the relevant UAE data protection authority."]}])}const Z=[{q:"How long does it take to build my website?",a:"Most websites go from kick-off to live in about five working days. We can move that quickly because we do not start from a blank page and we do not wait on you for content. After a single 30-minute call we handle the structure, the copywriting, the layouts, and the images ourselves, then bring you a finished site to review. Larger builds with many pages, e-commerce, or custom booking systems can take longer, and we will tell you honestly at the first call if yours is one of them rather than promising five days and missing it."},{q:"How much does a website cost?",a:"The Launch Plan is AED 3,500 to build plus AED 300 per month, and the Growth Plan is AED 6,500 to build plus AED 300 per month. The build fee is one-off. The monthly fee covers hosting, your domain, security and software updates, backups, and unlimited small content changes. There are no setup fees, no per-page charges, and no surprise invoices later. If your project genuinely needs something outside those plans we will quote it before any work starts."},{q:"Why pay AED 6,500 when a freelancer quoted me a fraction of that?",a:"Because you are buying different things. A freelance build is cheaper on the invoice and the cost usually shows up later: nobody to call once it is live, hosting and updates left to you, copy you end up writing yourself, and in a lot of cases a site you cannot edit and do not fully own. Our price covers the design, the copywriting, the search groundwork, hosting, backups, ongoing content changes, and a team that answers when you email. We will also be straight with you: if you need a single holding page and you already have a developer you trust, a freelancer is a perfectly sensible choice and we will tell you so on the call."},{q:"Can the website connect to the tools I already use?",a:"Yes, and it is worth telling us what you run on the first call so we build around it. We regularly wire up Stripe for payments, Calendly for bookings, Mailchimp and Klaviyo for email, HubSpot and most common CRMs, Zapier for anything else, plus Google Analytics and the Meta pixel. Analytics and pixel tracking are part of the standard build rather than a paid extra, because a site you cannot measure is a site you cannot improve."},{q:"Can I edit the website myself?",a:"Partly, and it depends on what you want. Your site is custom-coded rather than assembled in a page builder, which is why it loads quickly and looks the way it does, so there is no drag-and-drop editor to log into by default. In practice most clients prefer to email us: content changes are included in the monthly plan and usually done the same day. If editing things yourself genuinely matters to you, say so on the first call and we will build the sections you want to control onto a simple editor you can access. Either way you own the site and the files."},{q:"What happens if I do not like the first version?",a:"You tell us, and we change it. Within about five days of kick-off you get the first version of the real site rather than a flat mockup, so you are reacting to something you can actually click through. From there you get unlimited small tweaks for the first 30 days: text, colours, images, layout, spacing, whatever is bothering you. Almost nobody loves every detail of a first draft, and the review round is a normal part of the process rather than a sign something went wrong. It also helps to send us two or three sites you like before we start, since showing us is far faster than describing it."},{q:"What results should I actually expect?",a:"Here is the honest split. What we can commit to: a fast, professional site that works properly on a phone, is built on the technical groundwork search engines look for, and is wired into your booking, payment, and tracking tools. What depends on time and on you: search rankings build over months, not days, and how much traffic arrives depends on your own marketing as well as the site. The change most clients notice first is not a traffic number, it is that they start sending the link to good prospects again instead of avoiding it."},{q:"Who owns the website, the domain, and the files?",a:"You do, from day one. The domain is registered in your business name, not ours, and the site files are yours. This matters more than most business owners realise: a common practice in the industry is to register the domain under the agency account, which means leaving costs you your web address and your search rankings. If you ever decide to move to another provider or bring the work in-house, we hand over everything within 48 hours and we do not hold anything back."},{q:"Do I have to write the content myself?",a:"No. Writing your own website copy is the single biggest reason projects stall for months, so we remove it from your plate entirely. We research your market, look at what your competitors in the UAE are saying, and write the copy for you. You review it and tell us what to change. If you already have wording, brand guidelines, or professional photography you want used, send it over and we will build around it."},{q:"Will my website work properly on mobile?",a:"Yes, and we treat mobile as the primary design rather than an afterthought. The majority of people who find a local UAE business search on a phone, often while they are out and deciding where to go. Every site we build is laid out for small screens first, tested on real devices, and tuned so it loads fast on mobile data rather than only on office wifi. Slow, awkward mobile sites are one of the fastest ways to lose a customer who was ready to buy."},{q:"Will my business show up on Google?",a:"Every site is built with the technical groundwork search engines look for: clean page structure, proper headings, descriptive page titles and meta descriptions, fast loading times, a sitemap, and mobile-friendly layouts. That is what makes your site eligible to rank well. We also set up your pages around the words your customers actually search for in your category and city. Search results build over weeks and months rather than overnight, and any agency promising you the top spot immediately is not being straight with you."},{q:"What does the monthly fee actually cover?",a:"Hosting, your domain renewal, an SSL certificate, ongoing security and software updates, regular backups, uptime monitoring, and unlimited small content changes such as prices, opening hours, staff, photos, and service descriptions. Email us a change and it is usually done the same day. It is not a support ticket queue and there is no limit on how often you can ask."},{q:"Am I locked into a contract?",a:"No. There is no minimum term and no cancellation fee. The monthly plan runs month to month and you can stop whenever you want. We would rather keep your business by doing good work than by trapping you in paperwork. If you do leave, we hand over your domain, files, and hosting access within 48 hours."},{q:"Do you work with businesses outside Dubai?",a:"Yes. We are based in Dubai and work with businesses across the whole of the UAE, including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Everything is handled remotely by call, email, and WhatsApp, so where you are based makes no difference to how quickly we can build or how well we can support you afterwards."},{q:"What if I want changes after the site goes live?",a:"Small content changes are included in the monthly plan for as long as you are with us, with no cap and no extra charge. That covers text, prices, images, opening hours, adding staff or services, and similar updates. Larger pieces of work, such as adding a whole new section, an online shop, or a booking system, are quoted separately so you always know the cost before we begin."}];function Ce(){return`
  <section class="faq-section">
    <div class="faq-head reveal">
      <div class="section-label">FAQ</div>
      <h2>Questions we get asked a lot</h2>
      <p>If your question is not here, call, email, or message us and we will answer it straight.</p>
    </div>
    <div class="faq-list reveal">${Z.map(e=>`
    <details class="faq-item">
      <summary class="faq-q">
        <span>${e.q}</span>
        <span class="faq-chevron" aria-hidden="true"></span>
      </summary>
      <div class="faq-a"><p>${e.a}</p></div>
    </details>`).join("")}</div>
  </section>`}function Te(){return`
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
  `}function Be(){return`
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
  </section>`}function ee(t){const e=t==="launch",a=e?"AED 3,500":"AED 6,500",s="AED 300",i=e?"AED 1,750":"AED 3,250",o=e?"Launch Plan":"Growth Plan",r=e?"What's Included in the Launch Plan":"What's Included in the Growth Plan",p=e?["Up to 5 pages","Custom design, no templates","WhatsApp button, click-to-call","Mobile responsive"]:["Up to 15 pages","Photos and video","Custom design, no templates","Contact form","Mobile responsive"],l=e?["Written to rank on Google","Page titles and meta descriptions","SEO-ready structure"]:["Written to rank on Google","Targeting your service keywords","Blog SEO structure"],m=["Fully managed","Daily backups"],h=e?"1":"2",w=e?"One revision session per month. Book time with us, tell us what to change, we handle it.":"Two revision sessions per month. Book time with us, tell us what to change, we handle it.";function f(v){return v.map(k=>`<span class="sp-pill">${k}</span>`).join("")}return`
  <div class="sp-wrap">
    <!-- HEADER -->
    <div class="sp-header">
      <div class="sp-logo-row">
        <img src="/atlanticbear-logo.png" alt="Atlantic Bear" width="56" height="56" />
      </div>
      <p class="sp-label">Atlantic Bear, ${o}</p>
      <h1 class="sp-title">${r}</h1>
      <p class="sp-sub">Any questions along the way, just ask.</p>
    </div>

    <!-- FOUR PILLARS -->
    <div class="sp-pillars">

      <div class="sp-pillar">
        <div class="sp-pillar-num">01</div>
        <div class="sp-pillar-content">
          <h2 class="sp-pillar-title">Custom Website</h2>
          <p class="sp-pillar-desc">Built from scratch around your business. No templates, no guesswork. Built to get you more clients.</p>
          <div class="sp-pills">${f(p)}</div>
        </div>
      </div>

      <div class="sp-pillar">
        <div class="sp-pillar-num">02</div>
        <div class="sp-pillar-content">
          <h2 class="sp-pillar-title">Site SEO</h2>
          <p class="sp-pillar-desc">So when someone's searching for what you offer, they can actually find you on Google and through AI search.</p>
          <div class="sp-pills">${f(l)}</div>
        </div>
      </div>

      <div class="sp-pillar">
        <div class="sp-pillar-num">03</div>
        <div class="sp-pillar-content">
          <h2 class="sp-pillar-title">Hosting</h2>
          <p class="sp-pillar-desc">We handle all of it. You never have to touch a thing.</p>
          <div class="sp-pills">${f(m)}</div>
        </div>
      </div>

      <div class="sp-pillar">
        <div class="sp-pillar-num">04</div>
        <div class="sp-pillar-content">
          <h2 class="sp-pillar-title">Ongoing Changes</h2>
          <p class="sp-pillar-desc">${w}</p>
          <div class="sp-pills"><span class="sp-pill sp-pill-accent">${h} session revision${e?"":"s"}/month</span></div>
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
      <div class="sp-inv-total">${a}<span class="sp-inv-mo"> + ${s}/mo</span></div>
      <div class="sp-inv-split">
        <div class="sp-inv-row">
          <span>To get started (50%)</span>
          <strong>${i}</strong>
        </div>
        <div class="sp-inv-row">
          <span>Once the site's live (50%)</span>
          <strong>${i}</strong>
        </div>
        <div class="sp-inv-row sp-inv-row-monthly">
          <span>Ongoing care</span>
          <strong>${s}/month</strong>
        </div>
      </div>
      <p class="sp-inv-note">No contracts. You own everything. Cancel the monthly anytime.</p>
    </div>
  </div>`}function Le(){return ee("launch")}function Ie(){return ee("growth")}const te={home:ye,pricing:ke,contact:Ee,testimonials:xe,booking:Te,booked:Be,"meta-ads":fe,"meta-ads-shazay":be,terms:Ae,privacy:Se,blog:we,launch:Le,growth:Ie},G={home:{title:"Website Design Agency in Dubai, UAE | Atlantic Bear",desc:"Custom website design agency in Dubai, UAE. We build professional, conversion-focused websites for serious UAE business owners. Live in 5 days, fully managed."},pricing:{title:"Website Design Pricing in Dubai & UAE | Atlantic Bear",desc:"Transparent pricing for custom website design in Dubai and the UAE. Fully managed, no contracts, live in 5 days. Plans from AED 3,500 setup + AED 300/mo."},contact:{title:"Contact a Dubai Website Design Agency | Atlantic Bear",desc:"Get in touch with Atlantic Bear, a custom website design agency based in Dubai. Fast response, usually within a few hours. Start your UAE website project today."},testimonials:{title:"Client Reviews & Website Transformations | Atlantic Bear Dubai",desc:"See real client results from Atlantic Bear. Before and after website case studies for businesses in the UAE and UK. Watch client video testimonials."},booking:{title:"Book a Free Call | Website Agency Dubai | Atlantic Bear",desc:"Book a free 30-minute strategy call with Atlantic Bear, a website design agency in Dubai. Watch our overview video and schedule your slot."},booked:{title:"Call Confirmed | Atlantic Bear",desc:"Your call is locked in. Add the event to your calendar and watch the pre-call video before our session."},"meta-ads":{title:"Facebook & Instagram Ads Dubai, UAE | Atlantic Bear",desc:"Run targeted Facebook and Instagram ad campaigns in Dubai and the UAE with Atlantic Bear. Local targeting, ad creatives, and direct WhatsApp leads. AED 2,500/mo."},"meta-ads-shazay":{title:"TikTok Ads Retainer Payment | Atlantic Bear",desc:"Set up your Atlantic Bear TikTok Ads retainer subscription, billed every 15 days."},terms:{title:"Terms & Conditions | Atlantic Bear Website Agency Dubai",desc:"The terms covering Atlantic Bear website design, development, hosting, and maintenance services for businesses in Dubai and the UAE."},privacy:{title:"Privacy Policy | Atlantic Bear Website Agency Dubai",desc:"How Atlantic Bear collects, uses, stores, and protects the personal information you share through our website."},blog:{title:"Blog: Website Design & SEO Tips for UAE Businesses | Atlantic Bear",desc:"Expert articles on website design, SEO, and digital marketing for small businesses in Dubai and the UAE. Written by the Atlantic Bear team."},launch:{title:"The Launch Plan | Atlantic Bear",desc:"Atlantic Bear Launch Plan, internal sales presentation."},growth:{title:"The Growth Plan | Atlantic Bear",desc:"Atlantic Bear Growth Plan, internal sales presentation."}};function We(t){const e=document.getElementById("faq-schema");if(e&&e.remove(),t!=="contact")return;const a=document.createElement("script");a.type="application/ld+json",a.id="faq-schema",a.textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:Z.map(s=>({"@type":"Question",name:s.q,acceptedAnswer:{"@type":"Answer",text:s.a}}))}),document.head.appendChild(a)}const Pe=["meta-ads-shazay"];function De(t){const e=G[t]||G.home;document.title=e.title,We(t);let a=document.querySelector('meta[name="robots"]');Pe.includes(t)?(a||(a=document.createElement("meta"),a.setAttribute("name","robots"),document.head.appendChild(a)),a.setAttribute("content","noindex, nofollow")):a&&a.remove();let s=document.querySelector('meta[name="description"]');s||(s=document.createElement("meta"),s.setAttribute("name","description"),document.head.appendChild(s)),s.setAttribute("content",e.desc);let i=document.querySelector('link[rel="canonical"]');i||(i=document.createElement("link"),i.setAttribute("rel","canonical"),document.head.appendChild(i));const o=`${window.location.origin}${t==="home"?"":"/"+t}`;i.setAttribute("href",o);const r={"og:title":e.title,"og:description":e.desc,"og:url":o,"og:type":"website","og:image":`${window.location.origin}${j.site.ogImage}`};for(const[l,m]of Object.entries(r)){let h=document.querySelector(`meta[property="${l}"]`);h||(h=document.createElement("meta"),h.setAttribute("property",l),document.head.appendChild(h)),h.setAttribute("content",m)}const p={"twitter:card":"summary_large_image","twitter:title":e.title,"twitter:description":e.desc,"twitter:image":`${window.location.origin}${j.site.ogImage}`};for(const[l,m]of Object.entries(p)){let h=document.querySelector(`meta[name="${l}"]`);h||(h=document.createElement("meta"),h.setAttribute("name",l),document.head.appendChild(h)),h.setAttribute("content",m)}}function V(t){const e=t.replace(/^\/|\/$/g,"");return e==="pricing"||e==="work"||e==="contact"||e==="testimonials"||e==="booking"||e==="booking-new"||e==="meta-ads"||e==="meta-ads-shazay"||e==="booked"||e==="terms"||e==="privacy"||e==="blog"||e==="launch"||e==="growth"?e:"home"}function qe(t){z("#main-nav [data-link]").forEach(a=>a.classList.remove("active"));const e=$(`#main-nav [data-link="${t}"].nav-link`);e&&e.classList.add("active")}const Me=[".section-title",".section-sub",".facts-headline",".fact-hero-block",".facts-stat-block",".basic-system-card",".step",".feature-item",".teaser-card",".tier-card",".level-one-card",".pricing-plan-card",".guarantee-card",".pricing-bonus-block",".problem-card",".contact-method",".cc-copy",".cc-visual",".reviews-head",".competitor-banner-text",".meta-ads-teaser-box"].join(",");function Oe(){Array.from(document.querySelectorAll(Me)).forEach(e=>{if(e.classList.contains("reveal")||e.classList.contains("revealed"))return;e.classList.add("reveal");const a=e.parentElement;if(!a)return;const i=Array.from(a.children).filter(o=>o.classList.contains("reveal")).indexOf(e);i>0&&!e.style.transitionDelay&&(e.style.transitionDelay=`${Math.min(i*.07,.35)}s`)})}function Ue(){const t=z(".reveal"),e=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(s.target.classList.add("revealed"),e.unobserve(s.target))})},{threshold:.07,rootMargin:"0px 0px -30px 0px"});t.forEach(a=>e.observe(a))}function $e(t){const e=t.innerHTML,a=(t.textContent||"").trim();if(!a)return;t.textContent="",t.classList.add("is-typing");let s=0;const i=()=>{s+=1,t.textContent=a.slice(0,s),s<a.length?window.setTimeout(i,105):(t.innerHTML=e,t.classList.remove("is-typing"))};window.setTimeout(i,90)}function ze(){const t=z(".fact-hero-num, .facts-stat-num");if(!t.length||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;t.forEach(a=>{a.style.minHeight=`${a.getBoundingClientRect().height}px`});const e=new IntersectionObserver(a=>{a.forEach((s,i)=>{if(!s.isIntersecting)return;const o=s.target;e.unobserve(o),window.setTimeout(()=>$e(o),i*150)})},{threshold:.4});t.forEach(a=>e.observe(a))}function Fe(){const t="P-3J276348CL7673454NKNKCRA",e="#paypal-button-container-"+t,a="https://www.paypal.com/sdk/js?client-id=BAAeLN9PQY_40P1TyOqzvSGlsxkJvgSNc84tV2boPr7iX-TUntDkuIFWfjw3zc3V8zc13VS2nx64j-E710&vault=true&intent=subscription";function s(){const r=window.paypal,p=document.querySelector(e);!r||!p||p.dataset.rendered==="1"||(p.dataset.rendered="1",r.Buttons({style:{shape:"rect",color:"blue",layout:"vertical",label:"subscribe"},createSubscription:function(l,m){return m.subscription.create({plan_id:t})},onApprove:function(){const l=document.getElementById("paypal-shazay-success");l&&(l.style.display="block"),p.style.display="none"}}).render(e))}if(window.paypal){s();return}const i=document.getElementById("paypal-sdk-shazay");if(i){i.addEventListener("load",s,{once:!0});return}const o=document.createElement("script");o.id="paypal-sdk-shazay",o.src=a,o.setAttribute("data-sdk-integration-source","button-factory"),o.onload=s,document.body.appendChild(o)}function ae(t){window.getComputedStyle(t).position==="static"&&(t.style.position="relative");const a=document.createElement("div");a.className="calendly-spinner-wrap",a.style.display="flex",a.style.justifyContent="center",a.style.alignItems="center",a.style.position="absolute",a.style.top="50%",a.style.left="50%",a.style.transform="translate(-50%, -50%)",a.style.pointerEvents="none",a.style.zIndex="1",a.innerHTML=`
    <div style="width: 40px; height: 40px; border: 4px solid rgba(59,105,255,0.1); border-left-color: var(--accent, #3b69ff); border-radius: 50%; animation: calendly-spin 1s linear infinite;"></div>
    <style>
      @keyframes calendly-spin {
        to { transform: rotate(360deg); }
      }
    </style>
  `,t.appendChild(a);const s=new MutationObserver(()=>{const i=t.querySelector("iframe");i&&(i.style.position="relative",i.style.zIndex="2",i.onload=()=>{a.remove()},setTimeout(()=>{a.remove()},2500),s.disconnect())});s.observe(t,{childList:!0})}function Re(){document.querySelectorAll(".custom-testimonial-video-wrap").forEach(e=>{const a=e.querySelector(".testimonial-video-overlay"),s=e.querySelector("video");a&&s&&a.addEventListener("click",i=>{i.stopPropagation(),s.muted=!1,s.currentTime=0,s.controls=!0,a.style.display="none",s.play().catch(o=>{console.error("Play failed:",o)})})})}function Ye(){const t=document.querySelector(".calendly-inline-widget");if(!t)return;const e=()=>{t.innerHTML="",ae(t),window.Calendly.initInlineWidget({url:"https://calendly.com/officialatlanticbear/demo-call?hide_gdpr_banner=1&primary_color=3366ff",parentElement:t})};if(window.Calendly){e();return}const a=document.getElementById("calendly-sdk");if(a)a.addEventListener("load",e,{once:!0});else{const s=document.createElement("script");s.id="calendly-sdk",s.src="https://assets.calendly.com/assets/external/widget.js",s.async=!0,s.addEventListener("load",e,{once:!0}),document.head.appendChild(s)}}function Ne(t=!1){const e=document.getElementById("booking-video"),a=document.getElementById("bv-overlay"),s=document.getElementById("bv-play-btn"),i=document.getElementById("bv-controls"),o=document.getElementById("bv-playpause"),r=document.getElementById("bv-progress-fill"),p=document.getElementById("bv-progress-thumb"),l=document.getElementById("bv-progress-wrap"),m=document.getElementById("bv-time"),h=document.getElementById("bv-mute"),w=document.getElementById("bv-volume"),f=document.getElementById("bv-fullscreen"),v=document.getElementById("custom-video-wrap");if(!e||!a||!s||!i||!o)return;e.volume=.9;let k=null,L=null;const I=()=>{try{const n=window.AudioContext||window.webkitAudioContext;if(!n)return;if(!k){k=new n;const c=k.createMediaElementSource(e);L=k.createGain(),L.gain.value=2,c.connect(L),L.connect(k.destination)}k.state==="suspended"&&k.resume()}catch(n){console.warn("AudioContext boost failed:",n)}},F=e.getAttribute("data-src"),D=()=>{F&&!e.getAttribute("src")&&(e.setAttribute("src",F),e.load())};let y=!0;const se=5,ie=()=>{e.muted=!0,e.currentTime=0,e.play().catch(()=>{})};e.addEventListener("timeupdate",()=>{y&&e.currentTime>=se&&(e.currentTime=0)}),setTimeout(ie,800);const R=n=>{const c=Math.floor(n/60),u=Math.floor(n%60);return`${c}:${u.toString().padStart(2,"0")}`},x=90,E=60,oe=(n,c)=>!t||c<=x?n/c*100:n<=x?n/x*E:E+(n-x)/(c-x)*(100-E),ne=(n,c)=>!t||c<=x?n/100*c:n<=E?n/E*x:x+(n-E)/(100-E)*(c-x),q=()=>{if(!e.duration)return;const n=oe(e.currentTime,e.duration);r&&(r.style.width=n+"%"),p&&(p.style.left=n+"%"),m&&(m.textContent=`${R(e.currentTime)} / ${R(e.duration)}`)},T=n=>{const c=o==null?void 0:o.querySelector(".icon-play"),u=o==null?void 0:o.querySelector(".icon-pause");c&&(c.style.display=n&&!y?"none":"block"),u&&(u.style.display=n&&!y?"block":"none"),a&&(a.style.display=n&&!y?"none":"flex"),v&&(n&&!y?v.classList.add("playing"):v.classList.remove("playing"))};a.addEventListener("click",()=>{if(y){y=!1,e.muted=!1;const n=e.src.split("#")[0];e.src!==n&&(e.src=n,e.load()),e.currentTime=0}D(),I(),T(!0),e.play()}),e.addEventListener("click",()=>{if(y){y=!1,e.muted=!1;const n=e.src.split("#")[0];e.src!==n&&(e.src=n,e.load()),e.currentTime=0,I(),T(!0),e.play();return}D(),I(),e.paused?e.play():e.pause()}),e.addEventListener("play",()=>T(!0)),e.addEventListener("pause",()=>T(!1)),e.addEventListener("ended",()=>T(!1)),e.addEventListener("timeupdate",q),e.addEventListener("loadedmetadata",q);let Y=!1,N=!1;const b={m25:!1,m50:!1,m75:!1,m95:!1,m100:!1},H={};if(e.addEventListener("play",()=>{!N&&!y&&(N=!0,typeof window.fbq=="function"&&!C()&&window.fbq("trackCustom","VSL_Play"))}),e.addEventListener("timeupdate",()=>{const n=e.duration;if(!n)return;const c=e.currentTime,u=c/n*100;if(!Y&&c>.5&&!y&&(Y=!0,g("videoplay")),y)return;u>=25&&!b.m25&&(b.m25=!0,g("videowatch_25pct"),typeof window.fbq=="function"&&!C()&&window.fbq("trackCustom","VSL_25")),u>=50&&!b.m50&&(b.m50=!0,g("videowatch_50pct"),typeof window.fbq=="function"&&!C()&&window.fbq("trackCustom","VSL_50")),u>=75&&!b.m75&&(b.m75=!0,g("videowatch_75pct"),typeof window.fbq=="function"&&!C()&&window.fbq("trackCustom","VSL_75")),u>=95&&!b.m95&&(b.m95=!0,typeof window.fbq=="function"&&!C()&&window.fbq("trackCustom","VSL_95")),u>=98&&!b.m100&&(b.m100=!0,g("videowatch_complete"));const W=[10,30],M=Math.floor(c);W.forEach(S=>{M>=S&&!H[S]&&(H[S]=!0,g(`videowatch_${S}s`))})}),o.addEventListener("click",()=>{D(),I(),e.paused?e.play():e.pause()}),l){const n=u=>{const W=l.getBoundingClientRect(),M=u instanceof MouseEvent?u.clientX:u.touches[0].clientX,S=Math.max(0,Math.min(100,(M-W.left)/W.width*100));e.currentTime=ne(S,e.duration),q()};let c=!1;l.addEventListener("mousedown",u=>{c=!0,n(u)}),window.addEventListener("mousemove",u=>{c&&n(u)}),window.addEventListener("mouseup",()=>{c=!1}),l.addEventListener("touchstart",u=>n(u),{passive:!0}),l.addEventListener("touchmove",u=>n(u),{passive:!0})}if(w&&w.addEventListener("input",()=>{e.volume=parseFloat(w.value),e.muted=e.volume===0}),h&&h.addEventListener("click",()=>{e.muted=!e.muted,w&&(w.value=e.muted?"0":String(e.volume||1))}),f&&v&&f.addEventListener("click",()=>{if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&e.webkitEnterFullscreen){e.webkitEnterFullscreen();return}!!(document.fullscreenElement||document.webkitFullscreenElement)?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():v.requestFullscreen?v.requestFullscreen():v.webkitRequestFullscreen?v.webkitRequestFullscreen():e.webkitEnterFullscreen&&e.webkitEnterFullscreen()}),v){let n;const c=()=>{i.style.opacity="1",clearTimeout(n),n=window.setTimeout(()=>{e.paused||(i.style.opacity="0")},2500)};v.addEventListener("mousemove",c),v.addEventListener("mouseenter",c),v.addEventListener("mouseleave",()=>{e.paused||(i.style.opacity="0")}),e.addEventListener("play",()=>{n=window.setTimeout(()=>{i.style.opacity="0"},2500)}),e.addEventListener("pause",()=>{i.style.opacity="1",clearTimeout(n)})}}function He(){const t=document.getElementById("strat-booking-modal"),e=document.getElementById("strat-modal-close-btn");if(!t||!e)return;t.parentElement!==document.body&&document.body.appendChild(t);const a=()=>{const o=document.getElementById("strat-modal-calendly-container");if(!o)return;const r="https://calendly.com/officialatlanticbear/strategy-call?hide_gdpr_banner=1&primary_color=3b69ff";o.innerHTML="",ae(o);const p=()=>window.Calendly.initInlineWidget({url:r,parentElement:o});if(window.Calendly)p();else{const l=document.getElementById("calendly-sdk");l&&l.addEventListener("load",p,{once:!0})}},s=()=>{t.classList.add("active"),document.body.style.overflow="hidden",a()},i=()=>{t.classList.remove("active"),document.body.style.overflow=""};e.addEventListener("click",i),window.addEventListener("keydown",o=>{o.key==="Escape"&&t.classList.contains("active")&&i()}),window.openStratBookingModal=s}const K=["home","pricing","testimonials","meta-ads","contact","booking","booked"];let O=null;function P(t,e=!0){const a=document.getElementById("booking-modal");a&&a.remove();const s=document.getElementById("strat-booking-modal");s&&s.remove(),document.body.style.overflow="",Q(),X();const i=document.getElementById("main-nav"),o=document.querySelector(".site-footer");t==="booking"?(i&&(i.style.display="none"),o&&(o.style.display="none")):(i&&(i.style.display=""),o&&(o.style.display=""));const r=$("#main-content"),p=O?K.indexOf(O):-1,l=K.indexOf(t),m=p===-1||l>=p,h=m?"-8%":"8%",w=m?"8%":"-8%";O=t;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches;r.style.transition=f?"opacity 0.2s ease":"opacity 0.26s ease, transform 0.26s cubic-bezier(0.5, 0, 0.75, 0)",r.style.opacity="0",f||(r.style.transform=`translateX(${h})`),setTimeout(()=>{if(window.scrollTo({top:0,behavior:"instant"}),r.style.transition="none",f||(r.style.transform=`translateX(${w})`),r.innerHTML=te[t](),qe(t),requestAnimationFrame(()=>{r.style.transition=f?"opacity 0.25s ease":"opacity 0.34s ease, transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)",r.style.opacity="1",r.style.transform="translateX(0)"}),Oe(),Ue(),ze(),t==="meta-ads-shazay"&&Fe(),(t==="booking"||t==="booked")&&(g("pageload",2e3),le(),ce(),Ye(),Ne(t==="booking"),t==="booking"&&(He(),document.querySelectorAll(".strat-modal-trigger, .funnel-cta-wrap .funnel-cta-btn").forEach(v=>{v.addEventListener("click",()=>{typeof window.fbq=="function"&&!C()&&window.fbq("trackCustom","BookButtonClick"),window.openStratBookingModal&&window.openStratBookingModal()})}))),De(t),Re(),typeof window.fbq=="function"&&!sessionStorage.getItem("notrack")&&window.fbq("track","PageView"),e){const v=t==="home"?"/":`/${t}`;window.location.pathname!==v&&history.pushState(null,"",v)}},260)}function je(t){t.addEventListener("click",e=>{const a=e.target.closest("[data-link]");if(!a||e.metaKey||e.ctrlKey||e.shiftKey||e.button!==0)return;e.preventDefault();const s=a.getAttribute("data-link");s&&te[s]&&P(s)})}function _e(){const t=$("#main-nav");if(!t)return;const e=()=>{window.scrollY>20?t.classList.add("scrolled"):t.classList.remove("scrolled")};window.addEventListener("scroll",e,{passive:!0})}document.addEventListener("DOMContentLoaded",()=>{const t=new URLSearchParams(window.location.search);(t.get("notrack")==="1"||t.get("preview")==="true")&&sessionStorage.setItem("notrack","1");const e=t.get("fbclid"),a=(t.get("utm_source")||"").toLowerCase();(!!e||["facebook","instagram","fb","meta"].some(r=>a.includes(r)))&&sessionStorage.setItem("came_from_meta","1");const i=document.getElementById("app");i.innerHTML=`
    ${ue()}
    <main id="main-content" style="opacity:1; min-height:100vh;"></main>
    ${pe()}
    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/971502446531" target="_blank" rel="noopener" class="whatsapp-floating-btn" aria-label="Chat on WhatsApp">
      <span class="whatsapp-tooltip">Chat with us</span>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.967-.94 1.165-.174.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
      </svg>
    </a>
  `,je(i),_e(),window.addEventListener("message",r=>{if(!r.origin||!r.origin.includes("calendly.com"))return;let p=!1;if(r&&r.data){let l=r.data;if(typeof l=="string")try{l=JSON.parse(l)}catch{}typeof l=="object"&&l&&l.event==="calendly.event_scheduled"&&(p=!0)}if(p){const l=document.getElementById("strat-booking-modal"),m=document.getElementById("booking-modal");l&&l.classList.contains("active")?(g("bookedcall_strategy"),typeof window.fbq=="function"&&sessionStorage.getItem("came_from_meta")&&!sessionStorage.getItem("fbq_schedule_fired")&&(window.fbq("track","Schedule"),sessionStorage.setItem("fbq_schedule_fired","1")),l&&l.classList.remove("active")):(g("bookedcall"),m&&m.classList.remove("active")),document.body.style.overflow="",P("booked")}});const o=V(window.location.pathname);P(o,!1),window.addEventListener("popstate",()=>{const r=V(window.location.pathname);P(r,!1)})});
