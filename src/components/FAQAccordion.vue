<template>
  <div class="accordion custom-accordion" id="faq">
    <div v-for="(item, i) in items" :key="item.q" class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#q'+i">
          {{ item.q }}
        </button>
      </h2>
      <div :id="'q'+i" class="accordion-collapse collapse" data-bs-parent="#faq">
        <div class="accordion-body">{{ item.a }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ items: Array })
</script>