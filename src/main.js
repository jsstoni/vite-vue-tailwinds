import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";
import routes from "@/routes";
import stores from "@/stores";

const vueApp = createApp(App);
vueApp.use(stores);
vueApp.use(routes);
vueApp.mount("#app");
