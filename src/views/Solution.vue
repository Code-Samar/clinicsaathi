<template>
<div v-if="isClinic">
<section class="page-hero solution-hero"><div class="container"><span class="eyebrow-pill">FOR CLINICS</span><h1>AI that works<br><span>around your clinic.</span></h1><p>Your doctors and reception team stay focused on patients while Aipitals handles repetitive communication and coordination.</p><RouterLink class="btn btn-primary btn-lg rounded-pill px-4" to="/contact">Automate My Clinic <i class="bi bi-arrow-up-right"></i></RouterLink></div></section>
<section class="section"><div class="container"><div class="section-heading"><span class="eyebrow-pill">CLINIC WORKFLOWS</span><h2>Take repetitive work off the front desk.</h2></div><div class="solution-grid"><div v-for="x in clinic" :key="x.t"><i :class="x.i"></i><h3>{{x.t}}</h3><p>{{x.p}}</p></div></div></div></section>
</div>
<div v-else>
<section class="page-hero solution-hero"><div class="container"><span class="eyebrow-pill">FOR DIAGNOSTIC CENTRES</span><h1>A smarter diagnostic<br><span>patient journey.</span></h1><p>From the first test enquiry to sample collection, report delivery and post-report coordination, keep patients informed at every stage.</p><RouterLink class="btn btn-primary btn-lg rounded-pill px-4" to="/contact">Build Your Diagnostic Workflow <i class="bi bi-arrow-up-right"></i></RouterLink></div></section>
<section class="section"><div class="container"><div class="diagnostic-flow"><div v-for="(x,i) in diagnostic" :key="x" class="diagnostic-step"><span>0{{i+1}}</span><strong>{{x}}</strong><i v-if="i<6" class="bi bi-arrow-right"></i></div></div></div></section>
</div>
<CTASection/>
</template>
<script setup>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import CTASection from '../components/CTASection.vue'
const route=useRoute()
const isClinic=computed(()=>route.params.type==='clinics')
const clinic=[
 {t:'WhatsApp reception',p:'Answer questions, share clinic information and help patients book, cancel or reschedule.',i:'bi bi-chat-dots'},
 {t:'Appointment management',p:'Support doctor availability, confirmations and scheduling workflows.',i:'bi bi-calendar2-check'},
 {t:'Patient recall',p:'Keep patients connected with upcoming appointments and configured follow-ups.',i:'bi bi-bell'},
 {t:'Human escalation',p:'Route complex conversations and sensitive situations to staff.',i:'bi bi-person-check'},
 {t:'Patient feedback',p:'Collect experience feedback and surface issues that need attention.',i:'bi bi-star'}
]
const diagnostic=['Test Enquiry','Booking','Preparation','Sample Collection','Testing','Report Ready','Report Delivered','Doctor Appointment']
</script>