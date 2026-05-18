<template>
  <nav :class="['nav', navClass]">
    <RouterLink to="/" class="nav__logo">Clinic<em>Saathi</em></RouterLink>

    <ul class="nav__links">
      <li><RouterLink to="/"         class="nav__link" exact-active-class="active">Home</RouterLink></li>
      <li><RouterLink to="/about"    class="nav__link" active-class="active">About</RouterLink></li>
      <li><RouterLink to="/services" class="nav__link" active-class="active">Services</RouterLink></li>
      <li><RouterLink to="/contact"  class="nav__link" active-class="active">Contact</RouterLink></li>
    </ul>

    <RouterLink to="/contact" class="nav__cta">Book Demo</RouterLink>

    <button :class="['nav__burger', { open: mobileOpen }]" @click="mobileOpen = !mobileOpen" aria-label="Menu">
      <span /><span /><span />
    </button>
  </nav>

  <!-- Mobile overlay -->
  <Transition name="mobile-menu">
    <div v-if="mobileOpen" class="mobile-nav">
      <RouterLink to="/"         class="mobile-nav__link" exact-active-class="active" @click="mobileOpen=false">Home</RouterLink>
      <RouterLink to="/about"    class="mobile-nav__link" active-class="active"       @click="mobileOpen=false">About</RouterLink>
      <RouterLink to="/services" class="mobile-nav__link" active-class="active"       @click="mobileOpen=false">Services</RouterLink>
      <RouterLink to="/contact"  class="mobile-nav__link" active-class="active"       @click="mobileOpen=false">Contact</RouterLink>
      <RouterLink to="/contact"  class="mobile-nav__cta"                              @click="mobileOpen=false">Book Free Demo →</RouterLink>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route      = useRoute()
const scrollY    = ref(0)
const mobileOpen = ref(false)

const darkPages = ['home', 'about', 'services', 'contact']

const navClass = computed(() => {
  const onDark = darkPages.includes(route.name)
  if (scrollY.value > 30) return onDark ? 'nav--scrolled' : 'nav--light'
  return ''
})

function onScroll() { scrollY.value = window.scrollY }
onMounted(()  => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  height: 76px; display: flex; align-items: center; justify-content: space-between;
  padding: 0 60px;
  transition: background .4s var(--ease-out), border-color .4s;
  border-bottom: 1px solid transparent;
}
.nav--scrolled {
  background: rgba(9,20,31,.92);
  backdrop-filter: blur(24px) saturate(160%);
  border-bottom-color: rgba(196,151,60,.12);
}
.nav--light {
  background: rgba(245,241,232,.94);
  backdrop-filter: blur(20px);
  border-bottom-color: rgba(0,0,0,.06);
}

.nav__logo {
  font-family: var(--f-display); font-size: 24px; font-weight: 500;
  color: var(--white); letter-spacing: -.02em; flex-shrink: 0;
  transition: color .3s;
}
.nav__logo em { color: var(--gold); font-style: normal; }
.nav--light .nav__logo { color: var(--ink); }

.nav__links { display: flex; align-items: center; gap: 40px; list-style: none; }
.nav__link {
  font-family: var(--f-ui); font-size: 11px; font-weight: 700;
  letter-spacing: .1em; text-transform: uppercase;
  color: rgba(255,255,255,.55); cursor: pointer;
  transition: color .25s; position: relative;
}
.nav__link::after {
  content: ''; position: absolute; bottom: -3px; left: 0; right: 0;
  height: 1px; background: var(--gold); transform: scaleX(0);
  transform-origin: left; transition: transform .3s var(--ease-out);
}
.nav__link:hover::after, .nav__link.active::after { transform: scaleX(1); }
.nav__link:hover, .nav__link.active { color: var(--white); }
.nav--light .nav__link { color: var(--muted); }
.nav--light .nav__link:hover, .nav--light .nav__link.active { color: var(--ink); }

.nav__cta {
  font-family: var(--f-ui); font-size: 11px; font-weight: 800;
  letter-spacing: .1em; text-transform: uppercase;
  background: var(--gold); color: var(--ink);
  padding: 11px 28px; border-radius: 2px; flex-shrink: 0;
  transition: background .25s, transform .15s;
}
.nav__cta:hover { background: var(--gold2); transform: translateY(-1px); }

.nav__burger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.nav__burger span {
  display: block; width: 22px; height: 1.5px;
  background: var(--white); border-radius: 1px; transition: transform .3s, opacity .3s;
}
.nav--light .nav__burger span { background: var(--ink); }
.nav__burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav__burger.open span:nth-child(2) { opacity: 0; }
.nav__burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile nav */
.mobile-nav {
  position: fixed; inset: 0; top: 76px;
  background: var(--ink); z-index: 199;
  display: flex; flex-direction: column; padding: 40px 32px;
}
.mobile-nav__link {
  font-family: var(--f-ui); font-size: 13px; font-weight: 700;
  letter-spacing: .1em; text-transform: uppercase;
  color: rgba(255,255,255,.5); padding: 20px 0;
  border-bottom: 1px solid rgba(255,255,255,.06); transition: color .2s;
}
.mobile-nav__link:hover, .mobile-nav__link.active { color: var(--white); }
.mobile-nav__cta {
  margin-top: 32px; background: var(--gold); color: var(--ink);
  font-family: var(--f-ui); font-size: 12px; font-weight: 800;
  letter-spacing: .1em; text-transform: uppercase;
  padding: 16px 28px; border-radius: 2px; text-align: center;
}
.mobile-nav__cta:hover { background: var(--gold2); }

.mobile-menu-enter-active, .mobile-menu-leave-active { transition: opacity .25s, transform .3s var(--ease-out); }
.mobile-menu-enter-from, .mobile-menu-leave-to { opacity: 0; transform: translateY(-12px); }

@media (max-width: 1080px) {
  .nav { padding: 0 28px; }
  .nav__links, .nav__cta { display: none; }
  .nav__burger { display: flex; }
}
</style>
