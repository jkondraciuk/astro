<template>
    <div class="page-menu-wrapper">
        <ul class="page-menu-wrapper__list">
            <li class="page-menu-wrapper__item">
                <router-link to="/about" class="page-menu-wrapper__link">About</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'PageMenu'
}
</script>
<style src="./PageMenu.scss" lang="scss" scoped />