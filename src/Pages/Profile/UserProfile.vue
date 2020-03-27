<template>
    <v-container class="pt-0 px-0 grey lighten-4">
        <user-info :contact="!!id"/>

        <new-post title="RECENT ACTIVITY" :title-only="!!id"></new-post>

        <Post v-for="post in posts" :key="post.id" :post="post"/>

        <LoadMore :more-loading="moreLoading" @load-more="moreLoading = !moreLoading"/>

    </v-container>
</template>

<script>
import {serverBus} from "@/main";
import NewPost from "@/components/feed/NewPost";
import Post from "@/Pages/Post";
import LoadMore from "@/Pages/LoadMore";
import UserInfo from "@/components/profile/UserInfo";

export default {
    name: "UserProfile",
    components: {UserInfo, LoadMore, Post, NewPost},
    props: {
        id: String
    },
    data() {
        return {
            moreLoading: false,
            posts: [
                {
                    id: 1,
                    user: {
                        id: 1,
                        name: 'Mohamed Slimani',
                        avatar: 'https://i.imgur.com/2eBWijB.png'
                    },
                    location: 'Sidi Bel Abbess',
                    time: '6 min ago',
                    liked: false,
                    image: 'https://i.imgur.com/N3c9lHi.jpg',
                    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem'
                },
                {
                    id: 2,
                    user: {
                        id: 1,
                        name: 'Mohamed Slimani',
                        avatar: 'https://i.imgur.com/2eBWijB.png'
                    },
                    location: 'Sidi Bel Abbess',
                    time: '6 min ago',
                    liked: false,
                    image: 'https://i.imgur.com/0A1DoxO.png',
                    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem'
                },
                {
                    id: 3,
                    user: {
                        id: 1,
                        name: 'Mohamed Slimani',
                        avatar: 'https://i.imgur.com/2eBWijB.png'
                    },
                    location: 'Sidi Bel Abbess',
                    time: '6 min ago',
                    liked: false,
                    image: 'https://i.imgur.com/MgtsHlZ.jpg',
                    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem'
                },
                {
                    id: 4,
                    user: {
                        id: 1,
                        name: 'Mohamed Slimani',
                        avatar: 'https://i.imgur.com/2eBWijB.png'
                    },
                    location: 'Sidi Bel Abbess',
                    time: '6 min ago',
                    liked: false,
                    image: 'https://i.imgur.com/EgKl2X6dqdsfqdf.jpg',
                    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem'
                }
            ]
        }
    },
    mounted() {
        serverBus.$emit('navProps', {
            title: 'JItendra Raut',
            color: 'white',
            dark: false,
            iconColor: 'pink',
        })
    }
}
</script>

