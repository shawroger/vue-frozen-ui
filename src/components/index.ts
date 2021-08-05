import Badge from "./badge/Badge.vue";
import Button from "./button/Button.vue";
import Dialog from "./dialog/Dialog.vue";
import Figure from "./figure/Figure.vue";
import Tooltip from "./tooltips/Tooltip.vue";
import Wrap from "./wrap/Wrap.vue";
import Row from "./layouts/Row.vue";
import Col from "./layouts/Col.vue";
import ListRow from "./layouts-list/ListRow.vue";
import ListCol from "./layouts-list/ListCol.vue";
import Info from "./info/Info.vue";
import List from "./list/List.vue";
import Tabs from "./tabs/Tabs.vue";
import Panel from "./panel/Panel.vue";
import Progress from "./progress/Progress.vue";
import Search from "./search/Search.vue";
import Subscript from "./subscript/Subscript.vue";
import Form from "./form/Form.vue";
import Input from "./form/Input.vue";
import Comment from "./form/Comment.vue";
import Checkbox from "./form/Checkbox.vue";
import Radio from "./form/Radio.vue";
import Select from "./form/Select.vue";
import Switch from "./form/Switch.vue";
import Modal from "./modal/Modal.vue";
import Header from "./header/Header.vue";
import Footer from "./footer/Footer.vue";

export { useDialog } from "./dialog/methods";

import type { App, Component } from "vue";

const FrozenUI: Component[] = [
	Badge,
	Button,
	Checkbox,
	Col,
	Comment,
	Dialog,
	Figure,
	Form,
	Footer,
	Header,
	Info,
	Input,
	List,
	ListCol,
	ListRow,
	Modal,
	Panel,
	Progress,
	Radio,
	Row,
	Search,
	Select,
	Subscript,
	Switch,
	Tabs,
	Tooltip,
	Wrap,
];

export default function install(app: App): App {
	FrozenUI.forEach((component) => {
		const name = String(component.name);
		app.component(name, component);
	});

	return app;
}

export {
	Badge,
	Button,
	Checkbox,
	Col,
	Comment,
	Dialog,
	Figure,
	Form,
	Footer,
	Header,
	Info,
	Input,
	List,
	ListCol,
	ListRow,
	Modal,
	Panel,
	Progress,
	Radio,
	Row,
	Search,
	Select,
	Subscript,
	Switch,
	Tabs,
	Tooltip,
	Wrap,
	install,
};
