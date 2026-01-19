---
layout: page
title: Contact Us
subtitle: We'd Love to Hear From You
permalink: /contact/
description: "Get in touch with Saffron for Joy. Questions, collaborations, or just want to say hello - we're here!"
---

<div class="contact-form">
  <p class="text-center mb-2xl">Have a question, suggestion, or just want to share your saffron story? Fill out the form below and we'll get back to you as soon as possible.</p>

  <form action="https://formspree.io/f/{{ site.formspree_id }}" method="POST">
    <div class="form-row">
      <div class="form-group">
        <label for="name">Name *</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required>
      </div>
    </div>

    <div class="form-group">
      <label for="subject">Subject *</label>
      <select id="subject" name="subject" required>
        <option value="">Select a topic...</option>
        <option value="General Inquiry">General Inquiry</option>
        <option value="Recipe Question">Recipe Question</option>
        <option value="Collaboration">Collaboration / Partnership</option>
        <option value="Press">Press / Media</option>
        <option value="Feedback">Feedback / Suggestion</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div class="form-group">
      <label for="message">Message *</label>
      <textarea id="message" name="message" rows="6" required placeholder="Tell us what's on your mind..."></textarea>
    </div>

    <input type="hidden" name="_subject" value="New Contact Form Submission">

    <div class="text-center">
      <button type="submit" class="btn btn--primary btn--large">Send Message</button>
    </div>
  </form>
</div>

<section class="section section--alt mt-3xl">
  <div class="container">
    <div class="section-header">
      <span class="section-tagline">Connect With Us</span>
      <h2 class="section-title">Follow Our Journey</h2>
      <p class="section-description">Join our community on social media for daily inspiration, behind-the-scenes content, and exclusive updates.</p>
    </div>

    <div class="text-center">
      <div style="display: flex; justify-content: center; gap: var(--space-lg); flex-wrap: wrap;">
        <a href="https://instagram.com/{{ site.instagram_username }}" target="_blank" rel="noopener" class="btn btn--outline">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          Instagram
        </a>
        <a href="https://pinterest.com/{{ site.pinterest_username }}" target="_blank" rel="noopener" class="btn btn--outline">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
          Pinterest
        </a>
        <a href="https://facebook.com/{{ site.facebook_username }}" target="_blank" rel="noopener" class="btn btn--outline">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          Facebook
        </a>
      </div>
    </div>
  </div>
</section>
