<template>
    <div class="search-box">
        <input 
            v-model="query" 
            @keypress="fetchWeather"
            type="text" 
            placeholder="Search by City Name" 
            class="search-bar"
        />
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    data() {
        return {
            query: ''
        }
    },
    methods: {
        fetchWeather (e) {
            if(e.key == "Enter") {
                this.$emit('searchCity',this.query)
            }
        }
    }
}
</script>

<style>
    .search-box {
        width: 100%;
        margin-bottom: 30px; 
    }
    .search-bar {
        display: block;
        margin: auto;
        width: 70%;
        padding: 15px;
        color: #313131;
        font-size: 20px;
        appearance: none;
        border: none;
        outline: none;
        background: none;
        background-color: rgba(255,255,255,0.5);
        box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
        border-radius: 0px 16px 0px 16px;
        transition: 0.4s;
    }

    .search-bar:focus {
        box-shadow: 0px 0px 16px rgba(0,0,0,0.25);
        background-color: rgba(255,255,255,0.75);
        border-radius: 16px 0px 16px 0px;
    }
</style>