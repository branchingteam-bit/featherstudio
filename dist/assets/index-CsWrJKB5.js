(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const Z=(t,e=document)=>e.querySelector(t),ie=(t,e=document)=>[...e.querySelectorAll(t)],J="atlanticbear_analytics_8d24";function A(t,e=0){const s=()=>{fetch(`https://abacus.jasoncameron.dev/hit/${J}/${t}`).catch(()=>{});try{const n=Q();fetch(`https://abacus.jasoncameron.dev/hit/${J}/${n}_${t}`).catch(()=>{})}catch{}};e>0?setTimeout(s,e):s()}let X={};function ue(){oe();const t=e=>{X[`t${e}`]=window.setTimeout(()=>{A(`time_${e}s`),typeof window.fbq=="function"&&window.fbq("trackCustom",`Time_${e}s`,{page:"booking"})},e*1e3)};t(5),t(15),t(30),t(60)}function oe(){Object.values(X).forEach(clearTimeout),X={}}let F={moved:!1,calendar:!1,testimonials:!1},U=null;function ve(){le(),F={moved:!1,video:!1,calendar:!1,testimonials:!1},U=()=>{window.scrollY>50&&!F.moved&&(F.moved=!0,A("scroll_moved"),typeof window.fbq=="function"&&window.fbq("trackCustom","Scroll_Moved"));const t=document.getElementById("booking-calendar");if(t&&!F.calendar){const s=t.getBoundingClientRect();s.top+s.height/2<window.innerHeight&&(F.calendar=!0,A("scroll_calendar"),typeof window.fbq=="function"&&window.fbq("trackCustom","Scroll_To_Calendar"))}const e=document.querySelector(".booking-step-card:last-child");e&&!F.testimonials&&e.getBoundingClientRect().top<window.innerHeight-300&&(F.testimonials=!0,A("scroll_testimonials"),typeof window.fbq=="function"&&window.fbq("trackCustom","Scroll_To_Testimonials"))},window.addEventListener("scroll",U,{passive:!0})}function le(){U&&(window.removeEventListener("scroll",U),U=null)}function Q(){const t=new Date,e=new Date(t.toLocaleString("en-US",{timeZone:"Asia/Dubai"})),s=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${s}-${n}-${a}`}async function me(t){const e=new TextEncoder().encode(t),s=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(s)).map(a=>a.toString(16).padStart(2,"0")).join("")}const h={arrow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.69 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.69A2 2 0 0122 16.92z"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2 .27-2.98-.31-3.5c-.56-.52-1.43-.8-2.69.5z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'};function fe(){return`
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
      <a href="/booking" class="btn btn-dark btn-sm" data-link="booking" id="nav-book-cta">Book a Call ${h.arrow}</a>
    </div>
  </nav>`}function ge(){return`
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
  </footer>`}function he(){const t=[{num:"3 Days",desc:"From kick-off to live"},{num:"100%",desc:"Mobile responsive"},{num:"Fully Custom",desc:"No templates, ever"},{num:"3+ Years",desc:"Building in the UAE"},{num:"81%",desc:"Of customers research online first"},{num:"SEO Ready",desc:"Google-optimised from day one"}],e=()=>t.map(n=>`<span class="marquee-badge"><span class="marquee-num">${n.num}</span><span class="marquee-desc">${n.desc}</span></span><span class="marquee-sep">·</span>`).join(""),s=e()+e()+e()+e();return`
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
          Book a Call ${h.arrow}
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
        ${s}
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
            <div class="free-demo-step-icon">${h.phone}</div>
            <div>
              <div class="free-demo-step-title">30-Minute Strategy Call</div>
              <div class="free-demo-step-desc">We map out your business positioning, category keywords, and how we will capture clients already looking for you.</div>
            </div>
          </div>
          <div class="free-demo-step">
            <div class="free-demo-step-icon">${h.zap}</div>
            <div>
              <div class="free-demo-step-title">We Build Your Online Presence — 5 Days</div>
              <div class="free-demo-step-desc">Fill out a short form. We handle everything else — copywriting, layouts, graphics, and search setup.</div>
            </div>
          </div>
          <div class="free-demo-step">
            <div class="free-demo-step-icon">${h.rocket}</div>
            <div>
              <div class="free-demo-step-title">Activate Only If You Love The Outcome</div>
              <div class="free-demo-step-desc">We walk you through your high-converting brand system. Love it? We launch it and you pay. Not happy? You walk away and owe us zero.</div>
            </div>
          </div>
        </div>
        <a href="/booking" class="btn btn-dark btn-large free-demo-cta" data-link="booking" id="home-free-demo-cta">Get Your Free Demo ${h.arrow}</a>
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
          <div class="feature-icon-wrap">${h.globe}</div>
          <h3>Capture clients already looking for you</h3>
          <p>People hear about you through word of mouth, Instagram, Google Maps. They search your name, find nothing — and quietly choose your competitor. We stop that.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${h.star}</div>
          <h3>Look like the biggest player in your category</h3>
          <p>A business running off WhatsApp and Instagram looks small. Your website makes you look like a 50-person company, even if you're 3 people.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${h.shield}</div>
          <h3>Own your online presence — stop renting it</h3>
          <p>Instagram can shadowban you. The algorithm can bury you. Meta can suspend your account overnight. Your website is the one asset you actually control.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${h.phone}</div>
          <h3>Every screen, every device, every time</h3>
          <p>87% of your customers visit on their phone. Your site looks flawless on every screen — mobile, tablet, desktop. No pinching, no broken layouts.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${h.rocket}</div>
          <h3>No contracts, no lock-in</h3>
          <p>If we do good work, you stay. We don't need a contract to make that happen. Cancel anytime, we hand over everything within 48 hours.</p>
        </div>
        <div class="feature-item reveal" style="display:flex; flex-direction:column; justify-content:center; background:var(--surface);">
          <h3 style="font-size:1.1rem; margin-bottom:8px;">Your total effort: under one hour</h3>
          <p style="margin-bottom:16px; font-size:0.82rem; color:var(--text-muted);">One 30-minute discovery call. One short form. One 30-minute demo call. That's it. We handle the design, the copy, the hosting, the domain — everything.</p>
          <a href="/booking" class="btn btn-dark btn-sm" data-link="booking" style="align-self:flex-start;">Book a Call ${h.arrow}</a>
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
            Explore Launch Plan ${h.arrow}
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
            Explore Growth Plan ${h.arrow}
          </a>
        </div>

      </div>

    </div>
  </section>
  `}function be(){return`
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
  `}function ye(){return`
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
          Book a Call ${h.arrow}
        </a>
      </div>
    </div>
  </section>`}function we(){return`
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
            <video controls preload="none" style="width: 100%; display: block; border: none; aspect-ratio: 9/16; object-fit: cover;">
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
          Book a Call ${h.arrow}
        </a>
        <a href="/pricing" class="btn btn-secondary btn-large" data-link="pricing" id="testimonials-plans-cta">
          View Plans
        </a>
      </div>
    </div>
  </section>`}function ke(){return`
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${h.mail}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Email</div>
                  <div class="contact-method-value">officialatlanticbear@gmail.com</div>
                </div>
              </a>
              <a href="https://www.instagram.com/officialatlanticbear/" target="_blank" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${h.instagram}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Instagram</div>
                  <div class="contact-method-value">@officialatlanticbear</div>
                </div>
              </a>
              <div class="contact-method">
                <div class="contact-method-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${h.map}</svg>
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
                Send message ${h.arrow}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`}function Ee(){return`
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
          <span>2/5 FREE DEMOS BUILT THIS WEEK — 3 SPOTS LEFT</span>
        </div>
      </div>
    </div>

    <!-- Hero — dark navy bg, massive headline -->
    <div class="funnel-hero">
      <h1 class="funnel-headline">WHAT DOES YOUR BUSINESS ACTUALLY LOOK LIKE ON GOOGLE?</h1>
      <p class="funnel-subheadline">We'll Build You a Custom Website First, You Only Pay If You Love It</p>
    </div>

    <!-- VSL Video Block — still on dark bg -->
    <div class="funnel-video-section">
      <div class="funnel-vsl-container">
        <div class="custom-video-wrap" id="custom-video-wrap">
          <video
            id="booking-video"
            class="booking-video-el"
            preload="metadata"
            width="1920"
            height="1080"
            playsinline
            data-src="/vsl/How to Get Found Online With a Website Demo.mp4"
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
      <p class="funnel-support-text">A completely custom website, built specifically for your business, by a team that only works with small business owners across the UAE.</p>

      <!-- CTA Button 1 -->
      <div class="funnel-cta-wrap">
        <button class="funnel-cta-btn" id="funnel-cta-1">Book My Free Demo</button>
      </div>

      <!-- Generous Spacer -->
      <div class="funnel-spacer"></div>

      <!-- Testimonials Section -->
      <div class="funnel-testimonials">
        <h2 class="funnel-testimonials-heading">What our clients are saying:</h2>
        <div class="funnel-testimonial-video">
          <video controls preload="metadata">
            <source src="/testimonials/sonder%20training%20group%20testimonial.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <p class="funnel-testimonial-quote">"We approached Alexi at Atlantic Bear, who was absolutely fantastic at putting together our ideas and bringing them across on the website in a way that really engaged our target market."</p>
        <a href="https://sondertraininggroup.com/" target="_blank" rel="noopener" class="funnel-testimonial-link">Take a look at the website we built for them &rarr;</a>
      </div>

      <!-- CTA Button 2 -->
      <div class="funnel-cta-wrap funnel-cta-wrap-bottom">
        <button class="funnel-cta-btn" id="funnel-cta-2">Book My Free Demo</button>
      </div>

      <!-- Bottom Padding -->
      <div class="funnel-bottom-pad"></div>
    </div>
  </div>

  <!-- Booking Flow Modal (3-Step: Name/Phone -> Calendly -> Confirmation) -->
  <div class="booking-modal-overlay" id="booking-modal">
    <div class="booking-modal-container">
      <div class="booking-modal-header">
        <div class="booking-modal-steps">
          <span class="step-badge" id="modal-step-badge">Step <span id="modal-step-num">1</span> of 2</span>
          <h3 class="booking-modal-title" id="modal-step-title">Tell us about yourself</h3>
        </div>
        <button class="booking-modal-close" id="booking-modal-close-btn" aria-label="Close modal">&times;</button>
      </div>
      
      <div class="booking-modal-progress">
        <div class="booking-modal-progress-bar" id="modal-progress-bar" style="width: 50%;"></div>
      </div>
      
      <div class="booking-modal-body">
        <!-- Step 1: Contact Form (Name + Phone) -->
        <div class="booking-modal-step active" id="modal-step-1">
          <form id="modal-step1-form" class="funnel-modal-form" onsubmit="return false;">
            <div class="funnel-form-group">
              <label for="modal-input-name" class="funnel-form-label">Full Name</label>
              <input type="text" id="modal-input-name" class="funnel-form-input" placeholder="e.g. John Smith" required />
            </div>
            <div class="funnel-form-group">
              <label for="modal-input-phone" class="funnel-form-label">Phone Number</label>
              <input type="tel" id="modal-input-phone" class="funnel-form-input" placeholder="e.g. +971 50 123 4567" required />
            </div>
            <div id="modal-step1-error" class="funnel-form-error" style="display:none;">Please enter your name and phone number to continue.</div>
            <button type="submit" id="modal-step1-next-btn" class="funnel-cta-btn funnel-modal-btn">Next &rarr;</button>
          </form>
        </div>
        
        <!-- Step 2: Calendly Embed (Prefilled) -->
        <div class="booking-modal-step" id="modal-step-2" style="display: none;">
          <div class="modal-calendly-widget-wrap">
            <div id="modal-calendly-container" style="min-width:320px;height:550px;width:100%;"></div>
          </div>
        </div>

        <!-- Step 3: Confirmation Screen -->
        <div class="booking-modal-step" id="modal-step-3" style="display: none;">
          <div class="funnel-confirm-container">
            <div class="funnel-confirm-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent, #3b69ff)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="48" height="48">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 class="funnel-confirm-title">Confirm your call</h3>
            <p class="funnel-confirm-text">You'll have a meeting invitation waiting in your inbox.</p>
            <p class="funnel-confirm-subtext">Open the email invitation and click <strong>Yes</strong>, <strong>Accept</strong>, or <strong>Add to calendar</strong> to add the call to your calendar.</p>
            
            <div class="funnel-confirm-img-wrap">
              <img src="/exemple on how to accept meeting to calender.png" alt="Example of accepting meeting invitation in calendar" class="funnel-confirm-img" />
            </div>

            <div class="funnel-confirm-footer">
              <a href="/pricing" data-link="pricing" class="funnel-confirm-pricing-link" id="modal-confirm-pricing-link">Want to check out our packages? Click here &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `}function xe(){return`
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
              preload="none"
              width="1920"
              height="1080"
              playsinline
              data-src="/videos for funnel call/video for funnel v4/Atlantic Bear Free Website Demo Pricing Plans.mp4"
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
            <div class="calendly-inline-widget" data-url="https://calendly.com/officialatlanticbear/demo-call-clone?hide_gdpr_banner=1&primary_color=3366ff" style="min-width:320px;height:900px;width:100%;"></div>
            <!-- Calendly inline widget end -->
          </div>

          <div class="fallback-calendly-link-wrap">
            <a href="https://calendly.com/officialatlanticbear/demo-call-clone?hide_gdpr_banner=1&primary_color=3366ff" target="_blank" rel="noopener" class="fallback-calendly-link">
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
              <video controls preload="none" style="width: 100%; display: block; border: none; aspect-ratio: 9/16; object-fit: cover;">
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
  `}function Ae(){return sessionStorage.getItem("admin_authenticated")==="true"?`
  <div class="container">
    <div class="admin-dashboard-wrap">
      <div class="admin-dashboard-header">
        <div>
          <h1>Analytics Dashboard</h1>
          <p class="hero-sub" style="font-size:0.95rem; margin-top:4px; max-width:100%;">
            Real-time video retention and conversion stats.
          </p>
        </div>
        <div class="admin-controls">
          <div class="admin-toggle-group">
            <button class="admin-toggle-btn" id="btn-toggle-lifetime">Lifetime</button>
            <button class="admin-toggle-btn active" id="btn-toggle-daily">Daily</button>
          </div>
          <input type="date" id="admin-date-select" class="admin-date-picker" value="${Q()}" />
        </div>
      </div>

      <div id="admin-loading" style="text-align: center; padding: 40px; font-size: 1.1rem; font-weight: 600; color: var(--text-muted);">
        Loading analytics from Abacus API...
      </div>

      <div id="admin-dashboard-content" style="display: none;">
        <!-- Metrics Row -->
        <div class="admin-stats-grid">
          <div class="admin-stat-card">
            <div class="admin-stat-label">Page Loads</div>
            <div class="admin-stat-value" id="stat-pageload">0</div>
            <div class="admin-stat-meta">Total visits</div>
          </div>
          <div class="admin-stat-card">
            <div class="admin-stat-label">Video Plays</div>
            <div class="admin-stat-value" id="stat-videoplay">0</div>
            <div class="admin-stat-meta" id="rate-play">0% Play Rate</div>
          </div>
          <div class="admin-stat-card">
            <div class="admin-stat-label">Video Completions</div>
            <div class="admin-stat-value" id="stat-videowatch_complete">0</div>
            <div class="admin-stat-meta" id="rate-complete">0% Comp. Rate</div>
          </div>
          <div class="admin-stat-card">
            <div class="admin-stat-label">Booked Calls</div>
            <div class="admin-stat-value" id="stat-bookedcall">0</div>
            <div class="admin-stat-meta" id="rate-booking">0% Booking Rate</div>
          </div>
        </div>

        <!-- Funnel Card -->
        <div class="admin-funnel-card">
          <h2>Retention & Booking Funnel</h2>
          <div class="funnel-container">
            <!-- Step 1: Page Loads -->
            <div class="funnel-step">
              <span class="funnel-step-label">Page Loads</span>
              <div class="funnel-bar-wrap">
                <div class="funnel-bar-fill grey-fill" style="width: 100%;">
                  <span class="funnel-bar-pct">100%</span>
                </div>
              </div>
              <span class="funnel-step-val" id="funnel-val-pageload">0</span>
            </div>

            <!-- Step 2: Video Play -->
            <div class="funnel-step">
              <span class="funnel-step-label">Video Plays</span>
              <div class="funnel-bar-wrap">
                <div class="funnel-bar-fill" id="funnel-bar-videoplay" style="width: 0%;">
                  <span class="funnel-bar-pct" id="funnel-pct-videoplay">0%</span>
                </div>
              </div>
              <span class="funnel-step-val" id="funnel-val-videoplay">0</span>
            </div>

            <!-- Step 3: 10 Seconds -->
            <div class="funnel-step">
              <span class="funnel-step-label">Watch 10s (Hook)</span>
              <div class="funnel-bar-wrap">
                <div class="funnel-bar-fill" id="funnel-bar-videowatch_10s" style="width: 0%;">
                  <span class="funnel-bar-pct" id="funnel-pct-videowatch_10s">0%</span>
                </div>
              </div>
              <span class="funnel-step-val" id="funnel-val-videowatch_10s">0</span>
            </div>

            <!-- Step 4: 30 Seconds -->
            <div class="funnel-step">
              <span class="funnel-step-label">Watch 30s (Intro)</span>
              <div class="funnel-bar-wrap">
                <div class="funnel-bar-fill" id="funnel-bar-videowatch_30s" style="width: 0%;">
                  <span class="funnel-bar-pct" id="funnel-pct-videowatch_30s">0%</span>
                </div>
              </div>
              <span class="funnel-step-val" id="funnel-val-videowatch_30s">0</span>
            </div>

            <!-- Step 5: 25% -->
            <div class="funnel-step">
              <span class="funnel-step-label">Watch 25%</span>
              <div class="funnel-bar-wrap">
                <div class="funnel-bar-fill" id="funnel-bar-videowatch_25pct" style="width: 0%;">
                  <span class="funnel-bar-pct" id="funnel-pct-videowatch_25pct">0%</span>
                </div>
              </div>
              <span class="funnel-step-val" id="funnel-val-videowatch_25pct">0</span>
            </div>

            <!-- Step 6: 50% -->
            <div class="funnel-step">
              <span class="funnel-step-label">Watch 50%</span>
              <div class="funnel-bar-wrap">
                <div class="funnel-bar-fill" id="funnel-bar-videowatch_50pct" style="width: 0%;">
                  <span class="funnel-bar-pct" id="funnel-pct-videowatch_50pct">0%</span>
                </div>
              </div>
              <span class="funnel-step-val" id="funnel-val-videowatch_50pct">0</span>
            </div>

            <!-- Step 7: 75% -->
            <div class="funnel-step">
              <span class="funnel-step-label">Watch 75%</span>
              <div class="funnel-bar-wrap">
                <div class="funnel-bar-fill" id="funnel-bar-videowatch_75pct" style="width: 0%;">
                  <span class="funnel-bar-pct" id="funnel-pct-videowatch_75pct">0%</span>
                </div>
              </div>
              <span class="funnel-step-val" id="funnel-val-videowatch_75pct">0</span>
            </div>

            <!-- Step 8: Complete -->
            <div class="funnel-step">
              <span class="funnel-step-label">Complete Video</span>
              <div class="funnel-bar-wrap">
                <div class="funnel-bar-fill" id="funnel-bar-videowatch_complete" style="width: 0%;">
                  <span class="funnel-bar-pct" id="funnel-pct-videowatch_complete">0%</span>
                </div>
              </div>
              <span class="funnel-step-val" id="funnel-val-videowatch_complete">0</span>
            </div>

            <!-- Step 9: Booked Call -->
            <div class="funnel-step">
              <span class="funnel-step-label" style="color:#27ae60;">Booked Calls</span>
              <div class="funnel-bar-wrap" style="border-color:rgba(39,174,96,0.3);">
                <div class="funnel-bar-fill complete-fill" id="funnel-bar-bookedcall" style="width: 0%;">
                  <span class="funnel-bar-pct" id="funnel-pct-bookedcall">0%</span>
                </div>
              </div>
              <span class="funnel-step-val" id="funnel-val-bookedcall" style="color:#27ae60;">0</span>
            </div>
          </div>
        </div>

        <!-- New Stats Row: Engagement & Scroll Depth -->
        <div class="admin-stats-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); margin-top: 30px; align-items: start;">
          <!-- Card 1: Attention Span -->
          <div class="admin-funnel-card">
            <h2>Attention Span (Dwell Time)</h2>
            <p style="font-size:0.78rem; color:var(--text-muted); margin:-8px 0 16px 0;">% of total visits that stayed for each duration.</p>
            <div class="funnel-container">
              <div class="funnel-step">
                <span class="funnel-step-label">Stayed &gt;5s</span>
                <div class="funnel-bar-wrap">
                  <div class="funnel-bar-fill" id="funnel-bar-time_5s" style="width: 0%; background: #f39c12;">
                    <span class="funnel-bar-pct" id="funnel-pct-time_5s">0%</span>
                  </div>
                </div>
                <span class="funnel-step-val" id="funnel-val-time_5s">0</span>
              </div>
              <div class="funnel-step">
                <span class="funnel-step-label">Stayed &gt;15s</span>
                <div class="funnel-bar-wrap">
                  <div class="funnel-bar-fill" id="funnel-bar-time_15s" style="width: 0%; background: #f1c40f;">
                    <span class="funnel-bar-pct" id="funnel-pct-time_15s">0%</span>
                  </div>
                </div>
                <span class="funnel-step-val" id="funnel-val-time_15s">0</span>
              </div>
              <div class="funnel-step">
                <span class="funnel-step-label">Stayed &gt;30s</span>
                <div class="funnel-bar-wrap">
                  <div class="funnel-bar-fill" id="funnel-bar-time_30s" style="background: #3498db; width: 0%;">
                    <span class="funnel-bar-pct" id="funnel-pct-time_30s">0%</span>
                  </div>
                </div>
                <span class="funnel-step-val" id="funnel-val-time_30s">0</span>
              </div>
              <div class="funnel-step">
                <span class="funnel-step-label" style="color: #27ae60;">Stayed &gt;60s</span>
                <div class="funnel-bar-wrap" style="border-color: rgba(39,174,96,0.3);">
                  <div class="funnel-bar-fill" id="funnel-bar-time_60s" style="background: linear-gradient(90deg, #27ae60 0%, #2ecc71 100%); width: 0%;">
                    <span class="funnel-bar-pct" id="funnel-pct-time_60s">0%</span>
                  </div>
                </div>
                <span class="funnel-step-val" id="funnel-val-time_60s" style="color: #27ae60;">0</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Scroll Depth -->
          <div class="admin-funnel-card">
            <h2>Scroll Depth</h2>
            <p style="font-size:0.78rem; color:var(--text-muted); margin:-8px 0 16px 0;">% of total visits that reached each section.</p>
            <div class="funnel-container">
              <div class="funnel-step">
                <span class="funnel-step-label">Moved at all</span>
                <div class="funnel-bar-wrap">
                  <div class="funnel-bar-fill" id="funnel-bar-scroll_moved" style="width: 0%; background: #95a5a6;">
                    <span class="funnel-bar-pct" id="funnel-pct-scroll_moved">0%</span>
                  </div>
                </div>
                <span class="funnel-step-val" id="funnel-val-scroll_moved">0</span>
              </div>

              <div class="funnel-step">
                <span class="funnel-step-label">Reached Calendar</span>
                <div class="funnel-bar-wrap">
                  <div class="funnel-bar-fill" id="funnel-bar-scroll_calendar" style="width: 0%; background: #3498db;">
                    <span class="funnel-bar-pct" id="funnel-pct-scroll_calendar">0%</span>
                  </div>
                </div>
                <span class="funnel-step-val" id="funnel-val-scroll_calendar">0</span>
              </div>
              <div class="funnel-step">
                <span class="funnel-step-label" style="color: #27ae60;">Reached Testimonials</span>
                <div class="funnel-bar-wrap" style="border-color: rgba(39,174,96,0.3);">
                  <div class="funnel-bar-fill" id="funnel-bar-scroll_testimonials" style="width: 0%; background: linear-gradient(90deg, #27ae60 0%, #2ecc71 100%);">
                    <span class="funnel-bar-pct" id="funnel-pct-scroll_testimonials">0%</span>
                  </div>
                </div>
                <span class="funnel-step-val" id="funnel-val-scroll_testimonials" style="color: #27ae60;">0</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>`:`
    <div class="container">
      <div class="admin-login-wrap">
        <div class="admin-login-card">
          <h2>Atlantic Bear Admin</h2>
          <p>Enter password to access analytics dashboard</p>
          <div id="login-error" class="admin-error-msg" style="display: none;"></div>
          <form id="admin-login-form">
            <div class="admin-input-group">
              <label for="admin-password">Password</label>
              <input type="password" id="admin-password" class="admin-login-input" required placeholder="••••••••" />
            </div>
            <button type="submit" class="btn btn-dark btn-block btn-large">Login</button>
          </form>
        </div>
      </div>
    </div>`}const re={home:he,pricing:be,work:ye,contact:ke,testimonials:we,booking:Ee,"booking-new":xe,admin:Ae},se={home:{title:"Atlantic Bear | Custom Website Design Agency in the UAE",desc:"Atlantic Bear is a leading website agency in the UAE. We build custom, premium websites for businesses. Get a free demo of your website before you pay anything."},pricing:{title:"More Clients Starts Here | Atlantic Bear Pricing",desc:"Transparent pricing for fully-managed brand positioning and high-conversion client acquisition platforms in the UAE. See your online presence live in 5 days, see it finished before you pay anything."},work:{title:"Our Work | Atlantic Bear Portfolio",desc:"Explore custom websites designed and developed for UAE businesses. Professional layouts, mobile optimization, and fast load times."},contact:{title:"Contact Atlantic Bear | Start Your UAE Website Project",desc:"Get in touch with Atlantic Bear. Let's discuss your business website needs. Fast response and custom layouts in Dubai & UAE."},testimonials:{title:"Client Testimonials & Transformations | Atlantic Bear",desc:"See real website transformations by Atlantic Bear. Before and after case studies showing how we help businesses across the UAE look professional online."},booking:{title:"Book a Call | Atlantic Bear Discovery Session",desc:"Watch our video, schedule your free 30-minute discovery call, and view our client success stories. Start your UAE website project today."},"booking-new":{title:"Book a Call (New Flow) | Atlantic Bear Discovery Session",desc:"Watch our video, tell us about yourself, and schedule your free 30-minute discovery call. Start your UAE website project today."},admin:{title:"Admin Dashboard | Atlantic Bear",desc:"Analytics and video performance dashboard for Atlantic Bear."}};function Be(t){const e=se[t]||se.home;document.title=e.title;let s=document.querySelector('meta[name="description"]');s||(s=document.createElement("meta"),s.setAttribute("name","description"),document.head.appendChild(s)),s.setAttribute("content",e.desc);let n=document.querySelector('link[rel="canonical"]');n||(n=document.createElement("link"),n.setAttribute("rel","canonical"),document.head.appendChild(n));const a=`${window.location.origin}${t==="home"?"":"/"+t}`;n.setAttribute("href",a);const o={"og:title":e.title,"og:description":e.desc,"og:url":a,"og:type":"website","og:image":`${window.location.origin}/logo.png`};for(const[l,m]of Object.entries(o)){let u=document.querySelector(`meta[property="${l}"]`);u||(u=document.createElement("meta"),u.setAttribute("property",l),document.head.appendChild(u)),u.setAttribute("content",m)}const c={"twitter:card":"summary_large_image","twitter:title":e.title,"twitter:description":e.desc,"twitter:image":`${window.location.origin}/logo.png`};for(const[l,m]of Object.entries(c)){let u=document.querySelector(`meta[name="${l}"]`);u||(u=document.createElement("meta"),u.setAttribute("name",l),document.head.appendChild(u)),u.setAttribute("content",m)}}function ne(t){const e=t.replace(/^\/|\/$/g,"");return e==="pricing"||e==="work"||e==="contact"||e==="testimonials"||e==="booking"||e==="booking-new"||e==="admin"?e:"home"}function Se(t){ie("#main-nav [data-link]").forEach(s=>s.classList.remove("active"));const e=Z(`#main-nav [data-link="${t}"].nav-link`);e&&e.classList.add("active")}function Ce(){const t=ie(".reveal"),e=new IntersectionObserver(s=>{s.forEach(n=>{n.isIntersecting&&(n.target.classList.add("revealed"),e.unobserve(n.target))})},{threshold:.07,rootMargin:"0px 0px -30px 0px"});t.forEach(s=>e.observe(s))}function _e(){const t=document.getElementById("contact-form");if(!t)return;const e=document.createElement("script");e.src="https://unpkg.com/@formspree/ajax@1",e.defer=!0,document.head.appendChild(e),e.onload=()=>{window.formspree&&window.formspree("initForm",{formElement:"#contact-form",formId:"mykanvrr"})},t.addEventListener("submit",async s=>{s.preventDefault();const n=document.getElementById("form-submit-btn"),a=document.querySelector("[data-fs-success]"),o=document.querySelector('[data-fs-error]:not([data-fs-error="name"]):not([data-fs-error="email"]):not([data-fs-error="message"])');n&&(n.disabled=!0,n.textContent="Sending...");try{const c=new FormData(t);if((await fetch("https://formspree.io/f/mykanvrr",{method:"POST",body:c,headers:{Accept:"application/json"}})).ok)t.style.display="none",a&&(a.style.display="block",a.style.textAlign="center",a.style.padding="18px",a.style.background="rgba(62,207,142,.07)",a.style.borderRadius="10px",a.style.border="1px solid rgba(62,207,142,.20)");else throw new Error("Server error")}catch{o&&(o.textContent="Something went wrong. Please try again or email officialatlanticbear@gmail.com.",o.style.color="var(--red)",o.style.fontSize="0.85rem",o.style.marginTop="8px"),n&&(n.disabled=!1,n.textContent="Try again")}})}function Ie(){const t=document.querySelector(".calendly-inline-widget");if(!t)return;const e=()=>{window.Calendly&&(t.innerHTML="",window.Calendly.initInlineWidget({url:"https://calendly.com/officialatlanticbear/demo-call-clone?hide_gdpr_banner=1&primary_color=3366ff",parentElement:t}))},s=()=>{if(window.Calendly){e();return}let a=document.getElementById("calendly-sdk");a||(a=document.createElement("script"),a.id="calendly-sdk",a.src="https://assets.calendly.com/assets/external/widget.js",a.async=!0,document.head.appendChild(a)),a.onload=()=>{e()}};if(window.Calendly){e();return}const n=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&(s(),n.disconnect())})},{rootMargin:"200px"});n.observe(t)}function Te(t=!1){const e=document.getElementById("booking-video"),s=document.getElementById("bv-overlay"),n=document.getElementById("bv-play-btn"),a=document.getElementById("bv-controls"),o=document.getElementById("bv-playpause"),c=document.getElementById("bv-progress-fill"),l=document.getElementById("bv-progress-thumb"),m=document.getElementById("bv-progress-wrap"),u=document.getElementById("bv-time"),C=document.getElementById("bv-mute"),v=document.getElementById("bv-volume"),g=document.getElementById("bv-fullscreen"),f=document.getElementById("custom-video-wrap");if(!e||!s||!n||!a||!o)return;const P=e.getAttribute("data-src"),E=()=>{P&&!e.getAttribute("src")&&(e.setAttribute("src",P),e.load())};setTimeout(()=>{E()},1500);const B=i=>{const d=Math.floor(i/60),p=Math.floor(i%60);return`${d}:${p.toString().padStart(2,"0")}`},x=90,S=60,R=(i,d)=>!t||d<=x?i/d*100:i<=x?i/x*S:S+(i-x)/(d-x)*(100-S),D=(i,d)=>!t||d<=x?i/100*d:i<=S?i/S*x:x+(i-S)/(100-S)*(d-x),M=()=>{if(!e.duration)return;const i=R(e.currentTime,e.duration);c&&(c.style.width=i+"%"),l&&(l.style.left=i+"%"),u&&(u.textContent=`${B(e.currentTime)} / ${B(e.duration)}`)},T=i=>{const d=o==null?void 0:o.querySelector(".icon-play"),p=o==null?void 0:o.querySelector(".icon-pause");d&&(d.style.display=i?"none":"block"),p&&(p.style.display=i?"block":"none"),s&&(s.style.display=i?"none":"flex"),f&&(i?f.classList.add("playing"):f.classList.remove("playing"))};s.addEventListener("click",()=>{E(),e.play()}),e.addEventListener("click",()=>{E(),e.paused?e.play():e.pause()}),e.addEventListener("play",()=>T(!0)),e.addEventListener("pause",()=>T(!1)),e.addEventListener("ended",()=>T(!1)),e.addEventListener("timeupdate",M),e.addEventListener("loadedmetadata",M);let $=!1;const b={m25:!1,m50:!1,m75:!1,m100:!1},r={};if(e.addEventListener("timeupdate",()=>{const i=e.duration;if(!i)return;const d=e.currentTime,p=d/i*100;!$&&d>.5&&($=!0,A("videoplay"),typeof window.fbq=="function"&&window.fbq("trackCustom","VideoPlay",{video_name:"funnel_explainer"})),p>=25&&!b.m25&&(b.m25=!0,A("videowatch_25pct"),typeof window.fbq=="function"&&window.fbq("trackCustom","VideoWatch_25pct",{video_name:"funnel_explainer"})),p>=50&&!b.m50&&(b.m50=!0,A("videowatch_50pct"),typeof window.fbq=="function"&&window.fbq("trackCustom","VideoWatch_50pct",{video_name:"funnel_explainer"})),p>=75&&!b.m75&&(b.m75=!0,A("videowatch_75pct"),typeof window.fbq=="function"&&window.fbq("trackCustom","VideoWatch_75pct",{video_name:"funnel_explainer"})),p>=98&&!b.m100&&(b.m100=!0,A("videowatch_complete"),typeof window.fbq=="function"&&window.fbq("trackCustom","VideoWatch_Complete",{video_name:"funnel_explainer"}));const _=[10,30],y=Math.floor(d);_.forEach(w=>{y>=w&&!r[w]&&(r[w]=!0,A(`videowatch_${w}s`),typeof window.fbq=="function"&&window.fbq("trackCustom",`VideoWatch_${w}s`,{video_name:"funnel_explainer"}))})}),o.addEventListener("click",()=>{E(),e.paused?e.play():e.pause()}),m){const i=p=>{const _=m.getBoundingClientRect(),y=p instanceof MouseEvent?p.clientX:p.touches[0].clientX,w=Math.max(0,Math.min(100,(y-_.left)/_.width*100));e.currentTime=D(w,e.duration),M()};let d=!1;m.addEventListener("mousedown",p=>{d=!0,i(p)}),window.addEventListener("mousemove",p=>{d&&i(p)}),window.addEventListener("mouseup",()=>{d=!1}),m.addEventListener("touchstart",p=>i(p),{passive:!0}),m.addEventListener("touchmove",p=>i(p),{passive:!0})}if(v&&v.addEventListener("input",()=>{e.volume=parseFloat(v.value),e.muted=e.volume===0}),C&&C.addEventListener("click",()=>{e.muted=!e.muted,v&&(v.value=e.muted?"0":String(e.volume||1))}),g&&f&&g.addEventListener("click",()=>{if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&e.webkitEnterFullscreen){e.webkitEnterFullscreen();return}!!(document.fullscreenElement||document.webkitFullscreenElement)?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():f.requestFullscreen?f.requestFullscreen():f.webkitRequestFullscreen?f.webkitRequestFullscreen():e.webkitEnterFullscreen&&e.webkitEnterFullscreen()}),f){let i;const d=()=>{a.style.opacity="1",clearTimeout(i),i=window.setTimeout(()=>{e.paused||(a.style.opacity="0")},2500)};f.addEventListener("mousemove",d),f.addEventListener("mouseenter",d),f.addEventListener("mouseleave",()=>{e.paused||(a.style.opacity="0")}),e.addEventListener("play",()=>{i=window.setTimeout(()=>{a.style.opacity="0"},2500)}),e.addEventListener("pause",()=>{a.style.opacity="1",clearTimeout(i)})}}function Le(){const t=document.getElementById("booking-modal"),e=document.getElementById("book-demo-btn-v2"),s=document.getElementById("booking-modal-close-btn"),n=document.getElementById("modal-step-1"),a=document.getElementById("modal-step-2"),o=document.getElementById("modal-step-3"),c=document.getElementById("modal-step-num"),l=document.getElementById("modal-step-title"),m=document.getElementById("modal-step-badge"),u=document.getElementById("modal-progress-bar"),C=document.getElementById("modal-step1-form"),v=document.getElementById("modal-input-name"),g=document.getElementById("modal-input-phone"),f=document.getElementById("modal-step1-error"),P=document.getElementById("modal-confirm-pricing-link");if(!t||!s)return;t.parentElement!==document.body&&document.body.appendChild(t);let E="",B="",x="";const S=()=>{if(!E||!B)return;const r=`${E}|${B}`;if(x===r)return;x=r;const i=document.getElementById("modal-calendly-container");if(i){i.innerHTML="";const _={url:`https://calendly.com/officialatlanticbear/demo-call-clone?hide_gdpr_banner=1&primary_color=3366ff&name=${encodeURIComponent(E)}&a1=${encodeURIComponent(B)}`,parentElement:i,prefill:{name:E,customAnswers:{a1:B}}};if(window.Calendly)window.Calendly.initInlineWidget(_);else{let y=document.getElementById("calendly-sdk");y||(y=document.createElement("script"),y.id="calendly-sdk",y.src="https://assets.calendly.com/assets/external/widget.js",y.async=!0,document.head.appendChild(y)),y.onload=()=>{window.Calendly&&window.Calendly.initInlineWidget(_)}}}},R=()=>{const r=(v==null?void 0:v.value.trim())||"",i=(g==null?void 0:g.value.trim())||"";r.length>=3&&i.length>=5&&(E=r,B=i,S())};v==null||v.addEventListener("input",R),g==null||g.addEventListener("input",R);const D=r=>{localStorage.setItem("feather_booking_step",String(r)),r===1?(n&&(n.style.display="block"),a&&(a.style.display="none"),o&&(o.style.display="none"),c&&(c.textContent="1"),l&&(l.textContent="Tell us about yourself"),m&&(m.style.display="inline"),u&&(u.style.width="50%")):r===2?(n&&(n.style.display="none"),a&&(a.style.display="block"),o&&(o.style.display="none"),c&&(c.textContent="2"),l&&(l.textContent="Schedule your demo call"),m&&(m.style.display="inline"),u&&(u.style.width="100%"),E=(v==null?void 0:v.value.trim())||"",B=(g==null?void 0:g.value.trim())||"",S()):r===3&&(n&&(n.style.display="none"),a&&(a.style.display="none"),o&&(o.style.display="block"),l&&(l.textContent="Call Confirmed!"),m&&(m.style.display="none"),u&&(u.style.width="100%"))},M=()=>{t.classList.add("active"),document.body.style.overflow="hidden",f&&(f.style.display="none"),v&&localStorage.getItem("feather_booking_name")&&(v.value=localStorage.getItem("feather_booking_name")||""),g&&localStorage.getItem("feather_booking_phone")&&(g.value=localStorage.getItem("feather_booking_phone")||"");const r=parseInt(localStorage.getItem("feather_booking_step")||"1");D(r)},T=()=>{t.classList.remove("active"),document.body.style.overflow=""},$=r=>{r&&r.preventDefault();const i=(v==null?void 0:v.value.trim())||"",d=(g==null?void 0:g.value.trim())||"";if(!i||!d){f&&(f.style.display="block");return}f&&(f.style.display="none"),E=i,B=d,localStorage.setItem("feather_booking_name",i),localStorage.setItem("feather_booking_phone",d),localStorage.getItem("feather_booking_sheet_submitted")!=="true"&&fetch("https://script.google.com/macros/s/AKfycbyE6OQMsiNActyf_24Emjw3AepiNzWZwGc3VZWi2RCWxM1Jg04yWZSIKfxJ8ff5Cu2-/exec",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,phone:d,source:"booking_funnel"})}).then(()=>{localStorage.setItem("feather_booking_sheet_submitted","true")}).catch(p=>console.error("Google Sheet submission failed:",p)),D(2)};C&&C.addEventListener("submit",$),e&&e.addEventListener("click",M),s.addEventListener("click",T),t.addEventListener("click",r=>{r.target===t&&T()});const b=r=>{r.key==="Escape"&&t.classList.contains("active")&&T()};window.addEventListener("keydown",b),P&&P.addEventListener("click",r=>{r.preventDefault(),T(),V("pricing",!0)}),window.hasCalendlyListener||(window.hasCalendlyListener=!0,window.addEventListener("message",r=>{let i=!1;if(r&&r.data&&(typeof r.data=="string"&&r.data.includes("calendly.event_scheduled")||typeof r.data=="object"&&(r.data.event==="calendly.event_scheduled"||r.data.event&&r.data.event.indexOf("event_scheduled")!==-1))&&(i=!0),i){A("bookedcall");const d=document.getElementById("booking-modal");d&&d.classList.contains("active")&&D(3)}})),window.openBookingModal=M}const Me=async t=>{try{const e=await fetch(`https://abacus.jasoncameron.dev/get/${J}/${t}?t=${Date.now()}`);return e.ok&&(await e.json()).value||0}catch{return 0}},Pe=async(t,e)=>{const s=document.getElementById("admin-loading"),n=document.getElementById("admin-dashboard-content");s&&(s.textContent="Loading analytics from Abacus API...",s.style.display="block"),n&&(n.style.display="none");const a=t?`${e}_`:"",o=["pageload","videoplay","videowatch_10s","videowatch_30s","videowatch_25pct","videowatch_50pct","videowatch_75pct","videowatch_complete","bookedcall","time_5s","time_15s","time_30s","time_60s","scroll_moved","scroll_calendar","scroll_testimonials"];try{const c=await Promise.all(o.map(L=>Me(`${a}${L}`))),l=o.reduce((L,q,W)=>(L[q]=c[W],L),{}),m=l.pageload||0,u=l.videoplay||0,C=l.videowatch_10s||0,v=l.videowatch_30s||0,g=l.videowatch_25pct||0,f=l.videowatch_50pct||0,P=l.videowatch_75pct||0,E=l.videowatch_complete||0,B=l.bookedcall||0,x=l.time_5s||0,S=l.time_15s||0,R=l.time_30s||0,D=l.time_60s||0,M=l.scroll_moved||0,T=l.scroll_calendar||0,$=l.scroll_testimonials||0,b=B,r=Math.max(E,b),i=Math.max(P,r),d=Math.max(f,i),p=Math.max(g,d),_=Math.max(v,p),y=Math.max(C,_),w=Math.max(u,y);let I=Math.max(m,w);const Y=D,N=Math.max(R,Y),j=Math.max(S,N),H=Math.max(x,j);I=Math.max(I,H);const G=$,z=Math.max(T,G),K=Math.max(M,z);I=Math.max(I,K),document.getElementById("stat-pageload").textContent=String(I),document.getElementById("stat-videoplay").textContent=String(w),document.getElementById("stat-videowatch_complete").textContent=String(r),document.getElementById("stat-bookedcall").textContent=String(b);const de=I?Math.round(w/I*100):0,ce=w?Math.round(r/w*100):0,pe=I?(b/I*100).toFixed(1):"0.0";document.getElementById("rate-play").textContent=`${de}% Play Rate`,document.getElementById("rate-complete").textContent=`${ce}% Completion Rate`,document.getElementById("rate-booking").textContent=`${pe}% Booking Rate`,document.getElementById("funnel-val-pageload").textContent=String(I),document.getElementById("funnel-val-videoplay").textContent=String(w),document.getElementById("funnel-val-videowatch_10s").textContent=String(y),document.getElementById("funnel-val-videowatch_30s").textContent=String(_),document.getElementById("funnel-val-videowatch_25pct").textContent=String(p),document.getElementById("funnel-val-videowatch_50pct").textContent=String(d),document.getElementById("funnel-val-videowatch_75pct").textContent=String(i),document.getElementById("funnel-val-videowatch_complete").textContent=String(r),document.getElementById("funnel-val-bookedcall").textContent=String(b);const O=(L,q)=>{const W=document.getElementById(`funnel-val-${L}`);W&&(W.textContent=String(q))};O("time_5s",H),O("time_15s",j),O("time_30s",N),O("time_60s",Y),O("scroll_moved",K),O("scroll_calendar",z),O("scroll_testimonials",G);const k=(L,q,W=I)=>{const ee=W?Math.round(q/W*100):0,te=document.getElementById(`funnel-bar-${L}`),ae=document.getElementById(`funnel-pct-${L}`);te&&(te.style.width=`${ee}%`),ae&&(ae.textContent=`${ee}%`)};k("videoplay",w),k("videowatch_10s",y),k("videowatch_30s",_),k("videowatch_25pct",p),k("videowatch_50pct",d),k("videowatch_75pct",i),k("videowatch_complete",r),k("bookedcall",b),k("time_5s",H),k("time_15s",j),k("time_30s",N),k("time_60s",Y),k("scroll_moved",K),k("scroll_calendar",z),k("scroll_testimonials",G),s&&(s.style.display="none"),n&&(n.style.display="block")}catch{s&&(s.textContent="Error loading stats. Please try again.")}};function De(){if(!(sessionStorage.getItem("admin_authenticated")==="true")){const l=document.getElementById("admin-login-form");l&&l.addEventListener("submit",async m=>{m.preventDefault();const u=document.getElementById("admin-password"),C=document.getElementById("login-error");if(!u||!C)return;const v=u.value;await me(v)==="24a1cd5945cfe472b06953093188f53551fce003d9c6abb5b1b29903156377b9"?(sessionStorage.setItem("admin_authenticated","true"),V("admin",!1)):(C.textContent="Incorrect password.",C.style.display="block")});return}const e=document.getElementById("btn-toggle-lifetime"),s=document.getElementById("btn-toggle-daily"),n=document.getElementById("admin-date-select");let a=!0,o=Q();const c=()=>{Pe(a,o)};e&&s&&n&&(e.addEventListener("click",()=>{a=!1,e.classList.add("active"),s.classList.remove("active"),n.style.display="none",c()}),s.addEventListener("click",()=>{a=!0,s.classList.add("active"),e.classList.remove("active"),n.style.display="block",c()}),n.addEventListener("change",()=>{o=n.value,c()})),c()}function V(t,e=!0){const s=document.getElementById("booking-modal");s&&s.remove(),document.body.style.overflow="",oe(),le();const n=document.getElementById("main-nav"),a=document.querySelector(".site-footer");t==="booking"?(n&&(n.style.display="none"),a&&(a.style.display="none")):(n&&(n.style.display=""),a&&(a.style.display=""));const o=Z("#main-content");o.style.opacity="0",o.style.transform="translateY(8px)",setTimeout(()=>{if(window.scrollTo({top:0,behavior:"instant"}),o.innerHTML=re[t](),Se(t),o.style.transition="opacity 0.3s ease, transform 0.3s ease",requestAnimationFrame(()=>{o.style.opacity="1",o.style.transform="translateY(0)"}),Ce(),t==="contact"&&_e(),t==="booking"||t==="booking-new"){A("pageload",2e3),ue(),ve(),Ie(),Te(t==="booking");const c=document.getElementById("skip-to-booking-btn");c&&c.addEventListener("click",l=>{l.preventDefault();const m=document.getElementById("booking-calendar");m&&m.scrollIntoView({behavior:"smooth",block:"start"})}),(t==="booking-new"||t==="booking")&&Le(),t==="booking"&&document.querySelectorAll(".funnel-cta-btn").forEach(l=>{l.addEventListener("click",()=>{window.openBookingModal&&window.openBookingModal()})})}if(t==="admin"&&De(),Be(t),e){const c=t==="home"?"/":`/${t}`;window.location.pathname!==c&&history.pushState(null,"",c)}},150)}function Oe(t){t.addEventListener("click",e=>{const s=e.target.closest("[data-link]");if(!s||e.metaKey||e.ctrlKey||e.shiftKey||e.button!==0)return;e.preventDefault();const n=s.getAttribute("data-link");n&&re[n]&&V(n)})}function We(){const t=Z("#main-nav");if(!t)return;const e=()=>{window.scrollY>20?t.classList.add("scrolled"):t.classList.remove("scrolled")};window.addEventListener("scroll",e,{passive:!0})}window.formspree=window.formspree||function(){(window.formspree.q=window.formspree.q||[]).push(arguments)};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("app");t.innerHTML=`
    ${fe()}
    <main id="main-content" style="opacity:1; min-height:100vh;"></main>
    ${ge()}
    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/971502446531" target="_blank" rel="noopener" class="whatsapp-floating-btn" aria-label="Chat on WhatsApp">
      <span class="whatsapp-tooltip">Chat with us</span>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.864.001-2.639-1.017-5.122-2.87-6.98C16.612 1.905 14.13 .882 11.5 0.882c-5.437 0-9.863 4.415-9.866 9.866-.001 1.776.477 3.51 1.38 5.061L1.937 21.84l6.196-1.626L8.13 20.21zm10.222-3.834c-.28-.14-1.65-.815-1.906-.907-.255-.092-.44-.138-.625.14-.185.276-.71.907-.87 1.092-.16.185-.32.208-.6.068-1.785-.892-2.92-1.747-3.927-3.48-.266-.46.267-.428.762-1.42.083-.17.042-.317-.02-.457-.063-.14-.626-1.507-.857-2.064-.225-.54-.472-.466-.647-.475-.168-.008-.36-.01-.552-.01-.192 0-.504.072-.768.36-.264.288-1.008.986-1.008 2.404s1.032 2.788 1.176 2.983c.144.195 2.03 3.1 4.916 4.347.686.297 1.22.474 1.638.607.69.219 1.317.188 1.812.114.55-.082 1.65-.674 1.884-1.324.233-.65.233-1.205.163-1.324-.07-.118-.256-.184-.536-.324z"/>
      </svg>
    </a>
  `,Oe(t),We(),window.addEventListener("message",s=>{s.data&&s.data.event==="calendly.event_scheduled"&&(A("bookedcall"),typeof window.fbq=="function"&&window.fbq("track","Schedule"))});const e=ne(window.location.pathname);V(e,!1),window.addEventListener("popstate",()=>{const s=ne(window.location.pathname);V(s,!1)})});
