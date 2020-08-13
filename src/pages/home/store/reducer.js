import { fromJS } from 'immutable'
import { SET_ARTICLE_LIST, SET_RECOMMEND_LIST } from './actionsTypes'

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ARTICLE_LIST:
      return state.set('articleList', fromJS(action.payload.list))
    case SET_RECOMMEND_LIST:
      return state.set('recommendList', fromJS(action.payload.list))
    default:
      return state
  }
}

export default reducer
