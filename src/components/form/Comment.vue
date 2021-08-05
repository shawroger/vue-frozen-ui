<template>
	<section class="ui-input-wrap ui-border-t">
		<div
			:class="['ui-input', 'ui-border-radius', btnText ? '' : 'ui-input-text']"
		>
			<input
				type="text"
				:value="value"
				@input="modelInput($event.target.value)"
				:placeholder="placeholder"
			/>
		</div>
		<button class="ui-btn" v-if="btnText" @click="__fz_clickbtn">
			{{ btnText }}
		</button>
	</section>
</template>

<script>
export default {
	name: "fz-comment",
	model: {
		prop: "value",
		event: "__changeInput",
	},
	props: {
		btnText: {
			type: String,
			default: "提交",
		},
		placeholder: {
			type: String,
			default: "评论",
		},
		value: {
			type: String,
			default: "",
		},
	},
	data() {
		return {};
	},
	methods: {
		modelInput(val) {
			this.$emit("__changeInput", val);
			this.$emit("change", val);
		},
		__fz_clickbtn() {
			this.$emit("click");
		},
	},
};
</script>

<style scoped></style>
