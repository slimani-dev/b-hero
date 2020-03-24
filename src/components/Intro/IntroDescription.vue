<template>
    <div class="intro-bottom d-flex flex-column align-center justify-center" :id="position">
        <transition name="fade" mode="out-in">
            <div :key="introText.id">
                <h1 class="intro-title">{{ introText.title }}</h1>
                <p class="intro-description">{{ introText.description }}</p>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'IntroDescription',
    props: {
        page: {
            type: Number,
            default: 1
        },
        oldPage: {
            type: Number,
            default: 1
        },
    },
    data:() => {
        return {
            introTexts : [
                {
                    id: 1,
                    title: 'Donate Blood',
                    description: '1 - Lorem Ipsum is simply dummy text of the printing and typesetting'
                },
                {
                    id: 2,
                    title: 'Donate Blood 2',
                    description: '2 - Lorem Ipsum is simply dummy text of the printing and typesetting'
                },
                {
                    id: 3,
                    title: 'Donate Blood 3',
                    description: '3 - Lorem Ipsum is simply dummy text of the printing and typesetting'
                }
            ]
        }
    },
    computed: {
        introText() {
            let page = this.page
            return this.introTexts.find(t => t.id === page)
        },
        position() {
            const oldPosition = this.oldPage === 1 ? 'left' : this.oldPage === 2 ? 'center' : 'right'
            let newPosition = this.page === 1 ? 'left' : this.page === 2 ? 'center' : 'right'
            return `${oldPosition}-${newPosition}`
        }
    }
}
</script>
<style scoped lang="scss">

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
        background-image: url("../../assets/img/intro/intro-bg-1.svg");
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

</style>
