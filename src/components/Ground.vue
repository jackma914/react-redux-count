<template>
  <div class="ground">
    <Login />
    <Header />
    <Memo />
    <Footer />
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
