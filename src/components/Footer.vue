<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-cta">
        <div><span class="eyebrow">READY TO START?</span><h2>Give your team an AI-powered front desk.</h2><p>See how Aipitals can fit into your clinic or diagnostic centre.</p></div>
        <RouterLink class="btn btn-light rounded-pill px-4" to="/contact">Book a Demo <i class="bi bi-arrow-up-right ms-1"></i></RouterLink>
      </div>
      <div class="row gy-5 py-5">
        <div class="col-lg-4">
          <RouterLink to="/" class="footer-logo"><img src="/assets/aipitals-logo.png" alt="Aipitals"></RouterLink>
          <p>AI Patient Operations for Clinics & Diagnostic Centres.</p>
          <div class="socials"><span><i class="bi bi-linkedin"></i></span><span><i class="bi bi-instagram"></i></span><span><i class="bi bi-youtube"></i></span><span><i class="bi bi-twitter-x"></i></span></div>
        </div>
        <div class="col-6 col-lg-2"><h6>Products</h6><RouterLink v-for="p in products" :key="p.slug" :to="'/products/'+p.slug">{{p.name}}</RouterLink></div>
        <div class="col-6 col-lg-2"><h6>Solutions</h6><RouterLink to="/solutions/clinics">For Clinics</RouterLink><RouterLink to="/solutions/diagnostic-centres">For Diagnostic Centres</RouterLink><RouterLink to="/how-it-works">How It Works</RouterLink></div>
        <div class="col-6 col-lg-2"><h6>Company</h6><RouterLink to="/about">About</RouterLink><RouterLink to="/resources">Resources</RouterLink><RouterLink to="/contact">Contact</RouterLink><RouterLink to="/faq">FAQ</RouterLink></div>
        <div class="col-6 col-lg-2"><h6>Legal</h6><RouterLink to="/privacy">Privacy</RouterLink><RouterLink to="/terms">Terms</RouterLink></div>
      </div>
      <div class="footer-bottom">© {{year}} Aipitals. Built for the next generation of healthcare businesses.</div>
    </div>
  </footer>
</template>
<script setup>
import {products} from '../data/products'
const year=new Date().getFullYear()
</script>