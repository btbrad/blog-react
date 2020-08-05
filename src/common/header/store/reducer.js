import { fromJS } from 'immutable'
import { SEARCH_FOCUS, SEARCH_BLUR, SET_TRENDING_LIST } from './actionTypes'

const defaultState = fromJS({
  focused: false,
  trendingList: []
})

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case SEARCH_FOCUS:
      return state.set('focused', true)
    case SEARCH_BLUR:
      return state.set('focused', false)
    case SET_TRENDING_LIST:
      return state.set('trendingList', action.payload.list)
    default:
      return state
  }
}

export default reducer
