const routes = [
    {
        path: '/request-form',
        name: 'RequestForm',
        component: () => import('@/Pages/Request/RequestForm'),
        meta: {
            layout: 'back-only',
            transition: 'fade'
        }
    },
]

export default routes
