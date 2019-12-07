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
			@clickClear="clickClear"
			@change="changeData"
		/>
		<fz-tooltip type="guide" icon="cross" v-for="i in 0" :key="i">腾讯紧急通知：你妈今晚买菜必涨价</fz-tooltip>
		<fz-list 
			:source="source" 
			:twoLines="true"
			@clickItem="clickItem"
		/>
		<fz-footer @click="clickFooter" color="grey">
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


<script>
	/* eslint-disable */
	export default {
		data() {
			return {
				data: '',
				store: [
					{avatar: 'https://imgse.com/content/images/users/ind8f/av_1550694643.jpg',text:'爸爸',subtext:'儿子不哭'},
					{avatar: 'https://s2.ax1x.com/2019/12/07/QNz9sJ.jpg',text:'儿子',subtext:'爸爸爱你'},
					{avatar: 'https://s2.ax1x.com/2019/12/05/QGJ9Zq.jpg',text:'狗',subtext:'爬！'},
				]
			}
		},
		methods: {
			clickFooter(e) {
				console.log(e)
			},
			clickClear() {
				this.data = '';
				this.source = this.store;
			},
			clickIcon(e) {
				console.log(e)
				this.$open({
					body: '你的QQ现在是我的了',
					__html: "",
					btnText: '给👴爬'
				});
			},
			clickItem(e) {
				console.log(e)
				this.$open({
					body: '',
					__html: `
					<center>
						<img src="${e.avatar}" style="
							width: 80px;
							height: 80px;
							border-radius: 50%
						"/></center>
						<p style="text-align: center">${e.text}：${e.subtext}</p>
					`
				});
			},
			changeData(e) {
				let arr = [];
				for(let i in this.store) {
					if(this.store[i].text.includes(e ? e : '')) {
						arr.push(this.store[i]);
					}
				}
				this.source = arr;
			}
		},
		created() {
			this.source = this.store;
		}
	}
</script>

<style scoped>
	i {
		font-size: 20px;
		color: grey;
	}
</style>