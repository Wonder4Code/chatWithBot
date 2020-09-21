import { LOGIN, LOGOUT } from "../utils/constants";

const initialState = {
  name: "",
  isLogin: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return state = {...state, name: "", isLogin: false };
    case LOGIN:
      return state = {...state, name: action.payload, isLogin: true };
    default:
      return state;
  }
};

export default loginReducer;
