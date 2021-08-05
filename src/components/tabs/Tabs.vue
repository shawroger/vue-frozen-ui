<template>
	<div class="ui-tab">
		<ul class="ui-tab-nav ui-border-b">
			<li
				v-for="(item, index) in navs"
				:key="item.name"
				:class="[index === currentNav ? 'current' : '']"
				@click="clickItem(item, index)"
			>
				<span>{{ item.label }}</span>
			</li>
		</ul>
		<ul class="ui-tab-content">
			<slot
				v-for="(item, index) in navs"
				:name="item.name"
				v-if="index === currentNav"
			>
			</slot>
		</ul>
	</div>
</template>

<script>
export default {
	name: "fz-tabs",
	props: {
		text: {
			type: String,
			default: "最新",
		},
		imgSrc: {
			type: String,
			default: "https://s2.ax1x.com/2019/12/05/Q8jmtJ.jpg",
		},
		color: {
			type: String,
			default: "red",
		},
		navs: {
			type: Array,
			default: () => [
				{
					name: "nav",
					label: "导航",
				},
			],
		},
		autoChange: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			currentNav: 0,
		};
	},
	methods: {
		clickItem(item, index) {
			if (this.autoChange) {
				this.currentNav = index;
			}
			this.$emit("click", item, index);
		},
	},
};
</script>

<style scoped>
.span {
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
</style>
