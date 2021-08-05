<template>
	<ul
		:class="[
			twoLines
				? 'ui-list ui-list-function ui-border-tb'
				: 'ui-list ui-list-link ui-border-tb',
		]"
		:style="{
			overflowY: scroll ? 'scroll' : 'auto',
			height: scroll ? scroll : 'auto',
		}"
	>
		<li
			:class="[showArrow ? '' : '__fz-list-li']"
			v-for="(item, index) in source"
			:key="'list-item-' + index"
			@click="__fz_clickItem(item)"
		>
			<div class="ui-avatar-s" v-if="showAvatar">
				<span
					:style="{
						backgroundImage:
							item[props[0]] && item[props[0]].length > 0
								? 'url(' + item[props[0]] + ')'
								: 'url(' + defaultAvatar + ')',
						filter: item[props[5]] ? 'grayscale(80%)' : 'grayscale(0%)',
					}"
				></span>
			</div>
			<div :class="[border ? 'ui-list-info ui-border-t' : 'ui-list-info']">
				<h4 class="ui-nowrap" v-text="item[props[1]]"></h4>
				<slot></slot>
				<p
					class="fz-list-info"
					v-if="item[props[2]]"
					v-text="item[props[2]]"
				></p>
				<div
					class="ui-txt-info"
					v-if="item[props[3]]"
					v-text="item[props[3]]"
				></div>
				<div
					class="ui-btn"
					v-if="item[props[4]]"
					v-text="item[props[4]]"
					@click="__fz_clickBtn(item)"
				></div>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	name: "fz-list",
	props: {
		source: {
			type: Array,
			default: () => [],
		},
		props: {
			type: Array,
			default: () => ["avatar", "text", "subtext", "info", "btn", "offline"],
		},

		twoLines: {
			type: Boolean,
			default: false,
		},

		showAvatar: {
			type: Boolean,
			default: true,
		},
		showArrow: {
			type: Boolean,
			default: false,
		},

		defaultAvatar: {
			type: String,
			default: "https://s2.ax1x.com/2019/12/05/Q8jmtJ.jpg",
		},

		border: {
			type: Boolean,
			default: true,
		},
		scroll: {
			type: String,
			default: "",
		},
	},
	methods: {
		__fz_clickItem(item) {
			this.$emit("click-item", item);
		},
		__fz_clickBtn(item) {
			this.$emit("click", item);
		},
	},
};
</script>

<style scoped>
.__fz-list-li::after {
	display: none;
}

.fz-list-scroll {
	overflow-y: scroll;
	height: 400px;
}

.fz-list-info {
	color: #707070;
	font-size: 12px;
}
</style>
