<template>
    <v-btn :color="color" :text="text" @click="goToLink">More</v-btn>
</template>
<script>
export default {
    name: 'LinkBtn',
    props: {
        color: {
            type: String,
            default : 'pink'
        },
        link: {
            type: Object,
            required: true
        },
        text: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        goToLink() {
            this.$router.push(this.link)
        }
    }
}
</script>
