import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/view/landing_page.vue';
import jobspage from '@/view/jobs_page.vue'
import Not_foiund_page from '@/view/not_foiund_page.vue';
import Job_detail_page from '@/view/job_detail_page.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: LandingPage,
        },
        {
            path: '/jobs',
            name: 'all_jobs',
            component: jobspage,
        },
        {
            path: '/jobs/:id',
            name: 'job_details',
            component: Job_detail_page,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: Not_foiund_page,
        },
    ],
});

export default router;