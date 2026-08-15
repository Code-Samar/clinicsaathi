<template>
  <header class="site-nav">
    <div class="top-strip"><span>✦</span> AI Patient Operations for Modern Clinics & Diagnostic Centres</div>
    <nav class="navbar navbar-expand-xl">
      <div class="container nav-inner">
        <RouterLink class="brand-logo" to="/" @click="closeMenu">
          <img src="/assets/aipitals-logo.png" alt="Aipitals" />
        </RouterLink>
        <button class="navbar-toggler" type="button" @click="open=!open" aria-label="Toggle navigation">
          <i class="bi" :class="open ? 'bi-x-lg' : 'bi-list'"></i>
        </button>
        <div class="nav-panel" :class="{open}">
          <ul class="navbar-nav mx-auto align-items-xl-center">
            <li><RouterLink class="nav-link home-link" to="/" @click="closeMenu">Home</RouterLink></li>
            <li class="nav-item dropdown-wrap">
              <button class="nav-link nav-button" @click="productsOpen=!productsOpen">Products <i class="bi bi-chevron-down"></i></button>
              <div v-if="productsOpen" class="nav-dropdown">
                <RouterLink v-for="p in products" :key="p.slug" :to="'/products/'+p.slug" @click="closeMenu">{{p.name}}</RouterLink>
                <RouterLink class="dropdown-all" to="/products" @click="closeMenu">View all products <i class="bi bi-arrow-right"></i></RouterLink>
              </div>
            </li>
            <li><RouterLink class="nav-link" to="/how-it-works" @click="closeMenu">How It Works</RouterLink></li>
            <li class="nav-item dropdown-wrap">
              <button class="nav-link nav-button" @click="solutionsOpen=!solutionsOpen">Solutions <i class="bi bi-chevron-down"></i></button>
              <div v-if="solutionsOpen" class="nav-dropdown compact">
                <RouterLink to="/solutions/clinics" @click="closeMenu"><b>For Clinics</b><small>AI front desk & patient communication</small></RouterLink>
                <RouterLink to="/solutions/diagnostic-centres" @click="closeMenu"><b>For Diagnostic Centres</b><small>Booking to report delivery</small></RouterLink>
              </div>
            </li>
            <li><RouterLink class="nav-link" to="/about" @click="closeMenu">About</RouterLink></li>
            <li><RouterLink class="nav-link" to="/resources" @click="closeMenu">Resources</RouterLink></li>
          </ul>
          <div class="nav-actions">
            <RouterLink class="btn btn-primary rounded-pill px-4" to="/contact" @click="closeMenu">Book a Demo <i class="bi bi-arrow-up-right ms-1"></i></RouterLink>
            <RouterLink class="btn btn-outline-primary rounded-pill px-4 d-none d-xxl-inline-flex" to="/how-it-works" @click="closeMenu">See How It Works</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import { products } from '../data/products'
const open=ref(false), productsOpen=ref(false), solutionsOpen=ref(false)
function closeMenu(){open.value=false;productsOpen.value=false;solutionsOpen.value=false}
</script>