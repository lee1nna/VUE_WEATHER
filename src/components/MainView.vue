<template>
  <div class="leftContainer">
    <CityNameBox />
    <div id="contentsBox">
      <div class="buttonBox">
        <div class="buttonBackground">
          <button class="forecast">Forecast</button>
          <button class="airquality">Air Quality</button>
        </div>
      </div>
      <div class="weatherBox">
        <div class="weatherDegree">
          <p>10&deg;</p>
        </div>
        <div class="weatherIcon">
          <img src="~/assets/43.png" alt="" />
        </div>
        <div class="weatherData">
          <div v-for="weatherValue in weather" :key="weatherValue" class="detailData">
            <p>{{ weatherValue.title }}</p>
            <p>{{ weatherValue.value }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="todayWeather">
      <div class="textBox">
        <p>시간대별 날씨 정보</p>
        <p>이번주 날씨 보기</p>
      </div>
      <div class="timelyWeatherBox">
        <div class="timelyWeather">
          <div class="icon">
            <img src="~/assets/29.png" alt="" />
          </div>
          <div class="data">
            <p class="time">2pm</p>
            <p class="currentDegree">32&deg;</p>
            <div>
              <img src="~/assets/drop.png" alt="" />
              <p class="fall">15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavUnderBar />
  </div>
</template>

<script>
  import CityNameBox from './common/CityNameBox.vue';
  import NavUnderBar from './common/NavUnderBar.vue';

  export default {
    data() {
      return {
        weather: [
          {
            title: '습도',
            value: '88%',
          },
          {
            title: '풍속',
            value: '10m/s',
          },
          {
            title: '풍향',
            value: 'WS',
          },
        ],
      };
    },
    components: { CityNameBox, NavUnderBar },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main.scss';
  @import '~/scss/mainView.scss';
</style>
