<template>
    <div class="search-wrapper">
        <input :class="['search-wrapper__input', { dark }]"
        type="text"
        placeholder="e.g. Moon">
    </div>
</template>

<script>
export default {
    name: 'SearchInput',
    props: ['dark']
}
</script>

<style src="./SearchInput.scss" lang="scss" scoped />