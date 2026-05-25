/* ============================================================
   AutoElite Cars — Main Script
   Handles: Loader, Navbar, Hero Slider, Cart, Products,
            Filters, Countdown, Animations, Checkout
   ============================================================ */

// ===== PRODUCT DATABASE =====
const PRODUCTS = [
  // NEW CARS
  { id: 1, name: 'Toyota Corolla 2024', price: 4500000, oldPrice: 4800000, category: 'new-cars', subCat: 'Sedan', img: 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800', badge: 'NEW', year: 2024, fuel: 'Petrol', transmission: 'Auto', mileage: 0, color: 'White', desc: 'Brand new Toyota Corolla 2024 with latest features. Comes with full manufacturer warranty. 1.8L engine, power windows, climate control, touchscreen infotainment.' },
  { id: 2, name: 'Honda Civic 2024', price: 5200000, oldPrice: 5500000, category: 'new-cars', subCat: 'Sedan', img: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800', badge: 'HOT', year: 2024, fuel: 'Petrol', transmission: 'Auto', mileage: 0, color: 'Red', desc: 'Honda Civic 2024 — sporty design, turbocharged 1.5L engine, Apple CarPlay, Honda Sensing safety suite included.' },
  { id: 3, name: 'Suzuki Alto 2024', price: 2100000, oldPrice: 2300000, category: 'new-cars', subCat: 'Hatchback', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800', badge: 'NEW', year: 2024, fuel: 'Petrol', transmission: 'Manual', mileage: 0, color: 'Silver', desc: 'Fuel-efficient, city-friendly Suzuki Alto. Perfect for daily commutes. Low maintenance cost and excellent fuel economy.' },
  { id: 4, name: 'Kia Sportage 2024', price: 6800000, oldPrice: 7200000, category: 'new-cars', subCat: 'SUV', img: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800', badge: 'NEW', year: 2024, fuel: 'Petrol', transmission: 'Auto', mileage: 0, color: 'Black', desc: 'All-new Kia Sportage 2024 with panoramic sunroof, dual-zone climate control, advanced driver assistance systems.' },
  // USED CARS
  { id: 5, name: 'Toyota Corolla 2020', price: 3200000, oldPrice: 3500000, category: 'used-cars', subCat: 'Sedan', img: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', badge: 'USED', year: 2020, fuel: 'Petrol', transmission: 'Auto', mileage: 45000, color: 'White', desc: 'Well-maintained Toyota Corolla 2020. Single owner, full service history, no accidents, original paint.' },
  { id: 6, name: 'Honda City 2019', price: 2600000, oldPrice: 2900000, category: 'used-cars', subCat: 'Sedan', img: 'https://images.unsplash.com/photo-1555353540-64580b51c258?w=800', badge: 'USED', year: 2019, fuel: 'Petrol', transmission: 'Manual', mileage: 62000, color: 'Silver', desc: 'Honda City 2019 in excellent condition. Complete documents, original auction sheet available. Immaculate interior.' },
  { id: 7, name: 'Suzuki Wagon R 2021', price: 2400000, oldPrice: 2700000, category: 'used-cars', subCat: 'Hatchback', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', badge: 'SALE', year: 2021, fuel: 'Petrol', transmission: 'Auto', mileage: 38000, color: 'Blue', desc: 'Japanese imported Wagon R with VXR grade. Alloy wheels, push start, keyless entry, reverse camera.' },
  { id: 8, name: 'Toyota Fortuner 2018', price: 9500000, oldPrice: 10000000, category: 'used-cars', subCat: 'SUV', img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800', badge: 'USED', year: 2018, fuel: 'Diesel', transmission: 'Auto', mileage: 85000, color: 'White', desc: 'Toyota Fortuner 4x4 diesel. Powerful SUV, 7-seater, tow bar, roof rack. Perfect for families and off-road.' },
  // SUVs
  { id: 9, name: 'Hyundai Tucson 2023', price: 7200000, oldPrice: 7600000, category: 'suvs', subCat: 'SUV', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', badge: 'NEW', year: 2023, fuel: 'Petrol', transmission: 'Auto', mileage: 0, color: 'Grey', desc: 'Hyundai Tucson 2023 with 2.0L engine, panoramic sunroof, 10.25" touchscreen, wireless charging.' },
  { id: 10, name: 'Toyota Land Cruiser', price: 25000000, oldPrice: 27000000, category: 'suvs', subCat: 'SUV', img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800', badge: 'HOT', year: 2023, fuel: 'Diesel', transmission: 'Auto', mileage: 0, color: 'White', desc: 'Toyota Land Cruiser — the king of SUVs. V8 diesel, full-time 4WD, luxury interior, ultimate off-road capability.' },
  { id: 11, name: 'MG HS 2023', price: 5800000, oldPrice: 6200000, category: 'suvs', subCat: 'SUV', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800', badge: 'NEW', year: 2023, fuel: 'Petrol', transmission: 'Auto', mileage: 0, color: 'Red', desc: 'MG HS 2023 — feature-packed SUV with 1.5T turbocharged engine, 360-camera, ADAS safety system.' },
  // SEDANS
  { id: 12, name: 'BMW 3 Series 2022', price: 12500000, oldPrice: 13500000, category: 'sedans', subCat: 'Sedan', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', badge: 'HOT', year: 2022, fuel: 'Petrol', transmission: 'Auto', mileage: 22000, color: 'Blue', desc: 'BMW 3-Series 330i — the ultimate driving machine. Sport package, M-sport bumpers, ambient lighting, Harman Kardon sound.' },
  { id: 13, name: 'Toyota Camry 2023', price: 9200000, oldPrice: 9800000, category: 'sedans', subCat: 'Sedan', img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', badge: 'NEW', year: 2023, fuel: 'Hybrid', transmission: 'Auto', mileage: 0, color: 'Black', desc: 'Toyota Camry Hybrid 2023. Fuel-efficient 2.5L hybrid powertrain, JBL premium audio, digital cockpit.' },
  // HATCHBACKS
  { id: 14, name: 'Honda Fit 2021', price: 3100000, oldPrice: 3400000, category: 'hatchbacks', subCat: 'Hatchback', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800', badge: 'USED', year: 2021, fuel: 'Petrol', transmission: 'Auto', mileage: 28000, color: 'Green', desc: 'Japanese imported Honda Fit with magic seat. Versatile interior, Honda Sensing, low mileage.' },
  { id: 15, name: 'Suzuki Swift 2022', price: 2900000, oldPrice: 3200000, category: 'hatchbacks', subCat: 'Hatchback', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800', badge: 'NEW', year: 2022, fuel: 'Petrol', transmission: 'Manual', mileage: 8000, color: 'White', desc: 'Suzuki Swift 2022 — sporty hatchback with 1.2L boosterjet engine. Alloy wheels, touchscreen, excellent resale value.' },
  // LUXURY
  { id: 16, name: 'Mercedes C-Class 2023', price: 18000000, oldPrice: 19500000, category: 'luxury', subCat: 'Sedan', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', badge: 'HOT', year: 2023, fuel: 'Petrol', transmission: 'Auto', mileage: 0, color: 'Black', desc: 'Mercedes-Benz C-Class 2023. AMG body kit, MBUX infotainment, air suspension, panoramic sunroof, Burmester sound.' },
  { id: 17, name: 'Audi A6 2022', price: 22000000, oldPrice: 24000000, category: 'luxury', subCat: 'Sedan', img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800', badge: 'NEW', year: 2022, fuel: 'Petrol', transmission: 'Auto', mileage: 12000, color: 'Grey', desc: 'Audi A6 2022 — German luxury at its finest. Matrix LED headlights, virtual cockpit, quattro AWD, 55 TFSI engine.' },
  // SPORTS
  { id: 18, name: 'BMW M3 Competition', price: 28000000, oldPrice: 30000000, category: 'sports', subCat: 'Sports', img: 'https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=800', badge: 'HOT', year: 2023, fuel: 'Petrol', transmission: 'Auto', mileage: 5000, color: 'Blue', desc: 'BMW M3 Competition — 510 bhp twin-turbo inline-6. Track-ready performance with daily-driver comfort. M Drive modes.' },
  { id: 19, name: 'Porsche 718 Cayman', price: 35000000, oldPrice: 38000000, category: 'sports', subCat: 'Sports', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800', badge: 'NEW', year: 2023, fuel: 'Petrol', transmission: 'Auto', mileage: 0, color: 'Yellow', desc: 'Porsche 718 Cayman — mid-engine sports coupe. Pure driving experience with 300hp flat-four turbo engine.' },
  // ELECTRIC
  { id: 20, name: 'BYD Seal EV 2024', price: 8900000, oldPrice: 9500000, category: 'electric', subCat: 'Electric', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800', badge: 'NEW', year: 2024, fuel: 'Electric', transmission: 'Auto', mileage: 0, color: 'Blue', desc: 'BYD Seal 2024 electric sedan. 570km range on single charge, blade battery technology, advanced driver assist.' },
  { id: 21, name: 'Tesla Model 3 2023', price: 12000000, oldPrice: 13000000, category: 'electric', subCat: 'Electric', img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', badge: 'HOT', year: 2023, fuel: 'Electric', transmission: 'Auto', mileage: 15000, color: 'White', desc: 'Tesla Model 3 Long Range AWD. Over-the-air updates, Autopilot, 15" touchscreen, 500km+ range, supercharger access.' },
  // ACCESSORIES
  { id: 22, name: 'Car Cover Premium', price: 8500, oldPrice: 12000, category: 'accessories', subCat: 'Accessories', img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800', badge: 'SALE', year: null, fuel: null, transmission: null, mileage: null, color: null, desc: 'Waterproof all-weather car cover. UV protection, soft inner lining, elastic hem for secure fit. Universal size.' },
  { id: 23, name: 'Dash Cam 4K Sony', price: 22000, oldPrice: 35000, category: 'accessories', subCat: 'Accessories', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800', badge: 'SALE', year: null, fuel: null, transmission: null, mileage: null, color: null, desc: '4K Sony sensor dash cam with night vision, GPS tracking, wide angle 170° lens, loop recording, parking mode.' },
  { id: 24, name: 'Seat Cover Leather Set', price: 15000, oldPrice: 22000, category: 'accessories', subCat: 'Accessories', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800', badge: 'SALE', year: null, fuel: null, transmission: null, mileage: null, color: null, desc: 'Premium PU leather seat covers. Universal fit, breathable material, full set including headrests, airbag compatible.' },
];

// Format price to PKR
function formatPrice(p) {
  if (p >= 10000000) return 'Rs ' + (p / 10000000).toFixed(1) + ' Cr';
  if (p >= 100000) return 'Rs ' + (p / 100000).toFixed(1) + ' Lac';
  return 'Rs ' + p.toLocaleString();
}

// ===== CART SYSTEM =====
let cart = JSON.parse(localStorage.getItem('ae_cart') || '[]');

function saveCart() { localStorage.setItem('ae_cart', JSON.stringify(cart)); }

function addToCart(id, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty += qty; } else { cart.push({ ...product, qty }); }
  saveCart();
  updateCartCount();
  showToast(`<i class="fas fa-check-circle"></i> ${product.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
  renderCartPage();
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCartPage();
}

function clearCart() { cart = []; saveCart(); updateCartCount(); }

function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function getCartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function updateCartCount() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// ===== RENDER PRODUCTS =====
function renderProductCard(product) {
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const specs = [];
  if (product.year) specs.push(`<span class="product-spec"><i class="fas fa-calendar"></i>${product.year}</span>`);
  if (product.fuel) specs.push(`<span class="product-spec"><i class="fas fa-gas-pump"></i>${product.fuel}</span>`);
  if (product.transmission) specs.push(`<span class="product-spec"><i class="fas fa-cog"></i>${product.transmission}</span>`);
  if (product.mileage !== null && product.mileage !== undefined && product.mileage !== '') {
    specs.push(`<span class="product-spec"><i class="fas fa-tachometer-alt"></i>${product.mileage > 0 ? product.mileage.toLocaleString() + ' km' : '0 km'}</span>`);
  }

  return `
    <div class="product-card aos" data-id="${product.id}" data-cat="${product.category}" data-price="${product.price}">
      <div class="product-badge">
        ${product.badge ? `<span class="badge badge-${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
        ${discount > 0 ? `<span class="badge badge-sale" style="margin-left:4px">${discount}% OFF</span>` : ''}
      </div>
      <div class="product-img-wrap">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
        <div class="product-actions-overlay">
          <button class="overlay-btn" onclick="event.stopPropagation(); addToCart(${product.id})" title="Add to Cart"><i class="fas fa-cart-plus"></i></button>
          <button class="overlay-btn" onclick="event.stopPropagation(); openProductDetail(${product.id})" title="View Details"><i class="fas fa-eye"></i></button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-cat">${product.subCat.toUpperCase()}</div>
        <div class="product-name">${product.name}</div>
        ${specs.length ? `<div class="product-specs">${specs.join('')}</div>` : ''}
        <div class="product-price-row">
          <div>
            <span class="product-price">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
            <i class="fas fa-plus"></i> Add
          </button>
        </div>
      </div>
    </div>`;
}

// ===== OPEN PRODUCT DETAIL =====
function openProductDetail(id) {
  localStorage.setItem('ae_detail_id', id);
  window.location.href = 'product.html';
}

// ===== FILTER PRODUCTS =====
function filterAndRender(containerSelector, options = {}) {
  const { category, minPrice, maxPrice, sortBy } = options;
  let filtered = [...PRODUCTS];
  if (category && category !== 'all') filtered = filtered.filter(p => p.category === category);
  if (minPrice) filtered = filtered.filter(p => p.price >= minPrice);
  if (maxPrice) filtered = filtered.filter(p => p.price <= maxPrice);
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'newest') filtered.sort((a, b) => (b.year || 0) - (a.year || 0));
  const container = document.querySelector(containerSelector);
  if (!container) return;
  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-car"></i><h3>No Cars Found</h3><p>Try changing your filters or price range.</p></div>`;
  } else {
    container.innerHTML = filtered.map(renderProductCard).join('');
  }
  initAOS();
}

// ===== HERO SLIDER =====
let slideIndex = 0;
let slideInterval;
const HERO_SLIDES = [
  { tag: 'New Arrivals 2024', title: 'Drive Your <em>Dream</em>', subtitle: 'Premium cars', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400', btn1: { text: 'Browse Cars', href: 'shop.html' }, btn2: { text: 'View Deals', href: 'new-cars.html' } },
  { tag: 'Luxury Collection', title: '<em>Luxury</em> Redefined', subtitle: 'Exclusive sports & luxury cars', img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1400', btn1: { text: 'Luxury Cars', href: 'luxury.html' }, btn2: { text: 'Sports Cars', href: 'sports.html' } },
  { tag: 'Electric Future', title: 'Go <em>Electric</em> Today', subtitle: 'Zero emissions, maximum performance', img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1400', btn1: { text: 'Electric Cars', href: 'electric.html' }, btn2: { text: 'Learn More', href: 'about.html' } },
  { tag: 'Best Deals', title: '<em>Unbeatable</em> Prices', subtitle: 'Used and new cars at Pakistan\'s lowest prices', img: 'https://images.unsplash.com/photo-1555353540-64580b51c258?w=1400', btn1: { text: 'Used Cars', href: 'used-cars.html' }, btn2: { text: 'All Offers', href: 'shop.html' } },
];

function initHeroSlider() {
  const track = document.getElementById('hero-track');
  const dotsWrap = document.getElementById('hero-dots');
  if (!track) return;

  HERO_SLIDES.forEach((slide, i) => {
    const el = document.createElement('div');
    el.className = 'hero-slide';
    el.innerHTML = `<img src="${slide.img}" alt="${slide.subtitle}" loading="${i === 0 ? 'eager' : 'lazy'}">
      <div class="hero-content">
        <div class="hero-tag"><i class="fas fa-star"></i> ${slide.tag}</div>
        <h1 class="hero-title">${slide.title}</h1>
        <p class="hero-desc">${slide.subtitle}</p>
        <div class="hero-btns">
          <a href="${slide.btn1.href}" class="btn-primary"><i class="fas fa-car"></i> ${slide.btn1.text}</a>
          <a href="${slide.btn2.href}" class="btn-secondary">${slide.btn2.text} <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>`;
    track.appendChild(el);

    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsWrap.appendChild(dot);
  });

  startSlideInterval();
}

function goToSlide(n) {
  slideIndex = (n + HERO_SLIDES.length) % HERO_SLIDES.length;
  const track = document.getElementById('hero-track');
  if (track) track.style.transform = `translateX(-${slideIndex * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

function startSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => goToSlide(slideIndex + 1), 5500);
}

function heroArrow(dir) { goToSlide(slideIndex + dir); startSlideInterval(); }

// ===== COUNTDOWN TIMER =====
function initCountdown(targetHours = 12) {
  function update() {
    const now = new Date();
    const end = new Date();
    end.setHours(now.getHours() + targetHours, 0, 0, 0);
    let diff = end - now;
    if (diff < 0) diff = 0;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = String(val).padStart(2, '0'); };
    set('c-h', h); set('c-m', m); set('c-s', s);
  }
  update();
  setInterval(update, 1000);
}

// ===== TOAST =====
function showToast(html, duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-msg">${html}</span><button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>`;
  container.appendChild(toast);
  requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, duration);
}

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('scroll-progress').style.width = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%';
    const scrollTop = document.getElementById('scroll-top');
    if (scrollTop) scrollTop.classList.toggle('show', window.scrollY > 400);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  updateCartCount();
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-nav');
  const btn = document.getElementById('hamburger');
  if (!menu) return;
  menu.classList.toggle('open');
  const spans = btn.querySelectorAll('span');
  if (menu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translateY(7px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
}

// ===== ANIMATE ON SCROLL =====
function initAOS() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.aos, .aos-left, .aos-right').forEach(el => {
    if (!el.classList.contains('visible')) observer.observe(el);
  });
}

// ===== PAGE LOADER =====
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1500);
  });
}

// ===== RENDER CART PAGE =====
function renderCartPage() {
  const tableBody = document.getElementById('cart-table-body');
  const summaryItems = document.getElementById('summary-items');
  const summaryTotal = document.getElementById('summary-total');
  if (!tableBody) return;

  if (cart.length === 0) {
    tableBody.innerHTML = `<div class="empty-state"><i class="fas fa-shopping-cart"></i><h3>Your Cart is Empty</h3><p>Browse our collection and add cars you like.</p><a href="shop.html" class="btn-primary"><i class="fas fa-car"></i> Browse Cars</a></div>`;
    if (summaryTotal) summaryTotal.textContent = 'Rs 0';
    return;
  }

  tableBody.innerHTML = cart.map(item => `
    <div class="cart-row">
      <div class="cart-product">
        <img src="${item.img}" alt="${item.name}">
        <div>
          <div class="cart-product-name">${item.name}</div>
          <div class="cart-product-cat">${item.subCat} · ${item.year || 'N/A'}</div>
        </div>
      </div>
      <div class="cart-price">${formatPrice(item.price)}</div>
      <div>
        <div class="cart-qty-wrap">
          <button class="c-qty-btn" onclick="updateCartQty(${item.id}, -1)">−</button>
          <span class="c-qty-num">${item.qty}</span>
          <button class="c-qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="cart-total-cell">${formatPrice(item.price * item.qty)}</div>
      <button class="cart-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
    </div>`).join('');

  const total = getCartTotal();
  if (summaryItems) {
    summaryItems.innerHTML = cart.map(i => `
      <div class="summary-row"><span>${i.name} x${i.qty}</span><span>${formatPrice(i.price * i.qty)}</span></div>`).join('');
  }
  if (summaryTotal) summaryTotal.innerHTML = formatPrice(total);
}

// ===== RENDER CHECKOUT SUMMARY =====
function renderCheckoutSummary() {
  const el = document.getElementById('checkout-items');
  const total = document.getElementById('checkout-total');
  if (!el) return;
  if (cart.length === 0) {
    el.innerHTML = '<p style="color:var(--text-light);font-size:.88rem;">No items in cart.</p>';
    return;
  }
  el.innerHTML = cart.map(i => `<div class="summary-row"><span>${i.name} x${i.qty}</span><span>${formatPrice(i.price * i.qty)}</span></div>`).join('');
  if (total) total.textContent = formatPrice(getCartTotal());
}

// ===== PAYMENT METHOD SELECTION =====
function selectPayMethod(el, method) {
  document.querySelectorAll('.pay-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const details = {
    jazzcash: '<p><strong>JazzCash Number:</strong> 03184195665<br><strong>Account Name:</strong> AutoElite Cars<br><br>Transfer the exact amount and take a screenshot.</p>',
    easypaisa: '<p><strong>EasyPaisa Number:</strong> 03188791637<br><strong>Account Name:</strong> AutoElite Cars<br><br>Transfer the exact amount and take a screenshot.</p>',
    bank: '<p><strong>Bank:</strong> Meezan Bank<br><strong>Account No:</strong> EC-001234567<br><strong>Account Name:</strong> AutoElite Cars<br><br>Transfer and keep the receipt.</p>',
    cod: '<p>Pay cash when your car/order is delivered.<br><br><strong>Note:</strong> COD available in major cities only. A 50% advance may be required for cars.</p>'
  };
  const box = document.getElementById('pay-details');
  if (box) box.innerHTML = details[method] || '';
}

// ===== RENDER PRODUCT DETAIL =====
function renderProductDetail() {
  const id = parseInt(localStorage.getItem('ae_detail_id'));
  const product = PRODUCTS.find(p => p.id === id);
  const container = document.getElementById('product-detail-container');
  if (!container || !product) {
    if (container) container.innerHTML = '<div class="empty-state"><i class="fas fa-car"></i><h3>Product Not Found</h3><p>The product you are looking for does not exist.</p><a href="shop.html" class="btn-primary">Browse Shop</a></div>';
    return;
  }

  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  container.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-gallery aos-left">
        <div class="gallery-main"><img id="main-img" src="${product.img}" alt="${product.name}"></div>
        <div class="gallery-thumbs">
          <div class="gallery-thumb active" onclick="setMainImg(this, '${product.img}')"><img src="${product.img}" alt="Main"></div>
          <div class="gallery-thumb" onclick="setMainImg(this, '${product.img}?v=1')"><img src="${product.img}?v=1" alt="Side"></div>
          <div class="gallery-thumb" onclick="setMainImg(this, '${product.img}?v=2')"><img src="${product.img}?v=2" alt="Interior"></div>
        </div>
      </div>
      <div class="product-detail-info aos-right">
        <div class="product-cat">${product.subCat.toUpperCase()} · ${product.category.replace('-', ' ').toUpperCase()}</div>
        <h1 class="detail-title">${product.name}</h1>
        <div class="detail-meta">
          <div><span class="detail-price">${formatPrice(product.price)}</span> ${product.oldPrice ? `<span class="detail-old-price">${formatPrice(product.oldPrice)}</span>` : ''}</div>
          ${discount ? `<span class="badge badge-sale">${discount}% OFF</span>` : ''}
          <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><span>(4.5 / 5)</span></div>
        </div>
        <div class="detail-specs-grid">
          ${product.year ? `<div class="detail-spec"><div class="detail-spec-label">Year</div><div class="detail-spec-value">${product.year}</div></div>` : ''}
          ${product.fuel ? `<div class="detail-spec"><div class="detail-spec-label">Fuel</div><div class="detail-spec-value">${product.fuel}</div></div>` : ''}
          ${product.transmission ? `<div class="detail-spec"><div class="detail-spec-label">Transmission</div><div class="detail-spec-value">${product.transmission}</div></div>` : ''}
          ${product.mileage !== null ? `<div class="detail-spec"><div class="detail-spec-label">Mileage</div><div class="detail-spec-value">${product.mileage > 0 ? product.mileage.toLocaleString() + ' km' : 'Brand New'}</div></div>` : ''}
          ${product.color ? `<div class="detail-spec"><div class="detail-spec-label">Color</div><div class="detail-spec-value">${product.color}</div></div>` : ''}
        </div>
        <div class="detail-desc">${product.desc}</div>
        <div class="detail-actions">
          <div class="qty-selector">
            <button class="qty-btn" onclick="changeQty(-1)">−</button>
            <input class="qty-input" id="detail-qty" type="text" value="1" readonly>
            <button class="qty-btn" onclick="changeQty(1)">+</button>
          </div>
          <button class="btn-primary" onclick="addToCart(${product.id}, parseInt(document.getElementById('detail-qty').value))">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
          <a href="cart.html" class="btn-secondary"><i class="fas fa-shopping-cart"></i> View Cart</a>
        </div>
      </div>
    </div>`;
  initAOS();
  document.title = product.name + ' — AutoElite';
}

function setMainImg(thumb, src) {
  document.getElementById('main-img').src = src;
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}
function changeQty(delta) {
  const input = document.getElementById('detail-qty');
  if (input) input.value = Math.max(1, parseInt(input.value) + delta);
}

// ===== RENDER CATEGORY PAGE =====
function renderCategoryPage(category) {
  const container = document.getElementById('category-products');
  if (!container) return;
  const minPrice = parseInt(document.getElementById('min-price')?.value) || 0;
  const maxPrice = parseInt(document.getElementById('max-price')?.value) || Infinity;
  const sortBy = document.getElementById('sort-by')?.value || '';
  filterAndRender('#category-products', { category, minPrice: minPrice || null, maxPrice: maxPrice < 1000000000 ? maxPrice : null, sortBy });
}

// ===== SHOP PAGE FILTERS =====
function initShopFilters() {
  const applyBtn = document.getElementById('apply-filters');
  if (!applyBtn) return;
  const catSelect = document.getElementById('cat-filter');
  const minPriceSelect = document.getElementById('min-price-filter');
  const maxPriceSelect = document.getElementById('max-price-filter');
  const sortSelect = document.getElementById('sort-filter');
  const chips = document.querySelectorAll('.filter-chip');

  const apply = () => {
    const cat = catSelect?.value || 'all';
    const min = parseInt(minPriceSelect?.value) || null;
    const max = parseInt(maxPriceSelect?.value) || null;
    const sort = sortSelect?.value || '';
    filterAndRender('#shop-products', { category: cat !== 'all' ? cat : null, minPrice: min, maxPrice: max, sortBy: sort });
  };

  applyBtn.onclick = apply;
  chips.forEach(chip => {
    chip.onclick = () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const cat = chip.dataset.cat;
      if (catSelect) catSelect.value = cat || 'all';
      apply();
    };
  });
  apply();
}

// ===== ORDER CONFIRMATION =====
function renderOrderConfirmation() {
  const el = document.getElementById('order-number');
  if (el) el.textContent = 'AE' + Date.now().toString().slice(-8);
  const total = document.getElementById('order-total');
  if (total) total.textContent = formatPrice(getCartTotal() || 0);
}

// ===== HOMEPAGE PRODUCTS =====
function renderHomeFeatured() {
  const el = document.getElementById('featured-products');
  if (!el) return;
  const featured = PRODUCTS.filter(p => ['HOT', 'NEW'].includes(p.badge)).slice(0, 8);
  el.innerHTML = featured.map(renderProductCard).join('');
  initAOS();
}

function renderHomeDeals() {
  const el = document.getElementById('deals-grid');
  if (!el) return;
  const deals = PRODUCTS.filter(p => p.oldPrice && (1 - p.price / p.oldPrice) > 0.07).slice(0, 3);
  if (deals.length >= 1) {
    const main = deals[0];
    const disc = Math.round((1 - main.price / main.oldPrice) * 100);
    el.innerHTML = `
      <div class="deal-main aos-left">
        <img src="${main.img}" alt="${main.name}">
        <div class="deal-main-content">
          <div class="deal-tag">LIMITED OFFER</div>
          <div class="deal-title">${main.name}</div>
          <div class="deal-price">${formatPrice(main.price)} <span style="font-size:1rem;opacity:.7;text-decoration:line-through">${formatPrice(main.oldPrice)}</span></div>
          <div class="countdown" style="margin:20px 0 25px">
            <div class="count-box"><span class="count-num" id="c-h">00</span><div class="count-label">HRS</div></div>
            <div class="count-box"><span class="count-num" id="c-m">00</span><div class="count-label">MIN</div></div>
            <div class="count-box"><span class="count-num" id="c-s">00</span><div class="count-label">SEC</div></div>
          </div>
          <button class="btn-white" onclick="addToCart(${main.id})"><i class="fas fa-cart-plus"></i> Get Deal</button>
        </div>
      </div>
      ${deals.slice(1).map(d => {
        const dsc = Math.round((1 - d.price / d.oldPrice) * 100);
        return `<div class="deal-card aos" onclick="openProductDetail(${d.id})" style="cursor:pointer">
          <img src="${d.img}" alt="${d.name}">
          <div class="deal-card-body">
            <div class="deal-card-name">${d.name}</div>
            <div><span class="deal-card-price">${formatPrice(d.price)}</span><span class="deal-off">${dsc}% OFF</span></div>
            <button class="add-cart-btn" style="margin-top:12px;width:100%" onclick="event.stopPropagation(); addToCart(${d.id})"><i class="fas fa-plus"></i> Add to Cart</button>
          </div>
        </div>`;
      }).join('')}`;
    initCountdown(14);
  }
}

// ===== CHECKOUT FORM SUBMIT =====
function submitOrder(e) {
  e.preventDefault();
  const name = document.getElementById('co-name')?.value;
  const phone = document.getElementById('co-phone')?.value;
  if (!name || !phone) { showToast('<i class="fas fa-exclamation-circle"></i> Please fill all required fields.'); return; }
  clearCart();
  window.location.href = 'order-success.html';
}

// ===== INIT PAGE-SPECIFIC LOGIC =====
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initAOS();

  // Scroll to top
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const page = document.body.dataset.page;

  if (page === 'home') {
    initHeroSlider();
    renderHomeFeatured();
    renderHomeDeals();
  }
  if (page === 'shop') initShopFilters();
  if (page === 'cart') renderCartPage();
  if (page === 'checkout') renderCheckoutSummary();
  if (page === 'product') renderProductDetail();
  if (page === 'order-success') renderOrderConfirmation();
  if (page && page.startsWith('cat-')) {
    const cat = page.replace('cat-', '');
    renderCategoryPage(cat);
  }
  if (page === 'auth') {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form-section');
    tabs.forEach(tab => {
      tab.onclick = () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        forms.forEach(f => f.classList.toggle('active', f.dataset.form === tab.dataset.tab));
      };
    });
  }
});
