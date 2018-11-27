<template>
    <div>
        <navigation></navigation>
        <main class="container container--row">
            <header class="intro">
                <h1 class="intro__name">Yijie "Billy" Zou</h1>
                <p class="intro__title">
                    <font-awesome-icon icon="graduation-cap" />
                    Student major in Computer Science & Interactive Media Arts at NYU
                </p>
                <p class="intro__title">
                    <font-awesome-icon icon="code" />
                    Web front-end developer
                </p>
                <p class="intro__title">
                    <font-awesome-icon icon="gamepad" />
                    Game lover and amateur game developer
                </p>
                <div class="intro__btn-wrapper">
                    <router-link to="/about" class="btn">About me</router-link>
                    <router-link to="/projects" class="btn">Projects</router-link>
                </div>
            </header>
            <img class="photo" src="../assets/img/photo.jpeg" />
        </main>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
    name: 'home',
    components: {
        Navigation,
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .nav {
        display: flex;
    }

    .photo {
        width: 360px;
        height: 480px;
        border-radius: 10px;
        margin-left: 5%;
    }

    .intro {
        width: 360px;
    }

    .intro__name {
        color: $blue;
        font-size: 3rem;
    }

    .intro__title {
        color: $light-black;
        font-size: 1.5rem;
        line-height: 2rem;
        &:before {
            content: '';
        }
    }

    .intro__btn-wrapper {
        margin-top: 50px;
    }
</style>
