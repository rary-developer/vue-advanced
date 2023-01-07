import Vuex from 'vuex';
import Vue from 'vue';
import {fetchNewsList ,fetchAskList,fetchJobsList} from '../api/index';

Vue.use(Vuex);

//상태관리 도구 = Vuex
export const store = new Vuex.Store({
  state: {
    news:[],
    jobs:[],
    ask:[],
  },
  // getters,
  
  //state에 데이터 할당
  mutations:{
    SET_NEWS(state, news){
      state.news = news      
    },
    SET_JOBS(state, jobs){
      state.jobs = jobs;
    },
    SET_ASK(state, ask){
      state.ask = ask;
    }
  },
  //행동 => api 호출
  actions:{
    FETCH_NEWS(context){
      fetchNewsList()
      .then(response=>{
        //console.log(response.data);
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        console.error(error);
      });
    },
    FETCH_JOBS(context){
      fetchJobsList()
        .then(({data}) => {
          context.commit('SET_JOBS', data);
        })
        .catch(error => {
          console.error(error)
        })
    },
    FETCH_ASK(context){
      fetchAskList()
        .then(({data})=>{
          context.commit('SET_ASK', data);
        })
        .catch(error => {
          console.error(error);
        })
    }
  }
})