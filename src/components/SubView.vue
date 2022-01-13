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
        <div class="detail">
          <div class="title">
            <p>오염물질</p>
          </div>
          <div v-for="airCondition in airConditions" :key="airCondition" class="data">
            <div class="dataName">
              <p></p>
              <p>{{ airCondition.air }}</p>
            </div>
            <div class="dataValue">
              <p>
                <span>{{ airCondition.value }}</span> &#181;g/m&#179;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="todayWeather">
      <div class="textBox">
        <p>시간대별 대기 정보</p>
        <p>이번주 전체 보기</p>
      </div>
      <div class="timelyWeatherBox">
        <div class="timelyWeather">
          <div class="data">
            <p class="time">2pm</p>
            <p class="currentData">매우나쁨</p>
            <div>
              <img src="~/assets/dust.png" alt="" />
              <p class="fall">15 <span>&#181;g/m&#179;</span></p>
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
    components: { CityNameBox, NavUnderBar },
    data() {
      return {
        airConditions: [
          {
            air: '초미세먼지',
            value: 65,
          },
          {
            air: '미세먼지',
            value: 74,
          },
          {
            air: '오존',
            value: 16,
          },
          {
            air: '이산화질소',
            value: 103.4,
          },
          {
            air: '이산화황',
            value: 10.5,
          },
          {
            air: '일산화탄소',
            value: 916,
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main.scss';
  @import '~/scss/subView.scss';
</style>
