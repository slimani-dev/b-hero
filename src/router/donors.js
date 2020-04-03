const routes = [
    {
        path: '/donors',
        name: 'DonorsList',
        component: () => import('@/Pages/DonorsList'),
        meta: {
            layout: 'back-only',
            transition: 'fade'
        }
    },
]

export default routes
