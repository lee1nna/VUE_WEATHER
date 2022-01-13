import axios from 'axios';

export default {
  // 하나의 스토어에서 모듈화하여 사용할 수 있다.
  namespaced: true,
  // 실제로 취급해야하는 데이터
  state: () => {
    return {
      weatherData: [],
    };
  },
  // 계산된 데이터 상태를 만들어낸다.
  getters: {
    movieIds(state) {
      return state.movies.map((m) => m.imdbID);
    },
  },
  // methods
  // 변이 메서드 mutations : state에 있는 data를 변경시킬 때 사용
  // 즉, mutations에서만 data를 변경시킬 수 있다.
  mutations: {
    // resetMovies(state) {
    //   // 초기화
    //   state.movies = [];
    // },
    updateState(state, payload) {
      // 객체데이터의 속성의 이름들을 가지고 새로운 배열데이터를 만든다.
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  // 비동기로 동작한다.
  actions: {
    // context: state, getters, mutations을 활용할 수 있는 내용이 들어있다.
    // 두 번째 매개변수 자리 (payload): 함수가 실행될 때, 인수로 들어온 특정한 데이터를 payload 자리에 받는다.
    async oneDayData({ commit }, payload) {
      const { lat, lon } = payload;
      const API_KEY = 'bf55a4cfb052a4396983999d7b9a9e6d';
      // const lat = '37.5833';
      // const lon = '127';

      const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`);

      const { Search, totalResults } = res.data;
      commit('updateState', {
        weatherData: Search,
      });
      console.log(totalResults);
    },
  },
};
