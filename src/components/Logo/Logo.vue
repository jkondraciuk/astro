<template>
    <div class="logo-wrapper">
        <router-link to="/" class="logo-wrapper__logo" :style="style">Astro</router-link>
    </div>
</template>
<script>
export default {
    name: 'Logo',
    props: ['dark'],
    computed: {
        style () {
            return this.dark === true ? 'color: #27263e; text-transform: uppercase;': null;
        }
    }
}
</script>
<style src="./Logo.scss" lang="scss" scoped />