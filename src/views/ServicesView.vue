<template>
  <!-- HERO -->
  <section class="services-hero grid-texture">
    <div class="container services-hero__inner">
      <div class="eyebrow au">AI Agents</div>
      <h1 class="display-lg au au1" style="color:var(--white); max-width:760px; margin-bottom:20px">
        Four agents.<br>One WhatsApp number.<br><em>Zero extra staff.</em>
      </h1>
      <p class="body-lg au au2" style="color:rgba(255,255,255,.45); max-width:560px">
        Each agent targets a specific revenue leak in your clinic. Deploy one or all four —
        they work together seamlessly on your existing number.
      </p>
    </div>
  </section>

  <!-- AGENTS SECTION -->
  <section class="services-main">
    <div class="container">

      <!-- Tabs -->
      <div class="agent-tabs">
        <div
          v-for="(ag, i) in agentPanels"
          :key="i"
          :class="['agent-tab', { active: activeAgent === i }]"
          @click="activeAgent = i"
        >
          <span class="agent-tab__icon">{{ ag.icon }}</span>
          <span class="agent-tab__num">Agent {{ ag.num }}</span>
          <span class="agent-tab__name">{{ ag.name }}</span>
        </div>
      </div>

      <!-- Panel -->
      <Transition name="panel" mode="out-in">
        <AgentPanel :key="activeAgent" :agent="currentAgent" />
      </Transition>

    </div>
  </section>

  <!-- RECOMMENDATION CTA -->
  <CtaStrip
    title="Not sure which agent<br><em>fits your clinic?</em>"
    sub="Book a 15-minute demo — we'll give you an honest recommendation."
    cta="Get a Recommendation →"
  />

  <!-- PRICING -->
  <section class="pricing grid-texture">
    <div class="container">
      <div class="pricing__intro">
        <div class="eyebrow eyebrow--light" style="justify-content:center">Pricing</div>
        <h2 class="display-md" style="color:var(--white); margin-bottom:12px">
          Simple, transparent pricing.<br><em>No surprises.</em>
        </h2>
        <p class="pricing__intro-sub">
          Month-to-month. Cancel anytime. All plans include setup, onboarding, and Mumbai-based support.
        </p>
      </div>
      <div class="pricing__grid">
        <div
          v-for="plan in pricingPlans"
          :key="plan.plan"
          :class="['pricing-card', 'sr', { 'pricing-card--featured': plan.featured }]"
        >
          <div v-if="plan.badge" class="pricing-card__badge">{{ plan.badge }}</div>
          <div class="pricing-card__plan">{{ plan.plan }}</div>
          <div class="pricing-card__title">{{ plan.title }}</div>
          <p class="pricing-card__tagline">{{ plan.tagline }}</p>
          <div class="pricing-card__price">{{ plan.price }}</div>
          <div class="pricing-card__period">{{ plan.period }}</div>
          <div class="pricing-card__divider" />
          <div class="pricing-card__features">
            <div v-for="f in plan.features" :key="f" class="pricing-card__feature">
              <div class="pricing-card__feature-dot">✓</div>{{ f }}
            </div>
          </div>
          <div class="pricing-cta">
            <RouterLink
              to="/contact"
              :class="['btn', plan.featured ? 'btn--pricing-featured' : 'btn--pricing-outline']"
            >{{ plan.cta }}</RouterLink>
          </div>
        </div>
      </div>
      <p class="pricing-note">All prices are exclusive of GST · Month-to-month billing · No lock-in · Cancel anytime</p>
    </div>
  </section>

  <!-- FAQ -->
  <section class="faq">
    <div class="container">
      <div class="eyebrow eyebrow--muted sr">FAQ</div>
      <h2 class="display-md sr">Questions clinics<br><em>always ask us.</em></h2>
      <div class="faq__grid">
        <div class="faq__sticky sr">
          <p class="faq__sticky-sub">
            Can't find your answer here? Drop us a message — we typically respond within 10 minutes.
          </p>
          <RouterLink to="/contact" class="btn btn--gold">Ask Us Directly →</RouterLink>
        </div>
        <div class="faq__items">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            :class="['faq-item', { open: openFaq === i }]"
            @click="openFaq = openFaq === i ? -1 : i"
          >
            <div class="faq-item__q">
              <div class="faq-item__q-text">{{ faq.q }}</div>
              <div class="faq-item__icon">+</div>
            </div>
            <div class="faq-item__a">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <CtaStrip
    title="Ready to stop losing<br><em>patients to silence?</em>"
    sub="Free demo. No contract. Live in 72 hours."
    cta="Book Free Demo →"
    :show-wa="true"
  />
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
/* ── HERO ─────────────────────────────────────── */
.services-hero {
  min-height: 72vh; background: var(--ink);
  display: flex; align-items: flex-end; padding-top: 76px;
  position: relative; overflow: hidden;
}
.services-hero::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
  height: 80px; background: var(--cream);
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}
.services-hero__inner {
  padding: 100px 60px 140px; position: relative; z-index: 2;
}

/* ── AGENTS ────────────────────────────────────── */
.services-main { background: var(--cream); padding: 80px 0 120px; }

.agent-tabs {
  display: grid; grid-template-columns: repeat(4,1fr);
  gap: 10px; margin-bottom: 36px;
}
.agent-tab {
  padding: 24px 20px; background: var(--white);
  border: 1.5px solid var(--cream3); border-radius: 2px;
  cursor: pointer; transition: all .25s var(--ease-out); text-align: center;
}
.agent-tab:hover { border-color: rgba(196,151,60,.4); }
.agent-tab.active { background: var(--ink); border-color: var(--ink); }
.agent-tab__icon { font-size: 26px; display: block; margin-bottom: 10px; }
.agent-tab__num {
  font-family: var(--f-ui); font-size: 9px; font-weight: 700;
  letter-spacing: .14em; text-transform: uppercase;
  color: var(--muted); display: block; margin-bottom: 5px; transition: color .2s;
}
.agent-tab.active .agent-tab__num { color: var(--gold); }
.agent-tab__name {
  font-family: var(--f-ui); font-size: 11px; font-weight: 700;
  color: var(--text); line-height: 1.35; transition: color .2s;
}
.agent-tab.active .agent-tab__name { color: var(--white); }

/* Panel transition */
.panel-enter-active { animation: fadeUp .35s var(--ease-out) both; }
.panel-leave-active { animation: fadeUp .2s var(--ease-out) reverse both; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── PRICING ───────────────────────────────────── */
.pricing { background: var(--ink2); padding: 120px 0; position: relative; overflow: hidden; }
.pricing::before {
  content: ''; position: absolute; top: -1px; left: 0; right: 0;
  height: 60px; background: var(--cream);
  clip-path: polygon(0 0, 100% 100%, 0 100%);
}
.pricing__intro { text-align: center; margin-bottom: 72px; }
.pricing__intro-sub {
  font-size: 16px; color: rgba(255,255,255,.4);
  max-width: 460px; margin: 0 auto; line-height: 1.75;
}
.pricing__grid {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 2px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.04);
}
.pricing-card {
  background: var(--ink3); padding: 52px 44px;
  position: relative; overflow: hidden; display: flex; flex-direction: column;
  transition: background .3s;
}
.pricing-card:hover { background: #1a2e42; }
.pricing-card--featured { background: var(--gold); }
.pricing-card--featured:hover { background: var(--gold2); }

.pricing-card__badge {
  position: absolute; top: 20px; right: 20px;
  font-family: var(--f-ui); font-size: 9px; font-weight: 800;
  letter-spacing: .14em; text-transform: uppercase;
  background: var(--ink); color: var(--gold); padding: 5px 12px; border-radius: 2px;
}
.pricing-card--featured .pricing-card__badge { background: rgba(0,0,0,.15); color: rgba(9,20,31,.7); }

.pricing-card__plan {
  font-family: var(--f-ui); font-size: 10px; font-weight: 700;
  letter-spacing: .16em; text-transform: uppercase; color: var(--gold); margin-bottom: 12px;
}
.pricing-card--featured .pricing-card__plan { color: rgba(9,20,31,.6); }

.pricing-card__title {
  font-family: var(--f-display); font-size: 26px; font-weight: 500;
  color: var(--white); margin-bottom: 8px; line-height: 1.15;
  white-space: pre-line;
}
.pricing-card--featured .pricing-card__title { color: var(--ink); }

.pricing-card__tagline { font-size: 13px; color: rgba(255,255,255,.45); margin-bottom: 32px; line-height: 1.6; }
.pricing-card--featured .pricing-card__tagline { color: rgba(9,20,31,.55); }

.pricing-card__price {
  font-family: var(--f-display); font-size: 52px; font-weight: 300;
  color: var(--white); line-height: .9; letter-spacing: -.03em; margin-bottom: 4px;
}
.pricing-card--featured .pricing-card__price { color: var(--ink); }

.pricing-card__period { font-size: 13px; color: rgba(255,255,255,.35); margin-bottom: 36px; }
.pricing-card--featured .pricing-card__period { color: rgba(9,20,31,.45); }

.pricing-card__divider { width: 32px; height: 1px; background: rgba(255,255,255,.12); margin-bottom: 28px; }
.pricing-card--featured .pricing-card__divider { background: rgba(0,0,0,.15); }

.pricing-card__features { flex: 1; display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
.pricing-card__feature { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: rgba(255,255,255,.65); line-height: 1.5; }
.pricing-card--featured .pricing-card__feature { color: rgba(9,20,31,.7); }
.pricing-card__feature-dot {
  width: 18px; height: 18px; border-radius: 50%;
  background: rgba(196,151,60,.15); color: var(--gold);
  font-size: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;
}
.pricing-card--featured .pricing-card__feature-dot { background: rgba(0,0,0,.1); color: var(--ink); }

.pricing-cta { margin-top: auto; }
.btn--pricing-featured {
  background: var(--ink); color: var(--white); width: 100%; justify-content: center;
  display: flex;
}
.btn--pricing-featured:hover { background: #1a2f44; transform: translateY(-2px); }
.btn--pricing-outline {
  background: transparent; color: rgba(255,255,255,.65);
  border: 1.5px solid rgba(255,255,255,.15); width: 100%; justify-content: center;
  display: flex;
}
.btn--pricing-outline:hover { border-color: rgba(255,255,255,.4); color: var(--white); }

.pricing-note {
  text-align: center; margin-top: 40px;
  font-family: var(--f-ui); font-size: 10px; font-weight: 600;
  letter-spacing: .06em; color: rgba(255,255,255,.2);
}

/* ── FAQ ───────────────────────────────────────── */
.faq { background: var(--cream2); padding: 120px 0; }
.faq__grid {
  display: grid; grid-template-columns: 1fr 1.6fr;
  gap: 80px; align-items: start; margin-top: 72px;
}
.faq__sticky { position: sticky; top: 100px; }
.faq__sticky-sub { font-size: 15px; color: var(--muted); line-height: 1.75; margin-bottom: 32px; }
.faq__items { display: flex; flex-direction: column; gap: 2px; }

.faq-item {
  background: var(--white); border: 1px solid var(--cream3);
  border-radius: 2px; overflow: hidden; transition: border-color .25s;
}
.faq-item.open { border-color: rgba(196,151,60,.3); }
.faq-item__q {
  padding: 24px 32px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  cursor: pointer; transition: background .2s;
}
.faq-item__q:hover, .faq-item.open .faq-item__q { background: var(--cream); }
.faq-item__q-text {
  font-family: var(--f-ui); font-size: 13px; font-weight: 700;
  letter-spacing: .03em; color: var(--ink); line-height: 1.4;
}
.faq-item__icon {
  width: 28px; height: 28px; border-radius: 50%;
  background: var(--cream3); display: flex; align-items: center; justify-content: center;
  font-size: 18px; color: var(--muted); flex-shrink: 0;
  transition: background .2s, transform .3s var(--ease-out), color .2s;
}
.faq-item.open .faq-item__icon { background: var(--gold); color: var(--ink); transform: rotate(45deg); }
.faq-item__a {
  max-height: 0; overflow: hidden;
  padding: 0 32px;
  transition: max-height .4s var(--ease-out), padding .3s;
  font-size: 14px; line-height: 1.8; color: var(--muted);
}
.faq-item.open .faq-item__a { max-height: 300px; padding: 0 32px 24px; }

/* ── RESPONSIVE ────────────────────────────────── */
@media (max-width: 1080px) {
  .services-hero::after { height: 48px; }
  .services-hero__inner { padding: 80px 28px 120px; }
  .agent-tabs { grid-template-columns: repeat(2,1fr); }
  .pricing__grid { grid-template-columns: 1fr; gap: 0; }
  .faq__grid { grid-template-columns: 1fr; }
  .faq__sticky { position: static; }
}
@media (max-width: 640px) {
  .agent-tabs { grid-template-columns: 1fr 1fr; }
}
</style>
