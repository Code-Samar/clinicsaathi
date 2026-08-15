<template>
<div>
<section class="hero-modern">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-copy-block">
        <span class="eyebrow-pill">AI PATIENT OPERATIONS</span>
        <h1>Your <span>AI-powered</span><br>patient operations team.</h1>
        <p>Aipitals gives clinics and diagnostic centres AI agents that handle repetitive patient communication and coordination 24/7 — from the first enquiry to follow-up.</p>
        <div class="hero-actions">
          <RouterLink class="btn btn-primary btn-lg rounded-pill px-4" to="/contact">Book a Demo <i class="bi bi-arrow-right"></i></RouterLink>
          <RouterLink class="btn btn-outline-primary btn-lg rounded-pill px-4" to="/how-it-works">See How Aipitals Works <i class="bi bi-chevron-right"></i></RouterLink>
        </div>
        <div class="hero-trust-row"><span><i class="bi bi-check2-circle"></i> Built for clinics & diagnostic centres</span><span><i class="bi bi-shield-check"></i> Human oversight by design</span></div>
        <div class="benefit-grid">
          <div v-for="b in benefits" :key="b.title" class="benefit"><div class="benefit-icon"><i :class="b.icon"></i></div><strong>{{b.title}}</strong><p>{{b.text}}</p></div>
        </div>
      </div>
      <div class="hero-media">
        <img src="/assets/doctor-hero.jpg" alt="Healthcare professional using Aipitals">
        <div class="hero-assistant-note"><i class="bi bi-chat-heart"></i><div><strong>AI patient operations</strong><span>Available across supported workflows</span></div></div>
      </div>
    </div>
  </div>
</section>

<section class="trust-band"><div class="container"><span>BUILT FOR MODERN HEALTHCARE</span><div><b>Clinics</b><b>Diagnostic Centres</b><b>Pathology Labs</b><b>Imaging Centres</b></div></div></section>

<section class="section products-preview">
  <div class="container">
    <div class="section-heading center"><span class="eyebrow-pill">OUR AI PRODUCTS</span><h2>Five AI Systems. One Complete <span>Patient Operations</span> Platform.</h2><p>From the first enquiry to follow-up and feedback, Aipitals handles repetitive communication so your team can focus on care.</p></div>
    <div class="product-strip">
      <RouterLink v-for="(p,i) in products" :key="p.slug" :to="'/products/'+p.slug" class="product-mini">
        <div class="mini-icon" :class="'c'+i"><i :class="['bi',p.icon]"></i></div><span class="mini-num">0{{i+1}}</span><h3>{{p.name}}</h3><p>{{p.short}}</p><i class="bi bi-arrow-up-right mini-arrow"></i>
      </RouterLink>
    </div>
    <div class="center-link"><RouterLink class="arrow-link" to="/products">Explore all products <i class="bi bi-arrow-right"></i></RouterLink></div>
  </div>
</section>

<section class="section dark-section">
 <div class="container">
  <div class="split-heading light"><div><span class="eyebrow">PATIENT JOURNEY</span><h2>Every interaction.<br>One intelligent layer.</h2></div><p>Aipitals connects the repetitive patient-facing workflows that happen before, during and after a visit.</p></div>
  <div class="journey-visual">
   <div v-for="(s,i) in journey" :key="s.t" class="journey-card-new"><span>{{String(i+1).padStart(2,'0')}}</span><i :class="s.i"></i><strong>{{s.t}}</strong><small>{{s.p}}</small></div>
  </div>
 </div>
</section>

<section class="section">
 <div class="container">
  <div class="section-heading"><span class="eyebrow-pill">WHY AIPITALS</span><h2>Built around the way patients actually move through healthcare.</h2></div>
  <div class="why-grid">
   <div v-for="w in why" :key="w.t" class="why-card"><span>{{w.n}}</span><i :class="w.i"></i><h3>{{w.t}}</h3><p>{{w.p}}</p></div>
  </div>
 </div>
</section>

<section class="section soft"><div class="container"><div class="clinic-panel">
 <div><span class="eyebrow-pill">CLINIC SOLUTION</span><h2>AI that works around your clinic.</h2><p>Your clinic already has doctors, receptionists and clinical systems. Aipitals adds an intelligent patient-operations layer without forcing you to replace everything you already use.</p><RouterLink class="arrow-link" to="/solutions/clinics">Explore clinic solution <i class="bi bi-arrow-right"></i></RouterLink></div>
 <div class="system-orbit"><div class="orbit-core"><img src="/assets/aipitals-logo.png" alt="Aipitals"></div><span>WhatsApp</span><span>Appointments</span><span>Doctor schedules</span><span>Reminders</span><span>Feedback</span></div>
 </div></div></section>

<section class="section"><div class="container"><div class="section-heading center"><span class="eyebrow-pill">HOW IT WORKS</span><h2>Start in days, not months.</h2><p>Connect. Configure. Launch. Improve.</p></div><div class="process-grid"><div v-for="(s,i) in process" :key="s.t"><span>0{{i+1}}</span><h3>{{s.t}}</h3><p>{{s.p}}</p></div></div></div></section>

<section class="section safety-section"><div class="container"><div class="safety-banner"><div class="safety-icon"><i class="bi bi-shield-check"></i></div><div><span class="eyebrow-pill">RESPONSIBLE HEALTHCARE AUTOMATION</span><h2>AI when it makes sense. Humans when they matter.</h2><p>Aipitals automates repetitive conversations — not clinical judgment. Complex questions, unusual requests, complaints and sensitive situations can be routed to the appropriate team member.</p></div><RouterLink class="btn btn-outline-light rounded-pill px-4" to="/how-it-works">See how it works</RouterLink></div></div></section>

<CTASection/>
</div>
</template>
<script setup>
import {products} from '../data/products'
import CTASection from '../components/CTASection.vue'
const benefits=[
 {title:'Respond 24/7',text:'Never miss a patient conversation',icon:'bi bi-chat-square-text'},
 {title:'More Appointments',text:'Reduce no-shows and last-minute gaps',icon:'bi bi-calendar2-check'},
 {title:'Lower Staff Load',text:'Automate repetitive patient queries',icon:'bi bi-people'},
 {title:'Happier Patients',text:'Better communication at every step',icon:'bi bi-heart'}
]
const journey=[
 {t:'Enquire',p:'Patient asks a question.',i:'bi bi-chat-dots'},{t:'Book',p:'Schedule an appointment.',i:'bi bi-calendar-check'},
 {t:'Prepare',p:'Receive approved instructions.',i:'bi bi-clipboard-check'},{t:'Attend',p:'Get timely reminders.',i:'bi bi-person-check'},
 {t:'Follow Up',p:'Stay connected after the visit.',i:'bi bi-arrow-repeat'},{t:'Return',p:'Receive appropriate recall.',i:'bi bi-arrow-right-circle'}
]
const why=[
 {n:'01',t:'Patient-first',p:'Every workflow is designed around making healthcare communication easier for patients.',i:'bi bi-heart-pulse'},
 {n:'02',t:'Staff-friendly',p:'Staff can take over whenever a conversation needs human attention.',i:'bi bi-person-check'},
 {n:'03',t:'Always available',p:'Supported actions can continue outside normal front-desk hours.',i:'bi bi-clock-history'}
]
const process=[
 {t:'Connect',p:'Connect Aipitals to the workflows and systems your clinic already uses.'},
 {t:'Configure',p:'Add doctors, services, schedules, FAQs and approved communication rules.'},
 {t:'Launch',p:'Begin handling supported patient interactions while your team stays in control.'},
 {t:'Improve',p:'Review outcomes and continuously improve workflows.'}
]
</script>