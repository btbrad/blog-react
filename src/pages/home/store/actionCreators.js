import axios from 'axios'
import { SET_ARTICLE_LIST, SET_RECOMMEND_LIST, SET_PAGE_NO } from './actionsTypes'

const setArticleList = (payload) => ({
  type: SET_ARTICLE_LIST,
  payload
})

const setRecommendList = (payload) => ({
  type: SET_RECOMMEND_LIST,
  payload
})

const setCurrentPage = (payload) => ({
  type: SET_PAGE_NO,
  payload
})

export const getArticleList = (page) => (
  dispatch => {
    axios.get(`http://localhost:3000/api/article-list.json?page=${page}`).then(res => {
      let data = res.data.list
      dispatch(setArticleList({list: data}))
      dispatch(setCurrentPage({page}))
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