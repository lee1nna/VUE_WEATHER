<template>
  <div class="wrap">
    <Map class="map" />
    <div class="container">
      <MainView />
      <SubView />
    </div>
  </div>
</template>

<script>
  import MainView from '~/components/MainView.vue';
  import SubView from '../components/SubView.vue';
  import Map from '../components/Map.vue';

  export default { components: { MainView, SubView, Map } };
</script>

<style lang="scss" scoped>
  @import '~/scss/main.scss';
  // 공통 코드이기 때문에 어떻게 클린하게 작성할 수 있을지 고민해보자.
  .wrap {
    @include center;
    width: 100%;
    height: 100vh;
    font-size: 16px;
    position: relative;

    .map {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .container {
      @include center-sb;
      width: 55%;
      height: 90%;
      max-width: 1920px;
      max-height: 1354px;
    }
  }
</style>
