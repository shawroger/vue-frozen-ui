<template>
	<div>
		<!--using div tag -->
		<div
			class="ui-form-item ui-form-item-radio ui-border-b"
			v-for="(item, index) in source"
			:key="item[props[0]]"
			v-if="!useList"
		>
			<label class="ui-radio" for="radio">
				<input
					type="radio"
					name="radio"
					@click="__clickRadioItem(item[props[0]], item[props[1]], index)"
				/>
			</label>
			<p>{{ item[props[1]] }}</p>
		</div>
		<!--using ul tag -->
		<ul class="ui-list ui-list-text ui-list-radio ui-border-tb" v-if="useList">
			<label class="ui-radio" for="radio">
				<input
					type="radio"
					name="radio"
					@click="__clickRadioItem(item[props[0]], item[props[1]], index)"
				/>
			</label>
			<p>{{ item[props[1]] }}</p>
		</ul>
	</div>
</template>

<script>
export default {
	name: "fz-radio",
	model: {
		prop: "value",
		event: "__changeInput",
	},
	props: {
		source: {
			type: Array,
			default: () => [
				{
					value: "radio",
					label: "单选",
				},
			],
		},
		props: {
			type: Array,
			default: () => ["value", "label"],
		},
		value: {
			type: String,
			default: "",
		},
		useList: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {};
	},
	methods: {
		__clickRadioItem(value, label, index) {
			let fallback = {};
			fallback[this.props[0]] = value;
			fallback[this.props[1]] = label;
			fallback["index"] = index;
			this.$emit("__changeInput", value);
			this.$emit("select", fallback);
		},
	},
};
</script>

<style scoped></style>
