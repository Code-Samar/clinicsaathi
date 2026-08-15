<template>
  <div class="workflow">
    <div v-for="(step, i) in steps" :key="step.title" class="workflow-step">
      <span>{{ String(i + 1).padStart(2,'0') }}</span>
      <div><strong>{{ step.title }}</strong><small>{{ step.text }}</small></div>
      <i v-if="i < steps.length - 1" class="bi bi-arrow-right"></i>
    </div>
  </div>
</template>
<script setup>
defineProps({ steps: Array })
</script>