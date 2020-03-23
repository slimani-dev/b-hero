<template>
    <v-container fluid class="pa-0 pink fill-height">
        <div class="w-100 d-flex">
            <!--suppress CheckImageSize -->
            <img src="../../assets/img/login/blood-trans.png" alt="" width="90%" class="mx-auto">
        </div>

        <div class="login-wrapper">

            <div class="d-flex align-center flex-column h-100 pt-5">
                <h1 class="my-5">LOGIN & REGISTER</h1>

                <v-btn block rounded class=" btn-login btn-facebook mt-5">
                    Facebook
                </v-btn>
                <v-btn block rounded class=" btn-login btn-google mt-5">
                    Google
                </v-btn>
                <v-btn block rounded class=" btn-login btn-number mt-5"
                @click="$router.push({name: 'PhoneLogin'})">
                    Mobile Number
                </v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "Login",
}
</script>

<style scoped lang="scss">

    .w-100 {
        width: 100% !important;
    }

    .login-wrapper {
        height: 385px;
        position: fixed;
        bottom: 0;
        margin-left: -1%;
        width: 102%;
        background: url("../../assets/img/login/bg.svg") no-repeat center top;
        background-size: cover;

        h1 {
            text-align: left;
            font-weight: Bold;
            font-size: 18px;
            letter-spacing: 0;
            color: #0A0819;
            opacity: 1;
        }

        div {
            width: 237px;
            margin-left: auto;
            margin-right: auto;

            .btn-login {
                height: 44px;
                padding-left: 34px;
                padding-right: 34px;
                border-radius: 22px;
                text-align: unset;
                font-size: 15px;

            }

            .btn-facebook {
                background-image: url('../../assets/img/login/facebook-btn-bg.svg');
                background-position: center center;
                background-size: cover;
                color: #FFFFFF;
            }

            .btn-google {
                background-image: url('../../assets/img/login/google-btn-bg.svg');
                background-position: center center;
                background-size: cover;
                border: 1px solid #C9C9C9;
            }

            .btn-number {
                background-image: url('../../assets/img/login/number-btn-bg.svg');
                background-position: center center;
                background-size: cover;
                border: 1px solid #C9C9C9;
            }


            img {
                position: relative;
                left: 33px;
                top: 16px;
            }

        }
    }
</style>
