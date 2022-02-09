<template>
  <div class="leftContainer">
    <CityNameBox :city-name="cityName" />
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
          <p>{{ Math.round(temp) }}&deg;</p>
        </div>
        <div class="weatherIcon">
          <img src="~/assets/43.png" alt="" />
        </div>
        <div class="weatherData">
          <div v-for="subDataValue in subData" :key="subDataValue" class="detailData">
            <p>{{ subDataValue.title }}</p>
            <p>{{ subDataValue.value }}</p>
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
  import axios from 'axios';
  import CityNameBox from './common/CityNameBox.vue';
  import NavUnderBar from './common/NavUnderBar.vue';

  export default {
    components: { CityNameBox, NavUnderBar },
    data() {
      return {
        cityName: {},
        totalData: {},
        temp: {},
        humidity: {},
        windSpeed: {},
        subData: [
          {
            title: '날씨',
            value: '',
          },
          {
            title: '습도',
            value: '',
          },
          {
            title: '풍속',
            value: '',
          },
        ],
      };
    },
    created() {
      // Store의 Mutations를 실행할 때는, .commit() 메서드를
      // Store의 Actions를 실행할 때는, .dispatch() 메서드를 사용한다.
      const API_KEY = 'bf55a4cfb052a4396983999d7b9a9e6d';
      var CITY_NAME = 'Seoul';
      // https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric
      // https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${api_key}&units=metric
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`)
        .then((res) => {
          console.log(res);
          this.cityName = res.data.name;
          this.totalData = res.data;
          this.temp = res.data.main.temp;

          this.description = res.data.weather[0].description;
          this.humidity = res.data.main.humidity;
          this.windSpeed = res.data.wind.speed;

          this.subData[0].value = this.description;
          this.subData[1].value = this.humidity + '%';
          this.subData[2].value = Math.round(this.windSpeed) + 'm/s';
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main.scss';
  @import '~/scss/mainView.scss';
</style>
