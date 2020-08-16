import { SET_LOGIN_STATUS } from './actionTypes'
import axios from 'axios'

const setLoginStatus = (payload) => ({
  type: SET_LOGIN_STATUS,
  payload,
})

export const loginAction = ({ username, password }) => (dispatch) => {
  axios
    .get(`/api/login.json?username=${username}&password=${password}`)
    .then((res) => {
      console.log(res)
      let { code, token } = res.data
      if (code === '1') {
        window.localStorage.setItem('jianshu-token', token)
        dispatch(setLoginStatus(true))
      }
    })
}

export const logout = () => (dispatch) => {
  window.localStorage.removeItem('jianshu-token')
  dispatch(setLoginStatus(false))
}
