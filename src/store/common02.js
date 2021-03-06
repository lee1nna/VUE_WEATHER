// timely weather api - store
import axios from 'axios';

const SET_DATA02 = 'SET_DATA02';
const exceptImg = {
  13: 18,
};
const changedCityDataHandle = (context) => {
  // context : 매개변수 전달
  const API_KEY2 = '1a5ef29484ff347e2245cf1814b07c77';
  // console.log('changedData', context.state.changedData);
  let lat = context.state.changedData.lat;
  let lon = context.state.changedData.lon;

  axios
    .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY2}&units=metric`)
    .then((res) => {
      // console.log(res.data);
      // console.log(res.data.hourly);
      context.commit('COMMON_02/SET_DATA01', res.data.hourly, { root: true });

      for (let i = 0; i < 24; i++) {
        let imgIcon = res.data.hourly[i].weather[0].icon; // '01d'
        // context.commit('COMMON_02/SET_DATA04', `http://openweathermap.org/img/wn/${img}@2x.png`, { root: true });

        Object.keys(exceptImg).map((key) => {
          const value = exceptImg[key];
          if (typeof key === 'number') key = String(key);
          if (typeof imgIcon === 'number') imgIcon = String(imgIcon);
          if (imgIcon && imgIcon.includes(key)) imgIcon = value;
        });

        context.commit(SET_DATA02, `src/assets/images/${imgIcon}.png`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export default {
  // namedspaced : 하나의 store에서 모듈화되어 사용될 수 있음을 명시적으로 나타내는 개념
  namespaced: true,
  // state : 실제로 취급해야하는 데이터
  state: {
    weather: [],
    images: [],
    changedData: {
      lat: '',
      lon: '',
    },
  },
  getters: {},
  mutations: {
    SET_DATA01(state, payload) {
      for (let i = 0; i < 24; i++) {
        state.weather[i] = payload[i];
      }
    },
    SET_DATA02(state, payload) {
      state.images.push(payload);
    },

    SET_CHANGEDATA(state, payload) {
      state.changedData.lat = payload.Ma;
      state.changedData.lon = payload.La;
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
          // console.log(res.data);
          // console.log(res.data.hourly);
          context.commit('COMMON_02/SET_DATA01', res.data.hourly, { root: true });

          for (let i = 0; i < 24; i++) {
            let imgIcon = res.data.hourly[i].weather[0].icon; // '01d'
            // context.commit('COMMON_02/SET_DATA04', `http://openweathermap.org/img/wn/${img}@2x.png`, { root: true });

            Object.keys(exceptImg).map((key) => {
              const value = exceptImg[key];
              if (typeof key === 'number') key = String(key);
              if (typeof imgIcon === 'number') imgIcon = String(imgIcon);
              if (imgIcon && imgIcon.includes(key)) imgIcon = value;
            });

            context.commit(SET_DATA02, `src/assets/images/${imgIcon}.png`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    SET_CHANGEDATA(context, payload) {
      context.commit('SET_CHANGEDATA', payload);
      changedCityDataHandle(context);
    },
  },
};
