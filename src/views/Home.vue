<template>
  <div class="home">
    <PageBackground />
    <Navbar />
    <Claim />
  </div>
</template>

<script>
import PageBackground from '@/components/PageBackground/PageBackground'
import Navbar from '@/components/Navbar/Navbar'
import Claim from '@/components/Claim/Claim'

export default {
  name: 'home',
  components: {
    PageBackground,
    Navbar,
    Claim
  }
};
</script>