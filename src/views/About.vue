<template>
  <section class="page-hero"><div class="container"><span class="eyebrow">ABOUT AIPITALS</span><h1>We believe healthcare communication should be simpler.</h1><p>Aipitals exists to automate repetitive patient communication so healthcare teams can spend more time on the work that requires people.</p></div></section>
  <section class="section"><div class="container"><div class="row g-5"><div class="col-lg-6"><span class="eyebrow">OUR MISSION</span><h2>Make every healthcare business easier to operate and every patient easier to serve.</h2></div><div class="col-lg-6"><p>A patient wants to book an appointment. Another wants to reschedule. Someone needs preparation instructions before a test. Someone else wants to know whether their report is ready.</p><p>These interactions matter, but they don’t all need to be handled manually. Aipitals builds AI agents that take care of these repetitive workflows so healthcare teams can spend more time on the work that requires people.</p></div></div></div></section>
  <section class="section soft"><div class="container"><div class="section-heading"><span class="eyebrow">OUR VALUES</span><h2>Technology should remove friction, not add it.</h2></div><div class="row g-3 mt-4"><div v-for="v in values" :key="v.t" class="col-md-6 col-lg-4"><div class="value-card"><i :class="v.i"></i><h3>{{v.t}}</h3><p>{{v.p}}</p></div></div></div></div></section>
  <CTASection />
</template>
<script setup>
import CTASection from '../components/CTASection.vue'
const values = [
 {t:'Patient First',p:'Technology should make the patient experience simpler.',i:'bi bi-heart-pulse'},
 {t:'Human in Control',p:'AI should support healthcare teams, not replace clinical judgment.',i:'bi bi-person-check'},
 {t:'Simplicity',p:'Complex technology should feel simple to use.',i:'bi bi-stars'},
 {t:'Reliability',p:'Healthcare workflows require consistency and clear escalation.',i:'bi bi-check2-circle'},
 {t:'Continuous Improvement',p:'Every workflow should become better through real-world feedback.',i:'bi bi-graph-up-arrow'}
]
</script>