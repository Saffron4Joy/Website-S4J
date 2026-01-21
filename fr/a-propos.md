---
layout: page
title: À Propos
subtitle: L'Histoire de Saffron for Joy
permalink: /fr/a-propos/
lang: fr
description: "Découvrez notre passion pour le safran et notre mission de partager ses incroyables bienfaits avec le monde."
---

{% assign t = site.data.translations.fr %}

<div class="about-intro">
  <div class="about-image">
    <img src="{{ '/assets/images/about-main.png' | relative_url }}" alt="Fils de safran">
  </div>
  <div class="about-text">
    <h2>{{ t.about_journey_title }}</h2>
    <p>{{ t.about_journey_p1 }}</p>
    <p>{{ t.about_journey_p2 }}</p>
    <p>{{ t.about_journey_p3 }}</p>
  </div>
</div>

## {{ t.about_mission_title }}

{{ t.about_mission_text }}

À travers nos recettes, nous vous montrons à quel point le safran peut être polyvalent. À travers notre contenu bien-être, nous explorons les bienfaits prouvés par la science qui ont fait du safran un trésor depuis des millénaires. Et à travers notre communauté, nous connectons les amoureux du safran du monde entier.

<section class="section section--alt mt-3xl">
  <div class="section-header">
    <span class="section-tagline">{{ t.about_values_tagline }}</span>
    <h2 class="section-title">{{ t.about_values_title }}</h2>
  </div>

  <div class="values-grid">
    <div class="value-card">
      <h3>{{ t.about_value_authenticity }}</h3>
      <p>{{ t.about_value_authenticity_desc }}</p>
    </div>
    <div class="value-card">
      <h3>{{ t.about_value_quality }}</h3>
      <p>{{ t.about_value_quality_desc }}</p>
    </div>
    <div class="value-card">
      <h3>{{ t.about_value_wellness }}</h3>
      <p>{{ t.about_value_wellness_desc }}</p>
    </div>
    <div class="value-card">
      <h3>{{ t.about_value_community }}</h3>
      <p>{{ t.about_value_community_desc }}</p>
    </div>
  </div>
</section>

## {{ t.about_join_title }}

{{ t.about_join_text }}

<div class="text-center mt-2xl">
  <a href="/fr/recettes/" class="btn btn--primary">{{ t.explore_recipes }}</a>
  <a href="/fr/contact/" class="btn btn--outline">{{ t.get_in_touch }}</a>
</div>
