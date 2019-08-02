<template>
  <div class="home">
    <transition name="fade">
      <PageBackground v-if="getStep === 0" />
    </transition>
    <Navbar />
    <div :class="['home-main', { 'home-main--next' : getStep === 1 }]">
      <Claim v-if="getStep === 0" />
      <SearchInput v-model="searchValue"
                   :dark="getStep === 1"
                   @input="handleInput" />
    </div>
  </div>
</template>

<script>
import PageBackground from '@/components/PageBackground/PageBackground';
import Navbar from '@/components/Navbar/Navbar';
import Claim from '@/components/Claim/Claim';
import SearchInput from '@/components/SearchInput/SearchInput';

import { mapGetters } from 'vuex';

import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'Home',
  components: {
    PageBackground,
    Navbar,
    Claim,
    SearchInput
  },
  data () {
    return {
      searchValue : '',
      step: 0,
      loading: false,
      results: []
    }
  },
  methods : {
    handleInput: debounce (function () {
      if (this.searchValue === '') {
          this.step = 0;
        } else {
          axios.get(`${API}?q=${this.searchValue}&media_type=image`)
            .then((response) => {
              this.results = response.data.collection.items;
              this.step = 1;
            })
            .catch((error) => {
              console.log(error);
            })
        }
    }, 800)
  },
  computed: {
    ...mapGetters (['getStep'])
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

    &--next {
      top: 10%;
    }
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