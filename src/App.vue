<template>
  <div id="top">
    <Navbar />
    <main><router-view /></main>
    <Footer />
    <ChatWidget />
    <a href="#top" class="back-top" aria-label="Back to top"><i class="bi bi-arrow-up"></i></a>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ChatWidget from './components/ChatWidget.vue'
</script>