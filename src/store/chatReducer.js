import {ADD_MESSAGE} from '../utils/constants'

const initialState = {
  messages: [
    { id: 1, title: "Привет", type: 'user'},
    { id: 2, title: "Как дела?", type: 'user' },
  ],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case(ADD_MESSAGE):
      state.messages = [...state.messages,action.payload]
    default:
      return state;
  }
};

export default chatReducer;
