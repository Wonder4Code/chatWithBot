import {ADD_MESSAGE} from'../utils/constants'

export const addMessage = (payload) => {
  return {
    type: ADD_MESSAGE,
    payload: payload
  }
}