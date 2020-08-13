import axios from 'axios'
import { SET_ARTICLE_LIST } from './actionsTypes'

const setArticleList = (payload) => ({
  type: SET_ARTICLE_LIST,
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