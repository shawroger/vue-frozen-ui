<template>
	<li :class="['ui-col', 'ui-col-' + span]">
		<slot></slot>
	</li>
</template>

<script>
	export default {
		name: "fz-list-col",
		props: {
			span: {
				type: Number,
				default: 25
			},
		}
	}
</script>

<style scoped>

</style>