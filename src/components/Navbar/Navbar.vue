<template>
    <div class="navbar-wrapper">
        <Logo />
    </div>
</template>
<script>
import Logo from '@/components/Logo/Logo'

export default {
    name: 'Navbar',
    components: {
        Logo
    }
}
</script>
<style src="./Navbar.scss" lang="scss" scoped />