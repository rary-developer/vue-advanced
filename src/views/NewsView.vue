<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
//import axios from 'axios';
import {fetchNewsList} from '../api/index';

export default {
  data(){
    return{
      users:[]
    }
  },
  created(){
    var vm = this;
    fetchNewsList()
      .then(function(response){
        console.log(response);
        vm.users = response.data
      })
      .catch(function(error){
        console.log(error);
      })
  }
}
</script>

<style>

</style>