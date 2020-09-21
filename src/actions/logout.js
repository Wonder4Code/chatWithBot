import {LOGOUT} from'../utils/constants'

export const logout = () => {
  return {
    type: LOGOUT,
  }
}