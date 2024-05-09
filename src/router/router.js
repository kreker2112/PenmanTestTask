import IntroPage from '@/pages/IntroPage.vue';
import DroneFlight from '@/pages/DroneFlight.vue';
import AboutPage from '@/pages/AboutPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        component: IntroPage,
        name: 'introPage',
        meta: {
            layout: 'defaultLayout'
        }
    },
    {
        path: '/drone',
        component: DroneFlight,
        name: 'dronepage',
        meta: {
            layout: 'flyingDroneLayout'
        }
    },
    {
        path: '/about',
        component: AboutPage,
        name: 'aboutpage',
        meta: {
            layout: 'defaultLayout'
        }
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Изменено с process.env.BASE_URL на import.meta.env.BASE_URL
    routes
});
export default router;
