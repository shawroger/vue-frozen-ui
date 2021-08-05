import { createApp } from "vue";
import Dialog from "./Dialog.vue";

export interface MessageConfig {
	body?: string;
	html?: string;
	btnText?: string;
	afterClose?: () => void;
}

export function useDialog(config: MessageConfig = {}) {
	const $el = document.createElement("div");

	const vm = createApp(Dialog).mount($el);

	document.body.appendChild($el);
	if (config.html) {
		(config as any).__html = config.html;
	}

	if (!config.afterClose) {
		config.afterClose = vm.$el.remove;
	} else {
		const afterclose = config.afterClose!;

		config.afterClose = () => {
			afterclose();
			$el.remove();
		};
	}

	(vm as any).mergeConf(config);
	(vm as any).open();
}
