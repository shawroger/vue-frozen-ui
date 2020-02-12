# vue-frozen-ui

## 仿QQ的frozen-ui的vue版UI组件

## 安装插件
```
npm install
```

### 在vue中导入

``` javascript
import FrozenUI  from 'vue-frozen-ui';
import 'vue-frozen-ui/packages/basic.css';
Vue.use(FrozenUI)
```
### 直接使用UI组件

``` html
<template>
	<div>
		<div class="fixed-header">
			<fz-header title="消息" avatar="./logo" @clickAvatar="clickIcon" @clickIcon="clickIcon" />
			<fz-search placeholder="搜索" v-model="data" @clickClear="clickClear" @change="changeData" />
			<fz-tooltip type="guide" icon="cross" @closeTooltips="closeTooltips">
        欢迎使用 vue-frozen-ui
      </fz-tooltip>
		</div>
</template>
  ```
  
