import {fetchNewsList ,fetchAskList,fetchJobsList} from '../api/index';

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