<template>
	<div>
		<button :class="[ __fz_toShapeName(shape), disabled ? 'disabled': __fz_toClassName(type) ]"
			@click="__fz_emitClick">
			<slot></slot>
		</button>
	</div>
</template>

<script>
	export default {
		name: "fz-button",
		props: {
			type: {
				type: String,
				default: "default"
			},
			shape: {
				type: String,
				default: 'btn'
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			__fz_toShapeName(type) {

				const shapeName = [{
						name: "btn",
						className: "ui-btn"
					},
					{
						name: "bar",
						className: "ui-btn-lg"
					},
					{
						name: "big",
						className: "ui-btn-lg-nowhole"
					}
				];

				for (let i in shapeName) {
					if (shapeName[i].name === type) {
						return shapeName[i].className;
					}
				}
				return "ui-btn";
			},
			__fz_toClassName(type) {

				const className = [{
						name: "default",
						className: ""
					},
					{
						name: "primary",
						className: "ui-btn-primary"
					},
					{
						name: "danger",
						className: "ui-btn-danger"
					},
					{
						name: "disabled",
						className: "disabled"
					},
					{
						name: "del",
						className: "ui-actionsheet-del"
					}
				];
				
				for (let i in className) {
					if (className[i].name === type) {
						return className[i].className;
					}
				}
				return "";
			},
			__fz_emitClick() {
				this.$emit("click");
			}
		}
	}
</script>

<style scoped>
</style>