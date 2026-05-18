<template>
  <AppNav />
  <WaFloat />

  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <AppFooter />
</template>

<script setup>
import AppNav    from './components/AppNav.vue'
import WaFloat   from './components/WaFloat.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
.page-enter-active { animation: pageIn .4s var(--ease-out) both; }
.page-leave-active { animation: pageIn .2s var(--ease-out) reverse both; }
@keyframes pageIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
