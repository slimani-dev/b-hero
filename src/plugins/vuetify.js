import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import {Touch, Ripple} from 'vuetify/lib/directives'

Vue.use(Vuetify, {
    directives: {
        Touch, Ripple
    }
})

export default new Vuetify({})
