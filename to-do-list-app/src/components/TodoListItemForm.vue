<template>
  <div class="modal" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content text-white bg-dark">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add new to-do item</h5>
          <button type="button" class="close text-white" @click="$emit('close')">
            <span aria-hidden="true">&times;</span>
          </button>
				</div>
        <div class="modal-body">
          <small>{{ message }}</small>
          <form>
            <!-- Title -->
            <div class="form-group ml-auto mr-auto">
              <label for="title">Title</label>
              <input @input="deleteMessage" id="title" type="text" class="form-control" v-model="title" placeholder="Title">
            </div>

            <!-- Description -->
            <div class="form-group ml-auto mr-auto">
              <label for="description">Description</label>
              <textarea id="description" class="form-control" v-model="description" placeholder="Description" rows="3"></textarea>
            </div>

            <!-- Priority -->
            <div class="form-group ml-auto mr-auto">
              <label for="priority">Priority</label>
              <select @change="deleteMessage" id="priority" class="form-control custom-select" v-model="priority">
                <option disabled value="" selected>--- Select ---</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default text-white" @click="$emit('close')">Close</button>
          <button type="button" class="btn btn-primary" @click="handleSubmit">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodoListItemForm',
  data () {
    return {
      title: '',
      description: '',
      priority: '',
      message: null
    }
  },
  methods: {
    handleSubmit() {
      if (this.title === '' || this.priority === ''){
        this.message = 'Title and Priority fields are required'
      }

      const data = {
        title: this.title,
        description: this.description,
        priority: this.priority
      }
      
      axios.post('todo-items', data)
        .then(
          response => {
            this.$emit('add-item', response.data);
            this.$emit('close');
          }
        ).catch(
          error => {
            if (error.response.status === 401){
              this.$router.push('/login');
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