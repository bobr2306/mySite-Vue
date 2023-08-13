<script>

</script>

<template>
    <div class="footer">
        <img class="footer__logo" src="../assets/icons/ezh.svg" alt="logo">
        <div class="footer__block">
            <ul class="footer__list">
                <li class="footer__item">
                    <a href="#" class="footer__link">About</a>
                </li>
                <li class="footer__item">
                    <a href="#"  class="footer__link">Projects</a>
                </li>
                <li class="footer__item">
                    <a href="#" class="footer__link">Photos</a>
                </li>
                <li class="footer__item">
                    <a href="https://github.com/bobr2306" class="footer__link">GitHub</a>
                </li>
                <li class="footer__item">
                    <a href="https://t.me/Elona_muska" class="footer__link">Telegram</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="sass">
    .footer
        background-color: #d9d9d9
        padding: 2rem
        &__logo
            margin: 0 auto
            display: block
            width: 15%
            margin-bottom: 2rem
        &__block
            text-align: center
        &__list
            list-style: none
            display: flex
            justify-content: center
            gap: 5rem
        &__link
            &:link, &:visited
                text-decoration: none
                font-size: 1.6rem
                color: black
                display: inline-block
                transition: .4s
            &:hover
                transform: skewY(-5deg)
                text-decoration: underline
                font-weight: 700
                

</style>