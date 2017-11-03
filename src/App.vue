<template>
  <div id="app">
    <Banner/>
    <Home/>
  </div>
</template>

<script>
import Home from './containers/Home'
import Banner from './components/Banner'

export default {
  name: 'app',
  components: {
    Home,
    Banner
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
