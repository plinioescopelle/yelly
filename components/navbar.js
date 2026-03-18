(function () {
  // ── STYLES ──────────────────────────────────────────────
  const css = `
.navbar{position:sticky;top:0;z-index:100;background:rgba(250,250,248,.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--gray-200)}
.nav-container{max-width:1200px;margin:0 auto;padding:0 16px;height:60px;display:flex;align-items:center;gap:24px}
@media(min-width:640px){.nav-container{padding:0 24px}}
@media(min-width:1024px){.nav-container{padding:0 32px}}
.nav-logo{display:flex;align-items:center;gap:8px;text-decoration:none;font-family:var(--font-display);font-size:20px;font-weight:800;color:var(--gray-900);flex-shrink:0}
.nav-logo-icon{width:32px;height:32px;background:var(--yellow);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px}
.nav-links{display:none;align-items:center;gap:4px;flex:1}
@media(min-width:768px){.nav-links{display:flex}}
.nav-links a{text-decoration:none;color:var(--gray-600);font-size:14px;font-weight:500;padding:6px 12px;border-radius:8px;transition:all .15s}
.nav-links a:hover{color:var(--gray-900);background:var(--gray-100)}
.nav-links a.active{color:var(--gray-900);font-weight:600}
.nav-right{display:flex;align-items:center;gap:8px;margin-left:auto}
.nav-cta{text-decoration:none;background:var(--yellow);color:var(--gray-900);font-size:13px;font-weight:700;padding:8px 16px;border-radius:10px;transition:all .15s;white-space:nowrap}
.nav-cta:hover{background:var(--yellow-hover);transform:translateY(-1px)}
.nav-toggle{display:flex;flex-direction:column;gap:5px;padding:8px;background:none;border:none;cursor:pointer}
@media(min-width:768px){.nav-toggle{display:none}}
.nav-toggle span{display:block;width:22px;height:2px;background:var(--gray-700);border-radius:2px;transition:all .2s}
.mobile-menu{display:none;position:fixed;top:60px;left:0;right:0;bottom:0;background:rgba(250,250,248,.98);backdrop-filter:blur(12px);z-index:99;padding:24px 20px;flex-direction:column;gap:4px;overflow-y:auto}
.mobile-menu.open{display:flex}
.mobile-menu a{text-decoration:none;color:var(--gray-700);font-size:17px;font-weight:500;padding:14px 16px;border-radius:12px;transition:all .15s}
.mobile-menu a:hover{background:var(--gray-100);color:var(--gray-900)}
.mobile-menu .mob-cta{background:var(--yellow);color:var(--gray-900);font-weight:700;text-align:center;margin-top:8px}
`;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── HTML ─────────────────────────────────────────────────
  const html = `
<header class="navbar" id="yelly-navbar">
  <div class="nav-container">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-icon">Y</div>Yelly
    </a>
    <nav class="nav-links">
      <a href="yelly-maquininha-v4.html" data-page="maquininha">Maquininha</a>
      <a href="yelly-taxas-v4.html" data-page="taxas">Taxas</a>
      <a href="yelly-como-funciona.html" data-page="como-funciona">Como Funciona</a>
      <a href="yelly-para-quem-e.html" data-page="para-quem-e">Para Quem é</a>
      <a href="yelly-faq.html" data-page="faq">FAQ</a>
    </nav>
    <div class="nav-right">
      <a href="yelly-comprar.html" class="nav-cta">Compre agora ↗</a>
      <button class="nav-toggle" id="nav-toggle-btn" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<nav class="mobile-menu" id="mobileMenu">
  <a href="yelly-maquininha-v4.html">Maquininha</a>
  <a href="yelly-taxas-v4.html">Taxas</a>
  <a href="yelly-como-funciona.html">Como Funciona</a>
  <a href="yelly-para-quem-e.html">Para Quem é</a>
  <a href="yelly-faq.html">FAQ</a>
  <a href="yelly-comprar.html" class="mob-cta">Compre agora ↗</a>
</nav>
`;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  document.body.insertBefore(wrapper.firstElementChild, document.body.firstChild);
  document.body.insertBefore(wrapper.firstElementChild, document.body.children[1]);

  // ── ACTIVE LINK ──────────────────────────────────────────
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    if (path.includes(a.dataset.page)) a.classList.add('active');
  });
  if (path.includes('homepage') || path === '/' || path.endsWith('/')) {
    // no active needed on homepage links — or mark first if desired
  }

  // ── TOGGLE ───────────────────────────────────────────────
  window.toggleMobileMenu = function () {
    document.getElementById('mobileMenu').classList.toggle('open');
  };
  document.getElementById('nav-toggle-btn').addEventListener('click', window.toggleMobileMenu);
})();
