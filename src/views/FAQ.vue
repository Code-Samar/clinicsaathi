<template>
  <section class="page-hero"><div class="container"><span class="eyebrow">FAQ</span><h1>Questions, answered.</h1><p>Clear information about Aipitals, its workflows and how human oversight works.</p></div></section>
  <section class="section"><div class="container faq-wrap"><FAQAccordion :items="items" /></div></section>
</template>
<script setup>
import FAQAccordion from '../components/FAQAccordion.vue'
const items = [
{q:'What is Aipitals?',a:'Aipitals is an AI patient-operations platform for clinics and diagnostic centres. Its AI agents automate repetitive patient communication and coordination workflows.'},
{q:'Does Aipitals replace our existing software?',a:'No. Aipitals is designed to work alongside your existing healthcare workflows and systems wherever supported.'},
{q:'Does Aipitals replace receptionists?',a:'No. Aipitals automates repetitive tasks and allows staff to focus on interactions that require human attention.'},
{q:'Can patients talk to Aipitals 24/7?',a:'Supported AI workflows can operate outside normal front-desk hours, depending on your configuration and communication channels.'},
{q:'Can Aipitals work on WhatsApp?',a:'Yes. The WhatsApp AI Receptionist is designed to handle supported patient conversations through WhatsApp.'},
{q:'Can it book appointments?',a:'Yes, when connected to a supported scheduling workflow.'},
{q:'Can patients cancel or reschedule?',a:'Yes, supported appointment workflows can allow patients to cancel or reschedule.'},
{q:'Can staff take over a conversation?',a:'Yes. Human handoff should be available for conversations that require staff intervention.'},
{q:'Can Aipitals handle diagnostic bookings?',a:'Yes. The Diagnostic Patient OS is designed to coordinate the patient journey from enquiry and booking through preparation, collection, testing and report delivery.'},
{q:'Can it support home sample collection?',a:'Yes, where the diagnostic centre has a supported home-collection workflow.'},
{q:'Can Aipitals interpret medical reports?',a:'Aipitals should not independently diagnose or provide unsupervised medical interpretation. Its role is to communicate configured information and coordinate appropriate next steps.'},
{q:'Can the AI make up preparation instructions?',a:'No. Preparation guidance should be configured from the diagnostic centre’s approved protocols and knowledge base. Questions outside that information should be escalated to staff.'},
{q:'Can Aipitals generate Google reviews?',a:'No. Aipitals helps collect patient feedback and can direct patients to the clinic’s Google review page to leave an authentic review.'},
{q:'Can negative reviews be hidden?',a:'Aipitals should not manipulate or suppress genuine patient feedback. Negative experiences can instead be routed to the appropriate staff member for follow-up.'}
]
</script>