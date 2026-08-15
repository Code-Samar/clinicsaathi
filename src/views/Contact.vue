<template>
  <section class="page-hero"><div class="container"><span class="eyebrow">CONTACT</span><h1>Let’s automate your patient operations.</h1><p>Tell us about your clinic or diagnostic centre and the workflows you want to automate.</p></div></section>
  <section class="section"><div class="container"><div class="row g-5"><div class="col-lg-7">
    <form v-if="!submitted" @submit.prevent="submit" novalidate class="contact-form">
      <div class="row g-3">
        <div class="col-md-6"><label>Full Name *</label><input v-model.trim="form.name" :class="{invalid:errors.name}" required placeholder="Your name"><small v-if="errors.name">{{errors.name}}</small></div>
        <div class="col-md-6"><label>Work Email *</label><input v-model.trim="form.email" type="email" :class="{invalid:errors.email}" required placeholder="name@company.com"><small v-if="errors.email">{{errors.email}}</small></div>
        <div class="col-md-6"><label>Phone Number *</label><input v-model.trim="form.phone" :class="{invalid:errors.phone}" required placeholder="+91 ..."><small v-if="errors.phone">{{errors.phone}}</small></div>
        <div class="col-md-6"><label>Organisation Name *</label><input v-model.trim="form.org" :class="{invalid:errors.org}" required placeholder="Clinic / centre name"><small v-if="errors.org">{{errors.org}}</small></div>
        <div class="col-md-6"><label>Organisation Type *</label><select v-model="form.type"><option value="">Select type</option><option>Clinic</option><option>Diagnostic Centre</option><option>Pathology Lab</option><option>Imaging Centre</option><option>Multi-specialty Clinic</option><option>Other</option></select></div>
        <div class="col-md-6"><label>Number of Doctors / Staff</label><input v-model="form.staff" placeholder="Optional"></div>
        <div class="col-12"><label>Location</label><input v-model="form.location" placeholder="City + State"></div>
        <div class="col-12"><label>What are you interested in?</label><div class="check-grid"><label v-for="p in products" :key="p.slug" class="check-option"><input type="checkbox" v-model="form.interests" :value="p.name"><span>{{p.name}}</span></label><label class="check-option"><input type="checkbox" v-model="form.interests" value="Not sure yet"><span>Not sure yet</span></label></div></div>
        <div class="col-12"><label>What would you like to automate?</label><textarea v-model="form.problem" rows="5" placeholder="Tell us about the biggest repetitive patient-operation problem your team faces."></textarea></div>
        <div class="col-12"><button class="btn btn-primary btn-lg rounded-pill px-4" :disabled="loading">{{loading?'Submitting…':'Request a Demo'}} <i v-if="!loading" class="bi bi-arrow-up-right ms-1"></i></button></div>
      </div>
    </form>
    <div v-else class="success-box"><i class="bi bi-check-circle-fill"></i><h2>Thanks — we’ve received your request.</h2><p>Our team will review your information and get in touch with you.</p><RouterLink to="/" class="btn btn-outline-dark rounded-pill">Back to Home</RouterLink></div>
  </div><div class="col-lg-4"><div class="contact-side"><span class="eyebrow">PREFER TO TALK DIRECTLY?</span><h3>Let’s start a conversation.</h3><p>Official business email, phone and business hours will be configured before launch.</p><div class="placeholder-contact"><i class="bi bi-envelope"></i><span>Official business email</span></div><div class="placeholder-contact"><i class="bi bi-telephone"></i><span>Official business phone</span></div><div class="placeholder-contact"><i class="bi bi-clock"></i><span>Business hours</span></div></div></div></div></div></section>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { products } from '../data/products'
const form = reactive({name:'',email:'',phone:'',org:'',type:'',staff:'',location:'',interests:[],problem:''})
const errors = reactive({})
const loading = ref(false), submitted = ref(false)
function submit(){
  Object.keys(errors).forEach(k=>delete errors[k])
  if(!form.name) errors.name='Please enter your name.'
  if(!/^\S+@\S+\.\S+$/.test(form.email)) errors.email='Enter a valid work email.'
  if(!form.phone) errors.phone='Please enter a phone number.'
  if(!form.org) errors.org='Please enter your organisation.'
  if(Object.keys(errors).length) return
  loading.value=true
  setTimeout(()=>{ loading.value=false; submitted.value=true }, 900)
}
</script>