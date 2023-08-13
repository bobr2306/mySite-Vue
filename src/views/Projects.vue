<script>

</script>

<template>
    <section class="projects">
        <div class="projects__block">
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
                        Сайт для школьной музыкальной группы
                    </a>
                </li>
            </ul>
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
        top: 50%
        left: 40%
        transform: translate(-50%, -50%)
        background: rgba(#d9d9d9, 0.7)
        padding: 3rem
        border-radius: 1rem
    &__list
        list-style: none
    &__item
        text-align: center
        &:not(:last-child)
            margin-bottom: 1rem
    &__link
        &:link, &:visited
            text-decoration: none
            font-size: 2rem
            font-weight: 600
            letter-spacing: .4rem
            color: black
            display: block
            transition: .5s
        &:hover
            transform: scale(1.03)
            letter-spacing: .6rem
            text-decoration: underline
</style>