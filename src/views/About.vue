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
                    <p class="intro__para intro__para--indent">
                        Billy is currently a junior student at
                        NYU Shanghai. He double majors in Computer Science & Interactive Media Arts.
                        He is a junior web front-end developer, who started doing front-end
                        development
                        work in 2017.
                    </p>
                    <p class="intro__para intro__para--indent">
                        He started coding in freshman year with Processing as the first programming
                        language he learned. He declared major as Computer Science the second
                        semester
                        and started learning programming systematically using Python. Apart from the
                        fundamental computer science courses taken in school, Billy spent much time
                        studying web development in his spare time. His web development skills are
                        mainly acquired through self-studying.
                    </p>
                    <p class="intro__para intro__para--indent">
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
                <template v-else>
                    <tech-stack-item v-for="(item, i) in techStack" :section="item"
                                     :key="item + i"></tech-stack-item>
                </template>
            </article>
        </main>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import TechStackItem from '../components/TechStackItem.vue';

export default {
    name: 'About',
    components: {
        Navigation,
        TechStackItem,
    },
    data() {
        return {
            aboutIsActive: true,
            techStack: [
                {
                    title: 'Programming Languages',
                    items: [
                        {
                            iconList: ['fab', 'js-square'],
                            text: 'JavaScript(Browser and Node.js)',
                        },
                        {
                            iconList: ['fab', 'python'],
                            text: 'Python',
                        },
                    ],
                },
                {
                    title: 'Other Languages',
                    items: [
                        {
                            iconList: ['fab', 'html5'],
                            text: 'HTML',
                        },
                        {
                            iconList: ['fab', 'css3-alt'],
                            text: 'CSS',
                        },
                        {
                            iconList: ['fab', 'sass'],
                            text: 'Sass',
                        },
                    ],
                },
                {
                    title: 'Frameworks',
                    items: [
                        {
                            iconList: ['fab', 'vuejs'],
                            text: 'Vue.js',
                        },
                        {
                            iconList: ['fab', 'node-js'],
                            text: 'Express',
                        },
                        {
                            iconList: ['fab', 'weixin'],
                            text: 'Mini Program',
                        },
                        {
                            text: 'Flask',
                        },
                        {
                            text: 'Django',
                        },
                    ],
                },
                {
                    title: 'Libraries',
                    items: [
                        {
                            iconList: ['fas', 'dollar-sign'],
                            text: 'jQuery',
                        },
                        {
                            iconList: ['fas', 'bold'],
                            text: 'Bootstrap',
                        },
                        {
                            text: 'ElementUI',
                        },
                        {
                            text: 'MDUI',
                        },
                        {
                            text: 'axios',
                        },
                    ],
                },
                {
                    title: 'Databases',
                    items: [
                        {
                            iconList: ['fas', 'database'],
                            text: 'MongoDB',
                        },
                    ],
                },
                {
                    title: 'Tools',
                    items: [
                        {
                            text: 'Webpack',
                        },
                        {
                            text: 'ESLint',
                        },
                        {
                            text: 'Babel',
                        },
                        {
                            text: 'PostCSS',
                        },
                    ],
                },
            ],
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
        user-select: none;
    }

    .title--deactive {
        left: calc(20% + 6em);
        color: $color-disable;
    }

    .intro {
        position: relative;
        padding-top: 2.5em;
    }

    .intro__title {
        color: $light-black;
        font-size: 2em;
        line-height: 2em;
        margin-bottom: 0;
    }

    .intro__para {
        color: $light-black;
        font-size: 1.5em;
        line-height: 1.5em;
        @include fade-in;
    }

    .intro__para-item {
        display: inline-block;
        margin-top: 0.5em;
        margin-left: 1em;
        &:first-child {
            margin-left: 0;
        }
    }

    .intro__para--indent {
        &:before {
            content: '\00a0\00a0';
        }
    }

    .intro__line {
        background-color: $light-black;
        height: 2px;
        width: 100%;
    }

    .intro__link {
        color: $light-black;
        &:hover {
            color: $blue;
            text-decoration: none;
        }
    }
</style>
