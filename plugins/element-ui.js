import Vue from 'vue';
import {Dialog, Form, FormItem, MessageBox, Icon} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Dialog);
Vue.use(Icon);

Vue.prototype.$message = MessageBox;
Vue.prototype.$alert = MessageBox.alert;