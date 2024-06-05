import App from "@/App.vue";
import "@/styles/boot.css";
import { router } from "@/plugins/router";
import { FontAwesomeIcon } from "@/plugins/fontawesome";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import { createApp } from "vue";

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

createApp(App)
  .use(pinia)
  .use(router)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount("#app");
