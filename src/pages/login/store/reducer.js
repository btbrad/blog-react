import { fromJS } from 'immutable'
import { SET_LOGIN_STATUS } from './actionTypes'

const defaultState = fromJS({
  loginStatus: window.localStorage.getItem('jianshu-token') ? true : false,
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return state.set('loginStatus', action.payload)
    default:
      return state
  }
}

export default reducer
