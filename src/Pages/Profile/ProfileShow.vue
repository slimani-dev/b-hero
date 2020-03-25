<template>
    <v-container class="pt-0 px-0 grey lighten-4">
        <v-card class="mb-1 ">
            <div class="pa-5 d-flex flex-row">
                <div class="user-avatar mr-5 blue-grey lighten-5 d-flex justify-center align-center">
                    <img src="../../assets/img/avatar/dafual-user-avatar.png" alt="">
                </div>
                <div class="d-flex flex-column flex-grow-1">
                    <div class="d-flex flex-row mb-2">
                        <div class="d-flex flex-column align-center flex-grow-1">
                            <h2 class="pink--text">4</h2>
                            DONATED
                        </div>
                        <div class="d-flex flex-column align-center flex-grow-1">
                            <h2 class="pink--text">4</h2>
                            DONATED
                        </div>
                        <div class="d-flex flex-column align-center flex-grow-1">
                            <h2>
                                <v-icon color="pink">mdi-heart-outline</v-icon>
                            </h2>
                            23
                        </div>
                    </div>
                    <div class="d-flex">
                        <v-btn color="pink" small class="flex-grow-1 mr-2" dark rounded>
                            <v-icon small class="mr-1">mdi-star-circle</v-icon>
                            HERO DONOR
                        </v-btn>
                        <v-btn color="pink" small outlined dark rounded>MY ACCOUNT</v-btn>
                    </div>
                </div>
            </div>
            <div class="px-5 pb-1">
                <div class="d-flex align-center">
                    <v-icon>mdi-map-marker-outline</v-icon>
                    <h2 class="mb-0">Mumbai</h2>
                </div>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>
        </v-card>

        <new-post title="MY ACTIVITY"></new-post>

        <Post  v-for="post in posts" :key="post.id" :post="post"/>

        <LoadMore :more-loading="moreLoading" @load-more="moreLoading = !moreLoading"/>

    </v-container>
</template>

<script>
import {serverBus} from "@/main";
import NewPost from "@/components/feed/NewPost";
import Post from "@/Pages/Post";
import LoadMore from "@/Pages/LoadMore";

export default {
    name: "ProfileShow",
    components: {LoadMore, Post, NewPost},
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
            leftBtn: {
                type: 'link',
                text: 'More',
                link: {name: 'Home'}
            }
        })
    }
}
</script>

<style scoped lang="scss">
    .user-avatar {
        height: 100px;
        width: 100px;
        border-radius: 50%;

        img {
            height: 91px;
            width: 91px;
        }
    }
</style>
