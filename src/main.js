import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import VueQuillEditor from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  Vue.use(VueQuillEditor);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(iView);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');