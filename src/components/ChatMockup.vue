<template>
  <div class="chat-mockup ai1">
    <div class="chat-mockup__header">
      <div class="chat-mockup__avatar">🏥</div>
      <div>
        <div class="chat-mockup__name">Sharma Dental Care</div>
        <div class="chat-mockup__status">ClinicSaathi · Online</div>
      </div>
    </div>
    <div class="chat-mockup__body">
      <div v-for="(msg, i) in visible" :key="i"
        :class="['bubble', msg.out ? 'bubble--out' : 'bubble--in', 'bubble-enter']"
        :style="{ animationDelay: (i * 0.5 + 0.4) + 's' }">
        {{ msg.text }}
        <div class="bubble__time">{{ msg.time }}</div>
      </div>
      <div v-if="typing" class="bubble bubble--in bubble--typing">
        <span /><span /><span />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const ALL = [
  { text:"Hi, I'd like to book an appointment for a dental checkup.", out:true,  time:'9:42 AM' },
  { text:"Hello! Welcome to Sharma Dental Care 🦷 May I know your name?", out:false, time:'9:42 AM' },
  { text:"I'm Priya Mehta", out:true, time:'9:43 AM' },
  { text:"Great, Priya! Dr. Sharma is available tomorrow — 11 AM or 3 PM. Which works?", out:false, time:'9:43 AM' },
  { text:"11 AM please 🙂", out:true, time:'9:43 AM' },
  { text:"✅ Confirmed! Priya Mehta — Tomorrow 11:00 AM. Reminder 2 hrs before. See you!", out:false, time:'9:43 AM' },
]
const visible = ref([])
const typing  = ref(false)
let idx=0, timer=null
function step() {
  if (idx >= ALL.length) return
  typing.value = true
  timer = setTimeout(() => {
    typing.value = false
    visible.value.push(ALL[idx++])
    timer = setTimeout(step, 1900)
  }, 950)
}
onMounted(() => { timer = setTimeout(step, 1100) })
onUnmounted(() => clearTimeout(timer))
</script>
<style scoped>
.chat-mockup {
  width:310px; background:#ECE5DD; border-radius:18px; overflow:hidden;
  box-shadow:0 40px 90px rgba(0,0,0,.65), 0 2px 8px rgba(0,0,0,.35);
  animation:float 6s ease-in-out infinite; flex-shrink:0;
}
.chat-mockup__header {
  background:#075E54; padding:12px 16px;
  display:flex; align-items:center; gap:12px;
}
.chat-mockup__avatar {
  width:36px; height:36px; border-radius:50%;
  background:rgba(255,255,255,.15);
  display:flex; align-items:center; justify-content:center; font-size:15px;
}
.chat-mockup__name { font-family:var(--f-ui); font-size:11px; font-weight:700; color:#fff; letter-spacing:.02em; }
.chat-mockup__status { font-size:10px; color:rgba(255,255,255,.55); margin-top:1px; }
.chat-mockup__body { padding:14px 12px; display:flex; flex-direction:column; gap:8px; min-height:290px; }
.bubble {
  max-width:82%; padding:9px 13px; border-radius:8px;
  font-size:12.5px; line-height:1.5; color:#1a1a1a;
}
.bubble--in  { background:#fff; align-self:flex-start; border-bottom-left-radius:2px; }
.bubble--out { background:#D9FDD3; align-self:flex-end; border-bottom-right-radius:2px; }
.bubble__time { font-size:9.5px; color:#aaa; text-align:right; margin-top:3px; }
.bubble--in .bubble__time { text-align:left; }
.bubble--typing { background:#fff; align-self:flex-start; display:flex; gap:5px; padding:14px; }
.bubble--typing span {
  width:7px; height:7px; border-radius:50%; background:#bbb;
  animation:blink 1.4s ease-in-out infinite;
}
.bubble--typing span:nth-child(2) { animation-delay:.2s; }
.bubble--typing span:nth-child(3) { animation-delay:.4s; }
.bubble-enter { animation:chatAppear .45s var(--ease-out) both; }
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }
@keyframes chatAppear {
  from{opacity:0;transform:translateY(10px) scale(.97)}
  to{opacity:1;transform:translateY(0) scale(1)}
}
</style>
