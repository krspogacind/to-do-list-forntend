<template>
  <form @submit.prevent="handleSubmit">
    <!-- Email Address -->
    <div class="form-group col-lg-5 ml-auto mr-auto">
      <label for="email">Email</label>
      <input @input="deleteMessage" id="email" type="email" class="form-control" v-model="email" placeholder="Email">
      <small>
        {{ message }}
      </small>
    </div>

    <!-- Password -->
    <div class="form-group col-lg-5 ml-auto mr-auto">
      <label for="password">Password</label>
      <input @input="deleteMessage" id="password" type="password" class="form-control" v-model="password" placeholder="Password">
      <small>
        {{ message }}
      </small>
    </div>

    <div class="col-lg-5 ml-auto mr-auto">
      <button class="btn btn-primary btn-block">Login</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      message: null
    }
  },
  methods: {
    handleSubmit() {
      const data = {
        email: this.email,
        password: this.password,
      }
      
      axios.post('login', data)
        .then(
          response => {
            localStorage.setItem('token', response.data.access_token);
            console.log(response.data.user);
            this.$store.dispatch('user', response.data.user);
            this.$router.push('/');
          }
        ).catch(
          error => {
            if (error.response.status === 401){
              this.message = "Wrong username or password";
            } else {
              alert('Server error, try again');
            }
          }
        )
    },

    deleteMessage() {
      if (this.message !== null){
        this.message = null;
      }
    }
  }
}
</script>

<style scoped>
small {
  color: red;
}
</style>