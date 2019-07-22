<template>
  <div class="home">
    <PageBackground />
    <Navbar />
    <h1>This is a home page</h1>
  </div>
</template>

<script>
import PageBackground from '@/components/PageBackground/PageBackground'
import Navbar from '@/components/Navbar/Navbar'

export default {
  name: 'home',
  components: {
    PageBackground,
    Navbar
  }
};
</script>