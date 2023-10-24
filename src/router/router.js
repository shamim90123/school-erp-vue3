import { createRouter, createWebHistory } from 'vue-router';

import RegistrationForm from '../modules/auth/Registration.vue';
import LoginForm from '../modules/auth/Login.vue';
import homePage from '../modules/common/home.vue';
import LayoutPage from "@/layouts/Layout.vue";
import bootstrapVueTest from '../modules/auth/bootstrap-vue-test.vue';

const NotFoundPage = () => import('../views/pages/notFoundPage.vue')

const routes = [
  // {
  //   path: '/',
  //   name: 'LoginForm',
  //   component: LoginForm,
  // },
  {
    path: '/bootstrapVueTest',
    name: 'bootstrapVueTest',
    component: bootstrapVueTest,
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
  {
    path: "/",
    component: LayoutPage,
    children: [
      {
        path: "",
        component: LoginForm,
      },
      // Other child routes...
    ],
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
