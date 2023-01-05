<template>
  <div>
    <div v-for="user in this.$store.state.news" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
//import axios from 'axios';
//import {fetchNewsList} from '../api/index';

export default {
  // data(){
  //   return{
  //     users:[]
  //   }
  // },
  created(){
    // var vm = this;
    // console.log('호출 전: ', this);    
    // // 1.
    // fetchNewsList()      
    //   .then(response => {
    //     console.log('호출 후:',this);
    //     // 2.
    //     vm.users = response.data
    //   })
    //   .catch(function(error){
    //     console.log(error);
    //   })
    
    //store사용
    this.$store.dispatch('FETCH_NEWS');
    
  }
}
</script>

<style>

</style>