<template>
  <section class="page-hero"><div class="container"><span class="eyebrow">LEGAL</span><h1>{{type==='privacy'?'Privacy Policy':'Terms of Service'}}</h1><p>This page is a launch-ready placeholder and should be reviewed and finalized with Aipitals’ legal counsel before publication.</p></div></section>
  <section class="section"><div class="container legal-copy">
    <h2>{{type==='privacy'?'Privacy Policy':'Terms of Service'}}</h2>
    <p>{{type==='privacy' ? 'Aipitals should document what information is collected, why it is collected, how it is used, retention, access controls, security practices, integrations, user rights and contact information before launch.' : 'Aipitals should publish finalized terms covering use of the website and services, account responsibilities, acceptable use, service limitations, intellectual property, liability, changes and governing terms before launch.'}}</p>
    <div class="notice"><i class="bi bi-info-circle"></i><span>Replace this placeholder with the approved legal text before the website goes live.</span></div>
  </div></section>
</template>
<script setup>
defineProps({type:{type:String,default:'privacy'}})
</script>