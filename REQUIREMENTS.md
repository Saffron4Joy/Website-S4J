# Saffron for Joy - Website Requirements & Specifications

*Document created: January 2025*
*This document outlines the original requirements and vision for the Saffron for Joy website.*

---

## Project Overview

- **Website Name:** Saffron for Joy
- **Domain:** saffronforjoy.com
- **Platform:** GitHub Pages with Jekyll
- **Goal:** Share saffron recipes, health benefits, and inspire cooking with beautiful content and blog posts

---

## Target Audience

- **Demographics:** Women and men, mid-30s+, financially stable
- **Characteristics:**
  - Wellness-conscious
  - Social media savvy
  - Cooking lifestyle enthusiasts
- **Pain Points:**
  - Looking for mood improvement solutions
  - Seeking joint inflammation remedies
  - Interest in natural wellness approaches

---

## Website Structure

### Required Pages

| Page | Purpose | Status |
|------|---------|--------|
| **Home** | Welcoming, beautiful hero section with CTA to newsletter | Implemented |
| **About** | Story behind Saffron for Joy | Implemented |
| **How It Works** | Health & wellness benefits of saffron | Implemented |
| **Recipes** | Gallery-style showcase of best recipes with photos | Implemented |
| **Blog** | Blog posts listing page | Implemented |
| **Shop** | Placeholder for future e-commerce ("Coming Soon") | Implemented |
| **Contact** | Contact form | Implemented |

---

## Features Requirements

### Must-Have Features

- [x] Mobile responsive design (critical)
- [x] Newsletter signup form (MailerLite/Mailchimp integration ready)
- [x] Blog with categories and search functionality
- [x] Recipe card layouts with ingredients and instructions
- [ ] User account creation capability (for future comments and shopping) - *Planned for Phase 2*
- [x] SEO optimized for target keywords
- [x] Fast loading, clean code

### SEO Keywords to Target

- Saffron recipes
- Wellness
- Health benefits
- Nutrition
- Inflammation
- Seasonal cooking

---

## Design Requirements

### Aesthetic Guidelines

- **Style:** Minimalist, authentic, multicultural, harmonious, warm, premium
- **Inspiration:** https://moribyan.com/recipe-index/ (similar recipe gallery style)
- **Brand Feel:** Professional look suitable for "red gold" premium product

### Color Scheme

Warm tones reflecting saffron:
- **Primary:** Saffron orange (#D4752E)
- **Secondary:** Gold (#C9A227)
- **Accent:** Crimson (#A23B2D)
- **Neutrals:** Cream, ivory, warm white backgrounds
- **Text:** Charcoal (#3D3633)

### Typography

- **Headings:** Cormorant Garamond (elegant, serif)
- **Body:** Montserrat (readable, modern sans-serif)
- **Overall Feel:** Elegant, readable, premium

---

## Technical Specifications

### Platform & Framework

- **Static Site Generator:** Jekyll 4.x
- **Hosting:** GitHub Pages
- **CMS:** Decap CMS (formerly Netlify CMS) for content editing
- **Forms:** Formspree for contact/newsletter forms

### Folder Structure

```
saffron-for-joy/
├── _config.yml          # Jekyll configuration
├── _data/               # Site data files
├── _includes/           # Reusable components
├── _layouts/            # Page templates
├── _posts/              # Blog posts (YYYY-MM-DD-title.md)
├── _recipes/            # Recipe collection
├── admin/               # Decap CMS configuration
├── assets/
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript
│   └── images/          # All images
├── pages/               # Static pages
└── index.html           # Homepage
```

### Content Requirements

- **Blog Posts:** Minimum 2-3 sample posts demonstrating structure
- **Recipes:** Minimum 3-4 example recipes with full details

---

## Integrations

### Current Integrations

| Service | Purpose | Status |
|---------|---------|--------|
| Formspree | Contact form & newsletter | Ready (needs form ID) |
| Google Analytics | Site analytics | Ready (needs tracking ID) |
| Decap CMS | Content management | Configured |

### Future Integrations (Phase 2)

| Service | Purpose | Priority |
|---------|---------|----------|
| MailerLite/Mailchimp | Email marketing | High |
| Shopify/E-commerce | Online shop | High |
| Disqus/Comments | User engagement | Medium |
| User Authentication | Account creation | Medium |

---

## Deployment

### GitHub Repository

- **Repository:** https://github.com/Saffron4Joy/Website-S4J.git
- **Branch:** main
- **Deployment:** GitHub Pages

### Custom Domain

- **Domain:** saffronforjoy.com
- **DNS Provider:** Currently Shopify (transfer to GitHub Pages required)
- **SSL:** Enabled via GitHub Pages

---

## Future Development Roadmap

### Phase 1 (Current) - MVP Launch
- [x] Core website structure
- [x] Sample content
- [x] Basic SEO
- [x] Newsletter capture
- [ ] Custom domain connection

### Phase 2 - Content & Engagement
- [ ] More recipes and blog posts
- [ ] Email marketing integration
- [ ] Social media feed integration
- [ ] User comments system

### Phase 3 - E-commerce
- [ ] Shop page activation
- [ ] Product listings
- [ ] Shopping cart functionality
- [ ] Payment processing

### Phase 4 - Community
- [ ] User accounts
- [ ] Recipe saving/favorites
- [ ] User-submitted recipes
- [ ] Community forum

---

## Content Guidelines

### Blog Posts Should Include

- Compelling title with target keywords
- Featured image (optimized for web)
- Categories and tags
- Meta description for SEO
- Internal links to recipes and other posts
- Call-to-action (newsletter signup, related content)

### Recipes Should Include

- Clear, descriptive title
- High-quality featured image
- Prep time, cook time, servings
- Difficulty level
- Complete ingredient list
- Step-by-step instructions
- Chef's tips
- Nutrition information (optional)
- Story/context about the recipe

---

## Performance Goals

- **Page Load Time:** Under 3 seconds
- **Mobile Score:** 90+ on Google PageSpeed Insights
- **Accessibility:** WCAG 2.1 AA compliant
- **SEO Score:** 90+ on Lighthouse

---

## Notes for Future Developers

1. **Adding new recipes:** Create files in `_recipes/` folder following the existing template
2. **Adding blog posts:** Create files in `_posts/` with format `YYYY-MM-DD-title.md`
3. **Updating styles:** Main CSS is in `assets/css/main.css` using CSS custom properties
4. **CMS access:** Available at `/admin/` once Decap CMS is configured with authentication
5. **Image optimization:** Keep images under 500KB, use WebP format when possible

---

*This document should be updated as the project evolves.*
