<template>
  <div v-if="product">
    <section class="product-hero">
      <div class="container">
        <RouterLink to="/products" class="back-link"><i class="bi bi-arrow-left"></i> All products</RouterLink>
        <div class="row align-items-center g-5 mt-2">
          <div class="col-lg-7">
            <div class="icon-box large"><i :class="['bi', product.icon]"></i></div>
            <span class="eyebrow mt-4 d-block">AI PATIENT OPERATIONS</span>
            <h1>{{ product.hero }}</h1>
            <p>{{ product.description }}</p>
            <RouterLink class="btn btn-primary btn-lg rounded-pill px-4" to="/contact">Book a Demo <i class="bi bi-arrow-up-right ms-1"></i></RouterLink>
          </div>
          <div class="col-lg-5">
            <ConversationDemo v-if="product.demo === 'conversation'" />
            <div v-else-if="product.demo === 'recall'" class="demo-window recall-demo">
              <div class="demo-head">Upcoming appointment</div><div class="recall-date">18 <small>August</small></div><h3>Dr Sharma</h3><p>Tuesday · 5:00 PM</p><div class="d-flex gap-2"><button class="btn btn-primary rounded-pill flex-fill" @click="confirmed=true">{{confirmed?'Confirmed':'Confirm'}}</button><button class="btn btn-outline-dark rounded-pill flex-fill" @click="rescheduled=true">{{rescheduled?'Rescheduled':'Reschedule'}}</button></div>
            </div>
            <div v-else class="demo-window timeline-demo">
              <div v-for="(s,i) in demoSteps" :key="s" class="timeline-item" :class="{done:i<activeStage}" @click="activeStage=i+1"><span>{{i<activeStage?'✓':i+1}}</span><strong>{{s}}</strong><small>{{i<activeStage?'Completed':'Click to explore'}}</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="container">
        <div class="section-heading"><span class="eyebrow">CAPABILITIES</span><h2>What {{ product.name }} does.</h2><p>Designed around the repetitive workflows your team handles every day.</p></div>
        <div class="row g-3 mt-4"><div v-for="f in product.features" :key="f" class="col-md-6 col-lg-4"><div class="feature-row"><i class="bi bi-check-circle-fill"></i>{{f}}</div></div></div>
      </div>
    </section>
    <section class="section">
      <div class="container"><div class="outcome-panel"><span class="eyebrow">OUTCOME</span><h2>{{product.outcome}}</h2><p>Automate supported patient communication while keeping human escalation available whenever staff attention is needed.</p></div></div>
    </section>
    <section v-if="product.slug==='diagnostic-preparation-agent'" class="section soft">
      <div class="container"><div class="safety-note"><i class="bi bi-shield-check"></i><div><h3>Approved information only</h3><p>Preparation guidance should come from the diagnostic centre’s approved protocols and configured knowledge base. Questions outside that information should be escalated to staff.</p></div></div></div>
    </section>
    <CTASection />
  </div>
  <NotFound v-else />
</template>
<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products'
import ConversationDemo from '../components/ConversationDemo.vue'
import CTASection from '../components/CTASection.vue'
import NotFound from './NotFound.vue'

const route = useRoute()
const product = computed(() => products.find(p => p.slug === route.params.slug))
const confirmed = ref(false), rescheduled = ref(false), activeStage = ref(1)
const demoSteps = ['BOOKING','PREPARATION','COLLECTION','TESTING','REPORT READY','REPORT DELIVERED','CONSULTATION']
</script>