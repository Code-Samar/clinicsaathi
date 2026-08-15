import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import FAQ from '../views/FAQ.vue'
import Legal from '../views/Legal.vue'
import NotFound from '../views/NotFound.vue'
import HowItWorks from '../views/HowItWorks.vue'
import Solution from '../views/Solution.vue'
import Resources from '../views/Resources.vue'

const routes=[
 {path:'/',component:Home,meta:{title:'Aipitals | AI Patient Operations for Clinics & Diagnostic Centres'}},
 {path:'/products',component:Products,meta:{title:'AI Agents for Clinics & Diagnostic Centres | Aipitals'}},
 {path:'/products/:slug',component:ProductDetail},
 {path:'/solutions/:type',component:Solution},
 {path:'/how-it-works',component:HowItWorks,meta:{title:'How Aipitals Works | AI Patient Operations'}},
 {path:'/about',component:About,meta:{title:'About Aipitals | AI Healthcare Automation'}},
 {path:'/resources',component:Resources,meta:{title:'Resources | Aipitals'}},
 {path:'/contact',component:Contact,meta:{title:'Contact Aipitals | Automate Your Patient Operations'}},
 {path:'/faq',component:FAQ,meta:{title:'FAQ | Aipitals'}},
 {path:'/privacy',component:Legal,props:{type:'privacy'},meta:{title:'Privacy Policy | Aipitals'}},
 {path:'/terms',component:Legal,props:{type:'terms'},meta:{title:'Terms of Service | Aipitals'}},
 {path:'/:pathMatch(.*)*',component:NotFound,meta:{title:'Page Not Found | Aipitals'}}
]
const router=createRouter({history:createWebHistory(),routes,scrollBehavior:()=>({top:0})})
router.afterEach(to=>{document.title=to.meta.title||'Aipitals | AI Patient Operations'})
export default router