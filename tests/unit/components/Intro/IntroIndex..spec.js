// Import the `mount()` method from the test utils
// and the component you want to test
import {mount, shallowMount} from '@vue/test-utils'
import IntroIndex from "@/components/Intro/IntroIndex";

import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);


describe('Intro', () => {
    describe('intro index', () => {
        it('should be on the bottom of the page', () => {
            const wrapper = shallowMount(IntroIndex)
            expect(wrapper.classes()).toContain('intro-index')
        })

        it('should emit next on clicking the next button',  () => {
            const wrapper = mount(IntroIndex)
            const nextBtn = wrapper.find('#next-btn')
            nextBtn.trigger('click')
            expect(Object.keys(wrapper.emitted())).toContain('next')
        })

        it('should have a disabled previous button by default', () => {
            const wrapper = mount(IntroIndex)
            const previousBtn = wrapper.find('#previous-btn')
            expect(previousBtn.props('disabled')).toBeTruthy()
        })

        it('should have a not disabled previous button if page is 2 or 3', () => {
            let wrapper = mount(IntroIndex, {propsData: {page: 2}})
            let previousBtn = wrapper.find('#previous-btn')
            expect(previousBtn.props('disabled')).toBeFalsy()

            wrapper.destroy()

            wrapper = mount(IntroIndex, {propsData: {page: 3}})
            previousBtn = wrapper.find('#previous-btn')
            expect(previousBtn.props('disabled')).toBeFalsy()
        })

        it('should not emit previous on clicking the previous button if page is 1',  () => {
            let wrapper = mount(IntroIndex, {propsData: {page: 1}})
            let previousBtn = wrapper.find('#previous-btn')
            previousBtn.trigger('click')
            expect(Object.keys(wrapper.emitted())).not.toContain('previous')
        })

        it('should emit previous on clicking the previous button if page > 1',  () => {
            let wrapper = mount(IntroIndex, {propsData: {page: 2}})
            let previousBtn = wrapper.find('#previous-btn')
            previousBtn.trigger('click')
            expect(Object.keys(wrapper.emitted())).toContain('previous')
        })

        //TODO more tests here

    })
})
