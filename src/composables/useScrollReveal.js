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
    // Wait for page-enter animation (400ms) to fully complete before
    // running the first reveal pass. Without this, getBoundingClientRect()
    // returns stale/zero values mid-animation and elements stay invisible.
    nextTick(() => setTimeout(reveal, 500))
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', reveal)
  })

  return { reveal }
}
