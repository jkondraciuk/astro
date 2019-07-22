<template>
    <div class="navbar-wrapper">
        <Logo />
        <PageMenu />
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
    }
}
</script>
<style src="./Navbar.scss" lang="scss" scoped />