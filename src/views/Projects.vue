<script>

</script>

<template>
    <section class="projects">
        <div class="projects__block">
            <h5 class="projects__title title-second">My projects:</h5>
            <ul class="projects__list">
                <li class="projects__item">
                    <a href="https://github.com/bobr2306/STR" class="projects__link">
                       Сайт для учителя информатики
                    </a>
                </li>
                <li class="projects__item">
                    <a href="https://app.netlify.com/sites/pelmeni/overview" class="projects__link">
                       Мини-сайт по пельменям
                    </a>
                </li>
                <li class="projects__item">
                    <a href="https://github.com/ArtemkaSavinov/SPG-band" class="projects__link">
                       Сайт для музыкальной группы
                    </a>
                </li>
            </ul>
        </div>
    </section>
    <section class="soon">
        <div class="soon__block">
            <div class="soon__info">
                <h5 class="title-second mb-2">Coming soon...</h5>
                <p class="soon__text">Now I am doind to-do-app :)</p>
            </div>
        </div>
    </section>
</template>

<style lang="sass">
.projects
    background: url(../assets/projects-bg.jpg) center / cover no-repeat
    height: 100vh
    position: relative
    &__block
        position: absolute
        top: 30%
        left: 50%
        transform: translate(-50%, -50%)
        width: 70%
        text-align: center
    &__title
        margin-bottom: 2rem
        color: white
        font-weight: 600
        animation: 1s ease-out .1s leftToAss
    &__list
        list-style: none
        animation: 1s ease-out .1s rightToAss
    &__item
        &:not(:last-child)
            margin-bottom: 1rem
    &__link
        &:link, &:visited
            text-decoration: none
            font-weight: 600
            color: white
            display: block
            transition: .5s
            font-size: 2rem
            font-weight: 300
            letter-spacing: .2rem
            text-transform: lowercase
        &:hover
            transform: translateX(1rem)
            text-decoration: underline
.soon
    background: url(../assets/coming-bg.jpg) center / cover no-repeat
    border-bottom: 1px solid gray
    padding: 4rem
    height: 100vh
    position: relative
    &__img
        width: 30%
        opacity: 0
    &__block
        display: flex
        justify-content: center
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
        align-items: center
</style>