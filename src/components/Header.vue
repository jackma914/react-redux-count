<template>
  <header>
    <Login />
  </header>
</template>

<script>
import Login from "./Login.vue";
export default {
  components: { Login },
};
</script>
<style scoped>
header {
  text-align: center;
  padding: 25px;
  border-bottom: 1px solid #eee;
  background: #f7f7f7;
}
</style>
