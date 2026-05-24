<template>
  <section class="about-hero grid-texture">
    <div class="container about-hero__inner">
      <div>
        <div class="eyebrow au">Our Story</div>
        <h1 class="display-lg au au1" style="color:var(--white)">Built for the doctor<br>who does <em>everything.</em></h1>
      </div>
      <div class="au au2">
        <p class="about-hero__side">We watched Indian clinics lose patients to missed calls, drown in WhatsApp messages, and lose sleep over a single bad review — while the doctor was busy doing the actual work of medicine.</p>
      </div>
    </div>
  </section>

  <section class="a-mission">
    <div class="container--sm">
      <div class="eyebrow eyebrow--muted sr">Our Mission</div>
      <blockquote class="a-mission__pull sr">"Indian clinics don't need more complexity. They need one trusted system that works quietly in the background — handling what they can't, so they can focus entirely on what they do best."</blockquote>
      <div class="rule sr" />
      <p class="a-mission__body sr">ClinicSaathi was built with a single conviction: the tools that help Indian clinics grow should speak their patients' language, work on the platform their patients already use, and be maintained by a team they can actually call. No offshore support. No chatbot that feels robotic. No lock-in contracts that punish clinics for trying something new.</p>
    </div>
  </section>

  <section class="why-wa">
    <div class="container">
      <div class="why-wa__inner">
        <div class="sr">
          <div class="eyebrow eyebrow--muted">Why WhatsApp?</div>
          <h2 class="display-md" style="margin-bottom:18px">It's already where<br>your patients <em>are.</em></h2>
          <div class="rule" />
          <p class="why-wa__body">500 million Indians use WhatsApp daily. Your patients don't want a new app, a new login, or a new habit. They want to WhatsApp the clinic — and right now, most clinics can't handle it. That's the gap ClinicSaathi closes.</p>
          <RouterLink to="/services" class="btn btn--ink">See Our Agents →</RouterLink>
        </div>
        <div class="why-wa__nums sr">
          <div v-for="w in whyWaNums" :key="w.big" class="wn-card">
            <div class="wn-card__bar" />
            <div class="wn-card__big">{{ w.big }}</div>
            <div class="wn-card__label">{{ w.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="a-pillars">
    <div class="container">
      <div class="eyebrow eyebrow--muted sr">What We Stand For</div>
      <h2 class="display-md sr">Three principles<br><em>we don't negotiate on.</em></h2>
      <div class="pillars-grid">
        <div v-for="p in principles" :key="p.n" class="pillar sr">
          <div class="pillar__accent" />
          <div class="pillar__num">{{ p.n }}</div>
          <div class="pillar__title">{{ p.title }}</div>
          <p class="pillar__desc">{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="a-founder">
    <div class="container">
      <div class="eyebrow sr">Founder's Note</div>
      <div class="founder sr">
        <div class="founder__avatar">
          <div class="founder__init">A</div>
          <div class="founder__tag">Founder</div>
        </div>
        <div class="founder__body">
          <p class="founder__quote">The receptionist was managing 50 WhatsApp messages, the doctor was anxious about missed calls, and one negative review was keeping them up at night. These are solvable problems. That's why ClinicSaathi exists.</p>
          <div class="founder__name">Abhishek Ojha</div>
          <div class="founder__role">Founder, ClinicSaathi · Mumbai</div>
        </div>
      </div>
    </div>
  </section>

  <CtaStrip title="See it working<br><em>on your clinic.</em>" sub="15 minutes. Live demo. No commitment." />
</template>

<script setup>
import { principles, whyWaNums } from '../data/index.js'
import CtaStrip from '../components/CtaStrip.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'
useScrollReveal()
</script>

<style scoped>
/* ── HERO ─── */
.about-hero { min-height:68vh; background:var(--ink); display:flex; align-items:flex-end; padding-top:72px; position:relative; overflow:hidden; }
.about-hero::after { content:''; position:absolute; bottom:-1px; left:0; right:0; height:72px; background:var(--stone); clip-path:polygon(0 100%, 100% 0, 100% 100%); }
.about-hero__inner { padding:96px 60px 136px; display:grid; grid-template-columns:1.2fr 1fr; gap:72px; align-items:end; position:relative; z-index:2; }
.about-hero__side { color:rgba(255,255,255,.42); font-size:16px; line-height:1.85; font-weight:300; }

/* ── MISSION ─── */
.a-mission { padding:120px 0; background:var(--stone); }
.a-mission__pull { font-family:var(--f-display); font-size:clamp(20px,2.8vw,36px); font-style:italic; font-weight:300; color:var(--ink); line-height:1.55; border-left:2px solid var(--rg); padding-left:40px; margin-bottom:36px; max-width:820px; }
.a-mission__body { font-size:16px; line-height:1.88; color:var(--muted); max-width:680px; }

/* ── WHY WHATSAPP ─── */
.why-wa { background:var(--white); padding:100px 0; }
.why-wa__inner { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
.why-wa__body  { font-size:15px; color:var(--muted); line-height:1.88; max-width:420px; margin-bottom:32px; }
.why-wa__nums  { display:grid; grid-template-columns:1fr 1fr; gap:2px; background:var(--stone3); border:1px solid var(--stone3); }
.wn-card { background:var(--stone); padding:36px 28px; position:relative; overflow:hidden; transition:background .28s; }
.wn-card:hover { background:var(--white); }
.wn-card__bar { position:absolute; bottom:0; left:0; right:0; height:2px; background:var(--rg); transform:scaleX(0); transform-origin:left; transition:transform .35s var(--ease-out); }
.wn-card:hover .wn-card__bar { transform:scaleX(1); }
.wn-card__big  { font-family:var(--f-display); font-size:clamp(34px,4vw,54px); font-weight:300; color:var(--ink); line-height:.88; letter-spacing:-.035em; margin-bottom:12px; }
.wn-card__label { font-size:12px; color:var(--muted); line-height:1.6; }

/* ── PILLARS ─── */
.a-pillars { background:var(--stone2); padding:120px 0; }
.pillars-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:var(--stone3); border:1px solid var(--stone3); margin-top:68px; }
.pillar { background:var(--white); padding:48px 40px; position:relative; overflow:hidden; transition:background .28s; }
.pillar:hover { background:var(--stone); }
.pillar__accent { position:absolute; left:0; top:0; bottom:0; width:2px; background:var(--rg); transform:scaleY(0); transform-origin:top; transition:transform .4s var(--ease-out); }
.pillar:hover .pillar__accent { transform:scaleY(1); }
.pillar__num   { font-family:var(--f-display); font-size:60px; font-weight:300; color:var(--stone3); line-height:.88; margin-bottom:20px; }
.pillar__title { font-family:var(--f-display); font-size:22px; font-weight:400; color:var(--ink); margin-bottom:14px; }
.pillar__desc  { font-size:14px; line-height:1.75; color:var(--muted); }

/* ── FOUNDER ─── */
.a-founder { background:var(--ink); padding:120px 0; }
.founder { display:grid; grid-template-columns:200px 1fr; gap:80px; align-items:center; }
.founder__avatar { width:180px; height:180px; border-radius:2px; background:rgba(184,135,106,.07); border:1px solid rgba(184,135,106,.18); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; flex-shrink:0; }
.founder__init { font-family:var(--f-display); font-size:68px; font-weight:300; color:var(--rg); line-height:1; }
.founder__tag  { font-family:var(--f-ui); font-size:8px; font-weight:700; letter-spacing:.16em; text-transform:uppercase; color:rgba(255,255,255,.22); }
.founder__quote { font-family:var(--f-display); font-size:clamp(18px,2.4vw,28px); font-style:italic; font-weight:300; color:rgba(255,255,255,.78); line-height:1.65; position:relative; padding-left:40px; margin-bottom:32px; }
.founder__quote::before { content:'\201C'; position:absolute; left:0; top:-12px; font-size:84px; color:var(--rg); line-height:1; opacity:.3; font-family:var(--f-display); }
.founder__name { font-family:var(--f-display); font-size:20px; font-weight:400; color:var(--white); margin-bottom:4px; }
.founder__role { font-family:var(--f-ui); font-size:9px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--rg); }

/* ── RESPONSIVE ─── */
@media (max-width:1080px) {
  .about-hero__inner { grid-template-columns:1fr; gap:28px; padding:80px 24px 120px; }
  .about-hero::after { height:48px; }
  .a-mission__pull { padding-left:24px; }
  .why-wa__inner { grid-template-columns:1fr; }
  .pillars-grid { grid-template-columns:1fr; }
  .founder { grid-template-columns:1fr; gap:36px; }
  .founder__avatar { margin:0 auto; }
  .founder__quote { padding-left:24px; }
}
@media (max-width:640px) { .why-wa__nums { grid-template-columns:1fr; } }
</style>
