<template>
    <v-container fluid class="pa-0 grey lighten-4">
        <v-card v-touch="{left: () => swipe(1),right: () => swipe(-1)}"
                class="intro"
                justify="center">
            <IntroImages :page="page"/>
            <IntroDescription :page="page" :oldPage="oldPage"/>
            <IntroIndex :page="page" @previous="swipe(-1)" @next="swipe(1)"/>
        </v-card>
    </v-container>
</template>

<script>

import IntroImages from "@/components/Intro/Images";
import IntroDescription from "@/components/Intro/IntroDescription";
import IntroIndex from "@/components/Intro/IntroIndex";

export default {
    name: "Intro",
    components: {IntroIndex, IntroDescription, IntroImages},
    data: () => ({
        oldPage: 1,
        page: 1,
    }),

    methods: {
        swipe(i) {
            if(i > 0 && this.page === 3)
                this.$router.push('/')
            if ((i < 0 && this.page > 1) || i > 0) {
                this.oldPage = this.page
                this.page += i
            }
        },
    },
}
</script>

<style scoped lang="scss">
    .intro {
        height: 100vh;
    }
</style>
