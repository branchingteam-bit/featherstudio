(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const b=(e,t=document)=>t.querySelector(e),y=(e,t=document)=>[...t.querySelectorAll(e)],P=.2723,m=e=>`<span class="price-usd">approx. $${(e*P).toFixed(0)} USD</span>`,T=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,i={arrow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/></svg>',check:'<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1.5,5.5 3.8,8 8.5,2"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2 .27-2.98-.31-3.5c-.56-.52-1.43-.8-2.69.5z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'},W=()=>`<span class="check-icon">${i.check}</span>`,r=e=>`<span class="eyebrow">${e}</span>`,w={cafe:{a:"#3A2A1E",b:"#1C130C",accent:"#D98A2B",tag:"Artisan Coffee · Dubai",h:"Your morning, perfected.",p:"Freshly roasted, served with care in the heart of the city.",btn:"View menu"},dental:{a:"#15384A",b:"#0A2230",accent:"#37B6C0",tag:"Dental Care · Abu Dhabi",h:"Smiles you can trust.",p:"Gentle, modern dentistry for the whole family.",btn:"Book a visit"},law:{a:"#1A2740",b:"#0B1426",accent:"#C5A45E",tag:"Legal Consultants · UAE",h:"Counsel you can rely on.",p:"Clear, confident advice for businesses and individuals.",btn:"Free consult"},salon:{a:"#3A1E2E",b:"#1C0C16",accent:"#E0913C",tag:"Beauty Studio · Sharjah",h:"Look and feel your best.",p:"Hair, skin and care from a team that gets you.",btn:"Book now"}};function M(e){const t=w[e]||w.cafe;return`
    <div class="minisite" style="--mini-a:${t.a}; --mini-b:${t.b}; --mini-accent:${t.accent};">
      <div class="minisite-hero">
        <div class="minisite-tag">${t.tag}</div>
        <div class="minisite-h">${t.h}</div>
        <div class="minisite-p">${t.p}</div>
        <span class="minisite-btn">${t.btn}</span>
      </div>
      <div class="minisite-row">
        <div class="minisite-card"></div>
        <div class="minisite-card"></div>
        <div class="minisite-card"></div>
      </div>
    </div>`}function v(e){const t=e.img?`<img class="mockup-screen" src="${e.img}" alt="Client website preview" loading="lazy" />`:`<div class="mockup-screen">${M(e.variant||"cafe")}</div>`;return`
    <div class="mockup">
      <div class="mockup-bar">
        <span class="mockup-dot"></span><span class="mockup-dot"></span><span class="mockup-dot"></span>
        <span class="mockup-url">${e.url}</span>
      </div>
      ${t}
    </div>`}function D(){return`
  <nav class="nav" id="main-nav">
    <a href="/" class="logo" data-link="home" id="logo-btn">
      <img src="/atlanticbear-logo.png" alt="Atlantic Bear Logo" class="logo-bear-img" width="38" height="38" />
      <span class="logo-wordmark">Atlantic Bear</span>
    </a>
    <div class="nav-links">
      <a href="/" class="nav-link" data-link="home"    id="nav-home">Home</a>
      <a href="/level1" class="nav-link" data-link="level1"  id="nav-l1">Level 1</a>
      <a href="/level2" class="nav-link" data-link="level2"  id="nav-l2">Level 2</a>
      <a href="/work" class="nav-link" data-link="work" id="nav-work">Work</a>
      <a href="/about" class="nav-link" data-link="about" id="nav-about">About</a>
    </div>
    <div class="nav-actions">
      <a href="/contact" class="btn btn-secondary btn-sm" data-link="contact" id="nav-contact-cta">Contact</a>
      <a href="/contact" class="btn btn-honey btn-sm" data-link="contact" id="nav-start-cta">Get a free demo ${i.arrow}</a>
    </div>
  </nav>`}function F(){return`
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="logo" data-link="home">
            <img src="/atlanticbear-logo.png" alt="Atlantic Bear Logo" class="footer-bear-img" width="28" height="28" />
            <span class="logo-wordmark">Atlantic Bear</span>
          </a>
          <p>Custom websites for UAE businesses. We build a free demo first — you only pay once it's live and you love it.</p>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <div class="footer-links">
            <a href="/" data-link="home">Home</a>
            <a href="/level1" data-link="level1">Level 1 · Small Business</a>
            <a href="/level2" data-link="level2">Level 2 · Professional</a>
            <a href="/work" data-link="work">Our Work</a>
            <a href="/about" data-link="about">About</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-links">
            <a href="/contact" data-link="contact">Start a project</a>
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
  </footer>`}function I(){const e=[{num:"Free demo",desc:"Before you pay anything"},{num:"Pay when live",desc:"Not a dirham before"},{num:"100%",desc:"Custom — no templates"},{num:"Mobile-first",desc:"Built for every screen"},{num:"WhatsApp",desc:"Tap-to-chat on every site"},{num:"Made in the UAE",desc:"For UAE businesses"}],t=()=>e.map(a=>`<span class="marquee-badge"><span class="marquee-num">${a.num}</span><span class="marquee-desc">${a.desc}</span></span><span class="marquee-sep">✦</span>`).join(""),s=t()+t()+t()+t();return`
  <!-- HERO -->
  <section class="hero">
    <img src="/atlanticbear-logo.png" class="huge-bear" alt="" aria-hidden="true" fetchpriority="high" width="720" height="720" />
    <div class="container">
      ${r("UAE Web Design Studio")}
      <h1>Get found. Get trusted.<br><em>Get booked.</em></h1>
      <p class="hero-sub">
        We design and build custom websites for UAE businesses — clean, fast, and made to win you customers. See yours before you pay a single dirham.
      </p>
      <div class="hero-ctas">
        <a href="/contact" class="btn btn-honey btn-large" data-link="contact" id="hero-cta-start">
          Get a free demo ${i.arrow}
        </a>
        <a href="/work" class="btn btn-secondary btn-large" data-link="work" id="hero-cta-work">
          See our work
        </a>
      </div>
      <p class="hero-note">No deposit. No risk. <a href="#how" data-link="home">See how it works ↓</a></p>
    </div>
    <div class="hero-stage reveal">
      ${v({url:"yourbusiness.ae",variant:"cafe"})}
    </div>
  </section>

  <!-- MARQUEE BELT -->
  <div class="marquee-belt">
    <div class="marquee-track">
      <div class="marquee-inner" aria-hidden="true">${s}</div>
    </div>
  </div>

  <!-- COMPETITOR BANNER -->
  <section class="competitor-banner">
    <div class="container">
      <p class="competitor-banner-text">Your competitor's website is getting your customers. <strong>Let's fix that.</strong></p>
    </div>
  </section>

  <!-- THE PROBLEM -->
  <section class="problem-section">
    <div class="container">
      <h2 class="problem-headline">
        Every day without a website is a customer you <span class="text-blue">didn't know you lost</span>.
      </h2>
      <div class="problem-grid">
        <div class="problem-card reveal">
          <div class="pc-num">01</div>
          <h3>They searched. They didn't find you.</h3>
          <p>People look you up before they visit or call. If nothing comes up — or what comes up looks dated — they move on. Simple as that.</p>
        </div>
        <div class="problem-card reveal">
          <div class="pc-num">02</div>
          <h3>Your competitor got the client.</h3>
          <p>When two similar businesses show up and one has a clean, professional site, the choice is obvious. Customers go with whoever looks more trustworthy.</p>
        </div>
        <div class="problem-card reveal">
          <div class="pc-num">03</div>
          <h3>You don't have time for this.</h3>
          <p>You're running a business. Wrestling with hosting and tech isn't why you started. It shouldn't be your problem — that's our job.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- THE OFFER -->
  <section class="offer-section">
    <div class="container">
      <div class="offer-inner">
        <div class="reveal">
          ${r("The Atlantic Bear Promise")}
          <h2 class="offer-h">See it before<br>you <em>pay a dirham.</em></h2>
          <p class="offer-p">
            We build you a <strong>real, working demo of your site — for free.</strong> You see exactly what you're getting. If you love it, we polish it and put it live. <strong>You only pay once it's live.</strong> If you don't, you walk away owing nothing. That's the whole point.
          </p>
          <a href="/contact" class="btn btn-honey btn-large" data-link="contact" id="offer-cta">
            Start with a free demo ${i.arrow}
          </a>
        </div>
        <div class="offer-card reveal">
          <div class="offer-points">
            <div class="offer-point">
              <div class="offer-point-num">$0</div>
              <div class="offer-point-txt"><h4>No deposit to start</h4><p>We build the first version on us. No card, no commitment.</p></div>
            </div>
            <div class="offer-point">
              <div class="offer-point-num">✓</div>
              <div class="offer-point-txt"><h4>Pay only when it's live</h4><p>Money changes hands after your site is online and you're happy.</p></div>
            </div>
            <div class="offer-point">
              <div class="offer-point-num">↺</div>
              <div class="offer-point-txt"><h4>Don't like it? Walk away.</h4><p>No pressure, no fees. The risk is entirely on us, not you.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="how-section" id="how">
    <div class="container">
      <div class="how-layout">
        <div class="how-sticky reveal">
          ${r("How it works")}
          <h2>Four steps.<br>Zero <em>risk.</em></h2>
          <p>From first message to live website — here's exactly how we work, start to finish.</p>
          <a href="/contact" class="btn btn-dark btn-large" data-link="contact" id="how-cta">Let's begin ${i.arrow}</a>
        </div>
        <div class="how-steps">
          <div class="how-step reveal">
            <div class="how-step-num">1</div>
            <div>
              <h3>We build a free demo</h3>
              <p>Tell us about your business. We design and build a real preview of your website — completely free.<br><span class="how-step-free">No payment</span></p>
            </div>
          </div>
          <div class="how-step reveal">
            <div class="how-step-num">2</div>
            <div>
              <h3>You review it</h3>
              <p>You see the real thing, not a sketch. Tell us what you love and what you'd change — colours, copy, layout, anything.</p>
            </div>
          </div>
          <div class="how-step reveal">
            <div class="how-step-num">3</div>
            <div>
              <h3>We refine it</h3>
              <p>We polish until it's exactly right. WhatsApp button, reviews, your photos and details — all wired in.</p>
            </div>
          </div>
          <div class="how-step reveal">
            <div class="how-step-num">4</div>
            <div>
              <h3>Go live &amp; pay</h3>
              <p>We put your site online. <em>Only now</em> do you pay. You're up, running, and found — with zero risk taken.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT EVERY SITE INCLUDES -->
  <section class="section-pad" style="background:var(--paper);">
    <div class="container">
      <div class="section-header centered reveal">
        ${r("Standard on every build")}
        <h2 class="section-title">What every site <em>comes with</em></h2>
        <p class="section-sub">No upsells for the essentials. Every Atlantic Bear website ships with these, on both levels.</p>
      </div>
      <div class="feature-grid">
        ${[{icon:i.whatsapp,title:"Tap-to-WhatsApp",desc:"A floating WhatsApp button so customers can message you in one tap, from any page.",wa:!0},{icon:i.star,title:"Reviews & testimonials",desc:"Real customer reviews and trust badges built in — the social proof that closes the sale."},{icon:i.globe,title:"Mobile-first design",desc:"Looks flawless on phones, tablets, and desktops. Most of your visitors are on mobile."},{icon:i.zap,title:"Fast loading",desc:"Clean, lightweight code so your site opens instantly. Slow sites lose customers."},{icon:i.search,title:"Found on Google",desc:"Proper titles, descriptions, and structure so Google can find and rank you."},{icon:i.palette,title:"Fully custom design",desc:"No templates, ever. Built from scratch to match your brand, colours, and vibe."}].map(a=>`<div class="feature-item reveal${a.wa?" is-wa":""}">
            <div class="feature-icon-wrap">${a.icon}</div>
            <h3>${a.title}</h3>
            <p>${a.desc}</p>
          </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- THE NUMBERS -->
  <section class="facts-section">
    <div class="container">
      <h2 class="facts-headline">The numbers <em>don't lie.</em></h2>
      <div class="facts-heroes-row">
        <div class="fact-hero-block fact-hero-dark reveal">
          <div class="fact-hero-num"><span class="count" data-to="81">0</span><span class="fact-hero-pct">%</span></div>
          <div class="fact-hero-label">Of customers research online before buying or visiting a business.</div>
          <div class="fact-hero-desc">If they can't find you, they'll find your competitor. It's that simple.</div>
        </div>
        <div class="fact-hero-block fact-hero-light reveal">
          <div class="fact-hero-num fact-hero-num-dark"><span class="count" data-to="40">0</span><span class="fact-hero-pct fact-hero-pct-dark">%</span></div>
          <div class="fact-hero-label fact-hero-label-dark">Of your Google Business Profile performance is driven by your website.</div>
          <div class="fact-hero-desc fact-hero-desc-dark">Your website directly affects your spot on Google Maps. A weak site pushes you down the list.</div>
        </div>
      </div>
      <div class="facts-stats-row">
        <div class="facts-stat-block reveal">
          <div class="facts-stat-num"><span class="count" data-to="75">0</span>%</div>
          <div class="facts-stat-text">Of people judge a company's credibility entirely on its website design</div>
        </div>
        <div class="facts-stat-block reveal">
          <div class="facts-stat-num"><span class="count" data-to="57">0</span>%</div>
          <div class="facts-stat-text">Of users won't recommend a business with a poorly designed mobile site</div>
        </div>
        <div class="facts-stat-block reveal">
          <div class="facts-stat-num"><span class="count" data-to="2">0</span>×</div>
          <div class="facts-stat-text">Faster growth for businesses with a strong professional online presence</div>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW WE BUILD -->
  <section class="build-section">
    <div class="container">
      <div class="section-header reveal">
        ${r("How we build")}
        <h2 class="section-title">Designed by hand.<br>Built to <em>perform.</em></h2>
      </div>
      <div class="build-row reveal">
        <div class="build-text">
          <h3>Custom design, <em>no templates</em></h3>
          <p>We design every layout from scratch around your brand — your colours, your words, your customers. Nothing off-the-shelf, nothing recycled. Your site looks like you, not a thousand others.</p>
        </div>
        <div class="build-visual">${v({url:"salonstudio.ae",variant:"salon"})}</div>
      </div>
      <div class="build-row alt reveal">
        <div class="build-text">
          <h3>Clean code, <em>instant loads</em></h3>
          <p>Under the hood, your site is lean and fast — built to open instantly, work on every device, and stay easy to update. Speed isn't a luxury; it's how you keep the customer who just tapped your link.</p>
        </div>
        <div class="build-visual">${v({url:"dentalcare.ae",variant:"dental"})}</div>
      </div>
    </div>
  </section>

  <!-- CHOOSE YOUR LEVEL -->
  <section class="teasers-section">
    <div class="container">
      <div class="teasers-header reveal">
        ${r("Two ways to start")}
        <h2>Choose your <em>level</em></h2>
        <p>Two plans, built for exactly where your business is right now.</p>
      </div>
      <div class="teasers-grid">
        <div class="teaser-card level-one-card reveal">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">01</span>
            <span class="teaser-level-name">Level One</span>
          </div>
          <h3>Small Business</h3>
          <p class="teaser-pitch">Look professional, get found, and make it easy for customers to reach you — without a big investment.</p>
          <div class="teaser-price">
            <div class="teaser-price-main">AED 1,450</div>
            <div class="teaser-price-sub">one-time &nbsp;·&nbsp; or AED 150/mo managed</div>
          </div>
          <div class="teaser-pills">
            <span class="teaser-pill">Café</span>
            <span class="teaser-pill">Salon</span>
            <span class="teaser-pill">Retail</span>
            <span class="teaser-pill">Kiosk</span>
          </div>
          <a href="/level1" class="teaser-btn teaser-btn-dark" data-link="level1" id="home-l1-cta">Explore Level 1 ${i.arrow}</a>
        </div>
        <div class="teaser-card level-two-card reveal">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">02</span>
            <span class="teaser-level-name">Level Two · Most Popular</span>
          </div>
          <h3>Professional</h3>
          <p class="teaser-pitch">Your business runs on trust. Clients need to feel confident before they book — this site does that work for you.</p>
          <div class="teaser-price">
            <div class="teaser-price-main">AED 2,950</div>
            <div class="teaser-price-sub">one-time &nbsp;·&nbsp; or AED 300/mo managed</div>
          </div>
          <div class="teaser-pills">
            <span class="teaser-pill">Clinic</span>
            <span class="teaser-pill">Dental</span>
            <span class="teaser-pill">Law firm</span>
            <span class="teaser-pill">Consultant</span>
          </div>
          <a href="/level2" class="teaser-btn teaser-btn-outline" data-link="level2" id="home-l2-cta">Explore Level 2 ${i.arrow}</a>
        </div>
      </div>

      <div class="real-diff-block reveal">
        <div class="real-diff-side">
          <div class="real-diff-tag tag-one">Level 1</div>
          <h4>Level 1 is about being <em>found</em></h4>
          <p>A customer walks past your café or shop. They Google you before coming in. Level 1 makes sure they find a clean, professional site — and tap to WhatsApp you immediately.</p>
        </div>
        <div class="real-diff-divider"></div>
        <div class="real-diff-side">
          <div class="real-diff-tag tag-two">Level 2</div>
          <h4>Level 2 is about being <em>trusted</em></h4>
          <p>Someone needs a dentist or lawyer. They spend ten minutes reading about you before they call. Level 2 gives them the team, the credentials, the reviews, and the reassurance to book.</p>
        </div>
      </div>
      <p class="real-diff-note">Not sure which level? <strong>Start with Level 1</strong> — you can always upgrade later, and we credit previous payments toward your new plan.</p>
    </div>
  </section>

  <!-- FEATURED WORK -->
  <section class="work-section">
    <div class="container">
      <div class="section-header centered reveal">
        ${r("Selected work")}
        <h2 class="section-title">Sites we've <em>shipped</em></h2>
        <p class="section-sub">Real businesses, real websites. Here's a taste of what we build.</p>
      </div>
      <div class="work-grid">
        ${p({cat:"Café & Roastery",name:"Artisan Coffee",desc:"A warm, mobile-first site that turns walk-bys into regulars — menu, hours, and tap-to-WhatsApp orders.",variant:"cafe",url:"artisancoffee.ae",tags:["Level 1","WhatsApp","Menu"]})}
        ${p({cat:"Dental Practice",name:"Smile Dental Care",desc:"A trust-first clinic site with team profiles, treatments, reviews, and Google Maps to drive bookings.",variant:"dental",url:"smiledental.ae",tags:["Level 2","Local SEO","Reviews"]})}
      </div>
      <div class="cta-ctas" style="margin-top:40px;">
        <a href="/work" class="btn btn-secondary btn-large" data-link="work" id="home-work-cta">View all work ${i.arrow}</a>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  ${Y()}

  <!-- FINAL CTA -->
  <section class="cta-section">
    <div class="container">
      ${r("Ready when you are")}
      <h2>Let's build yours — <em>free to start.</em></h2>
      <p>Tell us about your business. We'll send back a real demo of your website, on us. You only pay if you love it and it goes live.</p>
      <div class="cta-ctas">
        <a href="/contact" class="btn btn-honey btn-large" data-link="contact" id="home-final-cta">Get my free demo ${i.arrow}</a>
        <a href="/work" class="btn btn-ghost-light btn-large" data-link="work" id="home-final-work">See our work</a>
      </div>
    </div>
  </section>
  `}function p(e){return`
  <div class="work-card reveal">
    <div class="work-card-visual">${v({url:e.url,variant:e.variant,img:e.img})}</div>
    <div class="work-card-body">
      <div class="work-card-cat">${e.cat}</div>
      <h3>${e.name}</h3>
      <p>${e.desc}</p>
      <div class="work-card-tags">${e.tags.map(t=>`<span class="work-tag">${t}</span>`).join("")}</div>
    </div>
  </div>`}function Y(){const e=`<div class="testi-stars">${Array(5).fill(i.star).join("")}</div>`,t=[{text:"They sent me a full demo before I paid anything. I just had to approve it. Honestly the easiest decision — bookings went up within the first month.",name:"Layla A.",biz:"Dental Clinic, Abu Dhabi",initial:"L"},{text:"My old site looked like everyone else's. This one actually looks like my brand. Customers message me on WhatsApp straight from the page now.",name:"Omar S.",biz:"Café & Roastery, Dubai",initial:"O"},{text:"Fast, professional, and no pressure. The fact that you only pay when it's live tells you everything about how confident they are.",name:"Priya M.",biz:"Beauty Studio, Sharjah",initial:"P"}];return`
  <section class="testi-section">
    <div class="container">
      <div class="section-header centered reveal">
        ${r("What clients say")}
        <h2 class="section-title">Loved by <em>local businesses</em></h2>
        <p class="section-sub">We work with the same businesses you are — cafés, clinics, salons, shops across the UAE.</p>
      </div>
      <div class="testi-grid">
        ${t.map(s=>`
          <div class="testi-card reveal">
            ${e}
            <p class="testi-text">${s.text}</p>
            <div class="testi-who">
              <div class="testi-avatar">${s.initial}</div>
              <div>
                <div class="testi-name">${s.name}</div>
                <div class="testi-biz">${s.biz}</div>
              </div>
            </div>
          </div>`).join("")}
      </div>
    </div>
  </section>`}function h(e){return`
  <div class="pricing-card${e.managed?" managed":""}">
    ${e.managed?'<div class="managed-badge">Recommended</div>':""}
    <div class="pricing-card-top">
      <div class="plan-label">${e.label}</div>
      ${e.setupFee?`
        <div class="price-setup-note">Setup: <strong>${e.setupFee}</strong> ${e.setupAed?m(e.setupAed):""}</div>
      `:""}
      <div class="price-display">
        <span class="price-big">${e.price}</span>
        ${e.period?`<span class="price-period">${e.period}</span>`:""}
      </div>
      ${e.setupFee,m(e.priceAed)}
      <p class="plan-desc">${e.desc}</p>
    </div>
    <div class="pricing-card-cta">
      ${e.paypalHtml?e.paypalHtml:`<a href="/contact" class="btn btn-dark btn-block btn-large" data-link="contact" id="${e.ctaId}">Get started ${i.arrow}</a>`}
      ${e.note?`<p style="font-size:0.75rem; color:var(--text-muted); margin-top:10px; text-align:center;">${e.note}</p>`:""}
    </div>
    <div class="pricing-card-features">
      <div class="features-label">What's included</div>
      ${e.features.map(t=>`<div class="feature-row">${W()}<span>${t}</span></div>`).join("")}
      ${e.managed?`
        <div class="no-contract-note">
          <strong>No lock-in contracts</strong>
          Minimum 3 months. Cancel anytime after that, we hand over all files cleanly.
        </div>
      `:""}
    </div>
  </div>`}function q(){return`
  <!-- PAGE HEADER -->
  <div class="page-header centered">
    <div class="container">
      ${r("Level 1 · Small Business")}
      <h1>Great websites for <em>growing businesses</em></h1>
      <p>For kiosks, cafés, salons, retail shops, and anyone who wants to look professional online without a large budget.</p>
    </div>
  </div>

  <!-- PRICING -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header centered reveal">
        ${r("Pricing")}
        <h2 class="section-title">Choose your plan</h2>
        <p class="section-sub">Both plans include a fully custom-designed website. Pick the one that suits how you want to work.</p>
      </div>
      <div class="pricing-cards-row reveal">
        ${h({label:"One-Time",price:"AED 1,450",priceAed:1450,desc:"Pay once, own your website forever. You get all files, the domain, and full control. No recurring fees.",features:["Fully custom-designed website","Up to 5 pages included","Mobile responsive layout","Tap-to-WhatsApp + contact form","Reviews & testimonials section","Basic SEO setup","Handoff within 7 to 14 days","Source files included"],ctaId:"l1-ot-cta",note:"Includes one round of revisions. Additional pages at AED 150/page.",paypalHtml:'<div class="paypal-btn-wrap" id="paypal-capture-container-l1"></div>'})}
        ${h({label:"Managed Plan",price:"AED 150",priceAed:150,period:"/month",setupFee:"AED 1,000",setupAed:1e3,desc:"We build it, manage it, and keep it running. You focus on your business, we handle everything online.",features:["Full custom design and build","Up to 5 pages included","Domain and hosting managed by us","Tap-to-WhatsApp + contact form","Reviews & testimonials section","Mobile responsive layout","Monthly content updates (1 round)","Priority support via email"],ctaId:"l1-managed-cta",managed:!0,paypalHtml:'<div class="paypal-btn-wrap" id="paypal-button-container-P-97W753789S6299227NIEYJ3Y"></div>'})}
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="section-pad" style="background:var(--sand);">
    <div class="container">
      <div class="section-header reveal">
        ${r("Features")}
        <h2 class="section-title">Built for business, <em>not just looks</em></h2>
      </div>
      <div class="feature-grid">
        ${[{icon:i.palette,title:"Custom Design",desc:"No templates. Every site is built from scratch to match your brand, colours, and vibe."},{icon:i.zap,title:"Fast Delivery",desc:"Your site is live within 7 to 14 business days from when we agree on the brief."},{icon:i.globe,title:"Mobile First",desc:"Looks great on phones, tablets, and desktops. Most of your visitors are on mobile."},{icon:i.search,title:"SEO Ready",desc:"Proper page titles, meta descriptions, and structured code so Google can find you."},{icon:i.whatsapp,title:"WhatsApp Built In",desc:"A tap-to-chat WhatsApp button on every page, plus an integrated contact form."},{icon:i.wrench,title:"Low Maintenance",desc:"Clean builds that just work. Perfect for owners who want to focus on the business."}].map(e=>`<div class="feature-item reveal">
            <div class="feature-icon-wrap">${e.icon}</div>
            <h3>${e.title}</h3>
            <p>${e.desc}</p>
          </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header reveal">
        ${r("FAQ")}
        <h2 class="section-title">Common questions</h2>
      </div>
      <div class="faq-list reveal">
        ${[{q:"Who is Level 1 for?",a:"Kiosks, cafés, retail shops, salons, small workshops. Any business that wants a professional online presence without a large budget."},{q:"Do I really see it before I pay?",a:"Yes. We build a free demo of your site first. You only pay once it's live and you're happy with it — no deposit to start."},{q:"Do I own the website after the one-time purchase?",a:"Completely. We hand over all the files and you can host it wherever you want. We're also happy to help with hosting setup at no extra cost."},{q:"Can I upgrade to Level 2 later?",a:"Absolutely. If your business grows and you need more, we can expand your site. Previous payments are credited where applicable."}].map(e=>`<div class="faq-item"><h3>${e.q}</h3><p>${e.a}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      ${r("Free to start")}
      <h2>Start with <em>Level 1</em></h2>
      <p>A website your customers will trust, at a price that makes sense. See your free demo before you pay a dirham.</p>
      <div class="cta-ctas">
        <a href="/contact" class="btn btn-honey btn-large" data-link="contact" id="l1-footer-cta">Get my free demo ${i.arrow}</a>
      </div>
    </div>
  </section>`}function O(){return`
  <!-- PAGE HEADER -->
  <div class="page-header centered">
    <div class="container">
      ${r("Level 2 · Professional")}
      <h1>Websites built for <em>serious businesses</em></h1>
      <p>For clinics, dental practices, law firms, and professional services that need a website that earns trust and drives real enquiries.</p>
    </div>
  </div>

  <!-- PRICING -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header centered reveal">
        ${r("Pricing")}
        <h2 class="section-title">Choose your plan</h2>
        <p class="section-sub">Both plans include everything you need. The managed plan is our most popular — we handle it all.</p>
      </div>
      <div class="pricing-cards-row reveal">
        ${h({label:"One-Time",price:"AED 2,950",priceAed:2950,desc:"Pay once and own a full professional website. Ideal for established businesses who want complete control.",features:["Fully custom professional design","Up to 10 pages included","Tap-to-WhatsApp + contact form","Team and credentials profiles","Services and treatment layouts","Testimonials and trust badges","Solid local SEO configuration","Google Maps setup","Source files handover"],ctaId:"l2-ot-cta",note:"Includes two rounds of revisions. Additional pages at AED 200/page.",paypalHtml:'<div class="paypal-btn-wrap" id="paypal-capture-container-l2"></div>'})}
        ${h({label:"Managed Plan",price:"AED 300",priceAed:300,period:"/month",setupFee:"AED 2,200",setupAed:2200,desc:"Full-service management. We design, build, host, and maintain your site so you can focus entirely on your clients.",features:["Full custom professional design and setup","Up to 10 pages built for conversion","Domain renewal and professional management","Secure cloud hosting and daily backups","SSL monitoring and active protection","Good local SEO and Google profile setup","Regular content updates (up to 2/month)","Seasonal campaign support (on request)","Priority email support"],ctaId:"l2-managed-cta",managed:!0,paypalHtml:'<div class="paypal-btn-wrap" id="paypal-button-container-P-8EU78139GF1282545NHBFUDY"></div>'})}
      </div>
    </div>
  </section>

  <!-- COMPARISON TABLE -->
  <section class="section-pad" style="background:var(--sand);">
    <div class="container">
      <div class="section-header centered reveal">
        ${r("Compare")}
        <h2 class="section-title">Level 1 vs Level 2</h2>
        <p class="section-sub">Not sure which is right? Here's a quick side-by-side.</p>
      </div>
      <div class="comparison-wrap reveal">
        <table class="comparison-table">
          <thead>
            <tr><th>Feature</th><th>Level 1</th><th class="hl">Level 2</th></tr>
          </thead>
          <tbody>
            ${[["Pages included","Up to 5","Up to 10"],["Custom design","Yes","Yes"],["Mobile responsive","Yes","Yes"],["Tap-to-WhatsApp","Yes","Yes"],["Reviews & testimonials","Yes","Yes"],["Basic SEO","Yes","Yes"],["Enhanced local SEO + Google setup","No","Yes"],["Team and credentials page","No","Yes"],["Google Maps integration","No","Yes"],["Starting price (one-time)","AED 1,450","AED 2,950"],["Managed plan from","AED 150/mo","AED 300/mo"]].map(([e,t,s])=>`<tr><td>${e}</td><td>${t}</td><td class="hl">${s}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header reveal">
        ${r("Features")}
        <h2 class="section-title">Everything a <em>professional</em> needs</h2>
      </div>
      <div class="feature-grid">
        ${[{icon:i.palette,title:"Premium Design",desc:"Custom layouts that communicate expertise and build trust with every visitor."},{icon:i.rocket,title:"Conversion Focused",desc:"Built to turn visitors into enquiries, bookings, and real leads."},{icon:i.globe,title:"Local SEO",desc:"Solid local SEO setup including Google Business Profile configuration to get you found."},{icon:i.shield,title:"Secure Hosting",desc:"SSL certificates, daily backups, and active uptime monitoring included."},{icon:i.star,title:"Trust & Reviews",desc:"Testimonials, credentials, and trust badges that reassure clients before they book."},{icon:i.code,title:"Ongoing Updates",desc:"Managed clients get regular content updates — add services, update bios, change pricing."}].map(e=>`<div class="feature-item reveal">
            <div class="feature-icon-wrap">${e.icon}</div>
            <h3>${e.title}</h3>
            <p>${e.desc}</p>
          </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section-pad" style="background:var(--sand);">
    <div class="container">
      <div class="section-header reveal">
        ${r("FAQ")}
        <h2 class="section-title">Common questions</h2>
      </div>
      <div class="faq-list reveal">
        ${[{q:"Who is Level 2 for?",a:"Clinics, dental practices, law firms, consultants, and established businesses that need a website that actively earns trust and drives real enquiries."},{q:"Do I see it before I pay?",a:"Yes — same promise as everything we do. We build a demo first; you only pay once it's live and you're happy."},{q:"What's included in the managed plan?",a:"Everything. Design, build, hosting, SSL, domain, regular content updates, and priority email support. You focus on your business, we handle your site."},{q:"How long does it take?",a:"Typically 14 to 21 business days from brief sign-off, depending on how quickly we receive your content."}].map(e=>`<div class="faq-item"><h3>${e.q}</h3><p>${e.a}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      ${r("Free to start")}
      <h2>Build your <em>professional site</em></h2>
      <p>Your clients are searching online right now. Make sure they find something impressive — see your free demo first.</p>
      <div class="cta-ctas">
        <a href="/contact" class="btn btn-honey btn-large" data-link="contact" id="l2-footer-cta">Get my free demo ${i.arrow}</a>
      </div>
    </div>
  </section>`}function U(){return`
  <div class="page-header centered">
    <div class="container">
      ${r("Portfolio")}
      <h1>Our <em>work</em></h1>
      <p>Custom websites for real UAE businesses. Clean design, fast loads, and built to win customers — see the kind of work we deliver.</p>
    </div>
  </div>

  <section class="work-section" style="padding-top:48px;">
    <div class="container">
      <div class="work-grid">
        ${p({cat:"Café & Roastery",name:"Artisan Coffee",desc:"A warm, mobile-first site that turns walk-bys into regulars — menu, opening hours, and tap-to-WhatsApp ordering front and centre.",variant:"cafe",url:"artisancoffee.ae",tags:["Level 1","WhatsApp","Menu"]})}
        ${p({cat:"Dental Practice",name:"Smile Dental Care",desc:"A trust-first clinic site: team profiles, treatments, patient reviews, and Google Maps wired in to drive bookings.",variant:"dental",url:"smiledental.ae",tags:["Level 2","Local SEO","Reviews"]})}
        ${p({cat:"Legal Consultants",name:"Meridian Legal",desc:"A calm, authoritative site for a boutique firm — practice areas, credentials, and an easy path to a first consultation.",variant:"law",url:"meridianlegal.ae",tags:["Level 2","Credibility","Contact"]})}
        ${p({cat:"Beauty Studio",name:"Lumière Studio",desc:"A stylish booking-focused site for a salon — services, gallery, and instant WhatsApp appointments.",variant:"salon",url:"lumierestudio.ae",tags:["Level 1","Booking","Gallery"]})}
      </div>
      <p class="real-diff-note" style="margin-top:40px;">These are representative of our build quality. Want to see a demo built for <strong>your</strong> business? It's free — just ask.</p>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      ${r("Your turn")}
      <h2>Let's build <em>yours</em></h2>
      <p>Tell us about your business and what you need. We'll send back a free demo — no payment until it's live.</p>
      <div class="cta-ctas">
        <a href="/contact" class="btn btn-honey btn-large" data-link="contact" id="work-cta">Get my free demo ${i.arrow}</a>
      </div>
    </div>
  </section>`}function j(){return`
  <div class="page-header centered">
    <div class="container">
      ${r("About Atlantic Bear")}
      <h1>A small team that <em>actually cares</em></h1>
      <p>We're a UAE web studio building websites for the businesses that keep this country running — the cafés, clinics, salons, and shops.</p>
    </div>
  </div>

  <section class="section-pad">
    <div class="container-narrow">
      <p class="about-lead reveal">
        We started Atlantic Bear because too many great local businesses were stuck with <em>no website, or a bad one</em> — losing customers they never even knew they had. So we made the offer simple: we build it first, and you only pay when you love it.
      </p>
    </div>
  </section>

  <section class="section-pad" style="background:var(--sand); padding-top:0; background:transparent;">
    <div class="container">
      <div class="about-values">
        <div class="about-value reveal">
          <div class="feature-icon-wrap">${i.shield}</div>
          <h3>Risk on us, not you</h3>
          <p>You see a real demo before any money changes hands. If it's not right, you walk away owing nothing. We earn the sale by doing the work first.</p>
        </div>
        <div class="about-value reveal">
          <div class="feature-icon-wrap">${i.heart}</div>
          <h3>Custom, every time</h3>
          <p>No templates, no copy-paste. Every site is designed from scratch around your brand. If it doesn't look like you, we haven't finished.</p>
        </div>
        <div class="about-value reveal">
          <div class="feature-icon-wrap">${i.zap}</div>
          <h3>Fast and personal</h3>
          <p>You talk to the people building your site — not a call centre. We move quickly and reply fast, usually within a few hours.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      ${r("Say hello")}
      <h2>Let's make your business <em>impossible to miss</em></h2>
      <p>Tell us what you do. We'll send back a free demo of your website — no strings, no payment until it's live.</p>
      <div class="cta-ctas">
        <a href="/contact" class="btn btn-honey btn-large" data-link="contact" id="about-cta">Get my free demo ${i.arrow}</a>
        <a href="/work" class="btn btn-ghost-light btn-large" data-link="work" id="about-work-cta">See our work</a>
      </div>
    </div>
  </section>`}function R(){return`
  <div class="page-header" style="text-align:left; padding-bottom:0; background:transparent;">
    <div class="container">
      <div class="section-pad">
        <div class="contact-wrap">
          <div class="contact-info reveal">
            ${r("Contact")}
            <h1>Let's build<br><em>something.</em></h1>
            <p>Tell us about your business — or just ask anything. We respond fast, usually within a few hours. Remember: the first demo is free.</p>
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
                <div class="contact-method-icon" style="background:rgba(225,48,108,.08); color:#e1306c;">
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
            <h3>Request a free demo</h3>
            <p>Tell us a little about your business — we'll get back to you within a few hours.</p>

            <div data-fs-success class="fs-success-msg" style="display:none;">
              <div style="font-size:1.2rem; margin-bottom:4px;">✅</div>
              <div style="font-size:0.9rem; font-weight:700; color:var(--ink);">Message sent!</div>
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
              <button type="submit" class="btn btn-honey btn-block btn-large" id="form-submit-btn" data-fs-submit-btn>
                Send message ${i.arrow}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`}const C={home:I,level1:q,level2:O,work:U,about:j,contact:R},k={home:{title:"Atlantic Bear | Custom Websites for UAE Businesses — See It Before You Pay",desc:"Atlantic Bear designs and builds custom websites for UAE businesses — clean, fast, and made to win you customers. We build a free demo first; you only pay once it's live."},level1:{title:"Level 1: Custom Websites for UAE Small Businesses | Atlantic Bear",desc:"Affordable, custom-designed websites for cafés, salons, kiosks, and retail shops in the UAE. Tap-to-WhatsApp, reviews, and a free demo before you pay. Live in 7-14 days."},level2:{title:"Level 2: Professional Websites for UAE Practices & Clinics | Atlantic Bear",desc:"Premium websites built to earn trust for clinics, law firms, dental practices, and consultants in Dubai & the UAE. Local SEO, reviews, and full management included."},work:{title:"Our Work | Atlantic Bear Portfolio",desc:"Custom websites designed and built for UAE businesses — cafés, clinics, law firms, and salons. Clean layouts, mobile-first, and fast."},about:{title:"About Atlantic Bear | A UAE Web Studio That Builds First, Bills Later",desc:"We're a small UAE web studio building custom websites for local businesses. We build a free demo first and you only pay once it's live and you love it."},contact:{title:"Contact Atlantic Bear | Request Your Free Website Demo",desc:"Get in touch with Atlantic Bear. Tell us about your business and we'll build a free demo of your website. Fast response in Dubai & the UAE."}};function N(e){const t=k[e]||k.home;document.title=t.title;let s=document.querySelector('meta[name="description"]');s||(s=document.createElement("meta"),s.setAttribute("name","description"),document.head.appendChild(s)),s.setAttribute("content",t.desc);let a=document.querySelector('link[rel="canonical"]');a||(a=document.createElement("link"),a.setAttribute("rel","canonical"),document.head.appendChild(a));const o=`${window.location.origin}${e==="home"?"":"/"+e}`;a.setAttribute("href",o);const n={"og:title":t.title,"og:description":t.desc,"og:url":o,"og:type":"website","og:image":`${window.location.origin}/logo.png`};for(const[d,u]of Object.entries(n)){let l=document.querySelector(`meta[property="${d}"]`);l||(l=document.createElement("meta"),l.setAttribute("property",d),document.head.appendChild(l)),l.setAttribute("content",u)}const c={"twitter:card":"summary_large_image","twitter:title":t.title,"twitter:description":t.desc,"twitter:image":`${window.location.origin}/logo.png`};for(const[d,u]of Object.entries(c)){let l=document.querySelector(`meta[name="${d}"]`);l||(l=document.createElement("meta"),l.setAttribute("name",d),document.head.appendChild(l)),l.setAttribute("content",u)}}function A(e){const t=e.replace(/^\/|\/$/g,"");return t==="level1"||t==="level2"||t==="work"||t==="about"||t==="contact"?t:"home"}function H(e){y("[data-link]").forEach(s=>s.classList.remove("active"));const t=b(`[data-link="${e}"].nav-link`);t&&t.classList.add("active")}function G(){const e=y(".reveal"),t=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.classList.add("revealed"),t.unobserve(a.target))})},{threshold:.07,rootMargin:"0px 0px -30px 0px"});e.forEach(s=>t.observe(s))}function z(){const e=y(".count");if(T()){e.forEach(s=>{s.textContent=s.dataset.to||s.textContent});return}const t=new IntersectionObserver(s=>{s.forEach(a=>{if(!a.isIntersecting)return;const o=a.target,n=parseFloat(o.dataset.to||"0"),c=1100,d=performance.now(),u=l=>{const g=Math.min(1,(l-d)/c),B=1-Math.pow(1-g,3);o.textContent=Math.round(n*B).toString(),g<1?requestAnimationFrame(u):o.textContent=n.toString()};requestAnimationFrame(u),t.unobserve(o)})},{threshold:.5});e.forEach(s=>t.observe(s))}function _(){const e=document.getElementById("contact-form");if(!e)return;const t=document.createElement("script");t.src="https://unpkg.com/@formspree/ajax@1",t.defer=!0,document.head.appendChild(t),t.onload=()=>{window.formspree&&window.formspree("initForm",{formElement:"#contact-form",formId:"mykanvrr"})},e.addEventListener("submit",async s=>{s.preventDefault();const a=document.getElementById("form-submit-btn"),o=document.querySelector("[data-fs-success]"),n=document.querySelector('[data-fs-error]:not([data-fs-error="name"]):not([data-fs-error="email"]):not([data-fs-error="message"])');a&&(a.disabled=!0,a.textContent="Sending...");try{const c=new FormData(e);if((await fetch("https://formspree.io/f/mykanvrr",{method:"POST",body:c,headers:{Accept:"application/json"}})).ok)e.style.display="none",o&&(o.style.display="block",o.style.textAlign="center",o.style.padding="18px",o.style.background="rgba(62,207,142,.07)",o.style.borderRadius="10px",o.style.border="1px solid rgba(62,207,142,.20)");else throw new Error("Server error")}catch{n&&(n.textContent="Something went wrong. Please try again or email officialatlanticbear@gmail.com.",n.style.color="var(--red)",n.style.fontSize="0.85rem",n.style.marginTop="8px"),a&&(a.disabled=!1,a.textContent="Try again")}})}function f(e,t=!0){const s=b("#main-content");s.style.opacity="0",s.style.transform="translateY(8px)",setTimeout(()=>{if(s.innerHTML=C[e](),H(e),window.scrollTo({top:0,behavior:"instant"}),s.style.transition="opacity 0.3s ease, transform 0.3s ease",requestAnimationFrame(()=>{s.style.opacity="1",s.style.transform="translateY(0)"}),G(),z(),e==="contact"&&_(),e==="level1"&&(L("paypal-button-container-P-97W753789S6299227NIEYJ3Y","P-97W753789S6299227NIEYJ3Y"),S("paypal-capture-container-l1",395)),e==="level2"&&(L("paypal-button-container-P-8EU78139GF1282545NHBFUDY","P-8EU78139GF1282545NHBFUDY"),S("paypal-capture-container-l2",803)),N(e),t){const a=e==="home"?"/":`/${e}`;window.location.pathname!==a&&history.pushState(null,"",a)}},150)}function K(e){e.addEventListener("click",t=>{const s=t.target.closest("[data-link]");if(!s||t.metaKey||t.ctrlKey||t.shiftKey||t.button!==0)return;t.preventDefault();const a=s.getAttribute("data-link");a&&C[a]&&f(a)})}function Q(){const e=b("#main-nav");if(!e)return;const t=()=>{window.scrollY>20?e.classList.add("scrolled"):e.classList.remove("scrolled")};window.addEventListener("scroll",t,{passive:!0})}window.formspree=window.formspree||function(){(window.formspree.q=window.formspree.q||[]).push(arguments)};const V="ATdtILYx2T5yoKB9AH86nDYMlD4bQ1PnOk_y_SOL3b42qP2E3nTfHlxL1KLFLu9w7Ao9jhTYvk4jfhEB";let $=!1;const E=[];function x(e){if($&&window.paypal){e();return}if(E.push(e),document.getElementById("paypal-sdk"))return;const t=document.createElement("script");t.id="paypal-sdk",t.src=`https://www.paypal.com/sdk/js?client-id=${V}&vault=true&currency=USD&components=buttons`,t.onload=()=>{$=!0,E.splice(0).forEach(s=>s())},t.onerror=()=>{document.querySelectorAll(".pp-loading").forEach(s=>{s.innerHTML='<a href="https://www.paypal.com" target="_blank" rel="noopener" class="btn btn-dark btn-block btn-large" style="margin-top:4px;">Pay via PayPal ↗</a>'})},document.head.appendChild(t)}function L(e,t){x(()=>{const s=window.paypal;if(!(s!=null&&s.Buttons))return;const a=document.getElementById(e);a&&(a.classList.remove("pp-loading"),s.Buttons({style:{shape:"rect",color:"blue",layout:"vertical",label:"subscribe"},createSubscription:(o,n)=>n.subscription.create({plan_id:t}),onApprove:o=>{alert("Subscription confirmed! ID: "+o.subscriptionID)}}).render("#"+e))})}function S(e,t){x(()=>{const s=window.paypal;if(!(s!=null&&s.Buttons))return;const a=document.getElementById(e);a&&(a.classList.remove("pp-loading"),s.Buttons({style:{shape:"rect",color:"gold",layout:"vertical",label:"buynow"},createOrder:(o,n)=>n.order.create({purchase_units:[{amount:{value:t.toFixed(2),currency_code:"USD"}}]}),onApprove:(o,n)=>n.order.capture().then(()=>{a.innerHTML=`<div style="text-align:center;padding:18px;background:rgba(62,207,142,.07);border-radius:10px;border:1px solid rgba(62,207,142,.20);"><div style="font-size:1.5rem;">✅</div><div style="font-weight:700;margin-top:6px;">Payment received!</div><div style="font-size:0.82rem;color:#888;margin-top:4px;">We'll be in touch within a few hours.</div></div>`}),onError:o=>{console.error("PayPal error",o),a.innerHTML='<div style="text-align:center;padding:12px;font-size:0.85rem;color:#c0392b;">Something went wrong. Please try again or email officialatlanticbear@gmail.com.</div>'}}).render("#"+e))})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");e.innerHTML=`
    ${D()}
    <main id="main-content" style="opacity:1; min-height:100vh;"></main>
    ${F()}
  `,K(e),Q();const t=A(window.location.pathname);f(t,!1),window.addEventListener("popstate",()=>{const s=A(window.location.pathname);f(s,!1)})});
