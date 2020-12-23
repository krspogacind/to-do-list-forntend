<template>
    <button class="btn btn-primary button-style" @click="showModal = true">Add to-do item</button>
    <TodoListItemForm page_title="Add new to-do-item" button_text="Save" @add-item="addItem" v-if="showModal" @close="showModal = false"/>
    <div class="card-deck">
        <TodoListItem
          @complete="complete" 
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
      showModal: false,
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
    },

    updateItem(data) {
      console.log(data);
      const index = this.todoList.findIndex(element => element.id === data.id);
      this.todoList.splice(index, 1, data);
    },

    complete(id) {
      const index = this.todoList.findIndex(element => element.id === id);
      this.todoList[index].completed = true;
    }
  }
}
</script>

<style scoped>
.button-style {
  margin-left: 65px;
  margin-bottom: 20px;
}
</style>