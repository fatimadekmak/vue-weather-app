
<template>
    <div>
        <ErrorBanner :bannerMessage="bannerMessage" @cancelMessage="cancelMessage"></ErrorBanner>
        <SearchBar v-on:searchCity="searchCity" v-bind:query="query"></SearchBar>
        <Result v-if="(typeof weather.main != 'undefined')" :weather="weather"></Result>
    </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import Result from "./ResultComponent.vue";
import ErrorBanner from './ErrorBanner.vue'
import { mapActions } from 'vuex';

export default {
    name: 'App',
    components: {
        SearchBar,
        Result,
        ErrorBanner
    },
    data() {
        return {
            weather: {},
            bannerMessage: '',
            query:''
        }
    }, 
    mounted() {
        try {
            this.api_key = process.env.VUE_APP_OPEN_WEATHER_API_KEY
            if(this.api_key=='') throw new Error()
        }catch {
            this.bannerMessage = 'Error! API Key needs to be loaded to use openweathermap.org!'
            return;
        }
    },
    methods: {
        ...mapActions(['fetchWeatherData']),
        async searchCity(query) {
            this.bannerMessage = ''
            this.weather = {}
            
            try {
                await this.fetchWeatherData(query)
                this.weather = this.$store.getters.getWeatherData
                this.$emit('changeBg', this.weather.main.temp < 16);
            }
            catch(e) {
                this.bannerMessage = "Couldn't fetch the required data"
            }
        },
        cancelMessage() {
            this.bannerMessage = '';
            this.query=''
        }
    }
  
}
</script>