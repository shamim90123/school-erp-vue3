<template>
    <div class="layout">
      <!-- Layout content goes here -->
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import myMixin from "@/mixins/myMixin.js";
  
  export default {
    name: "LayoutPage",
    mixins: [myMixin],
    // Other component options...
  };
  </script>
  
  <style>
  /* Styles for the layout */
  </style>
  