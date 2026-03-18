(function () {
  // ── STYLES ──────────────────────────────────────────────
  const css = `
.oferta-bar{position:fixed;top:68px;right:16px;z-index:98;background:var(--dark);color:#fff;padding:12px 18px;border-radius:14px;box-shadow:0 8px 32px rgba(0,0,0,.35);display:flex;flex-direction:column;align-items:center;gap:4px;font-size:13px;font-weight:600;overflow:hidden;pointer-events:none}
.oferta-bar::before{content:'';position:absolute;top:-50%;left:-60%;width:40%;height:200%;background:linear-gradient(90deg,transparent,rgba(255,214,0,.15),transparent);transform:skewX(-20deg);animation:ofertaShine 3s ease infinite}
@keyframes ofertaShine{0%{left:-60%}50%{left:120%}100%{left:120%}}
.oferta-top{display:flex;align-items:center;gap:8px;position:relative;z-index:1}
.oferta-top svg{width:18px;height:18px;color:var(--yellow);flex-shrink:0}
.oferta-top span{font-weight:700;font-size:13px;letter-spacing:.02em}
.oferta-bottom{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--gray-400);position:relative;z-index:1}
.oferta-bottom .oferta-timer{font-family:var(--font-display);font-size:15px;font-weight:800;color:var(--yellow);letter-spacing:.05em}
@media(max-width:480px){.oferta-bar{top:68px;right:8px;padding:10px 14px}.oferta-top span{font-size:11px}.oferta-bottom .oferta-timer{font-size:13px}}
`;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── HTML ─────────────────────────────────────────────────
  const el = document.createElement('div');
  el.className = 'oferta-bar';
  el.innerHTML = `
<div class="oferta-top">
  <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
  <span>Oferta relâmpago</span>
</div>
<div class="oferta-bottom">
  Termina em <span class="oferta-timer" id="oferta-timer">00:00:00</span>
</div>
`;
  document.body.appendChild(el);

  // ── COUNTDOWN ────────────────────────────────────────────
  // Persist end time in sessionStorage so timer is consistent across page navigation
  var KEY = 'yelly_oferta_end';
  var end = parseInt(sessionStorage.getItem(KEY), 10);
  if (!end || end < Date.now()) {
    end = Date.now() + 12 * 60 * 60 * 1000; // 12 hours from first visit
    sessionStorage.setItem(KEY, end);
  }

  function tick() {
    var remaining = Math.max(0, end - Date.now());
    var h = Math.floor(remaining / 3600000);
    var m = Math.floor((remaining % 3600000) / 60000);
    var s = Math.floor((remaining % 60000) / 1000);
    var timerEl = document.getElementById('oferta-timer');
    if (timerEl) {
      timerEl.textContent =
        String(h).padStart(2, '0') + ':' +
        String(m).padStart(2, '0') + ':' +
        String(s).padStart(2, '0');
    }
    if (remaining > 0) setTimeout(tick, 1000);
  }
  tick();
})();
