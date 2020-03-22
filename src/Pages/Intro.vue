<template>
    <v-container fluid class="pa-0 grey lighten-4">
        <v-card v-touch="{
            left: () => swipe(1),
            right: () => swipe(-1),
        }"
                class="intro"
                justify="center">
            <div class="intro-image d-flex justify-center align-center">
                <transition name="fade" mode="out-in">
                    <!--suppress HtmlRequiredAltAttribute -->
                    <img key="1" v-if="page === 1" src="../assets/img/intro/blood-transfusion-1.svg" width="210px">
                    <img key="2" v-if="page === 2" src="../assets/img/intro/blood-transfusion-2.svg" width="210px">
                    <img key="3" v-if="page === 3" src="../assets/img/intro/blood-bag.svg" width="210px">
                </transition>
            </div>
            <div class="intro-bottom d-flex flex-column align-center justify-center" :id="position">
                <transition name="fade" mode="out-in">
                    <div key="1" v-if="page === 1">
                        <h1 class="intro-title">Donate Blood</h1>
                        <p class="intro-description">Lorem Ipsum is simply dummy text of the printing and
                            typesetting</p>
                    </div>
                    <div key="2" v-else-if="page === 2">
                        <h1 class="intro-title">Donate Blood</h1>
                        <p class="intro-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error est
                            eveniet facilis iure tempore unde vel, velit voluptates. Au</p>
                    </div>
                    <div key="3" v-else>
                        <h1 class="intro-title">Donate Blood</h1>
                        <p class="intro-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            aperiam aut cupiditate deleniti doloremque earum enim error ex </p>
                    </div>
                </transition>
            </div>
            <div class="intro-index w-100">
                <div class="d-flex align-center justify-space-between">
                    <v-btn icon class="ml-5"
                           :disabled="page<2"
                           @click="swipe(-1)">
                        <v-icon color="white">mdi-arrow-left-drop-circle-outline</v-icon>
                    </v-btn>
                    <div class="d-flex align-center justify-space-between">
                        <div v-for="i in 3" :key="i" class="index" :class="page === i ? 'active-index' : 'inactive-index'"/>
                    </div>
                    <v-btn icon class="mr-5"
                            @click="swipe(1)">
                        <v-icon v-if="page<3" color="white">mdi-arrow-right-drop-circle-outline</v-icon>
                        <v-icon v-else color="white">mdi-check-circle-outline</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-card>
    </v-container>
</template>

<script>

export default {
    name: "Intro",
    data: () => ({
        oldPage: 1,
        page: 1,
    }),

    methods: {
        swipe(i) {
            if(i > 0 && this.page === 3)
                this.$router.push('/')
            if ((i < 0 && this.page > 1) || i > 0) {
                this.oldPage = this.page
                this.page += i
            }
        },
    },
    computed: {
        position() {
            const oldPosition = this.oldPage === 1 ? 'left' : this.oldPage === 2 ? 'center' : 'right'
            let newPosition = this.page === 1 ? 'left' : this.page === 2 ? 'center' : 'right'
            return `${oldPosition}-${newPosition}`
        }
    }
}
</script>

<style scoped lang="scss">
    .intro {
        height: 100vh;
    }

    .intro-image {
        background-image: url("../assets/img/intro/circle.svg");
        background-position: center center;
        height: calc(100vh - 250px);
        width: 100%;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }

    #left-center {
        animation-name: left-center-anim;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

    @keyframes left-center-anim {
        0% {
            background-position: left bottom;
        }
        100% {
            background-position: center bottom;
        }
    }

    #center-right {
        animation: center-right-anim 1s forwards;
    }

    @keyframes center-right-anim {
        0% {
            background-position: center bottom;
        }
        100% {
            background-position: right bottom;
        }
    }

    #right-center {
        animation: right-center-anim 1s forwards;
    }

    @keyframes right-center-anim {
        0% {
            background-position: right bottom;
        }
        100% {
            background-position: center bottom;
        }
    }

    #center-left {
        animation: center-left-anim 1s forwards;
    }

    @keyframes center-left-anim {
        0% {
            background-position: center bottom;
        }
        100% {
            background-position: left bottom;
        }
    }

    .intro-bottom {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 349px;
        background-image: url("../assets/img/intro/intro-bg-1.svg");
        background-position: left bottom;
        background-repeat: no-repeat;
    }

    .intro-title {
        text-align: center;
        font-weight: Bold;
        font-size: 17px;
        letter-spacing: 0.03px;
        color: #FFFFFF;
        opacity: 1;
    }

    .intro-description {
        width: 250px;
        text-align: center;
        font-size: 15px;
        color: #FFFFFF;
        opacity: 1;
    }

    .intro-index {
        width: 100%;
        position: fixed;
        bottom: 30px;

        div {

            .btn {
                width: 120px;
                height: 40px;
                text-transform: uppercase;
                text-align: center;
                font-weight: lighter;
                font-size: 14px;
                letter-spacing: 0.03px;
                color: #FFFFFF;
                opacity: 1;
            }

            .btn-hidden {
                visibility: hidden;
            }

            .btn-right {
                border-radius: 20px 0 0 20px;
            }

            .btn-left {
                border-radius: 0 20px 20px 0;
            }

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
