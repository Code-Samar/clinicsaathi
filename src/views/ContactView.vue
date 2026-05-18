<template>
  <!-- HERO -->
  <section class="contact-hero grid-texture">
    <div class="container contact-hero__inner">
      <div class="eyebrow au">Book a Demo</div>
      <h1 class="display-lg au au1" style="color:var(--white); max-width:640px; margin-bottom:20px">
        Fifteen minutes.<br>Live demo.<br><em>No pitch.</em>
      </h1>
      <p class="body-lg au au2" style="color:rgba(255,255,255,.45); max-width:480px">
        We'll run your clinic's agent live on your own phone — you'll see exactly how it
        responds before committing to anything.
      </p>
    </div>
  </section>

  <!-- MAIN -->
  <section class="contact-main">
    <div class="container">
      <div class="contact-grid">

        <!-- LEFT: info blocks -->
        <div class="contact-blocks">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="cblock cblock--wa">
            <div class="cblock__label">Fastest Response</div>
            <div class="cblock__title">WhatsApp Us Directly</div>
            <p class="cblock__desc">Typically respond within 10 minutes between 9 AM – 9 PM.</p>
            <span class="cblock__link">Open WhatsApp</span>
          </a>

          <div class="cblock sr">
            <div class="cblock__accent" />
            <div class="cblock__label">Schedule a Call</div>
            <div class="cblock__title">Book via Calendar</div>
            <p class="cblock__desc">Choose a time that works — 15-minute slot, WhatsApp video or in-person (Mumbai).</p>
            <a href="#" class="cblock__link">Pick a Time Slot</a>
          </div>

          <div class="cblock sr">
            <div class="cblock__accent" />
            <div class="cblock__label">Direct Contact</div>
            <div class="cblock__title">Email &amp; Phone</div>
            <p class="cblock__desc" style="margin-bottom:0">
              hello@clinicsaathi.in<br>
              Mumbai Office — Mon to Sat, 9 AM to 7 PM<br>
              In-person demos available for Mumbai clinics.
            </p>
          </div>

          <div class="what-happens sr">
            <div class="wh-label">What happens in 15 minutes</div>
            <div v-for="w in whatHappens" :key="w" class="wh-item">
              <div class="wh-check">✓</div>{{ w }}
            </div>
          </div>
        </div>

        <!-- RIGHT: form -->
        <div class="contact-form-wrap sr">
          <div class="contact-form-wrap__accent" />

          <!-- Success state -->
          <div v-if="formDone" class="form-success">
            <div class="form-success__icon">✅</div>
            <div class="form-success__title">Request received!</div>
            <p class="form-success__sub">
              We'll confirm your demo slot within 2 hours via WhatsApp at
              <strong>{{ form.phone }}</strong>.
            </p>
          </div>

          <!-- Form -->
          <template v-else>
            <div class="form-title">Tell us about your clinic</div>
            <p class="form-subtitle">Fill this out and we'll come prepared — no generic demo, no wasted time.</p>

            <div class="fg">
              <label class="flabel">Your Name</label>
              <input class="finput" type="text" v-model="form.name" placeholder="Dr. Priya Sharma">
            </div>
            <div class="fg-row">
              <div>
                <label class="flabel">Clinic Name</label>
                <input class="finput" type="text" v-model="form.clinic" placeholder="Sharma Dental Care">
              </div>
              <div>
                <label class="flabel">Specialty</label>
                <select class="fselect" v-model="form.specialty">
                  <option value="">Select specialty</option>
                  <option v-for="s in specialties" :key="s">{{ s }}</option>
                </select>
              </div>
            </div>
            <div class="fg-row">
              <div>
                <label class="flabel">WhatsApp Number</label>
                <input class="finput" type="tel" v-model="form.phone" placeholder="+91 98765 43210">
              </div>
              <div>
                <label class="flabel">City</label>
                <input class="finput" type="text" v-model="form.city" placeholder="Mumbai">
              </div>
            </div>
            <div class="fg">
              <label class="flabel">Biggest Challenge Right Now</label>
              <select class="fselect" v-model="form.challenge">
                <option value="">Select one</option>
                <option v-for="c in challenges" :key="c">{{ c }}</option>
              </select>
            </div>

            <div v-if="formError" class="form-error">{{ formError }}</div>

            <button class="btn btn--gold form-submit-btn" @click="submit">
              Request Demo →
            </button>
            <p class="form-note">No commitment. No sales pressure. We'll confirm your slot within 2 hours.</p>
          </template>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { specialties, challenges, whatHappens } from '../data/index.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()

const formDone  = ref(false)
const formError = ref('')
const form = ref({ name:'', clinic:'', specialty:'', phone:'', city:'', challenge:'' })

function submit() {
  formError.value = ''
  if (!form.value.name.trim())  { formError.value = 'Please enter your name.'; return }
  if (!form.value.phone.trim()) { formError.value = 'Please enter your WhatsApp number.'; return }
  formDone.value = true
}
</script>

<style scoped>
/* ── HERO ─────────────────────────────────────── */
.contact-hero {
  min-height: 60vh; background: var(--ink);
  display: flex; align-items: flex-end; padding-top: 76px;
  position: relative; overflow: hidden;
}
.contact-hero::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
  height: 80px; background: var(--cream);
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}
.contact-hero__inner { padding: 80px 60px 140px; position: relative; z-index: 2; }

/* ── MAIN ─────────────────────────────────────── */
.contact-main { background: var(--cream); padding: 80px 0 120px; }
.contact-grid {
  display: grid; grid-template-columns: 1fr 1.35fr;
  gap: 56px; align-items: start;
}

/* ── INFO BLOCKS ──────────────────────────────── */
.contact-blocks { display: flex; flex-direction: column; gap: 14px; }
.cblock {
  background: var(--white); border: 1px solid var(--cream3);
  border-radius: 2px; padding: 32px 36px;
  position: relative; overflow: hidden; display: block;
  transition: border-color .25s;
}
.cblock__accent {
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: var(--gold); transform: scaleX(0); transform-origin: left;
  transition: transform .35s var(--ease-out);
}
.cblock:hover .cblock__accent { transform: scaleX(1); }
.cblock--wa { background: #1FAD55; border-color: #1FAD55; cursor: pointer; }
.cblock__label {
  font-family: var(--f-ui); font-size: 9px; font-weight: 700;
  letter-spacing: .18em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px;
}
.cblock--wa .cblock__label { color: rgba(255,255,255,.65); }
.cblock__title {
  font-family: var(--f-display); font-size: 22px; font-weight: 500;
  color: var(--ink); margin-bottom: 10px;
}
.cblock--wa .cblock__title { color: var(--white); }
.cblock__desc { font-size: 14px; color: var(--muted); line-height: 1.7; margin-bottom: 20px; }
.cblock--wa .cblock__desc { color: rgba(255,255,255,.65); }
.cblock__link {
  font-family: var(--f-ui); font-size: 10px; font-weight: 700;
  letter-spacing: .1em; text-transform: uppercase; color: var(--ink);
  display: inline-flex; align-items: center; gap: 6px; cursor: pointer; transition: color .2s;
}
.cblock__link::after { content: '→'; font-size: 13px; }
.cblock__link:hover { color: var(--gold); }
.cblock--wa .cblock__link { color: var(--white); }

.what-happens { padding-top: 24px; border-top: 1px solid var(--cream3); }
.wh-label {
  font-family: var(--f-ui); font-size: 9px; font-weight: 700;
  letter-spacing: .16em; text-transform: uppercase; color: var(--muted); margin-bottom: 18px;
}
.wh-item { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: var(--text); line-height: 1.6; margin-bottom: 13px; }
.wh-check {
  width: 20px; height: 20px; border-radius: 50%;
  background: rgba(196,151,60,.1); color: var(--gold);
  font-size: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;
}

/* ── FORM ─────────────────────────────────────── */
.contact-form-wrap {
  background: var(--white); border: 1px solid var(--cream3);
  border-radius: 2px; padding: 52px; position: relative; overflow: hidden;
}
.contact-form-wrap__accent {
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--gold2));
}
.form-title {
  font-family: var(--f-display); font-size: 30px; font-weight: 400;
  color: var(--ink); margin-bottom: 6px;
}
.form-subtitle { font-size: 14px; color: var(--muted); line-height: 1.65; margin-bottom: 36px; }
.fg { margin-bottom: 22px; }
.fg-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 22px; }
.flabel {
  font-family: var(--f-ui); font-size: 9px; font-weight: 700;
  letter-spacing: .14em; text-transform: uppercase; color: var(--ink); margin-bottom: 9px; display: block;
}
.finput, .fselect {
  width: 100%; padding: 13px 18px; border: 1.5px solid var(--cream3);
  border-radius: 2px; background: var(--cream); color: var(--text);
  font-family: var(--f-body); font-size: 15px; outline: none;
  transition: border-color .2s, background .2s; appearance: none;
}
.finput:focus, .fselect:focus { border-color: var(--ink); background: var(--white); }
.finput::placeholder { color: rgba(100,116,132,.5); }
.fselect { cursor: pointer; }
.form-error {
  background: rgba(139,48,51,.08); border: 1px solid rgba(139,48,51,.2);
  border-radius: 2px; padding: 12px 16px;
  font-size: 13px; color: var(--red-soft); margin-bottom: 16px;
}
.form-submit-btn { width: 100%; justify-content: center; margin-top: 8px; padding: 16px; }
.form-note { font-size: 12px; color: var(--muted); text-align: center; margin-top: 14px; line-height: 1.5; }

.form-success { text-align: center; padding: 60px 24px; }
.form-success__icon { font-size: 52px; margin-bottom: 20px; }
.form-success__title {
  font-family: var(--f-display); font-size: 32px; font-weight: 400; color: var(--ink); margin-bottom: 12px;
}
.form-success__sub { font-size: 15px; color: var(--muted); line-height: 1.7; max-width: 320px; margin: 0 auto; }

/* ── RESPONSIVE ────────────────────────────────── */
@media (max-width: 1080px) {
  .contact-hero::after { height: 48px; }
  .contact-hero__inner { padding: 60px 28px 100px; }
  .contact-grid { grid-template-columns: 1fr; }
  .contact-form-wrap { padding: 36px 28px; }
}
@media (max-width: 640px) {
  .fg-row { grid-template-columns: 1fr; }
}
</style>
