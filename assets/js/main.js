/**
 * Saffron for Joy - Main JavaScript
 */

(function() {
  'use strict';

  // DOM Ready
  document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initModals();
    initHeaderScroll();
    initSearch();
  });

  /**
   * Mobile Navigation
   */
  function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /**
   * Modal Functionality
   */
  function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

    modalTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
          openModal(modal);
        }
      });
    });

    modalCloseButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) {
          closeModal(modal);
        }
      });
    });

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
          closeModal(activeModal);
        }
      }
    });
  }

  function openModal(modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first input
    const firstInput = modal.querySelector('input');
    if (firstInput) {
      setTimeout(function() {
        firstInput.focus();
      }, 300);
    }
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /**
   * Header Scroll Effect
   */
  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 50;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  /**
   * Blog Search and Filter
   */
  function initSearch() {
    const searchInput = document.querySelector('.blog-search input');
    const categoryFilters = document.querySelectorAll('.category-filter');
    const postCards = document.querySelectorAll('.post-card');

    if (!searchInput && categoryFilters.length === 0) return;

    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('input', debounce(function() {
        const searchTerm = this.value.toLowerCase().trim();
        filterPosts(searchTerm, getActiveCategory());
      }, 300));
    }

    // Category filter functionality
    categoryFilters.forEach(function(filter) {
      filter.addEventListener('click', function() {
        categoryFilters.forEach(function(f) {
          f.classList.remove('active');
        });
        this.classList.add('active');

        const category = this.getAttribute('data-category');
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        filterPosts(searchTerm, category);
      });
    });

    function getActiveCategory() {
      const activeFilter = document.querySelector('.category-filter.active');
      return activeFilter ? activeFilter.getAttribute('data-category') : 'all';
    }

    function filterPosts(searchTerm, category) {
      postCards.forEach(function(card) {
        const title = card.querySelector('.post-card-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.post-card-excerpt');
        const excerptText = excerpt ? excerpt.textContent.toLowerCase() : '';
        const cardCategory = card.getAttribute('data-category') || '';

        const matchesSearch = !searchTerm ||
          title.includes(searchTerm) ||
          excerptText.includes(searchTerm);

        const matchesCategory = category === 'all' ||
          cardCategory.toLowerCase() === category.toLowerCase();

        if (matchesSearch && matchesCategory) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }
  }

  /**
   * Debounce Helper
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }

  /**
   * Newsletter Form Handling
   */
  document.querySelectorAll('form[action*="formspree"]').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;

      button.textContent = 'Sending...';
      button.disabled = true;

      // Re-enable after form submission (Formspree handles redirect)
      setTimeout(function() {
        button.textContent = originalText;
        button.disabled = false;
      }, 3000);
    });
  });

})();
