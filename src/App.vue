<template>
    <v-app id="inspire">
        <vue-page-transition>
            <component :is="layout">
                <vue-page-transition>
                    <router-view/>
                </vue-page-transition>
            </component>
        </vue-page-transition>
    </v-app>
</template>

<script>
const default_layout = 'default'

export default {
    name: 'App',
    computed: {
        layout() {
            return (this.$route.meta.layout || default_layout) + '-layout'
        }
    }
}
</script>

<style>
    body {
        font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
