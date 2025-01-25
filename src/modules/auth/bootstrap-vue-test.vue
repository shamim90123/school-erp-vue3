<template>
  <div id="app" class="container mt-5">
    <b-button variant="primary" @click="showAlert">Click Me</b-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showAlert() {
      alert('BootstrapVue is working!');
    }
  }
}
</script>