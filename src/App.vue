<template>
  <div id="app">
    <!-- url이 만약 news -->
    <!-- <NewsView></NewsView> -->
    
    <!-- 1.Strongly Recommended -->
    <!-- <ToolBar></ToolBar> -->
    <!-- 2.Essential -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
</style>
