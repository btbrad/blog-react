import React, { PureComponent } from 'react'
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
  TrendingItem,
  SwitchIcon,
} from './style'
// import { CSSTransition } from 'react-transition-group'
import Icon from '../../components/SvgIcon'
import bind from './transition'
import { connect } from 'react-redux'
import {
  setSearchBlur,
  setSearchFocus,
  getTrendingList,
  setTrendingMouseStatus,
  setCurrentPage,
} from './store/actionsCreators'

const style = {
  position: 'relative',
  left: '-30px',
  width: '22px',
  height: '22px',
}

class Header extends PureComponent {
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

  handleSwitch = (icon) => {
    let originAngle = +icon.style.transform.replace(/[^0-9]/gi, '')
    if (!originAngle) {
      originAngle = 0
    }
    icon.style.transform = `rotate(${originAngle + 360}deg)`

    const { currentPage, total, setCurrentPage } = this.props
    let page = 0
    if (currentPage < Math.ceil(total / 10)) {
      page = currentPage + 1
    } else {
      page = 1
    }
    setCurrentPage(page)
  }

  renderTrending = (show, list) => {
    list = list.toJS()
    const {
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      currentPage,
      total,
    } = this.props
    let currentList = []
    for (let i = (currentPage - 1) * 10; i < total; i++) {
      if (currentList.length <= 9) {
        currentList.push(list[i])
      } else {
        break
      }
    }
    if (show || mouseIn) {
      return (
        <TrendingWrapper
          onMouseEnter={() => {
            handleMouseEnter()
          }}
          onMouseLeave={() => {
            handleMouseLeave()
          }}>
          <TrendingTitleWrapper>
            <TrendingTitle>热搜</TrendingTitle>
            <SwitchButton
              onClick={() => {
                this.handleSwitch(this.switchIcon)
              }}>
              <SwitchIcon ref={(icon) => (this.switchIcon = icon)}>
                <Icon name='switch' />
              </SwitchIcon>
              换一批
            </SwitchButton>
          </TrendingTitleWrapper>
          <TrendingList>
            {currentList.map((item) => (
              <TrendingItem key={item}>{item}</TrendingItem>
            ))}
          </TrendingList>
        </TrendingWrapper>
      )
    }
  }

  render() {
    const {
      focused,
      handleFocus,
      handleBlur,
      getList,
      trendingList,
    } = this.props

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
                trendingList.size === 0 && getList()
              }}
              onBlur={handleBlur}></Search>
            <span style={style} className='search-icon'>
              <Icon name='search' />
            </span>
            {this.renderTrending(focused, trendingList)}
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
  focused: state.getIn(['header', 'focused']),
  trendingList: state.getIn(['header', 'trendingList']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  currentPage: state.getIn(['header', 'currentPage']),
  total: state.getIn(['header', 'total']),
})

const mapDispatchToProps = (dispatch) => ({
  handleFocus: () => dispatch(setSearchFocus()),
  handleBlur: () => dispatch(setSearchBlur()),
  getList: () => dispatch(getTrendingList()),
  handleMouseEnter: () => dispatch(setTrendingMouseStatus(true)),
  handleMouseLeave: () => dispatch(setTrendingMouseStatus(false)),
  setCurrentPage: (page) => dispatch(setCurrentPage({ currentPage: page })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
