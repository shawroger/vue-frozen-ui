<template>
	<div class="ui-searchbar-wrap ui-border-b">
		<div class="ui-searchbar ui-border-radius">
			<i class="ui-icon-search __fz-search-icon"></i>
			<div class="ui-searchbar-text __fz-search-center">
				<input
					class="fz-search-input"
					:value="value"
					:type="type"
					:placeholder="placeholder"
					@input="$emit('update:value', $event.target.value)"
					@focus="__focusInput"
					@blur="__blurInput"
				/>
			</div>
			<a
				href="javascript:;"
				class="ui-icon-close"
				style="display: block"
				v-show="value.length > 0 && showIconSearch"
				@click="__clickIconClose"
			></a>
		</div>
	</div>
</template>

<script>
export default {
	name: "fz-search",
	props: {
		text: {
			type: String,
			default: "搜索",
		},
		placeholder: {
			type: String,
			default: "开始搜索",
		},
		type: {
			type: String,
			default: "text",
		},
		value: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			showIconSearch: true,
		};
	},
	methods: {
		__focusInput() {
			this.showIconSearch = false;
		},
		__blurInput() {
			this.showIconSearch = true;
		},
		__clickIconClose() {
			this.$emit("clear");
		},
	},
};
</script>

<style scoped>
.fz-search-input {
	width: 100%;
	color: #707070;
}

.__fz-search-icon {
	padding-right: 5px;
}
a {
	padding-left: 15px;
}

.__fz-search-center {
	flex: 1;
}
</style>
