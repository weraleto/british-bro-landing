import Vue from 'vue';
import {Dialog, Form, FormItem, Notification, Icon} from 'element-ui';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Dialog);
Vue.use(Icon);

Vue.prototype.$message = Notification;