import Vuex from 'vuex';
import Vue from 'vue';
import mutaions from './mutation.js';
import actions from './actions.js';

Vue.use(Vuex);

//상태관리 도구 = Vuex
export const store = new Vuex.Store({
  state: {
    news:[],
    jobs:[],
    ask:[],
  },
  getters:{
    fetchedAsk(state){
      return state.ask;
    }
  },
  //state에 데이터 할당
  mutations:mutaions,
  //행동 => api 호출
  actions:actions
})