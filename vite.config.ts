/// <reference types="@types/node" />

import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const serve = defineConfig({
	plugins: [vue()],
});

const build = defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: path.resolve(path.dirname(""), "src/components/index.ts"),
			name: "FrozenUI",
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				globals: {
					vue: "Vue",
				},
			},
		},
	},
});

export default ({ command, mode }) => {
	return serve;
	if (command === "serve") {
		return serve;
	} else {
		return build;
	}
};
