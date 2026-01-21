---
layout: page
title: Boutique
subtitle: Produits de Safran Premium
permalink: /fr/boutique/
lang: fr
description: "Bientôt disponible - Notre collection de safran premium directement d'Iran."
---

{% assign t = site.data.translations.fr %}

<div class="text-center py-3xl">
  <div class="coming-soon-badge">{{ t.shop_coming_soon }}</div>
  <h2 class="mt-xl">Notre Boutique Arrive Bientôt</h2>
  <p class="section-description">{{ t.shop_coming_soon_text }}</p>

  <div class="mt-2xl">
    <p>Nous travaillons à vous proposer :</p>
    <ul class="feature-list text-left mx-auto" style="max-width: 400px;">
      <li>Safran premium 100% pur de Qaen, Iran</li>
      <li>Récolté à la main et séché naturellement</li>
      <li>Différents formats disponibles</li>
      <li>Livraison dans toute l'Europe</li>
    </ul>
  </div>

  <section class="newsletter-section mt-3xl">
    <div class="container">
      <h3>Soyez Informé du Lancement</h3>
      <p>Inscrivez-vous pour être notifié dès l'ouverture de notre boutique.</p>
      <form class="newsletter-form" action="https://formspree.io/f/{{ site.formspree_id }}" method="POST">
        <input type="email" name="email" placeholder="Entrez votre adresse email" required>
        <input type="hidden" name="_subject" value="Shop Launch Notification - FR">
        <input type="hidden" name="language" value="fr">
        <button type="submit" class="btn btn--primary">Me Notifier</button>
      </form>
    </div>
  </section>
</div>
