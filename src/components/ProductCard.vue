<template>
  <article class="product-card h-100">
    <div class="icon-box"><i :class="['bi', product.icon]"></i></div>
    <div class="product-number">0{{ index + 1 }}</div>
    <h3>{{ product.name }}</h3>
    <p>{{ product.short }}</p>
    <ul>
      <li v-for="feature in product.features.slice(0, 4)" :key="feature"><i class="bi bi-check2"></i>{{ feature }}</li>
    </ul>
    <RouterLink class="arrow-link mt-auto" :to="'/products/' + product.slug">Explore {{ product.name }} <i class="bi bi-arrow-right"></i></RouterLink>
  </article>
</template>
<script setup>
defineProps({ product: Object, index: Number })
</script>