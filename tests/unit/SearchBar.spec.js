import { shallowMount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe('SearchBar.vue Test Units', () => {

    it('correctly binds the query data prop to the input element value', async () => {
        const wrapper = shallowMount(SearchBar)

        expect(wrapper.find('input').element.value).toBe("")

        await wrapper.setData({
            query: "Search Query"
        })
        
        expect(wrapper.find('input').element.value).toBe("Search Query")
    })

    it('correctly binds the input element value to the query data prop', async () => {
        const wrapper = shallowMount(SearchBar)
        await wrapper.find('input').setValue("Search Query")
        
        expect(wrapper.vm.query).toBe("Search Query")
    })

    it('correctly renders the input field with the right placeholder', async () => {
        const wrapper = shallowMount(SearchBar)
        
        expect(wrapper.find('input').element.placeholder).toBe("Search by City Name")
    })

    it('emits searchCity event when pressing Enter Key', async () => {
        const wrapper = shallowMount(SearchBar)
        const inputElement = wrapper.find('input')
        await inputElement.setValue("Tokyo")
        await inputElement.trigger('keypress', {key:"Enter"})

        expect(wrapper.emitted('searchCity')).toBeTruthy()
        expect(wrapper.emitted('searchCity').length).toBe(1)
        expect(wrapper.emitted('searchCity')[0][0]).toMatch('Tokyo')
    })

    it('does not emit searchCity event on key dif than enter', async () => {
        const wrapper = shallowMount(SearchBar)
        const inputElement = wrapper.find('input')
        await inputElement.setValue("Tokyo")
        await inputElement.trigger('keypress', {key:"A"})

        expect(wrapper.emitted('searchCity')).toBeFalsy()
    })

})