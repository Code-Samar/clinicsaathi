<template>
  <!-- HERO -->
  <section class="about-hero grid-texture">
    <div class="about-hero__inner container">
      <div>
        <div class="eyebrow au">Our Story</div>
        <h1 class="display-lg au au1" style="color:var(--white)">
          Built for the doctor<br>who does <em>everything.</em>
        </h1>
      </div>
      <div class="about-hero__side au au2">
        <p class="about-hero__side-text">
          We watched Indian clinics lose patients to missed calls, drown in WhatsApp messages,
          and lose sleep over a single bad review — while the doctor was busy doing the actual
          work of medicine.
        </p>
      </div>
    </div>
  </section>

  <!-- MISSION -->
  <section class="about-mission">
    <div class="container--sm">
      <div class="eyebrow eyebrow--muted sr">Our Mission</div>
      <blockquote class="mission-pull sr">
        "Indian clinics don't need more complexity. They need one trusted system that works
        quietly in the background — handling what they can't, so they can focus entirely on
        what they do best."
      </blockquote>
      <div class="rule sr" />
      <p class="mission-body sr">
        ClinicSaathi was built with a single conviction: the tools that help Indian clinics
        grow should speak their patients' language, work on the platform their patients already
        use, and be maintained by a team they can actually call. No offshore support. No chatbot
        that feels robotic. No lock-in contracts that punish clinics for trying something new.
      </p>
    </div>
  </section>

  <!-- WHY WHATSAPP -->
  <section class="why-wa">
    <div class="container">
      <div class="why-wa__inner">
        <div class="sr">
          <div class="eyebrow eyebrow--muted">Why WhatsApp?</div>
          <h2 class="display-md" style="margin-bottom:20px">
            It's already where<br>your patients <em>are.</em>
          </h2>
          <div class="rule" />
          <p class="why-wa__body">
            500 million Indians use WhatsApp daily. Your patients don't want a new app, a new
            login, or a new habit. They want to WhatsApp the clinic — and right now, most clinics
            can't handle it. That's the gap ClinicSaathi closes.
          </p>
          <RouterLink to="/services" class="btn btn--ink">See Our Agents →</RouterLink>
        </div>
        <div class="why-wa__nums sr">
          <div v-for="item in whyWaNums" :key="item.big" class="why-wa__num-card">
            <div class="why-wa__big">{{ item.big }}</div>
            <div class="why-wa__label">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PILLARS -->
  <section class="about-pillars">
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

  <!-- FOUNDER -->
  <section class="about-founder">
    <div class="container">
      <div class="eyebrow sr">Founder's Note</div>
      <div class="founder-card sr">
        <div class="founder-avatar">
          <div class="founder-avatar__init">A</div>
          <div class="founder-avatar__label">Founder</div>
        </div>
        <div class="founder-body">
          <p class="founder-quote">
            The receptionist was managing 50 WhatsApp messages, the doctor was anxious about
            missed calls, and one negative review was keeping them up at night. These are
            solvable problems. That's why ClinicSaathi exists.
          </p>
          <div class="founder-name">Abhishek Ojha</div>
          <div class="founder-role">Founder, ClinicSaathi · Mumbai</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <CtaStrip
    title="See it working<br><em>on your clinic.</em>"
    sub="15 minutes. Live demo. No commitment."
    cta="Book Free Demo →"
  />
</template>

<script setup>
import { principles, whyWaNums } from '../data/index.js'
import CtaStrip from '../components/CtaStrip.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()
</script>

<style scoped>
/* ── HERO ─────────────────────────────────────── */
.about-hero {
  min-height: 72vh; background: var(--ink);
  display: flex; align-items: flex-end; padding-top: 76px;
  position: relative; overflow: hidden;
}
.about-hero::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
  height: 80px; background: var(--cream);
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}
.about-hero__inner {
  padding: 100px 60px 140px;
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: end;
  position: relative; z-index: 2;
}
.about-hero__side-text {
  color: rgba(255,255,255,.45); font-size: 16px; line-height: 1.8; font-weight: 300;
}

/* ── MISSION ──────────────────────────────────── */
.about-mission { padding: 120px 0; background: var(--cream); }
.mission-pull {
  font-family: var(--f-display);
  font-size: clamp(22px, 3vw, 38px); font-style: italic; font-weight: 300;
  color: var(--ink); line-height: 1.55;
  border-left: 2px solid var(--gold); padding-left: 44px;
  margin-bottom: 40px; max-width: 860px;
}
.mission-body { font-size: 16px; line-height: 1.85; color: var(--muted); max-width: 700px; }

/* ── WHY WHATSAPP ─────────────────────────────── */
.why-wa { background: var(--white); padding: 100px 0; }
.why-wa__inner {
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
}
.why-wa__body {
  font-size: 16px; color: var(--muted); line-height: 1.85;
  max-width: 440px; margin-bottom: 36px;
}
.why-wa__nums {
  display: grid; grid-template-columns: 1fr 1fr; gap: 2px;
  background: var(--cream3); border: 1px solid var(--cream3);
}
.why-wa__num-card {
  background: var(--cream); padding: 40px 32px;
  position: relative; overflow: hidden; transition: background .3s;
}
.why-wa__num-card:hover { background: var(--white); }
.why-wa__num-card::before {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: var(--gold); transform: scaleX(0); transform-origin: left;
  transition: transform .35s var(--ease-out);
}
.why-wa__num-card:hover::before { transform: scaleX(1); }
.why-wa__big {
  font-family: var(--f-display);
  font-size: clamp(36px, 4vw, 56px); font-weight: 300;
  color: var(--ink); line-height: .9; letter-spacing: -.03em; margin-bottom: 12px;
}
.why-wa__label { font-size: 13px; color: var(--muted); line-height: 1.6; }

/* ── PILLARS ──────────────────────────────────── */
.about-pillars { background: var(--cream2); padding: 120px 0; }
.pillars-grid {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 2px; background: var(--cream3); border: 1px solid var(--cream3); margin-top: 72px;
}
.pillar {
  background: var(--white); padding: 52px 44px;
  position: relative; overflow: hidden; transition: background .3s;
}
.pillar:hover { background: var(--cream); }
.pillar__accent {
  position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: var(--gold);
  transform: scaleY(0); transform-origin: top; transition: transform .4s var(--ease-out);
}
.pillar:hover .pillar__accent { transform: scaleY(1); }
.pillar__num {
  font-family: var(--f-display); font-size: 64px; font-weight: 300;
  color: var(--cream3); line-height: .9; margin-bottom: 20px;
}
.pillar__title {
  font-family: var(--f-display); font-size: 24px; font-weight: 500;
  color: var(--ink); margin-bottom: 14px;
}
.pillar__desc { font-size: 14px; line-height: 1.75; color: var(--muted); }

/* ── FOUNDER ──────────────────────────────────── */
.about-founder { background: var(--ink); padding: 120px 0; }
.founder-card {
  display: grid; grid-template-columns: 220px 1fr;
  gap: 80px; align-items: center;
}
.founder-avatar {
  width: 200px; height: 200px; border-radius: 4px;
  background: rgba(196,151,60,.07); border: 1px solid rgba(196,151,60,.18);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  flex-shrink: 0;
}
.founder-avatar__init {
  font-family: var(--f-display); font-size: 72px; font-weight: 300;
  color: var(--gold); line-height: 1;
}
.founder-avatar__label {
  font-family: var(--f-ui); font-size: 9px; font-weight: 700;
  letter-spacing: .14em; text-transform: uppercase; color: rgba(255,255,255,.25);
}
.founder-body { }
.founder-quote {
  font-family: var(--f-display); font-size: clamp(20px, 2.5vw, 30px);
  font-style: italic; font-weight: 300; color: rgba(255,255,255,.8);
  line-height: 1.65; position: relative; padding-left: 44px; margin-bottom: 32px;
}
.founder-quote::before {
  content: '\201C'; position: absolute; left: 0; top: -14px;
  font-size: 88px; color: var(--gold); line-height: 1; opacity: .35;
  font-family: var(--f-display);
}
.founder-name {
  font-family: var(--f-display); font-size: 22px; font-weight: 500;
  color: var(--white); margin-bottom: 4px;
}
.founder-role {
  font-family: var(--f-ui); font-size: 10px; font-weight: 700;
  letter-spacing: .12em; text-transform: uppercase; color: var(--gold);
}

/* ── RESPONSIVE ────────────────────────────────── */
@media (max-width: 1080px) {
  .about-hero__inner { grid-template-columns: 1fr; gap: 32px; padding: 80px 28px 120px; }
  .about-hero::after { height: 48px; }
  .mission-pull { padding-left: 24px; }
  .why-wa__inner { grid-template-columns: 1fr; }
  .pillars-grid { grid-template-columns: 1fr; }
  .founder-card { grid-template-columns: 1fr; gap: 40px; }
  .founder-quote { padding-left: 28px; }
  .founder-avatar { margin: 0 auto; }
}
@media (max-width: 640px) {
  .why-wa__nums { grid-template-columns: 1fr; }
}
</style>
