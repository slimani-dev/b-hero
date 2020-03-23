<template>
    <div class="intro-image d-flex justify-center align-center">
        <transition name="fade" mode="out-in">
            <!--suppress HtmlUnknownTarget -->
            <img :key="page" :src="image" width="210px" alt="">
        </transition>
    </div>
</template>
<script>

import image1 from '@/assets/img/intro/blood-transfusion-1.svg'
import image2 from '@/assets/img/intro/blood-transfusion-2.svg'
import image3 from '@/assets/img/intro/blood-bag.svg'

export default {
    name: 'Images',
    props: {
        page: {
            type: Number,
            default: 1
        }
    },
    data: () => {
        return {
            images: [
                image1,
                image2,
                image3
            ],
        }
    },
    computed: {
        image() {
            let page = this.page

            if(page > 3) page = 3
            if(page< 1) page = 1

            return this.images[page -1]
        }
    }
}
</script>
<style scoped lang="scss">

    .intro-image {
        background-image: url("../../assets/img/intro/circle.svg");
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

</style>
