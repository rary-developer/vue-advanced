<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>    
  </div>
</template>

<script>
//import axios from 'axios';

export default {
  created(){
    //console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    //axios.get(`https://hacker-news.firebaseio.com/v0/user/${userId}.json?print=pretty`)    
    this.$store.dispatch('FETCH_USER',userName);
  },
  computed:{
    userInfo(){
      return this.$store.state.user;
    }
  }
}
</script>

<style>

</style>