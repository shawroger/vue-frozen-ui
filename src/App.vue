<template>
	<div>
		<fz-header
			title="消息"
			avatar="https://s2.ax1x.com/2019/12/05/QGBDfI.jpg"
			@clickIcon="clickIcon"
		/>
		<fz-search
			placeholder="搜索"
			v-model="data"
			@clear="clickClear"
			@change="changeData"
		/>
		<fz-tooltip type="guide" icon="cross" v-for="i in 0" :key="i"
			>腾讯紧急通知：你妈今晚买菜必涨价</fz-tooltip
		>
		<fz-list :source="source" :twoLines="true" @click-item="clickConsole" />
		<fz-footer @click="clickConsole" color="grey">
			<template v-slot:0>
				<i class="fa fa-comments-o"></i>
			</template>
			<template v-slot:1>
				<i class="fa fa-address-book-o"></i>
			</template>
			<template v-slot:2>
				<i class="fa fa-qq"></i>
			</template>
		</fz-footer>
	</div>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from "vue";
import { useDialog } from "./components";
const ctx = getCurrentInstance();
const data = ref("");
const store = [
	{
		avatar: "https://pic.imgdb.cn/item/610b95715132923bf81f386a.png",
		text: "爸爸",
		subtext: "儿子不哭",
	},
	{
		avatar: "https://s2.ax1x.com/2019/12/07/QNz9sJ.jpg",
		text: "儿子",
		subtext: "爸爸爱你",
	},
	{
		avatar: "https://s2.ax1x.com/2019/12/05/QGJ9Zq.jpg",
		text: "狗",
		subtext: "爬！",
	},
];
const source = ref(store);

function clickConsole(e: any) {
	console.log(e);
}

function clickClear() {
	data.value = "";
	source.value = store;
}

function clickIcon() {
	useDialog({
		body: "你的QQ现在是我的了",
		__html: "",
		btnText: "给👴爬",
	});
}

function changeData(e: any) {
	let arr = [];
	for (let i in store) {
		if (store[i].text.includes(e ? e : "")) {
			arr.push(store[i]);
		}
	}
	source.value = arr;
}
</script>

<style scoped>
i {
	font-size: 20px;
	color: grey;
}
</style>
