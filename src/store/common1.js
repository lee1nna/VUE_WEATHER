// city weather api - store

export default {
  // namedspaced : 하나의 store에서 모듈화되어 사용될 수 있음을 명시적으로 나타내는 개념
  namespaced: true,
  // state : 실제로 취급해야하는 데이터
  state: () => {
    return {
      data: [],
    };
  },
  // getters : 계산된 상태를 만들어내는 속성, computed와 유사하다.
  // 실제 데이터를 계산된 형태로 바꾸어 새롭게 활용할 수 있다.
  getters: {},
  // mutations, actions : methods와 유사하다.
  // 1. mutations: 변이 - 우리가 관리하는 데이터를 변경시켜줄 수 있다.
  // 즉 state 안의 데이터는 오로지 mutaions에서만 데이터를 변경할 수 있다.
  mutations: {
    // 예제
    resetData(state) {
      // 초기화
      state.data = [];
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
    searchData({ context }) {
      context.state, context.getters, context.commit;
    },
    // 객체 구조분해하여 같은 방법으로 불러올 수 있다.
    // searchData({ state, getters, commit }, payload) {},
    // 두 번째 매개변수 자리 (payload): 함수가 실행될 때, 인수로 들어온 특정한 데이터를 payload 자리에 받는다.
  },
};
