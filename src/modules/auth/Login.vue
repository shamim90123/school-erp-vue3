<template>
  <div class="login-container">
    <div class="login-card my-component">
      <p>SCSS implementation!</p>
      <h2>
        Login
        <button
          @click="changeLanguage"
          class="btn btn-sm btn-success"
          style="width:auto;float: right;"
        >
          {{ currentLocale === 'en' ? 'Bn' : 'En' }}
        </button>
      </h2>

      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p class="float-right">{{ greeting }}</p>
    </div>
  </div>
</template>

<script>
// Import API configuration
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n'; // Import useI18n hook
import { useRouter } from 'vue-router'; // Import useRouter hook
import RestApi, { authServiceBaseURL } from '@/config/api_config.js';

export default {
  name: 'LoginForm',
  setup() {
    const { t, locale } = useI18n(); // Get translation function and locale from i18n
    const router = useRouter(); // Get the router instance

    const username = ref('opt.shamim@gmail.com');
    const password = ref('123456');

    // Reactive greeting that updates when locale changes
    const greeting = computed(() => t('greeting')); // Make greeting reactive

    const login = async () => {
      const loginData = {
        email: username.value,
        password: password.value,
      };

      try {
        const apiResponse = await RestApi.postData(authServiceBaseURL, '/api/auth/login', loginData);
        console.log(apiResponse);
        
        if (apiResponse.user) {
          console.log('Login successful!', apiResponse.data);
          // Navigate to home after successful login
          router.push('/home');
        } else {
          console.error('Login failed:', apiResponse.data);
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    };

    const changeLanguage = () => {
      const newLocale = locale.value === 'en' ? 'bn' : 'en'; // Use locale.value for reactivity
      locale.value = newLocale; // Change the locale dynamically
    };

    return {
      username,
      password,
      login,
      changeLanguage,
      currentLocale: locale, // Make locale accessible in the template
      greeting, // Use the computed greeting for the template
    };
  },
};
</script>

<style lang="scss">
// Define SaaS styles here
$primary-color: #007bff;
  .my-component {
    color: $primary-color;
    p {
      font-size: 20px;
    }
  }
</style>
