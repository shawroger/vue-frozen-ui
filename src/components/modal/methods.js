import Vue from 'vue';
import Modal from './Modal.vue';

const newModal = Vue.extend(Modal);
const BottomMessage = () => {}

BottomMessage.install = (Vue, options = {
	name: "$alert"
}) => {
	const vm = new newModal({
		$el: document.createElement('div'),
	}).$mount();
	vueHook(Vue, options, vm);
}

const vueHook = (Vue, options, vm) => {
	Vue.prototype[options.name] = (
		config = {
			__html: ''
		}) => {

		document.body.appendChild(vm.$el);
		for (let i in config) {
			vm[i] = config[i];
		}
		vm.open();
	};
}

export default BottomMessage
