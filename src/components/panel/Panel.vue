<template>
	<section
		:class="[
			'ui-panel',
			subtitle ? 'ui-panel-center-multi' : 'ui-panel-center',
			'ui-border-tb',
		]"
	>
		<h2 class="ui-arrowlink" @click="clickItem">
			<span>{{ title }}</span>
			<span v-if="subtitle" class="ui-panel-subtitle">{{ subtitle }}</span>
			<span v-if="tips" class="ui-panel-title-tips" @click="clickTips">{{
				tips
			}}</span>
		</h2>
	</section>
</template>

<script>
export default {
	name: "fz-panel",
	props: {
		title: {
			type: String,
			default: "标题",
		},
		subtitle: {
			type: String,
			default: "",
		},
		tips: {
			type: String,
			default: "",
		},
	},
	methods: {
		clickItem() {
			this.$emit("click");
		},
		clickTips() {
			this.$emit("click-tip");
		},
	},
};
</script>

<style scoped></style>
