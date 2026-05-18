import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollReveal() {
  function reveal() {
    document.querySelectorAll('.sr').forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight - 80) el.classList.add('visible')
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', reveal, { passive: true })
    // nextTick alone is too early — the page-transition animation (400ms) hasn't
    // finished, so getBoundingClientRect() returns 0 for elements not yet painted.
    // Wait for transition to complete before running the first reveal pass.
    nextTick(() => setTimeout(reveal, 450))
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', reveal)
  })

  return { reveal }
}
