<template>
    <v-card class="white mb-2">
        <v-list-item two-line @click="gotoUser">
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
                                <img src="@/assets/img/icons/clock.svg" alt="" class="mr-1">
                                {{ post.time }}
                            </p>
                        </div>
                        <div>
                            <p class="mb-0">
                                <img src="@/assets/img/icons/marker.svg" alt="" class="mr-1">
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
               lazy-src="../../assets/img/feed/placeholder-image-png-6.png"
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
</template>
<script>
export default {
    name: 'Post',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        gotoUser() {
            const id = this.post.user.id
            if (id !== 1) {
                this.$router.push({name: 'UserProfile', params: { id: id.toString() }})
            } else {
                this.$router.push({name: 'MyProfile'})
            }
        }
    }
}
</script>
