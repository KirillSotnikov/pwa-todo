<template>
  <div>
    <div class="container py-4 home-section d-flex flex-column align-items-center justify-content-center">
      <h1 class="mb-3">Hello, dude!</h1>
      <h3 class="mb-4">Choose your app in our list.</h3>
      <router-link to="/list" class="btn btn-outline-info">App List</router-link>
      <span class="line my-4"></span>
      <h3 class="mb-4">Read about us!</h3>
      <router-link to="/about" class="btn btn-outline-info">About Us</router-link>
    </div>
  </div>
</template>

<style scoped>
  .home-section{
    height: calc(100vh - 56px);
  }
  .line{
    display: block;
    width: 60px;
    height: 1px;
    background: #000;
  }
</style>
