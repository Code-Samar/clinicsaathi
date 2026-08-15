<template>
  <div class="chat-widget">
    <transition name="chat-pop">
      <section v-if="open" class="chat-panel" aria-label="Aipitals AI Assistant">
        <header class="chat-header">
          <div class="chat-brand">
            <img src="/assets/aipitals-logo.png" alt="Aipitals" />
            <div><strong>Aipitals AI Assistant</strong><span><i></i> Online</span></div>
          </div>
          <button class="chat-close" @click="open=false" aria-label="Close assistant"><i class="bi bi-x-lg"></i></button>
        </header>

        <div ref="messagesEl" class="chat-messages">
          <div class="chat-intro">Hi! 👋<br><span>How can I help you today?</span></div>

          <div v-for="(message, index) in messages" :key="index" :class="['chat-message', message.role]">
            <div class="message-bubble" v-html="message.text"></div>
          </div>

          <div v-if="typing" class="chat-message assistant"><div class="typing"><span></span><span></span><span></span></div></div>

          <div v-if="!typing && quickReplies.length" class="quick-replies">
            <button v-for="item in quickReplies" :key="item.label" @click="handleQuick(item)">{{ item.label }}</button>
          </div>
        </div>

        <form class="chat-input" @submit.prevent="send">
          <input v-model.trim="draft" type="text" placeholder="Type your message..." aria-label="Message" />
          <button type="submit" :disabled="!draft" aria-label="Send message"><i class="bi bi-send-fill"></i></button>
        </form>
      </section>
    </transition>

    <button v-if="!open" class="chat-launcher" @click="open=true" aria-label="Open Aipitals AI Assistant">
      <span class="launcher-dot"></span><img src="/assets/aipitals-logo.png" alt="" /><span class="launcher-label">Aipitals AI</span><i class="bi bi-chat-dots-fill"></i>
    </button>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'

const open = ref(false)
const draft = ref('')
const typing = ref(false)
const messagesEl = ref(null)
const messages = ref([])
const quickReplies = ref([
  { label: 'Book an appointment', key: 'book' },
  { label: 'Explore Aipitals', key: 'products' },
  { label: 'Talk to the team', key: 'contact' }
])

const scrollDown = async () => {
  await nextTick()
  if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight
}

const reply = async (text, options = []) => {
  typing.value = true
  quickReplies.value = []
  await new Promise(resolve => setTimeout(resolve, 550))
  messages.value.push({ role: 'assistant', text })
  typing.value = false
  quickReplies.value = options
  scrollDown()
}

const handleQuick = item => {
  messages.value.push({ role: 'user', text: item.label })
  if (item.key === 'book') {
    reply('Absolutely. Which department would you like to book?', [
      { label: 'General Physician', key: 'doctor' },
      { label: 'Dermatology', key: 'doctor' },
      { label: 'Dentistry', key: 'doctor' },
      { label: 'Other', key: 'doctor' }
    ])
  } else if (item.key === 'products') {
    reply('Aipitals has five AI patient-operation systems: WhatsApp Receptionist, Patient Recall, Diagnostic Patient OS, Diagnostic Preparation, and Patient Experience & Reviews.', [
      { label: 'View products', key: 'products-page' },
      { label: 'Book a demo', key: 'contact' }
    ])
  } else if (item.key === 'contact') {
    reply('Sure. I can take you to the demo request form so the Aipitals team can learn about your clinic or diagnostic centre.', [
      { label: 'Request a demo', key: 'contact-page' }
    ])
  } else if (item.key === 'doctor') {
    reply('Great. Please choose an available time: 4:30 PM, 6:00 PM, or 7:30 PM.', [
      { label: '4:30 PM', key: 'slot' },
      { label: '6:00 PM', key: 'slot' },
      { label: '7:30 PM', key: 'slot' }
    ])
  } else if (item.key === 'slot') {
    reply('Your demo appointment flow is ready. In a production integration, the selected slot would be confirmed against the clinic scheduling system.', [
      { label: 'Request a demo', key: 'contact-page' },
      { label: 'Start over', key: 'restart' }
    ])
  } else if (item.key === 'products-page') {
    window.location.href = '/products'
  } else if (item.key === 'contact' || item.key === 'contact-page') {
    window.location.href = '/contact'
  } else if (item.key === 'restart') {
    messages.value = []
    quickReplies.value = [
      { label: 'Book an appointment', key: 'book' },
      { label: 'Explore Aipitals', key: 'products' },
      { label: 'Talk to the team', key: 'contact' }
    ]
  }
}

const send = () => {
  if (!draft.value) return
  const text = draft.value
  messages.value.push({ role: 'user', text: escapeHtml(text) })
  draft.value = ''
  const lower = text.toLowerCase()
  if (lower.includes('appointment') || lower.includes('book')) {
    reply('I can help with that. Which department would you like?', [
      { label: 'General Physician', key: 'doctor' },
      { label: 'Dermatology', key: 'doctor' },
      { label: 'Dentistry', key: 'doctor' }
    ])
  } else if (lower.includes('product')) {
    reply('Aipitals has five focused AI systems for patient operations. I can show you the products or help you request a demo.', [
      { label: 'View products', key: 'products-page' },
      { label: 'Book a demo', key: 'contact-page' }
    ])
  } else if (lower.includes('demo') || lower.includes('contact')) {
    reply('Of course. I can take you to the demo request form.', [{ label: 'Request a demo', key: 'contact-page' }])
  } else {
    reply('I can help with appointments, Aipitals products, or a demo request. What would you like to do?', [
      { label: 'Book an appointment', key: 'book' },
      { label: 'Explore Aipitals', key: 'products' },
      { label: 'Talk to the team', key: 'contact' }
    ])
  }
  scrollDown()
}

const escapeHtml = value => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]))
</script>
