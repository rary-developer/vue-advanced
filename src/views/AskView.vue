<template>
  <div>
    <!-- <div v-for="item in fetchedAsk" :key="item.id">{{ item.title }}</div> -->
    <p v-for="item in fetchedAsk" :key="item.id">
        <a :href="item.url">
          {{item.title}}
        </a>           
        <small>{{ item.time_ago }} by {{ item.user }}</small>     
    </p>
  </div>
</template>

<script>
//import {mapState} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  computed:{    
    // ask(){
    //   return this.$store.state;
    // }
    
    // ...mapState({
    //   ask: state => state.ask,
    // })    
    
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  created() {   
    this.$store.dispatch('FETCH_ASK');
  },
  // beforeMount,
  // mounted,
}
</script>

<style>

</style>