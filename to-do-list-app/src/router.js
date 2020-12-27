import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Registration from "./components/Registration.vue";
import Login from "./components/Login.vue";
import TodoList from "./components/TodoList.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    { path: "/registration", component: Registration },
    { path: "/login", component: Login },
    { path: "/todo-list", component: TodoList },
  ],
});

export default router;
