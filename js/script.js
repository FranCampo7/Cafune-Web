// ============================================
// NAV
// ============================================
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

document.getElementById('hamburgerBtn').addEventListener('click', () => {
  const menu = document.getElementById('mobileMenu');
  menu.classList.contains('open') ? menu.classList.remove('open') : menu.classList.add('open');
});

function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ============================================
// SCROLL REVEAL
// ============================================
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// ============================================
// FAQ
// ============================================
function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// ============================================
// CATÁLOGO DE PRODUCTOS
// Editá acá para agregar, modificar o eliminar productos
// img: ruta relativa → img/nombre.png
// infografia: imagen secundaria en el overlay (opcional)
// destacado: true = aparece en la vista "Todos"
// ============================================
const catalogo = [

  // ---- DESTACADOS (vista "Todos") ----
  {
    nombre: 'Acondicionador Sólido',
    cat: 'cabello',
    price: 8000,
    desc: 'Hidratación profunda en formato sólido. Contiene manteca de karité y aceite de coco que nutren tu cabello y lo protegen del daño. Sin siliconas, parabenos, conservantes ni colorantes artificiales. 50 grs · 60 a 80 lavados.',
    img: 'img/acondicionador.png',
    variants: { label: 'Aroma', options: ['Jazmín','Palmarosa','Lavanda','Sándalo'] },
    destacado: true
  },
  {
    nombre: 'Shampoo Sólido Cabellos Secos',
    cat: 'cabello',
    price: 8000,
    desc: 'Nutre e hidrata tu cabello. Tiene propiedades curativas y relajantes. Evita el frizz y previene la caspa. 50 grs · 30 a 45 lavados. Libre de parabenos, conservantes, colorantes y siliconas. Biodegradable y apto veganos.',
    img: 'img/shampoo-secos.png',
    variants: null,
    destacado: true
  },
  {
    nombre: 'Aromatizador de Ambiente',
    cat: 'hogar',
    price: 7000,
    desc: 'Con varillas de bambú que difuminan la esencia manteniendo el aroma en tu espacio. Envase fumé con tapa difusora · 125ml. Rotación semanal de varillas recomendada.',
    img: 'img/Aromantizador.png',
    variants: { label: 'Aroma', options: ['Vainilla y coco','Té verde y pepino','Peras y flores blancas','Flores blancas','Peonias, verbena y rosas','Verbena','Mango y maracuyá','Buenas vibras','Bambú','Vainilla','Tropical','Jazmín','Limón','Manzana','Lavanda','Naranja-Pimienta','Durazno y leche de coco','Papaya','Uvas Verdes'] },
    destacado: true
  },
  {
    nombre: 'Velas de Soja — Vidrio Ámbar',
    cat: 'hogar',
    price: 12000,
    desc: 'Velas de cera de soja 100% natural en envase de vidrio color ámbar. Cada aroma tiene su propia intención: activá, relajate, soñá. Hechas a mano en Córdoba.',
    img: 'img/velas-ambar.png',
    infografia: 'img/info-aromas-velas.png',
    variants: { label: 'Aroma', options: ['Activá','Relajá','Dulces sueños','Buenas vibras','Prosperidad','Gaia','Calma','Emuná'] },
    destacado: true
  },
  {
    nombre: 'Perfume Textil',
    cat: 'hogar',
    price: 10000,
    desc: 'Transformá cada ambiente con aromas delicados y duraderos. Elaborado para perfumar telas, ropa de cama y espacios. Presentación spray fumé 250cc.',
    img: 'img/textil-botella.png',
    infografia: 'img/info-textiles.png',
    variants: { label: 'Aroma', options: ['Fortaleza','Tranquilidad','Armonía','Suavidad','Frescura','Buenas Vibras','Energía','Citrus','Caramelo'] },
    destacado: true
  },
  {
    nombre: 'Horno para Esencias con Bombones',
    cat: 'hogar',
    price: 25000,
    desc: 'Hornito artesanal de cerámica con 6 bombones de cera de soja a elección. El regalo perfecto para quien ama los rituales de bienestar.',
    img: 'img/horno-esencias.png',
    variants: { label: 'Aroma bombones', options: ['Vainilla y coco','Peras y flores blancas','Peonias, verbena y rosas','Buenas vibras','Jazmín','Lavanda','Durazno y leche de coco'] },
    destacado: true
  },

  // ---- CUIDADO CAPILAR ----
  {
    nombre: 'Shampoo Sólido Cabello Normal',
    cat: 'cabello',
    price: 8000,
    desc: 'Romero y Tea Tree para cabellos normales o mixtos. Actúa contra la caída y trata la caspa. Fortalece tu cabello. 50 grs · 30 a 45 lavados. Biodegradable y apto veganos.',
    img: 'img/shampoo-normal.png',
    variants: null,
    destacado: false
  },
  {
    nombre: 'Shampoo Sólido Cabellos Grasos',
    cat: 'cabello',
    price: 8000,
    desc: 'Limón para cabellos grasos. Regula la producción de sebo dejando el cabello fresco y liviano. 50 grs · 30 a 45 lavados. Libre de parabenos, colorantes y siliconas.',
    img: 'img/shampoo-grasos.png',
    variants: null,
    destacado: false
  },
  {
    nombre: 'Shampoo Sólido Cabellos Maltratados',
    cat: 'cabello',
    price: 8000,
    desc: 'Arcilla roja para cabellos secos y teñidos. Humecta, aporta elasticidad y mantiene la humedad. Ideal para cabellos dañados. 50 grs · 30 a 45 lavados.',
    img: 'img/shampoo-maltratados.png',
    variants: null,
    destacado: false
  },
  {
    nombre: 'Shampoo para Niños — Manzanilla',
    cat: 'cabello',
    price: 8000,
    desc: 'Formulado para pieles sensibles, apto para niños. Suave, sin irritantes. Manzanilla para un lavado delicado. 70 grs · 30 a 45 lavados. Se vende por unidad.',
    img: 'img/shampoo-ninos.png',
    variants: null,
    destacado: false
  },

  // ---- HOGAR ----
  {
    nombre: 'Refill Difusor de Ambientes',
    cat: 'hogar',
    price: 6000,
    desc: 'Recargá tu difusor con fragancia nueva. Incluye nuevo set de varillas. Presentación 125cc ($6.000) o 250cc ($10.000).',
    img: 'img/refill.png',
    variants: { label: 'Tamaño', options: ['125cc — $6.000','250cc — $10.000'] },
    destacado: false
  },
  {
    nombre: 'Botella Decorativa Cafuné Botánica',
    cat: 'hogar',
    price: 7000,
    desc: 'Botella de vidrio decorativa para difusor. Capacidad hasta 200cc. Combinala con el refill que más te guste. Solo se vende la botella.',
    img: 'img/botanica.png',
    variants: { label: 'Color', options: ['Ámbar','Verde','Fumé','Cristal'] },
    destacado: false
  },
  {
    nombre: 'Cafuné Pure — Difusor Premium',
    cat: 'hogar',
    price: 12000,
    desc: 'Los aromas de siempre en una presentación más grande y delicada. Excelente opción para regalar. Envase fumé · 125ml.',
    img: 'img/pure.png',
    variants: { label: 'Aroma', options: ['Vainilla y coco','Té verde y pepino','Peras y flores blancas','Flores blancas','Peonias, verbena y rosas','Verbena','Mango y maracuyá','Buenas vibras','Bambú','Vainilla','Tropical','Jazmín','Limón','Manzana','Lavanda','Naranja-Pimienta','Durazno y leche de coco','Papaya','Uvas Verdes'] },
    destacado: false
  },
  {
    nombre: 'Esfera Decorativa AURA',
    cat: 'hogar',
    price: 12000,
    desc: 'Esfera artesanal en cerámica. Usala decorativa o con aromatizador y varillas como difusor. Pieza única hecha a mano.',
    img: 'img/aura.png',
    variants: null,
    destacado: false
  },
  {
    nombre: 'Porta Sahumerio — Playa',
    cat: 'hogar',
    price: 12000,
    desc: 'Porta sahumerio artesanal en cerámica. Diseño Playa, único y hecho a mano.',
    img: 'img/porta-sahumerio.png',
    variants: null,
    destacado: false
  },
  {
    nombre: 'Difusor para Auto',
    cat: 'hogar',
    price: 4000,
    desc: 'Difusor para auto o placard. 10cc. Quitar el tapón plástico, asegurar la tapa de bambú y colgar del espejo retrovisor.',
    img: 'img/difusor-auto.png',
    variants: { label: 'Aroma', options: ['Vainilla y coco','Té verde y pepino','Peras y flores blancas','Flores blancas','Peonias, verbena y rosas','Verbena','Mango y maracuyá','Buenas vibras','Bambú','Vainilla','Tropical','Jazmín','Limón','Manzana','Lavanda','Naranja-Pimienta','Durazno y leche de coco','Papaya','Uvas Verdes'] },
    destacado: false
  },
  {
    nombre: 'Velas de Soja — Cerámica Blanca',
    cat: 'hogar',
    price: 20000,
    desc: 'Velas de soja en envase cerámico artesanal color blanco natural. Posterior al uso podés lavar el envase y usarlo como cuenco o decoración.',
    img: 'img/velas-ceramica.png',
    infografia: 'img/info-aromas-velas.png',
    variants: { label: 'Aroma', options: ['Activá','Relajá','Dulces sueños','Buenas vibras','Prosperidad','Gaia','Calma','Emuná'] },
    destacado: false
  },
  {
    nombre: 'Velas de Soja — Cerámica Verde',
    cat: 'hogar',
    price: 20000,
    desc: 'Velas de soja en envase cerámico artesanal color verde. Posterior al uso podés lavar el envase y usarlo como cuenco o decoración.',
    img: 'img/velas-ceramica-2.png',
    infografia: 'img/info-aromas-velas.png',
    variants: { label: 'Aroma', options: ['Activá','Relajá','Dulces sueños','Buenas vibras','Prosperidad','Gaia','Calma','Emuná'] },
    destacado: false
  },
];

// ============================================
// GRILLA DE PRODUCTOS
// ============================================
let currentCat = 'all';
let currentOrden = null;
let currentPage = 1;
const POR_PAGINA = 6;
let searchQuery = '';

function getProductosFiltrados() {
  let data;
  if (currentCat === '_busqueda') {
    data = catalogo.filter(p => p.nombre.toLowerCase().includes(searchQuery.toLowerCase()));
  } else {
    data = catalogo.filter(p => currentCat === 'all' ? p.destacado : p.cat === currentCat);
    if (searchQuery.trim() !== '') {
      data = data.filter(p => p.nombre.toLowerCase().includes(searchQuery.toLowerCase()));
    }
  }
  if (currentOrden === 'asc') data.sort((a, b) => a.price - b.price);
  if (currentOrden === 'desc') data.sort((a, b) => b.price - a.price);
  return data;
}

function renderProductos() {
  const data = getProductosFiltrados();
  const totalPaginas = Math.ceil(data.length / POR_PAGINA);
  if (currentPage > totalPaginas) currentPage = 1;
  const inicio = (currentPage - 1) * POR_PAGINA;
  const pagina = data.slice(inicio, inicio + POR_PAGINA);

  document.getElementById('productosGrid').innerHTML = pagina.map(p => `
    <div class="producto-card" data-cat="${p.cat}">
      <div class="producto-img">
        <div class="producto-overlay">
          <a onclick="openProductOverlay('${p.nombre.replace(/'/g, "\\'")}')">Ver producto</a>
        </div>
        ${p.img
          ? `<img src="${p.img}" alt="${p.nombre}" class="producto-img-real" loading="lazy">`
          : `<div class="producto-img-placeholder"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`
        }
      </div>
      <div class="producto-info">
        <div class="producto-cat">${p.cat === 'cabello' ? 'Cuidado capilar' : p.cat === 'hogar' ? 'Hogar' : p.cat === 'corporal' ? 'Cuidado corporal' : 'Cuidado oral'}</div>
        <div class="producto-name">${p.nombre}</div>
        <div class="producto-footer">
          <div class="producto-price">$${p.price.toLocaleString('es-AR')}</div>
          <button class="btn-carrito" onclick="openProductOverlay('${p.nombre.replace(/'/g, "\\'")}')">Ver</button>
        </div>
      </div>
    </div>
  `).join('');

  const paginacion = document.getElementById('productosPaginacion');
  if (totalPaginas <= 1) { paginacion.innerHTML = ''; return; }
  paginacion.innerHTML = `
    <button class="pag-btn" onclick="cambiarPagina(-1)" ${currentPage === 1 ? 'disabled' : ''}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <span class="pag-info">${currentPage} / ${totalPaginas}</span>
    <button class="pag-btn" onclick="cambiarPagina(1)" ${currentPage === totalPaginas ? 'disabled' : ''}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
  `;
}

function cambiarPagina(dir) {
  const totalPaginas = Math.ceil(getProductosFiltrados().length / POR_PAGINA);
  currentPage = Math.max(1, Math.min(totalPaginas, currentPage + dir));
  renderProductos();
  document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

function filterCat(btn, cat, orden) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  currentCat = cat;
  if (orden !== undefined) currentOrden = orden || null;
  currentPage = 1;
  renderProductos();
}

function filterCatFromNav(cat, orden) {
  closeAllDropdowns();
  document.querySelectorAll('.cat-btn').forEach(b => {
    const onclick = b.getAttribute('onclick') || '';
    b.classList.toggle('active', (cat === 'all' && onclick.includes("'all'")) || onclick.includes(`'${cat}'`));
  });
  currentCat = cat;
  if (orden !== undefined) currentOrden = orden || null;
  currentPage = 1;
  renderProductos();
  setTimeout(() => document.getElementById('productos').scrollIntoView({ behavior: 'smooth' }), 50);
}

// ============================================
// BUSCADOR
// ============================================
function buscarProducto(valor) {
  searchQuery = valor;
  currentPage = 1;
  currentCat = valor.trim() !== '' ? '_busqueda' : 'all';
  if (valor.trim() === '') {
    document.querySelector('.cat-btn[onclick*="\'all\'"]')?.classList.add('active');
  }
  renderProductos();
}

function limpiarBusqueda() {
  document.getElementById('buscadorInput').value = '';
  document.getElementById('buscadorClear').style.display = 'none';
  searchQuery = '';
  currentCat = 'all';
  currentPage = 1;
  document.querySelector('.cat-btn[onclick*="\'all\'"]')?.classList.add('active');
  renderProductos();
}

document.getElementById('buscadorInput').addEventListener('input', function() {
  document.getElementById('buscadorClear').style.display = this.value ? 'block' : 'none';
});

renderProductos();

// ============================================
// CARRITO
// ============================================
let cart = [];

function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) { existing.qty++; }
  else { cart.push({ name, price, qty: 1 }); }
  updateCart();
  openCart();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCart();
}

function updateCart() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartTotal').textContent = '$' + total.toLocaleString('es-AR');
  const itemsEl = document.getElementById('cartItems');
  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty">Tu carrito está vacío 🌿<br><br>Agregá productos para empezar.</div>';
    return;
  }
  itemsEl.innerHTML = cart.map((item, idx) => {
    const productoData = catalogo.find(p => item.name.startsWith(p.nombre));
    const imgSrc = productoData?.img || '';
    return `
      <div class="cart-item">
        <div class="cart-item-img" style="${imgSrc ? `background-image:url('${imgSrc}');background-size:cover;background-position:center;` : ''}"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toLocaleString('es-AR')} × ${item.qty}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${idx})">×</button>
      </div>
    `;
  }).join('');
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartPanel').classList.add('open');
}

function toggleCart() {
  document.getElementById('cartOverlay').classList.toggle('open');
  document.getElementById('cartPanel').classList.toggle('open');
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartPanel').classList.remove('open');
}

function checkout() {
  if (cart.length === 0) return;
  closeCart();
  openCheckout();
}

// ============================================
// PRODUCT OVERLAY
// ============================================
let overlayProduct = null;
let overlayQty = 1;
let overlayVariant = null;

function openProductOverlay(nombre) {
  const data = catalogo.find(p => p.nombre === nombre);
  if (!data) return;

  overlayProduct = nombre;
  overlayQty = 1;
  overlayVariant = null;

  document.getElementById('overlayCat').textContent =
    data.cat === 'cabello' ? 'Cuidado capilar' :
    data.cat === 'hogar' ? 'Hogar' :
    data.cat === 'corporal' ? 'Cuidado corporal' : 'Cuidado oral';

  document.getElementById('overlayName').textContent = nombre;
  document.getElementById('overlayPrice').textContent = '$' + data.price.toLocaleString('es-AR');
  document.getElementById('overlayDesc').textContent = data.desc;
  document.getElementById('overlayQty').textContent = 1;

  const imgs = [];
  if (data.img) imgs.push(data.img);
  if (data.infografia) imgs.push(data.infografia);

  const thumbsEl = document.getElementById('overlayThumbs');
  if (imgs.length > 1) {
    thumbsEl.innerHTML = imgs.map((src, i) => `
      <button class="thumb-btn ${i === 0 ? 'active' : ''}" onclick="switchOverlayImg(this, '${src}')">
        <img src="${src}" alt="Vista ${i + 1}">
      </button>
    `).join('');
    thumbsEl.style.display = 'flex';
  } else {
    thumbsEl.innerHTML = '';
    thumbsEl.style.display = 'none';
  }

  const imgEl = document.getElementById('overlayImg');
  imgEl.innerHTML = imgs.length > 0
    ? `<img src="${imgs[0]}" alt="${nombre}" onclick="openLightbox('${imgs[0]}')">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--gold);font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;">Sin foto</div>`;

  const infoEl = document.getElementById('overlayInfografia');
  if (infoEl) infoEl.style.display = 'none';

  const varWrapper = document.getElementById('overlayVariantsWrapper');
  if (data.variants) {
    document.getElementById('overlayVariantLabel').textContent = data.variants.label;
    document.getElementById('overlayVariants').innerHTML = data.variants.options.map(opt =>
      `<button class="variant-btn" onclick="selectVariant(this, '${opt.replace(/'/g, "\\'")}')">${opt}</button>`
    ).join('');
    varWrapper.style.display = 'block';
  } else {
    varWrapper.style.display = 'none';
  }

  document.getElementById('overlayFeedback').style.display = 'none';
  document.getElementById('productOverlayBg').classList.add('open');
  document.getElementById('productOverlayPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductOverlay() {
  document.getElementById('productOverlayBg').classList.remove('open');
  document.getElementById('productOverlayPanel').classList.remove('open');
  document.body.style.overflow = '';
}

function switchOverlayImg(btn, src) {
  document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('overlayImg').innerHTML = `<img src="${src}" alt="Producto" onclick="openLightbox('${src}')">`;
}

function openLightbox(src) {
  const lb = document.createElement('div');
  lb.className = 'overlay-lightbox';
  lb.innerHTML = `<img src="${src}" alt="Zoom">`;
  lb.onclick = () => lb.remove();
  document.body.appendChild(lb);
}

function selectVariant(btn, variant) {
  document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  overlayVariant = variant;
}

function changeQty(dir) {
  overlayQty = Math.max(1, overlayQty + dir);
  document.getElementById('overlayQty').textContent = overlayQty;
}

function addFromOverlay() {
  const data = catalogo.find(p => p.nombre === overlayProduct);
  if (data.variants && !overlayVariant) {
    alert('Por favor elegí un ' + data.variants.label.toLowerCase() + ' antes de agregar.');
    return;
  }
  const label = overlayVariant ? `${overlayProduct} — ${overlayVariant}` : overlayProduct;
  for (let i = 0; i < overlayQty; i++) addToCart(label, data.price);
  document.getElementById('overlayFeedback').style.display = 'block';
  setTimeout(closeProductOverlay, 1200);
}

// ============================================
// EMAILJS
// ============================================
(function(){ emailjs.init('G7GuJi63f0vkdMKE1'); })();

// ============================================
// CHECKOUT
// ============================================
function openCheckout() {
  if (cart.length === 0) return;
  goToStep(1);
  document.getElementById('checkoutOverlayBg').classList.add('open');
  document.getElementById('checkoutPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutOverlayBg').classList.remove('open');
  document.getElementById('checkoutPanel').classList.remove('open');
  document.body.style.overflow = '';
}

function goToStep(step) {
  [1, 2, 3].forEach(n => {
    document.getElementById(`checkoutStep${n}`).style.display = 'none';
    const prog = document.getElementById(`prog${n}`);
    prog.classList.remove('active', 'done');
    if (n < step) prog.classList.add('done');
    if (n === step) prog.classList.add('active');
  });
  [1, 2].forEach(n => {
    const line = document.getElementById(`line${n}`);
    line.classList.remove('active', 'done');
    if (n < step) line.classList.add('done');
    if (n === step) line.classList.add('active');
  });

  document.getElementById(`checkoutStep${step}`).style.display = 'block';

  if (step === 1) {
    document.getElementById('checkoutResumen').innerHTML = cart.map(item => `
      <div class="checkout-resumen-item">
        <div>
          <div class="checkout-resumen-name">${item.name}</div>
          <div class="checkout-resumen-qty">Cantidad: ${item.qty}</div>
        </div>
        <div class="checkout-resumen-price">$${(item.price * item.qty).toLocaleString('es-AR')}</div>
      </div>
    `).join('');
    document.getElementById('checkoutTotal').textContent = '$' + cart.reduce((s, i) => s + i.price * i.qty, 0).toLocaleString('es-AR');
  }

  if (step === 2) document.getElementById('checkoutError').style.display = 'none';

  document.getElementById('checkoutPanel').scrollTo({ top: 0, behavior: 'smooth' });
}

function confirmarPedido() {
  const nombre      = document.getElementById('chk-nombre').value.trim();
  const email       = document.getElementById('chk-email').value.trim();
  const telefono    = document.getElementById('chk-telefono').value.trim();
  const provincia   = document.getElementById('chk-provincia').value.trim();
  const ciudad      = document.getElementById('chk-ciudad').value.trim();
  const direccion   = document.getElementById('chk-direccion').value.trim();
  const piso        = document.getElementById('chk-piso').value.trim();
  const cp          = document.getElementById('chk-cp').value.trim();
  const descripcion = document.getElementById('chk-descripcion').value.trim();
  const notas       = document.getElementById('chk-notas').value.trim();

  if (!nombre || !email || !telefono || !provincia || !ciudad || !direccion || !piso || !cp) {
    document.getElementById('checkoutError').style.display = 'block';
    return;
  }

  const productosTexto = cart.map(i => `${i.name} x${i.qty} — $${(i.price * i.qty).toLocaleString('es-AR')}`).join('\n');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const btn = document.getElementById('btnConfirmar');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  emailjs.send('service_ptllptp', 'template_x4ddped', {
    nombre, email, telefono, provincia, ciudad,
    direccion, piso_depto: piso, codigo_postal: cp,
    descripcion_lugar: descripcion || '—',
    notas: notas || '—',
    metodo_pago: 'A coordinar con el vendedor',
    productos: productosTexto,
    total: '$' + total.toLocaleString('es-AR')
  })
  .then(() => {
    cart = [];
    updateCart();
    goToStep(3);
    btn.textContent = 'Enviar pedido';
    btn.disabled = false;
  })
  .catch(() => {
    alert('Hubo un error al enviar el pedido. Por favor intentá de nuevo o escribinos por WhatsApp.');
    btn.textContent = 'Enviar pedido';
    btn.disabled = false;
  });
}

// ============================================
// FORM CONTACTO
// ============================================
function submitForm() {
  const nombre  = document.getElementById('nombre').value.trim();
  const email   = document.getElementById('email').value.trim();
  const asunto  = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !email || !asunto || !mensaje) {
    alert('Por favor completá todos los campos.');
    return;
  }

  const btn = document.querySelector('.form-submit');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  emailjs.send('service_ptllptp', 'template_reb4xxo', { nombre, email, asunto, mensaje })
    .then(() => {
      document.getElementById('formMsg').style.display = 'block';
      setTimeout(() => { document.getElementById('formMsg').style.display = 'none'; }, 5000);
      ['nombre','email','asunto','mensaje'].forEach(id => document.getElementById(id).value = '');
      btn.textContent = 'Enviar mensaje';
      btn.disabled = false;
    })
    .catch(() => {
      alert('Hubo un error al enviar. Intentá de nuevo o escribinos por WhatsApp.');
      btn.textContent = 'Enviar mensaje';
      btn.disabled = false;
    });
}

// ============================================
// NAV DROPDOWN
// ============================================
function toggleDropdown(id, e) {
  e.stopPropagation();
  const drop = document.getElementById(id);
  const btn = e.currentTarget;
  const isOpen = drop.classList.contains('open');
  closeAllDropdowns();
  if (!isOpen) {
    drop.classList.add('open');
    btn.classList.add('open');
  }
}

function closeAllDropdowns() {
  document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.nav-arrow-btn').forEach(b => b.classList.remove('open'));
}

document.addEventListener('click', closeAllDropdowns);

// ============================================
// COMBOS
// Editá precioFinal y precioBase para actualizar precios
// El precioBase es el precio sin descuento (tachado)
// ============================================
const combosData = [
  {
    nombre: 'Combo Ritual Capilar',
    desc: 'Combiná el shampoo ideal para tu tipo de cabello con el acondicionador sólido. Limpieza y nutrición en un solo combo, todo natural.',
    productos: ['Shampoo Sólido a elección', 'Acondicionador Sólido'],
    img: 'img/acondicionador.png',
    precioFinal: 14000,
    precioBase: 15400,
    descuento: 10,
    destacado: false,
    selector: null
  },
  {
    nombre: 'Combo Botella Cafuné Botánica + Refill',
    desc: 'Botella artesanal con refill a elección. Para que tus espacios huelan bien y se vean únicos.',
    productos: ['Botella Cafuné Botánica', 'Refill difusor a elección'],
    img: 'img/botanica.png',
    descuento: 10,
    destacado: true,
    selector: {
      label: 'Tamaño del refill',
      options: [
        { label: '125cc', precioFinal: 14000, precioBase: 15400 },
        { label: '250cc', precioFinal: 18000, precioBase: 19800 }
      ]
    }
  },
  {
    nombre: 'Kit Hogareño',
    desc: 'El ritual completo para crear ambientes únicos. Incluye una vela de soja, posa vela y apaga vela.',
    productos: ['Vela de soja a elección', 'Posa vela', 'Apaga vela'],
    img: 'img/velas-ambar.png',
    precioFinal: 20000,
    precioBase: 22000,
    descuento: 10,
    destacado: false,
    selector: null
  }
];

function renderCombos() {
  document.getElementById('combosGrid').innerHTML = combosData.map((combo, idx) => {
    const tieneSelector = combo.selector !== null;
    const precioFinal = tieneSelector ? combo.selector.options[0].precioFinal : combo.precioFinal;
    const precioBase  = tieneSelector ? combo.selector.options[0].precioBase  : combo.precioBase;

    return `
      <div class="combo-card ${combo.destacado ? 'combo-destacado' : ''}">
        ${combo.destacado ? '<div class="combo-badge">Más elegido</div>' : ''}
        <div class="combo-img">
          <img src="${combo.img}" alt="${combo.nombre}" onerror="this.style.display='none'">
        </div>
        <div class="combo-body">
          <div class="combo-descuento-tag">−${combo.descuento}% OFF</div>
          <div class="combo-nombre">${combo.nombre}</div>
          <div class="combo-desc">${combo.desc}</div>
          <ul class="combo-incluye">
            ${combo.productos.map(p => `<li><span class="combo-incluye-nombre">— ${p}</span></li>`).join('')}
          </ul>
          ${tieneSelector ? `
            <div class="combo-selector-wrap">
              <div class="combo-selector-label">${combo.selector.label}</div>
              <div class="combo-selector-btns">
                ${combo.selector.options.map((opt, i) => `
                  <button class="combo-size-btn ${i === 0 ? 'active' : ''}" onclick="selectComboSize(this, ${idx}, ${i})">${opt.label}</button>
                `).join('')}
              </div>
            </div>
          ` : ''}
          <div class="combo-footer">
            <div class="combo-precios">
              <div class="combo-precio-original" id="comboBase${idx}">$${precioBase.toLocaleString('es-AR')}</div>
              <div class="combo-precio-final" id="comboFinal${idx}">$${precioFinal.toLocaleString('es-AR')}</div>
              <div class="combo-ahorro" id="comboAhorro${idx}">Ahorrás $${(precioBase - precioFinal).toLocaleString('es-AR')}</div>
            </div>
            <button class="btn-comprar-combo" id="comboBtnAdd${idx}" onclick="addComboToCart('${combo.nombre}', ${precioFinal})">Agregar combo</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function selectComboSize(btn, comboIdx, optIdx) {
  const opt = combosData[comboIdx].selector.options[optIdx];
  btn.parentElement.querySelectorAll('.combo-size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(`comboBase${comboIdx}`).textContent   = '$' + opt.precioBase.toLocaleString('es-AR');
  document.getElementById(`comboFinal${comboIdx}`).textContent  = '$' + opt.precioFinal.toLocaleString('es-AR');
  document.getElementById(`comboAhorro${comboIdx}`).textContent = 'Ahorrás $' + (opt.precioBase - opt.precioFinal).toLocaleString('es-AR');
  const label = `${combosData[comboIdx].nombre} — ${opt.label}`;
  document.getElementById(`comboBtnAdd${comboIdx}`).onclick = () => addComboToCart(label, opt.precioFinal);
}

function addComboToCart(nombre, price) {
  const existing = cart.find(i => i.name === nombre);
  if (existing) { existing.qty++; }
  else { cart.push({ name: nombre, price, qty: 1 }); }
  updateCart();
  openCart();
}

renderCombos();
