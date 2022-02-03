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
      const content = prompt("내용을 입력해주세요/");

      // 데이터를 post 방식으로 모달 대신 prompt를 이용해서 데이터 추가
      axios.post("/api/memos", { content }).then((res) => {
        state.data = res.data;
      });
    };

    axios.get("/api/memos").then((res) => {
      state.data = res.data;
    });

    //데이터 수정
    const edit = (idx) => {
      console.log(idx);
      const content = prompt("내용을 입력해주세요", state.data[idx]);
      axios.put("/api/memos/" + idx, { content }).then((res) => {
        //state.data를 받아온 res데이터로 바꿔줍니다.
        state.data = res.data;
      });
    };

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
