<template>
    <v-btn :color="color" text @click="goToLink">{{ text }}</v-btn>
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
            type: String,
            default: 'More'
        }
    },
    methods: {
        goToLink() {
            this.$router.push(this.link)
        }
    }
}
</script>
