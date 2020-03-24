const routes = [
    {
        path: '/edit-profile',
        name: 'EditProfile',
        component: () => import('@/Pages/Profile/EditProfile'),
        meta: {
            layout: 'back-only',
            transition: 'fade-in-down'
        }
    }
]

export default routes
