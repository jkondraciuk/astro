<template>
  <div class="home">
    <PageBackground />
    <Navbar />
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