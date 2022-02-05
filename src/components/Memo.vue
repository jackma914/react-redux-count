<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
<<<<<<< HEAD
      <li v-for="(d, i) in state.data" :key="i" @click="edit(i)">
        {{ d.content }}
      </li>
=======
      <li v-for="(d, i) in state.data" :key="i">{{ d }}</li>
>>>>>>> parent of 16b7512 (22-01-31)
    </ul>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const state = reactive({
      data: [],
    });

    //데이터 추가
    const add = () => {
<<<<<<< HEAD

=======
      state.data.push("추가된 메모 내용");
    };

    return { state, add };
>>>>>>> parent of 16b7512 (22-01-31)
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
      margin: 5px;
      border: 1px solid #eee;
    }
  }
}
</style>
>
