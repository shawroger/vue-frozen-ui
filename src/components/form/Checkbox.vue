<template>
	<div>
		<div
			class="ui-form-item ui-form-item-checkbox ui-border-b"
			v-for="(item, index) in source"
			:key="item[props[0]]"
			v-if="!useList"
		>
			<label class="ui-checkbox">
				<input
					type="checkbox"
					@click="
						__clickRadioItem(
							item[props[0]],
							item[props[1]],
							index,
							$event.target.checked
						)
					"
				/>
			</label>
			<p>{{ item[props[1]] }}</p>
		</div>

		<ul
			class="ui-list ui-list-text ui-list-checkbox ui-border-b"
			v-if="useList"
		>
			<li
				class="ui-border-t"
				v-for="(item, index) in source"
				:key="item[props[0]]"
			>
				<label class="ui-checkbox">
					<input
						type="checkbox"
						@click="
							__clickRadioItem(
								item[props[0]],
								item[props[1]],
								index,
								$event.target.checked
							)
						"
					/>
				</label>
				<p>{{ item[props[1]] }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "fz-checkbox",
	model: {
		prop: "value",
		event: "__changeInput",
	},
	props: {
		source: {
			type: Array,
			default: () => [
				{
					value: "checkbox",
					label: "多选",
				},
			],
		},
		props: {
			type: Array,
			default: () => ["value", "label"],
		},
		value: {
			type: Array,
			default: () => [],
		},
		useList: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			checkbox: [],
		};
	},
	methods: {
		__clickRadioItem(value, label, index, checked) {
			this.checkbox[index] = checked ? 1 : 0;
			let fallback = {},
				collected = [];
			fallback[this.props[0]] = value;
			fallback[this.props[1]] = label;
			fallback["checked"] = checked;
			fallback["index"] = index;
			for (let i in this.checkbox) {
				if (this.checkbox[i]) {
					collected.push(this.source[i]);
				}
			}
			this.$emit("select", fallback);
			this.$emit("__changeInput", collected);
		},
	},
	created() {
		this.checkbox = Array(this.source.length).fill(0);
	},
};
</script>

<style scoped></style>
