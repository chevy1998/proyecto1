import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import VueFire from 'vuefire';
import * as firebase from 'firebase';
import store from './store';

Vue.use(BootstrapVue, VueFire, IconsPlugin);
// Optionally install the BootstrapVue icon components plugin

Vue.config.productionTip = false;

const configOptions = {
	apiKey: 'AIzaSyBRTZsj8zwO-2CxyQ5RBrIT4xArlugXuOM',
	authDomain: 'proyecto1-66606.firebaseapp.com',
	databaseURL: 'https://proyecto1-66606.firebaseio.com',
	projectId: 'proyecto1-66606',
	storageBucket: 'proyecto1-66606.appspot.com',
	messagingSenderId: '1009402388627',
	appId: '1:1009402388627:web:91c2ad12a21fa04ea0ad66',
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
	store.dispatch('fetchUser', user);
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
