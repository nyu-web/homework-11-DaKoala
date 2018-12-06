import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGraduationCap,
    faCode,
    faGamepad,
    faDatabase,
    faDollarSign,
    faBold,
} from '@fortawesome/free-solid-svg-icons';
import {
    faJsSquare,
    faPython,
    faHtml5,
    faCss3Alt,
    faSass,
    faVuejs,
    faNodeJs,
    faWeixin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(
    faGamepad,
    faCode,
    faGraduationCap,
    faJsSquare,
    faPython,
    faHtml5,
    faCss3Alt,
    faSass,
    faVuejs,
    faNodeJs,
    faDatabase,
    faWeixin,
    faDollarSign,
    faBold,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
