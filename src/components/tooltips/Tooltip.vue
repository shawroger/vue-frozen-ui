<template>
	<div
		:class="[
			'ui-tooltips',
			toClassName(type).className,
			bottom ? 'ui-tooltips-action' : '',
		]"
		v-if="show"
		@click="clickTooltips"
	>
		<div :class="['ui-tooltips-cnt', toIconName(icon)]">
			<i
				:class="toClassName(type).iconClass"
				v-show="toClassName(type).showIcon"
			></i>
			<slot></slot>
			<a
				class="ui-icon-close"
				v-show="icon === 'cross'"
				@click="closeTooltips"
			></a>
		</div>
	</div>
</template>

<script>
export default {
	name: "fz-tooltip",
	props: {
		icon: {
			type: String,
			default: "default",
		},
		type: {
			type: String,
			default: "default",
		},
		bottom: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			show: true,
		};
	},
	methods: {
		toIconName(type) {
			const iconName = [
				{
					name: "default",
					className: "ui-border-b",
				},
				{
					name: "link",
					className: "ui-tooltips-cnt-link ui-border-b",
				},
			];
			for (let i in iconName) {
				if (iconName[i].name === type) {
					return iconName[i].className;
				}
			}
			return "ui-border-b";
		},

		toClassName(type) {
			const className = [
				{
					name: "default",
					className: "",
					showIcon: false,
				},
				{
					name: "warn",
					className: "ui-tooltips-warn",
					showIcon: true,
					iconClass: "",
				},
				{
					name: "guide",
					className: "ui-tooltips-guide",
					showIcon: true,
					iconClass: "ui-icon-talk",
				},
			];

			for (let i in className) {
				if (className[i].name === type) {
					return className[i];
				}
			}
			return className[0];
		},

		closeTooltips() {
			this.show = false;
		},

		clickTooltips() {
			this.$emit("click");
		},
	},
};
</script>

<style scoped>
i {
	padding-right: 5px;
}
</style>
