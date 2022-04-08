import { createApp } from "vue";
import store from "./stores";
import App from "./App.vue";
import router from "./route";
// 引入重置样式
import "normalize.css";
import "./assets/styles/base.css";
const app = createApp(App);
// 挂载store
app.use(store);
// 挂载router
app.use(router);

app.mount("#app");
