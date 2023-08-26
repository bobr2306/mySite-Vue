<script>

</script>

<template>
    <section class="header-block">
        <h1 class="title-header">
            <span class="title-header__main">Konst</span>
            <span class="title-header__second">just stupid developer and photographer</span>
        </h1>
    </section>
    <section id="about" class="about">
        <div class="paralax-info"></div>
        <div class="about__info">
            <h5 class="title-second">About:</h5>
            <h6 class="about__text">- хочу стать Junior Fullstack </h6>
            <h6 class="about__text">- регулярно фотографирую</h6>
            <h6 class="about__text">- увлекаюсь велопутешествиями</h6>
        </div>
        <div class="paralax-info"></div>
    </section>
    <section id="specs" class="specs">
        <div class="paralax-specs"></div>
        <div class="specs__info">
            <h5 class="title-second">Specs:</h5>
            <div class="specs__block">
                <img src="../assets/CPU.svg" alt="CPU" class="specs__img">
                <p> Intel Core i3-10105F </p>
            </div>
            <hr>
            <div class="specs__block">
                <img src="../assets/GPU.svg" alt="GPU" class="specs__img">
                <p> GeForce GTX 1660 SUPER StormX </p>
            </div>
            <hr>
            <div class="specs__block">
                <img src="../assets/Memory.svg" alt="Memory" class="specs__img">
                <p> G.Skill AEGIS 16 GB </p>
            </div>
            <hr>
            <div class="specs__block">
                <img src="../assets/HDD.svg" alt="SSD" class="specs__img">
                <p> Kingston A400 480 GB </p>
            </div>
            <hr>
            <div class="specs__block">
                <img src="../assets/Nikon.svg" alt="Nikon" class="specs__img">
                <p> Nikon D70 / D600</p>
            </div>
        </div>
        <div class="paralax-specs"></div>
    </section>
</template>

<style lang="sass">
.header-block
    background: url(../assets/header-bg.jpg) center / cover no-repeat
    height: 100vh
    width: 100vw
    top: 0
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

.about
    position: relative
    &__info
        background: rgba(white, .7)
        border-radius: 1rem
        position: absolute
        top: 30%
        left: 50%
        transform: translate(-50%, -50%)
        padding: 3rem
        border: 1px solid gray
    &__text
        font-size: 2rem
        font-weight: 400
        letter-spacing: .15rem
        text-transform: lowercase
.paralax-info
    background-image: url(../assets/info-bg.jpg)
    background-attachment: fixed
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    height: 50vh
.specs
    position: relative
    &__info
        background: rgba(white, .7)
        border-radius: 1rem
        position: absolute
        top: 30%
        left: 50%
        transform: translate(-50%, -50%)
        padding: 3rem
        border: 1px solid gray
    &__text
        font-size: 2rem
        font-weight: 400
        letter-spacing: .3rem
    &__img
        height: 2rem
        margin-right: 1rem
    &__block
        display: flex
        padding: .5rem

.paralax-specs
    background-image: url(../assets/specs-bg.JPG)
    background-attachment: fixed
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    height: 50vh


</style>