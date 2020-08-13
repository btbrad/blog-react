import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, ArticleList } from './style'
import ArticleItem from './components/ArticleItem'
import { connect } from 'react-redux'
import { getArticleList } from './store/actionCreators'

class Home extends Component {

  componentDidMount() {
    this.props.getList()
  }

  render() {

    const { articleList } = this.props

    return (
      <HomeWrapper>
        <HomeLeft>
          <ArticleList>
            {
              articleList.map(item => (
                <ArticleItem data={item} key={item.id}></ArticleItem>
              ))
            }
          </ArticleList>
        </HomeLeft>
        <HomeRight></HomeRight>
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getArticleList())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)