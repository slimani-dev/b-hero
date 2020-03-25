<template>
    <v-container class="pt-0 px-0">
        <v-card class="mb-1 pa-5" :class="$vuetify.breakpoint.lgAndUp ? 'mt-5': ''">
            <v-form ref="form"
                    v-model="valid"
                    lazy-validation
                    @submit.prevent="validate">
                <v-text-field v-model="name"
                              :rules="nameRules"
                              label="Full Name"
                              filled
                              single-line
                              clearable
                              rounded
                              dense
                              required/>

                <v-text-field v-model="email"
                              :rules="emailRules"
                              label="E-mail"
                              filled
                              single-line
                              clearable
                              rounded
                              dense
                              required/>

                <h4>Gander</h4>

                <div class="d-flex my-4 justify-center align-center w-100">
                    <div class="d-flex flex-column align-center grey--text">
                        <img class="avatar-image" src="../../assets/img/avatar/man-gray.svg" alt="">
                        Male
                    </div>
                    <div class="mx-5 divider mb-5"></div>
                    <div class="d-flex flex-column align-center pink--text">
                        <img class="avatar-image" src="../../assets/img/avatar/woman-red.svg" alt="">
                        Female
                    </div>
                </div>


                <h4>Address</h4>

                <v-text-field class="mt-4"
                              v-model="address"
                              label="Address"
                              filled
                              single-line
                              clearable
                              rounded
                              dense
                              required/>

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
                    Save
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
            name: '',
            nameRules: [
                v => /^([A-za-z]+[\s][A-za-z]+)$/.test(v) || 'Full please (first name and last name)',
            ],
            email: '',
            emailRules: [
                v => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(v) || 'Email must be Valid'
            ],
            address: '',
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            bloodGroups: [
                'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-',
            ],
            bloodGroup: '',
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
            title: 'Become Donor',
            color: 'white',
            dark: false,
            iconColor: 'pink'
        })
    }
}
</script>

<style scoped lang="scss">

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
