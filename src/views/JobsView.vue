<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs" :key="job.id">
      {{ job.title }}
    </div> -->
    <p v-for="job in fetchedJobs" :key="job.id">
      <a v-bind:href="job.url">{{ job.title }}</a>
      <small>{{ job.domain }} {{ job.time_ago }}</small>
    </p>    
  </div>
</template>

<script>
//import {fetchJobsList} from '../api/index';
import { mapGetters } from 'vuex';

export default {
  computed:{
    ...mapGetters([
      'fetchedJobs'
    ])
  },
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