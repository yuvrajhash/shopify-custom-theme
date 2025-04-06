// Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const mobileMenuToggle = document.querySelector('.header__icon--menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu__close');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.setAttribute('aria-hidden', isExpanded);
      
      // Prevent scrolling when menu is open
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });
  }
  
  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', function() {
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }
  
  // Mobile submenu toggles
  const submenuToggles = document.querySelectorAll('.mobile-menu__submenu-toggle');
  
  submenuToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      
      const submenu = toggle.nextElementSibling;
      if (submenu) {
        submenu.setAttribute('aria-hidden', isExpanded);
      }
    });
  });
  
  // Sticky header
  const header = document.querySelector('.header--sticky');
  let lastScrollTop = 0;
  
  if (header) {
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop;
    });
  }
  
  // Product image hover effect
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(function(card) {
    const image = card.querySelector('.product-card__image');
    
    if (image) {
      card.addEventListener('mouseenter', function() {
        image.style.transform = 'scale(1.05)';
      });
      
      card.addEventListener('mouseleave', function() {
        image.style.transform = '';
      });
    }
  });
  
  // Add to cart functionality
  const addToCartForms = document.querySelectorAll('.product-card__form');
  
  addToCartForms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Update cart count
        const cartCount = document.querySelector('[data-cart-count]');
        
        if (cartCount) {
          fetch('/cart.js')
            .then(response => response.json())
            .then(cart => {
              cartCount.textContent = cart.item_count;
            });
        }
        
        // Show success message
        const button = form.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = 'Added!';
        
        setTimeout(function() {
          button.textContent = originalText;
        }, 2000);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });
  
  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
      // Form submission is handled by Shopify
    });
  }
  
  // Image with text layout
  const imageWithTextSections = document.querySelectorAll('.image-with-text');
  
  imageWithTextSections.forEach(function(section) {
    const layout = section.getAttribute('data-layout');
    const wrapper = section.querySelector('.image-with-text__wrapper');
    
    if (wrapper && layout) {
      wrapper.classList.add('layout-' + layout);
    }
  });
});
