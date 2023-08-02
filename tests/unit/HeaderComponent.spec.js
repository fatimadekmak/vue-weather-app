import Header from "@/components/HeaderComponent.vue";
import { shallowMount } from "@vue/test-utils";

describe('HeaderComponent.vue Unit Tests', () => {
    
    it('the props are of the correct types', () => {
        const wrapper = shallowMount(Header)

        expect(wrapper.vm.$options.props.title.type).toBe(String)
    })
    
    it('the props are correctly assigned', () => {
        const wrapper = shallowMount(Header, {
            propsData: {
                title: "The Weather App"
            }
        })

        expect(wrapper.text().match("The Weather App"))
    })
})