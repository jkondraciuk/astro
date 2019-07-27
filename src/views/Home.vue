<template>
  <div class="home">
    <transition name="fade">
      <PageBackground v-if="step === 0" />
    </transition>
    <Navbar />
    <div class="home-main">
      <Claim v-if="step === 0" />
      <SearchInput :dark="step === 1" />
    </div>
  </div>
</template>

<script>
import PageBackground from '@/components/PageBackground/PageBackground';
import Navbar from '@/components/Navbar/Navbar';
import Claim from '@/components/Claim/Claim';
import SearchInput from '@/components/SearchInput/SearchInput';

export default {
  name: 'home',
  components: {
    PageBackground,
    Navbar,
    Claim,
    SearchInput
  },
  data () {
    return {
      step: 0
    }
  }
};
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .home-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-bottom: 15px;
  }

  @include res(md) {
    .home-main {
      padding-bottom: 20px;
    }
  }

  @include res(lg) {
    .home-main {
      padding-bottom: 23px;
    }
  }

  @include res(xl) {
    .home-main {
      padding-bottom: 28px;
    }
  }
</style>