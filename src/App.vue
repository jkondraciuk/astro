<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  /* Fonts */
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    font-size: 62.5%;
    font-weight: 300;
  }

  body {
    font-size: 1.6rem;
  }
</style>