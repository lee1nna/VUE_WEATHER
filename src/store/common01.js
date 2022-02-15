// city weather api - store
import axios from 'axios';
// import { fetchCityWeather } from '../api/fetchCityWeather';

export default {
  // namedspaced : 하나의 store에서 모듈화되어 사용될 수 있음을 명시적으로 나타내는 개념
  namespaced: true,
  // state : 실제로 취급해야하는 데이터
  state: {
    // totalData: {},
    cityName: {},
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
    // timeleyWeather: [],
    images: [],
  },
  // getters : 계산된 상태를 만들어내는 속성, computed와 유사하다.
  // 실제 데이터를 계산된 형태로 바꾸어 새롭게 활용할 수 있다.
  getters: {},
  // mutations, actions : methods와 유사하다.
  // 1. mutations: 변이 - 우리가 관리하는 데이터를 변경시켜줄 수 있다.
  // 즉 state 안의 데이터는 오로지 mutaions에서만 데이터를 변경할 수 있다.
  mutations: {
    // 예제
    // resetData(state) {
    // 초기화
    // state.data = [];
    // },
    SET_DATA01(state, payload) {
      state.cityName = payload;
    },
    SET_DATA02(state, payload) {
      state.temp = payload;
    },
    SET_DATA03(state, payload) {
      state.humidity = payload;
    },
  },
  // 2. actions :특정한 데이터를 직접적으로 수정하는 것이 허용되지 않는다.
  // 위 사항이 가장 주의해야 할 사항이고, 또한 비동기로 동작한다는 점에도 유의해야한다.
  // async, await
  actions: {
    // 예제
    // actions부분에선 mutaions처럼 state를 바로 불러올 순 없고,
    // context라는 객체데이터를 가지고 와서, context를 참조하여 데이터를 불러온다.
    // context: state, getters, mutations을 활용할 수 있는 내용이 들어있다.
    // mutations을 불러오기 위해선 context.mutations가 아니라 context.commit을 활용한다.
    // searchData({ context }) {
    //   context.state, context.getters, context.commit;
    // },
    // 객체 구조분해하여 같은 방법으로 불러올 수 있다.
    // searchData({ state, getters, commit }, payload) {},
    // 두 번째 매개변수 자리 (payload): 함수가 실행될 때, 인수로 들어온 특정한 데이터를 payload 자리에 받는다.

    GET_DATA(context) {
      // context : 매개변수 전달
      const API_KEY = 'bf55a4cfb052a4396983999d7b9a9e6d';
      var CITY_NAME = 'Seoul';
      // https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric
      // https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${api_key}&units=metric
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`)
        .then((res) => {
          console.log(res.data);
          // mutations SET_DATA01에 res.data(인자)를 넘김
          context.commit('SET_DATA01', res.data.name);
          context.commit('SET_DATA02', res.data.main.temp);
          context.commit('SET_DATA03', res.data.main.humidity);

          // this.state.cityName = res.data.name;
          // this.state.totalData = res.data;
          // this.state.temp = res.data.main.temp;
          // this.state.time = res.data.dt;

          // this.state.description = res.data.weather[0].description;
          // this.state.humidity = res.data.main.humidity;
          // this.state.windSpeed = res.data.wind.speed;

          // this.state.subData[0].value = this.description;
          // this.state.subData[1].value = this.humidity + '%';
          // this.state.subData[2].value = Math.round(this.windSpeed) + 'm/s';
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};