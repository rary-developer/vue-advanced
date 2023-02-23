<template>
  <div>
    <!-- <div v-for="item in this.$store.state.news" :key="item.id">
      {{ user.title }}
    </div> -->
    <p v-for="news in fetchedNews" :key="news.id">
      <a v-bind:href="news.url">
        {{ news.title }}
      </a>
      <small>
        {{ news.time_ago }} by 
        <!-- <router-link v-bind:to="'/user'+item.user">{{ news.user }}</router-link> -->
        <router-link v-bind:to="`/user/${news.user}`">{{ news.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
//import axios from 'axios';
//import {fetchNewsList} from '../api/index';
import { mapGetters } from 'vuex';

export default {
  computed:{
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created(){  
    this.$store.dispatch('FETCH_NEWS');    
  }
}
</script>

<style>

</style>