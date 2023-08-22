<script>

</script>

<template>
    <header class="header-second">
        <nav class="second-nav">
            <a @click="goAbout" class="second-nav-item" :class="{ 'nav-item_active': this.$route.name == 'about' }">
                About me
            </a>
            <a @click="goProjects" class="second-nav-item" :class="{ 'nav-item_active': this.$route.name == 'projects' }">
                My projects
            </a>
            <img src="../assets/icons/ezh.svg" class="second-nav__img" alt="">
            <a @click="goPhotos" class="second-nav-item" :class="{ 'nav-item_active': this.$route.name == 'photos' }">
                My photos
            </a>
            <a @click="goLinks" class="second-nav-item" :class="{ 'nav-item_active': this.$route.name == 'links' }">
                Links
            </a>
        </nav>
    </header>
</template>

<style lang="sass">
.header-second
    position: sticky
    z-index: 99
    top: 0
.second-nav
    background-color: #d9d9d9
    list-style: none
    display: flex
    justify-content: space-around
    user-select: none
    &__img
        width: 10%
.second-nav-item
    position: relative
    display: block
    text-decoration: none
    padding: 2rem 2rem
    text-transform: uppercase
    color: #000
    cursor: pointer
    transition: .5s
    letter-spacing: .6rem
    animation-name: startDown
    animation-duration: .6s
    animation-fill-mode: backwards
    animation-timing-function: ease-out
    animation-delay: .4s
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
.nav-item_active
    transform: skewY(-5deg) scale(1.05) !important
    text-decoration: underline
    &::after
      opacity: 0  
</style>