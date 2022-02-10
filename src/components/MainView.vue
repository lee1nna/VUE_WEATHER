<template>
  <div class="leftContainer">
    <CityNameBox :city-name="cityName" />
    <div id="contentsBox">
      <div class="buttonBox">
        <div class="buttonBackground">
          <button class="forecast">
            Forecast
          </button>
          <button class="airquality">
            Air Quality
          </button>
        </div>
      </div>
      <div class="weatherBox">
        <div class="weatherDegree">
          <!-- Math.round() 이 메서드는 소수점 반올림 메서드이다. -->
          <p>{{ Math.round(temp) }}&deg;</p>
        </div>
        <div class="weatherIcon">
          <!-- <img src="~/assets/43.png" alt="" /> -->
          <img
            :src="images[0]"
            alt="" />
        </div>
        <div class="weatherData">
          <div
            v-for="subDataValue in subData"
            :key="subDataValue"
            class="detailData">
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
      <ul class="timelyWeatherBox">
        <li
          class="timelyWeather"
          v-for="(weather, index) in timeleyWeather"
          :key="index">
          <div class="icon">
            <img
              :src="images[index]"
              alt="MainWeatherIcon" />
          </div>
          <div class="data">
            <p class="time">
              {{ Unix_timestamp(weather.dt) }}
            </p>
            <p class="currentDegree">
              {{ Math.round(weather.temp) }}&deg;
            </p>
            <div>
              <img
                src="~/assets/drop.png"
                alt="" />
              <p class="fall">
                {{ weather.humidity }}%
              </p>
            </div>
          </div>
        </li>
      </ul>
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
        time: {},
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
        timeleyWeather: [],
        images: [],
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
          this.time = res.data.dt;

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

      const API_KEY2 = '1a5ef29484ff347e2245cf1814b07c77';
      var lat = 37.5683;
      var lon = 126.9778;

      axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY2}&units=metric`)
        .then((response) => {
          console.log(response);
          for (let i = 0; i < 24; i++) {
            this.timeleyWeather[i] = response.data.hourly[i];

            var img = response.data.hourly[i].weather[0].icon; // '01d'
            this.images[i] = `http://openweathermap.org/img/wn/${img}@2x.png`;

            if (img == '01d') {
              this.images[i] = 'src/assets/26.png';
            }
            if (img == '01n') {
              this.images[i] = 'src/assets/10.png';
            }
            if (img == '02d') {
              this.images[i] = 'src/assets/27.png';
            }
            if (img == '02n') {
              this.images[i] = 'src/assets/31.png';
            }
            if (img == '03d') {
              this.images[i] = 'src/assets/33.png';
            }
            if (img == '03n') {
              this.images[i] = 'src/assets/32.png';
            }
            if (img == '04d') {
              this.images[i] = 'src/assets/35.png';
            }
            if (img == '04n') {
              this.images[i] = 'src/assets/35.png';
            }
            if (img == '09d') {
              this.images[i] = 'src/assets/5.png';
            }
            if (img == '09n') {
              this.images[i] = 'src/assets/5.png';
            }
            if (img == '10d') {
              this.images[i] = 'src/assets/8.png';
            }
            if (img == '10n') {
              this.images[i] = 'src/assets/1.png';
            }
            if (img == '11d') {
              this.images[i] = 'src/assets/17.png';
            }
            if (img == '11n') {
              this.images[i] = 'src/assets/17.png';
            }
            if (img == '13d') {
              this.images[i] = 'src/assets/18.png';
            }
            if (img == '13n') {
              this.images[i] = 'src/assets/18.png';
            }
            if (img == '50d') {
              this.images[i] = 'src/assets/6.png';
            }
            if (img == '50n') {
              this.images[i] = 'src/assets/9.png';
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      // 타임스탬프로 변환
      Unix_timestamp(t) {
        var date = new Date(t * 1000);
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
