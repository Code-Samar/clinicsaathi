<template>
  <!-- HERO -->
  <section class="hero grid-texture">
    <div class="hero__glow" />
    <div class="hero__left">
      <div class="eyebrow au">Aapke Clinic Ka AI Saathi</div>
      <h1 class="display-xl hero__h1 au au1">
        Your clinic<br>
        shouldn't lose<br>
        patients to a<br>
        <em>missed call.</em>
      </h1>
      <p class="hero__sub au au2">WhatsApp AI agents that handle bookings, missed calls, reviews, and patient retention — on your existing number. Automatically. 24/7.</p>
      <div class="btn-row au au3">
        <RouterLink to="/contact" class="btn btn--rg">Book Free Demo →</RouterLink>
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="btn btn--outline-light">
          <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.85.5 3.57 1.37 5.07L2 22l5.09-1.34A9.9 9.9 0 0012 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
          WhatsApp Us
        </a>
      </div>
      <div class="hero__trust au au4">
        <span v-for="t in trust" :key="t" class="hero__trust-item">
          <i class="hero__trust-dot" />{{ t }}
        </span>
      </div>
    </div>
    <div class="hero__right">
      <ChatMockup />
    </div>
  </section>

  <!-- TICKER -->
  <div class="ticker" aria-hidden="true">
    <div class="ticker__track">
      <span v-for="(item, i) in [...tickerItems,...tickerItems]" :key="i" class="ticker__item">
        <span class="ticker__sep">◆</span>{{ item }}
      </span>
    </div>
  </div>

  <!-- STATS -->
  <section class="stats-section">
    <div class="stats-grid container">
      <div v-for="s in stats" :key="s.num" class="stat-card sr">
        <div class="stat-card__bar" />
        <div class="stat-card__num">{{ s.num }}</div>
        <p class="stat-card__text" v-html="s.text" />
        <div class="stat-card__src">{{ s.src }}</div>
      </div>
    </div>
  </section>

  <!-- WHAT WE DO -->
  <section class="wtd grid-texture">
    <div class="container wtd__inner">
      <div class="wtd__left sr">
        <div class="eyebrow">What ClinicSaathi Does</div>
        <h2 class="display-md wtd__title">Four AI agents.<br>One WhatsApp number.<br><em>Zero extra staff.</em></h2>
        <div class="rule" />
        <p class="wtd__body">We deploy intelligent agents directly on your clinic's existing WhatsApp Business number — no new app, no new number, no technical overhead. Your staff stays focused on patients. ClinicSaathi handles everything else.</p>
        <RouterLink to="/services" class="btn btn--rg">Explore All Agents →</RouterLink>
      </div>
      <div class="wtd__right">
        <RouterLink v-for="ag in agents" :key="ag.num" to="/services" class="agent-row sr">
          <div class="agent-row__icon">{{ ag.icon }}</div>
          <div class="agent-row__body">
            <div class="agent-row__num">Agent {{ ag.num }}</div>
            <div class="agent-row__title">{{ ag.title }}</div>
            <div class="agent-row__sub">{{ ag.sub }}</div>
          </div>
          <div class="agent-row__arrow">›</div>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="hiw">
    <div class="container">
      <div class="eyebrow eyebrow--muted sr">How It Works</div>
      <h2 class="display-md sr">From demo to deployment<br><em>in 72 hours.</em></h2>
      <div class="hiw__steps">
        <div v-for="s in steps" :key="s.n" class="hiw__step sr">
          <div class="hiw__step-line" />
          <div class="hiw__step-num">{{ s.n }}</div>
          <div class="hiw__step-title">{{ s.title }}</div>
          <p class="hiw__step-desc">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PROOF -->
  <section class="proof grid-texture">
    <div class="container">
      <div class="eyebrow eyebrow--light sr">What Clinics Say</div>
      <h2 class="display-md sr" style="color:var(--white)">Results that speak<br><em>for themselves.</em></h2>
      <div class="proof__grid">
        <div v-for="t in testimonials" :key="t.name" class="proof-card sr">
          <div class="proof-card__bar" />
          <div class="proof-card__q">"</div>
          <p class="proof-card__text">{{ t.text }}</p>
          <div class="proof-card__meta">
            <div class="proof-card__avatar">{{ t.init }}</div>
            <div>
              <div class="proof-card__name">{{ t.name }}</div>
              <div class="proof-card__role">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CtaStrip title="Another missed call<br><em>or</em> your first demo?" sub="Fifteen minutes. Live demo on your phone. No commitment." :show-wa="true" />
</template>

<script setup>
import { agents, steps, testimonials } from '../data/index.js'
import ChatMockup from '../components/ChatMockup.vue'
import CtaStrip   from '../components/CtaStrip.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'
useScrollReveal()

const trust       = ['No new app required','Live in 72 hours','Hindi + English','Mumbai-based team','Month-to-month']
const tickerItems = ['No New App Required','Live in 72 Hours','Hindi + English Support','Mumbai-Based Team','Month-to-Month Pricing','4 AI Agents. One WhatsApp Number.','Zero Extra Staff Needed']
const stats = [
  { num:'3 in 5', text:'Patients who call a busy clinic and get no answer <strong>never call back</strong> — they move to the next result on Google.', src:'Industry Benchmark' },
  { num:'12×',    text:'A single negative Google review shifts the decision of up to <strong>12 potential patients</strong> searching nearby.',        src:'BrightLocal Research' },
  { num:'5×',     text:'It costs <strong>five times more</strong> to acquire a new patient than to retain one you\'ve already treated.',             src:'Healthcare Marketing Benchmark' },
]
</script>

<style scoped>
/* ── HERO ─── */
.hero {
  min-height:100vh; background:var(--ink);
  display:grid; grid-template-columns:1fr 1fr;
  align-items:center; padding-top:72px;
  position:relative; overflow:hidden;
}
.hero::after {
  content:''; position:absolute; bottom:-1px; left:0; right:0;
  height:72px; background:var(--stone);
  clip-path:polygon(0 100%, 100% 0, 100% 100%); z-index:5;
}
.hero__glow {
  position:absolute; inset:0; pointer-events:none;
}
.hero__glow::before {
  content:''; position:absolute; top:-10%; right:-8%;
  width:600px; height:600px; border-radius:50%;
  background:radial-gradient(circle, rgba(184,135,106,.07) 0%, transparent 70%);
}
.hero__glow::after {
  content:''; position:absolute; bottom:15%; left:-5%;
  width:380px; height:380px; border-radius:50%;
  background:radial-gradient(circle, rgba(184,135,106,.05) 0%, transparent 70%);
}
.hero__left  { padding:100px 72px 160px 60px; position:relative; z-index:2; }
.hero__right { display:flex; align-items:center; justify-content:center; padding:100px 60px 160px 0; position:relative; z-index:2; }
.hero__h1    { margin-bottom:26px; }
.hero__sub   { font-size:17px; line-height:1.82; font-weight:300; color:rgba(255,255,255,.5); max-width:480px; margin-bottom:44px; }
.hero__trust { display:flex; flex-wrap:wrap; border-top:1px solid rgba(255,255,255,.06); padding-top:36px; margin-top:10px; gap:0; }
.hero__trust-item { display:flex; align-items:center; gap:8px; font-family:var(--f-ui); font-size:9px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.28); padding-right:24px; margin-bottom:8px; }
.hero__trust-dot { width:4px; height:4px; border-radius:50%; background:var(--rg); opacity:.6; flex-shrink:0; }

/* ── TICKER ─── */
.ticker { overflow:hidden; background:var(--rg); padding:11px 0; }
.ticker__track { display:flex; animation:ticker 32s linear infinite; width:max-content; }
.ticker__item { display:flex; align-items:center; gap:0; padding:0 32px; font-family:var(--f-ui); font-size:9px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; color:rgba(8,12,16,.65); white-space:nowrap; }
.ticker__sep { margin-right:32px; font-size:7px; opacity:.4; }
@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }

/* ── STATS ─── */
.stats-section { background:var(--white); border-bottom:1px solid var(--stone3); }
.stats-grid    { display:grid; grid-template-columns:repeat(3,1fr); }
.stat-card     { padding:60px 48px; border-right:1px solid var(--stone3); position:relative; overflow:hidden; transition:background .3s; }
.stat-card:last-child { border-right:none; }
.stat-card:hover { background:var(--stone); }
.stat-card__bar { position:absolute; top:0; left:0; right:0; height:2px; background:var(--rg); }
.stat-card__num { font-family:var(--f-display); font-size:clamp(48px,5vw,76px); font-weight:300; color:var(--ink); line-height:.88; letter-spacing:-.045em; margin-bottom:20px; }
.stat-card__text { font-size:15px; line-height:1.68; color:var(--muted); max-width:270px; }
.stat-card__src  { font-family:var(--f-ui); font-size:8px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:var(--stone3); margin-top:14px; }

/* ── WHAT WE DO ─── */
.wtd { background:var(--ink2); padding:120px 0; position:relative; overflow:hidden; }
.wtd::before { content:''; position:absolute; top:-1px; left:0; right:0; height:72px; background:var(--white); clip-path:polygon(0 0, 100% 100%, 0 100%); }
.wtd::after  { content:''; position:absolute; bottom:-1px; left:0; right:0; height:72px; background:var(--stone2); clip-path:polygon(100% 0, 100% 100%, 0 100%); }
.wtd__inner  { display:grid; grid-template-columns:1fr 1.1fr; gap:96px; align-items:center; padding:40px 0; }
.wtd__title  { color:var(--white); margin-bottom:18px; }
.wtd__body   { font-size:15px; line-height:1.82; color:rgba(255,255,255,.38); max-width:440px; margin-bottom:36px; }

.agent-row { display:flex; align-items:stretch; background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.06); border-radius:1px; cursor:pointer; transition:background .22s, border-color .22s, transform .22s; overflow:hidden; margin-bottom:2px; }
.agent-row:hover { background:rgba(184,135,106,.06); border-color:rgba(184,135,106,.22); transform:translateX(5px); }
.agent-row__icon { width:66px; min-width:66px; background:rgba(184,135,106,.07); display:flex; align-items:center; justify-content:center; font-size:22px; border-right:1px solid rgba(255,255,255,.05); }
.agent-row__body { padding:20px 26px; flex:1; }
.agent-row__num  { font-family:var(--f-ui); font-size:8px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--rg); margin-bottom:5px; }
.agent-row__title{ font-family:var(--f-ui); font-size:12px; font-weight:700; color:var(--white); margin-bottom:4px; }
.agent-row__sub  { font-size:12px; color:rgba(255,255,255,.38); line-height:1.5; }
.agent-row__arrow{ width:48px; display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,.12); font-size:20px; transition:color .22s; }
.agent-row:hover .agent-row__arrow { color:var(--rg); }

/* ── HOW IT WORKS ─── */
.hiw { background:var(--stone2); padding:120px 0; }
.hiw__steps { display:grid; grid-template-columns:repeat(4,1fr); gap:2px; margin-top:68px; background:var(--stone3); border:1px solid var(--stone3); }
.hiw__step  { background:var(--white); padding:44px 32px; position:relative; overflow:hidden; transition:background .28s; }
.hiw__step:hover { background:var(--stone); }
.hiw__step-line  { position:absolute; top:0; left:0; right:0; height:2px; background:var(--rg); transform:scaleX(0); transform-origin:left; transition:transform .35s var(--ease-out); }
.hiw__step:hover .hiw__step-line { transform:scaleX(1); }
.hiw__step-num   { font-family:var(--f-display); font-size:72px; font-weight:300; color:var(--stone3); line-height:.88; margin-bottom:18px; transition:color .28s; }
.hiw__step:hover .hiw__step-num { color:rgba(184,135,106,.2); }
.hiw__step-title { font-family:var(--f-ui); font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--ink); margin-bottom:12px; }
.hiw__step-desc  { font-size:14px; line-height:1.72; color:var(--muted); }

/* ── PROOF ─── */
.proof { background:var(--ink); padding:120px 0; }
.proof__grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.03); margin-top:68px; }
.proof-card { background:var(--ink2); padding:44px 40px; position:relative; transition:background .28s; }
.proof-card:hover { background:var(--ink3); }
.proof-card__bar  { position:absolute; left:0; top:0; bottom:0; width:2px; background:var(--rg); }
.proof-card__q    { font-family:var(--f-display); font-size:48px; font-weight:300; color:var(--rg); line-height:.8; opacity:.3; margin-bottom:16px; }
.proof-card__text { font-family:var(--f-display); font-size:16px; font-style:italic; color:rgba(255,255,255,.72); line-height:1.68; margin-bottom:28px; }
.proof-card__meta { display:flex; align-items:center; gap:12px; }
.proof-card__avatar { width:34px; height:34px; border-radius:50%; background:var(--rg-dim); border:1px solid rgba(184,135,106,.22); display:flex; align-items:center; justify-content:center; font-family:var(--f-display); font-size:14px; color:var(--rg); }
.proof-card__name { font-family:var(--f-ui); font-size:10px; font-weight:700; letter-spacing:.06em; color:var(--white); }
.proof-card__role { font-size:11px; color:rgba(255,255,255,.3); margin-top:2px; }

/* ── RESPONSIVE ─── */
@media (max-width:1080px) {
  .hero { grid-template-columns:1fr; min-height:auto; }
  .hero__left { padding:80px 24px 60px; }
  .hero__right { display:none; }
  .hero::after { height:48px; }
  .stats-grid { grid-template-columns:1fr; }
  .stat-card { border-right:none; border-bottom:1px solid var(--stone3); }
  .wtd__inner { grid-template-columns:1fr; gap:48px; }
  .wtd::before,.wtd::after { height:48px; }
  .hiw__steps { grid-template-columns:1fr 1fr; }
  .proof__grid { grid-template-columns:1fr; }
}
@media (max-width:640px) {
  .hiw__steps { grid-template-columns:1fr; }
}
</style>
