<template>
  <div>
    <div v-for="job in this.$store.state.jobs" :key="job.id">{{ job.title }}</div>
  </div>
</template>

<script>
//import {fetchJobsList} from '../api/index';

export default {
  // data(){
  //   return{
  //     jobs:[]
  //   }
  // },
  created(){    
    // fetchJobsList()
    //   .then(response => this.jobs = response.data)
    //   .catch(function(err){
    //     console.error(err);
    //   })
      this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>