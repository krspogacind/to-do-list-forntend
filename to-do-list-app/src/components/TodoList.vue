<template>
    <TodoListItem 
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"/>
</template>

<script> 
import axios from 'axios';
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  data() {
    return {
      todoList: []
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
  }
}
</script>