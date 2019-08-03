<template>
  <div class="about">
    <div class="about__bg"></div>
    <Navbar class="about__nav" />
    <div class="about__main">
      <h1 class="about__header">About us</h1>
      <h2 class="about__subheader">What we really do</h2>
      <div class="about__infos">
        <InfoBox v-for="(content, index) in infoContent"
                 :key="index"
                 :content="content"
                 class="about__info" />
        <PageFooter />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar/Navbar';
import InfoBox from '@/components/InfoBox/InfoBox';
import PageFooter from '@/components/PageFooter/PageFooter';

export default {
  name: 'About',
  components: {
    Navbar,
    InfoBox,
    PageFooter
  },
  data () {
    return {
      infoContent: [
        {
          header: 'This is a header',
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, libero et pellentesque commodo, diam ligula pharetra diam, quis biben'
        },
        {
          header: 'This is second one',
          paragraph: 'Donec a sapien massa. Cras vehicula efficitur lorem vitae ornare. Nunc ut libero id orci tristique venenatis ut vitae turpis. Pellentesque aliquam'
        },
        {
          header: 'The third one',
          paragraph: 'Vivamus rutrum interdum mauris, vel cursus lectus viverra vel. Mauris dapibus id mauris vel hendrerit. Maecenas euismod est'
        },
        {
          header: 'And another one',
          paragraph: 'Orci tristique venenatis ut vitae turpis. Pellentesque aliquam risus eros, eget sagittis dui cursus sit amet. Sed gravida'
        },
        {
          header: 'Hello I am a header',
          paragraph: 'Aliquam et lacinia orci, ut sagittis mauris. In hac habitasse platea dictumst. Morbi vitae accumsan quam. Nulla viverra vestibulum magna, non volutpat nul'
        },
        {
          header: 'Header here, header there..',
          paragraph: 'Donec a sapien massa. Cras vehicula efficitur lorem vitae ornare. Nunc ut libero id orci tristique venenatis ut vitae turpis'
        },
      ]
    }
  }
}
</script>
<style lang="scss">
  .about {
    &__bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: url('../assets/img/about_background.jpg');
      background-size: cover;
      background-attachment: fixed;
    }
    &__nav {
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,.5);
      transition: .4s;
    }
    &__main {
      position: relative;
      width: 80%;
      margin: 0 auto;
      margin-top: 70vh;
      padding: 25px;
      text-align: center;
      background-color: $white;
      color: $grey-7;
      &::after {
      content: '';
      position: absolute;
      top: -10px;
      left: 0;
      bottom: 0;
      display: block;
      width: 100%;
      background-color: darken($grey-7, 5%);
      z-index: -9999;
      transform: translate(-12px, 0);
    }
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
    &__infos {
      display: flex;
      flex-direction: column;
    }
    &__info {
      margin-bottom: 25px;
    }
  }

  @include res(sm) {
    .about {
      &__main {
        max-width: 940px;
      }
      &__infos {
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
      }
      &__info {
        width: 300px;
      }
    }
  }

  @include res(md) {
    .about {
      &__nav {
        background-color: transparent;
      }
      &__header {
        padding: 10px;
        font-size: 3rem;
      }
      &__subheader {
        margin-bottom: 35px;
      }
      &__infos {
        justify-content: space-around;
      }
      &__info {
        width: 45%;
        margin-bottom: 30px;
      }
    }
  }

  @include res(lg) {
    .about {
      &__header {
        padding: 15px;
        font-size: 3.4rem;
      }
      &__subheader {
        margin-bottom: 40px;
      }
    }
  }

  @include res(xl) {
    .about {
      &__subheader {
        font-size: 2rem;
      }
    }
  }
</style>