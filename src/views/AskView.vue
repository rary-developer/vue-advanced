<template>
  <div>
    <!-- <div v-for="item in this.$store.state.ask" :key="item.id">
      {{ item.title }}
    </div> -->
    <p v-for="ask in fetchedAsk" :key="ask.id">
      <a v-bind:href="ask.url">{{ ask.title }}</a>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  computed:{
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  created() { 
    // var vm = this;
    // fetchAskList()
    //   .then(function(response){
    //     vm.ask = response.data;
    //   })
    //   .catch(function(err){
    //     console.error(err);
    //   });
    this.$store.dispatch('FETCH_ASK');
  },
  // beforeMount,
  // mounted,
}
</script>

<style>

</style>