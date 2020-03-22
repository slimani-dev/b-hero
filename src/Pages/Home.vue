<template>
    <v-container fluid class="pt-0 px-0 grey lighten-4" style="max-width: 700px">

        <v-card class="pink pa-5 mb-2 elevation-2">

            <v-card dark class="pink lighten-1  pa-5 mb-5">
                <v-row class="align-center" no-gutters>
                    <v-col cols="6" class="text-center">
                        <h2 style="letter-spacing: 2px;">120966</h2>
                        <p class="ma-0">Donor's</p>
                    </v-col>
                    <v-col cols="6">
                        <v-btn color="white"
                               block
                               class="pink--text font-weight-bold"
                               max-height="40"
                               rounded>
                            FIND DONOR
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>

            <v-card dark class="pink lighten-1  pa-5">
                <v-row class="align-center" no-gutters>
                    <v-col cols="6" class="text-center">
                        <h2 style="letter-spacing: 2px;">20976</h2>
                        <p class="ma-0">Request</p>
                    </v-col>

                    <v-col cols="6">
                        <v-btn color="white"
                               block
                               class="pink--text font-weight-bold"
                               max-height="40"
                               rounded>
                            SEE REQUEST
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>

        </v-card>

        <!--Add Post-->
        <v-card class="white px-5 py-3 mb-2 d-flex flex-row align-center justify-space-between">
            <h2 class="font-weight-bold black--text body-2 ma-0">EXPLORE LATEST FEED</h2>
            <v-btn text small>
                <v-icon dense class="pink v-btn--round white--text ma-0 mr-2">mdi-plus</v-icon>
                Post Update
            </v-btn>
        </v-card>
        <!--Add Post !-->

        <!--Posts-->
        <v-card class="white mb-2" v-for="post in posts" :key="post.id">
            <v-list-item two-line>
                <v-list-item-avatar>
                    <!--suppress HtmlUnknownTarget -->
                    <img :src="post.user.avatar" alt="">
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ post.user.name }}</v-list-item-title>
                    <v-list-item-subtitle>
                        <div class="d-flex caption">
                            <div class="mr-3 ">
                                <p class="mb-0">
                                    <img src="../assets/img/icons/clock.svg" alt="" class="mr-1">
                                    {{ post.time }}
                                </p>
                            </div>
                            <div>
                                <p class="mb-0">
                                    <img src="../assets/img/icons/marker.svg" alt="" class="mr-1">
                                    {{ post.location }}
                                </p>
                            </div>
                        </div>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <!--suppress HtmlUnknownTarget -->
            <v-img class="white--text align-end elevation-1"
                   :aspect-ratio="1"
                   lazy-src="../assets/img/feed/placeholder-image-png-6.png"
                   :src="post.image">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0"
                            align="center"
                            justify="center">
                        <v-progress-circular indeterminate color="pink"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
            <v-card-actions>
                <v-btn icon elevation="1"
                       :color="post.liked ? 'pink': ''"
                       @click="post.liked = !post.liked">
                    <v-icon v-if="post.liked">mdi-heart</v-icon>
                    <v-icon v-else>mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn icon elevation="1">
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
                <v-btn icon elevation="1">
                    <v-icon>mdi-comment-outline</v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-text class="text--primary caption">
                {{ post.description }}
            </v-card-text>
        </v-card>
        <!--Posts!-->

        <!--More Posts-->
        <v-card class="white px-5 py-3 d-flex flex-row align-center justify-center">
            <v-btn text small :loading="moreLoading" @click="moreLoading = !moreLoading">
                <v-icon dense class="pink v-btn--round white--text ma-0 mr-2">mdi-plus</v-icon>
                Show More
            </v-btn>
        </v-card>
        <!--More Posts !-->

    </v-container>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            moreLoading: false,
            overlay: false,
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
    }
}
</script>

<style scoped lang="scss">


    .head {
        padding: 22px;
        background: transparent linear-gradient(128deg, #FF215D 0%, #FF4D4D 100%) 0 0 no-repeat padding-box;

        .stats {
            background: rgba(255, 255, 255, 0.12) 0 0 no-repeat padding-box;
            border: 0.5px solid rgba(255, 255, 255, 0.12);
            border-radius: 8px;
            color: #FEFEFF;
            padding: 30px;

            h2 {
                letter-spacing: 2.53px;
                font-size: 22px;
                margin-bottom: 0;
                font-weight: bold;
            }

            p {
                margin-bottom: 0;
                font-size: 14px;
            }

            .btn-white {
                background-color: white;
                height: 40px;
                border-radius: 20px;
                color: #FF275B;
                font-size: 12px;
                font-weight: bold;
                width: 156px;
                box-shadow: 0 3px 7px #00000029;
            }
        }
    }

    .feed {
        background-color: #F6F6F6;
        padding: 4px 0 2px 0;

        .title {
            background: #FFFFFF 0 0 no-repeat padding-box;
            padding: 11px 22px;
            margin-bottom: 5px;
            margin-top: 5px;

            h2 {
                font-size: 14px;
                font-weight: bold;
                color: #0A0819;
                margin-bottom: 0;
            }

            a {

                font-size: 12px;
                font-weight: bold;
            }
        }

        .post {
            background: #FFFFFF 0 0 no-repeat padding-box;
            padding: 18px 0 14px 0;
            margin-bottom: 10px;

            .user {
                padding: 0 16px 10px 16px;

                .user-avatar {
                    width: 42px;
                    height: 42px;
                    box-shadow: 0 3px 7px #00000045;
                    border-radius: 50%;
                }

                .user-info {
                    .user-name {
                        font-weight: bold;
                        font-size: 14px;
                        color: #242C37;
                    }

                    p {
                        display: inline;
                        font-size: 10px;
                        color: #888C8D;
                    }
                }
            }

            .post-image {
                width: 100%;
                box-shadow: 0 3px 7px #00000029;
            }

            .like-comment {
                padding: 11px 22px;
                margin-bottom: 5px;
                margin-top: 5px;

                .buttons {
                    .like-btn, .comment-btn, .share-btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 29px;
                        height: 29px;
                        background: #FFFFFF 0 0 no-repeat padding-box;
                        box-shadow: 0 3px 7px #00000029;
                        border-radius: 50%;
                    }
                }

                .post-description {
                    text-align: left;
                    font-size: 12px;
                    color: #707070;
                }
            }
        }
    }


</style>
