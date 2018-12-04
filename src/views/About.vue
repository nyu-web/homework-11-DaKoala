<template>
    <div>
        <navigation></navigation>
        <main class="container container--narrow">
            <span class="title" :class="{'title--deactive': !aboutIsActive}" @click="toggleActive">
                About Billy
            </span>
            <span class="title" :class="{'title--deactive': aboutIsActive}" @click="toggleActive">
                Tech Stack
            </span>
            <article class="intro">
                <template v-if="aboutIsActive">
                    <p class="intro__para">
                        Billy is currently a junior student at
                        NYU Shanghai. He double majors in Computer Science & Interactive Media Arts.
                        He is a junior web front-end developer, who started doing front-end
                        development
                        work in 2017.
                    </p>
                    <p class="intro__para">
                        He started coding in freshman year with Processing as the first programming
                        language he learned. He declared major as Computer Science the second
                        semester
                        and started learning programming systematically using Python. Apart from the
                        fundamental computer science courses taken in school, Billy spent much time
                        studying web development in his spare time. His web development skills are
                        mainly acquired through self-studying.
                    </p>
                    <p class="intro__para">
                        JavaScript is Billy's primary programming language. He is familiar with
                        Javascript, including ES6 and newer syntax. He is also familiar with Sass
                        and
                        some new CSS features such as flexbox and grid. He got started with
                        front-end
                        development using jQuery and Bootstrap. His first professional front-end
                        work
                        was at <a class="intro__link" href="https://en.wikipedia.org/wiki/Vipshop">Vip.com</a>
                        where he became experienced in
                        <a class="intro__link"
                           href="https://walkthechat.com/wechat-mini-programs-simple-introduction/">
                            Wechat Mini Program
                        </a> and Vue.js as an intern front-end engineer. Now Billy mainly works with
                        Vue.js, Node.js and MongoDB. With his Python experience, he is also able to
                        develop web application using frameworks like Flask and Django.
                    </p>
                </template>
            </article>
        </main>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
    name: 'About',
    components: { Navigation },
    data() {
        return {
            aboutIsActive: true,
        };
    },
    methods: {
        toggleActive() {
            this.aboutIsActive = !this.aboutIsActive;
        },
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .title {
        position: absolute;
        font-size: 2.5em;
        color: $blue;
        transition: 0.5s;
        cursor: pointer;
        z-index: 100;
        left: 20%;
    }

    .title--deactive {
        left: calc(20% + 6em);
        color: $color-disable;
    }

    .intro {
        position: relative;
        padding-top: 2.5em;
    }

    .intro__para {
        color: $light-black;
        font-size: 1.5em;
        line-height: 1.5em;
        @include fade-in;
        &:before {
            content: '\00a0\00a0';
        }
    }

    .intro__link {
        color: $light-black;
        &:hover {
            color: $blue;
            text-decoration: none;
        }
    }
</style>
