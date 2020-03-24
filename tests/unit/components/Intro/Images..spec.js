// Import the `mount()` method from the test utils
// and the component you want to test
import {shallowMount} from '@vue/test-utils'
import Images from "@/components/Intro/Images";

// To inspect the wrapper deeper just log it to the console
// and your adventure with the Vue Test Utils begins

describe('Intro', () => {
    describe('Images', () => {
            it('should show an image on load', () => {
                const wrapper = shallowMount(Images, {
                    propsData: {
                        page: 1
                    }
                })
                const image = wrapper.find('img')
                expect(image.attributes()['src']).not.toBeNull()
            })

            it('should change the image on page change', async () => {

                const wrapper = shallowMount(Images, {
                    propsData: {
                        page: 1
                    }
                })

                let image1 = wrapper.find('img').attributes()['src']

                wrapper.setProps({page: 2})

                await wrapper.vm.$nextTick()

                let image2 = wrapper.find('img').attributes()['src']
                expect(image1).not.toEqual(image2)

            })
        }
    )

})


