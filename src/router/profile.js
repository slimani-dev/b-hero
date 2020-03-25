const routes = [
    {
        path: '/edit-profile',
        name: 'EditProfile',
        component: () => import('@/Pages/Profile/EditProfile'),
        meta: {
            layout: 'back-only',
            transition: 'fade-in-down'
        }
    },

    {
        path: '/profile',
        name: 'MyProfile',
        component: () => import( '@/Pages/Profile/ProfileShow'),
        meta: {
            layout: 'back-only',
            transition: 'fade-in-up'
        }
    }
]

export default routes
