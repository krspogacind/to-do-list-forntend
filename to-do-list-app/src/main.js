import { createApp } from 'vue'
import App from './App.vue'
import "./index.css";
import router from "./router.js";
import "./axios";

createApp(App).use(router).mount("#app");
