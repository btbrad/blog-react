import { fromJS } from 'immutable'
import { SET_ARTICLE_LIST } from './actionsTypes'

const defaultState = fromJS({
  articleList: []
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_ARTICLE_LIST: 
      return state.set('articleList', action.payload.list)
    default: 
      return state
  }
}

export default reducer