<template>
  <div class="ground">
    <Header />
    <Memo />
    <Footer />
    <Login />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Memo from "./Memo.vue";
import Login from "./Login.vue";

export default {
  components: { Header, Footer, Memo, Login },
};
</script>
