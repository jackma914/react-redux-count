<template>
  <!-- vue 반복되는 html에 반복문을 사용할수 있습니다. <태그 v-for="작명 in 몇회" :key="작명"
Home으로만 3개가 아닌 다른 작명을 넣고싶을수 있습니다.
이런경우 data()에 객체를 만들어서 해결하겠습니다.
몇회 란에 객체를 넣어줍니다. 그리고 작명란에는 새로운 이름을적은뒤 {{작명}} 호출해줍니다.
이렇게 사용하면 객체에 들어있떤 숫자만큼 만복하며 속에 들어있던 객체가 출력됩니다.
> -->

  <!--반복문을 사용할때 key를 꼭 사용해라고 뜹니다. 사용하지 않으면 에러가 발생합니다. 
key는 

-->
  <div class="menu">
    <a v-for="home in 3" :key="home">Home</a>
    <br />
    <a v-for="(menus, i) in menu" :key="i">{{ menus }}</a>
  </div>

  <div class="black-bg" v-if="openMotal == true">
    <div class="white-bg" >
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click = "openMotal = false">닫기</button>
    </div>
  </div>

  <!-- <div v-for="(a, i) in products" :key="a">
    <h4>{{ products[i] }}</h4>
    <p>{{ price[i] }}</p>
  </div> -->

  <div>     
    <img src="./assets/logo.png" alt="" />
    <h4 @click="openMotal =true">{{ products[0] }}</h4>
    <p>50만원</p>
    <!-- 이벤트 핸들러로 버튼을 누르면 신고수가 +1 증가하는 버튼을 구현하겠습니다
    먼저 v-on 혹은 @를 사용합니다.
    -->
    <button v-on:click="신고수[0] += 1">허위매물신고</button>
    <span>신고수 : {{ 신고수[0] }}</span>
  </div>

  <div>
    <img src="./assets/logo.png" alt="" />
    <h4>{{ products[0] }}</h4>
    <p>10만원</p>
    <button v-on:click="신고수[1]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[1] }}</span>
  </div>

  <div>
    <img src="./assets/logo.png" alt="" />
    <h4>{{ products[0] }}</h4>
    <p>20만원</p>
    <button v-on:click="신고수[2]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[2] }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      openMotal: false,
      신고수: [0, 0, 0],
      menu: ["home", "shop", "about"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      price: [50, 10, 20],
    };
  },

  methods: {
    increase() {
      this.신고수++;
    },
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

.black-bg {
  width:100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
