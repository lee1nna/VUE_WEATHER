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
          <!-- Math.round() 이 메서드는 소수점 반올림 메서드이다. -->
          <p>{{ Math.round(this.$store.state.COMMON_01.temp) }}&deg;</p>
        </div>
        <div class="weatherIcon">
          <!-- <img src="~/assets/43.png" alt="" /> -->
          <img :src="this.$store.state.COMMON_01.image" alt="" />
        </div>
        <div class="weatherData">
          <div v-for="dataList in this.$store.state.COMMON_01.subData" :key="dataList" class="detailData">
            <p>{{ dataList.title }}</p>
            <p>{{ dataList.value }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="todayWeather">
      <div class="textBox">
        <p>시간대별 날씨 정보</p>
        <p>이번주 날씨 보기</p>
      </div>
      <ul class="timelyWeatherBox">
        <li class="timelyWeather" v-for="(dataList, index) in this.$store.state.COMMON_02.weather" :key="dataList">
          <div class="icon">
            <img :src="imgUrl[index]" alt="" />
          </div>
          <div class="data">
            <p class="time">
              {{ Unix_timestamp(dataList.dt) }}
            </p>
            <p class="currentDegree">{{ Math.round(dataList.temp) }}&deg;</p>
            <div>
              <img src="~/assets/images/drop.png" alt="" />
              <p class="fall">{{ dataList.humidity }}%</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <NavUnderBar />
  </div>
</template>

<script>
  // import axios from 'axios';
  import CityNameBox from './common/CityNameBox.vue';
  import NavUnderBar from './common/NavUnderBar.vue';

  export default {
    components: { CityNameBox, NavUnderBar },
    data() {
      return {
        imgUrl: this.$store.state.COMMON_02.images,
      };
    },
    created() {
      // Store의 Mutations를 실행할 때는, .commit() 메서드를
      // Store의 Actions를 실행할 때는, .dispatch() 메서드를 사용한다.
      this.$store.dispatch('COMMON_01/GET_DATA');
      this.$store.dispatch('COMMON_02/GET_DATA');
    },

    methods: {
      // 타임스탬프로 변환
      Unix_timestamp(dt) {
        var date = new Date(dt * 1000);
        var hour = '0' + date.getHours();
        return hour.substr(-2) + '시';
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main.scss';
  @import '~/scss/mainView.scss';
</style>
