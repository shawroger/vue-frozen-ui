<template>
	<div>
		<section class="ui-notice">
			<i v-show="showIcon"></i>
			<slot></slot>
			<p v-text="text"></p>
			<div class="ui-notice-btn">
				<button
					class="ui-btn-primary ui-btn-lg"
					@click="clickBtn($refs.__dialog)"
					v-show="showBtn"
				>
					{{ btnText }}
				</button>
				<slot name="footer"></slot>
			</div>
		</section>
		<fz-dialog ref="__dialog">
			<template v-slot:header>
				<slot name="dialogHeader">{{ dialog.header }}</slot>
			</template>
			<template v-slot:body>
				<slot name="dialogBody"></slot>
			</template>
		</fz-dialog>
	</div>
</template>

<script>
import Dialog from "../dialog/Dialog.vue";
export default {
	name: "fz-info",
	components: {
		"fz-dialog": Dialog,
	},
	props: {
		text: {
			type: String,
			default: "温馨提示",
		},
		btnText: {
			type: String,
			default: "按钮",
		},
		showIcon: {
			type: Boolean,
			default: true,
		},
		showBtn: {
			type: Boolean,
			default: true,
		},
		dialog: {
			type: Object,
			default: () => {
				return {
					header: "提示",
					body: "内容",
				};
			},
		},
	},
	methods: {
		clickBtn(ref) {
			this.$emit("click", ref);
		},
	},
};
</script>

<style scoped></style>
