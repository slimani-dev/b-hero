<template>
    <div>
        <v-content>
            <slot></slot>
        </v-content>
    </div>
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
