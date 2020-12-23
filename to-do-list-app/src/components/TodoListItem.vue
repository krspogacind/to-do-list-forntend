<template>
  <div class="todo-card">
    <div class="todo-card card text-white bg-dark">
      <h3 class="card-header">{{ todo.title }}</h3>
      <div class="card-body">
        <h5 class="card-title">Description:</h5>
        <p class="card-text">{{ todo.description }}</p>
        <hr>
        <p class="card-text h5">Priority: <span :style="{ color: priorityColor }"> {{ todo.priority.toUpperCase() }}</span></p>
        <hr>
        <p class="card-text h5">
          Completed: 
          <span v-if="todo.completed"> ✓ </span>
          <span v-else> 
            ✗       
            <button class="btn btn-success float-right" @click="complete(todo.id)">Mark as done</button>
          </span>
        </p>
      </div>
      <div class="card-footer">
        <div class="float-right">
          <button class="btn btn-warning mr-2" @click="showUpdateModal = true">Update</button>
          <TodoListItemForm :todo="todo" page_title="Update to-do item" button_text="Update" @update-item="updateItem" v-if="showUpdateModal" @close="showUpdateModal = false"/>
          <button class="btn btn-danger" @click="deleteItem">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TodoListItemForm from './TodoListItemForm.vue';

export default {
  name: 'TodoListItem',
  components: {
    TodoListItemForm
  },
  props: ['todo'],
  data() {
    return {
      showUpdateModal: false
    }
  },
  computed: {
    priorityColor() {
      if (this.todo.priority === 'high'){
        return 'red';
      }else if(this.todo.priority === 'medium'){
        return 'yellow';
      }else{
        return 'green';
      }
    }
  },

  methods: {
    complete(id) {
      const data = {
        completed: true
      }

      axios.put('todo-items/' + id, data)
        .then(
          response => {
            this.$emit('complete', id)
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

    updateItem(todo) {
      this.$parent.updateItem(todo);
    },
  }
}
</script>

<style scoped>
.todo-card {
  margin-left: 40px;
  margin-bottom: 40px;
  max-width: 450px;
  width: 450px;
}

.todo-card.card {
  height: 350px;
}
</style>