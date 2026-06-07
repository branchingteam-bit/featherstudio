(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const r=(e,s=document)=>s.querySelector(e),v=(e,s=document)=>[...s.querySelectorAll(e)],h=.2723,c=e=>`<span class="price-usd">≈ $${(e*h).toFixed(0)} USD</span>`,a={arrow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/></svg>',check:'<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1.5,5.5 3.8,8 8.5,2"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.69 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.69A2 2 0 0122 16.92z"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2 .27-2.98-.31-3.5c-.56-.52-1.43-.8-2.69.5z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>'},m=()=>`<span class="check-icon">${a.check}</span>`;function g(){return`
  <nav class="nav" id="main-nav">
    <a href="#" class="logo" data-link="home" id="logo-btn">
      <svg class="feather-icon" width="26" height="26" viewBox="0 0 32 32" fill="none">
        <path d="M26 4C14 4 6 14 6 22" stroke="#635BFF" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M6 22c3-3 8-5 13-3" stroke="#635BFF" stroke-width="2" stroke-linecap="round"/>
        <path d="M6 22L3 29" stroke="#635BFF" stroke-width="2" stroke-linecap="round"/>
        <path d="M26 4C24 8 21 11 18 14M18 14C15 17 12 19 9 20M18 14L16 16" stroke="#635BFF" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      Feather Studio
    </a>
    <div class="nav-links">
      <a href="#" class="nav-link" data-link="home"    id="nav-home">Home</a>
      <a href="#" class="nav-link" data-link="level1"  id="nav-l1">Level 1</a>
      <a href="#" class="nav-link" data-link="level2"  id="nav-l2">Level 2</a>
      <a href="#" class="nav-link" data-link="work"    id="nav-work">Our Work</a>
      <a href="#" class="nav-link" data-link="contact" id="nav-contact">Contact</a>
    </div>
    <div class="nav-actions">
      <a href="#" class="btn btn-secondary btn-sm" data-link="contact" id="nav-contact-cta">Contact</a>
      <a href="#" class="btn btn-primary btn-sm" data-link="level1" id="nav-start-cta">Get started ${a.arrow}</a>
    </div>
  </nav>`}function f(){return`
  <a id="whatsapp-fab" href="https://wa.me/971XXXXXXXXX" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" fill="white" width="28" height="28">${a.whatsapp}</svg>
  </a>`}function b(){return`
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="logo" data-link="home">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
              <path d="M26 4C14 4 6 14 6 22" stroke="#635BFF" stroke-width="2.2" stroke-linecap="round"/>
              <path d="M6 22c3-3 8-5 13-3" stroke="#635BFF" stroke-width="2" stroke-linecap="round"/>
              <path d="M6 22L3 29" stroke="#635BFF" stroke-width="2" stroke-linecap="round"/>
              <path d="M26 4C24 8 21 11 18 14M18 14C15 17 12 19 9 20M18 14L16 16" stroke="#635BFF" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            Feather Studio
          </a>
          <p>Professional websites for businesses across the UAE.</p>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <div class="footer-links">
            <a href="#" data-link="home">Home</a>
            <a href="#" data-link="level1">Level 1</a>
            <a href="#" data-link="level2">Level 2</a>
            <a href="#" data-link="work">Our Work</a>
            <a href="#" data-link="contact">Contact</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-links">
            <a href="https://wa.me/971XXXXXXXXX" target="_blank">WhatsApp</a>
            <a href="mailto:hello@featherstudio.ae">hello@featherstudio.ae</a>
            <a href="#">Dubai, UAE</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Feather Studio. All rights reserved.</span>
        <span>Dubai, UAE</span>
      </div>
    </div>
  </footer>`}function w(){return`
  <!-- HERO -->
  <section class="hero">
    <div class="container">
      <div class="hero-eyebrow" style="background: rgba(2, 62, 138, 0.08); border-color: rgba(2, 62, 138, 0.2); color: var(--indigo);">Based in UAE · High-Performance Websites</div>
      <h1>Your website,<br>done right.</h1>
      <p class="hero-sub">
        We design, build, and launch custom websites for UAE businesses. Clean layouts, ultra-fast speeds, and built to grow your brand.
      </p>
      <div class="hero-ctas">
        <a href="#" class="btn btn-primary btn-large" data-link="level1" id="hero-cta-start" style="background: var(--indigo);">
          Start a project ${a.arrow}
        </a>
        <a href="#" class="btn btn-secondary btn-large" data-link="work" id="hero-cta-work">
          See our work
        </a>
      </div>
      <p class="hero-note">Not sure which plan? <a href="#" data-link="contact" style="color: var(--indigo);">Talk to us</a></p>
    </div>
  </section>

  <!-- BUSINESS FACTS STRIP -->
  <div class="stats-row" style="background: var(--white); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 48px 0;">
    <div class="container">
      <div class="stats-grid" style="grid-template-columns: repeat(4, 1fr);">
        <div class="stat-item" style="border-right: 1px solid var(--border); text-align: left; padding: 12px 24px;">
          <div class="stat-num" style="color: var(--indigo); font-size: 1.6rem; margin-bottom: 4px;">Under 3 Days</div>
          <div class="stat-label" style="color: rgba(0,0,0,0.65); font-weight: 600;">Live in under 3 days</div>
        </div>
        <div class="stat-item" style="border-right: 1px solid var(--border); text-align: left; padding: 12px 24px;">
          <div class="stat-num" style="color: var(--indigo-dark); font-size: 1.6rem; margin-bottom: 4px;">100% Mobile</div>
          <div class="stat-label" style="color: rgba(0,0,0,0.65); font-weight: 600;">Mobile responsive layout</div>
        </div>
        <div class="stat-item" style="border-right: 1px solid var(--border); text-align: left; padding: 12px 24px;">
          <div class="stat-num" style="color: var(--red); font-size: 1.6rem; margin-bottom: 4px;">Fully Custom</div>
          <div class="stat-label" style="color: rgba(0,0,0,0.65); font-weight: 600;">Custom design, no templates</div>
        </div>
        <div class="stat-item" style="border-right: none; text-align: left; padding: 12px 24px;">
          <div class="stat-num" style="color: var(--indigo); font-size: 1.6rem; margin-bottom: 4px;">3+ Years</div>
          <div class="stat-label" style="color: rgba(0,0,0,0.65); font-weight: 600;">Website building experience</div>
        </div>
      </div>
    </div>
  </div>

  <!-- THE PROBLEM SECTION -->
  <section class="problem-section">
    <div class="container">
      <h2 class="problem-headline">
        Every day without a website is a customer you <span class="text-red">didn't know you lost</span>.
      </h2>
      <div class="problem-grid">
        <div class="problem-card">
          <h3 class="text-dark-blue">They searched. They didn't find you.</h3>
          <p>
            Most people look up a business online before they visit or call. If nothing comes up — or what comes up looks bad — they move on. Simple as that.
          </p>
        </div>
        <div class="problem-card">
          <h3 class="text-red">Your competitor got the client. Not you.</h3>
          <p>
            When two similar businesses show up online and one has a clean professional website, the choice is obvious. Customers always go with whoever looks more trustworthy.
          </p>
        </div>
        <div class="problem-card">
          <h3 class="text-blue">You don't have time to deal with this.</h3>
          <p>
            You're running a business. Building a website, figuring out hosting, dealing with technical problems — that's not why you got into this. It shouldn't be your problem.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- THE FACTS SECTION -->
  <section class="facts-section">
    <div class="container">
      <h2 class="facts-headline">The numbers don't lie.</h2>
      <div class="facts-grid">
        <div class="fact-card accent-red">
          <div class="fact-number">81%</div>
          <div class="fact-desc">Of customers research a business online before making a purchase or booking</div>
        </div>
        <div class="fact-card">
          <div class="fact-number">75%</div>
          <div class="fact-desc">Of people judge a company's credibility based on their website design alone</div>
        </div>
        <div class="fact-card accent-dark">
          <div class="fact-number">57%</div>
          <div class="fact-desc">Of internet users say they won't recommend a business with a poorly designed website</div>
        </div>
        <div class="fact-card">
          <div class="fact-number">2x</div>
          <div class="fact-desc">Faster growth for businesses with a professional website compared to those without</div>
        </div>
        <div class="fact-card accent-dark">
          <div class="fact-number">40%</div>
          <div class="fact-desc">Of Google Business Profile score depends on your website — directly affecting Maps ranking</div>
        </div>
      </div>
    </div>
  </section>

  <!-- TOOLS WE USE SECTION -->
  <section class="tools-section">
    <div class="container">
      <div class="tools-header">
        <h2 class="text-dark-blue">The Tech Behind the Speed</h2>
        <p>We build using cutting-edge tools to deliver beautiful interfaces backed by robust, clean code.</p>
      </div>
      <div class="tools-grid">
        <div class="tool-card">
          <div class="tool-info">
            <h3 class="text-blue">Stitch</h3>
            <p>Stitch is used to build the responsive layout, design, and user interfaces, ensuring a premium visual presentation before any code is generated.</p>
          </div>
          <div class="tool-img-wrap">
            <img class="tool-img" src="/pictures for wesbite/Screenshot 2026-06-07 at 4.50.32 PM.png" alt="Stitch Interface" />
          </div>
        </div>
        <div class="tool-card">
          <div class="tool-info">
            <h3 class="text-red">Google Antigravity</h3>
            <p>Google Antigravity generates clean, production-ready TypeScript and CSS code, optimizing the site for extreme speed, SEO compatibility, and responsiveness.</p>
          </div>
          <div class="tool-img-wrap">
            <img class="tool-img" src="/pictures for wesbite/Screenshot 2026-06-07 at 4.48.42 PM.png" alt="Antigravity IDE" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SIMPLIFIED TIER TEASERS SECTION -->
  <section class="teasers-section">
    <div class="container">
      <div class="teasers-header">
        <h2>Choose Your Tier</h2>
        <p>Two plans designed to build your online presence. Click below to explore the details of each tier.</p>
      </div>
      <div class="teasers-grid">
        <div class="teaser-card">
          <span class="teaser-badge">Level 1</span>
          <h3 class="text-blue">Small Business</h3>
          <p>Clean, ultra-fast websites for kiosks, cafés, salons, and local retail shops. Built to capture quick customer leads via WhatsApp and phone.</p>
          <a href="#" class="teaser-btn" data-link="level1">
            Explore Level 1 ${a.arrow}
          </a>
        </div>
        <div class="teaser-card">
          <span class="teaser-badge" style="color: var(--indigo-dark); border-color: rgba(3, 4, 94, 0.2);">Level 2</span>
          <h3 class="text-dark-blue">Professional</h3>
          <p>Feature-rich custom websites for clinics, dental practices, law firms, and consultants. Includes online appointment booking, team bios, and local SEO.</p>
          <a href="#" class="teaser-btn" data-link="level2" style="color: var(--indigo-dark);">
            Explore Level 2 ${a.arrow}
          </a>
        </div>
      </div>
    </div>
  </section>
  `}function l(e){return`
  <div class="pricing-card${e.managed?" managed":""}">
    ${e.managed?'<div class="managed-badge">Recommended</div>':""}
    <div class="pricing-card-top">
      <div class="plan-label">${e.label}</div>
      ${e.setupFee?`
        <div class="price-setup-note">Setup: <strong>${e.setupFee}</strong> ${e.setupAed?c(e.setupAed):""}</div>
      `:""}
      <div class="price-display">
        <span class="price-big">${e.price}</span>
        ${e.period?`<span class="price-period">${e.period}</span>`:""}
      </div>
      ${e.setupFee,c(e.priceAed)}
      <p class="plan-desc">${e.desc}</p>
    </div>
    <div class="pricing-card-cta">
      <a href="#" class="btn btn-primary btn-block btn-large" data-link="contact" id="${e.ctaId}">
        Get started ${a.arrow}
      </a>
      ${e.note?`<p style="font-size:0.75rem; color:var(--text-muted); margin-top:10px; text-align:center;">${e.note}</p>`:""}
    </div>
    <div class="pricing-card-features">
      <div class="features-label">What's included</div>
      ${e.features.map(s=>`<div class="feature-row">${m()}<span>${s}</span></div>`).join("")}
      ${e.managed?`
        <div class="no-contract-note">
          <strong>No lock-in contracts</strong>
          Minimum 3 months. Cancel anytime after that — we hand over all files cleanly.
        </div>
      `:""}
    </div>
  </div>`}function y(){return`
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
        ${l({label:"One-Time",price:"AED 1,450",priceAed:1450,desc:"Pay once, own your website forever. You get all files, the domain, and full control. No recurring fees.",features:["Fully custom-designed website","Up to 5 pages included","Mobile responsive layout","Basic SEO setup","WhatsApp contact button","Contact form","Handoff within 7–14 days","Source files included"],ctaId:"l1-ot-cta",note:"Includes one round of revisions. Additional pages at AED 150/page."})}
        ${l({label:"Managed Plan",price:"AED 150",priceAed:150,period:"/month",setupFee:"AED 500",setupAed:500,desc:"We build it, manage it, and keep it running. You focus on your business — we handle everything online.",features:["Full custom design and build","Up to 5 pages included","Domain and hosting managed by us","WhatsApp and contact form included","Mobile responsive layout","Basic SEO optimisation","Monthly content updates (1 round)","Priority support via WhatsApp"],ctaId:"l1-managed-cta",managed:!0})}
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
        ${[{icon:a.palette,title:"Custom Design",desc:"No templates. Every site is built from scratch to match your brand, colours, and vibe."},{icon:a.zap,title:"Fast Delivery",desc:"Your site is live within 7–14 business days from when we agree on the brief."},{icon:a.globe,title:"Mobile First",desc:"Looks great on phones, tablets, and desktops. Most of your visitors are on mobile."},{icon:a.shield,title:"SEO Ready",desc:"Proper page titles, meta descriptions, and structured code so Google can find you."},{icon:a.phone,title:"WhatsApp Button",desc:"A tap-to-chat WhatsApp button on every page — the easiest way to get leads in the UAE."},{icon:a.wrench,title:"Low Maintenance",desc:"Clean builds that just work. Perfect for business owners who want to focus on running their business."}].map(e=>`<div class="feature-item reveal">
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
        ${[{q:"Who is Level 1 for?",a:"Kiosks, cafes, retail shops, salons, small workshops — any business that wants a professional online presence without a large budget."},{q:"Do I own the website after the one-time purchase?",a:"Yes, completely. We hand over all the files and you can host it wherever you want. We're also happy to help with hosting setup at no extra cost."},{q:"What do I need to provide?",a:"Your logo (or we'll suggest options), photos of your business or products, and a short description of what you do. We'll handle the rest."},{q:"Can I upgrade to Level 2 later?",a:"Absolutely. If your business grows and you need more features, we can rebuild or expand your site. Previous payments are credited where applicable."}].map(e=>`<div class="faq-item"><h3>${e.q}</h3><p>${e.a}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Start with Level 1</h2>
      <p>A website your customers will trust, at a price that makes sense.</p>
      <div class="cta-ctas">
        <a href="#" class="btn btn-primary btn-large" data-link="contact" id="l1-footer-cta">
          Talk to us ${a.arrow}
        </a>
        <a href="https://wa.me/971XXXXXXXXX" target="_blank" class="btn btn-wa btn-large">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">${a.whatsapp}</svg>
          WhatsApp us
        </a>
      </div>
    </div>
  </section>`}function k(){return`
  <!-- PAGE HEADER -->
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="section-label">Level 2 · Professional</div>
      <h1>Websites built for serious businesses</h1>
      <p>For clinics, dental practices, law firms, and professional services that
      need a website that earns trust and drives appointments.</p>
    </div>
  </div>

  <!-- PRICING -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header centered reveal">
        <div class="section-label">Pricing</div>
        <h2 class="section-title">Choose your plan</h2>
        <p class="section-sub">Both plans include everything you need. The managed plan is our most popular — we handle it all.</p>
      </div>
      <div class="pricing-cards-row reveal">
        ${l({label:"One-Time",price:"AED 2,950",priceAed:2950,desc:"Pay once and own a full professional website. Ideal for established businesses who want complete control.",features:["Fully custom professional design","Up to 10 pages included","Appointment / booking section","Team and credentials profiles","Services and treatment layouts","Testimonials and trust badges","Advanced local SEO configuration","WhatsApp and Google Maps setup","Source files handover"],ctaId:"l2-ot-cta",note:"Includes two rounds of revisions. Additional pages at AED 200/page."})}
        ${l({label:"Managed Plan",price:"AED 365",priceAed:365,period:"/month",setupFee:"AED 1,400",setupAed:1400,desc:"Full-service management. We design, build, host, and maintain your site so you can focus entirely on your patients or clients.",features:["Full custom professional design and setup","Up to 10 pages built for conversion","Domain renewal and professional management","Secure cloud hosting and daily backups","SSL monitoring and active protection","Advanced local SEO and Google profile setup","Unlimited ongoing content updates","2 seasonal campaigns per year","Priority WhatsApp support"],ctaId:"l2-managed-cta",managed:!0})}
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
            ${[["Pages included","Up to 5","Up to 10"],["Custom design","✓","✓"],["Mobile responsive","✓","✓"],["WhatsApp button","✓","✓"],["Basic SEO","✓","✓"],["Advanced SEO + Google setup","—","✓"],["Booking / appointment section","—","✓"],["Team and credentials page","—","✓"],["Testimonials section","—","✓"],["Google Maps integration","—","✓"],["Starting price (one-time)","AED 1,450","AED 2,950"],["Managed plan from","AED 150/mo","AED 365/mo"]].map(([e,s,t])=>`<tr>
                <td>${e}</td>
                <td>${s}</td>
                <td class="hl">${t}</td>
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
        ${[{icon:a.palette,title:"Premium Design",desc:"Custom layouts that communicate expertise and build trust with every visitor."},{icon:a.rocket,title:"Conversion Focused",desc:"Built to turn visitors into appointments, calls, or enquiries."},{icon:a.globe,title:"Advanced SEO",desc:"Full local SEO setup including Google Business Profile configuration."},{icon:a.shield,title:"Secure Hosting",desc:"SSL certificates, daily backups, and active uptime monitoring included."},{icon:a.phone,title:"Booking Integration",desc:"Appointment sections and scheduling flows built directly into your site."},{icon:a.code,title:"Ongoing Updates",desc:"Managed plan clients get unlimited content updates — add treatments, update team bios, change pricing."}].map(e=>`<div class="feature-item reveal">
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
        ${[{q:"Who is Level 2 for?",a:"Clinics, dental practices, law firms, consultants, and established businesses that need a website that actively earns trust and drives appointments."},{q:"What's included in the managed plan?",a:"Everything — design, build, hosting, SSL, domain, monthly updates, seasonal campaigns, and priority WhatsApp support. You do nothing, we handle it all."},{q:"Can I request changes after launch?",a:"Yes. Managed plan clients get unlimited ongoing updates. One-time clients can purchase update packages or request changes at our standard rate."},{q:"How long does it take?",a:"Typically 14–21 business days from brief sign-off, depending on how quickly we receive your content."}].map(e=>`<div class="faq-item"><h3>${e.q}</h3><p>${e.a}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Build your professional site</h2>
      <p>Your clients are searching online right now. Make sure they find something impressive.</p>
      <div class="cta-ctas">
        <a href="#" class="btn btn-primary btn-large" data-link="contact" id="l2-footer-cta">
          Talk to us ${a.arrow}
        </a>
        <a href="https://wa.me/971XXXXXXXXX" target="_blank" class="btn btn-wa btn-large">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">${a.whatsapp}</svg>
          WhatsApp us
        </a>
      </div>
    </div>
  </section>`}function x(){const e=[{tag:"Level 1 · Kiosk",title:"Bites & Brews",meta:"Food & Beverage · Dubai",desc:'"We went from no online presence at all to having customers find us on Google. The WhatsApp button alone brought us new walk-ins within the first week."',url:"bitesandbrews.ae",demoClass:"kiosk"},{tag:"Level 2 · Clinic",title:"Pearl Dental",meta:"Dental Practice · Abu Dhabi",desc:'"Patients tell us our website looks more professional than clinics open for 10+ years. Feather Studio completely changed how we present ourselves."',url:"pearldental.ae",demoClass:"dental",alt:!0},{tag:"Level 2 · Studio",title:"Aura Aesthetics",meta:"Beauty & Wellness · Sharjah",desc:'"Our bookings doubled in the first month after launching. The site looks luxurious — it matches exactly the feeling we want clients to have before they walk in."',url:"aura-aesthetics.ae",demoClass:"aesthetics"},{tag:"Level 1 · Wellness",title:"Bloom Women's Health",meta:"Women's Wellness · Dubai",desc:'"We needed something warm and trustworthy. Feather understood our audience immediately — the result feels like us, just professional."',url:"bloomwomens.ae",demoClass:"womens",alt:!0}],s={kiosk:`
      <div class="demo-site" style="background:#FFFAF5;">
        <div class="demo-nav" style="background:#fff; border-bottom:1px solid #f0e8dc;">
          <span style="font-size:0.75rem; font-weight:800; color:#F4A261; letter-spacing:-0.02em;">Bites & Brews</span>
          <div class="demo-navlinks">
            <a href="#" style="font-size:0.60rem; color:#555; font-weight:500;">Menu</a>
            <a href="#" style="font-size:0.60rem; color:#555; font-weight:500;">About</a>
            <a href="#" style="font-size:0.60rem; background:#F4A261; color:#fff; padding:4px 10px; border-radius:100px; font-weight:700;">Order Now</a>
          </div>
        </div>
        <div class="demo-hero" style="background:linear-gradient(135deg, #FFFAF5 0%, #FFF2E0 100%);">
          <div class="demo-eyebrow" style="color:#E07E3A;">Dubai Marina · Open Daily 8am–10pm</div>
          <div class="demo-h1" style="color:#1a1a1a;">Coffee that<br>hits different.</div>
          <div class="demo-sub" style="color:#666;">Fresh brews, artisan snacks, and a vibe that keeps you coming back.</div>
          <div class="demo-btn" style="background:#F4A261; color:#fff;">Browse Menu →</div>
        </div>
        <div style="padding:22px; display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          ${[["☕","Oat Flat White","AED 22"],["🥐","Almond Croissant","AED 16"],["🍋","Lemonade Cooler","AED 18"],["🥑","Avo Toast","AED 28"]].map(([t,o,i])=>`<div style="background:#fff; border:1px solid #f0e8dc; border-radius:8px; padding:10px 12px;"><div style="font-size:1rem; margin-bottom:4px;">${t}</div><div style="font-size:0.62rem; font-weight:700; color:#1a1a1a;">${o}</div><div style="font-size:0.58rem; color:#E07E3A; font-weight:700; margin-top:2px;">${i}</div></div>`).join("")}
        </div>
      </div>`,dental:`
      <div class="demo-site dental">
        <div class="demo-nav dental-nav" style="background:rgba(255,255,255,.05);">
          <span class="dental-logo">PEARL DENTAL</span>
          <div style="display:flex; gap:10px;">
            <a href="#" style="font-size:0.60rem; color:rgba(255,255,255,.6); font-weight:500;">Services</a>
            <a href="#" style="font-size:0.60rem; color:rgba(255,255,255,.6); font-weight:500;">Team</a>
            <a href="#" style="background:#C9A96E; color:#fff; padding:4px 12px; border-radius:100px; font-size:0.60rem; font-weight:700;">Book Now</a>
          </div>
        </div>
        <div class="demo-hero" style="padding:32px 20px 28px;">
          <div class="demo-eyebrow dental-eyebrow">Abu Dhabi · Est. 2018</div>
          <div class="demo-h1 dental-h1">Expert dental care<br>you can smile about.</div>
          <div class="demo-sub dental-sub">Comprehensive dental services by specialists dedicated to your comfort.</div>
          <span class="demo-btn dental-btn">Book Appointment →</span>
        </div>
        <div style="background:#F5F3EE; padding:20px;">
          <div style="font-size:0.54rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:#8B7355; margin-bottom:8px;">Our Services</div>
          <div style="font-size:1.05rem; font-weight:800; color:#1a1a1a; margin-bottom:12px;">Comprehensive care</div>
          <div class="dental-services-layout">
            <div class="dental-service-card-large"><strong>Cosmetic Dentistry</strong><p>Veneers, whitening, smile design.</p><div class="dental-service-arrow">→</div></div>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <div class="dental-service-card-sm"><strong>Orthodontics</strong><p>Invisalign & braces</p></div>
              <div class="dental-service-card-sm"><strong>Implants</strong><p>Permanent solutions</p></div>
            </div>
            <div style="display:flex; flex-direction:column; gap:8px;">
              <div class="dental-service-card-sm"><strong>General Dentistry</strong><p>Checkups & cleaning</p></div>
              <div class="dental-service-card-sm"><strong>Pediatric</strong><p>Kids' dental care</p></div>
            </div>
          </div>
        </div>
      </div>`,aesthetics:`
      <div class="demo-site aesthetics">
        <div class="aesthetics-nav">
          <span class="aesthetics-logo">AURA</span>
          <div class="aesthetics-links">
            <a href="#">Treatments</a>
            <a href="#">About</a>
            <a href="#" style="background:rgba(167,139,250,.15); color:#a78bfa; padding:4px 12px; border-radius:100px; font-size:0.60rem; font-weight:700;">Book →</a>
          </div>
        </div>
        <div class="aesthetics-hero">
          <span class="aesthetics-eyebrow">Luxury Aesthetics · Sharjah</span>
          <div class="aesthetics-h1">Where beauty<br>meets science.</div>
          <div class="aesthetics-sub">Premium aesthetic treatments by certified specialists.</div>
          <span class="aesthetics-btn">Explore treatments</span>
        </div>
        <div style="background:rgba(255,255,255,.03); padding:20px;">
          <div style="font-size:0.54rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:#a78bfa; margin-bottom:6px;">Our Treatments</div>
          <div style="font-size:1rem; font-weight:800; color:#fff; margin-bottom:12px;">Curated for you</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            ${[["Laser Therapy","Advanced skin renewal"],["Hydrafacial","Deep hydration"],["Botox & Fillers","Natural results"],["Body Contouring","Sculpt & tone"]].map(([t,o])=>`<div class="aesthetics-card" style="padding:10px 12px; border-radius:8px;"><strong style="font-size:0.63rem; display:block; margin-bottom:3px; color:#fff;">${t}</strong><p style="font-size:0.56rem; color:rgba(255,255,255,.55);">${o}</p></div>`).join("")}
          </div>
        </div>
      </div>`,womens:`
      <div class="demo-site womens">
        <div class="womens-nav">
          <span class="womens-logo">🌸 Bloom Wellness</span>
          <div class="womens-links">
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#" style="background:#8B4A62; color:#fff; padding:4px 10px; border-radius:100px; font-size:0.58rem; font-weight:700;">Book</a>
          </div>
        </div>
        <div class="womens-hero">
          <div style="flex:1;">
            <span class="womens-eyebrow">Women's Health · Dubai</span>
            <div class="womens-h1">Wellness that<br>feels like you.</div>
            <div style="font-size:0.63rem; color:#7a506b; line-height:1.5; margin-bottom:14px;">Holistic women's health services in a warm, welcoming space.</div>
            <span class="womens-btn">Book a session →</span>
          </div>
          <div class="womens-hero-deco">
            <div class="womens-deco-circle c1"></div>
            <div class="womens-deco-circle c2"></div>
            <div class="womens-deco-circle c3"></div>
          </div>
        </div>
        <div style="background:#FFF4F0; padding:20px; display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          ${[["Prenatal Wellness","Gentle & expert"],["Hormonal Health","Balanced & thriving"],["Nutrition Coaching","Fueled from within"],["Mental Wellness","Mind & body"]].map(([t,o])=>`<div class="womens-card" style="padding:10px 12px; border-radius:8px;"><div class="womens-service-dot"></div><strong style="font-size:0.63rem; display:block; margin-bottom:3px; color:#3d2030;">${t}</strong><p style="font-size:0.56rem; color:#7a506b;">${o}</p></div>`).join("")}
        </div>
      </div>`};return`
  <div class="page-header" style="border-bottom:1px solid var(--border);">
    <div class="container">
      <div class="section-label">Portfolio</div>
      <h1>Our Work</h1>
      <p>A selection of websites we've built for businesses across the UAE.</p>
    </div>
  </div>

  <div class="showcase-outer">
    <div class="container">
      ${e.map(t=>`
        <div class="showcase-item${t.alt?" alt":""} reveal">
          <div class="showcase-label">
            <span class="showcase-tag">${t.tag}</span>
            <h2>${t.title}</h2>
            <div class="showcase-meta">${t.meta}</div>
            <p class="showcase-desc">${t.desc}</p>
            <a href="https://wa.me/971XXXXXXXXX" target="_blank" class="showcase-cta">
              Build something like this ${a.arrow}
            </a>
          </div>
          <div class="showcase-frame-wrap">
            <div class="browser-chrome">
              <div class="browser-bar">
                <div class="browser-dot red"></div>
                <div class="browser-dot yellow"></div>
                <div class="browser-dot green"></div>
                <div class="browser-url">${t.url}</div>
              </div>
              <div class="browser-body">
                ${s[t.demoClass]||""}
              </div>
            </div>
          </div>
        </div>`).join("")}
    </div>
  </div>

  <section class="cta-section">
    <div class="container">
      <h2>Want a site like these?</h2>
      <p>Let's talk about what you need and which plan is the right fit.</p>
      <div class="cta-ctas">
        <a href="#" class="btn btn-primary btn-large" data-link="contact" id="work-cta">
          Get in touch ${a.arrow}
        </a>
        <a href="https://wa.me/971XXXXXXXXX" target="_blank" class="btn btn-wa btn-large">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">${a.whatsapp}</svg>
          WhatsApp us
        </a>
      </div>
    </div>
  </section>`}function A(){return`
  <div class="page-header" style="border-bottom:1px solid var(--border); text-align:left; padding-bottom:0;">
    <div class="container">
      <div class="section-pad">
        <div class="contact-wrap">
          <div class="contact-info reveal">
            <div class="section-label">Contact</div>
            <h1>Let's build<br>something.</h1>
            <p>Tell us about your business or just ask anything. We respond fast — usually within a few hours.</p>
            <div class="contact-methods">
              <a href="https://wa.me/971XXXXXXXXX" target="_blank" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(37,211,102,.08); color:var(--whatsapp);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">${a.whatsapp}</svg>
                </div>
                <div>
                  <div class="contact-method-label">WhatsApp</div>
                  <div class="contact-method-value">+971 XX XXX XXXX</div>
                </div>
              </a>
              <a href="mailto:hello@featherstudio.ae" class="contact-method">
                <div class="contact-method-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${a.mail}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Email</div>
                  <div class="contact-method-value">hello@featherstudio.ae</div>
                </div>
              </a>
              <div class="contact-method">
                <div class="contact-method-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${a.map}</svg>
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
            <form class="enquiry-form" id="contact-form" action="https://formspree.io/f/xwkgjkgw" method="POST">
              <input class="form-input" id="form-name" name="name" type="text" placeholder="Your name" required />
              <input class="form-input" id="form-email" name="email" type="email" placeholder="Email address" required />
              <input class="form-input" id="form-business" name="business" type="text" placeholder="Business name" />
              <select class="form-input" id="form-tier" name="tier">
                <option value="">Which plan are you interested in?</option>
                <option value="l1">Level 1 — Small Business</option>
                <option value="l2">Level 2 — Professional</option>
                <option value="unsure">Not sure yet</option>
              </select>
              <textarea class="form-input form-textarea" id="form-message" name="message" placeholder="Tell us about your business and what you need..." required></textarea>
              <button type="submit" class="btn btn-primary btn-block btn-large" id="form-submit-btn">
                Send message ${a.arrow}
              </button>
              <div id="form-success" style="display:none; text-align:center; padding:18px; background:rgba(62,207,142,.07); border-radius:var(--r-md); border:1px solid rgba(62,207,142,.20);">
                <div style="font-size:1.2rem; margin-bottom:4px;">✅</div>
                <div style="font-size:0.9rem; font-weight:700; color:var(--navy);">Message sent!</div>
                <div style="font-size:0.82rem; color:var(--text-dim); margin-top:4px;">We'll get back to you within a few hours.</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`}const p={home:w,level1:y,level2:k,work:x,contact:A};function E(e){v("[data-link]").forEach(t=>t.classList.remove("active"));const s=r(`[data-link="${e}"].nav-link`);s&&s.classList.add("active")}function $(){const e=v(".reveal"),s=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(o.target.classList.add("revealed"),s.unobserve(o.target))})},{threshold:.07,rootMargin:"0px 0px -30px 0px"});e.forEach(t=>s.observe(t))}function F(){const e=r("#contact-form"),s=r("#form-submit-btn"),t=r("#form-success");!e||!s||!t||e.addEventListener("submit",o=>{o.preventDefault();const i=new FormData(e);fetch(e.action,{method:"POST",body:i,headers:{Accept:"application/json"}}).then(()=>{s.style.display="none",t.style.display="block"}).catch(()=>{s.style.display="none",t.style.display="block"})})}function u(e){const s=r("#main-content");s.style.opacity="0",s.style.transform="translateY(8px)",setTimeout(()=>{s.innerHTML=p[e](),E(e),window.scrollTo({top:0,behavior:"instant"}),s.style.transition="opacity 0.3s ease, transform 0.3s ease",requestAnimationFrame(()=>{s.style.opacity="1",s.style.transform="translateY(0)"}),$(),e==="contact"&&F()},150)}function C(e){e.addEventListener("click",s=>{const t=s.target.closest("[data-link]");if(!t)return;s.preventDefault();const o=t.getAttribute("data-link");o&&p[o]&&u(o)})}function S(){const e=r("#main-nav");if(!e)return;const s=()=>{window.scrollY>20?e.classList.add("scrolled"):e.classList.remove("scrolled")};window.addEventListener("scroll",s,{passive:!0})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");e.innerHTML=`
    ${g()}
    <main id="main-content" style="opacity:1; min-height:100vh;"></main>
    ${b()}
    ${f()}
  `,C(e),S(),u("home")});
