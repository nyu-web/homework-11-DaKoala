<template>
    <div>
        <navigation></navigation>
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
    .nav {
        display: flex;
    }
</style>
