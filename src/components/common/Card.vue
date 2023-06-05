<template>
    <div class="card">
      <!-- Card content goes here -->
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardPage',
    props: {
      title: String,
      description: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 14px;
    color: #777;
  }
  </style>
  