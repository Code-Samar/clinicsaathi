<template>
  <section class="contact-hero grid-texture">
    <div class="container contact-hero__inner">
      <div class="eyebrow au">Book a Demo</div>
      <h1 class="display-lg au au1" style="color:var(--white);max-width:620px;margin-bottom:18px">
        Fifteen minutes.<br>Live demo.<br><em>No pitch.</em>
      </h1>
      <p class="body-lg au au2" style="color:rgba(255,255,255,.42);max-width:460px">
        We'll run your clinic's agent live on your own phone — you'll see exactly how it responds before committing to anything.
      </p>
    </div>
  </section>

  <section class="contact-main">
    <div class="container">
      <div class="contact-grid">

        <!-- LEFT -->
        <div class="contact-info">
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" class="cblock cblock--wa">
            <div class="cblock__label">Fastest Response</div>
            <div class="cblock__title">WhatsApp Us Directly</div>
            <p class="cblock__desc">Typically respond within 10 minutes between 9 AM – 9 PM. Drop a message and we'll take it from there.</p>
            <span class="cblock__link">Open WhatsApp →</span>
          </a>

          <div class="cblock sr">
            <div class="cblock__accent" />
            <div class="cblock__label">Schedule a Call</div>
            <div class="cblock__title">Book via Calendar</div>
            <p class="cblock__desc">Choose a time that works — 15-minute slot, WhatsApp video or in-person for Mumbai clinics.</p>
            <a href="#" class="cblock__link">Pick a Time Slot →</a>
          </div>

          <div class="cblock sr">
            <div class="cblock__accent" />
            <div class="cblock__label">Direct Contact</div>
            <div class="cblock__title">Email &amp; Office</div>
            <p class="cblock__desc" style="margin-bottom:0">
              hello@clinicsaathi.in<br>
              Mumbai — Mon to Sat, 9 AM to 7 PM<br>
              In-person demos available for Mumbai clinics.
            </p>
          </div>

          <div class="what-happens sr">
            <div class="wh-title">What happens in 15 minutes</div>
            <div v-for="w in whatHappens" :key="w" class="wh-item">
              <div class="wh-check">✓</div>{{ w }}
            </div>
          </div>
        </div>

        <!-- RIGHT: FORM -->
        <div class="contact-form-wrap sr">
          <div class="contact-form-wrap__bar" />

          <Transition name="form-switch" mode="out-in">
            <div v-if="formDone" key="success" class="form-success">
              <div class="form-success__icon">✅</div>
              <div class="form-success__title">Request received!</div>
              <p class="form-success__sub">We'll confirm your demo slot within 2 hours via WhatsApp at <strong>{{ form.phone }}</strong>.</p>
            </div>

            <div v-else key="form">
              <div class="form-title">Tell us about your clinic</div>
              <p class="form-subtitle">Fill this out and we'll come prepared — no generic demo, no wasted time.</p>

              <div class="fg">
                <label class="flabel">Your Name</label>
                <input class="finput" type="text" v-model="form.name" placeholder="Dr. Priya Sharma" />
              </div>
              <div class="fg-row">
                <div>
                  <label class="flabel">Clinic Name</label>
                  <input class="finput" type="text" v-model="form.clinic" placeholder="Sharma Dental Care" />
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
                  <input class="finput" type="tel" v-model="form.phone" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label class="flabel">City</label>
                  <input class="finput" type="text" v-model="form.city" placeholder="Mumbai" />
                </div>
              </div>
              <div class="fg">
                <label class="flabel">Biggest Challenge Right Now</label>
                <select class="fselect" v-model="form.challenge">
                  <option value="">Select one</option>
                  <option v-for="c in challenges" :key="c">{{ c }}</option>
                </select>
              </div>

              <Transition name="err">
                <div v-if="formError" class="form-error">{{ formError }}</div>
              </Transition>

              <button class="btn btn--rg form-submit" @click="submit">Request Demo →</button>
              <p class="form-note">No commitment. No sales pressure. We'll confirm within 2 hours.</p>
            </div>
          </Transition>
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
/* ── HERO ─── */
.contact-hero {
  min-height:58vh; background:var(--ink);
  display:flex; align-items:flex-end;
  padding-top:72px; position:relative; overflow:hidden;
}
.contact-hero::after {
  content:''; position:absolute; bottom:-1px; left:0; right:0;
  height:72px; background:var(--stone);
  clip-path:polygon(0 100%, 100% 0, 100% 100%);
}
.contact-hero__inner { padding:80px 60px 136px; position:relative; z-index:2; }

/* ── MAIN ─── */
.contact-main { background:var(--stone); padding:80px 0 120px; }
.contact-grid {
  display:grid; grid-template-columns:1fr 1.4fr;
  gap:52px; align-items:start;
}

/* ── INFO BLOCKS ─── */
.contact-info { display:flex; flex-direction:column; gap:12px; }

.cblock {
  background:var(--white); border:1px solid var(--stone3);
  border-radius:2px; padding:30px 34px;
  position:relative; overflow:hidden;
  display:block; transition:border-color .22s;
}
.cblock__accent {
  position:absolute; top:0; left:0; right:0; height:2px;
  background:var(--rg); transform:scaleX(0); transform-origin:left;
  transition:transform .35s var(--ease-out);
}
.cblock:hover .cblock__accent { transform:scaleX(1); }

.cblock--wa { background:#1A9448; border-color:#1A9448; cursor:pointer; }
.cblock__label {
  font-family:var(--f-ui); font-size:8px; font-weight:700;
  letter-spacing:.2em; text-transform:uppercase; color:var(--rg); margin-bottom:9px;
}
.cblock--wa .cblock__label { color:rgba(255,255,255,.6); }
.cblock__title {
  font-family:var(--f-display); font-size:20px; font-weight:400;
  color:var(--ink); margin-bottom:9px;
}
.cblock--wa .cblock__title { color:var(--white); }
.cblock__desc { font-size:13px; color:var(--muted); line-height:1.72; margin-bottom:18px; }
.cblock--wa .cblock__desc { color:rgba(255,255,255,.62); }
.cblock__link {
  font-family:var(--f-ui); font-size:9px; font-weight:800;
  letter-spacing:.14em; text-transform:uppercase;
  color:var(--ink); transition:color .2s; cursor:pointer;
}
.cblock__link:hover { color:var(--rg); }
.cblock--wa .cblock__link { color:var(--white); }

.what-happens { padding-top:20px; border-top:1px solid var(--stone3); }
.wh-title {
  font-family:var(--f-ui); font-size:8px; font-weight:700;
  letter-spacing:.18em; text-transform:uppercase; color:var(--muted); margin-bottom:16px;
}
.wh-item {
  display:flex; align-items:flex-start; gap:11px;
  font-size:14px; color:var(--text); line-height:1.62; margin-bottom:12px;
}
.wh-check {
  width:19px; height:19px; border-radius:50%;
  background:var(--rg-dim); color:var(--rg);
  font-size:9px; display:flex; align-items:center; justify-content:center;
  flex-shrink:0; margin-top:2px;
}

/* ── FORM ─── */
.contact-form-wrap {
  background:var(--white); border:1px solid var(--stone3);
  border-radius:2px; padding:50px; position:relative; overflow:hidden;
}
.contact-form-wrap__bar {
  position:absolute; top:0; left:0; right:0; height:2px;
  background:linear-gradient(90deg, var(--rg), var(--rg2));
}
.form-title {
  font-family:var(--f-display); font-size:28px; font-weight:300;
  color:var(--ink); margin-bottom:6px;
}
.form-subtitle { font-size:13px; color:var(--muted); line-height:1.68; margin-bottom:32px; }

.fg       { margin-bottom:20px; }
.fg-row   { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:20px; }
.flabel   {
  font-family:var(--f-ui); font-size:8px; font-weight:700;
  letter-spacing:.16em; text-transform:uppercase;
  color:var(--ink); margin-bottom:8px; display:block;
}
.finput, .fselect {
  width:100%; padding:12px 16px;
  border:1.5px solid var(--stone3); border-radius:1px;
  background:var(--stone); color:var(--text);
  font-family:var(--f-body); font-size:14px;
  outline:none; transition:border-color .2s, background .2s;
  appearance:none;
}
.finput:focus, .fselect:focus { border-color:var(--ink); background:var(--white); }
.finput::placeholder { color:rgba(110,122,136,.5); }
.fselect { cursor:pointer; }

.form-error {
  background:rgba(139,48,51,.07); border:1px solid rgba(139,48,51,.2);
  border-radius:1px; padding:11px 15px;
  font-size:13px; color:var(--red-soft); margin-bottom:14px;
}
.form-submit {
  width:100%; justify-content:center; margin-top:6px;
  padding:16px; font-size:11px;
}
.form-note { font-size:11px; color:var(--muted); text-align:center; margin-top:14px; line-height:1.6; }

.form-success { text-align:center; padding:56px 24px; }
.form-success__icon  { font-size:48px; margin-bottom:18px; }
.form-success__title {
  font-family:var(--f-display); font-size:28px; font-weight:300;
  color:var(--ink); margin-bottom:12px;
}
.form-success__sub { font-size:14px; color:var(--muted); line-height:1.72; max-width:300px; margin:0 auto; }

/* Transitions */
.form-switch-enter-active { animation:fadeUp .35s var(--ease-out) both; }
.form-switch-leave-active { animation:fadeUp .18s var(--ease-out) reverse both; }
.err-enter-active { animation:fadeUp .28s var(--ease-out) both; }
.err-leave-active { animation:fadeUp .18s var(--ease-out) reverse both; }
@keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }

/* ── RESPONSIVE ─── */
@media (max-width:1080px) {
  .contact-hero::after { height:48px; }
  .contact-hero__inner { padding:64px 24px 110px; }
  .contact-grid { grid-template-columns:1fr; }
  .contact-form-wrap { padding:32px 24px; }
}
@media (max-width:640px) {
  .fg-row { grid-template-columns:1fr; }
}
</style>
