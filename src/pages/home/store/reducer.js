import { fromJS } from 'immutable'
import { SET_ARTICLE_LIST, SET_RECOMMEND_LIST, SET_PAGE_NO } from './actionsTypes'

const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  currentPage: 1
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ARTICLE_LIST:
      return state.set('articleList', fromJS([...state.get('articleList'), ...action.payload.list]))
    case SET_RECOMMEND_LIST:
      return state.set('recommendList', fromJS(action.payload.list))
    case SET_PAGE_NO:
      return state.set('currentPage', fromJS(action.payload.page))
    default:
      return state
  }
}

export default reducer
