import App from "./App.vue";

import "./components/frozen-ui.css";

import FrozenUI from "./components";

import {createApp} from "vue"
createApp(App).use(FrozenUI).mount("#app");

