
(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Logo
  const logoImg = document.getElementById("logoImg");
  if (logoImg && window.__ELITE_LOGO_DATA_URI__) {
    logoImg.src = window.__ELITE_LOGO_DATA_URI__;
  }

  // Inline SVG icons
  const icons = {
    phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.6.6 4 .6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3c.6 0 1 .4 1 1 0 1.4.2 2.8.6 4 .1.4 0 .8-.3 1.1L6.6 10.8z" fill="currentColor"/>
    </svg>`,
    wa: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" fill="currentColor" opacity=".25"/>
      <path d="M10.7 7.6c-.2-.4-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.7 2.7 4.2 3.7 2 .8 2.5.6 2.9.5.4-.1 1.3-.5 1.5-1 .2-.5.2-1 0-1.1-.2-.1-.4-.2-.8-.4-.4-.2-1.3-.6-1.5-.7-.2-.1-.4-.2-.6.2-.2.4-.7.7-.9.9-.2.1-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.3-1.6-1.4-1.9-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.5-1.3-.7-1.7z" fill="currentColor"/>
    </svg>`,
    pin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12z" fill="currentColor" opacity=".25"/>
      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="currentColor"/>
    </svg>`,
    fb: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 13.5h2.2l.3-2.6H14V9.3c0-.8.2-1.4 1.4-1.4h1.2V5.6c-.2 0-1.1-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v1.6H8.4v2.6h2.3V21H14v-7.5z" fill="currentColor"/>
    </svg>`,
    ig: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" fill="currentColor" opacity=".9"/>
      <path d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" fill="currentColor"/>
      <path d="M17.6 6.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="currentColor"/>
    </svg>`,
    social: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17 8a3 3 0 1 0-2.8-4H9.8A3 3 0 1 0 7 8c.5 0 .9-.1 1.3-.3l3 2A3 3 0 0 0 11 11c0 .5.1 1 .3 1.4l-3 2A3 3 0 1 0 9.8 20h4.4A3 3 0 1 0 17 16c-.5 0-1 .1-1.4.3l-3-2A3 3 0 0 0 13 11c0-.5-.1-1-.3-1.4l3-2c.4.2.8.3 1.3.3z" fill="currentColor" opacity=".25"/>
      <path d="M17 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM7 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM7 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM17 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="currentColor"/>
    </svg>`
  };

  // Set icons on cards
  document.querySelectorAll("[data-icon]").forEach(el => {
    const k = el.getAttribute("data-icon");
    el.innerHTML = icons[k] || icons.social;
  });

  // Set icons on buttons (optional)
  document.querySelectorAll("[data-btn-icon]").forEach(btn => {
    const k = btn.getAttribute("data-btn-icon");
    const svg = icons[k];
    if (!svg) return;
    // prepend svg only if not already
    if (!btn.querySelector("svg")) {
      btn.insertAdjacentHTML("afterbegin", svg);
    }
  });
})();
