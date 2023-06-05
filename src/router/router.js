import { createRouter, createWebHistory } from 'vue-router';

import RegistrationForm from '../components/modules/auth/Registration.vue';
import LoginForm from '../components/modules/auth/Login.vue';
import homePage from '../components/modules/common/home.vue';

const routes = [
  {
    path: '/',
    name: 'LoginForm',
    component: LoginForm,
  },
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
