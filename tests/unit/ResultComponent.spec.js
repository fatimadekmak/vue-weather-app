import { shallowMount } from "@vue/test-utils";
import ResultComponent from "@/components/ResultComponent.vue";

const weather = {
    name: "Beirut",
    sys: {
        country: "Lebanon"
    },
    main: {
        temp: 30
    },
    weather: [{main: "Clear"}]
}

describe('ResultComponent.vue Unit Tests', () => {
    
    it('correctly assigns the props',  () => {
        const wrapper =  shallowMount(ResultComponent, {
            propsData: {
                weather: weather
            }
        })

        expect(wrapper.find('.location').text()).toMatch('Beirut, Lebanon')
        expect(wrapper.find('.temp').text()).toMatch('30°C')
        expect(wrapper.find('.status').text()).toMatch('Clear')

    })

    it('calls the method dateBuilder successfully', () => {
        const mockDate = jest.fn(() => {return "Monday 24 July 2023"})
        const wrapper =  shallowMount(ResultComponent, {
            propsData: {
                weather: weather
            },
            methods: {
                dateBuilder: mockDate
            }
        })

        expect(mockDate).toBeCalledTimes(1)
        expect(wrapper.find('.date').text()).toMatch("Monday 24 July 2023")
    })
})