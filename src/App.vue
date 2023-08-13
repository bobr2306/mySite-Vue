<script>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
export default {
  components: {
    AppHeader,
    RouterView,
    AppFooter
  },
  methods: {
    scrollHeader() {

    }
  },
  mounted() {

  }
}
</script>

<template>
  <AppHeader>

  </AppHeader>

  <router-view>

  </router-view>

  <AppFooter>

  </AppFooter>
</template>

<style lang="sass">
//base:
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

//titles:
.title-second
  font-size: 2.5rem
  font-weight: 500
  letter-spacing: .5rem
  text-decoration: underline

//utilites:
.mb-2
  margin-bottom: 2rem

//animations:
@keyframes startDown
  0%
    opacity: 0
    transform: translateY(-3rem)
  100%
    opacity: 1
    transform: translateY(0)
@keyframes leftToAss
  0%
    opacity: 0
    transform: translateX(-10rem)
  100%
    opacity: 1
    transform: translateY(0)
@keyframes rightToAss
  0%
    opacity: 0
    transform: translateX(10rem)
  100%
    opacity: 1
    transform: translateY(0)
</style>
