<template>
  <div id="app">
    <SelectTree/>
  </div>
</template>

<script>
import SelectTree from './view/SelectTree.vue'

export default {
  name: 'app',
  components: {
    SelectTree
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
