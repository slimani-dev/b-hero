<template>
    <v-app>
        <v-content>
            <slot></slot>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'Full',
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
    }),
}
</script>
