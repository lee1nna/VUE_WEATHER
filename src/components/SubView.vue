<template>
  <div class="rightContainer">
    <CityNameBox />
    <div id="contentsBox">
      <div class="buttonBox">
        <div class="buttonBackground">
          <button class="forecast">Forecast</button>
          <button class="airquality">Air Quality</button>
        </div>
      </div>
      <div class="weatherBox">
        <div class="airCondition">
          <p>매우 나쁨</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CityNameBox from './common/CityNameBox.vue';
  export default { components: { CityNameBox } };
</script>

<style lang="scss" scoped>
  @import '~/scss/main.scss';
  @import '~/scss/subView.scss';
</style>
