<template>
	<div>
		<div
			:class="['ui-form-item', title ? '' : 'ui-form-item-pure', 'ui-border-b']"
		>
			<label v-if="title">
				{{ title }}
			</label>
			<input
				type="text"
				:placeholder="placeholder"
				:value="value"
				@input="modelInput($event.target.value)"
			/>
			<a
				href="javascript:;"
				v-show="clearIcon"
				class="ui-icon-close"
				@click="clearInput"
			></a>
		</div>
		<p class="ui-form-tips length-control" v-if="maxLength">
			{{ value.length }}/{{ maxLength }}
		</p>
	</div>
</template>

<script>
export default {
	name: "fz-input",
	model: {
		prop: "value",
		event: "__changeInput",
	},
	props: {
		value: {
			type: String,
			default: "",
		},
		title: {
			type: String,
			default: "标题",
		},
		placeholder: {
			type: String,
			default: "请输入 ...",
		},
		maxLength: {
			type: Number,
			default: 0,
		},
		clearIcon: {
			type: Boolean,
			default: true,
		},
	},
	methods: {
		modelInput(val) {
			this.$emit("__changeInput", val);
			this.$emit("change", val);
		},
		clearInput() {
			this.$emit("clear");
		},
	},
	watch: {
		value(val, oldVal) {
			if (val.length > this.maxLength && this.maxLength > 0) {
				const fullText = val.substr(0, this.maxLength);
				this.$emit("overflow", val, fullText);
			}
		},
	},
};
</script>

<style scoped>
.length-control {
	padding-bottom: 6px;
}
</style>
