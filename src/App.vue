<template>
  <AppNav />
  <WaFloat />

  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>

  <AppFooter />
</template>

<script setup>
import { useRoute } from 'vue-router'
import AppNav    from './components/AppNav.vue'
import WaFloat   from './components/WaFloat.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
</script>

<style>
.page-enter-active { animation: pageIn .4s cubic-bezier(0.16, 1, 0.3, 1) both; }
.page-leave-active { animation: pageIn .15s cubic-bezier(0.16, 1, 0.3, 1) reverse both; }
@keyframes pageIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
