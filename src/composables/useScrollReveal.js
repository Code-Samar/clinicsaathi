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
    nextTick(reveal)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', reveal)
  })

  return { reveal }
}
