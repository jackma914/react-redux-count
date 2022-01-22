import { createStore } from "redux";
import subscribersReducer from "./subscribers/reducer";

//store를 생성하기위해 createStore를 사용해줍니다. 인자로는 reducer를 넣어주시면됩니다.
const store = createStore(subscribersReducer);
console.log(store);
export default store;
