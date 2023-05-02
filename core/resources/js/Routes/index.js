import { createRouter, createWebHistory } from 'vue-router'

//componentes
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import PricingPage from '../pages/PricingPage.vue'
import ClientsPage from '../pages/ClientsPage.vue'
import ContactUsPage from '../pages/ContactUsPage.vue'

const routes = [
    { path: '/', component: HomePage, name:'home' },
    { path: '/about', component: AboutPage, name:'about' },
    { path: '/services', component: ServicesPage, name:'services' },
    { path: '/pricing', component: PricingPage, name:'pricing' },
    { path: '/clients', component: ClientsPage, name:'clients' },
    { path: '/contact', component: ContactUsPage, name:'contact' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;