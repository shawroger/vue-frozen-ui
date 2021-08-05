<template>
	<div class="ui-actionsheet show" v-if="show$">
		<div
			class="ui-actionsheet-cnt am-actionsheet-down"
			style="position: relative"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "fz-modal",
	props: {
		show: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			show$: false,
		};
	},
	methods: {
		close() {
			this.show$ = false;
		},

		open() {
			this.show$ = true;
		},

		toggle() {
			this.show$ = !this.show$;
		},
	},
	watch: {
		show(val) {
			this.show$ = val;
		},
	},
	created() {
		this.show$ = this.show;
	},
};
</script>

<style scoped></style>
