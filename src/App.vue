<template>
  <div id="app">
    <Header/>
    <Home/>
  </div>
</template>

<script>
import Home from './containers/Home'
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Home,
    Header
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
