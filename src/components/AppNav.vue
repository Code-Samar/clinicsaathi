<template>
  <nav :class="['nav', scrolled && 'nav--scrolled']">
    <RouterLink to="/" class="nav__logo">Clinic<em>Saathi</em></RouterLink>

    <ul class="nav__links">
      <li v-for="link in links" :key="link.to">
        <RouterLink :to="link.to" class="nav__link" :exact-active-class="link.exact ? 'active' : ''" :active-class="!link.exact ? 'active' : ''">
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>

    <RouterLink to="/contact" class="nav__cta">Book Demo</RouterLink>

    <button :class="['nav__burger', { open: mobileOpen }]" @click="mobileOpen = !mobileOpen" aria-label="Menu">
      <span /><span /><span />
    </button>
  </nav>

  <Transition name="mob">
    <div v-if="mobileOpen" class="mobile-nav">
      <RouterLink v-for="link in links" :key="link.to"
        :to="link.to" class="mobile-nav__link"
        :exact-active-class="link.exact ? 'active' : ''"
        :active-class="!link.exact ? 'active' : ''"
        @click="mobileOpen = false">{{ link.label }}</RouterLink>
      <RouterLink to="/contact" class="mobile-nav__cta" @click="mobileOpen = false">Book Free Demo →</RouterLink>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled   = ref(false)
const mobileOpen = ref(false)
const links = [
  { to:'/',         label:'Home',     exact:true },
  { to:'/about',    label:'About',    exact:false },
  { to:'/services', label:'Services', exact:false },
  { to:'/contact',  label:'Contact',  exact:false },
]
function onScroll() { scrolled.value = window.scrollY > 24 }
onMounted(()  => window.addEventListener('scroll', onScroll, { passive:true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position:fixed; top:0; left:0; right:0; z-index:300;
  height:72px; display:flex; align-items:center; justify-content:space-between;
  padding:0 56px;
  transition:background .4s var(--ease-out), border-color .4s, backdrop-filter .4s;
  border-bottom:1px solid transparent;
}
.nav--scrolled {
  background:rgba(8,12,16,.88);
  backdrop-filter:blur(28px) saturate(180%);
  -webkit-backdrop-filter:blur(28px) saturate(180%);
  border-bottom-color:rgba(184,135,106,.14);
}
.nav__logo {
  font-family:var(--f-display); font-size:22px; font-weight:400;
  color:var(--white); letter-spacing:-.02em; flex-shrink:0;
  transition:opacity .2s;
}
.nav__logo em { color:var(--rg); font-style:normal; }
.nav__logo:hover { opacity:.8; }

.nav__links { display:flex; align-items:center; gap:36px; list-style:none; }
.nav__link {
  font-family:var(--f-ui); font-size:10px; font-weight:700;
  letter-spacing:.14em; text-transform:uppercase;
  color:rgba(255,255,255,.45); transition:color .22s; position:relative;
}
.nav__link::after {
  content:''; position:absolute; bottom:-4px; left:0; right:0;
  height:1px; background:var(--rg);
  transform:scaleX(0); transform-origin:left;
  transition:transform .3s var(--ease-out);
}
.nav__link:hover { color:rgba(255,255,255,.85); }
.nav__link.active { color:var(--white); }
.nav__link:hover::after, .nav__link.active::after { transform:scaleX(1); }

.nav__cta {
  font-family:var(--f-ui); font-size:10px; font-weight:800;
  letter-spacing:.14em; text-transform:uppercase;
  background:var(--rg); color:var(--ink);
  padding:11px 26px; border-radius:1px; flex-shrink:0;
  transition:background .22s, transform .18s, box-shadow .22s;
}
.nav__cta:hover { background:var(--rg2); transform:translateY(-1px); box-shadow:0 6px 20px var(--rg-glow); }

.nav__burger {
  display:none; flex-direction:column; gap:5px;
  background:none; border:none; cursor:pointer; padding:4px;
}
.nav__burger span {
  display:block; width:22px; height:1.5px;
  background:var(--white); border-radius:1px; transition:transform .3s, opacity .3s;
}
.nav__burger.open span:nth-child(1) { transform:translateY(6.5px) rotate(45deg); }
.nav__burger.open span:nth-child(2) { opacity:0; }
.nav__burger.open span:nth-child(3) { transform:translateY(-6.5px) rotate(-45deg); }

/* ── Mobile ── */
.mobile-nav {
  position:fixed; inset:0; top:72px;
  background:rgba(8,12,16,.97);
  backdrop-filter:blur(24px);
  z-index:299; display:flex; flex-direction:column; padding:36px 28px;
}
.mobile-nav__link {
  font-family:var(--f-ui); font-size:12px; font-weight:700;
  letter-spacing:.14em; text-transform:uppercase;
  color:rgba(255,255,255,.4); padding:18px 0;
  border-bottom:1px solid rgba(255,255,255,.06); transition:color .2s;
}
.mobile-nav__link:hover, .mobile-nav__link.active { color:var(--white); }
.mobile-nav__cta {
  margin-top:28px; background:var(--rg); color:var(--ink);
  font-family:var(--f-ui); font-size:11px; font-weight:800;
  letter-spacing:.14em; text-transform:uppercase;
  padding:16px 28px; border-radius:1px; text-align:center;
  transition:background .2s;
}
.mobile-nav__cta:hover { background:var(--rg2); }

.mob-enter-active { animation:fadeDown .3s var(--ease-out) both; }
.mob-leave-active { animation:fadeDown .2s var(--ease-out) reverse both; }
@keyframes fadeDown {
  from { opacity:0; transform:translateY(-10px); }
  to   { opacity:1; transform:translateY(0); }
}

@media (max-width:1080px) {
  .nav { padding:0 24px; }
  .nav__links, .nav__cta { display:none; }
  .nav__burger { display:flex; }
}
</style>
