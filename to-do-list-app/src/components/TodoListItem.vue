<template>
  <div class="card ml-5" style="width: 20%">
    <h3 class="card-header">{{ todo.title }}</h3>
    <div class="card-body">
      <h5 class="card-title">Description:</h5>
      <p class="card-text">{{ todo.description }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Priority: {{todo.priority }}</li>
      <li class="list-group-item">
        Completed: 
        <span v-if="todo.completed"> ✓ </span>
        <span v-else> 
          ✗       
          <button class="btn btn-primary ml-3">Mark as done</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['todo']
}
</script>