<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="(d, i) in state.data" :key="i" @click="edit(i)">
        {{ d.content }}
      </li>
      <li v-for="(d, i) in state.data" :key="i">{{ d }}</li>

      <li v-for="(d, i) in state.data" :key="i">{{ d }}</li>

      <li v-for="(d, i) in state.data" :key="i">{{ d }}</li>

      <li v-for="(d, i) in state.data" :key="i">{{ d }}</li>

      <li v-for="d in state.data" :key="d.id" @click="edit(d.id)">
        {{ d.content }}
      </li>
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
      state.data.push("추가된 메모 내용");
      const content = prompt("내용을 입력해주세요/");

      // state.data.push("추가된 메모 내용");
      axios.post("/api/memos", { content }).then((res) => {
        state.data = res.data;

        if (!content) {
          alert("내용을 입력해 주세요.");
          return add();
        }
      });
    };

    const edit = (id) => {
      const content = prompt(
        "내용을 입력해주세요",
        state.data.find((d) => d.id === id).content
      );
      axios.put("/api/memos/" + id, { content }).then((res) => {
        state.data = res.data;
      });
    };
    return { state, add };
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
      margin: 5px;
      border: 1px solid #eee;
    }
  }
}
</style>
>
