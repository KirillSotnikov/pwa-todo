<template>
  <div id="app">
    <app-navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Layout/Navbar'
export default {
  components: {
    'app-navbar': Navbar
  }
}
</script>
