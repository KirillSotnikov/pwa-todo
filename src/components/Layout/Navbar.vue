<template>
  <nav class="navbar navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Best App</router-link>
    <ul class="navbar-nav flex-row">
      <li class="nav-item mx-3">
        <router-link active-class="nav-link-active" class="nav-link" to="/about">About us</router-link>
      </li>
      <li class="nav-item mx-3">
        <router-link active-class="nav-link-active" class="nav-link" to="/list">App list</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .nav-link-active{
    color: #000 !important;
  }
</style>
