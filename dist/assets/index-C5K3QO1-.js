(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const r=(e,t=document)=>t.querySelector(e),b=(e,t=document)=>[...t.querySelectorAll(e)],M=.2723,v=e=>`<span class="price-usd">≈ $${(e*M).toFixed(0)} USD</span>`,a={arrow:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/></svg>',arrowLg:'<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="8" x2="13" y2="8"/><polyline points="9,4 13,8 9,12"/></svg>',check:'<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1.5,5.5 3.8,8 8.5,2"/></svg>',globe:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',phone:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.79a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.69 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.69A2 2 0 0122 16.92z"/></svg>',mail:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',map:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',star:'<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',code:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>',zap:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>',shield:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',palette:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',rocket:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2 .27-2.98-.31-3.5c-.56-.52-1.43-.8-2.69.5z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',wrench:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'},g=()=>`<span class="check-icon">${a.check}</span>`;function S(){return`
  <nav class="nav" id="main-nav">
    <a href="#" class="logo" data-link="home" id="logo-btn">
      <svg class="feather-icon" width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <a href="#" class="btn btn-secondary btn-sm" data-link="contact" id="nav-contact-cta">Get in touch</a>
      <a href="#" class="btn btn-primary btn-sm" data-link="level1" id="nav-start-cta">Start a project ${a.arrow}</a>
    </div>
  </nav>`}function B(){return`
  <a id="whatsapp-fab" href="https://wa.me/971XXXXXXXXX" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" fill="white">${a.whatsapp}</svg>
  </a>`}function W(){return`
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="logo" data-link="home" style="font-size:0.95rem;">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <path d="M26 4C14 4 6 14 6 22" stroke="#635BFF" stroke-width="2.2" stroke-linecap="round"/>
              <path d="M6 22c3-3 8-5 13-3" stroke="#635BFF" stroke-width="2" stroke-linecap="round"/>
              <path d="M6 22L3 29" stroke="#635BFF" stroke-width="2" stroke-linecap="round"/>
              <path d="M26 4C24 8 21 11 18 14M18 14C15 17 12 19 9 20M18 14L16 16" stroke="#635BFF" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            Feather Studio
          </a>
          <p>We build professional websites that grow your business. Based in the UAE.</p>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <div class="footer-links">
            <a href="#" data-link="home">Home</a>
            <a href="#" data-link="level1">Level 1 — Small Business</a>
            <a href="#" data-link="level2">Level 2 — Professional</a>
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
        <span>Crafted with care in the UAE</span>
      </div>
    </div>
  </footer>`}function X(){return`
  <div class="page-gradient-bg">
    <div class="slanted-canvas-container">
      <div class="slanted-canvas">
        <div class="slanted-canvas-mesh"></div>
      </div>
    </div>
    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <div class="hero-layout">
          <div class="hero-content">
            <div class="hero-live-badge reveal">
              <span class="live-dot-pulse"></span>
              <span>AED processed by UAE client sites: <strong id="hero-live-transactions">AED 4,891,240.23</strong></span>
            </div>
            <h1>Your website,<br>done <span class="accent-word">right.</span></h1>
            <p class="hero-sub">
              We design and build websites that make your business look the part.
              Two tiers, honest pricing — from local kiosks to full professional clinics.
            </p>
            <div class="hero-ctas">
              <a href="#" class="btn btn-primary btn-large" data-link="level1" id="hero-cta-start">
                Start a project ${a.arrowLg}
              </a>
              <a href="#" class="btn btn-secondary btn-large" data-link="work" id="hero-cta-work">
                See our work
              </a>
            </div>
            <p class="hero-note">Not sure which tier? <a href="#" data-link="contact">Talk to us</a> — we'll figure it out together.</p>
          </div>
          <div class="hero-visual">
            <div class="hero-glow"></div>
            <div class="hero-widgets-composition reveal">
              <!-- Analytics card -->
              <div class="hero-comp-card analytics">
                <div class="analytics-header">
                  <span>Website Visitors</span>
                  <span style="background:rgba(62,207,142,.12); color:var(--green); padding:2px 7px; border-radius:4px; font-size:0.60rem;">↑ Live</span>
                </div>
                <div class="analytics-metric" id="hero-visitor-count">2,840</div>
                <div class="analytics-sub">↑ 38% this month</div>
                <div class="analytics-chart">
                  <div class="chart-bar" style="height:28%"></div>
                  <div class="chart-bar" style="height:42%"></div>
                  <div class="chart-bar" style="height:35%"></div>
                  <div class="chart-bar" style="height:60%"></div>
                  <div class="chart-bar" style="height:48%"></div>
                  <div class="chart-bar" style="height:72%"></div>
                  <div class="chart-bar active" style="height:100%"></div>
                </div>
                <div style="display:flex; gap:14px; border-top:1px solid var(--border); padding-top:11px;">
                  <div style="text-align:center;">
                    <div style="font-size:0.95rem; font-weight:800; color:var(--navy); letter-spacing:-0.02em;">98%</div>
                    <div style="font-size:0.58rem; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.06em;">Uptime</div>
                  </div>
                  <div style="text-align:center;">
                    <div style="font-size:0.95rem; font-weight:800; color:var(--navy); letter-spacing:-0.02em;">1.2s</div>
                    <div style="font-size:0.58rem; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.06em;">Load</div>
                  </div>
                  <div style="text-align:center;">
                    <div style="font-size:0.95rem; font-weight:800; color:var(--navy); letter-spacing:-0.02em;">A+</div>
                    <div style="font-size:0.58rem; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.06em;">Score</div>
                  </div>
                </div>
              </div>
              <!-- Payment notification card -->
              <div class="hero-comp-card payment">
                <div class="payment-icon">✓</div>
                <div class="payment-info">
                  <strong>New enquiry received</strong>
                  <span>Via WhatsApp · just now</span>
                </div>
              </div>
              <!-- WhatsApp chat card -->
              <div class="hero-comp-card whatsapp-card">
                <div class="wa-chat-header">Customer enquiry</div>
                <div class="wa-bubble">Hi! I found your site on Google. Do you have a table for 2 tonight? 😊</div>
                <div class="wa-bubble self">Of course! We have spots at 7pm and 8:30pm — which works? 🎉<div class="wa-time">✓✓ now</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- TRUST BAR -->
  <div class="trust-bar">
    <div class="container">
      <div class="trust-bar-inner">
        <div class="trust-item">
          <span class="trust-icon">${a.shield}</span>
          No hidden fees
        </div>
        <div class="trust-sep"></div>
        <div class="trust-item">
          <span class="trust-icon">${a.zap}</span>
          Live in 7–14 days
        </div>
        <div class="trust-sep"></div>
        <div class="trust-item">
          <span class="trust-icon">${a.globe}</span>
          Fully custom design
        </div>
        <div class="trust-sep"></div>
        <div class="trust-item">
          <span class="trust-icon">${a.star}</span>
          Based in the UAE
        </div>
      </div>
    </div>
  </div>

  <!-- LIVE STATS TICKER -->
  <div class="stats-ticker">
    <div class="container">
      <div class="stats-ticker-inner">
        <div class="stat-ticker-item reveal">
          <div class="stat-ticker-num" id="ticker-sites">0</div>
          <div class="stat-ticker-label">Sites delivered</div>
        </div>
        <div class="stat-ticker-sep"></div>
        <div class="stat-ticker-item reveal" style="transition-delay:0.1s">
          <div class="stat-ticker-num" id="ticker-days">0</div>
          <div class="stat-ticker-label">Avg. days to launch</div>
        </div>
        <div class="stat-ticker-sep"></div>
        <div class="stat-ticker-item reveal" style="transition-delay:0.2s">
          <div class="stat-ticker-num" id="ticker-rating">0</div>
          <div class="stat-ticker-label">Client satisfaction</div>
        </div>
        <div class="stat-ticker-sep"></div>
        <div class="stat-ticker-item reveal" style="transition-delay:0.3s">
          <div class="stat-ticker-num" id="ticker-cities">0</div>
          <div class="stat-ticker-label">UAE cities served</div>
        </div>
      </div>
    </div>
  </div>

  <!-- TWO TIERS -->
  <section class="section-pad" style="background:var(--white);">
    <div class="container">
      <div class="section-header centered reveal">
        <span class="label">${a.globe} Our Services</span>
        <h2 class="section-heading">Two tiers, built for<br>where you actually are</h2>
        <p class="section-sub">
          Whether you're just starting out or running an established practice —
          there's a Feather tier for you.
        </p>
      </div>
      <div class="tiers-grid reveal">
        <!-- Tier 1 -->
        <div class="tier-card" data-link="level1" id="tier-card-l1">
          <div class="tier-body" id="tier-body-l1">
            <span class="tier-badge l1">Level 1</span>
            <h3>Small Business</h3>
            <p class="tier-desc">
              Clean, fast websites for kiosks, cafes, retail shops, and growing local businesses.
              Everything you need to look professional online.
            </p>
            <div class="tier-tags">
              <span class="tier-tag">Kiosks</span>
              <span class="tier-tag">Cafes</span>
              <span class="tier-tag">Retail</span>
              <span class="tier-tag">Salons</span>
              <span class="tier-tag">Workshops</span>
            </div>
            <div class="tier-price-hint">
              From <strong>AED 1,450</strong> one-time · or <strong>AED 150/mo</strong> managed
            </div>
            <span class="tier-cta">Explore Level 1 ${a.arrow}</span>
          </div>
          <div class="tier-plate l1" id="tier-plate-l1">
            <div class="checkout-widget" id="l1-interactive-checkout" style="transform: scale(0.95);">
              <div class="cw-header"><strong>Live Checkout Preview</strong><span id="cw-items-count">2 items</span></div>
              <div class="cw-item active" data-price="800">
                <div class="cw-checkbox">✓</div>
                <div class="cw-thumb"></div>
                <div><div class="cw-name">Homepage Design</div><div class="cw-sku">Web · Custom</div></div>
                <div class="cw-price">AED 800</div>
              </div>
              <div class="cw-item active" data-price="650">
                <div class="cw-checkbox">✓</div>
                <div class="cw-thumb" style="background:rgba(99,91,255,.15);border-color:rgba(99,91,255,.2);"></div>
                <div><div class="cw-name">Contact Page</div><div class="cw-sku">Web · Custom</div></div>
                <div class="cw-price">AED 650</div>
              </div>
              <div class="cw-total"><span>Total</span><strong id="cw-total-price">AED 1,450</strong></div>
              <div class="cw-btn" id="cw-order-btn">${a.zap} Place order</div>
            </div>
          </div>
        </div>

        <!-- Tier 2 -->
        <div class="tier-card featured" data-link="level2" id="tier-card-l2">
          <div class="tier-plate l2" id="tier-plate-l2">
            <div class="scheduler-widget" id="l2-interactive-scheduler" style="transform: scale(0.95);">
              <div class="sw-header"><strong>Live Scheduler Preview</strong><span>June 2025</span></div>
              <div class="sw-slots">
                <div class="sw-slot booked"><span>Mon 2</span><strong>10:00 AM</strong></div>
                <div class="sw-slot selected" data-slot="1"><span>Mon 2</span><strong>2:30 PM</strong></div>
                <div class="sw-slot" data-slot="2"><span>Tue 3</span><strong>9:00 AM</strong></div>
                <div class="sw-slot" data-slot="3"><span>Tue 3</span><strong>11:30 AM</strong></div>
              </div>
              <div class="sw-confirm-btn" id="sw-book-btn" style="margin-top:12px; display:none;">Confirm Appointment</div>
            </div>
          </div>
          <div class="tier-body" id="tier-body-l2">
            <span class="tier-badge l2">Level 2</span>
            <h3>Professional</h3>
            <p class="tier-desc">
              Feature-rich sites for clinics, dental practices, law firms, and established businesses.
              Built to convert visitors and communicate expertise.
            </p>
            <div class="tier-tags">
              <span class="tier-tag">Clinics</span>
              <span class="tier-tag">Dental</span>
              <span class="tier-tag">Law Firms</span>
              <span class="tier-tag">Consultants</span>
              <span class="tier-tag">Studios</span>
            </div>
            <div class="tier-price-hint">
              From <strong>AED 2,950</strong> one-time · or <strong>AED 365/mo</strong> managed
            </div>
            <span class="tier-cta">Explore Level 2 ${a.arrow}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="section-pad" style="background:var(--surface);">
    <div class="container">
      <div class="section-header reveal">
        <span class="label">${a.rocket} Process</span>
        <h2 class="section-heading">How it works</h2>
        <p class="section-sub">Simple, straight-to-the-point. No meetings that go nowhere.</p>
      </div>
      <div class="steps-grid">
        <div class="step reveal">
          <div class="step-num">01</div>
          <h3>Tell us about your business</h3>
          <p>Fill out a quick form or send us a WhatsApp. We'll ask the right questions to understand your goals, brand, and customers.</p>
        </div>
        <div class="step reveal" style="transition-delay:0.1s">
          <div class="step-num">02</div>
          <h3>We design and build</h3>
          <p>You get a fully custom design — not a template. We handle everything from structure to copy guidance to launch.</p>
        </div>
        <div class="step reveal" style="transition-delay:0.2s">
          <div class="step-num">03</div>
          <h3>You launch and grow</h3>
          <p>Your site goes live in 7–14 days. Pick one-time ownership or let us handle hosting and updates every month.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="container">
      <h2>Ready to build<br>something great?</h2>
      <p>Whether you're a kiosk or a clinic, we'll build you a website worth being proud of.</p>
      <div class="cta-ctas">
        <a href="#" class="btn btn-primary btn-large" data-link="contact" id="home-cta-contact">
          Get in touch ${a.arrowLg}
        </a>
        <a href="#" class="btn btn-secondary btn-large" data-link="work" id="home-cta-work">
          See our work
        </a>
      </div>
    </div>
  </section>`}function D(){return`
  <div class="page-gradient-bg">
    <div class="slanted-canvas-container subpage">
      <div class="slanted-canvas">
        <div class="slanted-canvas-mesh"></div>
      </div>
    </div>
    <div class="page-header">
      <div class="container">
        <span class="label" style="justify-content:center;">${a.zap} Level 1 · Small Business</span>
        <h1>Great websites for<br>growing businesses</h1>
        <p>For kiosks, cafes, salons, retail shops, and anyone who wants to look
        professional online without a huge budget.</p>
      </div>
    </div>
  </div>

  <!-- PRICING -->
  <section class="section-pad-sm">
    <div class="container">
      <div class="floating-subnav" id="l1-subnav">
        <div class="floating-subnav-inner">
          <button class="subnav-btn active" data-tab="one-time" id="l1-tab-ot">One-Time Purchase</button>
          <button class="subnav-btn" data-tab="managed" id="l1-tab-managed">Managed Plan</button>
        </div>
      </div>

      <!-- One-Time -->
      <div id="l1-panel-one-time" class="pricing-split-container">
        <div class="pricing-left-pane">
          <div class="popular-ribbon" style="top:18px; right:-26px;">Best Value</div>
          <span class="plan-name" style="font-size:0.67rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-bottom:12px; display:block;">One-Time · Level 1</span>
          <div class="price-main" style="font-size:2.8rem; font-weight:800; color:var(--navy); line-height:1; letter-spacing:-0.03em; margin-bottom:4px;">AED 1,450</div>
          ${v(1450)}
          <div class="plan-tagline" style="font-size:0.88rem; color:var(--text-dim); line-height:1.6; padding-top:20px; margin-top:20px; border-top:1px solid var(--border); margin-bottom:32px;">
            Pay once, own your website forever. You get the files, the domain, and full control.
            No recurring fees.
          </div>
          <a href="#" class="btn btn-primary btn-block btn-large" data-link="contact" id="l1-ot-cta">
            Get started ${a.arrowLg}
          </a>
          <p class="plan-note" style="font-size:0.75rem; color:var(--text-muted); margin-top:12px;">Includes one round of revisions. Additional pages available for AED 150/page.</p>
        </div>
        <div class="pricing-right-pane">
          <div>
            <div class="features-title">What you get</div>
            <div class="features-list">
              ${["Fully custom-designed website","Up to 5 pages included","Mobile responsive layout","Basic SEO setup","WhatsApp contact button","Contact form","Handoff within 7–14 days","Source files included"].map(e=>`<div class="feature-row">${g()}<span>${e}</span></div>`).join("")}
            </div>
          </div>
          <div style="border-top:1px solid var(--border); padding-top:24px; margin-top:12px; display:flex; flex-direction:column; align-items:center;">
            <div style="font-size:0.64rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:14px; align-self:flex-start;">Interactive Component Included</div>
            <div class="checkout-widget" id="l1-subpage-checkout" style="position:relative; bottom:0; width:100%; max-width:280px; box-shadow:var(--shadow-sm); z-index: 10;">
              <div class="cw-header"><strong>Interactive Store</strong><span id="sub-cw-items-count">2 items</span></div>
              <div class="cw-item active" data-price="800">
                <div class="cw-checkbox">✓</div>
                <div class="cw-thumb"></div>
                <div><div class="cw-name">Homepage Design</div><div class="cw-sku">Web · Custom</div></div>
                <div class="cw-price">AED 800</div>
              </div>
              <div class="cw-item active" data-price="650">
                <div class="cw-checkbox">✓</div>
                <div class="cw-thumb" style="background:rgba(99,91,255,.15);border-color:rgba(99,91,255,.2);"></div>
                <div><div class="cw-name">Contact Page</div><div class="cw-sku">Web · Custom</div></div>
                <div class="cw-price">AED 650</div>
              </div>
              <div class="cw-total"><span>Total</span><strong id="sub-cw-total-price">AED 1,450</strong></div>
              <div class="cw-btn" id="sub-cw-order-btn">${a.zap} Place order</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Managed -->
      <div id="l1-panel-managed" class="pricing-split-container" style="display:none;">
        <div class="pricing-left-pane">
          <span class="plan-name" style="font-size:0.67rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-bottom:12px; display:block;">Managed Plan · Level 1</span>
          <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:28px;">
            <div>
              <span style="font-size:0.78rem; text-transform:uppercase; font-weight:700; color:var(--text-dim); display:block; margin-bottom:4px;">One-Time Setup</span>
              <div class="price-setup" style="font-size:2.2rem; font-weight:800; color:var(--navy); line-height:1; letter-spacing:-0.02em;">AED 500</div>
              ${v(500)}
            </div>
            <div style="border-top:1px solid var(--border); padding-top:16px;">
              <span style="font-size:0.78rem; text-transform:uppercase; font-weight:700; color:var(--text-dim); display:block; margin-bottom:4px;">Monthly Management</span>
              <div style="display:flex; align-items:baseline; gap:6px;">
                <div class="price-month" style="font-size:2.2rem; font-weight:800; color:var(--indigo); line-height:1; letter-spacing:-0.02em;">AED 150</div>
                <div class="price-label" style="font-size:0.85rem; color:var(--text-muted);">/month</div>
              </div>
              ${v(150)}
            </div>
          </div>
          <a href="#" class="btn btn-primary btn-block btn-large" data-link="contact" id="l1-managed-cta">
            Get started ${a.arrowLg}
          </a>
        </div>
        <div class="pricing-right-pane">
          <div>
            <div class="features-title">What is covered</div>
            <div class="features-list">
              ${["Full custom design & build","Up to 5 pages included","Domain + hosting managed by us","WhatsApp & contact form included","Mobile responsive layout","Basic SEO optimization","Monthly updates (1 round)","Priority support via WhatsApp/Email"].map(e=>`<div class="feature-row">${g()}<span>${e}</span></div>`).join("")}
            </div>
          </div>
          <div style="background:rgba(99,91,255,.04); border:1px solid rgba(99,91,255,.12); border-radius:var(--r-md); padding:18px;">
            <strong style="font-size:0.8rem; color:var(--navy); display:block; margin-bottom:4px;">No Lock-in Contracts</strong>
            <span style="font-size:0.75rem; color:var(--text-dim); line-height:1.5; display:block;">Minimum commitment of just 3 months. Cancel anytime after that. We'll hand over all files cleanly if you leave.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="section-pad" style="background:var(--surface);">
    <div class="container">
      <div class="section-header reveal">
        <span class="label">${a.code} Features</span>
        <h2 class="section-heading">Built for business,<br>not just looks</h2>
      </div>
      <div class="feature-grid">
        ${[{icon:a.palette,title:"Custom Design",desc:"No templates. Every site is built from scratch to match your brand colors, fonts, and vibe."},{icon:a.zap,title:"Fast Delivery",desc:"Your site is live within 7–14 business days from when we agree on the brief."},{icon:a.globe,title:"Mobile First",desc:"Looks great on phones, tablets, and desktops. Over 70% of your visitors are on mobile."},{icon:a.shield,title:"SEO Ready",desc:"Proper page titles, meta descriptions, and structured code so Google can find you."},{icon:a.phone,title:"WhatsApp Integration",desc:"A tap-to-chat WhatsApp button on every page. The easiest way to get leads in the UAE."},{icon:a.wrench,title:"Low Maintenance",desc:"Simple and clean builds that don't break. Perfect for business owners who want to focus on work."}].map(e=>`<div class="feature-item reveal">
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
        <span class="label">FAQ</span>
        <h2 class="section-heading">Common questions</h2>
      </div>
      <div class="faq-list reveal">
        ${[{q:"Who is Level 1 for?",a:"Kiosks, cafes, retail shops, salons, small workshops — any business that wants a professional online presence without a large budget."},{q:"Do I own the website after the one-time purchase?",a:"Yes, completely. We hand over all the files and you can host it wherever you want. We're also happy to help with hosting setup at no extra cost."},{q:"What do I need to provide?",a:"Your logo (or we'll suggest options), photos of your business or products, and a short description of what you do. We'll handle the rest."},{q:"Can I upgrade to Level 2 later?",a:"Absolutely. If your business grows and you need more features, we can rebuild or expand your site. Previous payments are credited where applicable."}].map(e=>`<div class="faq-item"><h3>${e.q}</h3><p>${e.a}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Start with Level 1</h2>
      <p>Get a website your customers will trust, at a price that makes sense.</p>
      <div class="cta-ctas">
        <a href="#" class="btn btn-primary btn-large" data-link="contact" id="l1-footer-cta">
          Talk to us ${a.arrowLg}
        </a>
        <a href="https://wa.me/971XXXXXXXXX" target="_blank" class="btn btn-wa btn-large">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">${a.whatsapp}</svg>
          WhatsApp us
        </a>
      </div>
    </div>
  </section>`}function T(){return`
  <div class="page-gradient-bg">
    <div class="slanted-canvas-container subpage">
      <div class="slanted-canvas">
        <div class="slanted-canvas-mesh"></div>
      </div>
    </div>
    <div class="page-header">
      <div class="container">
        <span class="label" style="justify-content:center;">${a.rocket} Level 2 · Professional</span>
        <h1>Websites built for<br>serious businesses</h1>
        <p>For clinics, dental practices, law firms, and professional services that
        need a website that earns trust and drives appointments.</p>
      </div>
    </div>
  </div>

  <!-- PRICING -->
  <section class="section-pad-sm">
    <div class="container">
      <div class="floating-subnav" id="l2-subnav">
        <div class="floating-subnav-inner">
          <button class="subnav-btn active" data-tab="one-time" id="l2-tab-ot">One-Time Purchase</button>
          <button class="subnav-btn" data-tab="managed" id="l2-tab-managed">Managed Plan</button>
        </div>
      </div>

      <!-- One-Time -->
      <div id="l2-panel-one-time" class="pricing-split-container">
        <div class="pricing-left-pane">
          <div class="popular-ribbon" style="top:18px; right:-26px;">Best Value</div>
          <span class="plan-name" style="font-size:0.67rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-bottom:12px; display:block;">One-Time · Level 2</span>
          <div class="price-main" style="font-size:2.8rem; font-weight:800; color:var(--navy); line-height:1; letter-spacing:-0.03em; margin-bottom:4px;">AED 2,950</div>
          ${v(2950)}
          <div class="plan-tagline" style="font-size:0.88rem; color:var(--text-dim); line-height:1.6; padding-top:20px; margin-top:20px; border-top:1px solid var(--border); margin-bottom:32px;">
            Pay once and own a full professional website. Ideal for established clinics and practices who want complete control.
          </div>
          <a href="#" class="btn btn-primary btn-block btn-large" data-link="contact" id="l2-ot-cta">
            Get started ${a.arrowLg}
          </a>
          <p class="plan-note" style="font-size:0.75rem; color:var(--text-muted); margin-top:12px;">Includes two rounds of revisions. Additional pages available at AED 200/page.</p>
        </div>
        <div class="pricing-right-pane">
          <div>
            <div class="features-title">What you get</div>
            <div class="features-list">
              ${["Fully custom professional design","Up to 10 pages included","Appointment / booking section","Team & credentials profiles","Services & treatment layouts","Testimonials & trust badges","Advanced local SEO configuration","WhatsApp & Google Maps setup","Source files handover"].map(e=>`<div class="feature-row">${g()}<span>${e}</span></div>`).join("")}
            </div>
          </div>
          <div style="border-top:1px solid var(--border); padding-top:24px; margin-top:12px; display:flex; flex-direction:column; align-items:center;">
            <div style="font-size:0.64rem; font-weight:700; text-transform:uppercase; color:var(--text-muted); margin-bottom:14px; align-self:flex-start;">Interactive Component Included</div>
            <div class="scheduler-widget" id="l2-subpage-scheduler" style="position:relative; bottom:0; width:100%; max-width:300px; box-shadow:var(--shadow-sm); z-index: 10;">
              <div class="sw-header"><strong>Interactive Scheduler</strong><span>June 2025</span></div>
              <div class="sw-slots">
                <div class="sw-slot booked"><span>Mon 2</span><strong>10:00 AM</strong></div>
                <div class="sw-slot selected" data-slot="1"><span>Mon 2</span><strong>2:30 PM</strong></div>
                <div class="sw-slot" data-slot="2"><span>Tue 3</span><strong>9:00 AM</strong></div>
                <div class="sw-slot" data-slot="3"><span>Tue 3</span><strong>11:30 AM</strong></div>
              </div>
              <div class="sw-confirm-btn" id="sub-sw-book-btn" style="margin-top:12px; display:none;">Confirm Appointment</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Managed -->
      <div id="l2-panel-managed" class="pricing-split-container" style="display:none;">
        <div class="pricing-left-pane">
          <span class="plan-name" style="font-size:0.67rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-bottom:12px; display:block;">Managed Plan · Level 2</span>
          <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:28px;">
            <div>
              <span style="font-size:0.78rem; text-transform:uppercase; font-weight:700; color:var(--text-dim); display:block; margin-bottom:4px;">One-Time Setup</span>
              <div class="price-setup" style="font-size:2.2rem; font-weight:800; color:var(--navy); line-height:1; letter-spacing:-0.02em;">AED 1,400</div>
              ${v(1400)}
            </div>
            <div style="border-top:1px solid var(--border); padding-top:16px;">
              <span style="font-size:0.78rem; text-transform:uppercase; font-weight:700; color:var(--text-dim); display:block; margin-bottom:4px;">Monthly Management</span>
              <div style="display:flex; align-items:baseline; gap:6px;">
                <div class="price-month" style="font-size:2.2rem; font-weight:800; color:var(--indigo); line-height:1; letter-spacing:-0.02em;">AED 365</div>
                <div class="price-label" style="font-size:0.85rem; color:var(--text-muted);">/month</div>
              </div>
              ${v(365)}
            </div>
          </div>
          <a href="#" class="btn btn-primary btn-block btn-large" data-link="contact" id="l2-managed-cta">
            Get started ${a.arrowLg}
          </a>
        </div>
        <div class="pricing-right-pane">
          <div>
            <div class="features-title">What is covered</div>
            <div class="features-list">
              ${["Full custom professional design & setup","Up to 10 pages built for conversion","Domain renewal & professional management","Secure cloud hosting & automatic daily backups","SSL monitoring & active protection","Advanced local SEO + Google profile configuration","Unlimited ongoing updates (content & treatments)","2 tailored seasonal campaigns per year","Priority WhatsApp support desk"].map(e=>`<div class="feature-row">${g()}<span>${e}</span></div>`).join("")}
            </div>
          </div>
          <div style="background:rgba(99,91,255,.04); border:1px solid rgba(99,91,255,.12); border-radius:var(--r-md); padding:18px;">
            <strong style="font-size:0.8rem; color:var(--navy); display:block; margin-bottom:4px;">No Lock-in Contracts</strong>
            <span style="font-size:0.75rem; color:var(--text-dim); line-height:1.5; display:block;">Minimum commitment of just 3 months. Cancel anytime after that. We'll hand over all files cleanly if you leave.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- COMPARISON TABLE -->
  <section class="section-pad" style="background:var(--surface);">
    <div class="container">
      <div class="section-header centered reveal">
        <span class="label">Compare</span>
        <h2 class="section-heading">Level 1 vs Level 2</h2>
        <p class="section-sub">Not sure which is right? Here's a quick comparison.</p>
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
            ${[["Pages included","Up to 5","Up to 10"],["Custom design","✓","✓"],["Mobile responsive","✓","✓"],["WhatsApp button","✓","✓"],["Basic SEO","✓","✓"],["Advanced SEO + Google setup","—","✓"],["Booking / appointment section","—","✓"],["Team & credentials page","—","✓"],["Testimonials section","—","✓"],["Google Maps integration","—","✓"],["Seasonal updates (managed)","—","2 per year"],["One-time price","AED 1,450","AED 2,950"],["Managed setup","AED 500","AED 1,400"],["Managed monthly","AED 150/mo","AED 365/mo"]].map(([e,t,s])=>`<tr>
                <td style="font-weight:500; color:var(--navy);">${e}</td>
                <td>${t}</td>
                <td class="hl">${s}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- FAQ L2 -->
  <section class="section-pad">
    <div class="container">
      <div class="section-header reveal">
        <span class="label">FAQ</span>
        <h2 class="section-heading">Level 2 questions</h2>
      </div>
      <div class="faq-list reveal">
        ${[{q:"Is Level 2 suitable for a dental clinic?",a:"Yes — Level 2 was specifically designed with clinics and professional practices in mind. It includes a treatment/services listing, booking section, team profiles, and trust elements that patients look for."},{q:"Can you integrate an online booking system?",a:"We can link to or embed third-party booking tools (like Calendly, Setmore, or SimplyBook). Full custom booking system development is quoted separately."},{q:"Will I be able to update the site myself?",a:"On the one-time plan, yes — we'll set you up on a CMS or guide you on making edits. On the managed plan, just send us a WhatsApp and we'll handle all updates."},{q:"How long does Level 2 take?",a:"Typically 14–21 business days from brief sign-off, depending on how quickly we receive your content (photos, text, team bios, etc.)."}].map(e=>`<div class="faq-item"><h3>${e.q}</h3><p>${e.a}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Build your professional site</h2>
      <p>Your clients are searching online right now. Make sure they find something impressive.</p>
      <div class="cta-ctas">
        <a href="#" class="btn btn-primary btn-large" data-link="contact" id="l2-footer-cta">
          Talk to us ${a.arrowLg}
        </a>
        <a href="https://wa.me/971XXXXXXXXX" target="_blank" class="btn btn-wa btn-large">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">${a.whatsapp}</svg>
          WhatsApp us
        </a>
      </div>
    </div>
  </section>`}function P(){const e=[{tag:"Level 1 · Kiosk",title:"Bites & Brews",meta:"Food & Beverage · Dubai",desc:'"We went from no online presence at all to having customers find us on Google. The WhatsApp button alone brought us new walk-ins within the first week."',url:"bitesandbrews.ae",color:"#F4A261",bgLight:"#FFFAF5",demoClass:"kiosk"},{tag:"Level 2 · Clinic",title:"Pearl Dental",meta:"Dental Practice · Abu Dhabi",desc:'"Patients tell us our website looks more professional than clinics that have been open for 10+ years. Feather Studio completely changed how we present ourselves."',url:"pearldental.ae",color:"#1a1a1a",bgLight:"#FAFAF8",demoClass:"dental",alt:!0},{tag:"Level 2 · Studio",title:"Aura Aesthetics",meta:"Beauty & Wellness · Sharjah",desc:'"Our bookings doubled in the first month after launching. The site just looks luxurious — it matches exactly the feeling we want clients to have before they even walk in."',url:"aura-aesthetics.ae",color:"#7c3aed",bgLight:"#0a0a0f",demoClass:"aesthetics"},{tag:"Level 1 · Wellness",title:"Bloom Women's Health",meta:"Women's Wellness · Dubai",desc:'"We needed something warm and trustworthy. Feather understood our audience immediately — the result feels like us, just professional."',url:"bloomwomens.ae",color:"#8B4A62",bgLight:"#FFF9F7",demoClass:"womens",alt:!0}],t={kiosk:`
      <div class="demo-site" style="background:#FFFAF5;">
        <div class="demo-nav" style="background:#fff; border-bottom:1px solid #f0e8dc; padding:12px 20px; display:flex; align-items:center; justify-content:space-between;">
          <span style="font-size:0.75rem; font-weight:800; color:#F4A261; letter-spacing:-0.02em;">Bites & Brews</span>
          <div class="demo-navlinks" style="gap:10px;">
            <a href="#" style="font-size:0.60rem; color:#555; font-weight:500;">Menu</a>
            <a href="#" style="font-size:0.60rem; color:#555; font-weight:500;">About</a>
            <a href="#" style="font-size:0.60rem; background:#F4A261; color:#fff; padding:4px 10px; border-radius:100px; font-weight:700;">Order Now</a>
          </div>
        </div>
        <div class="demo-hero" style="background:linear-gradient(135deg, #FFFAF5 0%, #FFF2E0 100%); padding:36px 22px 30px;">
          <div class="demo-eyebrow" style="font-size:0.54rem; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; color:#E07E3A; margin-bottom:10px;">Dubai Marina · Open Daily 8am–10pm</div>
          <div class="demo-h1" style="font-size:1.5rem; font-weight:800; line-height:1.1; letter-spacing:-0.025em; color:#1a1a1a; margin-bottom:10px;">Coffee that<br>hits different.</div>
          <div class="demo-sub" style="font-size:0.65rem; color:#666; line-height:1.55; margin-bottom:14px;">Fresh brews, artisan snacks, and a vibe that keeps you coming back. Walk in or order ahead.</div>
          <div class="demo-btn" style="background:#F4A261; color:#fff; border-radius:100px; padding:7px 16px; font-size:0.62rem; font-weight:700; display:inline-block;">Browse Menu →</div>
        </div>
        <div class="demo-section" style="padding:22px 22px 26px;">
          <span class="demo-section-label" style="font-size:0.54rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:#E07E3A; margin-bottom:8px; display:block;">Our Specials</span>
          <div class="demo-section-title" style="font-size:1.05rem; font-weight:800; letter-spacing:-0.02em; color:#1a1a1a; margin-bottom:14px; line-height:1.15;">Today's picks</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            ${[["☕","Oat Flat White","AED 22"],["🥐","Almond Croissant","AED 16"],["🍋","Lemonade Cooler","AED 18"],["🥑","Avo Toast","AED 28"]].map(([s,o,i])=>`
              <div style="background:#fff; border:1px solid #f0e8dc; border-radius:8px; padding:10px 12px;">
                <div style="font-size:1rem; margin-bottom:4px;">${s}</div>
                <div style="font-size:0.62rem; font-weight:700; color:#1a1a1a;">${o}</div>
                <div style="font-size:0.58rem; color:#E07E3A; font-weight:700; margin-top:2px;">${i}</div>
              </div>`).join("")}
          </div>
        </div>
      </div>`,dental:`
      <div class="demo-site dental">
        <div class="demo-nav dental-nav" style="display:flex; align-items:center; justify-content:space-between; padding:12px 20px;">
          <span class="dental-logo">PEARL DENTAL</span>
          <div style="display:flex; gap:10px;">
            <a href="#" style="font-size:0.60rem; color:rgba(255,255,255,.6); font-weight:500;">Services</a>
            <a href="#" style="font-size:0.60rem; color:rgba(255,255,255,.6); font-weight:500;">Team</a>
            <a href="#" style="background:#C9A96E; color:#fff; padding:4px 12px; border-radius:100px; font-size:0.60rem; font-weight:700;">Book Now</a>
          </div>
        </div>
        <div class="demo-hero dental-hero" style="padding:32px 20px 28px;">
          <div class="demo-eyebrow dental-eyebrow" style="font-size:0.54rem; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; margin-bottom:8px; display:block;">Abu Dhabi · Est. 2018</div>
          <div class="demo-h1 dental-h1" style="font-size:1.35rem; font-weight:800; letter-spacing:-0.025em; margin-bottom:8px; line-height:1.15;">Expert dental care<br>you can smile about.</div>
          <div class="demo-sub dental-sub" style="font-size:0.63rem; line-height:1.5; margin-bottom:14px;">Comprehensive dental services by a team of specialists dedicated to your comfort and confidence.</div>
          <span class="demo-btn dental-btn" style="display:inline-block; border-radius:100px; padding:7px 14px; font-size:0.60rem; font-weight:700;">Book Appointment →</span>
        </div>
        <div style="background:#F5F3EE; padding:20px 20px 24px;">
          <div style="font-size:0.54rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:#8B7355; margin-bottom:8px;">Our Services</div>
          <div style="font-size:1.05rem; font-weight:800; letter-spacing:-0.02em; color:#1a1a1a; margin-bottom:12px;">Comprehensive care</div>
          <div class="dental-services-layout">
            <div class="dental-service-card-large">
              <strong>Cosmetic Dentistry</strong>
              <p>Veneers, whitening, smile design — crafted for perfection.</p>
              <div class="dental-service-arrow">→</div>
            </div>
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
          <div class="aesthetics-sub">Premium aesthetic treatments by certified specialists. Your transformation, elevated.</div>
          <span class="aesthetics-btn">Explore treatments</span>
        </div>
        <div style="background:rgba(255,255,255,.03); padding:20px 20px 24px;">
          <div style="font-size:0.54rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:#a78bfa; margin-bottom:6px;">Our Treatments</div>
          <div style="font-size:1rem; font-weight:800; color:#fff; letter-spacing:-0.02em; margin-bottom:12px; line-height:1.2;">Curated for you</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            ${[["Laser Therapy","Advanced skin renewal"],["Hydrafacial","Deep hydration + glow"],["Botox & Fillers","Subtle, natural results"],["Body Contouring","Sculpt & tone"]].map(([s,o])=>`
              <div class="aesthetics-card" style="padding:10px 12px; border-radius:8px;">
                <strong style="font-size:0.63rem; display:block; margin-bottom:3px; color:#fff;">${s}</strong>
                <p style="font-size:0.56rem; color:rgba(255,255,255,.55);">${o}</p>
              </div>`).join("")}
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
            <div class="womens-sub" style="font-size:0.63px; color:#7a506b; line-height:1.5; margin-bottom:14px; font-size:0.63rem;">Holistic women's health services in a warm, welcoming space designed for your comfort.</div>
            <span class="womens-btn">Book a session →</span>
          </div>
          <div class="womens-hero-deco">
            <div class="womens-deco-circle c1"></div>
            <div class="womens-deco-circle c2"></div>
            <div class="womens-deco-circle c3"></div>
          </div>
        </div>
        <div style="background:#FFF4F0; padding:20px 20px 24px;">
          <div style="font-size:0.54rem; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; color:#C2778A; margin-bottom:6px;">Services</div>
          <div style="font-size:1rem; font-weight:800; color:#3d2030; letter-spacing:-0.02em; margin-bottom:12px; line-height:1.2;">Care made for women</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            ${[["Prenatal Wellness","Gentle & expert support"],["Hormonal Health","Balanced & thriving"],["Nutrition Coaching","Fueled from within"],["Mental Wellness","Mind & body harmony"]].map(([s,o])=>`
              <div class="womens-card" style="padding:10px 12px; border-radius:8px;">
                <div class="womens-service-dot"></div>
                <strong style="font-size:0.63rem; display:block; margin-bottom:3px; color:#3d2030;">${s}</strong>
                <p style="font-size:0.56rem; color:#7a506b;">${o}</p>
              </div>`).join("")}
          </div>
        </div>
      </div>`};return`
  <div class="page-gradient-bg">
    <div class="slanted-canvas-container subpage">
      <div class="slanted-canvas">
        <div class="slanted-canvas-mesh"></div>
      </div>
    </div>
    <div class="showcase-hero">
      <div class="container">
        <span class="label" style="justify-content:center;">${a.star} Portfolio</span>
        <h1>Our Work</h1>
        <p>A small selection of websites we've built for businesses across the UAE.</p>
      </div>
    </div>
  </div>

  <div class="showcase-outer">
    <div class="container">
      ${e.map(s=>`
        <div class="showcase-item${s.alt?" alt":""} reveal">
          <div class="showcase-label">
            <span class="showcase-tag">${s.tag}</span>
            <h2>${s.title}</h2>
            <div class="showcase-meta">${s.meta}</div>
            <p class="showcase-desc">${s.desc}</p>
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
                <div class="browser-url">${s.url}</div>
              </div>
              <div class="browser-body">
                ${t[s.demoClass]||""}
              </div>
            </div>
          </div>
        </div>`).join("")}
    </div>
  </div>

  <section class="cta-section">
    <div class="container">
      <h2>Want a site like these?</h2>
      <p>Let's talk about what you need and which tier is the right fit.</p>
      <div class="cta-ctas">
        <a href="#" class="btn btn-primary btn-large" data-link="contact" id="work-cta">
          Get in touch ${a.arrowLg}
        </a>
        <a href="https://wa.me/971XXXXXXXXX" target="_blank" class="btn btn-wa btn-large">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">${a.whatsapp}</svg>
          WhatsApp us
        </a>
      </div>
    </div>
  </section>`}function O(){return`
  <div class="page-gradient-bg" style="padding-top:80px;">
    <div class="slanted-canvas-container subpage" style="height: 600px;">
      <div class="slanted-canvas" style="height: 640px;">
        <div class="slanted-canvas-mesh"></div>
      </div>
    </div>
    <div class="section-pad">
      <div class="container">
        <div class="contact-wrap">
          <div class="contact-info reveal">
            <span class="label">${a.mail} Contact</span>
            <h1>Let's build<br>something.</h1>
            <p>
              Tell us about your business, your idea, or just ask us anything.
              We respond fast — usually within a few hours.
            </p>
            <div class="contact-methods">
              <a href="https://wa.me/971XXXXXXXXX" target="_blank" class="contact-method">
                <div class="contact-method-icon" style="background:rgba(37,211,102,.08); color:var(--whatsapp);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${a.whatsapp}</svg>
                </div>
                <div>
                  <div class="contact-method-label">WhatsApp</div>
                  <div class="contact-method-value">+971 XX XXX XXXX</div>
                </div>
              </a>
              <a href="mailto:hello@featherstudio.ae" class="contact-method">
                <div class="contact-method-icon">
                  ${a.mail}
                </div>
                <div>
                  <div class="contact-method-label">Email</div>
                  <div class="contact-method-value">hello@featherstudio.ae</div>
                </div>
              </a>
              <div class="contact-method">
                <div class="contact-method-icon">
                  ${a.map}
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
            <form class="enquiry-form" id="contact-form" onsubmit="return false;">
              <input class="form-input" id="form-name" name="name" type="text" placeholder="Your name" required />
              <input class="form-input" id="form-email" name="email" type="email" placeholder="Email address" required />
              <input class="form-input" id="form-business" name="business" type="text" placeholder="Business name" />
              <select class="form-input" id="form-tier" name="tier">
                <option value="">Which tier are you interested in?</option>
                <option value="l1">Level 1 — Small Business</option>
                <option value="l2">Level 2 — Professional</option>
                <option value="unsure">Not sure yet</option>
              </select>
              <textarea class="form-input form-textarea" id="form-message" name="message" placeholder="Tell us about your business and what you need..." required></textarea>
              <button type="submit" class="btn btn-primary btn-block btn-large" id="form-submit-btn">
                Send message ${a.arrowLg}
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
  </div>`}const L={home:X,level1:D,level2:T,work:P,contact:O};function j(e){b("[data-link]").forEach(s=>s.classList.remove("active"));const t=r(`[data-link="${e}"].nav-link`);t&&t.classList.add("active")}function I(){const e=b(".reveal"),t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(o.target.classList.add("revealed"),t.unobserve(o.target))})},{threshold:.07,rootMargin:"0px 0px -30px 0px"});e.forEach(s=>t.observe(s))}function w(e){const t=r(`#${e}-tab-ot`),s=r(`#${e}-tab-managed`),o=r(`#${e}-panel-one-time`),i=r(`#${e}-panel-managed`);!t||!s||!o||!i||(t.addEventListener("click",()=>{t.classList.add("active"),s.classList.remove("active"),o.style.display="grid",i.style.display="none"}),s.addEventListener("click",()=>{s.classList.add("active"),t.classList.remove("active"),i.style.display="grid",o.style.display="none"}))}function q(){const e=r("#contact-form"),t=r("#form-submit-btn"),s=r("#form-success");!e||!t||!s||e.addEventListener("submit",()=>{t.style.display="none",s.style.display="block"})}let k=489124023e-2,f=null;function H(){f&&clearInterval(f);const e=document.getElementById("hero-live-transactions");if(!e)return;const t=()=>{e.textContent=`AED ${k.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`};t(),f=setInterval(()=>{const s=Math.random()*4.5+.15;k+=s,t()},1200+Math.random()*800)}function x(e,t,s,o){const i=document.getElementById(e);if(!i)return;const n=i.querySelectorAll(".cw-item"),d=i.querySelector(`#${t}`),p=i.querySelector(`#${s}`),l=i.querySelector(`#${o}`);let h=[800,650];n.forEach((c,m)=>{c.addEventListener("click",E=>{E.stopPropagation(),c.classList.toggle("active");const C=parseInt(c.getAttribute("data-price")||"0");c.classList.contains("active")?h[m]=C:h[m]=0;const z=h.reduce((u,F)=>u+F,0),y=h.filter(u=>u>0).length;d&&(d.textContent=`AED ${z.toLocaleString()}`),p&&(p.textContent=`${y} item${y===1?"":"s"}`)})}),l&&l.addEventListener("click",c=>{c.stopPropagation();const m=l.innerHTML;l.innerHTML="🎉 Order Placed!",l.classList.add("success"),setTimeout(()=>{l.innerHTML=m,l.classList.remove("success")},2e3)})}function A(e,t){const s=document.getElementById(e);if(!s)return;const o=s.querySelectorAll(".sw-slot:not(.booked)"),i=s.querySelector(`#${t}`);o.forEach(n=>{n.addEventListener("click",d=>{var p;d.stopPropagation(),o.forEach(l=>l.classList.remove("selected")),n.classList.add("selected"),i&&(i.style.display="block",i.textContent=`Confirm - ${((p=n.querySelector("strong"))==null?void 0:p.textContent)||""}`)})}),i&&i.addEventListener("click",n=>{n.stopPropagation(),i.textContent="🎉 Appointment Booked!",i.style.background="var(--green)",setTimeout(()=>{i.style.display="none",i.style.background="var(--indigo)"},2e3)})}function $(e){const t=r("#main-content");t.style.opacity="0",t.style.transform="translateY(10px)",setTimeout(()=>{t.innerHTML=L[e](),j(e),window.scrollTo({top:0,behavior:"instant"}),t.style.transition="opacity 0.35s ease, transform 0.35s ease",requestAnimationFrame(()=>{t.style.opacity="1",t.style.transform="translateY(0)"}),I(),e==="level1"&&(w("l1"),x("l1-subpage-checkout","sub-cw-total-price","sub-cw-items-count","sub-cw-order-btn")),e==="level2"&&(w("l2"),A("l2-subpage-scheduler","sub-sw-book-btn")),e==="contact"&&q(),e==="home"&&(H(),x("l1-interactive-checkout","cw-total-price","cw-items-count","cw-order-btn"),A("l2-interactive-scheduler","sw-book-btn"),setTimeout(()=>{b(".hw-bar").forEach((s,o)=>{s.style.transition=`height 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${o*.07}s`})},300))},180)}function U(e){e.addEventListener("click",t=>{const s=t.target.closest("[data-link]");if(!s)return;t.preventDefault();const o=s.getAttribute("data-link");o&&L[o]&&$(o)})}function N(){const e=r("#main-nav");if(!e)return;const t=()=>{window.scrollY>20?e.classList.add("scrolled"):e.classList.remove("scrolled")};window.addEventListener("scroll",t,{passive:!0})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");e.innerHTML=`
    <div class="grid-lines-container">
      <div class="grid-line"></div>
      <div class="grid-line"></div>
      <div class="grid-line"></div>
      <div class="grid-line"></div>
      <div class="grid-line"></div>
    </div>
    ${S()}
    <main id="main-content" style="transition: opacity 0.35s ease, transform 0.35s ease; min-height:100vh;"></main>
    ${W()}
    ${B()}
  `,U(e),N(),$("home")});
