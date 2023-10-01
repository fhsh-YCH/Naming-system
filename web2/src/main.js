// import { createApp } from "vue";
// import "./style.css";
// import App from "./App.vue";

// createApp(App).mount("#app");

// import { createApp } from "vue";
// import "./style.css";
// import App from "./APP.vue";
// import router from "./router";

// const app = createApp(App);

// app.use(router);

// app.mount("#app");

// createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import "./style.css";
import App from "./APP.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

createApp(App).use(router).mount("#app");