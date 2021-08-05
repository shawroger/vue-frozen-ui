<template>
	<ul class="ui-grid-halve">
		<li>
			<div class="ui-grid-halve-img" style="overflow: hidden;">
				<i :class="[
	            	'ui-subscript', 
	            	'ui-subscript-' + color,
	            	text.length>2 ? 'ui-subscript-trisection' : ''
	            	]">{{text}}</i>
				<span :style="{backgroundImage: 'url(' + imgSrc +')'}"></span>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "fz-subscript",
		props: {
			text: {
				type: String,
				default: "最新"
			},
			imgSrc: {
				type: String,
				default: "https://s2.ax1x.com/2019/12/05/Q8jmtJ.jpg"
			},
			color: {
				type: String,
				default: "red"
			}
		}
	}
</script>

<style scoped>
	.span {
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
</style>