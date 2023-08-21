<script>

</script>

<template>
    <section class="links">
        <div class="links__block">
            <h5 class="title-second links__title">My contacts:</h5>
            <ul class="links__list">
                <li class="links__item">
                    <a href="https://github.com/bobr2306" class="links__link">GitHub</a>
                </li>
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
    &__title
        animation: 1s ease-out .1s leftToAss
        font-weight: 600
        margin-bottom: 1rem
    &__item
        transition: .4s
        &:not(:last-child)
            margin-bottom: 1rem
        &:hover
            transform: translateY(.4rem)
    &__link
        &:link, &:visited
            text-decoration: none
            animation: 1s ease-out .1s rightToAss    
            font-size: 2rem
            color: black
            display: block
            transition: 1s
            font-weight: 500
        &:hover
            text-decoration: underline
</style>