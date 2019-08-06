<template>
  <div class="home">
    <transition name="fade">
      <PageBackground v-if="!getStep" />
    </transition>
    <Navbar :dark="getStep" />
    <div :class="['home-main', { 'home-main--next' : getStep }]">
      <Claim v-if="!getStep" />
      <SearchInput v-model="searchValue"
                   :dark="getStep"
                   :class="{'home-main__search--dark' : getStep }"
                   @input="handleInput" />
    </div>
    <div class="home__results" v-show="getStep">
      <!-- results here -->
      <ul class="home__result-list">
        <li class="home__result"
            v-for="(result, index) in results"
            :key="index">
          <ResultImage class="home__result-img"
                       :item="result" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PageBackground from '@/components/PageBackground/PageBackground';
import Navbar from '@/components/Navbar/Navbar';
import Claim from '@/components/Claim/Claim';
import SearchInput from '@/components/SearchInput/SearchInput';
import ResultImage from '@/components/ResultImage/ResultImage';

import { mapGetters, mapActions } from 'vuex';

import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'Home',
  components: {
    PageBackground,
    Navbar,
    Claim,
    SearchInput,
    ResultImage
  },
  data () {
    return {
      searchValue : '',
      loading: false,
      results: []
    }
  },
  methods : {
    ...mapActions (['changeStep']),
    handleInput: debounce (function () {
      if (this.searchValue === '') {
        this.changeStep(false);
        } else {
          axios.get(`${API}?q=${this.searchValue}&media_type=image`)
            .then((response) => {
              this.results = response.data.collection.items;
              this.changeStep(true);
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

  body {
    background: $white !important;
  }

  .home {
    &__result-list {
      margin-top: 25px;
    }
    &__results {
      color: $grey-7;
    }
    &__result-img {
      margin: 0 auto;
    }
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

    &__search {
      &--dark {
        margin-top: 18px;
      }
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