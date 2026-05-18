<template>
  <div class="chat-mockup ai1">
    <div class="chat-mockup__header">
      <div class="chat-mockup__avatar">🏥</div>
      <div class="chat-mockup__info">
        <div class="chat-mockup__name">Sharma Dental Care</div>
        <div class="chat-mockup__status">ClinicSaathi Agent · Online</div>
      </div>
    </div>
    <div class="chat-mockup__body">
      <div
        v-for="(msg, i) in visible"
        :key="i"
        :class="['bubble', msg.out ? 'bubble--out' : 'bubble--in', 'bubble-enter']"
        :style="{ animationDelay: (i * 0.55 + 0.6) + 's' }"
      >
        {{ msg.text }}
        <div class="bubble__time">{{ msg.time }}</div>
      </div>
      <div v-if="typing" class="bubble bubble--in bubble--typing">
        <div class="typing-dots">
          <span /><span /><span />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const ALL = [
  { text: "Hi! I'd like to book an appointment for a dental checkup.", out: true,  time: '9:42 AM' },
  { text: "Hello! Welcome to Sharma Dental Care 🦷 I'm your AI assistant. May I know your name please?", out: false, time: '9:42 AM' },
  { text: "I'm Priya Mehta", out: true,  time: '9:43 AM' },
  { text: "Great, Priya! Dr. Sharma is available tomorrow at 11 AM or 3 PM. Which works for you?", out: false, time: '9:43 AM' },
  { text: '11 AM please 🙂', out: true,  time: '9:43 AM' },
  { text: "✅ Confirmed! Appointment for Priya Mehta — Tomorrow, 11:00 AM. You'll get a reminder 2 hours before. See you soon!", out: false, time: '9:43 AM' },
]

const visible = ref([])
const typing  = ref(false)
let idx = 0
let timer = null

function step() {
  if (idx >= ALL.length) return
  typing.value = true
  timer = setTimeout(() => {
    typing.value = false
    visible.value.push(ALL[idx++])
    timer = setTimeout(step, 1800)
  }, 900)
}

onMounted(() => { timer = setTimeout(step, 1200) })
onUnmounted(() => clearTimeout(timer))
</script>

<style scoped>
.chat-mockup {
  width: 320px;
  background: #ECE5DD;
  border-radius: 16px; overflow: hidden;
  box-shadow: 0 32px 80px rgba(0,0,0,.55), 0 2px 8px rgba(0,0,0,.3);
  animation: float 6s ease-in-out infinite;
  flex-shrink: 0;
}
.chat-mockup__header {
  background: #075E54; padding: 12px 16px;
  display: flex; align-items: center; gap: 12px;
}
.chat-mockup__avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(255,255,255,.15);
  display: flex; align-items: center; justify-content: center; font-size: 16px;
}
.chat-mockup__name { font-family: var(--f-ui); font-size: 12px; font-weight: 700; color: #fff; }
.chat-mockup__status { font-size: 11px; color: rgba(255,255,255,.6); }
.chat-mockup__body {
  padding: 16px 12px;
  display: flex; flex-direction: column; gap: 8px; min-height: 300px;
}

.bubble {
  max-width: 80%; padding: 10px 14px; border-radius: 8px;
  font-size: 13px; line-height: 1.5; color: #1a1a1a;
}
.bubble--in  { background: #fff; align-self: flex-start; border-bottom-left-radius: 2px; }
.bubble--out { background: #D9FDD3; align-self: flex-end; border-bottom-right-radius: 2px; }
.bubble__time { font-size: 10px; color: #aaa; text-align: right; margin-top: 4px; }
.bubble--in .bubble__time { text-align: left; }
.bubble--typing { background: #fff; align-self: flex-start; padding: 12px 18px; }
.bubble-enter { animation: chatAppear .5s var(--ease-out) both; }

.typing-dots { display: flex; gap: 4px; align-items: center; }
.typing-dots span {
  width: 7px; height: 7px; border-radius: 50%; background: #aaa;
  animation: blink 1.4s ease-in-out infinite;
}
.typing-dots span:nth-child(2) { animation-delay: .2s; }
.typing-dots span:nth-child(3) { animation-delay: .4s; }

@keyframes chatAppear {
  from { opacity: 0; transform: translateY(12px) scale(.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
@keyframes blink {
  0%, 100% { opacity: 1; } 50% { opacity: 0; }
}
</style>
