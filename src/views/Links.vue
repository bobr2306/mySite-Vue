<script>

</script>

<template>
    <section class="links">
        <div class="links__block">
            <h5 class="title-second mb-2">My contacts:</h5>
            <ul class="links__list">
                <li class="links__item">
                    <a href="https://github.com/bobr2306" class="links__link">- GitHub</a>
                </li>
                <li class="links__item">
                    <a href="https://t.me/Elona_muska" class="links__link">- Telegram</a>
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
        gap: 4rem
        align-items: center
        text-shadow: 0 0 20px black
        background: rgba(#d9d9d9, 0.7)
        padding: 3rem
        border-radius: 1rem
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
    &__list
        list-style: none
    &__link
            &:link, &:visited
                text-decoration: none
                font-size: 1.6rem
                color: black
                display: block
                transition: 1s
                font-weight: 500
            &:hover
                text-decoration: underline
</style>