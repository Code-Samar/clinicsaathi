<template>
  <div class="agent-panel">
    <!-- Head -->
    <div class="agent-panel__head">
      <div>
        <h2 class="agent-panel__title" v-html="agent.titleHtml" />
        <p class="agent-panel__desc">{{ agent.desc }}</p>
        <div class="agent-panel__tags">
          <span class="tag" v-for="t in agent.tags" :key="t">{{ t }}</span>
        </div>
      </div>
      <div class="best-for">
        <div class="best-for__title">Best For</div>
        <div class="best-for__item" v-for="b in agent.bestFor" :key="b">
          <div class="best-for__dot" />{{ b }}
        </div>
      </div>
    </div>

    <!-- Flow -->
    <div class="flow-section">
      <div class="flow-label">How it works — {{ agent.flowLabel }}</div>
      <div class="flow-steps">
        <template v-for="(fs, fi) in agent.flow" :key="fi">
          <div v-if="!fs.branch" class="flow-step">
            <div class="flow-box">
              <div class="flow-box__icon">{{ fs.icon }}</div>
              <div class="flow-box__label">{{ fs.label }}</div>
            </div>
            <div class="flow-step__sub">{{ fs.sub }}</div>
          </div>
          <div v-else class="flow-branch">
            <div class="flow-branch__item">
              <div class="flow-branch__arrow">↗</div>
              <div class="flow-branch__box pos">
                <div class="flow-branch__label pos">4 or 5 Stars — Happy Patient</div>
                <div class="flow-branch__text">Google review link sent instantly</div>
              </div>
            </div>
            <div class="flow-branch__item" style="margin-top:10px">
              <div class="flow-branch__arrow">↘</div>
              <div class="flow-branch__box neg">
                <div class="flow-branch__label neg">1, 2 or 3 — Unhappy Patient</div>
                <div class="flow-branch__text">Private alert to clinic manager</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Capabilities -->
    <div class="panel-caps">
      <div class="cap" v-for="c in agent.caps" :key="c">{{ c }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({ agent: { type: Object, required: true } })
</script>

<style scoped>
.agent-panel {
  border: 1px solid var(--cream3); border-radius: 2px;
  overflow: hidden; background: var(--white);
}
.agent-panel__head {
  background: var(--ink);
  display: grid; grid-template-columns: 1.15fr 1fr;
  gap: 48px; padding: 52px 56px; align-items: start;
}
.agent-panel__title {
  font-family: var(--f-display);
  font-size: clamp(28px, 3.2vw, 44px); font-weight: 400;
  color: var(--white); margin-bottom: 18px; line-height: 1.08;
}
:deep(.agent-panel__title em) { font-style: italic; color: var(--gold); }
.agent-panel__desc { font-size: 15px; line-height: 1.8; color: rgba(255,255,255,.55); margin-bottom: 24px; }
.agent-panel__tags { display: flex; flex-wrap: wrap; gap: 8px; }

.best-for {
  background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
  border-radius: 2px; padding: 32px;
}
.best-for__title {
  font-family: var(--f-ui); font-size: 9px; font-weight: 700;
  letter-spacing: .16em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px;
}
.best-for__item { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: rgba(255,255,255,.6); margin-bottom: 11px; line-height: 1.5; }
.best-for__dot { width: 5px; height: 5px; border-radius: 50%; background: var(--gold); flex-shrink: 0; margin-top: 5px; }

/* Flow */
.flow-section { padding: 44px 56px 0; background: var(--cream); }
.flow-label {
  font-family: var(--f-ui); font-size: 9px; font-weight: 700;
  letter-spacing: .18em; text-transform: uppercase; color: var(--muted); margin-bottom: 32px;
}
.flow-steps { display: flex; align-items: flex-start; overflow-x: auto; padding-bottom: 44px; }
.flow-step { flex: 1; min-width: 120px; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; }
.flow-step:not(:last-child)::after {
  content: '→'; position: absolute; right: -16px; top: 19px;
  font-size: 16px; color: var(--gold); font-family: var(--f-display); font-weight: 300;
}
.flow-box {
  width: calc(100% - 32px); background: var(--white); border: 1.5px solid var(--cream3);
  border-radius: 2px; padding: 14px 10px; margin-bottom: 10px; min-height: 72px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
  transition: border-color .2s, background .2s;
}
.flow-step:hover .flow-box { border-color: var(--gold); background: rgba(196,151,60,.04); }
.flow-box__icon { font-size: 20px; }
.flow-box__label { font-family: var(--f-ui); font-size: 10px; font-weight: 700; letter-spacing: .02em; color: var(--ink); line-height: 1.3; }
.flow-step__sub { font-size: 11px; color: var(--muted); line-height: 1.45; padding: 0 4px; }

.flow-branch { flex: 1.5; min-width: 200px; display: flex; flex-direction: column; }
.flow-branch__item { display: flex; align-items: center; }
.flow-branch__arrow { width: 32px; display: flex; align-items: center; justify-content: center; font-size: 16px; color: var(--gold); font-family: var(--f-display); flex-shrink: 0; }
.flow-branch__box { flex: 1; border: 1.5px solid var(--cream3); border-radius: 2px; padding: 12px 14px; background: var(--white); }
.flow-branch__box.pos { border-color: var(--green-soft); background: rgba(46,125,94,.04); }
.flow-branch__box.neg { border-color: var(--red-soft);   background: rgba(139,48,51,.04); }
.flow-branch__label { font-family: var(--f-ui); font-size: 8px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 4px; }
.flow-branch__label.pos { color: var(--green-soft); }
.flow-branch__label.neg { color: var(--red-soft); }
.flow-branch__text { font-family: var(--f-ui); font-size: 11px; font-weight: 700; color: var(--ink); }

/* Caps */
.panel-caps {
  padding: 36px 56px 52px; border-top: 1px solid var(--cream3);
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: var(--white);
}
.cap { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text); }
.cap::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--gold); flex-shrink: 0; }

@media (max-width: 1080px) {
  .agent-panel__head { grid-template-columns: 1fr; gap: 32px; padding: 36px 28px; }
  .flow-section { padding: 32px 28px 0; }
  .flow-steps { flex-direction: column; }
  .flow-step::after { display: none !important; }
  .flow-box { width: 100%; max-width: 280px; }
  .panel-caps { padding: 28px 28px 40px; grid-template-columns: 1fr; }
}
</style>
