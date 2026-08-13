(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();const z=(t,e=document)=>e.querySelector(t),G=(t,e=document)=>[...e.querySelectorAll(t)],Q="atlanticbear_analytics_8d24";function B(t,e=0){const a=()=>{fetch(`https://abacus.jasoncameron.dev/hit/${Q}/${t}`).catch(()=>{});try{const s=ue();fetch(`https://abacus.jasoncameron.dev/hit/${Q}/${s}_${t}`).catch(()=>{})}catch{}};e>0?setTimeout(a,e):a()}const te=window.RECAPTCHA_SITE_KEY||"6Ldfp-gqAAAAABpP_placeholder_key";function ae(){const t=window.RECAPTCHA_SITE_KEY||te;if(document.getElementById("recaptcha-v3-script"))return;const e=document.createElement("script");e.id="recaptcha-v3-script",e.src=`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(t)}`,e.async=!0,e.defer=!0,document.head.appendChild(e)}async function se(t){const e=window.RECAPTCHA_SITE_KEY||te;return ae(),new Promise(a=>{const s=setTimeout(()=>{console.warn(`reCAPTCHA [${t}] timed out. Continuing submission.`),a(null)},2500),o=window.grecaptcha;if(o&&typeof o.ready=="function")try{o.ready(()=>{o.execute(e,{action:t}).then(i=>{clearTimeout(s),a(i)}).catch(i=>{clearTimeout(s),console.warn(`reCAPTCHA [${t}] execution error:`,i),a(null)})})}catch(i){clearTimeout(s),console.warn(`reCAPTCHA [${t}] error:`,i),a(null)}else clearTimeout(s),a(null)})}let V={};function ce(){oe();const t=e=>{V[`t${e}`]=window.setTimeout(()=>{B(`time_${e}s`)},e*1e3)};t(5),t(15),t(30),t(60)}function oe(){Object.values(V).forEach(clearTimeout),V={}}let O={moved:!1,calendar:!1,testimonials:!1},Y=null;function de(){ie(),O={moved:!1,video:!1,calendar:!1,testimonials:!1},Y=()=>{window.scrollY>50&&!O.moved&&(O.moved=!0,B("scroll_moved"));const t=document.getElementById("booking-calendar");if(t&&!O.calendar){const a=t.getBoundingClientRect();a.top+a.height/2<window.innerHeight&&(O.calendar=!0,B("scroll_calendar"))}const e=document.querySelector(".booking-step-card:last-child");e&&!O.testimonials&&e.getBoundingClientRect().top<window.innerHeight-300&&(O.testimonials=!0,B("scroll_testimonials"))},window.addEventListener("scroll",Y,{passive:!0})}function ie(){Y&&(window.removeEventListener("scroll",Y),Y=null)}function ue(){const t=new Date,e=new Date(t.toLocaleString("en-US",{timeZone:"Asia/Dubai"})),a=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${a}-${s}-${o}`}const v={arrow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.69 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.69A2 2 0 0122 16.92z"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2 .27-2.98-.31-3.5c-.56-.52-1.43-.8-2.69.5z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'};function pe(){return`
  <nav class="nav" id="main-nav">
    <a href="/" class="logo" data-link="home" id="logo-btn" aria-label="Atlantic Bear Home">
      <span class="logo-wordmark">Atlantic</span>
      <img src="/atlanticbear-mark.png" alt="Atlantic Bear Logo" class="logo-bear-img" width="56" height="56" fetchpriority="high" />
    </a>
    <div class="nav-links">
      <a href="/" class="nav-link" data-link="home"    id="nav-home">Home</a>
      <a href="/pricing" class="nav-link" data-link="pricing"  id="nav-pricing">Pricing</a>
      <a href="/testimonials" class="nav-link" data-link="testimonials" id="nav-testimonials">Testimonials</a>
      <a href="/contact" class="nav-link" data-link="contact" id="nav-contact">Contact</a>
    </div>
    <div class="nav-actions">
      <a href="/booking" class="btn btn-primary btn-sm btn-pulse" data-link="booking" id="nav-book-cta">Book a Call ${v.arrow}</a>
    </div>
  </nav>`}function me(){return`
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
          <span class="cc-badge">${v.code} How we build</span>
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
              <span class="cc-point-icon">${v.zap}</span>
              <span><strong>Days, not months.</strong> Groundwork that used to take weeks is done in an afternoon.</span>
            </li>
            <li>
              <span class="cc-point-icon">${v.palette}</span>
              <span><strong>Still fully custom.</strong> Every line is written for your business. No themes, no drag-and-drop.</span>
            </li>
            <li>
              <span class="cc-point-icon">${v.shield}</span>
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
  </section>`}const N={quote:"We approached Alexi at Atlantic Bear, who was absolutely fantastic at putting together our ideas and bringing them across on the website in a way that really engaged our target market.",name:"Sonder Training Group",role:"Training Provider, UAE",avatar:0},_=[{quote:"Five days from the first call to a live site. I had budgeted two months, and half of that for arguing about revisions.",name:"Tom Whitfield",role:"Founder, Dental Clinic",avatar:1},{quote:"We now come up first for our category in Dubai. Enquiries through the site have roughly tripled since launch.",name:"Priya Nair",role:"Director, Facilities Services",avatar:2},{quote:"They asked good questions, then just built it. I approved two rounds of small tweaks and that was the whole process.",name:"Marcus Oyelaran",role:"Manager, Hospitality Group",avatar:3},{quote:"Most of our customers are on their phones and the old site was unusable there. The new one loads instantly.",name:"Yasmin Farouk",role:"Owner, Fitness Studio",avatar:4},{quote:"Handover was clean. Domain, hosting, files, all in our name from day one, exactly as they promised.",name:"Lena Vasquez",role:"Founder, E-commerce",avatar:5}],ve=[[N,_[0],_[1]],[_[2],N,_[3]],[_[4],N,_[0]]],X=[{bg:"#3b69ff",fg:"#dfe8ff"},{bg:"#1e46c7",fg:"#d5e0ff"},{bg:"#6391ff",fg:"#eef3ff"},{bg:"#2a50e0",fg:"#dbe5ff"},{bg:"#142d80",fg:"#ccd9ff"},{bg:"#4a80ff",fg:"#e7eeff"},{bg:"#27418f",fg:"#d2ddff"},{bg:"#5b7cff",fg:"#e9efff"},{bg:"#1a3fb5",fg:"#d8e2ff"}];function ge(t,e){const a=X[e%X.length],s=7.2+e%3*.5,o=14.5+e%4*.8,i=19.5-e%3*.3;return`
    <span class="review-avatar-wrap">
      <svg class="review-avatar" viewBox="0 0 48 48" role="img" aria-label="Avatar for ${t}">
        <circle cx="24" cy="24" r="24" fill="${a.bg}" />
        <circle cx="24" cy="${i}" r="${s}" fill="${a.fg}" />
        <path d="M${24-o} 46 a${o} ${o} 0 0 1 ${o*2} 0 z" fill="${a.fg}" />
      </svg>
      <img class="review-avatar-img" src="/reviews/person-${e%9+1}.jpg" alt=""
           loading="lazy" width="42" height="42" onerror="this.remove()" />
    </span>`}function fe(t){return`
    <article class="review-card">
      <p class="review-quote">${t.quote}</p>
      <div class="review-author">
        ${ge(t.name,t.avatar)}
        <span class="review-author-meta">
          <span class="review-name">${t.name}</span>
          <span class="review-role">${t.role}</span>
        </span>
      </div>
    </article>`}function ye(){const t=ve.map((e,a)=>{const s=e.map(fe).join("");return`
      <div class="reviews-col reviews-col-${a+1}">
        <div class="reviews-track">${s}${s}</div>
      </div>`}).join("");return`
  <!-- REVIEWS WALL -->
  <section class="reviews-wall">
    <div class="container">
      <div class="reviews-head">
        <span class="reviews-badge">${v.star} Reviews</span>
        <h2>What our clients say</h2>
        <p>See what UAE businesses say about working with us.</p>
      </div>
    </div>
    <div class="reviews-cols">${t}</div>
  </section>`}function be(){return`<div class="section-waves" aria-hidden="true">${[{cls:"wave-1",fill:"#3b69ff",d:"M0,40 C150,18 350,62 600,40 C850,18 1050,62 1200,40 C1350,18 1550,62 1800,40 C2050,18 2250,62 2400,40"},{cls:"wave-2",fill:"#3b69ff",d:"M0,50 C200,72 400,28 600,50 C800,72 1000,28 1200,50 C1400,72 1600,28 1800,50 C2000,72 2200,28 2400,50"},{cls:"wave-3",fill:"#3b69ff",d:"M0,55 C120,25 280,85 600,55 C920,25 1080,85 1200,55 C1320,25 1480,85 1800,55 C2120,25 2280,85 2400,55"},{cls:"wave-4",fill:"#3b69ff",d:"M0,65 C180,45 420,85 600,65 C780,45 1020,85 1200,65 C1380,45 1620,85 1800,65 C1980,45 2220,85 2400,65"}].map(a=>`
    <div class="wave-layer ${a.cls}">
      <svg viewBox="0 0 2400 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="${a.d} L2400,140 L0,140 Z" fill="${a.fill}" />
      </svg>
    </div>`).join("")}</div>`}function we(){const t=[{num:"5 Days",desc:"From kick-off to live"},{num:"100%",desc:"Mobile responsive"},{num:"Fully Custom",desc:"No templates, ever"},{num:"3+ Years",desc:"Building in the UAE"},{num:"81%",desc:"Of customers research online first"},{num:"SEO Ready",desc:"Google-optimised from day one"}],e=()=>t.map(s=>`<span class="marquee-badge"><span class="marquee-num">${s.num}</span><span class="marquee-desc">${s.desc}</span></span><span class="marquee-sep">·</span>`).join(""),a=e()+e()+e()+e();return`
  <!-- HERO -->
  <section class="hero" style="position: relative; overflow: hidden;">
    <img src="/huge-bear-watermark.webp" class="huge-bear" alt="Atlantic Bear Watermark" fetchpriority="high" width="600" height="600" />
    <div class="container" style="position: relative; z-index: 1;">
      <h1>Your business deserves<br>to be <span class="hook-word"><span class="hook-drop-inner"><span class="hook-rig" aria-hidden="true"><span class="hook-line"></span><svg class="hook-icon" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2.4" stroke="currentColor" stroke-width="2"/><path d="M10 5.4 V17 C10 25.5 2.6 27 2.6 19.6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M2.6 19.6 L6 22.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span><span class="hook-label text-blue">found</span></span></span>.</h1>
      <p class="hero-sub">
        Custom websites built exclusively for UAE small businesses. Live in five days, fully managed, never a template.
      </p>
      <div class="hero-ctas">
        <a href="/booking" class="btn btn-primary btn-large btn-pulse" data-link="booking" id="hero-cta-book">
          Book a Call ${v.arrow}
        </a>
        <a href="/pricing" class="btn btn-secondary btn-large" data-link="pricing" id="hero-cta-plans">
          View Plans
        </a>
      </div>
      <p class="hero-note">No templates, no lock-in, no long timelines. <a href="/pricing" data-link="pricing">See plans and pricing</a></p>
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

  <!-- COMPETITOR BANNER -->
  <section class="competitor-banner">
    <div class="container">
      <p class="competitor-banner-text">Your competitor is capturing your clients online. <strong>Let's lock down your category in the UAE.</strong></p>
    </div>
  </section>

  <!-- THE FACTS SECTION -->
  <section class="facts-section" style="border-top:1px solid var(--border);">
    ${be()}
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
          Get Started with Market Leader ${v.arrow}
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
          <div class="feature-icon-wrap">${v.globe}</div>
          <h3>Capture clients already looking for you</h3>
          <p>People hear about you through word of mouth, Instagram, and Google Maps in the UAE. They search your name, find nothing, and quietly choose your competitor. We stop that.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${v.star}</div>
          <h3>Look like the biggest player in your category</h3>
          <p>A business running off WhatsApp and Instagram looks small. Your website makes you look like a 50-person company, even if you're 3 people.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${v.shield}</div>
          <h3>Own your online presence (stop renting it)</h3>
          <p>Instagram can shadowban you. The algorithm can bury you. Meta can suspend your account overnight. Your website is the one asset you actually control.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${v.phone}</div>
          <h3>Every screen, every device, every time</h3>
          <p>87% of your customers visit on their phone. Your site looks flawless on every screen: mobile, tablet, desktop. No pinching, no broken layouts.</p>
        </div>
        <div class="feature-item reveal">
          <div class="feature-icon-wrap">${v.rocket}</div>
          <h3>No contracts, no lock-in</h3>
          <p>If we do good work, you stay. We don't need a contract to make that happen. Cancel anytime, we hand over everything within 48 hours.</p>
        </div>
        <div class="feature-item reveal" style="display:flex; flex-direction:column; justify-content:center; background:var(--surface);">
          <h3 style="font-size:1.1rem; margin-bottom:8px;">Your total effort: under one hour</h3>
          <p style="margin-bottom:16px; font-size:0.82rem; color:var(--text-muted);">One 30-minute discovery call. One short form. One 30-minute review call. That's it. We handle design, copy, hosting, domain, and launch.</p>
          <a href="/booking" class="btn btn-primary btn-sm" data-link="booking" style="align-self:flex-start;">Book a Call ${v.arrow}</a>
        </div>
      </div>
    </div>
  </section>

  ${he()}

  <!-- TIER TEASERS (PACKAGES) SECTION -->
  <section class="teasers-section">
    <div class="container">
      <div class="teasers-header">
        <h2>Capture Your Category in the UAE</h2>
        <p>Two plans. Both fully managed. We run your online reputation while you run your business.</p>
      </div>
      <div class="teasers-grid" style="grid-template-columns: repeat(2, 1fr); max-width: 1000px; margin: 0 auto; gap: 28px;">

        <!-- Managed Plan Teaser -->
        <div class="teaser-card level-one-card">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">01</span>
            <span class="teaser-level-name">Most Popular</span>
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
            Explore Launch Plan ${v.arrow}
          </a>
        </div>

        <!-- Growth Plan Teaser -->
        <div class="teaser-card level-three-card">
          <div class="teaser-level-tag">
            <span class="teaser-level-num">02</span>
            <span class="teaser-level-name">Scale & Video</span>
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
            Explore Growth Plan ${v.arrow}
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
          Explore Meta Ads ${v.arrow}
        </a>
      </div>
    </div>
  </section>

  ${ye()}
  `}function ke(){return`
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
          Book Strategy Call ${v.arrow}
        </a>
      </div>

      <div class="feature-grid" style="grid-template-columns: repeat(2, 1fr); max-width: 900px; margin: 0 auto;">
        <div class="feature-item reveal" style="border-right: 1px solid var(--border); border-bottom: 1px solid var(--border);">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${v.zap}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Local UAE Targeting</h3>
          <p>We target active customers in Dubai, Abu Dhabi, or specific UAE locations who need your services immediately.</p>
        </div>

        <div class="feature-item reveal" style="border-right: none; border-bottom: 1px solid var(--border);">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${v.star}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Ad Copy & Creatives</h3>
          <p>We craft high-converting video and image ad creative designed to stop scrolling on Instagram & Facebook feeds.</p>
        </div>

        <div class="feature-item reveal" style="border-right: 1px solid var(--border); border-bottom: none;">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${v.phone}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Direct WhatsApp & Form Leads</h3>
          <p>Leads land straight on your phone or email so you can reply and convert clients without delay.</p>
        </div>

        <div class="feature-item reveal" style="border-right: none; border-bottom: none;">
          <div class="feature-icon-wrap" style="color: #EB5C5C; background: rgba(235,92,92,0.1);">${v.rocket}</div>
          <h3 style="color: #000; font-size: 1.05rem;">Continuous Management</h3>
          <p>We monitor ad performance daily, optimize budget allocation, and provide clear reports so you track your ROI.</p>
        </div>
      </div>

    </div>
  </section>
  `}function Ee(){return`
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
  `}function Ae(){return`
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
          Book a Call ${v.arrow}
        </a>
      </div>
    </div>
  </section>`}function xe(){return`
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

      <!-- CASE STUDY WRITE-UP -->
      <div class="case-study reveal" style="transition-delay:0.1s;">
        <div class="case-study-main">
          <h2>What we changed, and why</h2>
          <p>Sonder Training Group deliver professional training. Their previous website did not reflect that. It had been put together years earlier, had drifted out of date, and the layout worked against them: the important information sat low on the page, the structure was difficult to scan, and the whole thing had the look of a site built once and never revisited. For a business whose customers are assessing credibility before they ever make contact, that is an expensive problem.</p>
          <p>The brief was straightforward. Make it look like the organisation it represents, make it clear what they offer, and make it easy for someone who has just found them to take the next step.</p>
          <p>We rebuilt the site rather than patching it. The content was restructured so the courses and the offer appear immediately instead of being buried, and each section was written to answer the question a prospective client actually has at that point on the page. The visual design was rebuilt around clear typography and generous spacing, so the page reads as considered rather than crowded.</p>
          <p>The technical work matters as much as the appearance, even though none of it is visible. The site was built mobile-first, because most people who search for training providers do it on a phone. Pages were kept light so they load quickly on mobile data rather than only on office wifi. Headings, page titles, and meta descriptions were structured properly so search engines can understand what each page is about, and the site was given a sitemap and an SSL certificate as standard.</p>
          <p>The result is a site that does the job the old one could not: it presents the business at the level it actually operates at, and it gives visitors an obvious route to get in touch.</p>
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
          <a href="https://sondertraininggroup.com/" target="_blank" rel="noopener" class="btn btn-secondary btn-sm case-study-link">Visit the live site ${v.arrow}</a>
        </aside>
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
          Book a Call ${v.arrow}
        </a>
        <a href="/pricing" class="btn btn-secondary btn-large" data-link="pricing" id="testimonials-plans-cta">
          View Plans
        </a>
      </div>
    </div>
  </section>`}function Ce(){return`
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${v.phone}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Phone</div>
                  <div class="contact-method-value">+971-50-244-6531</div>
                </div>
              </a>
              <a href="mailto:officialatlanticbear@gmail.com" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${v.mail}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Email</div>
                  <div class="contact-method-value">officialatlanticbear@gmail.com</div>
                </div>
              </a>
              <a href="https://www.instagram.com/officialatlanticbear/" target="_blank" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${v.instagram}</svg>
                </div>
                <div>
                  <div class="contact-method-label">Instagram</div>
                  <div class="contact-method-value">@officialatlanticbear</div>
                </div>
              </a>
              <div class="contact-method">
                <div class="contact-method-icon" style="background:rgba(59,105,255,0.08); color:var(--blue);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${v.map}</svg>
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
                Send message ${v.arrow}
              </button>
            </form>
          </div>
        </div>

        ${Ie()}
      </div>
    </div>
  </div>`}function ne(t,e,a){const s=a.map(o=>`
    <section class="legal-block reveal">
      <h2>${o.h}</h2>
      ${o.p.map(i=>`<p>${i}</p>`).join("")}
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
  </section>`}function Te(){return ne("Terms &amp; Conditions","August 2026",[{h:"1. Who we are",p:['These terms govern the website design, development, hosting, and maintenance services provided by Atlantic Bear ("we", "us", "our") to you, the client. Our registered place of business is Dubai, United Arab Emirates. You can reach us at officialatlanticbear@gmail.com or on +971-50-244-6531.',"By engaging us to build or maintain a website, or by paying an invoice, you accept these terms. If you are agreeing on behalf of a company, you confirm that you are authorised to bind that company."]},{h:"2. Services and scope",p:["We design, build, host, and maintain websites. The exact deliverables for your project — the number of pages, the features included, and the timeline — are agreed with you in writing before work begins, whether by email, proposal, or the plan you select on our pricing page.","Anything not set out in that written scope is not included. Requests that fall outside it, such as adding an online shop, a booking system, additional languages, or a substantial new section, are treated as new work and quoted separately. We will always tell you the cost before starting, and we will never add charges to an invoice you have not agreed to."]},{h:"3. Fees and payment",p:["Our plans consist of a one-off build fee and a recurring monthly fee, as published on our pricing page or as quoted to you directly. The build fee covers design and development up to launch. The monthly fee covers hosting, domain renewal, SSL, security and software updates, backups, uptime monitoring, and unlimited small content changes.","Invoices are payable within 14 days of issue unless we have agreed otherwise in writing. If a monthly payment is more than 30 days overdue we may suspend hosting and support after giving you at least 7 days written notice and a reasonable chance to settle. We will not delete your site or your data because of a late payment without telling you first.","All fees are stated in UAE dirhams and are exclusive of any applicable VAT or other government charges, which will be added where legally required."]},{h:"4. Your responsibilities",p:["To build your site we need certain things from you: accurate information about your business, timely feedback at review stages, and any brand assets, photography, or existing content you want us to use.","You confirm that anything you supply is either owned by you or properly licensed to you, and that we may use it to build and operate your website. You are responsible for the accuracy and legality of the information you ask us to publish, including prices, claims about your services, qualifications, and any regulated wording that applies to your industry.","If a project stalls because we are waiting on materials or approvals from you, timelines move accordingly. We will keep asking, but we cannot hold a build slot open indefinitely."]},{h:"5. Ownership of your website",p:["Your domain name is registered in your name and belongs to you. On full payment of the build fee, the finished website design, page content, and site files we produce for you become yours to keep.","This applies whether or not you stay with us. If you decide to move to another provider, we will transfer your domain, export your site files, and provide the access you need to take over hosting, and we will do it within 48 hours of your request. We do not hold domains, files, or content hostage.","Two things stay with us: any generic underlying code, tooling, or components we reuse across client projects, and any third-party software or fonts, which remain subject to their own licences. This does not restrict your use of your own website in any way."]},{h:"6. Content changes and support",p:["While you are on an active monthly plan, small content changes are unlimited and included. That covers text edits, prices, opening hours, images, staff and service listings, and similar updates. Requests are usually completed the same working day.","Support is provided by email, phone, and WhatsApp during UAE business hours. We aim to respond within a few hours. Substantial new functionality is not covered by the monthly fee and is quoted separately as set out in section 2."]},{h:"7. Hosting, uptime, and backups",p:["We host your site on established third-party infrastructure and monitor it for availability. We take regular backups so your site can be restored if something goes wrong.","We aim for continuous availability but we do not guarantee uninterrupted service. Downtime can arise from causes outside our control, including failures at our hosting providers, domain registry issues, denial-of-service attacks, and internet outages. Where a problem is within our control we will fix it as a priority and keep you informed."]},{h:"8. Cancellation",p:["There is no minimum term and no cancellation fee. You may cancel your monthly plan at any time by telling us in writing. Your plan runs to the end of the period you have already paid for, and we do not refund part-months.","On cancellation we hand over your domain, files, and the access required to move hosting elsewhere, within 48 hours. Once your plan ends we stop hosting the site, so please arrange your new hosting before the transfer.","We may end our side of the arrangement by giving you 30 days notice, or immediately if you use our services unlawfully or ask us to publish content that is illegal, fraudulent, or infringing."]},{h:"9. Liability",p:["We provide our services with reasonable skill and care. Nothing in these terms limits our liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be limited.","Subject to that, our total liability to you in connection with our services is limited to the total fees you have paid us in the 12 months before the claim arose. We are not liable for indirect or consequential losses, including lost profits, lost revenue, lost business, or loss of anticipated savings.","We are not responsible for search engine rankings, advertising performance, or the commercial results of your website. We build sites to a professional technical standard, but no agency can guarantee a position in search results or a level of sales."]},{h:"10. Governing law",p:["These terms are governed by the laws of the United Arab Emirates and the applicable laws of the Emirate of Dubai. Any dispute that we cannot resolve between us will be subject to the exclusive jurisdiction of the courts of Dubai.","If any part of these terms is found to be unenforceable, the rest continues to apply. We may update these terms from time to time and will publish the current version on this page with the date it was last changed."]}])}function Se(){return ne("Privacy Policy","August 2026",[{h:"1. Introduction",p:["This policy explains what personal information Atlantic Bear collects through this website, why we collect it, how we use and store it, and what rights you have over it. We are based in Dubai, United Arab Emirates, and you can contact us about anything in this policy at officialatlanticbear@gmail.com or on +971-50-244-6531.","We keep this deliberately plain. We are a small web design business, not an advertising network, and we do not sell personal information to anyone."]},{h:"2. Information you give us directly",p:["When you fill in our contact form we collect your name, email address, business name, the plan you are interested in, and the message you write. When you book a call we collect your name, email address, and phone number so we can contact you and hold the appointment.","We use this information for one purpose: to respond to you and to provide the services you have asked about. We do not add you to unrelated marketing lists, and we do not pass your details to third parties for their own marketing."]},{h:"3. Information collected automatically",p:["Like most websites, ours records basic technical information when you visit: your IP address, browser type and version, device type, the pages you view, how long you spend on them, and the site or advertisement that referred you.","We use this in aggregate to understand which pages are useful, to find broken or slow pages, and to see whether our advertising is working. It is not used to build a personal profile of you."]},{h:"4. Cookies and third-party services",p:["We use a small number of third-party services, and each may set cookies or receive some data when you use our site.","Google reCAPTCHA protects our forms from automated spam. It collects device and browsing signals to tell humans from bots, and is governed by Google's own privacy policy and terms. Calendly powers our booking scheduler and receives the name, email, and phone number you enter when booking. Meta Pixel measures whether visitors who arrive from our Facebook and Instagram advertising go on to enquire, and may be used to show you our ads elsewhere. Our contact form is delivered through Formspree, and booking enquiries are recorded in Google Sheets.","You can block or delete cookies in your browser settings at any time. Doing so may stop the booking scheduler or the contact form from working properly, but the rest of the site will function normally."]},{h:"5. Legal basis and consent",p:["Where you submit a form, we process your information because you have asked us to respond to you and because it is necessary to provide the service you requested. Where we use analytics and advertising measurement, we rely on our legitimate interest in understanding and improving how our business reaches customers.","You can withdraw consent or object to our use of your information at any time by contacting us using the details in section 1."]},{h:"6. How long we keep your information",p:["Enquiries that do not become projects are kept for up to 24 months so we can follow up and so we have a record of what was discussed, then deleted. Records relating to clients, including project files, correspondence, and invoices, are kept for the duration of the engagement and for as long afterwards as UAE accounting and tax rules require.","You can ask us to delete your information sooner and we will do so unless we are legally required to keep it."]},{h:"7. How we protect your information",p:["Your data is transmitted over encrypted HTTPS connections and stored in reputable third-party services that provide their own security controls. Access is limited to the people who need it to do the work.","No system is completely secure, and we will not pretend otherwise. If a breach occurs that affects your personal information, we will tell you and any relevant authority as required."]},{h:"8. Sharing your information",p:["We share personal information only with the service providers named in section 4, which process it on our behalf to make the site and our booking process work, and with professional advisers or authorities where we are legally required to do so.","We do not sell, rent, or trade your personal information. Some of these providers are based outside the UAE, which means your information may be processed abroad under the protections those providers offer."]},{h:"9. Your rights",p:["You can ask us what personal information we hold about you, ask for a copy of it, ask us to correct anything inaccurate, ask us to delete it, or object to how we are using it. You can also ask us to stop contacting you at any time.","Write to officialatlanticbear@gmail.com and we will respond within 30 days. There is no charge for making a request."]},{h:"10. Changes and contact",p:["We may update this policy as our services or the tools we use change. The current version is always published here with the date it was last updated, and material changes will be made clear.","If you have a question or a complaint about how we handle your information, contact us first at officialatlanticbear@gmail.com or +971-50-244-6531. You also have the right to raise the matter with the relevant UAE data protection authority."]}])}const Be=[{q:"How long does it take to build my website?",a:"Most websites go from kick-off to live in about five working days. We can move that quickly because we do not start from a blank page and we do not wait on you for content. After a single 30-minute call we handle the structure, the copywriting, the layouts, and the images ourselves, then bring you a finished site to review. Larger builds with many pages, e-commerce, or custom booking systems can take longer, and we will tell you honestly at the first call if yours is one of them rather than promising five days and missing it."},{q:"How much does a website cost?",a:"The Launch Plan is AED 3,500 to build plus AED 300 per month, and the Growth Plan is AED 6,500 to build plus AED 300 per month. The build fee is one-off. The monthly fee covers hosting, your domain, security and software updates, backups, and unlimited small content changes. There are no setup fees, no per-page charges, and no surprise invoices later. If your project genuinely needs something outside those plans we will quote it before any work starts."},{q:"Who owns the website, the domain, and the files?",a:"You do, from day one. The domain is registered in your business name, not ours, and the site files are yours. This matters more than most business owners realise: a common practice in the industry is to register the domain under the agency account, which means leaving costs you your web address and your search rankings. If you ever decide to move to another provider or bring the work in-house, we hand over everything within 48 hours and we do not hold anything back."},{q:"Do I have to write the content myself?",a:"No. Writing your own website copy is the single biggest reason projects stall for months, so we remove it from your plate entirely. We research your market, look at what your competitors in the UAE are saying, and write the copy for you. You review it and tell us what to change. If you already have wording, brand guidelines, or professional photography you want used, send it over and we will build around it."},{q:"Will my website work properly on mobile?",a:"Yes, and we treat mobile as the primary design rather than an afterthought. The majority of people who find a local UAE business search on a phone, often while they are out and deciding where to go. Every site we build is laid out for small screens first, tested on real devices, and tuned so it loads fast on mobile data rather than only on office wifi. Slow, awkward mobile sites are one of the fastest ways to lose a customer who was ready to buy."},{q:"Will my business show up on Google?",a:"Every site is built with the technical groundwork search engines look for: clean page structure, proper headings, descriptive page titles and meta descriptions, fast loading times, a sitemap, and mobile-friendly layouts. That is what makes your site eligible to rank well. We also set up your pages around the words your customers actually search for in your category and city. Search results build over weeks and months rather than overnight, and any agency promising you the top spot immediately is not being straight with you."},{q:"What does the monthly fee actually cover?",a:"Hosting, your domain renewal, an SSL certificate, ongoing security and software updates, regular backups, uptime monitoring, and unlimited small content changes such as prices, opening hours, staff, photos, and service descriptions. Email us a change and it is usually done the same day. It is not a support ticket queue and there is no limit on how often you can ask."},{q:"Am I locked into a contract?",a:"No. There is no minimum term and no cancellation fee. The monthly plan runs month to month and you can stop whenever you want. We would rather keep your business by doing good work than by trapping you in paperwork. If you do leave, we hand over your domain, files, and hosting access within 48 hours."},{q:"Do you work with businesses outside Dubai?",a:"Yes. We are based in Dubai and work with businesses across the whole of the UAE, including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Everything is handled remotely by call, email, and WhatsApp, so where you are based makes no difference to how quickly we can build or how well we can support you afterwards."},{q:"What if I want changes after the site goes live?",a:"Small content changes are included in the monthly plan for as long as you are with us, with no cap and no extra charge. That covers text, prices, images, opening hours, adding staff or services, and similar updates. Larger pieces of work, such as adding a whole new section, an online shop, or a booking system, are quoted separately so you always know the cost before we begin."}];function Ie(){return`
  <section class="faq-section">
    <div class="faq-head reveal">
      <div class="section-label">FAQ</div>
      <h2>Questions we get asked a lot</h2>
      <p>If your question is not here, call, email, or message us and we will answer it straight.</p>
    </div>
    <div class="faq-list reveal">${Be.map(e=>`
    <details class="faq-item">
      <summary class="faq-q">
        <span>${e.q}</span>
        <span class="faq-chevron" aria-hidden="true"></span>
      </summary>
      <div class="faq-a"><p>${e.a}</p></div>
    </details>`).join("")}</div>
  </section>`}function Le(){return`
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
  `}function Me(){return`
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
  `}function De(){return`
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
  `}const re={home:we,pricing:Ee,work:Ae,contact:Ce,testimonials:xe,booking:Le,booked:Me,"booking-new":De,"meta-ads":ke,terms:Te,privacy:Se},J={home:{title:"Atlantic Bear | Custom Website Design Agency in the UAE",desc:"Atlantic Bear is a leading website agency in the UAE. We build custom, premium websites for businesses, live in five days and fully managed."},pricing:{title:"More Clients Starts Here | Atlantic Bear Pricing",desc:"Transparent pricing for fully-managed brand positioning and high-conversion client acquisition platforms in the UAE. See your online presence live in 5 days, see it finished before you pay anything."},work:{title:"Our Work | Atlantic Bear Portfolio",desc:"Explore custom websites designed and developed for UAE businesses. Professional layouts, mobile optimization, and fast load times."},contact:{title:"Contact Atlantic Bear | Start Your UAE Website Project",desc:"Get in touch with Atlantic Bear. Let's discuss your business website needs. Fast response and custom layouts in Dubai & UAE."},testimonials:{title:"Client Testimonials & Transformations | Atlantic Bear",desc:"See real website transformations by Atlantic Bear. Before and after case studies showing how we help businesses across the UAE look professional online."},booking:{title:"Book a Strategy Call | Atlantic Bear",desc:"Watch our video, schedule your free 30-minute strategy call, and view our client success stories. Start your UAE website project today."},booked:{title:"Call Confirmed | Atlantic Bear",desc:"Your call is locked in! Make sure to add the event to your calendar and watch the pre-call video before our session."},"booking-new":{title:"Book a Call (New Flow) | Atlantic Bear Discovery Session",desc:"Watch our video, tell us about yourself, and schedule your free 30-minute discovery call. Start your UAE website project today."},"meta-ads":{title:"Meta Ads for UAE Small Businesses | Atlantic Bear",desc:"Drive local client leads via Facebook & Instagram ads for small businesses in the UAE. AED 2,500/mo retainer."},terms:{title:"Terms & Conditions | Atlantic Bear",desc:"The terms covering Atlantic Bear website design, development, hosting, and maintenance services for businesses in the UAE."},privacy:{title:"Privacy Policy | Atlantic Bear",desc:"How Atlantic Bear collects, uses, stores, and protects the personal information you share through our website."}};function We(t){const e=J[t]||J.home;document.title=e.title;let a=document.querySelector('meta[name="description"]');a||(a=document.createElement("meta"),a.setAttribute("name","description"),document.head.appendChild(a)),a.setAttribute("content",e.desc);let s=document.querySelector('link[rel="canonical"]');s||(s=document.createElement("link"),s.setAttribute("rel","canonical"),document.head.appendChild(s));const o=`${window.location.origin}${t==="home"?"":"/"+t}`;s.setAttribute("href",o);const i={"og:title":e.title,"og:description":e.desc,"og:url":o,"og:type":"website","og:image":`${window.location.origin}/logo.png`};for(const[g,y]of Object.entries(i)){let m=document.querySelector(`meta[property="${g}"]`);m||(m=document.createElement("meta"),m.setAttribute("property",g),document.head.appendChild(m)),m.setAttribute("content",y)}const u={"twitter:card":"summary_large_image","twitter:title":e.title,"twitter:description":e.desc,"twitter:image":`${window.location.origin}/logo.png`};for(const[g,y]of Object.entries(u)){let m=document.querySelector(`meta[name="${g}"]`);m||(m=document.createElement("meta"),m.setAttribute("name",g),document.head.appendChild(m)),m.setAttribute("content",y)}}function Z(t){const e=t.replace(/^\/|\/$/g,"");return e==="pricing"||e==="work"||e==="contact"||e==="testimonials"||e==="booking"||e==="booking-new"||e==="meta-ads"||e==="booked"||e==="terms"||e==="privacy"?e:"home"}function Pe(t){G("#main-nav [data-link]").forEach(a=>a.classList.remove("active"));const e=z(`#main-nav [data-link="${t}"].nav-link`);e&&e.classList.add("active")}const $e=[".section-title",".section-sub",".facts-headline",".fact-hero-block",".facts-stat-block",".basic-system-card",".step",".feature-item",".teaser-card",".tier-card",".level-one-card",".pricing-plan-card",".guarantee-card",".pricing-bonus-block",".problem-card",".contact-method",".contact-form-card",".cc-copy",".cc-visual",".reviews-head",".competitor-banner-text",".meta-ads-teaser-box"].join(",");function qe(){Array.from(document.querySelectorAll($e)).forEach(e=>{if(e.classList.contains("reveal")||e.classList.contains("revealed"))return;e.classList.add("reveal");const a=e.parentElement;if(!a)return;const o=Array.from(a.children).filter(i=>i.classList.contains("reveal")).indexOf(e);o>0&&!e.style.transitionDelay&&(e.style.transitionDelay=`${Math.min(o*.07,.35)}s`)})}function Ue(){const t=G(".reveal"),e=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(s.target.classList.add("revealed"),e.unobserve(s.target))})},{threshold:.07,rootMargin:"0px 0px -30px 0px"});t.forEach(a=>e.observe(a))}function Oe(t){const e=t.innerHTML,a=(t.textContent||"").trim();if(!a)return;t.textContent="",t.classList.add("is-typing");let s=0;const o=()=>{s+=1,t.textContent=a.slice(0,s),s<a.length?window.setTimeout(o,105):(t.innerHTML=e,t.classList.remove("is-typing"))};window.setTimeout(o,90)}function Re(){const t=G(".fact-hero-num, .facts-stat-num");if(!t.length||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;t.forEach(a=>{a.style.minHeight=`${a.getBoundingClientRect().height}px`});const e=new IntersectionObserver(a=>{a.forEach((s,o)=>{if(!s.isIntersecting)return;const i=s.target;e.unobserve(i),window.setTimeout(()=>Oe(i),o*150)})},{threshold:.4});t.forEach(a=>e.observe(a))}function Fe(){const t=document.getElementById("contact-form");if(!t)return;const e=document.createElement("script");e.src="https://unpkg.com/@formspree/ajax@1",e.defer=!0,document.head.appendChild(e),e.onload=()=>{window.formspree&&window.formspree("initForm",{formElement:"#contact-form",formId:"mykanvrr"})},t.addEventListener("submit",async a=>{a.preventDefault();const s=document.getElementById("form-submit-btn"),o=document.querySelector("[data-fs-success]"),i=document.querySelector('[data-fs-error]:not([data-fs-error="name"]):not([data-fs-error="email"]):not([data-fs-error="message"])');s&&(s.disabled=!0,s.textContent="Sending...");try{const u=await se("contact_submit"),g=new FormData(t);if(u&&g.append("g-recaptcha-response",u),(await fetch("https://formspree.io/f/mykanvrr",{method:"POST",body:g,headers:{Accept:"application/json"}})).ok)t.style.display="none",o&&(o.style.display="block",o.style.textAlign="center",o.style.padding="18px",o.style.background="rgba(62,207,142,.07)",o.style.borderRadius="10px",o.style.border="1px solid rgba(62,207,142,.20)");else throw new Error("Server error")}catch{i&&(i.textContent="Something went wrong. Please try again or email officialatlanticbear@gmail.com.",i.style.color="var(--red)",i.style.fontSize="0.85rem",i.style.marginTop="8px"),s&&(s.disabled=!1,s.textContent="Try again")}})}function K(t){window.getComputedStyle(t).position==="static"&&(t.style.position="relative");const a=document.createElement("div");a.className="calendly-spinner-wrap",a.style.display="flex",a.style.justifyContent="center",a.style.alignItems="center",a.style.position="absolute",a.style.top="50%",a.style.left="50%",a.style.transform="translate(-50%, -50%)",a.style.pointerEvents="none",a.style.zIndex="1",a.innerHTML=`
    <div style="width: 40px; height: 40px; border: 4px solid rgba(59,105,255,0.1); border-left-color: var(--accent, #3b69ff); border-radius: 50%; animation: calendly-spin 1s linear infinite;"></div>
    <style>
      @keyframes calendly-spin {
        to { transform: rotate(360deg); }
      }
    </style>
  `,t.appendChild(a);const s=new MutationObserver(()=>{const o=t.querySelector("iframe");o&&(o.style.position="relative",o.style.zIndex="2",o.onload=()=>{a.remove()},setTimeout(()=>{a.remove()},2500),s.disconnect())});s.observe(t,{childList:!0})}function _e(){document.querySelectorAll(".custom-testimonial-video-wrap").forEach(e=>{const a=e.querySelector(".testimonial-video-overlay"),s=e.querySelector("video");a&&s&&a.addEventListener("click",o=>{o.stopPropagation(),s.muted=!1,s.currentTime=0,s.controls=!0,a.style.display="none",s.play().catch(i=>{console.error("Play failed:",i)})})})}function je(){const t=document.querySelector(".calendly-inline-widget");if(!t)return;const e=()=>{t.innerHTML="",K(t),window.Calendly.initInlineWidget({url:"https://calendly.com/officialatlanticbear/demo-call?hide_gdpr_banner=1&primary_color=3366ff",parentElement:t})};if(window.Calendly){e();return}const a=document.getElementById("calendly-sdk");if(a)a.addEventListener("load",e,{once:!0});else{const s=document.createElement("script");s.id="calendly-sdk",s.src="https://assets.calendly.com/assets/external/widget.js",s.async=!0,s.addEventListener("load",e,{once:!0}),document.head.appendChild(s)}}function Ye(t=!1){const e=document.getElementById("booking-video"),a=document.getElementById("bv-overlay"),s=document.getElementById("bv-play-btn"),o=document.getElementById("bv-controls"),i=document.getElementById("bv-playpause"),u=document.getElementById("bv-progress-fill"),g=document.getElementById("bv-progress-thumb"),y=document.getElementById("bv-progress-wrap"),m=document.getElementById("bv-time"),D=document.getElementById("bv-mute"),f=document.getElementById("bv-volume"),l=document.getElementById("bv-fullscreen"),p=document.getElementById("custom-video-wrap");if(!e||!a||!s||!o||!i)return;let x=null,k=null;const w=()=>{try{const n=window.AudioContext||window.webkitAudioContext;if(!n)return;if(!x){x=new n;const c=x.createMediaElementSource(e);k=x.createGain(),k.gain.value=2,c.connect(k),k.connect(x.destination)}x.state==="suspended"&&x.resume()}catch(n){console.warn("AudioContext boost failed:",n)}},I=e.getAttribute("data-src"),P=()=>{I&&!e.getAttribute("src")&&(e.setAttribute("src",I),e.load())};let A=!0;const W=5,q=()=>{e.muted=!0,e.currentTime=0,e.play().catch(()=>{})};e.addEventListener("timeupdate",()=>{A&&e.currentTime>=W&&(e.currentTime=0)}),setTimeout(q,800);const M=n=>{const c=Math.floor(n/60),h=Math.floor(n%60);return`${c}:${h.toString().padStart(2,"0")}`},S=90,C=60,$=(n,c)=>!t||c<=S?n/c*100:n<=S?n/S*C:C+(n-S)/(c-S)*(100-C),U=(n,c)=>!t||c<=S?n/100*c:n<=C?n/C*S:S+(n-C)/(100-C)*(c-S),b=()=>{if(!e.duration)return;const n=$(e.currentTime,e.duration);u&&(u.style.width=n+"%"),g&&(g.style.left=n+"%"),m&&(m.textContent=`${M(e.currentTime)} / ${M(e.duration)}`)},T=n=>{const c=i==null?void 0:i.querySelector(".icon-play"),h=i==null?void 0:i.querySelector(".icon-pause");c&&(c.style.display=n&&!A?"none":"block"),h&&(h.style.display=n&&!A?"block":"none"),a&&(a.style.display=n&&!A?"none":"flex"),p&&(n&&!A?p.classList.add("playing"):p.classList.remove("playing"))};a.addEventListener("click",()=>{if(A){A=!1,e.muted=!1;const n=e.src.split("#")[0];e.src!==n&&(e.src=n,e.load()),e.currentTime=0}P(),w(),T(!0),e.play()}),e.addEventListener("click",()=>{if(A){A=!1,e.muted=!1;const n=e.src.split("#")[0];e.src!==n&&(e.src=n,e.load()),e.currentTime=0,w(),T(!0),e.play();return}P(),w(),e.paused?e.play():e.pause()}),e.addEventListener("play",()=>T(!0)),e.addEventListener("pause",()=>T(!1)),e.addEventListener("ended",()=>T(!1)),e.addEventListener("timeupdate",b),e.addEventListener("loadedmetadata",b);let r=!1;const d={m25:!1,m50:!1,m75:!1,m100:!1},E={};if(e.addEventListener("timeupdate",()=>{const n=e.duration;if(!n)return;const c=e.currentTime,h=c/n*100;!r&&c>.5&&(r=!0,B("videoplay")),h>=25&&!d.m25&&(d.m25=!0,B("videowatch_25pct")),h>=50&&!d.m50&&(d.m50=!0,B("videowatch_50pct")),h>=75&&!d.m75&&(d.m75=!0,B("videowatch_75pct")),h>=98&&!d.m100&&(d.m100=!0,B("videowatch_complete"));const L=[10,30],R=Math.floor(c);L.forEach(F=>{R>=F&&!E[F]&&(E[F]=!0,B(`videowatch_${F}s`))})}),i.addEventListener("click",()=>{P(),w(),e.paused?e.play():e.pause()}),y){const n=h=>{const L=y.getBoundingClientRect(),R=h instanceof MouseEvent?h.clientX:h.touches[0].clientX,F=Math.max(0,Math.min(100,(R-L.left)/L.width*100));e.currentTime=U(F,e.duration),b()};let c=!1;y.addEventListener("mousedown",h=>{c=!0,n(h)}),window.addEventListener("mousemove",h=>{c&&n(h)}),window.addEventListener("mouseup",()=>{c=!1}),y.addEventListener("touchstart",h=>n(h),{passive:!0}),y.addEventListener("touchmove",h=>n(h),{passive:!0})}if(f&&f.addEventListener("input",()=>{e.volume=parseFloat(f.value),e.muted=e.volume===0}),D&&D.addEventListener("click",()=>{e.muted=!e.muted,f&&(f.value=e.muted?"0":String(e.volume||1))}),l&&p&&l.addEventListener("click",()=>{if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&e.webkitEnterFullscreen){e.webkitEnterFullscreen();return}!!(document.fullscreenElement||document.webkitFullscreenElement)?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():p.requestFullscreen?p.requestFullscreen():p.webkitRequestFullscreen?p.webkitRequestFullscreen():e.webkitEnterFullscreen&&e.webkitEnterFullscreen()}),p){let n;const c=()=>{o.style.opacity="1",clearTimeout(n),n=window.setTimeout(()=>{e.paused||(o.style.opacity="0")},2500)};p.addEventListener("mousemove",c),p.addEventListener("mouseenter",c),p.addEventListener("mouseleave",()=>{e.paused||(o.style.opacity="0")}),e.addEventListener("play",()=>{n=window.setTimeout(()=>{o.style.opacity="0"},2500)}),e.addEventListener("pause",()=>{o.style.opacity="1",clearTimeout(n)})}}function Ne(){const t=document.getElementById("booking-modal"),e=document.getElementById("book-demo-btn-v2"),a=document.getElementById("booking-modal-close-btn"),s=document.getElementById("modal-step-1"),o=document.getElementById("modal-step-2"),i=document.getElementById("modal-step-3"),u=document.getElementById("modal-step-num"),g=document.getElementById("modal-step-title"),y=document.getElementById("modal-step-badge"),m=document.getElementById("modal-progress-bar"),D=document.getElementById("modal-step1-form"),f=document.getElementById("modal-input-name"),l=document.getElementById("modal-input-phone"),p=document.getElementById("modal-step1-error"),x=document.getElementById("modal-confirm-pricing-link");if(!t||!a)return;t.parentElement!==document.body&&document.body.appendChild(t);let k="",w="",I="";f&&localStorage.getItem("feather_booking_name")&&(f.value=localStorage.getItem("feather_booking_name")||""),l&&localStorage.getItem("feather_booking_phone")&&(l.value=localStorage.getItem("feather_booking_phone")||"");const P=document.getElementById("phone-flag-prefix"),A={"+971":"🇦🇪","+966":"🇸🇦","+968":"🇴🇲","+974":"🇶🇦","+973":"🇧🇭","+965":"🇰🇼","+44":"🇬🇧","+1":"🇺🇸","+91":"🇮🇳","+92":"🇵🇰","+63":"🇵🇭","+20":"🇪🇬","+27":"🇿🇦","+33":"🇫🇷","+49":"🇩🇪","+61":"🇦🇺","+62":"🇮🇩","+90":"🇹🇷","+234":"🇳🇬","+254":"🇰🇪"},W=()=>{if(!P||!l)return;const r=l.value.trim();let d="🇦🇪";for(const[E,n]of Object.entries(A))if(r.startsWith(E)){d=n;break}P.textContent=d},q=()=>{if(!l)return;let r=l.value,d="";for(const L of Object.keys(A))if(r.startsWith(L)){d=L+" ";break}if(!d&&r.startsWith("+")){const L=r.indexOf(" ");if(L>0)d=r.substring(0,L+1);else{const R=r.match(/^\+\d+/);R&&(d=R[0]+" ")}}const n=r.substring(d.length).replace(/\D/g,"").substring(0,9);let c="";n.length>0&&(n.length<=2?c=n:n.length<=5?c=`${n.substring(0,2)} ${n.substring(2)}`:c=`${n.substring(0,2)} ${n.substring(2,5)} ${n.substring(5)}`);const h=d+c;l.value!==h&&(l.value=h)};l&&((!l.value||l.value.trim()===""||l.value.trim()==="+971")&&(l.value="+971 "),l.addEventListener("input",r=>{const d=r;if(d.inputType&&d.inputType.startsWith("delete")){W();return}q(),W()}),W());const M=()=>{if(!k||!w)return;const r=`${k}|${w}`;if(I===r)return;I=r;const d=document.getElementById("modal-calendly-container");if(!d)return;d.innerHTML="",K(d);const c={url:`https://calendly.com/officialatlanticbear/demo-call?hide_gdpr_banner=1&primary_color=3366ff&name=${encodeURIComponent(k)}&a1=${encodeURIComponent(w)}`,parentElement:d,prefill:{name:k,customAnswers:{a1:w}}},h=()=>window.Calendly.initInlineWidget(c);if(window.Calendly)h();else{const L=document.getElementById("calendly-sdk");L&&L.addEventListener("load",h,{once:!0})}},S=()=>{const r=(f==null?void 0:f.value.trim())||"",d=(l==null?void 0:l.value.trim())||"";r.length>=3&&d.length>=5&&(k=r,w=d,M())};f==null||f.addEventListener("input",S),l==null||l.addEventListener("input",S),S();const C=r=>{r===1?(s&&(s.style.display="block"),o&&(o.style.display="none"),i&&(i.style.display="none"),u&&(u.textContent="1"),g&&(g.textContent="Tell us about yourself"),y&&(y.style.display="inline"),m&&(m.style.width="50%")):r===2?(s&&(s.style.display="none"),o&&(o.style.display="block"),i&&(i.style.display="none"),u&&(u.textContent="2"),g&&(g.textContent="Schedule your demo call"),y&&(y.style.display="inline"),m&&(m.style.width="100%"),k=(f==null?void 0:f.value.trim())||"",w=(l==null?void 0:l.value.trim())||"",M()):r===3&&(s&&(s.style.display="none"),o&&(o.style.display="none"),i&&(i.style.display="block"),g&&(g.textContent="Call Confirmed!"),y&&(y.style.display="none"),m&&(m.style.width="100%"))},$=()=>{t.classList.add("active"),document.body.style.overflow="hidden",p&&(p.style.display="none"),I="",f&&localStorage.getItem("feather_booking_name")&&(f.value=localStorage.getItem("feather_booking_name")||""),l&&localStorage.getItem("feather_booking_phone")&&(l.value=localStorage.getItem("feather_booking_phone")||""),C(1)},U=()=>{t.classList.remove("active"),document.body.style.overflow=""},b=r=>{r&&r.preventDefault();const d=(f==null?void 0:f.value.trim())||"",E=(l==null?void 0:l.value.trim())||"";if(!d||!E){p&&(p.style.display="block");return}const n=d.split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join(" ");p&&(p.style.display="none"),k=n,w=E,C(2)};D&&D.addEventListener("submit",b),e&&e.addEventListener("click",$),a.addEventListener("click",U),t.addEventListener("click",r=>{r.target===t&&U()});const T=r=>{r.key==="Escape"&&t.classList.contains("active")&&U()};window.addEventListener("keydown",T),x&&x.addEventListener("click",r=>{r.preventDefault(),U(),j("pricing",!0)}),window.goToBookingStep=C,window.openBookingModal=$}let le=!0;function He(){const t=document.getElementById("strat-booking-modal"),e=document.getElementById("strat-modal-close-btn"),a=document.getElementById("strat-modal-step-1"),s=document.getElementById("strat-modal-step-2"),o=document.getElementById("strat-modal-step-3"),i=document.getElementById("strat-modal-step-4"),u=document.getElementById("strat-modal-step-num"),g=document.getElementById("strat-modal-step-title"),y=document.getElementById("strat-modal-step-badge"),m=document.getElementById("strat-modal-progress-bar"),D=document.getElementById("strat-modal-step1-form"),f=document.getElementById("strat-modal-step2-form"),l=document.getElementById("strat-input-name"),p=document.getElementById("strat-input-phone"),x=document.getElementById("strat-input-business"),k=document.getElementById("strat-select-revenue"),w=document.getElementById("strat-modal-step1-error"),I=document.getElementById("strat-modal-step2-error"),P=document.getElementById("strat-modal-confirm-pricing-link");if(!t||!e)return;t.parentElement!==document.body&&document.body.appendChild(t);let A="",W="",q="",M="";const S=()=>{l&&(l.value=""),p&&(p.value="+971 "),x&&(x.value=""),k&&(k.value=""),w&&(w.style.display="none"),I&&(I.style.display="none"),$(1),t.classList.add("active"),document.body.style.overflow="hidden"},C=()=>{t.classList.remove("active"),document.body.style.overflow=""},$=b=>{!a||!s||!o||!i||!u||!g||!y||!m||(b===1?(a.style.display="block",s.style.display="none",o.style.display="none",i.style.display="none",y.style.display="inline",u.textContent="1",g.textContent="Tell us about yourself",m.style.width="33%"):b===2?(a.style.display="none",s.style.display="block",o.style.display="none",i.style.display="none",y.style.display="inline",u.textContent="2",g.textContent="Your business details",m.style.width="66%"):b===3?(a.style.display="none",s.style.display="none",o.style.display="block",i.style.display="none",y.style.display="inline",u.textContent="3",g.textContent="Schedule your strategy call",m.style.width="100%",U()):b===4&&(a.style.display="none",s.style.display="none",o.style.display="none",i.style.display="block",y.style.display="none",g.textContent="Call Scheduled!",m.style.width="100%"))},U=()=>{const b=document.getElementById("strat-modal-calendly-container");if(!b)return;const T=M==="Under AED 5k/month"||M==="Under $5k"||M==="$0 - $5k";le=!T;const r=T?"https://calendly.com/officialatlanticbear/intro-call?primary_color=3b69ff":"https://calendly.com/officialatlanticbear/strategy-call?primary_color=3b69ff",d=M.replace(/–/g,"-").trim(),E=`${r}&name=${encodeURIComponent(A)}&a1=${encodeURIComponent(W)}&a2=${encodeURIComponent(q)}&a3=${encodeURIComponent(d)}&a4=${encodeURIComponent(d)}`;b.innerHTML="",K(b);const n={url:E,parentElement:b,prefill:{name:A,customAnswers:{a1:W,a2:q,a3:d,a4:d,a5:d}}},c=()=>window.Calendly.initInlineWidget(n);if(window.Calendly)c();else{const h=document.getElementById("calendly-sdk");h&&h.addEventListener("load",c,{once:!0})}};D&&D.addEventListener("submit",b=>{b.preventDefault();const T=(l==null?void 0:l.value.trim())||"",r=(p==null?void 0:p.value.trim())||"";if(!T||!r){w&&(w.style.display="block");return}w&&(w.style.display="none"),A=T,W=r,$(2)}),f&&f.addEventListener("submit",async b=>{b.preventDefault();const T=(x==null?void 0:x.value.trim())||"",r=(k==null?void 0:k.value)||"";if(!T||!r){I&&(I.style.display="block");return}if(I&&(I.style.display="none"),q=T,M=r,!(r==="Under AED 5k/month"||r==="Under $5k"||r==="$0 - $5k")){const E=document.getElementById("strat-modal-step2-submit-btn");E&&(E.disabled=!0,E.textContent="Verifying...");const n=await se("booking_submit");fetch("https://script.google.com/macros/s/AKfycbxhmc6G4n4zpk0SGvjzP81_Cd9ipLxM3Wx5MZNWzF02tBqqUMD0JCAuDnH1OojQfv7vJQ/exec",{method:"POST",mode:"no-cors",body:JSON.stringify({action:"form_submit",name:A,phone:W,business:q,revenue:M,source:"strategy_call",recaptchaToken:n||""})}).catch(c=>console.error("Google Sheet submission failed:",c)),E&&(E.disabled=!1,E.textContent="Continue to Calendar →")}$(3)}),e.addEventListener("click",C),t.addEventListener("click",b=>{b.target===t&&C()}),window.addEventListener("keydown",b=>{b.key==="Escape"&&t.classList.contains("active")&&C()}),P&&P.addEventListener("click",b=>{b.preventDefault(),C(),j("pricing",!0)}),window.goToStratBookingStep=$,window.openStratBookingModal=S}const ee=["home","pricing","work","testimonials","meta-ads","contact","booking","booking-new","booked"];let H=null;function j(t,e=!0){const a=document.getElementById("booking-modal");a&&a.remove();const s=document.getElementById("strat-booking-modal");s&&s.remove(),document.body.style.overflow="",oe(),ie();const o=document.getElementById("main-nav"),i=document.querySelector(".site-footer");t==="booking"||t==="booked"?(o&&(o.style.display="none"),i&&(i.style.display="none")):(o&&(o.style.display=""),i&&(i.style.display=""));const u=z("#main-content"),g=H?ee.indexOf(H):-1,y=ee.indexOf(t),m=g===-1||y>=g,D=m?"-8%":"8%",f=m?"8%":"-8%";H=t;const l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;u.style.transition=l?"opacity 0.2s ease":"opacity 0.26s ease, transform 0.26s cubic-bezier(0.5, 0, 0.75, 0)",u.style.opacity="0",l||(u.style.transform=`translateX(${D})`),setTimeout(()=>{if(window.scrollTo({top:0,behavior:"instant"}),u.style.transition="none",l||(u.style.transform=`translateX(${f})`),u.innerHTML=re[t](),Pe(t),requestAnimationFrame(()=>{u.style.transition=l?"opacity 0.25s ease":"opacity 0.34s ease, transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)",u.style.opacity="1",u.style.transform="translateX(0)"}),qe(),Ue(),Re(),t==="contact"&&Fe(),(t==="booking"||t==="booked"||t==="booking-new")&&(B("pageload",2e3),ce(),de(),je(),Ye(t==="booking"||t==="booked"),t==="booking-new"?(Ne(),document.querySelectorAll(".funnel-cta-btn").forEach(p=>{p.addEventListener("click",()=>{window.openBookingModal&&window.openBookingModal()})})):t==="booking"&&(He(),document.querySelectorAll(".strat-modal-trigger, .funnel-cta-wrap .funnel-cta-btn").forEach(p=>{p.addEventListener("click",()=>{window.openStratBookingModal&&window.openStratBookingModal()})}))),We(t),_e(),typeof window.fbq=="function"&&window.fbq("track","PageView"),e){const p=t==="home"?"/":`/${t}`;window.location.pathname!==p&&history.pushState(null,"",p)}},260)}function Ve(t){t.addEventListener("click",e=>{const a=e.target.closest("[data-link]");if(!a||e.metaKey||e.ctrlKey||e.shiftKey||e.button!==0)return;e.preventDefault();const s=a.getAttribute("data-link");s&&re[s]&&j(s)})}function ze(){const t=z("#main-nav");if(!t)return;const e=()=>{window.scrollY>20?t.classList.add("scrolled"):t.classList.remove("scrolled")};window.addEventListener("scroll",e,{passive:!0})}window.formspree=window.formspree||function(){(window.formspree.q=window.formspree.q||[]).push(arguments)};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("app");t.innerHTML=`
    ${pe()}
    <main id="main-content" style="opacity:1; min-height:100vh;"></main>
    ${me()}
    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/971502446531" target="_blank" rel="noopener" class="whatsapp-floating-btn" aria-label="Chat on WhatsApp">
      <span class="whatsapp-tooltip">Chat with us</span>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.967-.94 1.165-.174.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
      </svg>
    </a>
  `,Ve(t),ze(),ae(),window.addEventListener("message",a=>{if(!a.origin||!a.origin.includes("calendly.com"))return;let s=!1;if(a&&a.data&&typeof a.data=="object"&&a.data.event==="calendly.event_scheduled"&&(s=!0),s){const o=document.getElementById("strat-booking-modal"),i=document.getElementById("booking-modal");o&&o.classList.contains("active")?(le?(B("bookedcall_strategy"),typeof window.fbq=="function"&&!sessionStorage.getItem("fbq_schedule_fired")&&(window.fbq("track","Schedule"),sessionStorage.setItem("fbq_schedule_fired","1"))):B("bookedcall_intro"),o&&o.classList.remove("active")):(B("bookedcall"),i&&i.classList.remove("active")),document.body.style.overflow="",j("booked")}});const e=Z(window.location.pathname);j(e,!1),window.addEventListener("popstate",()=>{const a=Z(window.location.pathname);j(a,!1)})});
