<template>
  <div id="app" :class="this.cold===true?'cold':'warm'">
      <main>
        <Header :title="title"></Header>
        <WeatherContent v-on:changeBg="changeBg"></WeatherContent>
      </main>
  </div>
</template>

<script>
import WeatherContent from '../src/components/WeatherContent.vue'
import Header from '../src/components/HeaderComponent.vue'
export default {
  name: 'App',
  components: {
    WeatherContent,
    Header
  },
  data()
  {
    return {
      cold: {
        default: false,
        type: Boolean
      },
      title: "The Weather App"
    } 
  },
  methods: {
    changeBg(isCold) {
      this.cold = isCold
    }
  }
  
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: "montserrat",sans-serif;
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
  }

  #app.cold {
    background-image: url("../src/assets/cold-bg.jpg");
  }
  #app.warm {
    background-image: url("../src/assets/bg.jpg");
  }

  main {
    min-height: 100vh;
    padding: 25px;
    
  }

</style>
