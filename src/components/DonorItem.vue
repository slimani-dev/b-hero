<template>
    <v-card class="mb-1" :class="$vuetify.breakpoint.lgAndUp ? 'mt-5': ''">
        <div class="pa-5 d-flex flex-row">
            <div class="user-avatar  mr-5 blue-grey lighten-5 d-flex justify-center align-center">
                <img src="../assets/img/avatar/dafual-user-avatar.png" alt="">
            </div>
            <div class="d-flex flex-column flex-grow-1">
                <div>
                    <h3>Robin doz</h3>
                    <p class="caption mb-0"><img src="@/assets/img/icons/marker.svg" alt="" class="mr-1">Sidi Bel Abbess
                    </p>
                    <p class="caption mb-1"><img src="@/assets/img/icons/clock.svg" alt="" class="mr-1">last donation 3
                        months ago</p>
                </div>
                <div>
                    <v-btn outlined rounded color="pink" class="mr-5">Ask For Help</v-btn>
                    <v-btn outlined rounded color="pink" icon>A+</v-btn>
                </div>
            </div>
        </div>
    </v-card>
</template>
<script>
export default {
    name: 'DonorItem'
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
