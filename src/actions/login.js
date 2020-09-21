import {LOGIN} from'../utils/constants'

export const login = (payload) => {
  return {
    type: LOGIN,
    payload: payload
  }
}