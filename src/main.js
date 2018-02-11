import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import VueResource from 'vue-resource';

// COLOCA PRO VUE UTILIZAR O VUE ROUTER
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes,
    mode: 'history'
});

// EVENT BUS
export const eventBus = new Vue({
    methods: {
        loading(load) {
            this.$emit('loading', load);
        }
    }
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})