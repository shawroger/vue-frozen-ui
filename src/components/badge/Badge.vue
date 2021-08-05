<template>
	<div :class="[toClassName(type)]">
	</div>
</template>

<script>
	export default {
		name: "fz-badge",
		props: {
			type: {
				type: String,
				default: 'redSpot'
			}
		},
		data() {
			return {
				className: [{
					name: "redSpot",
					className: "ui-reddot ui-reddot-static"
				}, ]
			}
		},
		methods: {
			toClassName(type) {
				for (let i in this.className) {
					if (this.className[i].name === type) {
						return this.className[i].className;
					}
				}
				return this.className[0];
			}
		}
	}
</script>

<style scoped>
</style>