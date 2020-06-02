import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import inicio from '../components/inicio.vue';
import registrar from '../components/registrar.vue';
import menu_buscar_mas from '../components/menu_buscar_mas.vue';
import busco_a_mi_familia from '../components/busco_a_mi_familia.vue';
import menu_encontrados from '../components/menu_encontre_mas.vue';
import publicar_mas_en from '../components/publicar_mas_en.vue';
import publicar_mas_per from '../components/publicar_mas_per.vue';
import ver_mascotas_encontradas from '../components/ver_mascotas_encontradas.vue';
import menu_encontre_mas from '../components/menu_encontre_mas.vue';
import informacion from '../components/informacion.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'inicio',
		component: inicio,
	},
	{
		path: '/registrar',
		name: 'registrar',
		component: registrar,
	},

	{
		path: '/informacion',
		component: informacion,
	},

	{
		path: '/ver_mascotas_encontradas',
		component: ver_mascotas_encontradas,
	},

	{
		path: '/menu_encontre_mas',
		component: menu_encontre_mas,
	},

	{
		path: '/menu_buscar_mas',
		component: menu_buscar_mas,
	},

	{
		path: '/busco_a_mi_familia',
		component: busco_a_mi_familia,
	},

	{
		path: '/menu_encontrados',
		component: menu_encontrados,
	},

	{
		path: '/publicar_mas_en',
		component: publicar_mas_en,
	},

	{
		path: '/publicar_mas_per',
		component: publicar_mas_per,
	},

	{
		path: '/Dashboard',
		component: Dashboard,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

// Nav Guard
/*router.beforeEach((to, from, next) => {
	// Check for requiresAuth guard
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// Check if NO logged user
		if (!firebase.auth().currentUser) {
			// Go to login
			next({
				path: '/',
				query: {
					redirect: to.fullPath,
				},
			});
		} else {
			// Proceed to route
			next();
		}
	} else if (to.matched.some(record => record.meta.requiresGuest)) {
		// Check if NO logged user
		if (firebase.auth().currentUser) {
			// Go to login
			next({
				path: '/',
				query: {
					redirect: to.fullPath,
				},
			});
		} else {
			// Proceed to route
			next();
		}
	} else {
		// Proceed to route
		next();
	}
});*/

export default router;
