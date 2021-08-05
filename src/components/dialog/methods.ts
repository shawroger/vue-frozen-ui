import type { App, Plugin } from "vue";
import { createApp } from "vue";
import Dialog from "./Dialog.vue";

export interface MessageOption {
	name: string;
}

export interface MessageConfig {
	body?: string;
	__html?: string;
	btnText?: string;
}

export function useDialog(config: MessageConfig = {}) {
	const $el = document.createElement("div");

	const vm = createApp(Dialog).mount($el);

	document.body.appendChild($el);
	(vm as any).mergeConf(config);
	(vm as any).open();
}
