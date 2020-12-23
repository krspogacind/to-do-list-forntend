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
            <button class="btn btn-primary ml-3">Mark as done</button>
          </span>
        </p>
      </div>
      <div class="card-footer">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['todo'],
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
  height: 300px;
}
</style>