<script>

</script>

<template>
    <section class="links">
        <div class="links__block">
            <h5 class="title-second links__title">You can find me on:</h5>
            <ul class="links__list">
                <li class="links__item">
                    <a href="https://github.com/bobr2306" class="links__link">GitHub</a>
                </li>
                <p class="links__or">or</p>
                <li class="links__item">
                    <a href="https://t.me/Elona_muska" class="links__link">Telegram</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="sass">
.links
    background: url(../assets/links-bg.jpg) center / cover no-repeat
    position: relative
    height: 100vh
    &__block
        position: absolute
        top: 20%
        left: 50%
        transform: translate(-50%, -50%)
        text-align: center
    &__list
        list-style: none
        animation: 1s ease-out .1s rightToAss 
        display: flex
        justify-content: center
        gap: 2rem
        text-align: center
        align-items: center
    &__title
        animation: 1s ease-out .1s leftToAss
        font-weight: 600
        margin-bottom: 2rem
    &__or
        font-weight: 500
        font-size: 2rem
    &__item
        transition: .4s
        &:hover
            transform: translateY(.4rem)
    &__link
        &:link, &:visited
            text-decoration: none   
            font-size: 3rem
            color: black
            display: block
            transition: 1s
            font-weight: 500
        &:hover
            text-decoration: underline
</style>