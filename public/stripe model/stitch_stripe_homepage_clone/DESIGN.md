---
name: Financial Precision
colors:
  surface: '#f7fafd'
  surface-dim: '#d7dadd'
  surface-bright: '#f7fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f7'
  surface-container: '#ebeef1'
  surface-container-high: '#e5e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#181c1e'
  on-surface-variant: '#464555'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eef1f4'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4c42e9'
  primary: '#493ee5'
  on-primary: '#ffffff'
  primary-container: '#635bff'
  on-primary-container: '#fefaff'
  inverse-primary: '#c3c0ff'
  secondary: '#49607e'
  on-secondary: '#ffffff'
  secondary-container: '#c4dcff'
  on-secondary-container: '#49617f'
  tertiary: '#a33700'
  on-tertiary: '#ffffff'
  tertiary-container: '#cc4700'
  on-tertiary-container: '#fffaf9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#321ed2'
  secondary-fixed: '#d2e4ff'
  secondary-fixed-dim: '#b0c8eb'
  on-secondary-fixed: '#001c37'
  on-secondary-fixed-variant: '#314865'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#802900'
  background: '#f7fafd'
  on-background: '#181c1e'
  surface-variant: '#e0e3e6'
  surface-dark: '#0A2540'
  indigo-vibrant: '#635BFF'
  orange-action: '#FF6118'
  slate-text: '#425466'
  background-subtle: '#F6F9FC'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  button:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

This design system embodies professional excellence, technical rigor, and high-trust financial infrastructure. The aesthetic is rooted in **Modern Corporate** principles, prioritizing extreme clarity and a sense of "engineered" beauty. 

The target audience includes developers, CFOs, and global entrepreneurs who require reliability and scalability. The UI should evoke a sense of calm authority and limitless capability. 

**Design Principles:**
- **Technical Sophistication:** Every pixel serves a purpose. Avoid decorative clutter.
- **Vibrancy within Order:** Use high-energy brand colors against vast, stable neutral backgrounds.
- **Depth and Layering:** Utilize subtle gradients and translucent overlays to create a multi-dimensional, modern workspace.

## Colors

The palette is anchored by a vibrant Indigo (`#635BFF`) which signals innovation and action. The secondary Navy (`#0A2540`) provides a "foundation of trust" and is used for primary headings and dark-mode surfaces.

- **Primary:** Use for main CTAs, active states, and critical brand moments.
- **Secondary:** Use for typography and high-contrast containers.
- **Tertiary:** Use sparingly for alerts, notifications, or specific accent points to draw the eye.
- **Neutral:** The background (`#F6F9FC`) is slightly cool to keep the interface feeling fresh and expansive.

## Typography

The typography system relies on a high-quality sans-serif stack to maintain a clean, international feel.

- **Headlines:** Use `Hanken Grotesk` with tight letter-spacing for a modern, geometric look that commands attention.
- **Body:** `Inter` is utilized for its exceptional legibility in dense financial data and long-form technical documentation.
- **Mono:** `JetBrains Mono` is reserved for code snippets, API keys, and small labels where technical precision is emphasized.

Scale font sizes aggressively for marketing pages, but maintain a disciplined 16px base for dashboard applications.

## Layout & Spacing

The design system employs a **Fixed Grid** for marketing and structured data views, while utilizing a **Fluid Grid** for complex dashboard environments.

- **Grid:** A 12-column grid with generous 32px gutters to prevent visual density.
- **Spacing Rhythm:** Based on a 4px baseline. Use 8px, 16px, 24px, 32px, 48px, and 64px increments to define hierarchy.
- **Whitespace:** Use whitespace as a functional tool to group related elements. Maintain a "breathable" layout even in data-heavy views.
- **Breakpoints:** 
  - Mobile: < 768px (1-column stack)
  - Tablet: 768px - 1024px (Reduced margins)
  - Desktop: 1024px+ (Full 12-column)

## Elevation & Depth

This design system uses **Tonal Layers** combined with **Ambient Shadows** to create a sophisticated sense of hierarchy.

- **Planes:** The base background is `#F6F9FC`. Secondary containers (cards) use `#FFFFFF`.
- **Shadows:** Use extremely soft, long-range shadows with a hint of the secondary color (`#0A2540`) at low opacity (3-5%). This avoids a "dirty" look and maintains the clean aesthetic.
- **Depth Tiers:** 
  - Level 0: Background.
  - Level 1: Flat cards with a 1px border (`#E6EBF1`).
  - Level 2: Raised elements (hover states) with soft shadows.
  - Level 3: Overlays and Modals with deep, diffused shadows.

## Shapes

The shape language is controlled and "Soft Rounded." This balances the coldness of financial data with an approachable, modern feel.

- **Standard Radius:** 8px (0.5rem) for cards and primary containers.
- **Small Radius:** 4px for buttons and input fields to maintain a precise, sharp look.
- **Interactive Elements:** Buttons should feel substantial. Avoid pill-shapes for primary actions to maintain the professional, architectural tone; reserve them only for status tags (chips).

## Components

- **Buttons:** Primary buttons use the Indigo background with white text. Secondary buttons use a subtle gray background or a simple outline. All buttons feature a 0.1s transition on hover.
- **Inputs:** Clean white backgrounds with a 1px border. On focus, use a 2px Indigo glow/border to signal activity. Labels are always positioned above the input in `label-sm`.
- **Cards:** White backgrounds, 8px radius, and a subtle border. Cards should not use heavy shadows unless they are being interacted with.
- **Status Chips:** Use high-saturation backgrounds at 10% opacity with 100% opacity text of the same color (e.g., Green for Success, Orange for Pending).
- **Navigation:** Horizontal top-nav with semi-transparent blurs (glassmorphism) when scrolling over content to maintain context.
- **Data Tables:** No vertical borders. Use thin horizontal separators. Row hover states should be a very faint `#F6F9FC`.