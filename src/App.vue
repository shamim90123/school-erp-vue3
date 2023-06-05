<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

  export default {
    name: 'App',
    created () {
      console.log('App Component Created')
    }
  };
</script>
