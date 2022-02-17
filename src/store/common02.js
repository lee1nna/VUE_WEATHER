// timely weather api - store
import axios from 'axios';

export default {
  // namedspaced : 하나의 store에서 모듈화되어 사용될 수 있음을 명시적으로 나타내는 개념
  namespaced: true,
  // state : 실제로 취급해야하는 데이터
  state: {
    timelyWeather: [],
    images: [],
  },
  getters: {},
  mutaions: {
    SET_DATA01(state, payload) {
      state.timelyWeather = payload;
    },
    SET_DATA02(state, payload) {
      state.images = payload;
    },
  },
  actions: {
    // actions부분에선 mutaions처럼 state를 바로 불러올 순 없고,
    // context라는 객체데이터를 가지고 와서, context를 참조하여 데이터를 불러온다.
    // context: state, getters, mutations을 활용할 수 있는 내용이 들어있다.
    // mutations을 불러오기 위해선 context.mutations가 아니라 context.commit을 활용한다.
    // ---------------------------------------------------------------------------------------
    // 객체 구조분해하여 같은 방법으로 불러올 수 있다.
    // searchData({ state, getters, commit }, payload) {},
    // 두 번째 매개변수 자리 (payload): 함수가 실행될 때, 인수로 들어온 특정한 데이터를 payload 자리에 받는다.
    GET_DATA(context) {
      const API_KEY2 = '1a5ef29484ff347e2245cf1814b07c77';
      var lat = 37.5683;
      var lon = 126.9778;

      axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY2}&units=metric`)
        .then((res) => {
          console.log(res.data);

          for (let i = 0; i < 24; i++) {
            context.commit('SET_DATA01', res.data.hourly[i], { root: true });

            var img = res.data.hourly[i].weather[0].icon; // '01d'
            context.commit('SET_DATA02', `http://openweathermap.org/img/wn/${img}@2x.png`, { root: true });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
