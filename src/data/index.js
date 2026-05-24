export const agents = [
  { num:'01', icon:'🤖', title:'WhatsApp AI Receptionist',    sub:'Books appointments instantly — day or night, in Hindi or English.',       idx:0 },
  { num:'02', icon:'📲', title:'Missed Call Converter',        sub:'Every missed call triggers an instant WhatsApp in 3 seconds.',            idx:1 },
  { num:'03', icon:'⭐', title:'Google Review Booster',        sub:'Happy patients go to Google. Unhappy ones reach you privately.',          idx:2 },
  { num:'04', icon:'💊', title:'Post-Treatment Retention Bot', sub:'Automated follow-ups that bring patients back for the next session.',      idx:3 },
]

export const steps = [
  { n:'01', title:'Book a Demo',           desc:"A 15-minute conversation — no pitch, no commitment. We understand your clinic's specific challenges." },
  { n:'02', title:'We Configure',          desc:"Our team sets up your agents with your clinic's name, timings, services, and language preferences. You do nothing." },
  { n:'03', title:'Goes Live',             desc:'Within 72 hours, agents are active on your existing WhatsApp Business number. You test it yourself first.' },
  { n:'04', title:'You Treat. We Handle.', desc:'Monthly reports show every appointment booked, missed call converted, and review earned.' },
]

export const testimonials = [
  { text:"Before ClinicSaathi, we were losing 8–10 patients a day to missed calls. Now every missed call gets a WhatsApp in seconds. Our bookings are up 40% in two months.", name:'Dr. Ritu Kapoor',  role:'Dermatologist, Mumbai',  init:'R' },
  { text:"We went from 3.8 to 4.7 stars on Google in six weeks. Happy patients get the link, unhappy ones reach me first. No bad reviews have gone public since.",             name:'Dr. Vikram Nair',  role:'Dental Surgeon, Pune',   init:'V' },
  { text:"My receptionist used to spend 2 hours a day on WhatsApp. Now she focuses on patients. The AI handles everything — in Hindi, English, even Marathi mix.",             name:'Dr. Sunita Joshi', role:'Gynaecologist, Thane',    init:'S' },
]

export const principles = [
  { n:'01', title:'WhatsApp-First, Always',   desc:"Indian patients don't download apps for clinics. They WhatsApp. We built entirely around that reality — not around what's convenient for us to build." },
  { n:'02', title:'No Lock-In. Ever.',         desc:"Month-to-month. Cancel anytime. If ClinicSaathi isn't delivering measurable value, you shouldn't be paying for it. That's the only honest way to operate." },
  { n:'03', title:'Real People, Real Support', desc:"Our team is in Mumbai. When something needs fixing, you're calling a person who knows your clinic's setup — not opening a support ticket." },
]

export const whyWaNums = [
  { big:'500M+', label:'Indians on WhatsApp daily — the largest messaging install base in the country' },
  { big:'98%',   label:'WhatsApp message open rate vs 22% for email — your patients actually see it' },
  { big:'3s',    label:'Average time our AI agent takes to respond — faster than any human receptionist' },
  { big:'0',     label:'New apps or logins your patients need — works on the WhatsApp they already have' },
]

export const agentPanels = [
  {
    icon:'🤖', num:'01', name:'WhatsApp AI Receptionist',
    titleHtml:'WhatsApp AI<br><em>Receptionist</em>',
    desc:"Your clinic's receptionist goes home at 9 PM. Patients WhatsApp at midnight. This agent never sleeps — booking appointments, answering queries, and sending confirmations around the clock.",
    tags:['24/7 Availability','Hindi + English','Instant Response'],
    bestFor:['Dental & Orthodontic clinics','Dermatology & Aesthetic practices',"Gynaecology & Women's health",'Multi-specialty OPDs','Any clinic with high WhatsApp volume'],
    flowLabel:'patient journey',
    flow:[
      { icon:'💬', label:'Patient WhatsApps',   sub:'Any time, any language' },
      { icon:'⚡', label:'Agent replies in 3s', sub:'Greets, asks name & preferred time' },
      { icon:'📅', label:'Checks availability', sub:'Live sync with Google Calendar' },
      { icon:'✅', label:'Booking confirmed',   sub:'Name, date, time, address — all sent' },
      { icon:'🔔', label:'Auto-reminder sent',  sub:'2 hours before appointment' },
    ],
    caps:['Appointment booking, rescheduling & cancellation','Clinic timings, location & directions','Treatment pricing FAQs','Doctor availability queries','Insurance & Ayushman basics','Hindi, English & Hinglish — all handled'],
  },
  {
    icon:'📲', num:'02', name:'Missed Call Converter',
    titleHtml:'Missed Call<br><em>Converter</em>',
    desc:"Every missed call is a patient who might not call back. This agent sends an automatic WhatsApp within 3 seconds of any missed call — instantly reopening the conversation before they reach your competitor.",
    tags:['3-Second Response','Zero Setup Fee','Works Standalone'],
    bestFor:['Clinics with high call volume','Solo practitioners (no receptionist)','Busy OPD hours with no one to answer','Any clinic losing patients to competitors'],
    flowLabel:'missed call to booking',
    flow:[
      { icon:'📞', label:'Patient calls',      sub:"Via your clinic's virtual number" },
      { icon:'❌', label:'Call unanswered',    sub:"You're with a patient — can't pick up" },
      { icon:'⚡', label:'WhatsApp in 3s',     sub:'"Your call received, connecting shortly"' },
      { icon:'💬', label:'Patient replies',    sub:'Responds with intent or question' },
      { icon:'📅', label:'Appointment booked', sub:'Agent 01 flow activates automatically' },
    ],
    caps:['Works with Exotel / MSG91 virtual numbers','Instant WhatsApp — no delay','Seamlessly hands off to Agent 01','Dashboard notification for every conversion','Zero setup fee — live in 48 hours','Works independently or bundled'],
  },
  {
    icon:'⭐', num:'03', name:'Google Review Booster',
    titleHtml:'Google Review<br><em>Booster</em>',
    desc:"Happy patients forget to leave reviews. Unhappy ones don't. This agent rebalances that — sending a check-in two hours after every visit, routing happy patients to Google and catching complaints before they go public.",
    tags:['Smart Routing','Private Escalation','Add-on Only'],
    bestFor:['Clinics below 4.5 stars on Google','New clinics building reputation','Aesthetic & dental practices where reputation is revenue','Any clinic investing in Google Ads'],
    flowLabel:'intelligent review routing',
    flow:[
      { icon:'✅', label:'Visit complete',  sub:'Patient leaves the clinic' },
      { icon:'⏱️', label:'2-hour check-in', sub:'Agent sends experience question (1–5)' },
      { icon:'🔀', label:'Smart routing',   sub:'Response determines the next step' },
      { branch:true },
    ],
    caps:['Automated post-visit WhatsApp','Intelligent routing — happy vs. unhappy','Direct Google review deep-link','Negative feedback stays private','Dashboard alert for unhappy patients','Monthly review count in your report'],
  },
  {
    icon:'💊', num:'04', name:'Retention Bot',
    titleHtml:'Post-Treatment<br><em>Retention Bot</em>',
    desc:"Most patients don't return after treatment — not because they're unhappy, but because nobody followed up. This agent sends automated post-care messages, check-ins, and rebooking prompts over weeks. One click from your staff. Everything else is automatic.",
    tags:['Multi-Session Clinics','Zero Staff Effort','Highest ROI'],
    bestFor:['Dermatology — laser, peels, anti-aging','Dental — orthodontics, root canals, scaling','Gynaecology — pregnancy follow-ups','Physiotherapy — session tracking','Chronic disease management'],
    flowLabel:'automated retention timeline',
    flow:[
      { icon:'👆', label:'One click by staff', sub:'"Session 1 complete" — that\'s all they do' },
      { icon:'📋', label:'Day 1 post-care',    sub:'Aftercare instructions + skin check query' },
      { icon:'💬', label:'Day 7 check-in',     sub:'Recovery check, option to share photo' },
      { icon:'📅', label:'Day 25 rebooking',   sub:'"Time for Session 2 — reply Book"' },
      { icon:'🔄', label:'Session 2 booked',   sub:'No staff involvement — fully automatic' },
    ],
    caps:['Fully customized per treatment type','Medication & aftercare reminders','Recovery check-ins with photo support','Automatic rebooking prompt','Tracks sessions across timeline','Works for any multi-session treatment'],
  },
]

export const pricingPlans = [
  {
    plan:'Starter', title:'Missed Call\nConverter',
    tagline:"For clinics losing patients to missed calls. The single highest-ROI agent, standalone.",
    price:'₹999', period:'/ month · ₹1,999 one-time setup',
    featured:false,
    features:['Missed call → WhatsApp in 3 seconds','Works with Exotel / MSG91','Hindi + English responses','Monthly conversion report','Mumbai-based support'],
    cta:'Get Started →',
  },
  {
    plan:'Growth', title:'Full Agent\nBundle',
    tagline:'All four agents working together. The complete ClinicSaathi system for clinics serious about growth.',
    price:'₹4,999', period:'/ month · ₹3,999 one-time setup',
    featured:true, badge:'Most Popular',
    features:['WhatsApp AI Receptionist (24/7)','Missed Call Converter','Google Review Booster','Post-Treatment Retention Bot','Monthly performance dashboard','Priority WhatsApp support'],
    cta:'Book Free Demo →',
  },
  {
    plan:'Custom', title:'Multi-Location\nor Enterprise',
    tagline:"Running multiple clinic branches? Custom configurations, dedicated account manager, bulk pricing.",
    price:'Custom', period:"Talk to us about your setup",
    featured:false,
    features:['Multiple branches, one dashboard','Dedicated account manager','Custom agent configurations','Integration with existing HMS','SLA-backed uptime guarantee'],
    cta:'Talk to Us →',
  },
]

export const faqs = [
  { q:'Do patients need to download a new app?', a:"No. Everything works on WhatsApp — which your patients already have installed. They message your clinic's existing number and the AI agent handles the conversation naturally. Zero new apps, zero new logins." },
  { q:'How long does setup actually take?',      a:"Our standard deployment is 72 hours from the time you confirm onboarding. We handle everything — configuring agents with your clinic's name, services, timings, and language preferences. You review and approve before anything goes live." },
  { q:'What happens to my existing WhatsApp conversations?', a:"Agents only activate for new messages from new or inactive patients. Ongoing conversations you're managing can continue as before. We configure the logic together during onboarding." },
  { q:'Which virtual number service for the Missed Call agent?', a:'We work with Exotel and MSG91 — both widely used in India. If you already have one, we connect directly. If not, we can help you set one up in about 24 hours.' },
  { q:'Can the agents speak Hindi?',             a:"Yes. All agents handle Hindi, English, and Hinglish naturally. Patients can switch mid-conversation and the agent follows. Default language is configurable per agent." },
  { q:"What if a patient asks something the AI can't handle?", a:"The agent escalates gracefully — it notifies your receptionist and tells the patient a team member will follow up shortly. No patient ever gets stuck." },
  { q:'Is there a contract or minimum commitment?', a:"No contract. Month-to-month billing. Cancel anytime with 30 days notice. We operate this way because we're confident the agents deliver measurable results." },
  { q:'Do you offer in-person demos for Mumbai clinics?', a:"Yes. If you're based in Mumbai, we can come to your clinic. We'll run the agent on your phone, walk through conversation flows, and answer questions from your staff." },
]

export const specialties = ['Dental','Dermatology / Aesthetic','Gynaecology','Orthopaedic','Eye Hospital','General / Family','Multi-Specialty','Other']
export const challenges   = ['Missing too many calls','WhatsApp messages going unanswered','Not enough Google reviews','Patients not returning for follow-ups','All of the above']
export const whatHappens  = [
  "We understand your clinic's specific challenges",
  'Live WhatsApp agent demo — on your own phone',
  'Honest recommendation on which agent fits best',
  'Clear timeline and next steps — no surprises',
]
