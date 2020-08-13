import React, { Component } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  ArticleList,
  RecommendWrapper,
  RecommendTop,
  RecommendList,
  RecommendTitle,
  RecommendSwitch,
} from './style'
import ArticleItem from './components/ArticleItem'
import RecommendItem from './components/RecommendItem'
import { connect } from 'react-redux'
import { getArticleList, getRecommendList } from './store/actionCreators'
import Icon from '../../components/SvgIcon'

class Home extends Component {
  componentDidMount() {
    this.props.getList()
    this.props.getRecoList()
  }

  render() {
    const { articleList, recommendList } = this.props

    return (
      <HomeWrapper>
        <HomeLeft>
          <ArticleList>
            {articleList.toJS().map((item) => (
              <ArticleItem data={item} key={item.id}></ArticleItem>
            ))}
          </ArticleList>
        </HomeLeft>
        <HomeRight>
          <RecommendWrapper>
            <RecommendTop>
              <RecommendTitle>推荐作者</RecommendTitle>
              <RecommendSwitch>
                <Icon name='switch' />
                换一批
              </RecommendSwitch>
            </RecommendTop>
            <RecommendList>
              {recommendList.toJS().map((item) => (
                <RecommendItem data={item} key={item.id}></RecommendItem>
              ))}
            </RecommendList>
          </RecommendWrapper>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  recommendList: state.getIn(['home', 'recommendList']),
})

const mapDispatchToProps = (dispatch) => ({
  getList: () => dispatch(getArticleList()),
  getRecoList: () => dispatch(getRecommendList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
