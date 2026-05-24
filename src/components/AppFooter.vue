<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand-col">
          <RouterLink to="/" class="footer__logo">Clinic<em>Saathi</em></RouterLink>
          <p class="footer__tagline">WhatsApp AI agents for Indian clinics.<br>Built in Mumbai. Live in 72 hours.</p>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="footer__wa">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.85.5 3.57 1.37 5.07L2 22l5.09-1.34A9.9 9.9 0 0012 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
            +91 XXXX XXXXXX
          </a>
        </div>
        <div>
          <div class="footer__col-title">Navigate</div>
          <RouterLink to="/"         class="footer__link">Home</RouterLink>
          <RouterLink to="/about"    class="footer__link">About</RouterLink>
          <RouterLink to="/services" class="footer__link">Services</RouterLink>
          <RouterLink to="/contact"  class="footer__link">Contact</RouterLink>
        </div>
        <div>
          <div class="footer__col-title">Agents</div>
          <RouterLink to="/services" class="footer__link">WhatsApp Receptionist</RouterLink>
          <RouterLink to="/services" class="footer__link">Missed Call Converter</RouterLink>
          <RouterLink to="/services" class="footer__link">Google Review Booster</RouterLink>
          <RouterLink to="/services" class="footer__link">Retention Bot</RouterLink>
        </div>
        <div>
          <div class="footer__col-title">Contact</div>
          <span class="footer__link">hello@clinicsaathi.in</span>
          <span class="footer__link">Mumbai, Maharashtra</span>
          <span class="footer__link">Mon–Sat · 9 AM–7 PM</span>
        </div>
      </div>
      <div class="footer__bottom">
        <span class="footer__copy">© 2026 ClinicSaathi. All rights reserved.</span>
        <span class="footer__copy">No lock-in · Month-to-month · Mumbai-based</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { background:var(--ink); border-top:1px solid rgba(255,255,255,.04); }
.footer__top {
  padding:80px 0 56px;
  display:grid; grid-template-columns:1.6fr 1fr 1fr 1fr; gap:56px;
}
.footer__logo {
  display:block;
  font-family:var(--f-display); font-size:24px; font-weight:300;
  color:var(--white); margin-bottom:16px; letter-spacing:-.02em;
}
.footer__logo em { color:var(--rg); font-style:normal; }
.footer__tagline { font-size:13px; color:rgba(255,255,255,.3); line-height:1.8; margin-bottom:20px; }
.footer__wa {
  display:inline-flex; align-items:center; gap:8px;
  font-size:13px; color:rgba(255,255,255,.35); transition:color .2s;
}
.footer__wa:hover { color:#25D366; }
.footer__col-title {
  font-family:var(--f-ui); font-size:8px; font-weight:700;
  letter-spacing:.2em; text-transform:uppercase;
  color:rgba(255,255,255,.2); margin-bottom:22px;
}
.footer__link {
  display:block; font-size:13px; color:rgba(255,255,255,.4);
  margin-bottom:12px; transition:color .2s; cursor:pointer;
}
.footer__link:hover { color:rgba(255,255,255,.8); }
.footer__bottom {
  border-top:1px solid rgba(255,255,255,.05);
  padding:24px 0;
  display:flex; align-items:center; justify-content:space-between;
}
.footer__copy { font-size:11px; color:rgba(255,255,255,.18); letter-spacing:.02em; }
@media (max-width:1080px) {
  .footer__top { grid-template-columns:1fr 1fr; gap:36px; }
  .footer__bottom { flex-direction:column; gap:10px; text-align:center; }
}
@media (max-width:640px) {
  .footer__top { grid-template-columns:1fr; }
}
</style>
