import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Showcase from '@/pages/Showcase.vue'
import Profile from '@/pages/Profile.vue'
import { createAuthGuard } from "@auth0/auth0-vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/showcase',
    name: 'Showcase',
    component: Showcase,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: createAuthGuard(app)
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

