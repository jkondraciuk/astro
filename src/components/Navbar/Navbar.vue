<template>
    <div class="navbar-wrapper">
        <Logo :dark="dark" />
        <PageMenu v-show="!dark" />
    </div>
</template>
<script>
import Logo from '@/components/Logo/Logo'
import PageMenu from '@/components/PageMenu/PageMenu'

export default {
    name: 'Navbar',
    components: {
        Logo,
        PageMenu
    },
    props: ['dark']
}
</script>
<style src="./Navbar.scss" lang="scss" scoped />