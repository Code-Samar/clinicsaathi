<template>
<section class="page-hero premium"><div class="container"><span class="eyebrow-pill">RESOURCES</span><h1>Practical ideas for<br><span>better patient operations.</span></h1><p>Explore the workflows, principles and product thinking behind Aipitals. More resources can be added as the company grows.</p></div></section>
<section class="section"><div class="container"><div class="resource-feature"><div><span class="eyebrow-pill">START HERE</span><h2>What is AI Patient Operations?</h2><p>Aipitals is the AI layer around an existing healthcare business. It handles repetitive patient communication and coordination — so staff can focus on patients, not repetitive messages and calls.</p><RouterLink class="arrow-link" to="/about">Read about Aipitals <i class="bi bi-arrow-right"></i></RouterLink></div><div class="resource-art"><div class="resource-circle"><img src="/assets/aipitals-logo.png" alt="Aipitals"></div></div></div></div></section>
<section class="section soft"><div class="container"><div class="section-heading"><span class="eyebrow-pill">COMING NEXT</span><h2>More resources, built around real workflows.</h2></div><div class="resource-grid"><div v-for="r in resources" :key="r.t" class="resource-card"><span>{{r.tag}}</span><i :class="r.i"></i><h3>{{r.t}}</h3><p>{{r.p}}</p><RouterLink to="/contact">Talk to us <i class="bi bi-arrow-right"></i></RouterLink></div></div></div></section>
</template>
<script setup>
const resources=[
 {tag:'WORKFLOWS',t:'Reducing repetitive front-desk work',p:'Where clinics can start automating patient communication without replacing their existing systems.',i:'bi bi-chat-square-text'},
 {tag:'DIAGNOSTICS',t:'Designing a better diagnostic journey',p:'How enquiry, booking, preparation, collection and report communication can work as one flow.',i:'bi bi-diagram-3'},
 {tag:'RESPONSIBLE AI',t:'Keeping humans in control',p:'Why escalation paths and approved information matter in healthcare automation.',i:'bi bi-shield-check'}
]
</script>