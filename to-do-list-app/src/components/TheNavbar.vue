<template>
  <nav class="navbar navbar-expand navbar-dark bg-primary fixed-top">
    <router-link to="/" class="navbar-brand">To do list app</router-link>
      <ul class="navbar-nav ml-auto" v-if="!user">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/registration" class="nav-link">Registration</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto" v-else>
        <li class="nav-item">
          <a href="javascript:void(0)" @click="handleLogOut"  class="nav-link">Logout</a>
        </li>
      </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheNavbar',
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    handleLogOut() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$router.push('/');
    }
  }
}
</script>