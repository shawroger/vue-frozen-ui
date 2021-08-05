<template>
	<div class="ui-progress">
		<span :style="{width: value$ + '%'}"></span>
	</div>
</template>

<script>
	export default {
		name: "fz-progress",
		props: {
			value: {
				type: Number,
				default: 50
			}
		},
		data() {
			return {
				value$: 50
			}
		},
		watch: {
			value(val) {
				this.value$ = val
			}
		}
	}
</script>

<style scoped>

</style>