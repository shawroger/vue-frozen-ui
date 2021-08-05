<template>
	<div :class="['ui-col', span ? 'ui-col-' + span : 'ui-col']">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "fz-col",
		props: {
			span: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>

</style>