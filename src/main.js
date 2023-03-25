import { createApp } from 'vue'
import App from './App.vue'
import db from './renderer/datastore.js'
// createApp(App).mount('#app')
const app = createApp(App);
app.mount('#app')
/* 其它代码 */
// Vue.prototype.$db = db
app.config.globalProperties.$db = db;
