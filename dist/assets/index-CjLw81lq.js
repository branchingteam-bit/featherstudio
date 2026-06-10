(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const d=(e,t=document)=>t.querySelector(e),v=(e,t=document)=>[...t.querySelectorAll(e)],f=.2723,c=e=>`<span class="price-usd">approx. $${(e*f).toFixed(0)} USD</span>`,a={arrow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/></svg>',check:'<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1.5,5.5 3.8,8 8.5,2"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.69 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.69A2 2 0 0122 16.92z"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2 .27-2.98-.31-3.5c-.56-.52-1.43-.8-2.69.5z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'},g=()=>`<span class="check-icon">${a.check}</span>`;function b(){return`
  <nav class="nav" id="main-nav">
    <a href="#" class="logo" data-link="home" id="logo-btn" style="display: flex; align-items: center; gap: 8px;">
      <img src="/feather-dark.png" alt="Feather Studio Logo" style="height: 26px; width: auto;" />
      Feather Studio
    </a>
    <div class="nav-links">
      <a href="#" class="nav-link" data-link="home"    id="nav-home">Home</a>
      <a href="#" class="nav-link" data-link="level1"  id="nav-l1">Level 1</a>
      <a href="#" class="nav-link" data-link="level2"  id="nav-l2">Level 2</a>
      <a href="#" class="nav-link" data-link="contact" id="nav-contact">Contact</a>
    </div>
    <div class="nav-actions">
      <a href="#" class="btn btn-secondary btn-sm" data-link="contact" id="nav-contact-cta">Contact</a>
      <a href="#" class="btn btn-dark btn-sm" data-link="level2" id="nav-start-cta">Get started ${a.arrow}</a>
    </div>
  </nav>`}function y(){return`
  <a id="whatsapp-fab" href="https://wa.me/971504668481" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" fill="white" width="28" height="28">${a.whatsapp}</svg>
  </a>`}function w(){return`
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="logo" data-link="home" style="display: flex; align-items: center; gap: 8px;">
            <img src="/feather-light.png" alt="Feather Studio Logo" style="height: 20px; width: auto;" />
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
            <a href="#" data-link="contact">Contact</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-links">
            <a href="https://wa.me/971504668481" target="_blank">WhatsApp</a>
            <a href="mailto:hellofeatherstudio.co">hellofeatherstudio.co</a>
            <a href="https://www.instagram.com/featherstudio.co" target="_blank">@featherstudio.co</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Feather Studio. All rights reserved.</span>
        <span>Dubai, UAE</span>
      </div>
    </div>
  </footer>`}function k(){const e=[{num:"3 Days",desc:"From kick-off to live"},{num:"100%",desc:"Mobile responsive"},{num:"Fully Custom",desc:"No templates, ever"},{num:"3+ Years",desc:"Building in the UAE"},{num:"81%",desc:"Of customers research online first"},{num:"SEO Ready",desc:"Google-optimised from day one"}],t=()=>e.map(o=>`<span class="marquee-badge"><span class="marquee-num">${o.num}</span><span class="marquee-desc">${o.desc}</span></span><span class="marquee-sep">·</span>`).join(""),i=t()+t()+t()+t();return`
  <!-- HERO -->
  <section class="hero">
    <div class="container">
      <h1>Your business deserves<br>to be found.</h1>
      <p class="hero-sub">
        We design, build, and launch custom websites for UAE businesses. Clean layouts, ultra-fast speeds, built to grow your brand.
      </p>
      <div class="hero-ctas">
        <a href="#" class="btn btn-dark btn-large" data-link="level2" id="hero-cta-start">
          Start a project ${a.arrow}
        </a>
        <a href="#" class="btn btn-secondary btn-large" data-link="contact" id="hero-cta-work">
          Talk to us
        </a>
      </div>
      <p class="hero-note">Not sure which plan? <a href="#" data-link="contact">Contact us</a></p>
    </div>
  </section>

  <!-- MARQUEE BELT -->
  <div class="marquee-belt">
    <div class="marquee-track">
      <div class="marquee-inner" aria-hidden="true">
        ${i}
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
        Every day without a website is a customer you <span class="text-red">didn't know you lost</span>.
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
          <p>We use Stitch to design the website layout and user interface from scratch. This guarantees a bespoke, modern aesthetic designed specifically for your brand before any code is generated.</p>
        </div>
        <div class="tool-large-img-wrap">
          <img class="tool-large-img" src="/screenshots/stitch.png" alt="Stitch Interface" />
        </div>
      </div>
      
      <!-- Antigravity Row -->
      <div class="tool-showcase-row alt">
        <div class="tool-large-img-wrap">
          <img class="tool-large-img" src="/screenshots/antigravity.png" alt="Antigravity IDE" />
        </div>
        <div class="tool-text-content">
          <h3>Google Antigravity</h3>
          <p>We use Google Antigravity to write and optimize clean, production-ready code. This ensures your website loads instantly, operates securely, and functions perfectly on all mobile devices.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TIER TEASERS SECTION -->
  <section class="teasers-section">
    <div class="container">
      <div class="teasers-header">
        <h2>Choose Your Level</h2>
        <p>Two tiers. Built for different needs. Both built to win.</p>
      </div>
      <div class="teasers-grid">
        <div class="teaser-card level-one-card">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">01</span>
            <span class="teaser-level-name">Level One</span>
          </div>
          <h3>Small Business</h3>
          <p>Clean, ultra-fast websites for kiosks, cafes, salons, and local retail shops. Built to capture quick customer leads via WhatsApp and phone.</p>
          <a href="#" class="teaser-btn teaser-btn-dark" data-link="level1">
            Explore Level 1 ${a.arrow}
          </a>
        </div>
        <div class="teaser-card level-two-card">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">02</span>
            <span class="teaser-level-name">Level Two</span>
          </div>
          <h3>Professional</h3>
          <p>Feature-rich custom websites for clinics, dental practices, law firms, and consultants. Built with team bios, service layouts, and solid local SEO to help your business stand out.</p>
          <a href="#" class="teaser-btn teaser-btn-outline" data-link="level2">
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
      ${e.paypalHtml?e.paypalHtml:`<a href="#" class="btn btn-dark btn-block btn-large" data-link="contact" id="${e.ctaId}">Get started ${a.arrow}</a>`}
      ${e.note?`<p style="font-size:0.75rem; color:var(--text-muted); margin-top:10px; text-align:center;">${e.note}</p>`:""}
    </div>
    <div class="pricing-card-features">
      <div class="features-label">What's included</div>
      ${e.features.map(t=>`<div class="feature-row">${g()}<span>${t}</span></div>`).join("")}
      ${e.managed?`
        <div class="no-contract-note">
          <strong>No lock-in contracts</strong>
          Minimum 3 months. Cancel anytime after that, we hand over all files cleanly.
        </div>
      `:""}
    </div>
  </div>`}function A(){return`
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
        ${l({label:"One-Time",price:"AED 1,450",priceAed:1450,desc:"Pay once, own your website forever. You get all files, the domain, and full control. No recurring fees.",features:["Fully custom-designed website","Up to 5 pages included","Mobile responsive layout","Basic SEO setup","WhatsApp contact button","Contact form","Handoff within 7 to 14 days","Source files included"],ctaId:"l1-ot-cta",note:"Includes one round of revisions. Additional pages at AED 150/page.",paypalHtml:`<div class="paypal-btn-wrap">
  <style>.pp-PHGU6FSSWW8BN{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}</style>
  <form action="https://www.paypal.com/ncp/payment/PHGU6FSSWW8BN" method="get" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;width:100%;">
    <input class="pp-PHGU6FSSWW8BN" type="submit" value="Buy Now — AED 1,450" style="width:100%;" />
    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
    <section style="font-size: 0.75rem;"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
  </form>
</div>`})}
        ${l({label:"Managed Plan",price:"AED 150",priceAed:150,period:"/month",setupFee:"AED 1,000",setupAed:1e3,desc:"We build it, manage it, and keep it running. You focus on your business, we handle everything online.",features:["Full custom design and build","Up to 5 pages included","Domain and hosting managed by us","WhatsApp and contact form included","Mobile responsive layout","Basic SEO optimisation","Monthly content updates (1 round)","Priority support via WhatsApp"],ctaId:"l1-managed-cta",managed:!0,paypalHtml:'<div class="paypal-btn-wrap" id="paypal-button-container-P-97W753789S6299227NIEYJ3Y"></div>'})}
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
        ${[{icon:a.palette,title:"Custom Design",desc:"No templates. Every site is built from scratch to match your brand, colours, and vibe."},{icon:a.zap,title:"Fast Delivery",desc:"Your site is live within 7 to 14 business days from when we agree on the brief."},{icon:a.globe,title:"Mobile First",desc:"Looks great on phones, tablets, and desktops. Most of your visitors are on mobile."},{icon:a.shield,title:"SEO Ready",desc:"Proper page titles, meta descriptions, and structured code so Google can find you."},{icon:a.phone,title:"WhatsApp Button",desc:"A tap-to-chat WhatsApp button on every page, the easiest way to get leads in the UAE."},{icon:a.wrench,title:"Low Maintenance",desc:"Clean builds that just work. Perfect for business owners who want to focus on running their business."}].map(e=>`<div class="feature-item reveal">
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
        <a href="#" class="btn btn-dark btn-large" data-link="contact" id="l1-footer-cta">
          Talk to us ${a.arrow}
        </a>
        <a href="https://wa.me/971504668481" target="_blank" class="btn btn-wa btn-large">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">${a.whatsapp}</svg>
          WhatsApp us
        </a>
      </div>
    </div>
  </section>`}function x(){return`
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
        ${l({label:"One-Time",price:"AED 2,950",priceAed:2950,desc:"Pay once and own a full professional website. Ideal for established businesses who want complete control.",features:["Fully custom professional design","Up to 10 pages included","Contact form and WhatsApp integration","Team and credentials profiles","Services and treatment layouts","Testimonials and trust badges","Solid local SEO configuration","WhatsApp and Google Maps setup","Source files handover"],ctaId:"l2-ot-cta",note:"Includes two rounds of revisions. Additional pages at AED 200/page.",paypalHtml:`<div class="paypal-btn-wrap">
  <style>.pp-3MBPX74TQAJ5C{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}</style>
  <form action="https://www.paypal.com/ncp/payment/3MBPX74TQAJ5C" method="get" target="_blank" style="display:inline-grid;justify-items:center;align-content:start;gap:0.5rem;width:100%;">
    <input class="pp-3MBPX74TQAJ5C" type="submit" value="Buy Now — AED 2,950" style="width:100%;" />
    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
    <section style="font-size: 0.75rem;"> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style="height:0.875rem;vertical-align:middle;"/></section>
  </form>
</div>`})}
        ${l({label:"Managed Plan",price:"AED 300",priceAed:300,period:"/month",setupFee:"AED 2,200",setupAed:2200,desc:"Full-service management. We design, build, host, and maintain your site so you can focus entirely on your clients.",features:["Full custom professional design and setup","Up to 10 pages built for conversion","Domain renewal and professional management","Secure cloud hosting and daily backups","SSL monitoring and active protection","Good local SEO and Google profile setup","Regular content updates (up to 2/month)","Seasonal campaign support (on request)","Priority WhatsApp support"],ctaId:"l2-managed-cta",managed:!0,paypalHtml:'<div class="paypal-btn-wrap" id="paypal-button-container-P-8EU78139GF1282545NHBFUDY"></div>'})}
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
            ${[["Pages included","Up to 5","Up to 10"],["Custom design","Yes","Yes"],["Mobile responsive","Yes","Yes"],["WhatsApp button","Yes","Yes"],["Basic SEO","Yes","Yes"],["Enhanced local SEO + Google setup","No","Yes"],["Contact form + WhatsApp integration","Yes","Yes"],["Team and credentials page","No","Yes"],["Testimonials section","No","Yes"],["Google Maps integration","No","Yes"],["Starting price (one-time)","AED 1,450","AED 2,950"],["Managed plan from","AED 150/mo","AED 300/mo"]].map(([e,t,i])=>`<tr>
                <td>${e}</td>
                <td>${t}</td>
                <td class="hl">${i}</td>
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
        ${[{icon:a.palette,title:"Premium Design",desc:"Custom layouts that communicate expertise and build trust with every visitor."},{icon:a.rocket,title:"Conversion Focused",desc:"Built to turn visitors into calls, WhatsApp enquiries, and real leads."},{icon:a.globe,title:"Local SEO",desc:"Solid local SEO setup including Google Business Profile configuration to help you get found."},{icon:a.shield,title:"Secure Hosting",desc:"SSL certificates, daily backups, and active uptime monitoring included."},{icon:a.phone,title:"Easy Contact",desc:"WhatsApp button, contact form, and Google Maps built directly into your site."},{icon:a.code,title:"Ongoing Updates",desc:"Managed plan clients get regular content updates — add services, update team bios, change pricing."}].map(e=>`<div class="feature-item reveal">
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
        ${[{q:"Who is Level 2 for?",a:"Clinics, dental practices, law firms, consultants, and established businesses that need a website that actively earns trust and drives real enquiries."},{q:"What's included in the managed plan?",a:"Everything. Design, build, hosting, SSL, domain, regular content updates, and priority WhatsApp support. You focus on your business, we handle your site."},{q:"Can I request changes after launch?",a:"Yes. Managed plan clients get regular content updates (up to 2 rounds per month). One-time clients can request changes at our standard rate."},{q:"How long does it take?",a:"Typically 14 to 21 business days from brief sign-off, depending on how quickly we receive your content."}].map(e=>`<div class="faq-item"><h3>${e.q}</h3><p>${e.a}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Build your professional site</h2>
      <p>Your clients are searching online right now. Make sure they find something impressive.</p>
      <div class="cta-ctas">
        <a href="#" class="btn btn-dark btn-large" data-link="contact" id="l2-footer-cta">
          Talk to us ${a.arrow}
        </a>
        <a href="https://wa.me/971504668481" target="_blank" class="btn btn-wa btn-large">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">${a.whatsapp}</svg>
          WhatsApp us
        </a>
      </div>
    </div>
  </section>`}function E(){return`
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
        <a href="#" class="btn btn-dark btn-large" data-link="contact" id="work-cta">
          Get in touch ${a.arrow}
        </a>
        <a href="https://wa.me/971504668481" target="_blank" class="btn btn-wa btn-large">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">${a.whatsapp}</svg>
          WhatsApp us
        </a>
      </div>
    </div>
  </section>`}function S(){return`
  <div class="page-header" style="border-bottom:1px solid var(--border); text-align:left; padding-bottom:0;">
    <div class="container">
      <div class="section-pad">
        <div class="contact-wrap">
          <div class="contact-info reveal">
            <div class="section-label">Contact</div>
            <h1>Let's build<br>something.</h1>
            <p>Tell us about your business or just ask anything. We respond fast, usually within a few hours.</p>
            <div class="contact-methods">
              <a href="https://wa.me/971504668481" target="_blank" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(37,211,102,.08); color:var(--whatsapp);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">${a.whatsapp}</svg>
                </div>
                <div>
                  <div class="contact-method-label">WhatsApp</div>
                  <div class="contact-method-value">+971 50 466 8481</div>
                </div>
              </a>
              <a href="mailto:hellofeatherstudio.co" class="contact-method">
                <div class="contact-method-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${a.mail}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Email</div>
                  <div class="contact-method-value">hellofeatherstudio.co</div>
                </div>
              </a>
              <a href="https://www.instagram.com/featherstudio.co?igsh=eDZzNTdtcW1kMGx2&utm_source=qr" target="_blank" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(225,48,108,.08); color:#e1306c;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${a.instagram}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Instagram · 200+ followers</div>
                  <div class="contact-method-value">@featherstudio.co</div>
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
            
            <div data-fs-success class="fs-success-msg" style="display:none;">
              <div style="font-size:1.2rem; margin-bottom:4px;">✅</div>
              <div style="font-size:0.9rem; font-weight:700; color:var(--navy);">Message sent!</div>
              <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">We'll get back to you within a few hours.</div>
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
                Send message ${a.arrow}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`}const h={home:k,level1:A,level2:x,work:E,contact:S};function C(e){v("[data-link]").forEach(i=>i.classList.remove("active"));const t=d(`[data-link="${e}"].nav-link`);t&&t.classList.add("active")}function $(){const e=v(".reveal"),t=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&(o.target.classList.add("revealed"),t.unobserve(o.target))})},{threshold:.07,rootMargin:"0px 0px -30px 0px"});e.forEach(i=>t.observe(i))}function B(){const e=document.getElementById("contact-form");if(!e)return;const t=document.createElement("script");t.src="https://unpkg.com/@formspree/ajax@1",t.defer=!0,document.head.appendChild(t),t.onload=()=>{window.formspree&&window.formspree("initForm",{formElement:"#contact-form",formId:"xeerbbve"})},e.addEventListener("submit",async i=>{i.preventDefault();const o=document.getElementById("form-submit-btn"),s=document.querySelector("[data-fs-success]"),n=document.querySelector('[data-fs-error]:not([data-fs-error="name"]):not([data-fs-error="email"]):not([data-fs-error="message"])');o&&(o.disabled=!0,o.textContent="Sending...");try{const r=new FormData(e);if((await fetch("https://formspree.io/f/xeerbbve",{method:"POST",body:r,headers:{Accept:"application/json"}})).ok)e.style.display="none",s&&(s.style.display="block",s.style.textAlign="center",s.style.padding="18px",s.style.background="rgba(62,207,142,.07)",s.style.borderRadius="10px",s.style.border="1px solid rgba(62,207,142,.20)");else throw new Error("Server error")}catch{n&&(n.textContent="Something went wrong. Please try again or message us on WhatsApp.",n.style.color="var(--red)",n.style.fontSize="0.85rem",n.style.marginTop="8px"),o&&(o.disabled=!1,o.textContent="Try again")}})}function m(e){const t=d("#main-content");t.style.opacity="0",t.style.transform="translateY(8px)",setTimeout(()=>{t.innerHTML=h[e](),C(e),window.scrollTo({top:0,behavior:"instant"}),t.style.transition="opacity 0.3s ease, transform 0.3s ease",requestAnimationFrame(()=>{t.style.opacity="1",t.style.transform="translateY(0)"}),$(),e==="contact"&&B(),e==="level1"&&p("paypal-button-container-P-97W753789S6299227NIEYJ3Y","P-97W753789S6299227NIEYJ3Y"),e==="level2"&&p("paypal-button-container-P-8EU78139GF1282545NHBFUDY","P-8EU78139GF1282545NHBFUDY")},150)}function L(e){e.addEventListener("click",t=>{const i=t.target.closest("[data-link]");if(!i)return;t.preventDefault();const o=i.getAttribute("data-link");o&&h[o]&&m(o)})}function P(){const e=d("#main-nav");if(!e)return;const t=()=>{window.scrollY>20?e.classList.add("scrolled"):e.classList.remove("scrolled")};window.addEventListener("scroll",t,{passive:!0})}window.formspree=window.formspree||function(){(window.formspree.q=window.formspree.q||[]).push(arguments)};function p(e,t){if(!document.getElementById(e))return;const o="paypal-sdk";if(document.getElementById(o))setTimeout(()=>u(e,t),200);else{const s=document.createElement("script");s.id=o,s.src="https://www.paypal.com/sdk/js?client-id=ATdtILYx2T5yoKB9AH86nDYMlD4bQ1PnOk_y_SOL3b42qP2E3nTfHlxL1KLFLu9w7Ao9jhTYvk4jfhEB&vault=true&intent=subscription",s.setAttribute("data-sdk-integration-source","button-factory"),s.onload=()=>u(e,t),document.head.appendChild(s)}}function u(e,t){const i=window.paypal;i&&i.Buttons({style:{shape:"rect",color:"blue",layout:"vertical",label:"subscribe"},createSubscription:(o,s)=>s.subscription.create({plan_id:t}),onApprove:o=>{alert("Subscription confirmed! ID: "+o.subscriptionID)}}).render("#"+e)}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");e.innerHTML=`
    ${b()}
    <main id="main-content" style="opacity:1; min-height:100vh;"></main>
    ${w()}
    ${y()}
  `,L(e),P(),m("home")});
