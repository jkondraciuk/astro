<template>
  <div class="home">
    <PageBackground />
    <Navbar />
    <div class="home-main">
      <Claim />
      <SearchInput />
    </div>
  </div>
</template>

<script>
import PageBackground from '@/components/PageBackground/PageBackground'
import Navbar from '@/components/Navbar/Navbar'
import Claim from '@/components/Claim/Claim'
import SearchInput from '@/components/SearchInput/SearchInput'

export default {
  name: 'home',
  components: {
    PageBackground,
    Navbar,
    Claim,
    SearchInput
  }
};
</script>

<style lang="scss" scoped>
  .home-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>