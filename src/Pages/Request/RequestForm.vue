<template>
    <v-container class="pa-0">
        <v-card class="pa-5" elevation="0" :class="$vuetify.breakpoint.lgAndUp ? 'mt-5': ''">
            <v-form ref="form"
                    v-model="valid"
                    lazy-validation
                    @submit.prevent="validate">

                <h4 class="mb-5">City Preference</h4>

                <v-select :items="items"
                          filled
                          single-line
                          rounded
                          dense
                          label="State"/>

                <v-select :items="items"
                          filled
                          single-line
                          rounded
                          dense
                          label="Town"/>

                <h4 class="mb-5">Select Blood Group</h4>

                <div class="w-100">
                    <v-btn v-for="group in bloodGroups"
                           :key="group"
                           icon
                           class="mr-5 mb-5"
                           :class="group === bloodGroup ? 'pink': 'pink--text'"
                           outlined
                           :dark="group === bloodGroup"
                           @click="bloodGroup = group">
                        {{ group }}
                    </v-btn>
                </div>

                <v-btn color="pink"
                       rounded
                       type="submit"
                       dark
                       :loading="loading"
                       block>
                    SUBMIT
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import {serverBus} from "@/main";

export default {
    name: "EditProfile",
    props: {
        mt: Boolean
    },
    data: () => {
        return {
            valid: true,
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            bloodGroups: [
                'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-',
            ],
            bloodGroup: '',
            gander: '',
            loading: false,
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.loading = true
            }
        }
    },


    mounted() {
        serverBus.$emit('navProps', {
            title: 'Request for Blood',
            color: 'white',
            dark: false,
            iconColor: 'pink'
        })
    }
}
</script>

<style scoped lang="scss">

    .pointer {
        cursor: pointer;
    }

    .avatar-image {
        border-radius: 50%;
    }

    .divider {
        display: inline-block;
        width: 0;
        height: 38px;
        border: 1px solid #C9C9C9;
        margin-right: 30px;
        margin-left: 30px;
    }

</style>
