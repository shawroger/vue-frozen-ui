import App from "./App.vue";

import "./component/frozen-ui.css";

import FrozenUI from "./components";

if (import.meta.env.DEV) {
	const { createApp } = await import("vue");
	createApp(App).use(FrozenUI).mount("#app");
}
