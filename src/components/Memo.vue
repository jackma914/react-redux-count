<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="(d, i) in state.data" :key="i" @click="edit(i)">
        {{ d.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      data: [],
    });

    //데이터 추가
    const add = () => {

  },
}}
</script>

<style lang="scss" scoped>
.memo {
  .act {
    padding: 10px 10px 5px 5px;
    text-align: right;
  }

  ul {
    list-style: none;
    padding: 15px 0;
    margin: 0;

    li {
      padding: 15px 10px;
      margin: 10px 0;
      border: 1px solid #eee;
    }
  }
}
</style>
>
