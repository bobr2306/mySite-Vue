<script>

</script>

<template>
    <section id="about" class="about">
        <div class="paralax-info"></div>
        <div class="about__info">
            <h5 class="about__title">About:</h5>
            <h6 class="about__text">- купаюсь в создании сайтов с 2021</h6>
            <h6 class="about__text">- фотографирую уже второй год</h6>
            <h6 class="about__text">- увлекаюсь велопутешествиями</h6>
        </div>
        <div class="paralax-info"></div>
    </section>
    <section id="specs" class="specs">
        <div class="paralax-specs"></div>
        <div class="specs__info">
            <h5 class="specs__title">Specs:</h5>
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
    &__title
        font-size: 2.5rem
        font-weight: 500
        letter-spacing: .5rem
    &__text
        font-size: 2rem
        font-weight: 400
        letter-spacing: .3rem
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
        top: 20%
        left: 50%
        transform: translate(-50%, -50%)
        padding: 3rem
        border: 1px solid gray
    &__title
        font-size: 2.5rem
        font-weight: 500
        letter-spacing: .5rem
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