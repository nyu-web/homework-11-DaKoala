/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const ENABLE_GA = true;
const isLocalhost = window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('./views/Projects.vue'),
        },
    ],
});

if (ENABLE_GA) {
    router.onReady(() => {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-130553498-1', 'auto');
        ga('send', 'pageview');

        if (isLocalhost) {
            ga('set', 'sendHitTask', null);
        }

        router.afterEach((to) => {
            ga('set', 'page', to.fullPath);
            ga('send', 'pageview');
        })
    });
}

export default router;
