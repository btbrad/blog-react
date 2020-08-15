import { SET_DETAIL } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const setDetail = (payload) => ({
  type: SET_DETAIL,
  payload,
})

export const getDetail = (id) => (dispatch) => {
  axios.get('http://localhost:3000/api/detail.json?id=' + id).then((res) => {
    let data = res.data
    dispatch(setDetail(fromJS({ title: data.title, content: data.content })))
  })
}
