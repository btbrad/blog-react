import axios from 'axios'
import { SET_ARTICLE_LIST, SET_RECOMMEND_LIST } from './actionsTypes'

const setArticleList = (payload) => ({
  type: SET_ARTICLE_LIST,
  payload
})

const setRecommendList = (payload) => ({
  type: SET_RECOMMEND_LIST,
  payload
})

export const getArticleList = () => (
  dispatch => {
    axios.get('http://localhost:3000/api/article-list.json').then(res => {
      let data = res.data.list
      dispatch(setArticleList({list: data}))
    })
  }
)

export const getRecommendList = () => (
  dispatch => {
    axios.get('http://localhost:3000/api/recommend-list.json').then(res => {
      let data = res.data.list
      dispatch(setRecommendList({list: data}))
    })
  }
)