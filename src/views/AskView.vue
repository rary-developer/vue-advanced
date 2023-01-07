<template>
  <div>
    <div v-for="item in this.$store.state.ask" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>

export default {
  // data(){
  //   return {
  //     ask : []
  //   }
  // },  
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