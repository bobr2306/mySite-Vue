<script>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import SecondHeader from './components/SecondHeader.vue';
export default {
  components: {
    AppHeader,
    RouterView,
    AppFooter,
    SecondHeader
  },
  methods: {
    scrollHeader() {

    }
  },
  mounted() {
    window.addEventListener('scroll', (event) => this.ifScroll = window.scrollY > 50)
  },
  data() {
    return {
      ifScroll: false
    }
  }
}
</script>

<template>
  <TransitionGroup name="header">

    <AppHeader class="appheader" v-if="!ifScroll" key="first">

    </AppHeader>

    <SecondHeader class="appheader" v-if="ifScroll" key="second">

    </SecondHeader>

  </TransitionGroup>


  <router-view>

  </router-view>
  <!-- wtf??? -->
  <Transition appear>

    <AppFooter>

    </AppFooter>

  </Transition>
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
.appheader
  // position: sticky
  z-index: 222
  top: 0
.v-enter-active,
.v-leave-active 
  transition: opacity 0.5s ease

.v-enter-from,
.v-leave-to 
  opacity: 0

//titles:
.title-second
  font-size: 3.5rem
  font-weight: 500
  letter-spacing: .3rem

//utilites:
.mb-2
  margin-bottom: 2rem
.text-white
  color: white
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
