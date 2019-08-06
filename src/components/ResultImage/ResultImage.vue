<template>
    <div class="result-wrapper" :style="style"></div>
</template>

<script>
export default {
    name: 'ResultImage',
    props: ['image'],
    computed: {
        style () {
            return `background-image: (${image})`;
        }
    }
}
</script>

<style src="./ResultImage.scss" lang="scss" scoped />