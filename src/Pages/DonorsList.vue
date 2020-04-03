<template>
    <v-container class="pt-0 px-0 grey lighten-4">
        <donor-item v-for="i in 23" :key="i"/>

        <load-more :more-loading="moreLoading" @load-more="moreLoading = !moreLoading"/>
    </v-container>
</template>

<script>
import {serverBus} from "@/main";
import DonorItem from "@/components/DonorItem";
import LoadMore from "@/components/feed/LoadMore";

export default {
    name: "DonorsList",
    components: {LoadMore, DonorItem},
    data: () => {
      return {
          moreLoading: false
      }
    },
    mounted() {
        serverBus.$emit('navProps', {
            title: 'Explore all donors',
            color: 'white',
            dark: false,
            iconColor: 'pink',
        })
    }
}
</script>

