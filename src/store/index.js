// Vuex 설치 : npm install vuex@next
// 객체 구조분해를 통해서
import { createStore } from 'vuex';
import COMMON_01 from './common01'; // city weather api - store
import COMMON_02 from './common02'; // timely weather api - store
// import COMMON_03 from './common02'; // changed timely weather api - store
// import COMMON_04 from './common04'; // changed timely weather api - store

export default createStore({
  modules: {
    COMMON_01,
    COMMON_02,
    // COMMON_03,
    // COMMON_04,
  },
});
