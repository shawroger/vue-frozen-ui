<template>
	<div class="ui-form-item ui-form-item-switch ui-border-b">
		<p>
			<slot>{{text}}</slot>
		</p>
		<label class="ui-switch">
			<input type="checkbox" :value="value" @change="modelInput($event.target.checked)">
		</label>
	</div>
</template>

<script>
	export default {
		name: "fz-switch",
		model: {
			prop: "value",
			event: "__changeInput"
		},
		props: {
			text: {
				type: String,
				default: "内容"
			},
			value: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {

			}
		},
		methods: {
			modelInput(val) {
				this.$emit('__changeInput', val);
				this.$emit('change', val);
			}
		}
	}
</script>

<style scoped>

</style>