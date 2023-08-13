<script>
export default {
    methods: {
        goAbout() {
            this.$router.push({
                name: 'about'
            })
        },
        goProjects() {
            this.$router.push({
                name: 'projects'
            })
        },
        goPhotos() {
            this.$router.push({
                name: 'photos'
            })
        },
        goLinks() {
            this.$router.push({
                name: 'links'
            })
        }
    }
}
</script>

<template>
    <header class="header">
        <div class="nav">
            <a @click="goAbout" href="#" class="nav-item" :class="{ 'nav-item_active': this.$route.name = 'about' }">
                About me
            </a>
            <a @click="goProjects" href="#" class="nav-item" :class="{ 'nav-item_active': this.$route.name = 'projects' }">
                My projects
            </a>
            <a @click="goPhotos" href="#" class="nav-item" :class="{ 'nav-item_active': this.$route.name = 'photos' }">
                My photos
            </a>
            <a @click="goLinks" href="#" class="nav-item" :class="{ 'nav-item_active': this.$route.name = 'links' }">
                Links
            </a>
        </div>
        <h1 class="title-header">
            <span class="title-header__main">Konst</span>
            <span class="title-header__second">just stupid developer and photographer</span>
        </h1>
    </header>
</template>

<style lang="sass">
header
    background: url(../assets/header-bg.jpg) center / cover no-repeat
    height: 100vh
    width: 100vw
    top: 0
.nav
    background-color: #d9d9d9
    list-style: none
    display: flex
    justify-content: space-around
    animation-name: startDown
    animation-duration: .6s
    animation-fill-mode: backwards
    animation-timing-function: ease-out
    animation-delay: .4s
    user-select: none
.nav-item
    position: relative
    display: inline-block
    &:link, &:visited
        text-decoration: none
        padding: 2rem 2rem
        text-transform: uppercase
        color: #000
        transition: .5s
        letter-spacing: .6rem
    &:hover
        transform: translateY(4px)
        &::after
            opacity: 0
            transform: scale(1.4)
    &:active
        transform: translateY(2px)
    &::after
        content: ""
        width: 100%
        height: 100%
        display: inline-block
        background-color: #d9d9d9
        position: absolute
        top: 0
        left: 0
        z-index: -1
        transition: 1s
    &_active
        transform: skewY(-5deg) scale(1.05)
        text-decoration: underline
.title-header
    position: absolute
    top: 25%
    left: 50%
    transform: translate(-50%, -50%)
    text-align: center
    user-select: none
    &__main
        display: block
        font-weight: 700
        font-size: 4rem
        letter-spacing: 1rem
        animation: 1s ease-out .1s leftToAss
    &__second
        display: block
        font-weight: 400
        animation: 1s ease-out .1s rightToAss


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