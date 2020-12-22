<template>
  <TheNavbar/>
  <div class="router-view">
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<style scoped>
.router-view {
  margin-top: 4%
}
</style>
