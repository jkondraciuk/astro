<template>
    <div class="search-wrapper">
        <input :class="['search-wrapper__input', { dark }]"
        type="text"
        placeholder="e.g. Moon"
        @input="handleInput">
    </div>
</template>

<script>
export default {
    name: 'SearchInput',
    props: ['dark'],
    methods: {
        handleInput (e) {
            this.$emit('input', e.target.value);
        }
    }
}
</script>

<style src="./SearchInput.scss" lang="scss" scoped />