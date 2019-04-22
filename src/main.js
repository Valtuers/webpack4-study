import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './App.vue';

Vue.use(VueRouter);
import router from './router.js';

const vm = new Vue({
    el: '#app',
    data:{
        msg: "lmc"
    },
    render:c => c(app),
    router
});
