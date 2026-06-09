// ===== CART STATE =====
const Cart = {
  items: JSON.parse(localStorage.getItem('mannhousCart') || '[]'),
  
  add(product) {
    const existing = this.items.find(i => i.id === product.id && i.size === product.size);
    if (existing) {
      existing.qty++;
    } else {
      this.items.push({ ...product, qty: 1 });
    }
    this.save();
    this.updateBadge();
    showNotification(`✓ Đã thêm "${product.name}" vào giỏ hàng`);
  },

  remove(id, size) {
    this.items = this.items.filter(i => !(i.id === id && i.size === size));
    this.save();
    this.updateBadge();
  },

  getCount() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  save() {
    localStorage.setItem('mannhousCart', JSON.stringify(this.items));
  },

  updateBadge() {
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = this.getCount();
      el.style.display = this.getCount() > 0 ? 'flex' : 'none';
    });
  }
};

// ===== WISHLIST =====
const Wishlist = {
  items: JSON.parse(localStorage.getItem('mannhousWishlist') || '[]'),

  toggle(id) {
    if (this.items.includes(id)) {
      this.items = this.items.filter(i => i !== id);
      return false;
    } else {
      this.items.push(id);
      return true;
    }
  },

  has(id) { return this.items.includes(id); },

  save() { localStorage.setItem('mannhousWishlist', JSON.stringify(this.items)); }
};

// ===== NOTIFICATION =====
function showNotification(msg) {
  let n = document.querySelector('.notification');
  if (!n) {
    n = document.createElement('div');
    n.className = 'notification';
    n.innerHTML = `<span class="notification-icon">★</span><span class="notification-msg"></span>`;
    document.body.appendChild(n);
  }
  n.querySelector('.notification-msg').textContent = msg;
  n.classList.add('show');
  setTimeout(() => n.classList.remove('show'), 3000);
}

// ===== STICKY NAV SHADOW =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 20
      ? '0 2px 20px rgba(0,0,0,0.08)'
      : 'none';
  }
});

// ===== PRODUCT ACTIONS =====
function addToCart(id, name, price, size = 'M') {
  Cart.add({ id, name, price, size });
}

function toggleWishlist(btn, id) {
  const added = Wishlist.toggle(id);
  Wishlist.save();
  btn.style.color = added ? '#c9a84c' : '';
  showNotification(added ? '❤ Đã thêm vào danh sách yêu thích' : '✕ Đã xóa khỏi danh sách yêu thích');
}

// ===== FILTER TABS =====
function initFilterTabs() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tab.closest('.filter-tabs').querySelectorAll('.filter-tab')
        .forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

// ===== LAZY FADE IN =====
function initFadeObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .blog-card, .category-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ===== SIZE SELECTOR =====
function initSizeSelector() {
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.sizes').querySelectorAll('.size-btn')
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// ===== COLOR SELECTOR =====
function initColorSelector() {
  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.colors').querySelectorAll('.color-btn')
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// ===== QTY CONTROL =====
function changeQty(btn, delta) {
  const control = btn.closest('.qty-control');
  const input = control.querySelector('.qty-val');
  const val = Math.max(1, parseInt(input.value) + delta);
  input.value = val;
}

// ===== NEWSLETTER =====
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input');
      if (input.value) {
        showNotification('✓ Đăng ký nhận tin thành công!');
        input.value = '';
      }
    });
  }
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      showNotification('✓ Tin nhắn đã được gửi thành công!');
      form.reset();
    });
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  initFilterTabs();
  initFadeObserver();
  initSizeSelector();
  initColorSelector();
  initNewsletter();
  initContactForm();

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.navbar-nav a').forEach(a => {
    if (path.includes(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
});
