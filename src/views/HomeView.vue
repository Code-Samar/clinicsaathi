<template>
  <!-- HERO -->
  <section class="hero grid-texture">
    <div class="hero__bg" />
    <div class="hero__left">
      <div class="eyebrow au">Aapke Clinic Ka AI Saathi</div>
      <h1 class="display-xl au au1">
        Your clinic<br>
        shouldn't lose<br>
        patients to a<br>
        <em>missed call.</em>
      </h1>
      <p class="hero__sub au au2">
        WhatsApp AI agents that handle bookings, missed calls, reviews, and patient
        retention — on your existing number. Automatically. 24/7.
      </p>
      <div class="btn-row au au3">
        <RouterLink to="/contact" class="btn btn--gold">Book Free Demo →</RouterLink>
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="btn btn--outline-light">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.85.5 3.57 1.37 5.07L2 22l5.09-1.34A9.9 9.9 0 0012 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm4.93 13.97c-.2.57-.99 1.05-1.62 1.19-.43.09-1 .16-2.9-.62-2.43-1-3.97-3.44-4.09-3.6-.12-.16-.97-1.29-.97-2.46s.61-1.74.83-1.98c.22-.24.47-.3.63-.3h.45c.14 0 .34-.05.53.4l.68 1.66c.06.14.1.3.01.47l-.3.44-.44.47c-.12.13-.25.27-.1.53.15.26.65 1.08 1.4 1.74.96.85 1.77 1.12 2.03 1.24.26.12.41.1.56-.06l.64-.76c.16-.2.32-.13.54-.05l1.55.73c.22.1.36.15.41.24.05.09.05.52-.15 1.08z"/></svg>
          WhatsApp Us
        </a>
      </div>
      <div class="hero__trust au au4">
        <div v-for="t in trustItems" :key="t" class="hero__trust-item">
          <div class="hero__trust-dot" />{{ t }}
        </div>
      </div>
    </div>
    <div class="hero__right">
      <ChatMockup />
    </div>
  </section>

  <!-- TICKER -->
  <div class="ticker">
    <div class="ticker__inner">
      <template v-for="n in 2" :key="n">
        <div v-for="item in tickerItems" :key="item" class="ticker__item">
          <div class="ticker__dot" />{{ item }}
        </div>
      </template>
    </div>
  </div>

  <!-- STATS -->
  <section class="stat-strip">
    <div class="stat-strip__inner container">
      <div v-for="s in stats" :key="s.num" class="stat-card sr">
        <div class="stat-card__accent" />
        <div class="stat-card__num">{{ s.num }}</div>
        <p class="stat-card__text" v-html="s.text" />
        <div class="stat-card__source">{{ s.source }}</div>
      </div>
    </div>
  </section>

  <!-- WHAT WE DO -->
  <section class="wtd grid-texture">
    <div class="container wtd__inner">
      <div>
        <div class="eyebrow">What ClinicSaathi Does</div>
        <h2 class="display-md wtd__title">
          Four AI agents.<br>One WhatsApp number.<br><em>Zero extra staff.</em>
        </h2>
        <div class="rule" />
        <p class="wtd__sub">
          We deploy intelligent agents directly on your clinic's existing WhatsApp Business
          number — no new app, no new number, no technical overhead.
        </p>
        <RouterLink to="/services" class="btn btn--gold">Explore All Agents →</RouterLink>
      </div>
      <div class="agent-list">
        <RouterLink
          v-for="ag in agents"
          :key="ag.num"
          to="/services"
          class="agent-row"
        >
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
      <div class="eyebrow eyebrow--muted">How It Works</div>
      <h2 class="display-md">From demo to deployment<br><em>in 72 hours.</em></h2>
      <div class="hiw__steps">
        <div v-for="step in steps" :key="step.n" class="hiw__step sr">
          <div class="hiw__step-line" />
          <div class="hiw__step-num">{{ step.n }}</div>
          <div class="hiw__step-title">{{ step.title }}</div>
          <p class="hiw__step-desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SOCIAL PROOF -->
  <section class="proof grid-texture">
    <div class="container">
      <div class="eyebrow eyebrow--light">What Clinics Say</div>
      <h2 class="display-md" style="color:var(--white)">
        Results that speak<br><em>for themselves.</em>
      </h2>
      <div class="proof__grid">
        <div v-for="t in testimonials" :key="t.name" class="proof__card sr">
          <div class="proof__card-accent" />
          <div class="proof__card-q">"</div>
          <p class="proof__card-text">{{ t.text }}</p>
          <div class="proof__card-meta">
            <div class="proof__card-avatar">{{ t.init }}</div>
            <div>
              <div class="proof__card-name">{{ t.name }}</div>
              <div class="proof__card-role">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <CtaStrip
    title="Another missed call<br><em>or</em> your first demo?"
    sub="Fifteen minutes. Live demo on your phone. No commitment, no pressure."
    cta="Book Free Demo →"
    :show-wa="true"
  />
</template>

<script setup>
import { agents, steps, testimonials } from '../data/index.js'
import ChatMockup from '../components/ChatMockup.vue'
import CtaStrip   from '../components/CtaStrip.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()

const trustItems  = ['No new app required', 'Live in 72 hours', 'Hindi + English', 'Mumbai-based team', 'Month-to-month']
const tickerItems = ['No New App Required','Live in 72 Hours','Hindi + English Support','Mumbai-Based Team','Month-to-Month Pricing','4 AI Agents. One WhatsApp Number.','Works on Your Existing Number','Zero Extra Staff Needed']
const stats = [
  { num:'3 in 5', text:'Patients who call a busy clinic and get no answer <strong>never call back</strong> — they move to the next result on Google.', source:'Industry Benchmark' },
  { num:'12×',    text:'A single negative Google review shifts the decision of up to <strong>12 potential patients</strong> searching for clinics near them.', source:'BrightLocal Research' },
  { num:'5×',     text:'It costs <strong>five times more</strong> to acquire a new patient than to retain one you\'ve already treated. Follow-up is revenue.', source:'Healthcare Marketing Benchmark' },
]
</script>

<style scoped>
/* ── HERO ─────────────────────────────────────── */
.hero {
  min-height: 100vh; background: var(--ink);
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; padding-top: 76px;
  position: relative; overflow: hidden;
}
.hero::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
  height: 80px; background: var(--white);
  clip-path: polygon(0 100%, 100% 0, 100% 100%); z-index: 5;
}
.hero__bg {
  position: absolute; inset: 0; pointer-events: none;
}
.hero__bg::before {
  content: ''; position: absolute; top: -20%; right: -10%;
  width: 640px; height: 640px; border-radius: 50%;
  background: radial-gradient(circle, rgba(196,151,60,.08) 0%, transparent 70%);
}
.hero__bg::after {
  content: ''; position: absolute; bottom: 20%; left: -5%;
  width: 400px; height: 400px; border-radius: 50%;
  background: radial-gradient(circle, rgba(196,151,60,.05) 0%, transparent 70%);
}
.hero__left  { padding: 100px 80px 160px 60px; position: relative; z-index: 2; }
.hero__right {
  display: flex; align-items: center; justify-content: center;
  padding: 100px 60px 160px 0; position: relative; z-index: 2;
}
.hero__sub {
  font-size: 17px; line-height: 1.8; font-weight: 300;
  color: rgba(255,255,255,.55); max-width: 500px; margin-bottom: 44px;
}
.hero__trust {
  display: flex; flex-wrap: wrap;
  border-top: 1px solid rgba(255,255,255,.07); padding-top: 40px; margin-top: 8px;
}
.hero__trust-item {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--f-ui); font-size: 10px; font-weight: 600;
  letter-spacing: .08em; text-transform: uppercase;
  color: rgba(255,255,255,.3); padding-right: 28px; margin-bottom: 8px;
}
.hero__trust-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--gold); opacity: .7; flex-shrink: 0; }

/* ── TICKER ────────────────────────────────────── */
.ticker { overflow: hidden; background: var(--gold); padding: 12px 0; }
.ticker__inner { display: flex; animation: ticker 28s linear infinite; width: max-content; }
.ticker__item {
  display: flex; align-items: center; gap: 16px;
  padding: 0 40px; white-space: nowrap;
  font-family: var(--f-ui); font-size: 10px; font-weight: 800;
  letter-spacing: .14em; text-transform: uppercase; color: var(--ink);
}
.ticker__dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(0,0,0,.3); }

@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* ── STATS ─────────────────────────────────────── */
.stat-strip { background: var(--white); border-bottom: 1px solid var(--cream3); }
.stat-strip__inner { display: grid; grid-template-columns: repeat(3,1fr); }
.stat-card {
  padding: 64px 52px; border-right: 1px solid var(--cream3);
  position: relative; overflow: hidden; transition: background .3s;
}
.stat-card:last-child { border-right: none; }
.stat-card:hover { background: var(--cream); }
.stat-card__accent { position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--gold); }
.stat-card__num {
  font-family: var(--f-display);
  font-size: clamp(52px, 5.5vw, 80px);
  font-weight: 300; line-height: .9; letter-spacing: -.04em;
  color: var(--ink); margin-bottom: 20px;
}
.stat-card__text { font-size: 15px; line-height: 1.65; color: var(--muted); max-width: 280px; }
.stat-card__source { font-family: var(--f-ui); font-size: 9px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--cream3); margin-top: 16px; }

/* ── WHAT WE DO ────────────────────────────────── */
.wtd { background: var(--ink2); padding: 120px 0; position: relative; overflow: hidden; }
.wtd::before {
  content: ''; position: absolute; top: -1px; left: 0; right: 0;
  height: 80px; background: var(--white); clip-path: polygon(0 0, 100% 100%, 0 100%);
}
.wtd::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
  height: 80px; background: var(--cream2); clip-path: polygon(100% 0, 100% 100%, 0 100%);
}
.wtd__inner { display: grid; grid-template-columns: 1fr 1.1fr; gap: 100px; align-items: center; padding: 40px 0; }
.wtd__title { color: var(--white); margin-bottom: 20px; }
.wtd__sub { font-size: 16px; line-height: 1.8; color: rgba(255,255,255,.4); max-width: 460px; margin-bottom: 40px; }

.agent-list { display: flex; flex-direction: column; gap: 2px; }
.agent-row {
  display: flex; align-items: stretch;
  background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.06);
  border-radius: 2px; cursor: pointer;
  transition: background .25s, border-color .25s, transform .25s; overflow: hidden;
}
.agent-row:hover { background: rgba(196,151,60,.06); border-color: rgba(196,151,60,.2); transform: translateX(6px); }
.agent-row__icon {
  width: 68px; min-width: 68px; background: rgba(196,151,60,.07);
  display: flex; align-items: center; justify-content: center; font-size: 24px;
  border-right: 1px solid rgba(255,255,255,.06);
}
.agent-row__body { padding: 22px 28px; flex: 1; }
.agent-row__num { font-family: var(--f-ui); font-size: 9px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--gold); margin-bottom: 5px; }
.agent-row__title { font-family: var(--f-ui); font-size: 13px; font-weight: 700; color: var(--white); margin-bottom: 5px; }
.agent-row__sub { font-size: 13px; color: rgba(255,255,255,.4); line-height: 1.5; }
.agent-row__arrow { width: 52px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,.15); font-size: 22px; transition: color .25s; }
.agent-row:hover .agent-row__arrow { color: var(--gold); }

/* ── HOW IT WORKS ──────────────────────────────── */
.hiw { background: var(--cream2); padding: 120px 0; }
.hiw__steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 2px; margin-top: 72px; background: var(--cream3); border: 1px solid var(--cream3); }
.hiw__step {
  background: var(--white); padding: 48px 36px;
  position: relative; overflow: hidden; transition: background .3s;
}
.hiw__step:hover { background: var(--cream); }
.hiw__step-line {
  position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--gold);
  transform: scaleX(0); transform-origin: left; transition: transform .35s var(--ease-out);
}
.hiw__step:hover .hiw__step-line { transform: scaleX(1); }
.hiw__step-num { font-family: var(--f-display); font-size: 80px; font-weight: 300; color: var(--cream3); line-height: .9; margin-bottom: 20px; transition: color .3s; }
.hiw__step:hover .hiw__step-num { color: rgba(196,151,60,.2); }
.hiw__step-title { font-family: var(--f-ui); font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--ink); margin-bottom: 12px; }
.hiw__step-desc { font-size: 14px; line-height: 1.7; color: var(--muted); }

/* ── SOCIAL PROOF ─────────────────────────────── */
.proof { background: var(--ink); padding: 120px 0; position: relative; overflow: hidden; }
.proof__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.04); margin-top: 72px; }
.proof__card { background: var(--ink2); padding: 44px 40px; position: relative; transition: background .3s; }
.proof__card:hover { background: var(--ink3); }
.proof__card-accent { position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--gold); }
.proof__card-q { font-family: var(--f-display); font-size: 52px; font-weight: 300; color: var(--gold); line-height: .8; opacity: .35; margin-bottom: 16px; }
.proof__card-text { font-family: var(--f-display); font-size: 17px; font-style: italic; color: rgba(255,255,255,.75); line-height: 1.65; margin-bottom: 28px; }
.proof__card-meta { display: flex; align-items: center; gap: 12px; }
.proof__card-avatar { width: 36px; height: 36px; border-radius: 50%; background: rgba(196,151,60,.12); border: 1px solid rgba(196,151,60,.2); display: flex; align-items: center; justify-content: center; font-family: var(--f-display); font-size: 16px; color: var(--gold); }
.proof__card-name { font-family: var(--f-ui); font-size: 11px; font-weight: 700; letter-spacing: .06em; color: var(--white); }
.proof__card-role { font-size: 12px; color: rgba(255,255,255,.35); margin-top: 2px; }

/* ── RESPONSIVE ────────────────────────────────── */
@media (max-width: 1080px) {
  .hero { grid-template-columns: 1fr; min-height: auto; }
  .hero__left { padding: 80px 28px 60px; }
  .hero__right { display: none; }
  .hero::after { height: 48px; }
  .stat-strip__inner { grid-template-columns: 1fr; }
  .stat-card { border-right: none; border-bottom: 1px solid var(--cream3); }
  .wtd__inner { grid-template-columns: 1fr; gap: 48px; }
  .wtd::before, .wtd::after { height: 48px; }
  .hiw__steps { grid-template-columns: 1fr 1fr; }
  .proof__grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .hiw__steps { grid-template-columns: 1fr; }
  .hero__trust-item { padding-right: 16px; }
}
</style>
