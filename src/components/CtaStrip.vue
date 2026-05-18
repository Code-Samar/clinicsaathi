<template>
  <section class="cta-strip">
    <div class="container cta-strip__inner">
      <h2 class="cta-strip__title" v-html="title" />
      <p class="cta-strip__sub">{{ sub }}</p>
      <div class="btn-row" style="justify-content:center">
        <RouterLink to="/contact" class="btn btn--ink-on-gold">{{ cta }}</RouterLink>
        <a v-if="showWa" href="https://wa.me/91XXXXXXXXXX" target="_blank" class="btn btn--outline-gold">WhatsApp Us</a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title:  { type: String, required: true },
  sub:    { type: String, required: true },
  cta:    { type: String, default: 'Book Free Demo →' },
  showWa: { type: Boolean, default: false },
})
</script>
