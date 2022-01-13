<template>
  <nav>
    <i class="fas fa-home"></i>
    <i class="fas fa-search-location"></i>
    <i class="fas fa-chart-line"></i>
    <i class="fas fa-cog"></i>
  </nav>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import '~/scss/main.scss';

  nav {
    @include center-sb;
    width: calc(100% - 100px);
    height: 10%;
    padding: 0 50px;

    i {
      color: rgb(255, 255, 255);
      font-size: 1.15rem;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        color: #799ed0;
      }
    }
  }
</style>
