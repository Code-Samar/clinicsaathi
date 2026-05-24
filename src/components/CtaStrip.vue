<template>
  <section class="cta-strip">
    <div class="container cta-strip__inner">
      <p class="cta-strip__kicker">{{ kicker }}</p>
      <h2 class="cta-strip__title" v-html="title" />
      <p class="cta-strip__sub">{{ sub }}</p>
      <div class="btn-row" style="justify-content:center">
        <RouterLink to="/contact" class="btn btn--ink-on-rg">{{ cta }}</RouterLink>
        <a v-if="showWa" href="https://wa.me/91XXXXXXXXXX" target="_blank" class="btn btn--outline-rg">WhatsApp Us</a>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  kicker: { type:String, default:'Ready when you are' },
  title:  { type:String, required:true },
  sub:    { type:String, required:true },
  cta:    { type:String, default:'Book Free Demo →' },
  showWa: { type:Boolean, default:false },
})
</script>
<style scoped>
.cta-strip__kicker {
  font-family:var(--f-ui); font-size:9px; font-weight:700;
  letter-spacing:.22em; text-transform:uppercase;
  color:rgba(8,12,16,.45); margin-bottom:16px;
}
</style>
