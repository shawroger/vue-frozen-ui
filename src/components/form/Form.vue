<template>
	<div class="ui-form ui-border-t">
		<form :action="action">
			<slot></slot>
		</form>
	</div>
</template>

<script>
	export default {
		name: "fz-form",
		props: {
			action: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style scoped>
</style>