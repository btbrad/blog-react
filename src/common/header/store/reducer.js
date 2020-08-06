import { fromJS } from 'immutable'
import { SEARCH_FOCUS, SEARCH_BLUR, SET_TRENDING_LIST, SET_MOUSE_STATUS } from './actionTypes'

const defaultState = fromJS({
  focused: false,
  trendingList: [],
  mouseIn: false
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
    default:
      return state
  }
}

export default reducer
