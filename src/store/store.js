import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url_base = "https://api.openweathermap.org/data/2.5/"
const api_key = process.env.VUE_APP_OPEN_WEATHER_API_KEY

export default new Vuex.Store({
    state: {
        weatherData: {}
    },
    mutations: {
        setWeatherData(state, data) {
            state.weatherData = data
        }
    },
    actions: {
        async fetchWeatherData({ commit }, query) {
            try {
                const response = await fetch(`${url_base}weather?q=${query}&units=metric&APPID=${api_key}`);
                if (response.ok) {
                    const data = await response.json();
                    commit('setWeatherData', data);
                } else {
                    throw new Error("Couldn't fetch the required data");
                }
            } catch (e) {
              console.log(e);
              throw e;
            }
        }
    },
    getters: {
        getWeatherData: state => state.weatherData
    }
})