<template>
    <div class="weather-wrap">
        <div class="location-box">
            <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
            <div class="date">{{ dateBuilder() }}</div>
        </div>
        <div class="weather-box">
            <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
            <div class="status">{{ weather.weather[0].main }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ResultComponent",
    props: {
        weather: {}
    },
    methods: {
        dateBuilder () {
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day} ${date} ${month} ${year}`;
        }
    }
}
</script>

<style>
    .location-box .location {
        color: white;
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        text-shadow: 1px 3px rgba(0,0,0,0.25);
    }

    .location-box .date {
        color: white;
        font-size: 15px;
        font-weight: 300;
        font-style: italic;
        text-align: center;
    }

    .weather-box {
        text-align: center;
    }

    .weather-box .temp {
        display: inline-block;
        padding: 10px 25px;
        color: white;
        font-size: 102px;
        font-weight: 900;
        text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
        background-color: rgba(255,255,255,0.25);
        border-radius: 16px;
        margin: 30px 0px;
        box-shadow: 3px 6px rgba(0,0,0,0.25);
    }

    .weather-box .status {
        color: white;
        font-size: 48px;
        font-weight: 700;
        font-style: italic;
        text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    }
</style>