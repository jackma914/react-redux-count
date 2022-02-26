<template>
  <div class="home">
    <Header />
    <Memo />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Memo from "./Memo.vue";

export default {
  components: { Header, Footer, Memo },
};
</script>
