<template>
  <div class="about">
    <Navbar class="about__nav" />
    <div class="about__main">
      <h1 class="about__header">About us</h1>
      <h2 class="about__subheader">What we really do</h2>
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
          paragraph: 'lorem'
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
      padding: 25px;
      text-align: center;
      background-color: $white;
      color: $grey-7;
    }
    &__header {
      margin-bottom: 2px;
      font-size: 2.6rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    &__subheader {
      width: 60%;
      margin: 0 auto;
      margin-bottom: 30px;
      padding-bottom: 10px;
      border-bottom: 2px solid $grey-7;
      font-size: 1.6rem;
    }
  }
</style>