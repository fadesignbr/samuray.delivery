/* script.js - Samuray Burguer Delivery (com carrinho flutuante central) */

const WHATSAPP_NUMBER = '554284289901';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

/* === CATEGORIES & PRODUCTS === */
const CATEGORIES = [
  { id: 'Especiais', label: 'Especiais', img: 'categorias img/especiaiss.png'},
  { id: 'Tradicionais', label: 'Tradicionais', img: 'categorias img/tradicional.png' },
  { id: 'No Prato', label: 'No Prato', img: 'categorias img/no prato.png' },
  { id: 'Porções', label: 'Porções', img: 'categorias img/porção.png' },
  { id: 'Combos', label: 'Combos', img: 'categorias img/combos.png' },
  { id: 'Bebidas', label: 'Bebidas', img: 'categorias img/bebidas.png' }
];



const PRODUCTS = [
  // ESPECIAISlogo samuray.png
  { id:'esp1', category:'Especiais', name:'Duplo Burguer', desc:'Pão, dois hambúrgueres, queijo, cheddar,bacon, barbecue, pepino e molho.', price:29.90, img:'imagens/Cheeseburger duplo com queijo derretido e queijo azul _ Foto Premium.jpeg' },
  { id:'esp2', category:'Especiais', name:'Burguer de Costela', desc:'Pão, hamburguer, queijo, cheddar,marmelada de cebola, costela bovina acebolada, queijo,tchimichuri, pepino, alface, tomate e molho.', price:29.90, img:'imagens/Hambúrguer artesanal.jpeg' },
  { id:'esp3', category:'Especiais', name:'Bacon Cheese', desc:'Pão, hamburguer, bacon queijo chedar, creme de queijo, barbecue, alfaçe, queijo, tomate e molho.', price:29.90, img:'imagens/American Food fans.jpeg' },
  { id:'esp4', category:'Especiais', name:'Blumenau', desc:'Pão, hamburguer suíno, marmelada de cebola, queijo cheddar, molho barbecue, quijo, mussarela, ovo, pepino, alfaçe, tomate e molho', price:29.90, img:'imagens/blumenau burguer.jpg' },
  { id:'esp5', category:'Especiais', name:'Alcatra Supremo', desc:'Pão, tiras de alcatra acebolada, molho de mostarda e mel, queijo, alface, tomate e molho.', price:29.90, img:'imagens/alcatrasupremo.jpg' },
  { id:'esp6', category:'Especiais', name:'Costela ao BBQ', desc:'Pão, costela suína, molho barbecue, bacon crisp, queijo, alface, tomate e molho', price:29.90, img:'imagens/costela ao molho bbq.jpg' },


  // TRADICIONAIS
  { id:'cla1', category:'Tradicionais', name:'X-Burger', desc:'Pão, hambúrguer, queijo, presunto e molho.', price:18.90, img:'imagens/xbaacon.jpg' },
  { id:'cla2', category:'Tradicionais', name:'X-Salada', desc:'Pão, Hambúrguer, queijo, presunto, alface, tomate e molho.', price:19.90, img:'imagens/xsalada.jpg' },
  { id:'cla3', category:'Tradicionais', name:'X-Bacon', desc:'Pão, hamburguer, queijo, presunto, bacon, alface, tomate e molho.', price:23.90, img:'imagens/xbascon (1).jpeg' },
  { id:'cla4', category:'Tradicionais', name:'X-Egg', desc:'Pão, hamburguer, queijo, presunto, ovo, alface, tomatte e molho.', price:23.90, img:'imagens/x egg.jpeg' },
  { id:'cla5', category:'Tradicionais', name:'X-Calabresa', desc:'Pão, hamburguer, queijo, presunto, calabresa acebolada, alface, tomate e molho.', price:23.90, img:'imagens/xcalabresa.jpeg' },
  { id:'cla6', category:'Tradicionais', name:'X-Beeg', desc:'Pão, hamburguer, queijo, presunto, bacon, ovo, alface, tomate e molho.', price:28.90, img:'imagens/xbeeg.jpeg' },
 
  // COMBOS
  { id:'com1', category:'Combos', name:'Salada img ilustrativa', desc:'Pão, hamburguer, queijo, tomate e molho.', price:24.90, img:'imagens/combos.jpeg' },
  { id:'com2', category:'Combos', name:'Bacon img ilustrativa', desc:'Pão, hamburguer, queijo, presunto, bacon, alface, tomate e molho.', price:27.90, img:'imagens/combos.jpeg' },
  { id:'com3', category:'Combos', name:'Begg img ilustrativa', desc:'Pão, hamburguer, queijo, presunto, bacon, ovo, queijo, presunto, alface, tomate e molho.', price:29.90, img:'imagens/combos.jpeg' },
  { id:'com4', category:'Combos', name:'Duplo img ilustrativa', desc:'Pão, 2 hamburguer, queijo, mussarela, bacon, pepino azedo e molho.', price:28.90, img:'imagens/combos.jpeg' },
  { id:'com5', category:'Combos', name:'Costela img ilustrativa', desc:'Pão, hamburguer, cheddar, costela chimi churi, pepinio, queijo, alface, tomate e molho.', price:32.90, img:'imagens/combos.jpeg' },
  { id:'com6', category:'Combos', name:'Frango img ilustrativa', desc:'Pão, frango grelhado, acebolado, queijo, alface, tomate e molho', price:25.90, img:'imagens/combos.jpeg' },
 
  // BEBIDAS
  { id:'beb1', category:'Bebidas', name:'Coca-Cola Lata 350ml', desc:'Refrescante e Gelada.', price:5.00, img:'imagens/cocalata.jpeg' },
  { id:'beb2', category:'Bebidas', name:'Guaraná Lata 350ml', desc:'Refrescante e Gelada', price:5.00, img:'imagens/Guaraná Antarctica.jpeg' },
  { id:'beb3', category:'Bebidas', name:'Pepsi 350ml', desc:'Refrescante e Gelada.', price:5.00, img:'imagens/pepsilata.jpeg' },
  { id:'beb4', category:'Bebidas', name:'Sukita Uva 350ml', desc:'Refrescante e gelada.', price:5.00, img:'imagens/Lata de Sukita Uva.jpeg' },
  { id:'beb5', category:'Bebidas', name:'Brahma lata 350ml', desc:'Refrescante e Gelada.', price:6.00, img:'imagens/brahmalata.jpeg' },
  { id:'beb6', category:'Bebidas', name:'skol lata 350ml', desc:'Refrescante e Gelada.', price:6.00, img:'imagens/skollata.jpeg' },
  { id:'beb7', category:'Bebidas', name:'Kaiser lata 350ml', desc:'Refrescante e Gelada', price:6.00, img:'imagens/kaiser lata.jpeg' },
  
  // NO PRATO
  { id:'sob1', category:'No Prato', name:'Samurai', desc:'Pão, 2 hamburguer, cheddar, queijo, presunto, ovo, creme de queijo, bacon, calabresa, milho, cebola, batata palha, alfaçe , tomate, pepino e molho.', price:18.50, img:'categorias img/indisponível no momento.png' },
  { id:'sob2', category:'No Prato', name:'Podrão', desc:'Pão, hamburguer, queijo, presunto, calabresa, bacon, ovo, vina, batata palha, pepino, alface, tomate e molho.', price:15.00, img:'categorias img/indisponível no momento.png' },
  { id:'sob3', category:'No Prato', name:'Frango ao BBQ', desc:'Pão, tiras de franfo ao molho barbecue, ovo, queijo, batata palha, pepino, alface, tomate e molho.', price:12.00, img:'categorias img/indisponível no momento.png' },
  { id:'sob4', category:'No Prato', name:'Mega Alcatra', desc:'Pão, alcatra acebolado, queijo, presunto, ovo,bacon, molho de mostarda e mel, alface, tomate e molho.', price:14.90, img:'categorias img/indisponível no momento.png' },
 
  // PORÇÕES
  { id:'por1', category:'Porções', name:'Alcatra acebolada 500g', desc:'500 gramas.', price:34.90, img:'imagens/alcatra acebolada.jpeg' },
  { id:'por2', category:'Porções', name:'Camarão empanado M-400g', desc:'Média 400 gramas.', price:24.00, img:'categorias img/indisponível no momento.png' },
  { id:'por3', category:'Porções', name:'Batata cheddar e bacon M-500g', desc:'M-500 gramas.', price:24.99, img:'imagens/batata com bacon.jpg' },
  { id:'por4', category:'Porções', name:'Batata simples 500g', desc:'500 gramas.', price:19.90, img:'imagens/batatasimples.jpg' },
  { id:'por5', category:'Porções', name:'Isca de Frango 400g', desc:'400 gramas.', price:24.90, img:'imagens/Isca de frango acebolada_ fica pronta em 15 minutos!.jpeg' },
  { id:'por6', category:'Porções', name:'Filé de Tilápia 400g', desc:'400 gramas.', price:34.90, img:'imagens/filá de tilápia.jpeg' }

];

/* === STATE === */
let cart = JSON.parse(localStorage.getItem('samuray_cart') || '[]');
let activeCategory = CATEGORIES[0].id;

/* === ELEMENTS === */
const categoriesEl = document.getElementById('categories');
const productGrid = document.getElementById('productGrid');
const catalogTitle = document.getElementById('catalogTitle');

const productModal = document.getElementById('productModal');
const productBackdrop = document.getElementById('productBackdrop');
const closeProductModal = document.getElementById('closeProductModal');
const modalProductImg = document.getElementById('modalProductImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalAddBtn = document.getElementById('modalAddBtn');

const cartButton = document.getElementById('openCart');
const cartCountEl = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartBackdrop = document.getElementById('cartBackdrop');
const closeCartModal = document.getElementById('closeCartModal');
const cartItemsEl = document.getElementById('cartItems');
const subtotalEl = document.getElementById('subtotal');
const totalEl = document.getElementById('total');
const obsEl = document.getElementById('obs');
const checkoutBtn = document.getElementById('checkoutBtn');

/* === HELPERS === */
const formatBRL = n => Number(n).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const saveCart = () => localStorage.setItem('samuray_cart', JSON.stringify(cart));
const updateCartCount = () => {
  const count = cart.reduce((s, it) => s + it.qty, 0);
  if (cartCountEl) cartCountEl.textContent = count;
};

/* === CATEGORIES RENDER === */
function renderCategories(){
  categoriesEl.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'category' + (cat.id === activeCategory ? ' active' : '');
    div.innerHTML = `
      <button class="category-btn" data-cat="${cat.id}">
        <img class="cat-pic" src="${cat.img}" alt="${cat.label}">
        <span class="label">${cat.label}</span>
      </button>
    `;
    div.querySelector('.category-btn').onclick = () => {
      activeCategory = cat.id;
      catalogTitle.textContent = cat.label;
      renderCategories();
      renderProducts();
    };
    categoriesEl.appendChild(div);
  });
}

/* === PRODUCTS RENDER === */
function renderProducts(){
  productGrid.innerHTML = '';
  const list = PRODUCTS.filter(p => p.category === activeCategory);
  if(!list.length){
    productGrid.innerHTML = `<div class="muted">Nenhum item encontrado.</div>`;
    return;
  }
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img class="card-img" src="${p.img}" alt="${p.name}">
      <div class="card-body">
        <div class="card-title">${p.name}</div>
        <div class="card-footer">
          <div class="price">${formatBRL(p.price)}</div>
          <button class="btn primary add-btn" data-id="${p.id}">ADICIONAR</button>
        </div>
      </div>
    `;
    card.addEventListener('click', (ev) => {
      if(ev.target.closest('.add-btn')) return;
      openProductModal(p);
    });
    card.querySelector('.add-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(p.id);
    });
    productGrid.appendChild(card);
  });
}

/* === PRODUCT MODAL === */
let currentProduct = null;
function openProductModal(prod){
  currentProduct = prod;
  modalProductImg.src = prod.img;
  modalTitle.textContent = prod.name;
  modalDesc.textContent = prod.desc;
  modalPrice.textContent = formatBRL(prod.price);
  productModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeProduct(){
  productModal.classList.add('hidden');
  document.body.style.overflow = '';
}
if (productBackdrop) productBackdrop.addEventListener('click', closeProduct);
if (closeProductModal) closeProductModal.addEventListener('click', closeProduct);
if (modalAddBtn) modalAddBtn.addEventListener('click', () => {
  if(!currentProduct) return;
  addToCart(currentProduct.id);
  closeProduct();
});

/* === CART LOGIC === */
function addToCart(id){
  const p = PRODUCTS.find(p => p.id === id);
  if(!p) return;
  const existing = cart.find(it => it.id === id);
  if(existing) existing.qty++;
  else cart.push({...p, qty:1});
  saveCart();
  updateCartCount();
}

/* render cart (fills modal) */
function renderCart() {
  if (!cartItemsEl) return;
  cartItemsEl.innerHTML = '';
  if (!cart.length) {
    cartItemsEl.innerHTML = `<li class="muted">Seu carrinho está vazio.</li>`;
    subtotalEl.textContent = totalEl.textContent = formatBRL(0);
    return;
  }

  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.qty;
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="info">
        <div class="name">${item.name}</div>
        <div class="price">${formatBRL(item.price)}</div>
      </div>
      <div class="qty">
        <button class="decrease">−</button>
        <span>${item.qty}</span>
        <button class="increase">+</button>
      </div>
      <button class="remove-item">🗑️</button>
    `;

// diminuir quantidade
li.querySelector('.decrease').onclick = () => {
  item.qty--;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== item.id);
  saveCart();
  renderCart();
  updateCartCount();
};

// aumentar quantidade
li.querySelector('.increase').onclick = () => {
  item.qty++;
  saveCart();
  renderCart();
  updateCartCount();
};

// remover item completamente
li.querySelector('.remove-item').onclick = () => {
  cart = cart.filter(c => c.id !== item.id);
  saveCart();
  renderCart();
  updateCartCount();
};



    cartItemsEl.appendChild(li);
  });

  subtotalEl.textContent = formatBRL(subtotal);
  totalEl.textContent = formatBRL(subtotal);
}


/* === CART MODAL === */
function openCart(){
  renderCart();
  cartModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeCart(){
  cartModal.classList.add('hidden');
  document.body.style.overflow = '';
}
if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);
if (closeCartModal) closeCartModal.addEventListener('click', closeCart);
if (cartButton) cartButton.addEventListener('click', openCart);

/* === WHATSAPP CHECKOUT === */
if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
  if(!cart.length) return alert('Seu carrinho está vazio.');
  let msg = '*MEU PEDIDO - SAMURAY BURGUER*%0A%0A';
  cart.forEach(it => msg += `🍔 ${it.name} x${it.qty} - ${formatBRL(it.price*it.qty)}%0A`);
  msg += `%0A*Total:* ${totalEl.textContent}%0A`;
  if(obsEl.value.trim()) msg += `%0A*Observações:* ${encodeURIComponent(obsEl.value.trim())}`;
  const url = WHATSAPP_BASE + msg;
  window.open(url, '_blank');
});

/* === INIT === */
renderCategories();
renderProducts();
updateCartCount();
