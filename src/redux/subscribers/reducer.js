import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./types";

const initialState = {
  count: 370,
};

// 리듀서는 state,action 두가지 프로퍼티를 받습니다.
// state는 내부에서 initialState라는 초기값을 만들어주고 state의 어떠한 값도 안들어오면 initialState기본 값으로 받아 사용합니다.
// `state = initialState`
// action은 actions.js에 작성한 action을 넘겨받아 type을 비교하여 switch문으로  헨들링을 해보겠습니다.
const subscribersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SUBSCRIBER":
      return {
        ///...state는 state값을 그대로 복사를 해줍니다.
        ...state,
        count: state.count + 1,
      };
    case "REMOVE_SUBSCRIBER":
      return {
        ...state,
        count: state.count - 1,
      };

    //default는 앞에 정의한 case 이외의 경우일 기본값으로 사용하기 위해 state를 리턴해줍니다.
    default:
      return state;
  }
};

export default subscribersReducer;
