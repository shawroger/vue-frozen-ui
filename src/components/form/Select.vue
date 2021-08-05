<template>
	<div class="ui-form-item ui-border-b">
		<label>
			<slot>{{text}}</slot>
		</label>
		<div class="ui-select-group">
			<div class="ui-select select-control" v-for="(item, index) in source" :key="'select-'+index">
				<select @change="__changeSelect($event.target.value, index)">
					<option :selected="subItem[props[2]]" v-for="(subItem, subIndex) in item" :key="subItem.value">
						{{subItem[props[1]]}}
					</option>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "fz-select",
		model: {
			prop: "value",
			event: "__changeInput"
		},
		props: {
			text: {
				type: String,
				default: "选择"
			},
			props: {
				type: Array,
				default: () => ["value", "label", "selected"]
			},
			source: {
				type: Array,
				default: () => [
					[]
				]
			},
			value: {
				type: Array,
				default: () => []
			},
		},
		data() {
			return {

			}
		},
		methods: {
			__changeSelect(e, index) {
				let arr = this.value.slice();
				for (let i in this.source[index]) {
					if (this.source[index][i][this.props[1]] === e) {
						arr[index] = this.source[index][i];
					}
				}
				this.$emit("__changeInput", arr);
				this.$emit("select", e, index);
			}
		},
		created() {
			let arr = [];
			for (let i in this.source) {
				for (let j in this.source[i]) {
					if (this.source[i][j][this.props[2]]) {
						arr.push(this.source[i][j]);
					} else if (j == (this.source[i].length - 1)) {
						arr.push(this.source[i][0]);
					}
				}

			}
			this.$emit("__changeInput", arr);
		}
	}
</script>

<style scoped>
	.select-control {
		margin-right: 12px;
	}
</style>