<template>
	<div class="__fz-header">
		<div class="__fz-header-left">
			<div class="ui-avatar-s" v-if="showAvatar">
				<span
					:style="{
						backgroundImage: 'url(' + avatar + ')',
					}"
					@click="__fz_clickLeftItem(avatar)"
				></span>
			</div>
		</div>
		<div class="__fz-header-center">
			<p v-text="title"></p>
		</div>
		<div class="__fz-header-right">
			<a href="javascript:;" @click="__fz_clickRightItem">{{ iconText }}</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "fz-header",
	props: {
		avatar: {
			type: String,
			default: "https://s2.ax1x.com/2019/12/05/Q8jmtJ.jpg",
		},
		showAvatar: {
			type: Boolean,
			default: true,
		},
		title: {
			type: String,
			default: "标题",
		},
		iconText: {
			type: String,
			default: "+",
		},
	},
	methods: {
		__fz_clickRightItem() {
			this.$emit("click-icon");
		},
		__fz_clickLeftItem(avatar) {
			this.$emit("click-avatar", avatar);
		},
	},
};
</script>

<style scoped>
.__fz-header {
	background: white;
	padding-left: 15px;
	padding-right: 15px;
	padding-top: 2px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.__fz-header-left {
	flex: 1;
	position: relative;
	top: 4px;
}

.__fz-header-center {
	flex: 1;
	color: #0399e4;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	top: 4px;
}

.__fz-header-right {
	flex: 1;
	font-size: 30px;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: relative;
	top: 4px;
}
</style>
