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
export default {
    name: 'App',
    components: {
        SearchBar,
        Result,
        ErrorBanner
    },
    data() {
        return {
            url_base: "https://api.openweathermap.org/data/2.5/",
            api_key: "cbc0a1379fc8a548c259909fc8a0bf92",
            weather: {},
            bannerMessage: '',
            query:''
        }
    }, 
    methods: {
        setResults(results) {
            this.weather = results
            this.$emit('changeBg',(this.weather.main.temp < 16))
        },
        async searchCity(query) {
            this.bannerMessage = ''
            this.weather = {}
            await fetch(`${this.url_base}weather?q=${query}&units=metric&APPID=${this.api_key}`)
                .then(async response => {
                    if(response.ok) {
                        this.setResults(await response.json())
                    }
                    else {
                        this.bannerMessage = "Couldn't fetch the required data"
                    }
                })

        },
        cancelMessage() {
            this.bannerMessage = '';
            this.query=''
        }
    }
  
}
</script>