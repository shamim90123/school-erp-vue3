import { createRouter, createWebHistory } from 'vue-router';

// Import your views/components
// import Home from './views/Home.vue';
import RegistrationForm from '../components/modules/auth/Registration.vue';
import homePage from '../components/modules/common/home.vue';

const routes = [
  {
    path: '/home',
    name: 'homePage',
    component: homePage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegistrationForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
