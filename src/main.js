import { createApp } from "vue";
import App from "./App.vue";
import components from "@components/UI";
import router from "./router/router";
import directives from "./directives";

import "./index.css";

const app = createApp(App);

components.forEach(cmpnt => {
  app.component(cmpnt.name, cmpnt);
});

directives.forEach(directive => {
  app.directive(directive.name, directive);
});


app.use(router).mount("#app");
