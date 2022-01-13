import { createStore } from 'vuex';
import onedayData from './dayApi';

export default createStore({
  modules: {
    onedayData,
  },
});
