<template>
  <div class="ap">
    <div class="ap__head">
      <div>
        <h2 class="ap__title" v-html="agent.titleHtml" />
        <p class="ap__desc">{{ agent.desc }}</p>
        <div class="ap__tags">
          <span class="tag" v-for="t in agent.tags" :key="t">{{ t }}</span>
        </div>
      </div>
      <div class="ap__best">
        <div class="ap__best-title">Best For</div>
        <div class="ap__best-item" v-for="b in agent.bestFor" :key="b">
          <div class="ap__best-dot" />{{ b }}
        </div>
      </div>
    </div>

    <div class="ap__flow">
      <div class="ap__flow-label">How it works — {{ agent.flowLabel }}</div>
      <div class="ap__flow-steps">
        <template v-for="(fs, fi) in agent.flow" :key="fi">
          <div v-if="!fs.branch" class="fstep">
            <div class="fbox">
              <span class="fbox__icon">{{ fs.icon }}</span>
              <span class="fbox__label">{{ fs.label }}</span>
            </div>
            <div class="fstep__sub">{{ fs.sub }}</div>
          </div>
          <div v-else class="fbranch">
            <div class="fbranch__item">
              <span class="fbranch__arrow">↗</span>
              <div class="fbranch__box fbranch__box--pos">
                <div class="fbranch__label fbranch__label--pos">4 or 5 Stars — Happy Patient</div>
                <div class="fbranch__text">Google review link sent instantly</div>
              </div>
            </div>
            <div class="fbranch__item" style="margin-top:10px">
              <span class="fbranch__arrow">↘</span>
              <div class="fbranch__box fbranch__box--neg">
                <div class="fbranch__label fbranch__label--neg">1, 2 or 3 — Unhappy Patient</div>
                <div class="fbranch__text">Private alert to clinic manager</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="ap__caps">
      <div class="ap__cap" v-for="c in agent.caps" :key="c">{{ c }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({ agent:{ type:Object, required:true } })
</script>

<style scoped>
.ap { border:1px solid var(--stone3); border-radius:2px; overflow:hidden; background:var(--white); }

/* Head */
.ap__head {
  background:var(--ink);
  display:grid; grid-template-columns:1.1fr 1fr;
  gap:48px; padding:52px 52px; align-items:start;
}
.ap__title {
  font-family:var(--f-display);
  font-size:clamp(26px,3vw,42px); font-weight:300;
  color:var(--white); margin-bottom:18px; line-height:1.06;
}
:deep(.ap__title em) { font-style:italic; color:var(--rg); }
.ap__desc { font-size:15px; line-height:1.82; color:rgba(255,255,255,.5); margin-bottom:24px; }
.ap__tags { display:flex; flex-wrap:wrap; gap:8px; }

.ap__best {
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.07);
  border-radius:2px; padding:32px;
}
.ap__best-title {
  font-family:var(--f-ui); font-size:8px; font-weight:700;
  letter-spacing:.2em; text-transform:uppercase; color:var(--rg); margin-bottom:18px;
}
.ap__best-item { display:flex; align-items:flex-start; gap:10px; font-size:13px; color:rgba(255,255,255,.55); margin-bottom:11px; line-height:1.5; }
.ap__best-dot { width:4px; height:4px; border-radius:50%; background:var(--rg); flex-shrink:0; margin-top:6px; }

/* Flow */
.ap__flow { padding:44px 52px 0; background:var(--stone); }
.ap__flow-label {
  font-family:var(--f-ui); font-size:8px; font-weight:700;
  letter-spacing:.2em; text-transform:uppercase; color:var(--muted); margin-bottom:32px;
}
.ap__flow-steps { display:flex; align-items:flex-start; overflow-x:auto; padding-bottom:44px; gap:0; }

.fstep { flex:1; min-width:120px; display:flex; flex-direction:column; align-items:center; text-align:center; position:relative; }
.fstep:not(:last-child)::after {
  content:'→'; position:absolute; right:-16px; top:20px;
  font-size:15px; color:var(--rg); font-family:var(--f-display); font-weight:300;
}
.fbox {
  width:calc(100% - 28px); background:var(--white);
  border:1.5px solid var(--stone3); border-radius:2px;
  padding:14px 10px; margin-bottom:10px; min-height:70px;
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px;
  transition:border-color .2s, background .2s;
}
.fstep:hover .fbox { border-color:var(--rg); background:rgba(184,135,106,.04); }
.fbox__icon { font-size:19px; }
.fbox__label { font-family:var(--f-ui); font-size:10px; font-weight:700; letter-spacing:.02em; color:var(--ink); line-height:1.3; }
.fstep__sub { font-size:11px; color:var(--muted); line-height:1.45; padding:0 4px; }

.fbranch { flex:1.5; min-width:200px; display:flex; flex-direction:column; }
.fbranch__item { display:flex; align-items:center; }
.fbranch__arrow { width:28px; display:flex; align-items:center; justify-content:center; font-size:16px; color:var(--rg); flex-shrink:0; }
.fbranch__box { flex:1; border:1.5px solid var(--stone3); border-radius:2px; padding:12px 14px; background:var(--white); }
.fbranch__box--pos { border-color:var(--green-soft); background:rgba(46,125,94,.04); }
.fbranch__box--neg { border-color:var(--red-soft);   background:rgba(139,48,51,.04); }
.fbranch__label { font-family:var(--f-ui); font-size:8px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; margin-bottom:4px; }
.fbranch__label--pos { color:var(--green-soft); }
.fbranch__label--neg { color:var(--red-soft); }
.fbranch__text { font-family:var(--f-ui); font-size:11px; font-weight:700; color:var(--ink); }

/* Caps */
.ap__caps {
  padding:32px 52px 48px;
  border-top:1px solid var(--stone3);
  display:grid; grid-template-columns:1fr 1fr; gap:12px;
  background:var(--white);
}
.ap__cap { display:flex; align-items:center; gap:10px; font-size:14px; color:var(--text); }
.ap__cap::before { content:''; width:4px; height:4px; border-radius:50%; background:var(--rg); flex-shrink:0; }

@media (max-width:1080px) {
  .ap__head { grid-template-columns:1fr; gap:28px; padding:32px 24px; }
  .ap__flow { padding:32px 24px 0; }
  .ap__flow-steps { flex-direction:column; }
  .fstep::after { display:none !important; }
  .fbox { width:100%; max-width:280px; }
  .ap__caps { padding:24px 24px 36px; grid-template-columns:1fr; }
}
</style>
