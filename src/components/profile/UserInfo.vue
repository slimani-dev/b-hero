<template>
    <v-card class="mb-1" :class="$vuetify.breakpoint.lgAndUp ? 'mt-5': ''">
        <div class="pa-5 d-flex flex-row">
            <div class="user-avatar  mr-5 blue-grey lighten-5 d-flex justify-center align-center">
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
                    <v-btn color="pink" elevation="0" small class="flex-grow-1 mr-2" dark rounded>
                        <v-icon small class="mr-1">mdi-star-circle</v-icon>
                        HERO
                    </v-btn>
                    <v-btn v-if="contact" color="pink" class="flex-grow-1" small outlined dark rounded>Contact</v-btn>
                    <v-btn v-else color="pink" class="flex-grow-1" small outlined dark rounded>MY ACCOUNT</v-btn>
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
</template>
<script>
export default {
    name: 'user-info',
    props: {
        contact: Boolean
    }
}
</script>
<style scoped lang="scss">
    .user-avatar {
        height: 84px;
        width: 84px;
        border-radius: 50%;

        img {
            height: 74px;
            width: 74px;
        }
    }
</style>
