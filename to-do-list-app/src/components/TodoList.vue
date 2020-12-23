<template>
    <button class="btn btn-primary ml-5 mb-3" @click="showModal = true">Add to-do item</button>
    <TodoListItemForm @add-item="addItem" v-if="showModal" @close="showModal = false"/>
    <div class="card-deck">
        <TodoListItem 
          v-for="todo in todoList"
          :key="todo.id"
          :todo="todo"/>
    </div>
</template>

<script> 
import axios from 'axios';
import TodoListItem from './TodoListItem.vue';
import TodoListItemForm from './TodoListItemForm.vue';

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
    TodoListItemForm
  },
  data() {
    return {
      todoList: [],
      showModal: false
    }
  },
  created() {
    axios.get('todo-items')
      .then(
        response => {
          this.todoList = response.data;
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

  methods: {
    addItem(data) {
      this.todoList.push(data);
    }
  }
}
</script>