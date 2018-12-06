<template>
    <nav class="nav">
        <router-link to="/" class="nav__item" :class="{'nav__item--active': path.length === 1}">
            Home
        </router-link>
        <router-link to="/about" class="nav__item"
                     :class="{'nav__item--active': path.indexOf('about') > -1}">
            About
        </router-link>
        <router-link to="/projects" class="nav__item"
                     :class="{'nav__item--active': path.indexOf('projects') > -1}">
            Projects
        </router-link>
        <router-link to="/blog" class="nav__item"
                     :class="{'nav__item--active': path.indexOf('blog') > -1}">
            Blog
        </router-link>
        <router-link to="/contact" class="nav__item"
                     :class="{'nav__item--active': path.indexOf('contact') > -1}">
            Contact
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            path: this.$route.path,
        };
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .nav {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100px;
        background: $dark-black;
    }
    .nav__item {
        font-family: 'Roboto Condensed', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 2em;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        color: #fff;

        &:hover {
            color: $dark-grey;
        }
    }
    .nav__item--active {
        background: $light-black;

        &:hover {
            color: #fff;
        }
    }
</style>
