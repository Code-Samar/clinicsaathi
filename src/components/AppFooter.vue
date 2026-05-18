<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div>
          <RouterLink to="/" class="footer__brand">Clinic<em>Saathi</em></RouterLink>
          <p class="footer__brand-desc">WhatsApp AI agents for Indian clinics. Built in Mumbai. Deployed in 72 hours. No lock-in.</p>
        </div>
        <div>
          <div class="footer__col-title">Pages</div>
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
          <span class="footer__link">Mon–Sat, 9 AM–7 PM</span>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="footer__link footer__link--wa">WhatsApp Us →</a>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__copy">© 2026 ClinicSaathi. All rights reserved.</div>
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="footer__wa-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 1.85.5 3.57 1.37 5.07L2 22l5.09-1.34A9.9 9.9 0 0012 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
          </svg>
          +91 XXXX XXXXXX
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--ink);
  border-top: 1px solid rgba(255,255,255,.04);
}
.footer__top {
  padding: 80px 0 60px;
  display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 60px;
}
.footer__brand {
  display: block;
  font-family: var(--f-display); font-size: 26px; font-weight: 500;
  color: var(--white); margin-bottom: 16px;
}
.footer__brand em { color: var(--gold); font-style: normal; }
.footer__brand-desc { font-size: 14px; color: rgba(255,255,255,.35); line-height: 1.75; max-width: 260px; }
.footer__col-title {
  font-family: var(--f-ui); font-size: 9px; font-weight: 700;
  letter-spacing: .16em; text-transform: uppercase;
  color: rgba(255,255,255,.25); margin-bottom: 24px;
}
.footer__link {
  display: block; font-size: 14px; color: rgba(255,255,255,.45);
  margin-bottom: 13px; transition: color .2s; cursor: pointer;
}
.footer__link:hover { color: var(--white); }
.footer__link--wa { color: #25D366 !important; }
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,.05);
  padding: 28px 0;
  display: flex; align-items: center; justify-content: space-between;
}
.footer__copy { font-size: 12px; color: rgba(255,255,255,.2); }
.footer__wa-link {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: rgba(255,255,255,.35); transition: color .2s;
}
.footer__wa-link:hover { color: #25D366; }

@media (max-width: 1080px) {
  .footer__top { grid-template-columns: 1fr 1fr; gap: 40px; }
  .footer__bottom { flex-direction: column; gap: 12px; text-align: center; }
}
@media (max-width: 640px) {
  .footer__top { grid-template-columns: 1fr; }
}
</style>
