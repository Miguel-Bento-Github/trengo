import App from "@/App.vue";
import "@/styles/boot.css";
import { router } from "@/plugins/router";
import { FontAwesomeIcon } from "@/plugins/fontawesome";
import { createPinia } from "pinia";
import { createApp } from "vue";

createApp(App)
  .use(createPinia())
  .use(router)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount("#app");
