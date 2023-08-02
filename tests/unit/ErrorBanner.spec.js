import { shallowMount } from "@vue/test-utils";
import ErrorBanner from "@/components/ErrorBanner.vue";

describe('ErrorBanner.vue Unit Tests', () => {
    it('the props are of the correct types', () => {
        const wrapper = shallowMount(ErrorBanner)

        expect(wrapper.vm.$options.props.bannerMessage.type).toBe(String)
    })

    it('correctly assigns the props to the default values', () => {
        const wrapper = shallowMount(ErrorBanner)

        expect(wrapper.vm.$props.bannerMessage).toBe('')
    })

    it('correctly assigns the props', () => {
        const wrapper = shallowMount(ErrorBanner, {
            propsData: {
                bannerMessage: "Couldn't fetch the required data!"
            }
        })

        expect(wrapper.find('small').text().match("Couldn't fetch the required data!"))
    })

    it('shows the div if there is a message', () => {
        const wrapper = shallowMount(ErrorBanner, {
            propsData: {
                bannerMessage: "Couldn't fetch the required data!"
            }
        })

        expect(wrapper.find('.error').isVisible()).toBe(true)
    })

    it('does not show the div if there is no message', () => {
        const wrapper = shallowMount(ErrorBanner)

        expect(wrapper.find('.error').isVisible()).toBe(false)
    })

    it('emits an event when the span is clicked', () => {
        const wrapper = shallowMount(ErrorBanner)
        wrapper.find('span').trigger('click')

        expect(wrapper.emitted('cancelMessage')).toBeTruthy()
        expect(wrapper.emitted('cancelMessage').length).toBe(1)
    })

    it('clears the bannerMessage when the span is clicked', () => {
        const wrapper = shallowMount(ErrorBanner, {
            propsData: {
                bannerMessage: "Error message"
            }
        });
        wrapper.find('span').trigger('click');
    
        expect(wrapper.find('small').text().match(""))
      })
})