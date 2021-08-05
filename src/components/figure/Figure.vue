<template>
	<div>
		<div class="ui-feeds">
			<ul>
				<li v-for="(item,index) in source" :key="'figure-'+index" @click="selectItems(item)">
					<span class="figure-item" :style="{backgroundImage: 'url(' + item +')'}"></span>
				</li>
			</ul>
		</div>
		<fz-dialog :show="showDialog" :showBtn="false">
			<template v-slot:body>
				<h3>查看图片</h3>
				<hr />
				<div class="ui-img">
					<img class="dialog-item" :src="selectedImg" />
				</div>
			</template>
			<template v-slot:footer>
				<button @click="__closeDialog">确认</button>
			</template>
		</fz-dialog>
	</div>
</template>

<script>
	import Dialog from '../dialog/Dialog.vue'
	export default {
		name: "fz-figure",
		components: {
			"fz-dialog": Dialog
		},
		props: {
			source: {
				type: Array,
				default: () => ["https://s2.ax1x.com/2019/12/05/Q8UVI0.png"]
			},
			dialog: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				selectedImg: "https://s2.ax1x.com/2019/12/05/Q8UVI0.png",
				showDialog: false
			}
		},
		methods: {
			selectItems(item) {
				if (this.dialog) {
					this.selectedImg = item;
					this.showDialog = true;
				}
				this.$emit("click", item);
			},
			__closeDialog() {
				this.showDialog = false;
			}
		}
	}
</script>

<style scoped>

	.figure-item {
		background-repeat: no-repeat;
		background-position: center;
	}

	.figure-item {
		width: 100%;
		height: auto;
	}
</style>