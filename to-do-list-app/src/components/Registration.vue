<template>
  <form @submit.prevent="handleSubmit">
    <!-- Name -->
    <div class="form-group col-lg-5 ml-auto mr-auto">
      <label for="name">Name</label>
      <input id="name" type="text" class="form-control" v-model="name" placeholder="Name" required>
    </div>

    <!-- Email Address -->
    <div class="form-group col-lg-5 ml-auto mr-auto">
      <label for="email">Email</label>
      <input @input="deleteMessage" id="email" type="email" class="form-control" v-model="email" placeholder="Email" required>
      <small>
        {{ email_message }}
      </small>
    </div>

    <!-- Password -->
    <div class="form-group col-lg-5 ml-auto mr-auto">
      <label for="password">Password</label>
      <input @input="deleteMessage" id="password" type="password" class="form-control" v-model="password" placeholder="Password" required>
      <small>
        {{ message }}
      </small>
    </div>

    <!-- Confirm Password -->
    <div class="form-group col-lg-5 ml-auto mr-auto">
      <label for="confirm_password">Confirm password</label>
      <input @input="deleteMessage" id="confirm_password" type="password" class="form-control" v-model="password_confirm" placeholder="Confirm password" required>
      <small>
        {{ message }}
      </small>
    </div>

    <div class="col-lg-5 ml-auto mr-auto">
      <button class="btn btn-primary btn-block">Registration</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Registration',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
      message: null,
      email_message: null
    }
  },
  methods: {
    handleSubmit() {
      this.message = null;
      if (this.password.length < 6 || this.password.length > 20) {
        this.message = "Password must have 6 to 20 characters"
        return;
      }
      if (this.password !== this.password_confirm) {
        this.message = "The password must match confirm password"
        return;
      }

      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      
      axios.post('auth/register', data)
        .then(
          response => {
            this.$wkToast(response.data.message);
            this.$router.push('/login');
          }
        ).catch(
          error => {
            if (error.response.status === 422){
              this.email_message = "Email already in use";
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
      if (this.email_message !== null){
        this.email_message = null;
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
