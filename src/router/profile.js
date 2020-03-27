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
        component: () => import( '@/Pages/Profile/UserProfile'),
        meta: {
            layout: 'back-only',
            transition: 'fade-in-up'
        }
    },

    {
        path: '/profile/:id',
        name: 'UserProfile',
        props: true,
        component: () => import( '@/Pages/Profile/UserProfile'),
        meta: {
            layout: 'back-only',
            transition: 'fade-in-up'
        }
    }
]

export default routes
