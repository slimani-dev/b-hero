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
            <v-spacer/>
            <LinkBtn v-if="leftBtn.type === 'link'" :color="leftBtn.color" :link="leftBtn.link"/>
        </v-app-bar>
        <v-content>
            <slot></slot>
        </v-content>
    </v-app>
</template>

<script>
import {serverBus} from '@/main';
import LinkBtn from "@/layouts/LinkBtn";

export default {
    name: "BackOnly",
    components: {LinkBtn},
    data() {
        return {
            title: '',
            navColor: 'white',
            iconColor: 'pink',
            dark: false,
            leftBtn : {}
        }
    },
    created() {
        // Using the server bus
        serverBus.$on('navProps', (props) => {
            this.title = props.title
            this.navColor = props.color
            this.dark = props.dark
            this.iconColor = props.iconColor
            this.leftBtn = props.leftBtn
        });
    }
}
</script>

