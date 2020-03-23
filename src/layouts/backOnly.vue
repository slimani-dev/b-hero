<template>
    <v-app id="inspire">
        <v-app-bar app
                   elevation="0"
                   :dark="dark"
                   :color="navColor">
            <v-btn icon
                   :color="iconColor"
                   @click="$router.go(-1)">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>
                <span>{{ title }}</span>
            </v-toolbar-title>
        </v-app-bar>
        <v-content>
            <slot></slot>
        </v-content>
    </v-app>
</template>

<script>
import {serverBus} from '@/main';

export default {
    name: "BackOnly",
    data() {
        return {
            title: '',
            navColor: 'white',
            iconColor: 'pink',
            dark: false
        }
    },
    created() {
        // Using the server bus
        serverBus.$on('navProps', (props) => {
            this.title = props.title
            this.navColor = props.color
            this.dark = props.dark
            this.iconColor = props.iconColor
        });
    }
}
</script>

