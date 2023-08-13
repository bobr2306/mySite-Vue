<script>
import {RouterView} from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
export default {
  components: {
    AppHeader,
    RouterView,
    AppFooter
  }
}
</script>

<template>
  <AppHeader>

  </AppHeader>

  <RouterView>

  </RouterView>

  <AppFooter>

  </AppFooter>
</template>

<style lang="sass">
*, ::after, ::before
  margin: 0
  padding: 0
  box-sizing: border-box
html
  font-size: 10px
  scroll-behavior: smooth
body
  font-family: 'Montserrat', sans-serif
  font-size: 1.6rem
  font-weight: 400
  overflow-x: hidden
</style>
