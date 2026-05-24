<template>
  <section class="svc-hero grid-texture">
    <div class="container svc-hero__inner">
      <div class="eyebrow au">AI Agents</div>
      <h1 class="display-lg au au1" style="color:var(--white);max-width:780px;margin-bottom:18px">Four agents.<br>One WhatsApp number.<br><em>Zero extra staff.</em></h1>
      <p class="body-lg au au2" style="color:rgba(255,255,255,.42);max-width:540px">Each agent targets a specific revenue leak in your clinic. Deploy one or all four — they work together on your existing number.</p>
    </div>
  </section>

  <section class="svc-main">
    <div class="container">
      <!-- Tabs -->
      <div class="agent-tabs">
        <div v-for="(ag, i) in agentPanels" :key="i" :class="['atab', { active: activeAgent===i }]" @click="activeAgent=i">
          <span class="atab__icon">{{ ag.icon }}</span>
          <span class="atab__num">Agent {{ ag.num }}</span>
          <span class="atab__name">{{ ag.name }}</span>
        </div>
      </div>
      <Transition name="panel" mode="out-in">
        <AgentPanel :key="activeAgent" :agent="currentAgent" />
      </Transition>
    </div>
  </section>

  <CtaStrip title="Not sure which agent<br><em>fits your clinic?</em>" sub="Book a 15-minute demo — we'll give you an honest recommendation." cta="Get a Recommendation →" />

  <!-- PRICING -->
  <section class="pricing grid-texture">
    <div class="container">
      <div class="pricing__intro">
        <div class="eyebrow eyebrow--light" style="justify-content:center">Pricing</div>
        <h2 class="display-md" style="color:var(--white);margin-bottom:12px">Simple, transparent pricing.<br><em>No surprises.</em></h2>
        <p class="pricing__sub">Month-to-month. Cancel anytime. All plans include setup, onboarding, and Mumbai-based support.</p>
      </div>
      <div class="pricing__grid">
        <div v-for="plan in pricingPlans" :key="plan.plan" :class="['p-card','sr',{ 'p-card--featured': plan.featured }]">
          <div v-if="plan.badge" class="p-card__badge">{{ plan.badge }}</div>
          <div class="p-card__plan">{{ plan.plan }}</div>
          <div class="p-card__title">{{ plan.title }}</div>
          <p class="p-card__tagline">{{ plan.tagline }}</p>
          <div class="p-card__price">{{ plan.price }}</div>
          <div class="p-card__period">{{ plan.period }}</div>
          <div class="p-card__divider" />
          <div class="p-card__features">
            <div v-for="f in plan.features" :key="f" class="p-card__feat"><span class="p-card__feat-dot">✓</span>{{ f }}</div>
          </div>
          <RouterLink to="/contact" :class="['btn', plan.featured ? 'p-card__cta--featured' : 'p-card__cta--outline']">{{ plan.cta }}</RouterLink>
        </div>
      </div>
      <p class="pricing__note">All prices exclusive of GST · Month-to-month · No lock-in · Cancel anytime</p>
    </div>
  </section>

  <!-- FAQ -->
  <section class="faq">
    <div class="container">
      <div class="eyebrow eyebrow--muted sr">FAQ</div>
      <h2 class="display-md sr">Questions clinics<br><em>always ask us.</em></h2>
      <div class="faq__layout">
        <div class="faq__sticky sr">
          <p class="faq__sticky-sub">Can't find your answer? Drop us a message — we typically respond within 10 minutes.</p>
          <RouterLink to="/contact" class="btn btn--rg">Ask Us Directly →</RouterLink>
        </div>
        <div class="faq__items">
          <div v-for="(faq, i) in faqs" :key="i" :class="['faq-item', { open: openFaq===i }]" @click="openFaq = openFaq===i ? -1 : i">
            <div class="faq-item__q">
              <span class="faq-item__q-text">{{ faq.q }}</span>
              <span class="faq-item__icon">+</span>
            </div>
            <div class="faq-item__a">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <CtaStrip title="Ready to stop losing<br><em>patients to silence?</em>" sub="Free demo. No contract. Live in 72 hours." :show-wa="true" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { agentPanels, pricingPlans, faqs } from '../data/index.js'
import AgentPanel from '../components/AgentPanel.vue'
import CtaStrip   from '../components/CtaStrip.vue'
import { useScrollReveal } from '../composables/useScrollReveal.js'
useScrollReveal()

const activeAgent = ref(0)
const openFaq     = ref(-1)
const currentAgent = computed(() => agentPanels[activeAgent.value])
</script>

<style scoped>
/* ── HERO ─── */
.svc-hero { min-height:65vh; background:var(--ink); display:flex; align-items:flex-end; padding-top:72px; position:relative; overflow:hidden; }
.svc-hero::after { content:''; position:absolute; bottom:-1px; left:0; right:0; height:72px; background:var(--stone); clip-path:polygon(0 100%, 100% 0, 100% 100%); }
.svc-hero__inner { padding:96px 60px 136px; position:relative; z-index:2; }

/* ── AGENTS ─── */
.svc-main { background:var(--stone); padding:72px 0 120px; }
.agent-tabs { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin-bottom:32px; }
.atab { padding:22px 18px; background:var(--white); border:1.5px solid var(--stone3); border-radius:2px; cursor:pointer; transition:all .22s var(--ease-out); text-align:center; }
.atab:hover { border-color:rgba(184,135,106,.4); }
.atab.active { background:var(--ink); border-color:var(--ink); }
.atab__icon { font-size:24px; display:block; margin-bottom:10px; }
.atab__num  { font-family:var(--f-ui); font-size:8px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); display:block; margin-bottom:5px; transition:color .2s; }
.atab.active .atab__num { color:var(--rg); }
.atab__name { font-family:var(--f-ui); font-size:10px; font-weight:700; color:var(--text); line-height:1.35; transition:color .2s; }
.atab.active .atab__name { color:var(--white); }
.panel-enter-active { animation:panelIn .32s var(--ease-out) both; }
.panel-leave-active { animation:panelIn .18s var(--ease-out) reverse both; }
@keyframes panelIn { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }

/* ── PRICING ─── */
.pricing { background:var(--ink2); padding:120px 0; position:relative; overflow:hidden; }
.pricing::before { content:''; position:absolute; top:-1px; left:0; right:0; height:60px; background:var(--stone); clip-path:polygon(0 0, 100% 100%, 0 100%); }
.pricing__intro { text-align:center; margin-bottom:68px; }
.pricing__sub   { font-size:15px; color:rgba(255,255,255,.38); max-width:440px; margin:0 auto; line-height:1.78; }
.pricing__grid  { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.03); }
.pricing__note  { text-align:center; margin-top:36px; font-family:var(--f-ui); font-size:9px; font-weight:600; letter-spacing:.08em; color:rgba(255,255,255,.18); }

.p-card { background:var(--ink3); padding:48px 40px; position:relative; overflow:hidden; display:flex; flex-direction:column; transition:background .28s; }
.p-card:hover { background:#1a2a3a; }
.p-card--featured { background:var(--rg); }
.p-card--featured:hover { background:var(--rg2); }

.p-card__badge { position:absolute; top:18px; right:18px; font-family:var(--f-ui); font-size:8px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; background:var(--ink); color:var(--rg); padding:5px 12px; border-radius:1px; }
.p-card--featured .p-card__badge { background:rgba(0,0,0,.15); color:rgba(8,12,16,.65); }

.p-card__plan  { font-family:var(--f-ui); font-size:9px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:var(--rg); margin-bottom:12px; }
.p-card--featured .p-card__plan { color:rgba(8,12,16,.55); }
.p-card__title { font-family:var(--f-display); font-size:24px; font-weight:300; color:var(--white); margin-bottom:8px; line-height:1.15; white-space:pre-line; }
.p-card--featured .p-card__title { color:var(--ink); }
.p-card__tagline { font-size:13px; color:rgba(255,255,255,.42); margin-bottom:28px; line-height:1.62; }
.p-card--featured .p-card__tagline { color:rgba(8,12,16,.52); }
.p-card__price  { font-family:var(--f-display); font-size:48px; font-weight:300; color:var(--white); line-height:.88; letter-spacing:-.04em; margin-bottom:4px; }
.p-card--featured .p-card__price { color:var(--ink); }
.p-card__period { font-size:12px; color:rgba(255,255,255,.3); margin-bottom:32px; }
.p-card--featured .p-card__period { color:rgba(8,12,16,.42); }
.p-card__divider { width:28px; height:1px; background:rgba(255,255,255,.1); margin-bottom:24px; }
.p-card--featured .p-card__divider { background:rgba(0,0,0,.12); }
.p-card__features { flex:1; display:flex; flex-direction:column; gap:11px; margin-bottom:32px; }
.p-card__feat { display:flex; align-items:flex-start; gap:10px; font-size:13px; color:rgba(255,255,255,.62); line-height:1.5; }
.p-card--featured .p-card__feat { color:rgba(8,12,16,.68); }
.p-card__feat-dot { width:17px; height:17px; border-radius:50%; background:rgba(184,135,106,.15); color:var(--rg); font-size:9px; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px; }
.p-card--featured .p-card__feat-dot { background:rgba(0,0,0,.1); color:var(--ink); }

.p-card__cta--featured { background:var(--ink); color:var(--white); width:100%; justify-content:center; display:flex; font-family:var(--f-ui); font-size:10px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; padding:15px 32px; border-radius:1px; transition:all .22s var(--ease-out); }
.p-card__cta--featured:hover { background:#0d1520; transform:translateY(-2px); }
.p-card__cta--outline { background:transparent; color:rgba(255,255,255,.6); border:1px solid rgba(255,255,255,.15); width:100%; justify-content:center; display:flex; font-family:var(--f-ui); font-size:10px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; padding:15px 32px; border-radius:1px; transition:all .22s; }
.p-card__cta--outline:hover { border-color:rgba(255,255,255,.4); color:var(--white); }

/* ── FAQ ─── */
.faq { background:var(--stone2); padding:120px 0; }
.faq__layout { display:grid; grid-template-columns:1fr 1.7fr; gap:80px; align-items:start; margin-top:68px; }
.faq__sticky { position:sticky; top:96px; }
.faq__sticky-sub { font-size:14px; color:var(--muted); line-height:1.78; margin-bottom:28px; }
.faq__items { display:flex; flex-direction:column; gap:2px; }
.faq-item { background:var(--white); border:1px solid var(--stone3); border-radius:1px; overflow:hidden; transition:border-color .22s; }
.faq-item.open { border-color:rgba(184,135,106,.3); }
.faq-item__q { padding:22px 28px; display:flex; align-items:center; justify-content:space-between; gap:16px; cursor:pointer; transition:background .2s; }
.faq-item__q:hover, .faq-item.open .faq-item__q { background:var(--stone); }
.faq-item__q-text { font-family:var(--f-ui); font-size:12px; font-weight:700; letter-spacing:.03em; color:var(--ink); line-height:1.4; }
.faq-item__icon { width:26px; height:26px; border-radius:50%; background:var(--stone3); display:flex; align-items:center; justify-content:center; font-size:16px; color:var(--muted); flex-shrink:0; transition:background .2s, transform .3s var(--ease-out), color .2s; }
.faq-item.open .faq-item__icon { background:var(--rg); color:var(--ink); transform:rotate(45deg); }
.faq-item__a { max-height:0; overflow:hidden; padding:0 28px; transition:max-height .4s var(--ease-out), padding .3s; font-size:14px; line-height:1.82; color:var(--muted); }
.faq-item.open .faq-item__a { max-height:320px; padding:0 28px 22px; }

/* ── RESPONSIVE ─── */
@media (max-width:1080px) {
  .svc-hero::after { height:48px; }
  .svc-hero__inner { padding:80px 24px 120px; }
  .agent-tabs { grid-template-columns:1fr 1fr; }
  .pricing__grid { grid-template-columns:1fr; gap:0; }
  .faq__layout { grid-template-columns:1fr; }
  .faq__sticky { position:static; }
}
</style>
