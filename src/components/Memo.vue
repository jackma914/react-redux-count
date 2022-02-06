<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="d in state.data" :key="d.i" @click="edit(d.i)">
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

    const add = () => {
      const content = prompt("내용을 입력해주세요/");

      // state.data.push("추가된 메모 내용");
      axios.post("/api/memos", { content }).then((res) => {
        state.data = res.data;
      });
    };

    const edit = (idx) => {
      const content = prompt("내용을 입력해주세요", state.data[idx]);
      console.log(content);
      axios.put("/api/memos/" + idx, { content }).then((res) => {
        state.data = res.data;
      });
    };

    axios.get("/api/memos").then((res) => {
      state.data = res.data;
    });

    return { state, add, edit };
  },
};
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
