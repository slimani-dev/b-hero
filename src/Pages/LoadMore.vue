<template>
    <v-card class="white px-5 py-3 d-flex flex-row align-center justify-center">
        <v-btn text small :loading="moreLoading" @click="$emit('load-more')">
            <v-icon dense class="pink v-btn--round white--text ma-0 mr-2">mdi-plus</v-icon>
            Show More
        </v-btn>
    </v-card>
</template>
<script>
export default {
    name: 'LoadMore',
    props: {
        moreLoading: {}
    }
}
</script>
