import VueRouter from 'vue-router';
import user from './components/User.vue';
import goods from './components/Goods.vue';
import man from './components/Man.vue';
import woman from './components/Woman.vue';

let router = new VueRouter({
    routes:[
        {
            path: '/user',
            component:user,
            children:[
                {path: 'man',component:man},
                {path: 'woman',component:woman}
            ]
        },
        {path: '/goods',component:goods}
    ]
});

export default router;