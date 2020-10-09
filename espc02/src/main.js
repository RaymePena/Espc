import Vue from 'vue';
import App from './App.vue';
// require('vue2-animate/dist/vue2-animate.min.css');
// require('csshake');

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
