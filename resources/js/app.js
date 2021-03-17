/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import VueRouter from 'vue-router';
import App from './layouts/Main';
import './src/tailwind.css';

require('./bootstrap');

window.Vue = require('vue').default;

let token = JSON.parse(localStorage.getItem('api_key'));
if (token) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

Vue.use(VueRouter)
Vue.use(VueSweetalert2);
const router = new VueRouter({
    mode: 'history',
    base: '/',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [

        {
            path: '/',
            name: 'login',
            component: () => import('./views/Login')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register')
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: () => import('./views/Contacts'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/contacts/create',
            name: 'contacts.create',
            component: () => import('./views/CreateContact'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/contacts/edit/:id',
            name: 'contacts.edit',
            component: () => import('./views/EditContact'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/contact/:id',
            name: 'contact',
            component: () => import('./views/Contact'),
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) =>{
    if(to.matched.some(record => record.meta.requiresAuth)){
        //Check for api_token, redirect if they're not logged in
        if (!window.axios.defaults.headers.common['Authorization']) {
            router.push({
                name: 'login'
            })
        }
    }
    return next();
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
