---
layout: page
title: Contact
subtitle: Contactez-Nous
permalink: /fr/contact/
lang: fr
description: "Contactez l'équipe Saffron for Joy. Nous serions ravis de vous entendre."
---

{% assign t = site.data.translations.fr %}

<div class="contact-intro text-center mb-3xl">
  <p class="section-description">{{ t.contact_intro }}</p>
</div>

<div class="contact-grid">
  <div class="contact-form-wrapper">
    <form class="contact-form" action="https://formspree.io/f/{{ site.formspree_id }}" method="POST">
      <div class="form-group">
        <label for="name">{{ t.contact_form_name }}</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-group">
        <label for="email">{{ t.contact_form_email }}</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="subject">{{ t.contact_form_subject }}</label>
        <input type="text" id="subject" name="subject" required>
      </div>

      <div class="form-group">
        <label for="message">{{ t.contact_form_message }}</label>
        <textarea id="message" name="message" rows="6" required></textarea>
      </div>

      <input type="hidden" name="_subject" value="Nouveau message de contact - FR">
      <input type="hidden" name="language" value="fr">

      <button type="submit" class="btn btn--primary btn--large">{{ t.contact_form_send }}</button>
    </form>
  </div>

  <div class="contact-info">
    <h3>Autres Moyens de Nous Joindre</h3>

    <div class="contact-method">
      <h4>Email</h4>
      <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
    </div>

    <div class="contact-method">
      <h4>Réseaux Sociaux</h4>
      <div class="social-links">
        {% if site.instagram_username %}
        <a href="https://instagram.com/{{ site.instagram_username }}" target="_blank" rel="noopener">Instagram</a>
        {% endif %}
        {% if site.pinterest_username %}
        <a href="https://pinterest.com/{{ site.pinterest_username }}" target="_blank" rel="noopener">Pinterest</a>
        {% endif %}
        {% if site.facebook_username %}
        <a href="https://facebook.com/{{ site.facebook_username }}" target="_blank" rel="noopener">Facebook</a>
        {% endif %}
      </div>
    </div>

    <div class="contact-method">
      <h4>Newsletter</h4>
      <p>Rejoignez notre communauté pour des recettes exclusives et des conseils bien-être.</p>
      <a href="#" class="btn btn--outline newsletter-trigger" data-modal="newsletter-modal">S'abonner</a>
    </div>
  </div>
</div>
