<template>
  <div id="app">
    <Home />
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
export default {
  components: { Home },
};
</script>

<style></style>
