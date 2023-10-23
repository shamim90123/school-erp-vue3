<template>
  <div class="login-container">
    <div class="login-card my-component">
      <p>SCSS implementation!</p>
      <h2>Login <button @click="changeLanguage" class="btn btn-sm btn-success" style="width:auto;float: right;">{{ $i18n.locale == 'en' ? 'Bn' : 'En' }}</button></h2>
  
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p class="float-right">{{ $t('greeting') }}</p>
    </div>
  </div>
</template>

  <script>
  // import api_config
  import RestApi, { authServiceBaseURL } from '@/config/api_config.js'

  export default {
    name: 'LoginForm',
    data() {
      return {
        username: 'opt.shamim@gmail.com',
        password: '123456',
      };
    },
    created () {
      console.log('Login Created')
      console.log(authServiceBaseURL)
    },
    methods: {
      async login() {
        // You can use Axios or fetch API to send a login request to the server
        const loginData = {
          email: this.username,
          password: this.password
        }
        const apiResponse = await RestApi.postData(authServiceBaseURL, '/api/auth/login', loginData)
        console.log(apiResponse)
        if (apiResponse.user) {
          console.log('Login successful!', apiResponse.data)
          this.$router.push('/home')
        } else {
          console.error('Login failed:', apiResponse.data)
        }

         // Make the API call using Axios
      // axios.post('http://127.0.0.1:8000/api/auth/login', loginData)
      //   .then(response => {
      //     console.log('Login successful!', response)
      //     this.$router.push('/home')
      //   })
      //   .catch(error => {
      //     console.error('Login failed:', error.response.data);
      //   });


      },
      changeLanguage() {
        const newLocale = this.$i18n.locale === 'en' ? 'bn' : 'en';
        this.$i18n.locale = newLocale;
      },
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