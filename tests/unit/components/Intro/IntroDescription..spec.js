import {shallowMount} from '@vue/test-utils'
import IntroDescription from "@/components/Intro/IntroDescription";


describe('Intro', () => {
    describe('IntroDescription', () => {
        it('should be on the bottom of the screen', () => {
            const wrapper = shallowMount(IntroDescription)
            expect(wrapper.classes()).toContain('intro-bottom')
        })

        it('should have a title', () => {
            const wrapper = shallowMount(IntroDescription)
            const title = wrapper.find('h1')
            expect(title.text().length > 0).toBeTruthy()
        })

        it('should have a description', () => {
            const wrapper = shallowMount(IntroDescription)
            const description = wrapper.find('p')
            expect(description.text().length > 0).toBeTruthy()
        })

        it('should change text when page change', async () => {
            let wrapper = shallowMount(IntroDescription, {
                propsData: {
                    page: 1
                }
            })

            const title = wrapper.find('h1').text()
            const description = wrapper.find('p').text()

            wrapper.setProps({page: 2})

            await wrapper.vm.$nextTick()

            const secondTitle = wrapper.find('h1').text()
            const secondDescription = wrapper.find('p').text()

            expect(secondTitle).not.toEqual(title)
            expect(secondDescription).not.toEqual(description)

        })

        it('should change the animation on page and oldPage change', async () => {
            let wrapper = shallowMount(IntroDescription, {propsData: {
                    page: 2,
                    oldPage: 1
                }})

            expect(wrapper.attributes('id')).toEqual('left-center')

            wrapper.setProps({
                page: 3,
                oldPage: 2
            })

            await wrapper.vm.$nextTick()

            expect(wrapper.attributes('id')).toEqual('center-right')


            wrapper.setProps({
                page: 2,
                oldPage: 3
            })

            await wrapper.vm.$nextTick()

            expect(wrapper.attributes('id')).toEqual('right-center')

            wrapper.setProps({
                page: 1,
                oldPage: 2
            })

            await wrapper.vm.$nextTick()

            expect(wrapper.attributes('id')).toEqual('center-left')

        })
    })
})
