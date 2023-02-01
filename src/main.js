import { createApp } from "vue";
import App from "./App.vue";
import components from "./components/UI";

import "./index.css"

const app = createApp(App)

components.forEach(cmpnt => {
	app.component(cmpnt.name, cmpnt)
})

app.mount("#app");
