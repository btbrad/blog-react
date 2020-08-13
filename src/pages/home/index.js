import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, ArticleList } from './style'
import ArticleItem from './components/ArticleItem'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <ArticleList>
             <ArticleItem></ArticleItem>
          </ArticleList>
        </HomeLeft>
        <HomeRight></HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home