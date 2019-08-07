<template>
    <div class="result-wrapper" :style="style"></div>
</template>

<script>
export default {
    name: 'ResultImage',
    props: ['item'],
    computed: {
        photo () {
            return this.item.links[0].href;
        },
        style () {
            return `background-image: url(${this.photo})`;
        }
    }
}
</script>

<style src="./ResultImage.scss" lang="scss" scoped />