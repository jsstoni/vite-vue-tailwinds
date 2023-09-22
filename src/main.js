import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "./routes";

const vueApp = createApp(App);
vueApp.use(routes);
vueApp.mount("#app");
