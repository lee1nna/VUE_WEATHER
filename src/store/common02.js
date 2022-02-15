// timely weather api - store
import axios from 'axios';

export default {
  // namedspaced : 하나의 store에서 모듈화되어 사용될 수 있음을 명시적으로 나타내는 개념
  namespaced: true,
  // state : 실제로 취급해야하는 데이터
  state: {},
  getters: {},
  mutaions: {},
  actions: {
    // actions부분에선 mutaions처럼 state를 바로 불러올 순 없고,
    // context라는 객체데이터를 가지고 와서, context를 참조하여 데이터를 불러온다.
    // context: state, getters, mutations을 활용할 수 있는 내용이 들어있다.
    // mutations을 불러오기 위해선 context.mutations가 아니라 context.commit을 활용한다.
    // ---------------------------------------------------------------------------------------
    // 객체 구조분해하여 같은 방법으로 불러올 수 있다.
    // searchData({ state, getters, commit }, payload) {},
    // 두 번째 매개변수 자리 (payload): 함수가 실행될 때, 인수로 들어온 특정한 데이터를 payload 자리에 받는다.
    GET_DATA() {
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
  },
};
