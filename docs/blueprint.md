# Royal Auto Paints Qatar — Architectural Blueprint & Technical Specification (Redesign v2)

**Project Name:** Royal Auto Paints Qatar Website Redesign  
**Foundation Framework:** TemplateMo 559 Zay Shop (Bootstrap 5.0.0-beta1 / HTML5 / CSS3 / Vanilla JS)  
**Project Path:** `D:\manu\projects\royalautopaints` (Primary) / `E:\xev\royalautopaints` (Multi-Device Remote Sync)  
**Reference Stock Path:** `E:\xev\zay_royal_paint_template_stock`  
**Legacy Website Path:** `E:\xev\royalautopaints-com-old`  
**Physical Headquarters:** Street 23, Wakalat St, Industrial Area, Doha, Qatar  
**Direct Contacts:** Tel: `+974 4450 1669` | WhatsApp RFQ: `+974 5039 5741` | Email: `info@royalautopaints.com`  
**Status:** Redesign Fully Integrated, Authenticated & Production Ready  

---

## 1. Executive Summary & Client Mandate

Following the client's rejection of previous layout alternatives, the client officially approved the clean, minimalist aesthetic of **TemplateMo 559 Zay Shop** (`zay_royal_paint_template_stock`).

### Strict Client Visual Guidelines:
1. **Royal Auto Paints Logo Brand Palette:** Swapped the stock generic template green (`#59ab6e`) with the authentic Royal Auto Paints logo color system: Primary Royal Oceanic Blue (`#09465f`), Paint Splash Warm Orange (`#f68c50`), Solar Gold (`#ffe05e`), and Slate Charcoal (`#58585a` / `#212934`) over a clean white (`#ffffff`) and light gray canvas (`#efefef`). The Google font (`Roboto`) typography hierarchy is strictly maintained.
2. **Zero Drop Shadows:** Complete elimination of artificial elevations, blurred shadows, and drop shadows (`box-shadow: none !important`). Crisp 1px borders (`#e9ecef`) provide all component separation.
3. **Comprehensive Section Integration from Legacy Site (`royalautopaints-com-old`):** The stock template lacked crucial business sections present in the original website. These have been redesigned and integrated in complete visual harmony:
   - **Services Section:** Computerized Colour Mixing, Aerosol Can Filling, Motolux Refinish Distribution.
   - **Comprehensive Product Catalog:** Categorized, filterable catalog containing authentic HB Body, Challenger, Axalta, and Imlar products with actual photos and instant WhatsApp RFQs.
   - **Authorized Dealership & Brand Story:** Official Qatar dealership for Challenger and HB BODY since 2012.
   - **Brand Partner Showcase:** Interactive grayscale-to-color hover logo ribbon (Axalta, Imlar, Gem Auto Paints, Gemex Coatings, Moto Max).
   - **Verified Client Testimonials:** Authentic reviews from Qatar customers (James, Nasar, Abaan, Qaazi Ali, Shameem Akthar).
   - **Location & Inquiries Desk:** Google Maps interactive embed for Street 23 Wakalat St, operating hours, telephone desk, and floating WhatsApp RFQ button.
4. **Complete Responsive Architecture:** Solved the Zay template's core responsive flaws (`!important` 18px body font on mobile, massive 48px headings on small screens, overlapping carousel arrows, overflowing rows, and broken mobile menu collapses).

---

## 2. Complete Information Architecture & Multi-Page Topology

The website is structured as a high-performance multi-page application with 7 dedicated HTML pages and cross-linked anchor navigation:

```mermaid
flowchart TD
    subgraph Navigation["Unified 7-Item Navigation Bar"]
        NavHome["Home (index.html)"]
        NavAbout["About (about.html)"]
        NavServices["Services (services.html)"]
        NavProducts["Products (products.html)"]
        NavGallery["Gallery (gallery.html)"]
        NavCareer["Career (career.html)"]
        NavContact["Contact (contact.html)"]
    end

    subgraph Pages["Dedicated Standalone Pages"]
        HomePg["index.html\n(Hero, Services, Divisions, Deals, Brands, Reviews)"]
        AboutPg["about.html\n(Heritage Since 2012, Dealership Story, Pillars, Reviews)"]
        ServicesPg["services.html\n(Colour Mixing, Aerosols, Refinish, Booths, Marine, Wood)"]
        ProductsPg["products.html\n(Live Search, Category Filters, 20+ Products, RFQs)"]
        GalleryPg["gallery.html\n(Category Filterable Project Showcase Cards)"]
        CareerPg["career.html\n(4 Qatar Vacancies, Culture, WhatsApp/Email CV Form)"]
        ContactPg["contact.html\n(3 Contact Cards, Hours, Interactive Form, Google Maps)"]
    end

    NavHome --> HomePg
    NavAbout --> AboutPg
    NavServices --> ServicesPg
    NavProducts --> ProductsPg
    NavGallery --> GalleryPg
    NavCareer --> CareerPg
    NavContact --> ContactPg
```

---

## 3. Page & Section Breakdown Matrix

### 3.1 Multi-Page Route Matrix
| URL Route | Page Title | Primary Purpose & Unique Capabilities | Active Nav State |
| :--- | :--- | :--- | :--- |
| `index.html` | Home — Royal Auto Paints | Flagship portal with stock Zay hero carousel (594px), preview sections, dealer credentials, partner ribbon, reviews, and inquiry desk. | `Home` |
| `about.html` | About Us | Authentic corporate history in Doha Industrial Area since 2012, authorized Qatar dealership for HB Body & Challenger, 4 pillars of excellence, brand ribbon, and verified customer testimonials. | `About` |
| `services.html` | Specialized Services | Detailed breakdown of OEM computerized color mixing, aerosol spray paint filling, Motolux distribution, spray booth installation, marine finishes, and wood coatings with technical specs and direct RFQ triggers. | `Services` |
| `products.html` | Product Catalogue | Dedicated shopping catalog with 6 category filter pills (`All`, `Clears`, `Putties`, `Primers`, `Thinners`, `Marine`, `Tools`), instant client-side live search input, 20+ authentic products, and one-tap WhatsApp RFQ buttons. | `Products` |
| `gallery.html` | Project Gallery | Visual portfolio with filter tabs (`All`, `Automotive`, `Spray Booths`, `Marine & Yacht`, `Wood & Industrial`, `Lab & Mixing`) displaying high-resolution showroom photography. | `Gallery` |
| `career.html` | Careers & Openings | 4 authentic Qatar job vacancies (Color Mixing Technician, B2B Sales Executive, Spray Booth Maintenance Specialist, Warehouse Logistics Coordinator), benefits grid, and on-page interactive application form with WhatsApp/Email dispatch. | `Career` |
| `contact.html` | Contact Us & Showroom | Central Wakalat St showroom details, telephone and WhatsApp direct dialers, morning & evening operating hours schedule, responsive Google Maps iframe, and technical inquiry dispatch form. | `Contact` |

### 3.2 Global Structural Components
| Component ID | Component Name | Source Origin | Key Contents & Components |
| :--- | :--- | :--- | :--- |
| `#templatemo_nav_top` | Top Utility Bar | Zay Stock + Brand Spec | Doha Street 23 address, direct showroom phone `+974 4450 1669`, WhatsApp RFQ `+974 5039 5741`, and direct inquiry desk email `info@royalautopaints.com` with clickable mailto link. |
| `#templatemo_main_nav` | Unified 7-Item Navigation | Stock Zay Fidelity + Call Us Action | Official 44px brand logo, 7 items (`Home`, `About`, `Services`, `Products`, `Gallery`, `Career`, `Contact`) in single-row desktop layout matching stock Zay proportions (`width: 100% !important; max-width: 100% !important; padding: 8px 14px; font-size: 18px; font-weight: 300; white-space: nowrap; flex-fill padding: 1.5rem`), sticky-top header (~82px total height), active state indicator (`--rap-primary`), and modern interactive `.btn-call-pill` (`border-radius: 12px; font-weight: 600; background: #f1f5f9; fa-phone icon + 'Call Us'`) linking directly to `tel:+97444501669` in both desktop and mobile headers. |
| `#templatemo_search` | Search Modal | Zay Stock | Fast search overlay modal available from header icon on every page. |
| `#divisions` | 4 Core Business Divisions Showcase | Exact Reference Specification | Integrated 4-column corporate showcase on `#E9EFF7` background with `#D8E3F0` geometric facets, thin vertical dividers (`#BDCDDF`), slanted visual headers with circular navy icon badges, `01`–`04` number lines, navy titles (`#142F50`), slate descriptions (`#5D6F86`), and compact rectangular navy buttons (`#17365B`) with zero drop shadows. |
| `#tempaltemo_footer` | Corporate 3-Column Footer | Zay Stock + Redesign | Column 1: Company Profile & Doha contacts; Column 2: Core Business Divisions; Column 3: Full Site Navigation & Direct Social Links (WhatsApp, Phone, Email, Instagram, Facebook). |
| `.floating-whatsapp-btn` | Floating Action Button | Redesign Enhancement | Fixed bottom-right pulsing WhatsApp quick link for instant RFQ dispatch (`+974 5039 5741`) from any screen position across all 7 pages. |

### 3.3 Core Business Divisions Specification (`#divisions`)
Redesigned to replicate the approved corporate reference specification with pixel-perfect fidelity:
- **Colour Palette Specification:**
  - **Main Section Canvas:** `#E9EFF7`
  - **Primary Navy:** `#17365B` (Buttons and Eyebrow)
  - **Heading Navy:** `#142F50` (Section Title & Division Headings)
  - **Body / Description Slate:** `#5D6F86`
  - **Dividers & Accent Rules:** `#BDCDDF`
  - **Showcase Surface:** `#FFFFFF`
  - **Subtle Background Geometry:** `#D8E3F0` (layered low-opacity vector facets)
  - **Strict Palette Rule:** Zero drop shadows (`box-shadow: none !important`), no green, no orange, no teal, and no bright buttons.
- **Section Heading:**
  - Uppercase tracked eyebrow `COMPREHENSIVE SURFACE SOLUTIONS` (`#17365B`, 600 weight) flanked by horizontal divider rules (`#BDCDDF`).
  - Lightweight elegant title `Our 4 Core Business Divisions` (Roboto 300, 42px, `#142F50`).
  - Subtitle: `Supplying world-class coatings, OEM color formulation, and commercial spray booth engineering across Qatar.` (`#5D6F86`, 15px).
- **Connected Corporate Showcase Architecture:**
  - One continuous horizontal container (`.divisions-showcase-container`) with `#FFFFFF` background and fine `#BDCDDF` border (no individual floating cards, no card gaps, no outer rounded cards).
  - Four equal-width columns (`.division-col`) separated by thin `1px solid #BDCDDF` vertical divider lines.
  - Large rectangular industry visuals spanning full column width with subtle diagonal slant and overlapping circular navy icon badges.
  - Division 01: Automotive Refinish (`images/division_card_1.png` + Car Badge + `01 ——————` divider line -> `services.html#color-mixing`).
  - Division 02: Commercial Paint Booth (`images/division_card_2.png` + Spray Booth Badge + `02 ——————` divider line -> `services.html#booths`).
  - Division 03: Marine & Yacht (`images/division_card_3.png` + Boat Badge + `03 ——————` divider line -> `services.html#marine`).
  - Division 04: Wood & Architectural (`images/division_card_4.png` + Architectural Layers Badge + `04 ——————` divider line -> `services.html#wood`).
  - Compact rectangular navy buttons (`.btn-explore-division`, `#17365B`, 3px border-radius) with hover transition to `#142F50` and right-arrow translate.
- **Responsive Breakpoint Matrix:**
  - **Desktop (≥992px):** 4 equal columns in 1 continuous row.
  - **Tablet (768px–991px):** 2x2 grid with internal vertical and horizontal divider rules (`#BDCDDF`).
  - **Mobile (<768px):** 1 column per row with fine horizontal dividers between divisions.

### 3.4 Top Utility Bar Email Standardization (`#templatemo_nav_top`)
- Standardized across all 7 site pages (`index.html`, `about.html`, `services.html`, `products.html`, `gallery.html`, `career.html`, `contact.html`).
- Left side: Physical location (`Street 23, Wakalat St, Industrial Area, Doha, Qatar`), direct telephone (`+974 4450 1669`), and WhatsApp RFQ (`+974 5039 5741`).
- Right side: Exclusively displays the clickable email link `<a class="navbar-sm-brand text-light text-decoration-none small" href="mailto:info@royalautopaints.com"><i class="fa fa-envelope fa-sm fa-fw me-2 text-light"></i>info@royalautopaints.com</a>`. Removed redundant `"Direct Inquiries:"` label and duplicate call/WhatsApp icons.


---

## 4. Responsive Engineering & Breakpoint Specifications

### 4.1 Typography Scaling Across Viewports (Stock Zay Fidelity)
```css
/* Large Desktop (>=992px) - Exact Stock Zay Fidelity */
.h1, h1 { font-size: 48px !important; font-weight: 200 !important; line-height: 1.2 !important; color: #212934; }
.h2, h2 { font-size: 30px !important; font-weight: 300 !important; color: #212934; }
.h3, h3 { font-size: 22px !important; font-weight: 300 !important; }
#template-mo-zay-hero-carousel .carousel-item { min-height: 30rem !important; }

/* Tablet (768px - 991px) */
.h1, h1 { font-size: 38px !important; font-weight: 200 !important; }
.h2, h2 { font-size: 26px !important; font-weight: 300 !important; }
.h3, h3 { font-size: 20px !important; }

/* Mobile Devices (<768px) */
.h1, h1 { font-size: 28px !important; font-weight: 300 !important; line-height: 1.3 !important; }
.h2, h2 { font-size: 22px !important; font-weight: 300 !important; }
.h3, h3 { font-size: 18px !important; }
body, p, ul, li, div { font-size: 15px !important; line-height: 1.5 !important; }
.badge-subtle { font-size: 12px !important; }
```

### 4.2 Hero Banner Proportions & Stock Zay Parity
- **Rendered Height:** Exactly 594px on desktop (498px image height + 48px top/bottom `p-5` padding), 100% matching stock Zay template.
- **Typography:** Ultra-light Roboto 200 for `.h1`, light Roboto 300 for `.h2` (dark charcoal `#212934`), and clean Roboto 300 for `p`.
- **Image Assets:** 800x800 square studio renders with transparent backgrounds (`hero_slide_01.png` through `hero_slide_05.png`) for seamless blending onto `#efefef`.
- **Clutter Elimination:** Removed artificial badges and dual buttons from hero slides to preserve stock Zay's spacious, elegant presentation.
- **Navigation Controls:** Stock `w-auto ps-3` and `w-auto pe-3` chevron controls with `fas fa-chevron-left/right` (`color: #09465f`, hover: `#f68c50`, `font-size: 2.8em`).

### 4.3 Gutter & Container Overflow Prevention
- Changed non-responsive row gutters `g-5` (which create negative margins exceeding mobile container padding) to responsive gutters `g-4 g-lg-5`.
- Verified using Chrome DevTools Protocol (CDP) headless Edge testing across viewports:
  - Mobile (375px): `scrollWidth: 375`, `innerWidth: 375`, `overflowing: []` (0px overflow).
  - Tablet (768px): `scrollWidth: 768`, `innerWidth: 768`, `overflowing: []` (0px overflow).
  - Desktop (1280px): `scrollWidth: 1265`, `innerWidth: 1280`, `overflowing: []` (0px overflow).

---

## 5. Asset Organization & Multi-Page File Structure

To maintain a clean and production-grade codebase, product assets have been isolated into dedicated subdirectories, and each page has a dedicated HTML file:
```
royalautopaints/ (D:\manu\projects\royalautopaints / E:\xev\royalautopaints)
├── css/
│   ├── bootstrap.min.css
│   ├── templatemo.css
│   └── custom.css             (Zero drop shadow, responsive typography & badge overrides)
├── docs/
│   └── blueprint.md           (Architecture & Technical Specification)
├── fonts/                     (FontAwesome assets)
├── images/
│   ├── products/              (83 authentic product images)
│   ├── division_card_1.png    (Division 1: Automotive Refinish with angle cut & car badge)
│   ├── division_card_2.png    (Division 2: Commercial Paint Booth with angle cut & booth badge)
│   ├── division_card_3.png    (Division 3: Marine & Yacht with angle cut & yacht badge)
│   ├── division_card_4.png    (Division 4: Wood & Architectural with angle cut & layers badge)
│   ├── hero_slide_01.png      (Slide 1: Automotive Refinish 800x800)
│   ├── hero_slide_02.png      (Slide 2: Spray Booth Engineering 800x800)
│   ├── hero_slide_03.png      (Slide 3: Marine & Yacht Finishes 800x800)
│   ├── hero_slide_04.png      (Slide 4: Wood & Architectural 800x800)
│   ├── hero_slide_05.png      (Slide 5: Heavy-Duty Industrial 800x800)
│   ├── royal_logo.png         (44px official brand logo)
│   ├── royal_logo_white.png   (Footer brand logo)
│   ├── auth.jpg               (Challenger & HB Body authorized dealer feature)
│   └── ...                    (Service thumbnails, brand logos)
├── js/
│   ├── bootstrap.bundle.min.js
│   ├── templatemo.js
│   └── custom.js              (Interactive product filtering, mobile menu auto-close)
├── products/                  (Directory junction pointing to images/products/)
├── index.html                 (Main responsive landing page - Home)
├── about.html                 (Dedicated About page - History, Pillars & Dealership)
├── services.html              (Dedicated Services page - Mixing, Aerosols, Booths)
├── products.html              (Dedicated Products page - Filter pills & Instant Search)
├── gallery.html               (Dedicated Gallery page - Project & Product Showcase)
├── career.html                (Dedicated Career page - 4 Openings & Application Form)
├── contact.html               (Dedicated Contact page - Showroom Hours, Maps, RFQ Form)
└── README.md
```

---

## 6. Verification & Quality Assurance Protocol

Automated headless Edge test scripts validate each build:
- `scratch/capture_all_divisions.js`: Captures CDP screenshots of the 4 Core Business Divisions section across desktop (1440px), tablet (768px), and mobile (390px). Confirms 1:1 fidelity with reference specification.
- `scratch/test_all_pages.js`: Evaluates all 7 pages across mobile (375px), tablet (768px), and desktop (1280px). Confirms 0px horizontal overflow across all pages and viewports.
- `scratch/capture_exact_slide.js`: Verifies exact visual parity and 594px desktop carousel height matching the stock Zay template.
- `scratch/test_nav.js`: Verifies cross-linking and active navigation highlighting across all pages.
- Results: 100% PASS on mobile (375px), tablet (768px), and desktop (1280px/1440px) across all 7 pages.
