// city weather api - store
import axios from 'axios';

const changedCityDataHandle = (context) => {
  // context : 매개변수 전달
  const API_KEY = 'bf55a4cfb052a4396983999d7b9a9e6d';
  let CITY_NAME = 'Seoul';

  console.log('changedData', context.state.changedData);
  // Contents Details
  // if (context.state.changedData.lat == 37.566826 && context.state.changedData.lon == 126.9786567) {
  //   CITY_NAME = 'Seoul';
  // }
  if (context.state.changedData.lon == 37.40864282648822 && context.state.changedData.lat == 126.65071862847725) {
    console.log(1);
    CITY_NAME = 'Incheon';
  }
  if (context.state.changedData.lon == 37.2911 && context.state.changedData.lat == 127.00889999999998) {
    console.log(2);
    CITY_NAME = 'Suwon';
  }
  if (context.state.changedData.lon == 37.791688035246636 && context.state.changedData.lat == 128.82867301427635) {
    console.log(3);
    CITY_NAME = 'gangneung';
  }
  if (context.state.changedData.lon == 37.15818414766273 && context.state.changedData.lat == 128.928560966107) {
    console.log(4);
    CITY_NAME = 'Taebaek';
  }
  if (context.state.changedData.lon == 36.3519957815787 && context.state.changedData.lat == 127.39131469478555) {
    console.log(5);
    CITY_NAME = 'Daejeon';
  }
  if (context.state.changedData.lon == 35.90493196781132 && context.state.changedData.lat == 127.17357575637105) {
    console.log(6);
    CITY_NAME = 'Jeonju';
  }
  if (context.state.changedData.lon == 35.166611792579545 && context.state.changedData.lat == 126.84603104436039) {
    console.log(7);
    CITY_NAME = 'Gwangju';
  }
  if (context.state.changedData.lon == 35.823630139082525 && context.state.changedData.lat == 126.39766650967137) {
    console.log(8);
    CITY_NAME = 'Mokpo';
  }
  if (context.state.changedData.lon == 35.871148697228875 && context.state.changedData.lat == 128.61345034272642) {
    console.log(9);
    CITY_NAME = 'Daegu';
  }
  if (context.state.changedData.lon == 35.5372 && context.state.changedData.lat == 129.316700000003) {
    console.log(10);
    CITY_NAME = 'Ulsan';
  }
  if (context.state.changedData.lon == 35.185997613083536 && context.state.changedData.lat == 129.0662809358643) {
    console.log(11);
    CITY_NAME = 'Busan';
  }
  if (context.state.changedData.lon == 33.509699999999995 && context.state.changedData.lat == 126.5219) {
    console.log(12);
    CITY_NAME = 'Jeju';
  }

  console.log('CITY_NAME', CITY_NAME);

  // https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric
  // https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${api_key}&units=metric
  axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`)
    .then((res) => {
      // console.log(res.data);
      // mutations SET_DATA01에 res.data(인자)를 넘김
      context.commit('SET_DATA01', res.data.name);
      context.commit('SET_DATA02', res.data.main.temp);
      context.commit('SET_DATA03', [res.data.weather[0].description, res.data.main.humidity, res.data.wind.speed]);
      context.commit('SET_DATA04', [res.data.main.temp_max, res.data.main.temp_min, res.data.main.feels_like]);

      // console.log(res.data.weather[0].description);
      var img = res.data.weather[0].icon; // '01d'
      context.commit('SET_DATA05', `http://openweathermap.org/img/wn/${img}@2x.png`);

      if (img == '01d') {
        context.commit('SET_DATA05', 'src/assets/26.png');
        // this.images[i] = 'src/assets/26.png';
      }
      if (img == '01n') {
        context.commit('SET_DATA05', 'src/assets/10.png');
        // this.images[i] = 'src/assets/10.png';
      }
      if (img == '02d') {
        context.commit('SET_DATA05', 'src/assets/27.png');
        // this.images[i] = 'src/assets/27.png';
      }
      if (img == '02n') {
        context.commit('SET_DATA05', 'src/assets/31.png');
        // this.images[i] = 'src/assets/31.png';
      }
      if (img == '03d') {
        context.commit('SET_DATA05', 'src/assets/33.png');
        // this.images[i] = 'src/assets/33.png';
      }
      if (img == '03n') {
        context.commit('SET_DATA05', 'src/assets/32.png');
        // this.images[i] = 'src/assets/32.png';
      }
      if (img == '04d') {
        context.commit('SET_DATA5', 'src/assets/35.png');
      }
      if (img == '04n') {
        context.commit('SET_DATA05', 'src/assets/35.png');
      }
      if (img == '05d') {
        context.commit('SET_DATA05', 'src/assets/35.png');
        // this.images[i] = 'src/assets/35.png';
      }
      if (img == '05n') {
        context.commit('SET_DATA05', 'src/assets/35.png');
        // this.images[i] = 'src/assets/35.png';
      }
      if (img == '09d') {
        context.commit('SET_DATA05', 'src/assets/5.png');
        // this.images[i] = 'src/assets/5.png';
      }
      if (img == '09n') {
        context.commit('SET_DATA05', 'src/assets/5.png');
        // this.images[i] = 'src/assets/5.png';
      }
      if (img == '10d') {
        context.commit('SET_DATA05', 'src/assets/8.png');
        // this.images[i] = 'src/assets/8.png';
      }
      if (img == '10n') {
        context.commit('SET_DATA05', 'src/assets/1.png');
        // this.images[i] = 'src/assets/1.png';
      }
      if (img == '11d') {
        context.commit('SET_DATA05', 'src/assets/17.png');
        // this.images[i] = 'src/assets/17.png';
      }
      if (img == '11n') {
        context.commit('SET_DATA05', 'src/assets/17.png');
        // this.images[i] = 'src/assets/17.png';
      }
      if (img == '13d') {
        context.commit('SET_DATA05', 'src/assets/18.png');
        // this.images[i] = 'src/assets/18.png';
      }
      if (img == '13n') {
        context.commit('SET_DATA05', 'src/assets/18.png');
        // this.images[i] = 'src/assets/18.png';
      }
      if (img == '50d') {
        context.commit('SET_DATA05', 'src/assets/6.png');
        // this.images[i] = 'src/assets/6.png';
      }
      if (img == '50n') {
        context.commit('SET_DATA05', 'src/assets/9.png');
        // this.images[i] = 'src/assets/9.png';
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
    // totalData: {},
    cityName: '',
    temp: '',
    image: '',
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
    subData2: [
      {
        title: '최고온도',
        value: '',
      },
      {
        title: '최저온도',
        value: '',
      },
      {
        title: '체감온도',
        value: '',
      },
    ],
    changedData: {
      lat: '',
      lon: '',
    },
  },
  // getters : 계산된 상태를 만들어내는 속성, computed와 유사하다.
  // 실제 데이터를 계산된 형태로 바꾸어 새롭게 활용할 수 있다.
  getters: {
    CHANGED_DATA(context) {
      changedCityDataHandle(context);
    },
  },
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
      state.subData[0].value = payload[0];
      state.subData[1].value = payload[1] + '%';
      state.subData[2].value = Math.round(payload[2]) + 'm/s';
    },
    SET_DATA04(state, payload) {
      state.subData2[0].value = payload[0];
      state.subData2[1].value = payload[1];
      state.subData2[2].value = payload[2];
    },
    SET_DATA05(state, payload) {
      state.image = payload;
    },
    SET_CHANGEDATA(state, payload) {
      state.changedData.lat = payload.La;
      state.changedData.lon = payload.Ma;
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
          // console.log(res.data);
          // mutations SET_DATA01에 res.data(인자)를 넘김
          context.commit('SET_DATA01', res.data.name);
          context.commit('SET_DATA02', res.data.main.temp);
          context.commit('SET_DATA03', [res.data.weather[0].description, res.data.main.humidity, res.data.wind.speed]);
          context.commit('SET_DATA04', [res.data.main.temp_max, res.data.main.temp_min, res.data.main.feels_like]);

          // console.log(res.data.weather[0].description);
          var img = res.data.weather[0].icon; // '01d'
          context.commit('SET_DATA05', `http://openweathermap.org/img/wn/${img}@2x.png`);

          if (img == '01d') {
            context.commit('SET_DATA05', 'src/assets/26.png');
            // this.images[i] = 'src/assets/26.png';
          }
          if (img == '01n') {
            context.commit('SET_DATA05', 'src/assets/10.png');
            // this.images[i] = 'src/assets/10.png';
          }
          if (img == '02d') {
            context.commit('SET_DATA05', 'src/assets/27.png');
            // this.images[i] = 'src/assets/27.png';
          }
          if (img == '02n') {
            context.commit('SET_DATA05', 'src/assets/31.png');
            // this.images[i] = 'src/assets/31.png';
          }
          if (img == '03d') {
            context.commit('SET_DATA05', 'src/assets/33.png');
            // this.images[i] = 'src/assets/33.png';
          }
          if (img == '03n') {
            context.commit('SET_DATA05', 'src/assets/32.png');
            // this.images[i] = 'src/assets/32.png';
          }
          if (img == '04d') {
            context.commit('SET_DATA05', 'src/assets/35.png');
            // this.images[i] = 'src/assets/35.png';
          }
          if (img == '04n') {
            context.commit('SET_DATA05', 'src/assets/35.png');
            // this.images[i] = 'src/assets/35.png';
          }
          if (img == '05d') {
            context.commit('SET_DATA05', 'src/assets/35.png');
            // this.images[i] = 'src/assets/35.png';
          }
          if (img == '05n') {
            context.commit('SET_DATA05', 'src/assets/35.png');
            // this.images[i] = 'src/assets/35.png';
          }
          if (img == '09d') {
            context.commit('SET_DATA05', 'src/assets/5.png');
            // this.images[i] = 'src/assets/5.png';
          }
          if (img == '09n') {
            context.commit('SET_DATA05', 'src/assets/5.png');
            // this.images[i] = 'src/assets/5.png';
          }
          if (img == '10d') {
            context.commit('SET_DATA05', 'src/assets/8.png');
            // this.images[i] = 'src/assets/8.png';
          }
          if (img == '10n') {
            context.commit('SET_DATA05', 'src/assets/1.png');
            // this.images[i] = 'src/assets/1.png';
          }
          if (img == '11d') {
            context.commit('SET_DATA05', 'src/assets/17.png');
            // this.images[i] = 'src/assets/17.png';
          }
          if (img == '11n') {
            context.commit('SET_DATA05', 'src/assets/17.png');
            // this.images[i] = 'src/assets/17.png';
          }
          if (img == '13d') {
            context.commit('SET_DATA05', 'src/assets/18.png');
            // this.images[i] = 'src/assets/18.png';
          }
          if (img == '13n') {
            context.commit('SET_DATA05', 'src/assets/18.png');
            // this.images[i] = 'src/assets/18.png';
          }
          if (img == '50d') {
            context.commit('SET_DATA05', 'src/assets/6.png');
            // this.images[i] = 'src/assets/6.png';
          }
          if (img == '50n') {
            context.commit('SET_DATA05', 'src/assets/9.png');
            // this.images[i] = 'src/assets/9.png';
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
