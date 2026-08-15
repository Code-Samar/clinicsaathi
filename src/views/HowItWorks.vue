<template>
<section class="page-hero premium"><div class="container"><span class="eyebrow-pill">HOW IT WORKS</span><h1>Start in days,<br><span>not months.</span></h1><p>Connect Aipitals to your workflows, configure approved information, launch supported interactions and continuously improve.</p></div></section>
<section class="section"><div class="container"><div class="how-grid"><div v-for="(s,i) in steps" :key="s.t" class="how-card"><div class="how-number">0{{i+1}}</div><div class="how-icon"><i :class="s.i"></i></div><h2>{{s.t}}</h2><p>{{s.p}}</p><div class="how-line" v-if="i<3"></div></div></div></div></section>
<section class="section dark-section"><div class="container"><div class="split-heading light"><div><span class="eyebrow">HUMAN HANDOFF</span><h2>AI when it makes sense.<br>Humans when they matter.</h2></div><p>Aipitals is designed to automate repetitive conversations — not replace human judgment.</p></div><div class="handoff-grid"><div v-for="x in handoffs" :key="x" class="handoff-card"><i class="bi bi-arrow-up-right"></i><span>{{x}}</span></div></div></div></section>
<section class="section"><div class="container"><div class="security-panel"><div><span class="eyebrow-pill">RESPONSIBLE HEALTHCARE</span><h2>Built for responsible automation.</h2><p>Human oversight, configurable workflows, approved information sources, access controls, auditability, secure data handling and clear escalation paths.</p></div><div class="security-list"><span v-for="s in security" :key="s"><i class="bi bi-check-circle-fill"></i>{{s}}</span></div></div></div></section>
</template>
<script setup>
const steps=[
 {t:'Connect',p:'Connect Aipitals to the workflows and systems your clinic or diagnostic centre already uses.',i:'bi bi-link-45deg'},
 {t:'Configure',p:'Add doctors, services, schedules, FAQs, communication rules and approved healthcare protocols.',i:'bi bi-sliders2'},
 {t:'Launch',p:'Aipitals begins handling supported patient interactions while your team remains in control.',i:'bi bi-rocket-takeoff'},
 {t:'Improve',p:'Review conversations, outcomes and patient feedback and continuously improve workflows.',i:'bi bi-graph-up-arrow'}
]
const handoffs=['Complex patient questions','Unusual requests','Complaints','Sensitive situations','Requests outside configured workflows']
const security=['Human oversight','Configurable workflows','Approved information sources','Access controls','Auditability','Secure data handling','Clear escalation paths']
</script>