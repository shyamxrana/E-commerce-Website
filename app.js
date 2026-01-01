const products = [
  {
    id: "p-1",
    name: "Wireless Headphones",
    price: 89.99,
    category: "Audio",
    stock: 30,
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_x_Naruto_psb-min.png?v=1751366366&width=200",
  },
  {
    id: "p-2",
    name: "Smartwatch Pro",
    price: 149.99,
    category: "Wearables",
    stock: 20,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7f2aa93e/images/Fastrack/Catalog/38086PP01_1.jpg?sw=360&sh=360",
  },
  {
    id: "p-3",
    name: "4K Action Camera",
    price: 199.99,
    category: "Cameras",
    stock: 15,
    image: "https://i.pinimg.com/736x/da/bc/ed/dabced2f44202ea2efd400bc977ff9de.jpg",
  },
  {
    id: "p-4",
    name: "Portable Speaker",
    price: 59.99,
    category: "Audio",
    stock: 40,
    image: "https://i.pinimg.com/736x/00/20/49/00204979605181a36a56206e334c3391.jpg",
  },
  {
    id: "p-5",
    name: "Mechanical Keyboard",
    price: 119.99,
    category: "Accessories",
    stock: 25,
    image: "https://i.pinimg.com/1200x/6b/1d/7c/6b1d7c691358dfe5a0807bc60f0ed2cf.jpg",
  },
  {
    id: "p-6",
    name: "Ergonomic Mouse",
    price: 39.99,
    category: "Accessories",
    stock: 60,
    image: "https://i.pinimg.com/736x/74/58/d8/7458d858f56a47a717750c27c15be6ce.jpg",
  },
  {
    id: "p-7",
    name: "USB-C Hub",
    price: 29.99,
    category: "Accessories",
    stock: 80,
    image: "https://i.pinimg.com/1200x/16/8e/bf/168ebf91c48daac32587bb9b0b963312.jpg",
  },
  {
    id: "p-8",
    name: "Fitness Tracker",
    price: 79.99,
    category: "Wearables",
    stock: 50,
    image: "https://i.pinimg.com/736x/7c/de/b9/7cdeb9e5528ad173e86f5a7482d0a445.jpg",
  },
  {
    id: "p-9",
    name: "Noise Cancelling Earbuds",
    price: 99.99,
    category: "Audio",
    stock: 35,
    image: "https://i.pinimg.com/736x/39/67/c0/3967c09ce4794156eb7b757417c50629.jpg",
  },
  {
    id: "p-10",
    name: "HD Webcam",
    price: 69.99,
    category: "Cameras",
    stock: 45,
    image: "https://i.pinimg.com/736x/5d/d0/a8/5dd0a8938ea964cb556edcae18b5c0c9.jpg",
  },
  {
    id: "p-11",
    name: "Studio Headphones",
    price: 129.99,
    category: "Audio",
    stock: 28,
    image: "https://i.pinimg.com/1200x/bc/fe/e0/bcfee07a3dcbfeb6464e876082b789b2.jpg",
  },
  {
    id: "p-12",
    name: "Smart Glasses",
    price: 229.99,
    category: "Wearables",
    stock: 12,
    image: "https://i.pinimg.com/1200x/d7/19/6a/d7196a21ebd33be8b8fa2b96f5393434.jpg",
  },
  {
    id: "p-13",
    name: "360° Camera",
    price: 249.99,
    category: "Cameras",
    stock: 10,
    image: "https://i.pinimg.com/1200x/62/ec/c5/62ecc541fd417dcc437f154309f88ef6.jpg",
  },
  {
    id: "p-14",
    name: "Bluetooth Earbuds Lite",
    price: 59.99,
    category: "Audio",
    stock: 55,
    image: "https://i.pinimg.com/1200x/4f/f8/32/4ff8325dc0eb0b53df01f30b607c8097.jpg",
  },
  {
    id: "p-15",
    name: "Aluminum Laptop Stand",
    price: 34.99,
    category: "Accessories",
    stock: 70,
    image: "https://i.pinimg.com/1200x/7c/bf/68/7cbf684ddfdf0b9eeeda7f0e2d1ab42a.jpg",
  },
  {
    id: "p-16",
    name: "Portable Charger 20K",
    price: 49.99,
    category: "Accessories",
    stock: 90,
    image: "https://i.pinimg.com/736x/a1/b5/87/a1b587c7749dd38faa4beaa1740e1ca1.jpg",
  },
  {
    id: "p-17",
    name: "Action Cam Mount Kit",
    price: 24.99,
    category: "Accessories",
    stock: 100,
    image: "https://i.pinimg.com/736x/84/a8/be/84a8be43a99a4a2a8472aca3afee8709.jpg",
  },
  {
    id: "p-18",
    name: "Premium Smartwatch",
    price: 299.99,
    category: "Wearables",
    stock: 8,
    image: "https://i.pinimg.com/1200x/c7/39/2b/c7392ba1c144f7d9e49c851d1808f52f.jpg",
  },
];
const state = { cart: {}, query: "", category: "all", sort: "popular" };
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const fmt = (n) =>
  n.toLocaleString(undefined, { style: "currency", currency: "USD" });
function load() {
  try {
    const raw = localStorage.getItem("shoplite.cart");
    if (raw) state.cart = JSON.parse(raw);
  } catch {}
}
function save() {
  localStorage.setItem("shoplite.cart", JSON.stringify(state.cart));
}
function setYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function categories() {
  const set = new Set(products.map((p) => p.category));
  return ["all", ...Array.from(set)];
}
function renderFilters() {
  const c = $("#category");
  if (!c) return;
  c.innerHTML = categories()
    .map((v) => `<option value="${v}">${v}</option>`)
    .join("");
  c.value = state.category;
}
function filtered() {
  let list = [...products];
  if (state.query) {
    const q = state.query.toLowerCase();
    list = list.filter((p) => p.name.toLowerCase().includes(q));
  }
  if (state.category !== "all") {
    list = list.filter((p) => p.category === state.category);
  }
  if (state.sort === "price_asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sort === "price_desc") {
    list.sort((a, b) => b.price - a.price);
  }
  return list;
}
function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;
  const list = filtered();
  grid.innerHTML = list
    .map(
      (p) => `
  <article class="card" data-id="${p.id}">
    <img class="thumb" src="${p.image}" alt="${p.name}" />
    <div class="card-body">
      <div class="name">${p.name}</div>
      <div class="row">
        <span class="muted">${p.category}</span>
        <strong class="price">${fmt(p.price)}</strong>
      </div>
      <div class="actions-row">
        <button class="btn add">Add to cart</button>
        <button class="btn view">View</button>
      </div>
    </div>
  </article>
`
    )
    .join("");
}
function renderFeatured() {
  const wrap = $("#featured");
  if (!wrap) return;
  const list = [...products].sort((a, b) => b.price - a.price).slice(0, 3);
  wrap.innerHTML = list
    .map(
      (p) => `
  <article class="card-large" data-id="${p.id}">
    <div class="media" style="background-image:url('${
      p.image
    }');background-position:center;background-size:cover"></div>
    <div class="body">
      <div class="row">
        <div>
          <div class="name">${p.name}</div>
          <div class="muted">${p.category}</div>
        </div>
        <strong class="price">${fmt(p.price)}</strong>
      </div>
      <div class="actions-row">
        <button class="btn add">Add to cart</button>
        <a class="btn" href="#productGrid">View</a>
      </div>
    </div>
  </article>
`
    )
    .join("");
}
function openCart() {
  const d = $("#cartDrawer"),
    o = $("#overlay");
  if (!d || !o) return;
  d.classList.add("open");
  d.setAttribute("aria-hidden", "false");
  o.classList.add("visible");
  o.setAttribute("aria-hidden", "false");
}
function closeCart() {
  const d = $("#cartDrawer"),
    o = $("#overlay");
  if (!d || !o) return;
  d.classList.remove("open");
  d.setAttribute("aria-hidden", "true");
  o.classList.remove("visible");
  o.setAttribute("aria-hidden", "true");
}
function openNav() {
  const p = $("#navPanel"),
    o = $("#overlay");
  if (!p || !o) return;
  p.classList.add("open");
  p.setAttribute("aria-hidden", "false");
  o.classList.add("visible");
  o.setAttribute("aria-hidden", "false");
}
function closeNav() {
  const p = $("#navPanel"),
    o = $("#overlay");
  if (!p || !o) return;
  p.classList.remove("open");
  p.setAttribute("aria-hidden", "true");
  o.classList.remove("visible");
  o.setAttribute("aria-hidden", "true");
}

function setActiveNav(id) {
  $$(".nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    a.classList.toggle("active", href === "#" + id);
  });
}
function addToCart(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  const existing = state.cart[id];
  const qty = existing ? existing.qty + 1 : 1;
  state.cart[id] = { product: p, qty };
  save();
  renderCart();
}
function removeFromCart(id) {
  delete state.cart[id];
  save();
  renderCart();
}
function setQty(id, qty) {
  if (qty <= 0) {
    removeFromCart(id);
    return;
  }
  const item = state.cart[id];
  if (!item) return;
  state.cart[id] = { product: item.product, qty };
  save();
  renderCart();
}
function subtotal() {
  return Object.values(state.cart).reduce(
    (s, i) => s + i.product.price * i.qty,
    0
  );
}
function renderCart() {
  const items = $("#cartItems"),
    count = $("#cartCount"),
    sub = $("#subtotal"),
    tot = $("#total");
  if (!items || !count || !sub || !tot) return;
  const arr = Object.values(state.cart);
  count.textContent = String(arr.reduce((n, i) => n + i.qty, 0));
  items.innerHTML = arr.length
    ? arr
        .map(
          (i) => `
  <div class="cart-item" data-id="${i.product.id}">
    <img class="thumb" src="${i.product.image}" alt="${i.product.name}" />
    <div>
      <div>${i.product.name}</div>
      <div class="muted">${fmt(i.product.price)} each</div>
    </div>
    <div class="qty">
      <button class="icon-btn dec" aria-label="Decrease">−</button>
      <input class="q" type="number" min="1" value="${i.qty}" />
      <button class="icon-btn inc" aria-label="Increase">＋</button>
      <button class="icon-btn remove" aria-label="Remove">🗑</button>
    </div>
  </div>
`
        )
        .join("")
    : `<div class="muted">Your cart is empty.</div>`;
  const s = subtotal();
  sub.textContent = fmt(s);
  tot.textContent = fmt(s);
}
function attach() {
  document.body.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    const card = t.closest(".card");
    if (t.classList.contains("add") && card) {
      addToCart(card.dataset.id);
      openCart();
    }
    if (t.id === "cartToggle") {
      openCart();
    }
    if (t.id === "cartClose") {
      closeCart();
    }
    if (t.id === "menuToggle") {
      openNav();
    }
    if (t.id === "navClose") {
      closeNav();
    }
    if (t.id === "overlay") {
      closeCart();
      closeNav();
    }
    const item = t.closest(".cart-item");
    if (item) {
      const id = item.dataset.id;
      if (t.classList.contains("remove")) {
        removeFromCart(id);
      }
      if (t.classList.contains("inc")) {
        const i = state.cart[id];
        setQty(id, (i ? i.qty : 0) + 1);
      }
      if (t.classList.contains("dec")) {
        const i = state.cart[id];
        setQty(id, (i ? i.qty : 0) - 1);
      }
    }
    const tile = t.closest(".tile");
    if (tile && tile.dataset.category) {
      state.category = tile.dataset.category;
      const c = $("#category");
      if (c) c.value = state.category;
      renderProducts();
      document.location.hash = "productGrid";
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeNav();
    }
  });
  document.body.addEventListener("change", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    const item = t.closest(".cart-item");
    if (item && t.classList.contains("q")) {
      const id = item.dataset.id;
      const v = parseInt(t.value, 10) || 1;
      setQty(id, Math.max(1, v));
    }
    if (t.id === "category") {
      state.category = t.value;
      renderProducts();
    }
    if (t.id === "sort") {
      state.sort = t.value;
      renderProducts();
    }
  });
  const s = $("#search");
  if (s) {
    s.addEventListener("input", (e) => {
      state.query = s.value.trim();
      renderProducts();
    });
  }
  const form = $("#checkoutForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#name").value.trim();
      const email = $("#email").value.trim();
      const address = $("#address").value.trim();
      if (!name || !email || !address) return;
      state.cart = {};
      save();
      renderCart();
      closeCart();
      alert("Order placed. Confirmation sent to " + email);
    });
  }
}
function observeSections() {
  const ids = ["hero", "featured", "productGrid", "about"];
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          setActiveNav(en.target.id);
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
  );
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
}
function headerOnScroll() {
  const h = document.querySelector(".header");
  const on = () => {
    if (!h) return;
    h.classList.toggle("scrolled", window.scrollY > 4);
  };
  on();
  window.addEventListener("scroll", on);
}
function init() {
  load();
  setYear();
  renderFilters();
  renderFeatured();
  renderProducts();
  renderCart();
  attach();
  observeSections();
  headerOnScroll();
}
document.addEventListener("DOMContentLoaded", init);
