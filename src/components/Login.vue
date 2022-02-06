<template>
  <div class="login">
    <div v-if="state.account.mid">
      안녕하세요? {{ state.account.memberName }}님
    </div>
    <div v-else>
      <label for="loginId">
        <span>아이디</span>
        <input type="text" id="loginId" />
      </label>
      <label for="loginPw">
        <span>비밀번호</span>
        <input type="password" id="loginPw" />
      </label>
      <hr />
      <button>로그인</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      account: {
        mid: null,
        memberName: "",
      },
    });
    axios.get("/api/account").then((res) => {
      state.account = res.data;
    });
    return { state };
  },
};
</script>
