---
layout: page
title: Shop
subtitle: Premium Saffron Products
permalink: /shop/
description: "Shop premium saffron products from Saffron for Joy. Coming soon!"
---

<div class="coming-soon">
  <div class="coming-soon-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
    </svg>
  </div>

  <h2>Coming Soon</h2>

  <p>We're carefully curating a collection of premium saffron products that meet our high standards for quality and authenticity. Our shop will feature:</p>

  <ul style="text-align: left; max-width: 400px; margin: 0 auto var(--space-xl); list-style: disc; padding-left: var(--space-xl);">
    <li>Premium grade saffron threads</li>
    <li>Saffron-infused products</li>
    <li>Curated cooking essentials</li>
    <li>Gift sets and bundles</li>
  </ul>

  <p>Be the first to know when we launch!</p>

  <form class="newsletter-form" action="https://formspree.io/f/{{ site.formspree_id }}" method="POST" style="max-width: 400px; margin: 0 auto;">
    <input type="email" name="email" placeholder="Enter your email for early access" required>
    <input type="hidden" name="_subject" value="Shop Launch Interest">
    <button type="submit" class="btn btn--primary">Notify Me</button>
  </form>
</div>

<section class="section section--alt mt-3xl">
  <div class="container">
    <div class="section-header">
      <span class="section-tagline">In the meantime</span>
      <h2 class="section-title">Explore Our Recipes</h2>
      <p class="section-description">Discover delicious ways to use saffron while you wait for our shop to launch.</p>
    </div>

    <div class="text-center">
      <a href="/recipes/" class="btn btn--primary">Browse Recipes</a>
    </div>
  </div>
</section>
