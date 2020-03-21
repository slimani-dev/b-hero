<template>
  <component :is="layout">
    <router-view/>
  </component>
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
