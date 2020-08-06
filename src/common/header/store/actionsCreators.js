import axios from 'axios'
import { fromJS } from 'immutable'
import { SEARCH_FOCUS, SEARCH_BLUR, SET_TRENDING_LIST, SET_MOUSE_STATUS, SWITCH_PAGE, SET_TREND_TOTAL } from './actionTypes'

const setList = (payload) => ({
  type: SET_TRENDING_LIST,
  payload
})

const setTrendTotal = (payload) => ({
  type: SET_TREND_TOTAL,
  payload
})

export const setSearchFocus = () => ({
  type: SEARCH_FOCUS
})

export const setSearchBlur = () => ({
  type: SEARCH_BLUR
})

export const getTrendingList = () => (dispatch) => {
  axios.get(`http://localhost:3000/api/trend-list.json`).then(res => {
    console.log(res)
    dispatch(setList({list: fromJS(res.data.list)}))
    dispatch(setTrendTotal({total: res.data.list.length}))
  })
}

export const setTrendingMouseStatus = (payload) => ({
  type: SET_MOUSE_STATUS,
  payload
})

export const setCurrentPage = (payload) => ({
  type: SWITCH_PAGE,
  payload
})

