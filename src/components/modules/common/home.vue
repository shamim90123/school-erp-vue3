<template>
    <div class="card">
      <img :src="image" alt="Card Image" />
      <div class="card-content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'homePage',
    props: {
      title: String,
      description: String,
      image: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    width: 300px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;
  }
  
  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 20px;
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
  