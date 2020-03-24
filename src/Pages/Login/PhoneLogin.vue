<template>
    <v-container class="pa-5">
        <h2>Verify Number</h2>
        <v-form ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="validate">
            <v-text-field v-model="phone"
                          :rules="phoneRules"
                          label="Phone"
                          required
                          class="mt-4"/>

            <v-btn color="pink"
                   rounded
                   type="submit"
                   dark
                   block
                   class="mt-4">
                GET OTP
            </v-btn>
        </v-form>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title class="d-flex flex-row pl-2">
                    <v-btn icon
                           color="pink"
                           @click="closeDialog">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <span class="font-weight-bold flex-fill">Enter your Code</span>
                </v-card-title>
                <v-card-text>
                    <v-form ref="verificationCodeForm"
                            v-model="verificationCodeValid"
                            lazy-validation
                            @submit.prevent="verifyCode">
                        <v-text-field
                                v-model="verificationCode"
                                :rules="verificationCodeRules"
                                :counter="6"
                                label="Verification Code"
                                required
                        ></v-text-field>
                    </v-form>
                    <small>You can resend the OTP <span v-if="countDown">in {{countDown}}s</span></small>
                </v-card-text>
                <v-card-actions>
                    <v-row no-gutters class="mb-3">
                        <v-col cols="6">
                            <v-btn color="pink" text @click="resend" :disabled="countDown > 0">Re-send</v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn color="pink"
                                   rounded
                                   dark
                                   block
                                   class="ml-n3"
                                   @click="verifyCode"
                                   :loading="verificationCodeLoading">
                                OK
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>

import {serverBus} from '@/main';

export default {
    name: "PhoneLogin",
    data: () => ({
        valid: true,
        verificationCodeValid: true,
        phone: '',
        verificationCode: '',
        phoneRules: [
            v => !!v || 'Phone is required',
            v => /^(([+]*213)|0)[5-7][0-9]{8}$/.test(v) || 'Phone must be valid',
        ],
        verificationCodeRules: [
            v => !!v || 'verification code is required',
            v => /^[0-9]{6}$/.test(v) || 'Verification code must be valid'
        ],
        dialog: false,
        countDown: 20,
        verificationCodeLoading: false
    }),
    methods: {
        closeDialog() {
            this.dialog = false
            this.countDown = 0;
        },
        validate() {
            if (this.$refs.form.validate()) {
                this.dialog = true
                this.countDownTimer()
            }
        },
        resend() {
            this.$refs.verificationCodeForm.resetValidation()
            this.verificationCodeRules = this.verificationCodeRules.filter((r, i) => i < 2)
            this.countDown = 20
            this.countDownTimer()
        },
        countDownTimer() {
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)
            }
        },
        verifyCode() {
            //TODO change the code rule (555666) and remove the timer
            if (this.$refs.verificationCodeForm.validate()) {
                this.verificationCodeLoading = true
                setTimeout(() => {
                    this.verificationCodeRules[2] = (v => v === '555666' || 'wrong verification code')
                    if (this.$refs.verificationCodeForm.validate()) {
                        this.$router.push({name: 'EditProfile'})
                    } else {
                        this.verificationCodeLoading = false
                    }
                }, 2000)
            }
        }
    },
    mounted() {
        serverBus.$emit('navProps', {
            title: '',
            color: 'white',
            dark: false,
            iconColor: 'pink'
        })
    }
}
</script>

<style scoped>

</style>
