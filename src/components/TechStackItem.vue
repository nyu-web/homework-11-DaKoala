<template>
    <section class="tech">
        <h2 class="tech__title">{{section.title}}</h2>
        <div class="tech__line"></div>
        <div class="tech__text">
            <span class="tech__item" v-for="(item, i) in section.items" :key="i">
                <font-awesome-icon :icon="item.iconList || ['fas', 'code']"></font-awesome-icon>
                {{item.text}}
            </span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TechStackItem',
    props: {
        section: Object,
    },
};
</script>

<style lang="scss" scoped>
    @import "../assets/scss/main";

    .tech {
        margin: 1rem 0;
        @include fade-in;
    }

    .tech__title {
        color: $light-black;
        font-size: 2em;
        line-height: 2em;
        margin: 0;
    }

    .tech__text {
        color: $dark-black-grey;
        font-size: 1.5em;
        line-height: 1.5em;
    }

    .tech__item {
        display: inline-block;
        margin-top: 0.5em;
        margin-left: 1em;
        &:first-child {
            margin-left: 0;
        }
    }

    .tech__line {
        background-color: $light-black;
        height: 2px;
        width: 100%;
    }
</style>
