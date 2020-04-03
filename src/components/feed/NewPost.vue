<template>
    <v-card class="white px-5 py-3 mb-2 d-flex flex-row align-center justify-space-between">
        <h2 class="font-weight-bold black--text body-2 ma-0">{{ title }}</h2>
        <v-btn v-if="!titleOnly" text small @click="showDialog">
            <v-icon dense class="pink v-btn--round white--text ma-0 mr-2">mdi-plus</v-icon>
            Post Update
        </v-btn>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar>
                    <v-btn icon @click="dialog = false">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn :disabled="image === '' && text === ''" :loading="loading" text @click="validate">Post
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-form ref="form"
                        v-model="valid"
                        class="pa-5"
                        lazy-validation
                        @submit.prevent="validate">

                    <v-file-input
                            label="Photo"
                            filled
                            rounded
                            single-line
                            show-size
                            dense
                            ref="image"
                            accept="image/*"
                            @click:append="dd"
                            :append-icon="image ? '': 'mdi-camera'"
                            prepend-icon=""
                            @change="compressImage"/>

                    <!--suppress HtmlUnknownTarget -->
                    <v-img v-if="image"
                           :src="image"
                           aspect-ratio="1"
                           class="mb-5"
                           width="100%">
                        <v-overlay opacity="0"
                                   absolute
                                   class="d-flex align-start justify-end pt-2 pr-2">
                            <v-btn icon
                                   class="grey"
                                   @click="image = ''">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-overlay>
                    </v-img>

                    <v-textarea label="Outlined textarea"
                                filled
                                dense
                                no-resize
                                single-line
                                rounded
                                v-model="text">

                    </v-textarea>

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

                </v-form>
            </v-card>
        </v-dialog>
    </v-card>
</template>
<script>

export default {
    name: 'NewPost',
    props: {
        title: {
            type: String,
            default: 'EXPLORE LATEST FEED'
        },
        titleOnly: Boolean
    },
    data() {
        return {
            valid: true,
            dialog: false,
            image: '',
            text: '',
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            loading: false,
        }
    },
    methods: {
        dd() {
            console.log(this.$refs.image.$el)
            ///this.$refs.image.$el.
        },
        showDialog() {
            this.dialog = true
            this.image = ''
            this.text = ''
            this.loading = false
        },
        compressImage(e) {
            this.image = e ?  URL.createObjectURL(e) : ''


        },
        validate() {
            if (this.$refs.form.validate()) {
                this.loading = true
            }
        }
    },
}
</script>
