<template>
	<ul class="ui-list ui-list-single ui-list-link ui-border-tb">
		<li
			v-for="(item, index) in source"
			:key="'list-item-' + index"
			@click="clickItem(item)"
		>
			<div class="ui-avatar-s" v-if="item.avatar && item.avatar.length > 0">
				<span
					:style="{ backgroundImage: 'url(' + item[props[0]] + ')' }"
				></span>
			</div>
			<div class="ui-list-info">
				<h4 class="ui-nowrap">{{ item[props[1]] }}</h4>
				<div class="ui-txt-info">{{ item[props[2]] }}</div>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	name: "fz-list-thumb",
	props: {
		source: {
			type: Array,
			default: () => [],
		},
		props: {
			type: Array,
			default: () => ["avatar", "text", "info"],
		},
	},
	methods: {
		clickItem(item) {
			this.$emit("click", item);
		},
	},
};
</script>

<style scoped></style>
