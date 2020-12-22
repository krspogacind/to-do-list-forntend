<template>
  <nav class="navbar navbar-expand navbar-dark bg-primary fixed-top">
    <router-link to="/" class="navbar-brand">To do list app</router-link>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/registration" class="nav-link">Registration</router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>