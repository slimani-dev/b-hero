<template>
    <div class="intro-index w-100">
        <div class="d-flex align-center justify-space-between">
            <v-btn icon class="ml-5"
                   :disabled="page<2"
                   id="previous-btn"
                   @click="$emit('previous')">
                <v-icon color="white">mdi-arrow-left-drop-circle-outline</v-icon>
            </v-btn>
            <div class="d-flex align-center justify-space-between">
                <div v-for="i in 3" :key="i" class="index" :class="page === i ? 'active-index' : 'inactive-index'"/>
            </div>
            <v-btn icon class="mr-5"
                   id="next-btn"
                   @click="$emit('next')">
                <v-icon v-if="page<3" color="white">mdi-arrow-right-drop-circle-outline</v-icon>
                <v-icon v-else color="white">mdi-check-circle-outline</v-icon>
            </v-btn>
        </div>
    </div>
</template>
<script>
export default {
    name: 'IntroIndex',
    props: {
        page: {
            type: Number,
            default: 1
        },
    }
}
</script>
<style scoped lang="scss">


    .intro-index {
        width: 100%;
        position: fixed;
        padding-bottom: 20px;
        bottom: 0;

        div {

            div {
                width: 40px;
            }
        }
    }

    .index {
        height: 6px;
        background-color: white;
        border-radius: 3px;
    }

    .active-index {
        animation-name: active-index-anim;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    @keyframes active-index-anim {
        0% {
            width: 6px;
        }
        100% {
            width: 15px;
        }
    }

    .inactive-index {
        animation-name: inactive-index-anim;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }

    @keyframes inactive-index-anim {
        0% {
            width: 15px;
        }
        100% {
            width: 6px;
        }
    }

</style>
