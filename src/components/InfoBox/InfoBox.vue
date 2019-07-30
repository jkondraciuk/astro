<template>
    <div class="info-wrapper">
        <h3 class="info-wrapper__header">{{ content.header }}</h3>
        <p class="info-wrapper__paragraph">{{ content.paragraph }}</p>
    </div>
</template>
<script>
export default {
    name: 'InfoBox',
    props: ['content']
}
</script>
<style src="./InfoBox.scss" lang="scss" scoped />