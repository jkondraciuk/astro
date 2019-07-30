<template>
  <div class="about">
    <Navbar class="about__nav" />
    <div class="about__main">
      <h1>This is an about page</h1>
      <h2>This is a subheader</h2>
      <div class="about__infos">
        <InfoBox v-for="(content, index) in infoContent" :key="index" :content="content" />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar/Navbar';
import InfoBox from '@/components/InfoBox/InfoBox';

export default {
  name: 'About',
  components: {
    Navbar,
    InfoBox
  },
  data () {
    return {
      infoContent: [
        {
          header: 'This is a header',
          paragraph: '...and this is a paragraph'
        },
        {
          header: 'This is a header',
          paragraph: '...and this is a paragraph'
        },
        {
          header: 'This is a header',
          paragraph: '...and this is a paragraph'
        },
        {
          header: 'This is a header',
          paragraph: '...and this is a paragraph'
        },
        {
          header: 'This is a header',
          paragraph: '...and this is a paragraph'
        },
        {
          header: 'This is a header',
          paragraph: '...and this is a paragraph'
        },
      ]
    }
  }
}
</script>
<style lang="scss">
  body {
    background-image: url('../assets/img/about_background.jpg');
    background-size: cover;
    background-attachment: fixed;
  }

  .about {
    &__nav {
      position: fixed;
      top: 0;
      left: 0;
    }
    &__main {
      width: 80%;
      margin: 0 auto;
      margin-top: 70vh;
      background-color: $white;
      color: $grey-7;
    }
  }
</style>