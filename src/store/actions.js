import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo
} from '../api/index';

export default {
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
    FETCH_JOBS({commit}){
      fetchJobsList()
        .then(({data}) => {
          commit('SET_JOBS', data);
        })
        .catch(error => {
          console.error(error)
        })
    },
    FETCH_ASK({commit}){
      fetchAskList()
        .then(({data})=>{
          commit('SET_ASK', data);
        })
        .catch(error => {
          console.error(error);
        })
    },
    FETCH_USER({commit}, userName){
      fetchUserInfo(userName)
        .then(({data})=>{
          commit('SET_USER', data);
        })
        .catch(error =>{
          console.error(error);
        });
    }
  }