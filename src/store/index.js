// Vuex 설치 : npm install vuex@next
// 객체 구조분해를 통해서
import { createStore } from 'vuex';
import COMMON1 from './common1'; // city weather api - store
import COMMON2 from './common2'; // timely weather api - store

export default createStore({
  modules: {
    COMMON1,
    COMMON2,
  },
});
