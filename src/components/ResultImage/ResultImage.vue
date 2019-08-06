<template>
    <div class="result-wrapper" :style="style"></div>
</template>

<script>
export default {
    name: 'ResultImage',
    props: ['item'],
    data () {
        return {
            photo: this.item.links[0].href,
            title: this.item.data[0].title
        }
    },
    computed: {
        style () {
            return `background-image: url(${this.photo})`;
        }
    }
}
</script>

<style src="./ResultImage.scss" lang="scss" scoped />