<template>
	<div>
		<fz-header
			title="消息"
			avatar="/me.jpg"
			@click-icon="clickIcon"
			@click-avatar="clickAvatar"
		/>
		<fz-search
			placeholder="搜索"
			v-model:value="data"
			@clear="clickClear"
			@change="changeData"
		/>
		
		<fz-list :source="source" :twoLines="true" @click-item="clickList" />
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
import { ref } from "vue";
import { useDialog } from "./components";
const data = ref("");

const store = Array(8).fill(0).map((_,k)=>k+1).map((e)=> ({
		avatar: `/avatar-${(e).toString().padStart(3, '0')}.jpg`,
		subtext: `测试对话框内容 #${e.toString().padStart(2, '0')}`,
		text: `测试昵称 #${e.toString().padStart(2, '0')}`,
	
	}));
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
		body: "点击了 + 号",
		btnText: "OK",
		afterClose() {
			console.log("无了");
		},
	});
}

function clickAvatar(avatar: string) {
	useDialog({
		body: `这是我自己`,
		html: `<img src=${avatar} class="list-avatar" />`,
		btnText: "知道了",
	});
}

function clickList(e: { avatar: string; text: string; subtext: string }) {
	useDialog({
		body: `这是《 ${e.text} 》的面板`,
		html: `<img src=${e.avatar} class="list-avatar" />`,
		btnText: "知道了",
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

<style>
.list-avatar {
	width: 80px;
	height: 80px;
	margin-bottom: 20px;
	border-radius: 50%;
}
</style>
