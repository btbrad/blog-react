import { fromJS } from 'immutable'
import { SET_DETAIL } from './actionTypes'

const defaultState = fromJS({
  title: '',
  content: '',
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DETAIL:
      return state.merge(action.payload)
    default:
      return state
  }
}

export default reducer
