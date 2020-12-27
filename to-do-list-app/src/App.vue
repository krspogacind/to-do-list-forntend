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
  },
  data() {
    return {
      user: null
    }
  },
  created() {
    axios.post('me')
      .then(
        response => {
          this.user = response.data;
          this.$store.dispatch('user', response.data);
        }
      )
  }
}
</script>

<style scoped>
.router-view {
  margin-top: 4%
}
</style>
