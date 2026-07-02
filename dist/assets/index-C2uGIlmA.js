(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const v of n.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&a(v)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const k=(e,t=document)=>t.querySelector(e),O=(e,t=document)=>[...t.querySelectorAll(e)],D=.2723,y=e=>`<span class="price-usd">approx. $${(e*D).toFixed(0)} USD</span>`,i={arrow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/></svg>',check:'<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1.5,5.5 3.8,8 8.5,2"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.69 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.69A2 2 0 0122 16.92z"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2 .27-2.98-.31-3.5c-.56-.52-1.43-.8-2.69.5z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'},M=()=>`<span class="check-icon">${i.check}</span>`;function F(){return`
  <nav class="nav" id="main-nav">
    <a href="/" class="logo" data-link="home" id="logo-btn">
      <span class="logo-wordmark">Atlantic</span>
      <img src="/atlanticbear-logo.png" alt="Atlantic Bear Logo" class="logo-bear-img" width="42" height="42" />
    </a>
    <div class="nav-links">
      <a href="/" class="nav-link" data-link="home"    id="nav-home">Home</a>
      <a href="/level1" class="nav-link" data-link="level1"  id="nav-l1">Level 1</a>
      <a href="/level2" class="nav-link" data-link="level2"  id="nav-l2">Level 2</a>
      <a href="/level3" class="nav-link" data-link="level3"  id="nav-l3">Level 3</a>
      <a href="/testimonials" class="nav-link" data-link="testimonials" id="nav-testimonials">Testimonials</a>
      <a href="/contact" class="nav-link" data-link="contact" id="nav-contact">Contact</a>
    </div>
    <div class="nav-actions">
      <a href="/contact" class="btn btn-secondary btn-sm" data-link="contact" id="nav-contact-cta">Contact</a>
      <a href="/booking" class="btn btn-dark btn-sm" data-link="booking" id="nav-book-cta">Book a Call ${i.arrow}</a>
    </div>
  </nav>`}function W(){return`
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
            <a href="/level3" data-link="level3">Level 3</a>
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
  </footer>`}function q(){const e=[{num:"3 Days",desc:"From kick-off to live"},{num:"100%",desc:"Mobile responsive"},{num:"Fully Custom",desc:"No templates, ever"},{num:"3+ Years",desc:"Building in the UAE"},{num:"81%",desc:"Of customers research online first"},{num:"SEO Ready",desc:"Google-optimised from day one"}],t=()=>e.map(a=>`<span class="marquee-badge"><span class="marquee-num">${a.num}</span><span class="marquee-desc">${a.desc}</span></span><span class="marquee-sep">·</span>`).join(""),s=t()+t()+t()+t();return`
  <!-- HERO -->
  <section class="hero" style="position: relative; overflow: hidden;">
    <img src="/atlanticbear-logo.png" class="huge-bear" alt="Atlantic Bear Watermark" fetchpriority="high" width="600" height="600" />
    <div class="container" style="position: relative; z-index: 1;">
      <h1>Your business deserves<br>to be found.</h1>
      <p class="hero-sub">
        We design, build, and launch custom websites for UAE businesses — clean layouts, ultra-fast speeds, built to grow your brand.
      </p>
      <div class="hero-ctas">
        <a href="/booking" class="btn btn-dark btn-large" data-link="booking" id="hero-cta-book">
          Book a Call ${i.arrow}
        </a>
        <a href="/level2" class="btn btn-secondary btn-large" data-link="level2" id="hero-cta-plans">
          View Plans
        </a>
      </div>
      <p class="hero-note">Not sure which plan? <a href="/booking" data-link="booking">Book a Call</a></p>
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
      <p class="competitor-banner-text">Your competitor's website is getting your clients. <strong>Let's fix that.</strong></p>
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

  <!-- HOW IT WORKS SECTION -->
  <section class="section-pad" style="background: var(--surface); border-bottom: 1px solid var(--border);">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Process</div>
        <h2 class="section-title">What working with us looks like</h2>
        <p class="section-sub">A simple, transparent process from our first chat to launching your new website.</p>
      </div>
      <div class="steps-grid">
        <div class="step reveal">
          <div class="step-num">STEP 01</div>
          <h3>Discovery Call — 30 minutes</h3>
          <p>A quick call where we get to know your business, answer your questions, and figure out exactly what you need.</p>
        </div>
        <div class="step reveal" style="transition-delay:0.1s;">
          <div class="step-num">STEP 02</div>
          <h3>We build your demo website — 5 to 7 days</h3>
          <p>You fill out a short form with your business details. We take it from there and build your demo website.</p>
        </div>
        <div class="step reveal" style="transition-delay:0.2s;">
          <div class="step-num">STEP 03</div>
          <h3>Launch Call — 30 minutes</h3>
          <p>We walk you through your finished website, answer any questions, and make sure you are happy with everything before it goes live.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FREE DEMO OFFER SECTION -->
  <section class="free-demo-section reveal">
    <div class="container">
      <div class="free-demo-inner">
        <div class="free-demo-badge">Our Offer</div>
        <h2 class="free-demo-headline">We build your website first.<br>You only pay if you love it.</h2>
        <p class="free-demo-sub">We put our time and skill on the line — not yours. We build you a fully custom demo website for free. If you like what you see, we launch it and you pay. If you don't, you walk away and owe us nothing. Zero risk on your end.</p>
        <div class="free-demo-steps">
          <div class="free-demo-step">
            <div class="free-demo-step-icon">${i.zap}</div>
            <div>
              <div class="free-demo-step-title">Free Demo Built</div>
              <div class="free-demo-step-desc">We build you a real, fully designed website — no templates, no shortcuts.</div>
            </div>
          </div>
          <div class="free-demo-step">
            <div class="free-demo-step-icon">${i.check}</div>
            <div>
              <div class="free-demo-step-title">You Review It</div>
              <div class="free-demo-step-desc">Walk through the demo with us. Ask questions. Request changes. No pressure.</div>
            </div>
          </div>
          <div class="free-demo-step">
            <div class="free-demo-step-icon">${i.rocket}</div>
            <div>
              <div class="free-demo-step-title">Pay Only If You're Happy</div>
              <div class="free-demo-step-desc">Love it? We launch it and you pay. Not happy? We part ways — no invoice, no hard feelings.</div>
            </div>
          </div>
        </div>
        <a href="/booking" class="btn btn-dark btn-large free-demo-cta" data-link="booking" id="home-free-demo-cta">Get Your Free Demo ${i.arrow}</a>
        <p class="free-demo-note">No credit card. No contract. No risk.</p>
      </div>
    </div>
  </section>

  <!-- WHY ATLANTIC BEAR SECTION -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Why Us</div>
        <h2 class="section-title">Why Atlantic Bear</h2>
        <p class="section-sub">We focus on what matters to your business. No fluff, no jargon, no nonsense.</p>
      </div>
      <div class="feature-grid">
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${i.globe}</div>
          <h3>Get found on Google</h3>
          <p>If someone searches for your business and nothing comes up, they call your competitor. We make sure that does not happen.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${i.star}</div>
          <h3>Show off your best reviews</h3>
          <p>Every business has a bad review somewhere. We put your best ones front and centre so that is what people see first.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${i.map}</div>
          <h3>Local SEO included</h3>
          <p>We set up your website so Google knows where you are, what you do, and who to show you to.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${i.phone}</div>
          <h3>Built for mobile</h3>
          <p>87% of people visit websites on their phone. We make sure your business looks exactly right on every screen.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${i.rocket}</div>
          <h3>No contracts</h3>
          <p>If we do good work, you will stay. We do not need a contract to make that happen.</p>
        </div>
        <div class="feature-item reveal" style="display:flex; flex-direction:column; justify-content:center; background:var(--surface);">
          <h3 style="font-size:1.1rem; margin-bottom:8px;">Ready to start?</h3>
          <p style="margin-bottom:16px; font-size:0.82rem; color:var(--text-muted);">Book your free 30-minute discovery call and get a custom demo website.</p>
          <a href="/booking" class="btn btn-dark btn-sm" data-link="booking" style="align-self:flex-start;">Book a Call ${i.arrow}</a>
        </div>
      </div>
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
        <p>Three plans. Built for where your business actually is right now.</p>
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
            <div class="teaser-price-main">AED 2,000</div>
            <div class="teaser-price-sub">+ AED 150/mo managed</div>
          </div>
          <div class="teaser-pills">
            <span class="teaser-pill">Café</span>
            <span class="teaser-pill">Salon</span>
            <span class="teaser-pill">Retail shop</span>
            <span class="teaser-pill">Kiosk</span>
          </div>
          <a href="/level1" class="teaser-btn teaser-btn-dark" data-link="level1" id="home-l1-cta">
            Explore Level 1 ${i.arrow}
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
            <div class="teaser-price-main">AED 3,500</div>
            <div class="teaser-price-sub">+ AED 300/mo managed</div>
          </div>
          <div class="teaser-pills">
            <span class="teaser-pill">Clinic</span>
            <span class="teaser-pill">Dental practice</span>
            <span class="teaser-pill">Law firm</span>
            <span class="teaser-pill">Consultant</span>
          </div>
          <a href="/level2" class="teaser-btn teaser-btn-outline" data-link="level2" id="home-l2-cta">
            Explore Level 2 ${i.arrow}
          </a>
        </div>

        <!-- Level 3 -->
        <div class="teaser-card level-three-card">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">03</span>
            <span class="teaser-level-name">Level Three · Elite</span>
          </div>
          <h3>Elite Brand & SEO</h3>
          <p class="teaser-pitch">For businesses needing elite branding, best-of-the-best SEO, up to 20 pages, dynamic media, blog setup, and priority developers.</p>
          <div class="teaser-price">
            <div class="teaser-price-main">AED 7,950</div>
            <div class="teaser-price-sub">+ AED 300/mo managed</div>
          </div>
          <div class="teaser-pills">
            <span class="teaser-pill">High Growth</span>
            <span class="teaser-pill">Elite SEO</span>
            <span class="teaser-pill">Blog setup</span>
            <span class="teaser-pill">20 Pages</span>
          </div>
          <a href="/level3" class="teaser-btn teaser-btn-outline" data-link="level3" id="home-l3-cta">
            Explore Level 3 ${i.arrow}
          </a>
        </div>

      </div>

    </div>
  </section>
  `}function g(e){return`
  <div class="pricing-card${e.managed?" managed":""}">
    ${e.managed?'<div class="managed-badge">Recommended</div>':""}
    <div class="pricing-card-top">
      <div class="plan-label">${e.label}</div>
      ${e.setupFee?`
        <div class="price-setup-note">Setup: <strong>${e.setupFee}</strong> ${e.setupAed?y(e.setupAed):""}</div>
      `:""}
      <div class="price-display">
        <span class="price-big">${e.price}</span>
        ${e.period?`<span class="price-period">${e.period}</span>`:""}
      </div>
      ${e.setupFee,y(e.priceAed)}
      <p class="plan-desc">${e.desc}</p>
    </div>
    <div class="pricing-card-cta">
      ${e.paypalHtml?e.paypalHtml:`<a href="/booking" class="btn btn-dark btn-block btn-large" data-link="booking" id="${e.ctaId}">Get started ${i.arrow}</a>`}
      ${e.note?`<p style="font-size:0.75rem; color:var(--text-muted); margin-top:10px; text-align:center;">${e.note}</p>`:""}
    </div>
    <div class="pricing-card-features">
      <div class="features-label">What's included</div>
      ${e.features.map(t=>`<div class="feature-row">${M()}<span>${t}</span></div>`).join("")}
      ${e.managed?`
        <div class="no-contract-note">
          <strong>No lock-in contracts</strong>
          Minimum 3 months. Cancel anytime after that, we hand over all files cleanly.
        </div>
      `:""}
    </div>
  </div>`}function R(){return`
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
        ${g({label:"One-Time",price:"AED 1,450",priceAed:1450,desc:"Pay once, own your website forever. You get all files, the domain, and full control. No recurring fees.",features:["Fully custom-designed website","Up to 5 pages included","Mobile responsive layout","Basic SEO setup","Email and contact form options","Contact form","Handoff within 7 to 14 days","Source files included"],ctaId:"l1-ot-cta",note:"Includes one round of revisions. Additional pages at AED 150/page.",paypalHtml:'<div class="paypal-btn-wrap" id="paypal-capture-container-l1"></div>'})}
        ${g({label:"Managed Plan",price:"AED 150",priceAed:150,period:"/month",setupFee:"AED 2,000",setupAed:2e3,desc:"We build it, manage it, and keep it running. You focus on your business, we handle everything online.",features:["Full custom design and build","Up to 5 pages included","Domain and hosting managed by us","Email and contact form support","Mobile responsive layout","Basic SEO optimisation","Monthly content updates (1 round)","Priority support via Email"],ctaId:"l1-managed-cta",managed:!0,paypalHtml:`<div class="paypal-btn-wrap">
            <style>.pp-T8XKDA4RJ6H26{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}</style>
            <form action="https://www.paypal.com/ncp/payment/T8XKDA4RJ6H26" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;">
              <input class="pp-T8XKDA4RJ6H26" type="submit" value="Buy Now" />
              <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
              <section style="font-size: 0.75rem;"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
            </form>
          </div>`})}
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
        ${[{icon:i.palette,title:"Custom Design",desc:"No templates. Every site is built from scratch to match your brand, colours, and vibe."},{icon:i.zap,title:"Fast Delivery",desc:"Your site is live within 7 to 14 business days from when we agree on the brief."},{icon:i.globe,title:"Mobile First",desc:"Looks great on phones, tablets, and desktops. Most of your visitors are on mobile."},{icon:i.shield,title:"SEO Ready",desc:"Proper page titles, meta descriptions, and structured code so Google can find you."},{icon:i.mail,title:"Email Support",desc:"An integrated contact form and direct email connection on every page."},{icon:i.wrench,title:"Low Maintenance",desc:"Clean builds that just work. Perfect for business owners who want to focus on running their business."}].map(e=>`<div class="feature-item reveal">
            <div class="feature-icon-wrap">${e.icon}</div>
            <h3>${e.title}</h3>
            <p>${e.desc}</p>
          </div>`).join("")}
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
        ${[{q:"Who is Level 1 for?",a:"Kiosks, cafes, retail shops, salons, small workshops. Any business that wants a professional online presence without a large budget."},{q:"Do I own the website after the one-time purchase?",a:"Yes, completely. We hand over all the files and you can host it wherever you want. We're also happy to help with hosting setup at no extra cost."},{q:"What do I need to provide?",a:"Your logo (or we'll suggest options), photos of your business or products, and a short description of what you do. We'll handle the rest."},{q:"Can I upgrade to Level 2 later?",a:"Absolutely. If your business grows and you need more features, we can rebuild or expand your site. Previous payments are credited where applicable."}].map(e=>`<div class="faq-item"><h3>${e.q}</h3><p>${e.a}</p></div>`).join("")}
      </div>
    </div>
  </section>
 
  <section class="cta-section">
    <div class="container">
      <h2>Start with Level 1</h2>
      <p>A website your customers will trust, at a price that makes sense.</p>
      <div class="cta-ctas">
        <a href="/booking" class="btn btn-dark btn-large" data-link="booking" id="l1-footer-cta">
          Book a Call ${i.arrow}
        </a>
      </div>
    </div>
  </section>`}function j(){return`
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
        ${g({label:"One-Time",price:"AED 2,950",priceAed:2950,desc:"Pay once and own a full professional website. Ideal for established businesses who want complete control.",features:["Fully custom professional design","Up to 10 pages included","Contact form integration","Team and credentials profiles","Services and treatment layouts","Testimonials and trust badges","Solid local SEO configuration","Google Maps setup","Source files handover"],ctaId:"l2-ot-cta",note:"Includes two rounds of revisions. Additional pages at AED 200/page.",paypalHtml:'<div class="paypal-btn-wrap" id="paypal-capture-container-l2"></div>'})}
        ${g({label:"Managed Plan",price:"AED 300",priceAed:300,period:"/month",setupFee:"AED 3,500",setupAed:3500,desc:"Full-service management. We design, build, host, and maintain your site so you can focus entirely on your clients.",features:["Full custom professional design and setup","Up to 10 pages built for conversion","Domain renewal and professional management","Secure cloud hosting and daily backups","SSL monitoring and active protection","Good local SEO and Google profile setup","Regular content updates (up to 2/month)","Seasonal campaign support (on request)","Priority email support"],ctaId:"l2-managed-cta",managed:!0,paypalHtml:`<div class="paypal-btn-wrap">
            <style>.pp-KJDAPRWW2EC6S{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}</style>
            <form action="https://www.paypal.com/ncp/payment/KJDAPRWW2EC6S" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;">
              <input class="pp-KJDAPRWW2EC6S" type="submit" value="Buy Now" />
              <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
              <section style="font-size: 0.75rem;"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
            </form>
          </div>`})}
      </div>
    </div>
  </section>

  <!-- COMPARISON TABLE -->
  <section class="section-pad" style="background:var(--surface); border-top:1px solid var(--border);">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Compare</div>
        <h2 class="section-title">Level 1 vs Level 2 vs Level 3</h2>
        <p class="section-sub">Not sure which is right? Here's a quick side-by-side.</p>
      </div>
      <div class="comparison-wrap reveal">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Level 1</th>
              <th class="hl">Level 2</th>
              <th>Level 3</th>
            </tr>
          </thead>
          <tbody>
            ${[["Pages included","Up to 5","Up to 10","Up to 20"],["Custom design","Yes","Yes","Elite Brand (Cleaner)"],["Mobile responsive","Yes","Yes","Yes (Optimized)"],["SEO Optimization","Basic","Enhanced Local SEO","Best of the Best Site SEO"],["Blog for SEO","No","No","Yes (Optional)"],["Media Assets","Standard","Enhanced","Video & Image optimized"],["Design Revisions","1 Round","2 Rounds","More Iterations"],["Developer Access","Standard","Senior Developer","Best Developers"],["Starting Price (One-time)","AED 1,450","AED 2,950","N/A (Managed Only)"],["Managed Plan from","AED 2,000 + 150/mo","AED 3,500 + 300/mo","AED 7,950 + 300/mo"]].map(([e,t,s,a])=>`<tr>
                <td>${e}</td>
                <td>${t}</td>
                <td class="hl">${s}</td>
                <td>${a}</td>
              </tr>`).join("")}
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
        ${[{icon:i.palette,title:"Premium Design",desc:"Custom layouts that communicate expertise and build trust with every visitor."},{icon:i.rocket,title:"Conversion Focused",desc:"Built to turn visitors into emails and real leads."},{icon:i.globe,title:"Local SEO",desc:"Solid local SEO setup including Google Business Profile configuration to help you get found."},{icon:i.shield,title:"Secure Hosting",desc:"SSL certificates, daily backups, and active uptime monitoring included."},{icon:i.mail,title:"Easy Contact",desc:"Contact form, email, and Google Maps built directly into your site."},{icon:i.code,title:"Ongoing Updates",desc:"Managed plan clients get regular content updates — add services, update team bios, change pricing."}].map(e=>`<div class="feature-item reveal">
            <div class="feature-icon-wrap">${e.icon}</div>
            <h3>${e.title}</h3>
            <p>${e.desc}</p>
          </div>`).join("")}
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
        ${[{q:"Who is Level 2 for?",a:"Clinics, dental practices, law firms, consultants, and established businesses that need a website that actively earns trust and drives real enquiries."},{q:"What's included in the managed plan?",a:"Everything. Design, build, hosting, SSL, domain, regular content updates, and priority email support. You focus on your business, we handle your site."},{q:"Can I request changes after launch?",a:"Yes. Managed plan clients get regular content updates (up to 2 rounds per month). One-time clients can request changes at our standard rate."},{q:"How long does it take?",a:"Typically 14 to 21 business days from brief sign-off, depending on how quickly we receive your content."}].map(e=>`<div class="faq-item"><h3>${e.q}</h3><p>${e.a}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Build your professional site</h2>
      <p>Your clients are searching online right now. Make sure they find something impressive.</p>
      <div class="cta-ctas">
        <a href="/booking" class="btn btn-dark btn-large" data-link="booking" id="l2-footer-cta">
          Book a Call ${i.arrow}
        </a>
      </div>
    </div>
  </section>`}function N(){return`
  <!-- PAGE HEADER -->
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="section-label">Level 3 · Elite Enterprise</div>
      <h1>Best-in-class websites for high-growth brands</h1>
      <p>For businesses that require an elite brand presence, comprehensive SEO,
      blog publishing, and our absolute best development and design resources.</p>
    </div>
  </div>

  <!-- PRICING -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Pricing</div>
        <h2 class="section-title">The Managed Plan</h2>
        <p class="section-sub">Level 3 is strictly fully-managed to ensure your site is continuously optimized, secure, and maintained by our best developers.</p>
      </div>
      
      <!-- Centered featured pricing card -->
      <div style="display: flex; justify-content: center; max-width: 580px; margin: 0 auto;" class="reveal">
        ${g({label:"Managed Plan",price:"AED 300",priceAed:300,period:"/month",setupFee:"AED 7,950",setupAed:7950,desc:"Full-service elite management. We design, build, host, and continuously optimize your site for maximum SEO performance and brand growth.",features:["Elite custom design (way cleaner layouts)","Up to 20 pages included","Best of the best site SEO setup","Blog for SEO content marketing (if wanted)","Advanced systems & integrations in place","Video and image asset optimization","More design and review iterations","Our best developers working on your site","Fully mobile optimized layout","Domain, hosting, and SSL fully managed","Ongoing content updates & priority support"],ctaId:"l3-managed-cta",managed:!0,paypalHtml:`<div class="paypal-btn-wrap">
            <style>.pp-TYT62UCZ5XB4C{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}</style>
            <form action="https://www.paypal.com/ncp/payment/TYT62UCZ5XB4C" method="post" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;">
              <input class="pp-TYT62UCZ5XB4C" type="submit" value="Buy Now" />
              <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
              <section style="font-size: 0.75rem;"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
            </form>
          </div>`})}
      </div>
    </div>
  </section>

  <!-- COMPARISON TABLE -->
  <section class="section-pad" style="background:var(--surface); border-top:1px solid var(--border);">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Compare</div>
        <h2 class="section-title">Level 1 vs Level 2 vs Level 3</h2>
        <p class="section-sub">Choose the level that matches where your business is going.</p>
      </div>
      <div class="comparison-wrap reveal">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Level 1</th>
              <th>Level 2</th>
              <th class="hl">Level 3</th>
            </tr>
          </thead>
          <tbody>
            ${[["Pages included","Up to 5","Up to 10","Up to 20"],["Custom design","Yes","Yes","Elite Brand (Way Cleaner)"],["Mobile responsive","Yes","Yes","Yes (Optimized)"],["SEO Optimization","Basic","Enhanced Local SEO","Best of the Best Site SEO"],["Blog for SEO","No","No","Yes (Optional)"],["Media Assets","Standard","Enhanced","Video & Image optimized"],["Design Revisions","1 Round","2 Rounds","More Iterations"],["Developer Access","Standard","Senior Developer","Best Developers"],["Starting Price (One-time)","AED 1,450","AED 2,950","N/A (Managed Only)"],["Managed Plan from","AED 2,000 + 150/mo","AED 3,500 + 300/mo","AED 7,950 + 300/mo"]].map(([e,t,s,a])=>`<tr>
                <td>${e}</td>
                <td>${t}</td>
                <td>${s}</td>
                <td class="hl">${a}</td>
              </tr>`).join("")}
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
        <h2 class="section-title">Built for elite performance</h2>
      </div>
      <div class="feature-grid">
        ${[{icon:i.zap,title:"Best Developers",desc:"Handled by our top developers to ensure cutting-edge speed, security, and clean code architecture."},{icon:i.shield,title:"Best of the Best SEO",desc:"Thorough technical, on-page, and structural SEO so your business dominates search results."},{icon:i.palette,title:"Elite Brand & Cleaner Layouts",desc:"A bespoke digital experience tailored to project premium brand authority."},{icon:i.rocket,title:"Up to 20 Pages",desc:"Comprehensive structure to cover all your services, treatments, case studies, and campaigns."},{icon:i.globe,title:"Blog for SEO",desc:"A built-in blog to publish keyword-rich articles and continuously attract free organic search traffic."},{icon:i.wrench,title:"Systems in Place",desc:"Automated backups, active monitoring, analytics, and CRM integrations for smooth operations."}].map(e=>`<div class="feature-item reveal">
            <div class="feature-icon-wrap">${e.icon}</div>
            <h3>${e.title}</h3>
            <p>${e.desc}</p>
          </div>`).join("")}
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
        ${[{q:"Who is Level 3 for?",a:"High-growth UAE businesses, enterprise services, and established brands that want to dominate search rankings, require an elite visual brand, and need a larger page count."},{q:"Why is there no one-time payment option?",a:"Level 3 sites are complex, content-rich systems containing SEO blogs, advanced integrations, and custom media. Continuous management is essential to keep them running perfectly and maintain their high SEO rankings."},{q:"What does the SEO blog include?",a:"We set up a fully functioning, easy-to-use blog system integrated with your site. We also configure it so that publishing new articles automatically structures them for Google search visibility."},{q:"How many design iterations do I get?",a:"Unlike Level 1 and 2 which have set revision rounds, Level 3 includes multiple iterative review stages to ensure the final brand representation is absolutely perfect."}].map(e=>`<div class="faq-item"><h3>${e.q}</h3><p>${e.a}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Build your elite website</h2>
      <p>Partner with our best team to deploy a professional, high-converting digital platform.</p>
      <div class="cta-ctas">
        <a href="/booking" class="btn btn-dark btn-large" data-link="booking" id="l3-footer-cta">
          Book a Call ${i.arrow}
        </a>
      </div>
    </div>
  </section>`}function U(){return`
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
          Book a Call ${i.arrow}
        </a>
      </div>
    </div>
  </section>`}function Y(){return`
  <!-- HEADER -->
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="tm-bear-wrap reveal">
        <img src="/atlanticbear-logo.png" alt="Atlantic Bear" class="tm-bear-logo" />
      </div>
      <div class="section-label reveal" style="transition-delay:0.05s;">Client Work</div>
      <h1 class="reveal" style="transition-delay:0.1s;">Here's one we're proud of.</h1>
      <p class="reveal" style="transition-delay:0.15s;">We work with businesses across the UK and UAE. This is a look at what we do — one example from our portfolio.</p>
    </div>
  </div>

  <!-- BEFORE / AFTER -->
  <section class="section-pad">
    <div class="container">

      <!-- VIDEO TESTIMONIAL -->
      <div class="tm-shot-block reveal" style="margin-bottom: 64px;">
        <div class="tm-shot-label tm-label-after">Video Review</div>
        <div class="tm-browser">
          <div class="tm-browser-bar">
            <span class="tm-dot"></span><span class="tm-dot"></span><span class="tm-dot"></span>
            <div class="tm-url">sondertraininggroup.com</div>
          </div>
          <div style="background: #000; display: flex; justify-content: center; align-items: center; overflow: hidden;">
            <video controls style="width: 100%; display: block; border: none; aspect-ratio: 16/9; object-fit: contain;">
              <source src="/testimonials/sonder%20training%20group%20testimonial.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <!-- BEFORE -->
      <div class="tm-shot-block reveal">
        <div class="tm-shot-label tm-label-before">Before</div>
        <div class="tm-browser">
          <div class="tm-browser-bar">
            <span class="tm-dot"></span><span class="tm-dot"></span><span class="tm-dot"></span>
            <div class="tm-url">sondertraininggroup.com</div>
          </div>
          <img src="/screenshots/sonder-old.png" alt="Client website — before" loading="lazy" class="tm-screenshot" />
        </div>
      </div>

      <!-- AFTER -->
      <div class="tm-shot-block reveal" style="transition-delay:0.08s;">
        <div class="tm-shot-label tm-label-after">After</div>
        <div class="tm-browser">
          <div class="tm-browser-bar">
            <span class="tm-dot"></span><span class="tm-dot"></span><span class="tm-dot"></span>
            <div class="tm-url">sondertraininggroup.com</div>
          </div>
          <img src="/screenshots/sonder-new.png" alt="Client website — after, built by Atlantic Bear" loading="lazy" class="tm-screenshot" />
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
          Book a Call ${i.arrow}
        </a>
        <a href="/level2" class="btn btn-secondary btn-large" data-link="level2" id="testimonials-plans-cta">
          View plans
        </a>
      </div>
    </div>
  </section>`}function z(){return`
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${i.mail}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Email</div>
                  <div class="contact-method-value">officialatlanticbear@gmail.com</div>
                </div>
              </a>
              <a href="https://www.instagram.com/officialatlanticbear/" target="_blank" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${i.instagram}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Instagram</div>
                  <div class="contact-method-value">@officialatlanticbear</div>
                </div>
              </a>
              <div class="contact-method">
                <div class="contact-method-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${i.map}</svg>
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
                Send message ${i.arrow}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`}function H(){return`
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="section-label">Get Started</div>
      <h1>Book your Discovery Call</h1>
      <p>Follow the 3 simple steps below to meet the team, check our work, and schedule a call to talk about your website.</p>
    </div>
  </div>

  <section class="booking-section">
    <div class="container">
      <div class="booking-steps-timeline">
        
        <!-- STEP 1: VIDEO -->
        <div class="booking-step-card reveal">
          <div class="booking-step-header">
            <h2 class="booking-step-title">Step 1: Watch this 3 min video</h2>
          </div>
          
          <div class="custom-video-wrap" id="custom-video-wrap">
            <video
              id="booking-video"
              class="booking-video-el"
              preload="auto"
              playsinline
              src="/videos for funnel call/book a call funnel video laptop layout.mp4"
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

        <!-- STEP 2: BOOKING CALENDAR -->
        <div class="booking-step-card reveal" style="transition-delay: 0.1s;">
          <div class="booking-step-header">
            <h2 class="booking-step-title">Step 2: Book a call to get your <span style="color:var(--accent);">Free Demo</span></h2>
          </div>
          
          <div class="calendly-widget-wrap">
            <!-- Calendly inline widget begin -->
            <div class="calendly-inline-widget" data-url="https://calendly.com/officialatlanticbear/first-meeting?hide_gdpr_banner=1" style="min-width:320px;height:900px;width:100%;"></div>
            <!-- Calendly inline widget end -->
          </div>
          
          <div class="fallback-calendly-link-wrap">
            <a href="https://calendly.com/officialatlanticbear/first-meeting?hide_gdpr_banner=1" target="_blank" rel="noopener" class="fallback-calendly-link">
              Open the calendar in a new tab if it doesn’t appear above.
            </a>
          </div>
        </div>

        <!-- STEP 3: VIDEO TESTIMONIAL -->
        <div class="booking-step-card reveal" style="transition-delay: 0.2s;">
          <div class="booking-step-header">
            <h2 class="booking-step-title">Step 3: Listen to what our clients have to say</h2>
          </div>
          
          <div class="booking-testimonials-wrap" style="display: flex; justify-content: center; margin-top: 24px;">
            <div style="max-width: 320px; width: 100%; border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--shadow-md); background: #000; border: 1px solid var(--border);">
              <video controls style="width: 100%; display: block; border: none; aspect-ratio: 9/16; object-fit: cover;">
                <source src="/testimonials/sonder%20training%20group%20testimonial.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  `}const T={home:q,level1:R,level2:j,level3:N,work:U,contact:z,testimonials:Y,booking:H},S={home:{title:"Atlantic Bear | Professional Websites for UAE Businesses. Live in 3 Days.",desc:"Atlantic Bear designs, builds, and launches custom professional websites for UAE businesses. Clean layouts, ultra-fast speeds, built to grow your brand. Live in 3 days, fully managed."},level1:{title:"Level 1 Plan: Custom Websites for UAE Small Businesses | Atlantic Bear",desc:"Affordable, custom-designed websites for cafés, salons, kiosks, and retail shops in the UAE. Get found online and get direct WhatsApp leads. Live in 7-14 days."},level2:{title:"Level 2 Plan: Professional Websites for UAE Practices & Clinics | Atlantic Bear",desc:"Premium websites built to earn trust for clinics, law firms, dental practices, and consultants in Dubai & UAE. Local SEO and full management included."},level3:{title:"Level 3 Plan: Elite Websites & SEO for UAE | Atlantic Bear",desc:"Ultimate websites built for high-growth UAE brands. Up to 20 pages, elite brand presence, comprehensive SEO, blog, and priority developers working on it."},work:{title:"Our Work | Atlantic Bear Portfolio",desc:"Explore custom websites designed and developed for UAE businesses. Professional layouts, mobile optimization, and fast load times."},contact:{title:"Contact Atlantic Bear | Start Your UAE Website Project",desc:"Get in touch with Atlantic Bear. Let's discuss your business website needs. Fast response and custom layouts in Dubai & UAE."},testimonials:{title:"Client Testimonials & Transformations | Atlantic Bear",desc:"See real website transformations by Atlantic Bear. Before and after case studies showing how we help businesses across the UAE look professional online."},booking:{title:"Book a Call | Atlantic Bear Discovery Session",desc:"Watch our video, schedule your free 30-minute discovery call, and view our client success stories. Start your UAE website project today."}};function _(e){const t=S[e]||S.home;document.title=t.title;let s=document.querySelector('meta[name="description"]');s||(s=document.createElement("meta"),s.setAttribute("name","description"),document.head.appendChild(s)),s.setAttribute("content",t.desc);let a=document.querySelector('link[rel="canonical"]');a||(a=document.createElement("link"),a.setAttribute("rel","canonical"),document.head.appendChild(a));const o=`${window.location.origin}${e==="home"?"":"/"+e}`;a.setAttribute("href",o);const n={"og:title":t.title,"og:description":t.desc,"og:url":o,"og:type":"website","og:image":`${window.location.origin}/logo.png`};for(const[c,m]of Object.entries(n)){let d=document.querySelector(`meta[property="${c}"]`);d||(d=document.createElement("meta"),d.setAttribute("property",c),document.head.appendChild(d)),d.setAttribute("content",m)}const v={"twitter:card":"summary_large_image","twitter:title":t.title,"twitter:description":t.desc,"twitter:image":`${window.location.origin}/logo.png`};for(const[c,m]of Object.entries(v)){let d=document.querySelector(`meta[name="${c}"]`);d||(d=document.createElement("meta"),d.setAttribute("name",c),document.head.appendChild(d)),d.setAttribute("content",m)}}function B(e){const t=e.replace(/^\/|\/$/g,"");return t==="level1"||t==="level2"||t==="level3"||t==="work"||t==="contact"||t==="testimonials"||t==="booking"?t:"home"}function G(e){O("[data-link]").forEach(s=>s.classList.remove("active"));const t=k(`[data-link="${e}"].nav-link`);t&&t.classList.add("active")}function K(){const e=O(".reveal"),t=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.classList.add("revealed"),t.unobserve(a.target))})},{threshold:.07,rootMargin:"0px 0px -30px 0px"});e.forEach(s=>t.observe(s))}function V(){const e=document.getElementById("contact-form");if(!e)return;const t=document.createElement("script");t.src="https://unpkg.com/@formspree/ajax@1",t.defer=!0,document.head.appendChild(t),t.onload=()=>{window.formspree&&window.formspree("initForm",{formElement:"#contact-form",formId:"mykanvrr"})},e.addEventListener("submit",async s=>{s.preventDefault();const a=document.getElementById("form-submit-btn"),o=document.querySelector("[data-fs-success]"),n=document.querySelector('[data-fs-error]:not([data-fs-error="name"]):not([data-fs-error="email"]):not([data-fs-error="message"])');a&&(a.disabled=!0,a.textContent="Sending...");try{const v=new FormData(e);if((await fetch("https://formspree.io/f/mykanvrr",{method:"POST",body:v,headers:{Accept:"application/json"}})).ok)e.style.display="none",o&&(o.style.display="block",o.style.textAlign="center",o.style.padding="18px",o.style.background="rgba(62,207,142,.07)",o.style.borderRadius="10px",o.style.border="1px solid rgba(62,207,142,.20)");else throw new Error("Server error")}catch{n&&(n.textContent="Something went wrong. Please try again or email officialatlanticbear@gmail.com.",n.style.color="var(--red)",n.style.fontSize="0.85rem",n.style.marginTop="8px"),a&&(a.disabled=!1,a.textContent="Try again")}})}function Q(){const e=document.querySelector(".calendly-inline-widget");if(!e)return;const t=()=>{window.Calendly&&(e.innerHTML="",window.Calendly.initInlineWidget({url:"https://calendly.com/officialatlanticbear/first-meeting?hide_gdpr_banner=1",parentElement:e}))};if(window.Calendly){t();return}if(document.getElementById("calendly-sdk")){const a=setInterval(()=>{window.Calendly&&(clearInterval(a),t())},100);return}const s=document.createElement("script");s.id="calendly-sdk",s.src="https://assets.calendly.com/assets/external/widget.js",s.async=!0,s.onload=t,document.head.appendChild(s)}function X(){const e=document.getElementById("booking-video"),t=document.getElementById("bv-overlay"),s=document.getElementById("bv-play-btn"),a=document.getElementById("bv-controls"),o=document.getElementById("bv-playpause"),n=document.getElementById("bv-progress-fill"),v=document.getElementById("bv-progress-thumb"),c=document.getElementById("bv-progress-wrap"),m=document.getElementById("bv-time"),d=document.getElementById("bv-mute"),h=document.getElementById("bv-volume"),E=document.getElementById("bv-fullscreen"),u=document.getElementById("custom-video-wrap");if(!e||!t||!s||!a||!o)return;const A=l=>{const p=Math.floor(l/60),r=Math.floor(l%60);return`${p}:${r.toString().padStart(2,"0")}`},b=()=>{if(!e.duration)return;const l=e.currentTime/e.duration*100;n&&(n.style.width=l+"%"),v&&(v.style.left=l+"%"),m&&(m.textContent=`${A(e.currentTime)} / ${A(e.duration)}`)},f=l=>{const p=o==null?void 0:o.querySelector(".icon-play"),r=o==null?void 0:o.querySelector(".icon-pause");p&&(p.style.display=l?"none":"block"),r&&(r.style.display=l?"block":"none"),t&&(t.style.display=l?"none":"flex")};if(t.addEventListener("click",()=>{e.play()}),e.addEventListener("click",()=>{e.paused?e.play():e.pause()}),e.addEventListener("play",()=>f(!0)),e.addEventListener("pause",()=>f(!1)),e.addEventListener("ended",()=>f(!1)),e.addEventListener("timeupdate",b),e.addEventListener("loadedmetadata",b),o.addEventListener("click",()=>{e.paused?e.play():e.pause()}),c){const l=r=>{const x=c.getBoundingClientRect(),$=r instanceof MouseEvent?r.clientX:r.touches[0].clientX,I=Math.max(0,Math.min(1,($-x.left)/x.width));e.currentTime=I*e.duration,b()};let p=!1;c.addEventListener("mousedown",r=>{p=!0,l(r)}),window.addEventListener("mousemove",r=>{p&&l(r)}),window.addEventListener("mouseup",()=>{p=!1}),c.addEventListener("touchstart",r=>l(r),{passive:!0}),c.addEventListener("touchmove",r=>l(r),{passive:!0})}if(h&&h.addEventListener("input",()=>{e.volume=parseFloat(h.value),e.muted=e.volume===0}),d&&d.addEventListener("click",()=>{e.muted=!e.muted,h&&(h.value=e.muted?"0":String(e.volume||1))}),E&&u&&E.addEventListener("click",()=>{!!(document.fullscreenElement||document.webkitFullscreenElement)?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():u.requestFullscreen?u.requestFullscreen():u.webkitRequestFullscreen?u.webkitRequestFullscreen():e.webkitEnterFullscreen&&e.webkitEnterFullscreen()}),u){let l;const p=()=>{a.style.opacity="1",clearTimeout(l),l=window.setTimeout(()=>{e.paused||(a.style.opacity="0")},2500)};u.addEventListener("mousemove",p),u.addEventListener("mouseenter",p),u.addEventListener("mouseleave",()=>{e.paused||(a.style.opacity="0")}),e.addEventListener("play",()=>{l=window.setTimeout(()=>{a.style.opacity="0"},2500)}),e.addEventListener("pause",()=>{a.style.opacity="1",clearTimeout(l)})}}function w(e,t=!0){const s=k("#main-content");s.style.opacity="0",s.style.transform="translateY(8px)",setTimeout(()=>{if(s.innerHTML=T[e](),G(e),window.scrollTo({top:0,behavior:"instant"}),s.style.transition="opacity 0.3s ease, transform 0.3s ease",requestAnimationFrame(()=>{s.style.opacity="1",s.style.transform="translateY(0)"}),K(),e==="contact"&&V(),e==="booking"&&(Q(),X()),e==="level1"&&P("paypal-capture-container-l1",395),e==="level2"&&P("paypal-capture-container-l2",803),_(e),t){const a=e==="home"?"/":`/${e}`;window.location.pathname!==a&&history.pushState(null,"",a)}},150)}function J(e){e.addEventListener("click",t=>{const s=t.target.closest("[data-link]");if(!s||t.metaKey||t.ctrlKey||t.shiftKey||t.button!==0)return;t.preventDefault();const a=s.getAttribute("data-link");a&&T[a]&&w(a)})}function Z(){const e=k("#main-nav");if(!e)return;const t=()=>{window.scrollY>20?e.classList.add("scrolled"):e.classList.remove("scrolled")};window.addEventListener("scroll",t,{passive:!0})}window.formspree=window.formspree||function(){(window.formspree.q=window.formspree.q||[]).push(arguments)};const ee="ATdtILYx2T5yoKB9AH86nDYMlD4bQ1PnOk_y_SOL3b42qP2E3nTfHlxL1KLFLu9w7Ao9jhTYvk4jfhEB";let C=!1;const L=[];function te(e){if(C&&window.paypal){e();return}if(L.push(e),document.getElementById("paypal-sdk"))return;const t=document.createElement("script");t.id="paypal-sdk",t.src=`https://www.paypal.com/sdk/js?client-id=${ee}&vault=true&currency=USD&components=buttons`,t.onload=()=>{C=!0,L.splice(0).forEach(s=>s())},t.onerror=()=>{document.querySelectorAll(".pp-loading").forEach(s=>{s.innerHTML='<a href="https://www.paypal.com" target="_blank" rel="noopener" class="btn btn-dark btn-block btn-large" style="margin-top:4px;">Pay via PayPal ↗</a>'})},document.head.appendChild(t)}function P(e,t){te(()=>{const s=window.paypal;if(!(s!=null&&s.Buttons))return;const a=document.getElementById(e);a&&(a.classList.remove("pp-loading"),s.Buttons({style:{shape:"rect",color:"gold",layout:"vertical",label:"buynow"},createOrder:(o,n)=>n.order.create({purchase_units:[{amount:{value:t.toFixed(2),currency_code:"USD"}}]}),onApprove:(o,n)=>n.order.capture().then(()=>{a.innerHTML=`<div style="text-align:center;padding:18px;background:rgba(62,207,142,.07);border-radius:10px;border:1px solid rgba(62,207,142,.20);"><div style="font-size:1.5rem;">✅</div><div style="font-weight:700;margin-top:6px;">Payment received!</div><div style="font-size:0.82rem;color:#888;margin-top:4px;">We'll be in touch within a few hours.</div></div>`}),onError:o=>{console.error("PayPal error",o),a.innerHTML='<div style="text-align:center;padding:12px;font-size:0.85rem;color:#c0392b;">Something went wrong. Please try again or email officialatlanticbear@gmail.com.</div>'}}).render("#"+e))})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");e.innerHTML=`
    ${F()}
    <main id="main-content" style="opacity:1; min-height:100vh;"></main>
    ${W()}
  `,J(e),Z(),window.addEventListener("message",s=>{s.data&&s.data.event==="calendly.event_scheduled"&&typeof window.fbq=="function"&&window.fbq("track","Schedule")});const t=B(window.location.pathname);w(t,!1),window.addEventListener("popstate",()=>{const s=B(window.location.pathname);w(s,!1)})});
