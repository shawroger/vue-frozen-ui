<template>
	<div v-if="show$" class="ui-dialog show">
		<div class="ui-dialog-cnt">
			<div class="ui-dialog-bd">
				<div v-if="__html$" v-html="__html$"></div>
				<slot name="body">{{ body$ }}</slot>
			</div>
			<div class="ui-dialog-ft" v-show="showFooter">
				<button v-if="showBtn" @click="clickDefaultBtn">{{ btnText }}</button>
				<slot name="footer"></slot>
			</div>
			<i
				v-show="cross$"
				class="ui-dialog-close"
				data-role="button"
				@click="close"
			></i>
		</div>
	</div>
</template>

<script>
export default {
	name: "fz-dialog",
	props: {
		cross: {
			type: Boolean,
			default: false,
		},
		show: {
			type: Boolean,
			default: false,
		},
		showBtn: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
		btnText: {
			type: String,
			default: "确认",
		},
		body: {
			type: String,
			default: "标题",
		},
		__html: {
			type: String,
			default: "",
		},
		afterClose: {
			type: Function,
			default: () => {},
		},
	},
	data() {
		return {
			show$: false,
			cross$: false,
			body$: "标题",
			__html: "",
			afterClose$: () => {},
		};
	},
	methods: {
		close() {
			this.show$ = false;
			this.afterClose$();
		},

		open() {
			this.show$ = true;
		},

		toggle() {
			this.show$ = !this.show$;
			if (!this.show$) {
				this.afterClose$();
			}
		},
		clickDefaultBtn() {
			this.show$ = false;
			this.afterClose$();
		},

		mergeConf(config) {
			for (let i in config) {
				this[i + "$"] = config[i];
			}
		},
	},
	watch: {
		show(val) {
			this.show$ = val;
		},
		cross(val) {
			this.cross$ = val;
		},
	},
	created() {
		this.show$ = this.show;
		this.cross$ = this.cross;
		this.body$ = this.body;
		this.__html$ = this.__html;
		this.afterClose$ = this.afterClose;
	},
};
</script>

<style scoped></style>
