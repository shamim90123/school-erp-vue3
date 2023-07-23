<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Login <button @click="changeLanguage" class="btn btn-sm btn-success" style="width:auto;float: right;">{{ $i18n.locale }}</button></h2>
  
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
  export default {
    name: 'LoginForm',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    created () {
      console.log('Login Created')
    },
    methods: {
      login() {
        this.$router.push('/home')
        // Perform login logic here
        // You can use Axios or fetch API to send a login request to the server
      },
      changeLanguage() {
        const newLocale = this.$i18n.locale === 'en' ? 'fr' : 'en';
        this.$i18n.locale = newLocale;
      },
    },
  };
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.login-card {
  max-width: 400px;
  padding: 40px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
