# vue-frozen-ui

## 仿 QQ 的 frozen-ui 的 vue 版 UI 组件

## 安装插件

```
npm install vue-frozen-ui --save
```

### 在 vue 中导入

```javascript
import FrozenUI from "vue-frozen-ui";
import "vue-frozen-ui/dist/frozen-ui.css";
createApp(App).use(FrozenUI).mount("#root");
```

### 直接使用 UI 组件

```html
<template>
	<div>
		<div class="fixed-header">
			<fz-header
			title="消息"
				avatar="./logo"
				@clickAvatar="clickIcon"
				@clickIcon="clickIcon"
			/>
			<fz-search
				placeholder="搜索"
				v-model="data"
				@clear="clickClear"
				@change="changeData"
			/>
			<fz-tooltip
				type="guide"
				icon="cross"
				@closeTooltips="closeTooltips"
			>
        		欢迎使用 vue-frozen-ui
      		</fz-tooltip>
		</div>
</template>
```
