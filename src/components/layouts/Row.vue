<template>
	<div :class="['ui-row-flex', 'ui-whitespace', row ? 'ui-row-flex-ver' : '']">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "fz-row",
		props: {
			row: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped>

</style>