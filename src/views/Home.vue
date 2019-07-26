<template>
  <div class="home">
    <PageBackground />
    <Navbar />
    <Claim />
    <SearchInput />
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