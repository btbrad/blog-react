import React, { Component } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Addition,
  Button,
  Search,
  SearchWrapper,
  TrendingWrapper,
  TrendingTitleWrapper,
  TrendingTitle,
  SwitchButton,
  TrendingList,
  TrendingItem
} from './style'
// import { CSSTransition } from 'react-transition-group'
import Icon from '../../components/SvgIcon'
import bind from './transition'
import { connect } from 'react-redux'
import { setSearchBlur, setSearchFocus, getTrendingList } from './store/actionsCreators'

const style = {
  position: 'relative',
  left: '-30px',
  width: '22px',
  height: '22px',
}

class Header extends Component {

  componentDidMount() {
    bind()
  }

  handleFocus = () => {
    this.setState({
      focused: true,
    })
  }

  handleBlur = () => {
    this.setState({
      focused: false,
    })
  }

  renderTrending = (show, list) => {
    if (show) {
      return (
        <TrendingWrapper>
          <TrendingTitleWrapper>
            <TrendingTitle>热搜</TrendingTitle>
            <SwitchButton>换一批</SwitchButton>
          </TrendingTitleWrapper>
          <TrendingList>
            {list.map(item => <TrendingItem key={item}>{item}</TrendingItem>)}
          </TrendingList>
        </TrendingWrapper>
      )
    }
  }

  render() {
    console.log(this.props.focused)
    const { focused, handleFocus, handleBlur, getList, trendingList } = this.props

    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <SearchWrapper>
            <Search
              id='search-box'
              placeholder='搜索'
              onFocus={() => {
                  handleFocus()
                  getList()
                }
              }
              onBlur={handleBlur}></Search>
            <span style={style} className='search-icon'>
              <Icon name='search' />
            </span>
            { this.renderTrending(focused, trendingList) }
          </SearchWrapper>
          <NavItem className='right'>
            <Icon name='Aa' />
          </NavItem>
          <NavItem className='right'>登录</NavItem>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Button className='edit'>
            <Icon name='edit' />
            写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  focused: state.getIn(['header','focused']),
  trendingList: state.getIn(['header', 'trendingList'])
})

const mapDispatchToProps = (dispatch) => ({
  handleFocus: () => dispatch(setSearchFocus()),
  handleBlur: () => dispatch(setSearchBlur()),
  getList: () => dispatch(getTrendingList())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
