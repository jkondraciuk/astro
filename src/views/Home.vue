<template>
  <div class="home">
    <h1>This is a home page</h1>
    <PageBackground />
  </div>
</template>

<script>
import PageBackground from '@/components/PageBackground/PageBackground'

export default {
  name: 'home',
  components: {
    PageBackground
  }
}
</script>