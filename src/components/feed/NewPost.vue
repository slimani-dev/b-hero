<template>
    <v-card class="white px-5 py-3 mb-2 d-flex flex-row align-center justify-space-between">
        <h2 class="font-weight-bold black--text body-2 ma-0">{{ title }}</h2>
        <v-btn v-if="!titleOnly" text small>
            <v-icon dense class="pink v-btn--round white--text ma-0 mr-2">mdi-plus</v-icon>
            Post Update
        </v-btn>
    </v-card>
</template>
<script>
export default {
    name: 'NewPost',
    props: {
        title: {
            type: String,
            default: 'EXPLORE LATEST FEED'
        },
        titleOnly: Boolean
    }
}
</script>
