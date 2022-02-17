// timely weather api - store
import axios from 'axios';

export default {
  // namedspaced : 하나의 store에서 모듈화되어 사용될 수 있음을 명시적으로 나타내는 개념
  namespaced: true,
  // state : 실제로 취급해야하는 데이터
  state: {
    weather: [],
    images: [],
  },
  getters: {},
  mutations: {
    SET_DATA03(state, payload) {
      for (let i = 0; i < 24; i++) {
        state.weather[i] = payload[i];
      }
    },
    SET_DATA04(state, payload) {
      let img = [payload];
      state.images = [img];
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
          // console.log(res.data.hourly);
          context.commit('COMMON_02/SET_DATA03', res.data.hourly, { root: true });

          for (let i = 0; i < 24; i++) {
            var img = res.data.hourly[i].weather[0].icon; // '01d'
            // context.commit('COMMON_02/SET_DATA04', `http://openweathermap.org/img/wn/${img}@2x.png`, { root: true });

            if (img == '01d') {
              context.commit('SET_DATA04', 'src/assets/26.png');
            }
            if (img == '01n') {
              context.commit('SET_DATA04', 'src/assets/10.png');
            }
            if (img == '04d') {
              context.commit('SET_DATA04', 'src/assets/27.png');
            }
            if (img == '04n') {
              context.commit('SET_DATA04', 'src/assets/31.png');
            }
            if (img == '03d') {
              context.commit('SET_DATA04', 'src/assets/33.png');
            }
            if (img == '03n') {
              context.commit('SET_DATA04', 'src/assets/32.png');
            }
            if (img == '04d') {
              context.commit('SET_DATA04', 'src/assets/35.png');
            }
            if (img == '04n') {
              context.commit('SET_DATA04', 'src/assets/35.png');
            }
            if (img == '09d') {
              context.commit('SET_DATA04', 'src/assets/5.png');
            }
            if (img == '09n') {
              context.commit('SET_DATA04', 'src/assets/5.png');
            }
            if (img == '10d') {
              context.commit('SET_DATA04', 'src/assets/8.png');
            }
            if (img == '10n') {
              context.commit('SET_DATA04', 'src/assets/1.png');
            }
            if (img == '11d') {
              context.commit('SET_DATA04', 'src/assets/17.png');
            }
            if (img == '11n') {
              context.commit('SET_DATA04', 'src/assets/17.png');
            }
            if (img == '13d') {
              context.commit('SET_DATA04', 'src/assets/18.png');
            }
            if (img == '13n') {
              context.commit('SET_DATA04', 'src/assets/18.png');
            }
            if (img == '50d') {
              context.commit('SET_DATA04', 'src/assets/6.png');
            }
            if (img == '50n') {
              context.commit('SET_DATA04', 'src/assets/9.png');
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
