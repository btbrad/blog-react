import { fromJS } from 'immutable'
import { SEARCH_FOCUS, SEARCH_BLUR, SET_TRENDING_LIST, SET_MOUSE_STATUS, SET_TREND_TOTAL, SWITCH_PAGE } from './actionTypes'

const defaultState = fromJS({
  focused: false,
  trendingList: [],
  mouseIn: false,
  currentPage: 1,
  pageSize: 10,
  total: 0
})

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case SEARCH_FOCUS:
      return state.set('focused', true)
    case SEARCH_BLUR:
      return state.set('focused', false)
    case SET_TRENDING_LIST:
      return state.set('trendingList', action.payload.list)
    case SET_MOUSE_STATUS:
      return state.set('mouseIn', action.payload)
    case SET_TREND_TOTAL:
      return state.set('total', action.payload.total)
    case SWITCH_PAGE:
      return state.set('currentPage', action.payload.currentPage)
    default:
      return state
  }
}

export default reducer
