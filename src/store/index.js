import Vuex from 'vuex';
import Vue from 'vue';
import {fetchNewsList} from '../api/index';
import {fetchJobsList} from '../api/index';

Vue.use(Vuex);

//상태관리 도구 = Vuex
export const store = new Vuex.Store({
  state: {
    news:[],
    jobs:[],
  },
  // getters,
  
  //state에 데이터 할당
  mutations:{
    SET_NEWS(state, news){
      state.news = news      
    },
    SET_JOBS(state, jobs){
      state.jobs = jobs;
    }
  },
  //행동 => api 호출
  actions:{
    FETCH_NEWS(context){
      fetchNewsList()
      .then(response=>{
        console.log(response.data);
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        console.error(error);
      });
    },
    FETCH_JOBS(context){
      fetchJobsList()
        .then(response => {
          context.commit('SET_JOBS', response.data);
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
})